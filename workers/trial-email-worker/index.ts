type EmailMessage = {
  to: string | string[];
  from: string | { email: string; name: string };
  replyTo?: string;
  subject: string;
  text: string;
};

type SendEmailBinding = {
  send(message: EmailMessage): Promise<unknown>;
};

type Env = {
  SEND_EMAIL: SendEmailBinding;
  TRIAL_EMAIL_FROM?: string;
};

type TrialSubmission = {
  source?: unknown;
  formName?: unknown;
  name?: unknown;
  practiceName?: unknown;
  practiceEmail?: unknown;
  role?: unknown;
  biggestWorkflowChallenge?: unknown;
  submittedAt?: unknown;
};

const requiredFields = [
  "name",
  "practiceName",
  "practiceEmail",
  "biggestWorkflowChallenge",
] as const;

const trialRecipientEmail = "jeremy@smarterpractice.ai";
const defaultSenderEmail = "forms@smarterpractice.ai";

const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: jsonHeaders,
  });
}

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeSubmission(payload: TrialSubmission) {
  return {
    source: cleanString(payload.source) || "Smarter Practice AI website",
    formName: cleanString(payload.formName) || "15-day trial request",
    name: cleanString(payload.name),
    practiceName: cleanString(payload.practiceName),
    practiceEmail: cleanString(payload.practiceEmail),
    role: cleanString(payload.role) || "Not provided",
    biggestWorkflowChallenge: cleanString(payload.biggestWorkflowChallenge),
    submittedAt: cleanString(payload.submittedAt) || new Date().toISOString(),
  };
}

function validateSubmission(payload: TrialSubmission) {
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

function buildEmailText(submission: ReturnType<typeof normalizeSubmission>) {
  return [
    "New Smarter Practice AI trial request",
    "",
    `Name: ${submission.name}`,
    `Practice name: ${submission.practiceName}`,
    `Practice email: ${submission.practiceEmail}`,
    `Role: ${submission.role}`,
    "",
    "Workflow challenge or message:",
    submission.biggestWorkflowChallenge,
    "",
    `Source: ${submission.source}`,
    `Form: ${submission.formName}`,
    `Submitted: ${submission.submittedAt}`,
  ].join("\n");
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return jsonResponse(
        {
          success: false,
          error: "Method not allowed.",
        },
        405,
      );
    }

    let payload: TrialSubmission;

    try {
      payload = (await request.json()) as TrialSubmission;
    } catch {
      return jsonResponse(
        {
          success: false,
          error: "Invalid form payload.",
        },
        400,
      );
    }

    const validation = validateSubmission(payload);

    if (!validation.valid) {
      return jsonResponse(validation.body, validation.status);
    }

    const submission = normalizeSubmission(payload);
    const senderEmail = cleanString(env.TRIAL_EMAIL_FROM) || defaultSenderEmail;

    try {
      await env.SEND_EMAIL.send({
        to: trialRecipientEmail,
        from: {
          email: senderEmail,
          name: "Smarter Practice AI",
        },
        replyTo: submission.practiceEmail,
        subject: "New Smarter Practice AI trial request",
        text: buildEmailText(submission),
      });

      return jsonResponse({ success: true });
    } catch (error) {
      const emailError = error as { code?: string; name?: string };

      console.error("Trial email Worker send failed.", {
        code: emailError?.code,
        name: emailError?.name,
      });

      return jsonResponse(
        {
          success: false,
          error: "Form email delivery failed.",
          code: "FORM_EMAIL_PROVIDER_ERROR",
        },
        502,
      );
    }
  },
};
