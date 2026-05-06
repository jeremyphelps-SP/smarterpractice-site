const requiredFields = [
  "name",
  "practiceName",
  "practiceEmail",
  "biggestWorkflowChallenge",
];

const trialFormServiceBindingName = "TRIAL_FORM_SERVICE";
const directEmailBindingNames = ["TRIAL_EMAIL", "SEND_EMAIL"];
const trialRecipientEmail = "jeremy@smarterpractice.ai";
const defaultSenderEmail = "forms@smarterpractice.ai";

const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: jsonHeaders,
  });
}

function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

async function readPayload(request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  if (
    contentType.includes("multipart/form-data") ||
    contentType.includes("application/x-www-form-urlencoded")
  ) {
    return Object.fromEntries(await request.formData());
  }

  return {};
}

function validatePayload(payload) {
  const missingFields = requiredFields.filter(
    (field) => !cleanString(payload[field]),
  );

  if (missingFields.length > 0) {
    return {
      valid: false,
      status: 400,
      body: {
        success: false,
        error: "Missing required fields.",
        fields: missingFields,
      },
    };
  }

  const email = cleanString(payload.practiceEmail);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      valid: false,
      status: 400,
      body: {
        success: false,
        error: "Enter a valid practice email.",
        fields: ["practiceEmail"],
      },
    };
  }

  return { valid: true };
}

function normalizedSubmission(payload) {
  return {
    source: cleanString(payload.source) || "Smarter Practice AI website",
    formName: cleanString(payload.formName) || "15-day trial request",
    name: cleanString(payload.name),
    practiceName: cleanString(payload.practiceName),
    practiceEmail: cleanString(payload.practiceEmail),
    role: cleanString(payload.role) || "Not provided",
    biggestWorkflowChallenge: cleanString(payload.biggestWorkflowChallenge),
    submittedAt: new Date().toISOString(),
  };
}

function buildTrialEmailText(submission) {
  return [
    "New Smarter Practice AI trial request",
    "",
    `Name: ${submission.name}`,
    `Practice name: ${submission.practiceName}`,
    `Practice email: ${submission.practiceEmail}`,
    `Role: ${submission.role}`,
    "",
    "Biggest workflow challenge or notes:",
    submission.biggestWorkflowChallenge,
    "",
    `Source: ${submission.source}`,
    `Form: ${submission.formName}`,
    `Submitted: ${submission.submittedAt}`,
  ].join("\n");
}

function getTrialFormService(env = {}) {
  const binding = env[trialFormServiceBindingName];

  return binding && typeof binding.fetch === "function" ? binding : null;
}

function getDirectEmailBinding(env = {}) {
  return (
    directEmailBindingNames
      .map((bindingName) => env[bindingName])
      .find((binding) => binding && typeof binding.send === "function") || null
  );
}

function getForwardUrl(env = {}) {
  return env.TRIAL_FORM_FORWARD_URL || env.FORM_FORWARD_URL || "";
}

async function sendToTrialFormService(payload, env = {}) {
  const trialFormService = getTrialFormService(env);

  if (!trialFormService) {
    return { handled: false };
  }

  const submission = normalizedSubmission(payload);
  let response;

  try {
    response = await trialFormService.fetch(
      new Request("https://smarterpractice-trial-email/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      }),
    );
  } catch (error) {
    console.error("Trial form service binding request failed.", {
      code: error?.code,
      name: error?.name,
    });

    return {
      handled: true,
      response: jsonResponse(
        {
          success: false,
          error: "Form email delivery failed.",
          code: "FORM_EMAIL_SERVICE_ERROR",
        },
        502,
      ),
    };
  }

  if (response.ok) {
    return { handled: true, response: jsonResponse({ success: true }) };
  }

  console.error("Trial form service binding rejected request.", {
    status: response.status,
  });

  return {
    handled: true,
    response: jsonResponse(
      {
        success: false,
        error: "Form email delivery failed.",
        code: "FORM_EMAIL_SERVICE_ERROR",
      },
      response.status >= 500 ? 502 : response.status,
    ),
  };
}

async function sendDirectEmailPayload(payload, env = {}) {
  const emailBinding = getDirectEmailBinding(env);

  if (!emailBinding) {
    return { handled: false };
  }

  const submission = normalizedSubmission(payload);
  const senderEmail = cleanString(env.TRIAL_EMAIL_FROM) || defaultSenderEmail;

  try {
    await emailBinding.send({
      to: trialRecipientEmail,
      from: {
        email: senderEmail,
        name: "Smarter Practice AI",
      },
      replyTo: submission.practiceEmail,
      subject: "New Smarter Practice AI trial request",
      text: buildTrialEmailText(submission),
    });

    return { handled: true, response: jsonResponse({ success: true }) };
  } catch (error) {
    console.error("Trial form email binding failed.", {
      code: error?.code,
      name: error?.name,
    });

    return {
      handled: true,
      response: jsonResponse(
        {
          success: false,
          error: "Form email delivery failed.",
          code: "FORM_EMAIL_PROVIDER_ERROR",
        },
        502,
      ),
    };
  }
}

async function forwardPayload(payload, env = {}) {
  const forwardUrl = getForwardUrl(env);

  if (!forwardUrl) {
    console.warn(
      "Trial form backend is missing TRIAL_FORM_SERVICE, TRIAL_EMAIL, SEND_EMAIL, TRIAL_FORM_FORWARD_URL, or FORM_FORWARD_URL.",
    );

    return jsonResponse(
      {
        success: false,
        error: "Form backend is not configured.",
        code: "FORM_BACKEND_NOT_CONFIGURED",
      },
      501,
    );
  }

  const submission = normalizedSubmission(payload);

  const response = await fetch(forwardUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    console.error("Trial form provider rejected request.", {
      status: response.status,
    });

    return jsonResponse(
      {
        success: false,
        error: "Form provider rejected the request.",
        code: "FORM_PROVIDER_ERROR",
      },
      502,
    );
  }

  return jsonResponse({ success: true });
}

async function deliverPayload(payload, env = {}) {
  const serviceResult = await sendToTrialFormService(payload, env);

  if (serviceResult.handled) {
    return serviceResult.response;
  }

  const emailResult = await sendDirectEmailPayload(payload, env);

  if (emailResult.handled) {
    if (emailResult.response.ok || !getForwardUrl(env)) {
      return emailResult.response;
    }

    console.warn("Trial form email binding failed; trying forwarding URL.");
  }

  return forwardPayload(payload, env);
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
    },
  });
}

export async function onRequestPost({ request, env = {} }) {
  let payload;

  try {
    payload = await readPayload(request);
  } catch {
    return jsonResponse(
      {
        success: false,
        error: "Invalid form payload.",
      },
      400,
    );
  }

  const validation = validatePayload(payload);

  if (!validation.valid) {
    return jsonResponse(validation.body, validation.status);
  }

  return deliverPayload(payload, env);
}

export async function onRequest() {
  return jsonResponse(
    {
      success: false,
      error: "Method not allowed.",
    },
    405,
  );
}
