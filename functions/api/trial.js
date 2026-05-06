const requiredFields = [
  "name",
  "practiceName",
  "practiceEmail",
  "biggestWorkflowChallenge",
];

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

async function forwardPayload(payload, env = {}) {
  const forwardUrl = env.TRIAL_FORM_FORWARD_URL || env.FORM_FORWARD_URL;

  if (!forwardUrl) {
    console.warn(
      "Trial form backend is missing TRIAL_FORM_FORWARD_URL or FORM_FORWARD_URL.",
    );

    // TODO: Configure TRIAL_FORM_FORWARD_URL in Cloudflare once the final
    // email/forms provider is selected.
    return jsonResponse(
      {
        success: false,
        error: "Form backend is not configured.",
        code: "FORM_BACKEND_NOT_CONFIGURED",
      },
      501,
    );
  }

  const response = await fetch(forwardUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      source: "Smarter Practice AI website",
      formName: "15-day trial request",
      name: cleanString(payload.name),
      practiceName: cleanString(payload.practiceName),
      practiceEmail: cleanString(payload.practiceEmail),
      role: cleanString(payload.role),
      biggestWorkflowChallenge: cleanString(payload.biggestWorkflowChallenge),
      submittedAt: new Date().toISOString(),
    }),
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

  return forwardPayload(payload, env);
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
