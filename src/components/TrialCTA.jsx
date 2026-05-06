import { useState } from "react";
import { trackEvent } from "../utils/analytics";
import { anchorHref, routeHref } from "../utils/routes";
import "./TrialCTA.css";

const cloudflareTrialEndpoint = "/api/trial";
const formUnavailableMessage =
  "The form is temporarily unavailable. Please email jeremy@smarterpractice.ai.";
const formValidationMessage = "Please check the required fields and try again.";

class TrialFormError extends Error {
  constructor(publicMessage) {
    super(publicMessage);
    this.publicMessage = publicMessage;
  }
}

function formDataToPayload(formData) {
  return Object.fromEntries(formData.entries());
}

async function submitToCloudflareEndpoint(formData) {
  const response = await fetch(cloudflareTrialEndpoint, {
    method: "POST",
    body: JSON.stringify(formDataToPayload(formData)),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    throw new TrialFormError(formUnavailableMessage);
  }

  const result = await response.json();

  if (response.ok && result.success !== false) {
    return true;
  }

  if (response.status >= 500 || result.code === "FORM_BACKEND_NOT_CONFIGURED") {
    throw new TrialFormError(formUnavailableMessage);
  }

  throw new TrialFormError(result.error || formValidationMessage);
}

export default function TrialCTA({ selectedChallenge = null }) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    trackEvent("trial_form_submitted", {
      selectedChallenge,
      ctaLocation: "trial_cta",
    });

    try {
      await submitToCloudflareEndpoint(formData);
      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof TrialFormError
          ? error.publicMessage
          : "Something went wrong. Please try again or email jeremy@smarterpractice.ai.",
      );
    }
  };

  return (
    <section className="trial-cta" id="trial" aria-labelledby="trial-cta-title">
      <div className="trial-cta__inner">
        <div>
          <h2 id="trial-cta-title">
            Fix a real problem in your practice this week.
          </h2>
          <p>
            Start your 15-day trial with a real workflow your team is dealing
            with now.
          </p>

          <div className="trial-cta__pricing" aria-label="Pricing">
            <p className="trial-cta__pricing-label">Pricing</p>
            <strong>Free 15-day trial</strong>
            <p>
              $60/month for your first account
              <br />
              $45/month per additional team member
              <br />
              <br />
              No contracts. Cancel anytime.
            </p>
          </div>

          <div className="trial-cta__access-summary">
            <p>
              After setup, your team receives access to your Smarter Practice
              AI workspace with dental-specific coaches inside the familiar
              ChatGPT interface.
            </p>
            <p>
              Handle patient information here &mdash; not in personal ChatGPT
              accounts.
            </p>
            <a href={routeHref("howItWorks")}>How access works &rarr;</a>
          </div>
        </div>

        <div className="trial-cta__actions">
          {status === "success" ? (
            <p className="trial-cta__success">
              You&apos;re all set. Jeremy will review your request and follow up
              to set up your Smarter Practice AI workspace.
            </p>
          ) : (
            <>
              <p className="trial-cta__form-intro">
                No sales call required. Just a quick setup based on your
                practice.
              </p>

              <form className="trial-cta__form" onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="source"
                  value="Smarter Practice AI website"
                />
                <input
                  type="hidden"
                  name="formName"
                  value="15-day trial request"
                />

                <label className="trial-cta__field">
                  <span>Name</span>
                  <input type="text" name="name" required />
                </label>

                <label className="trial-cta__field">
                  <span>Practice Name</span>
                  <input type="text" name="practiceName" required />
                </label>

                <label className="trial-cta__field">
                  <span>Practice Email</span>
                  <input type="email" name="practiceEmail" required />
                </label>

                <label className="trial-cta__field">
                  <span>Role</span>
                  <input type="text" name="role" />
                </label>

                <label className="trial-cta__field trial-cta__field--full">
                  <span>
                    Biggest workflow challenge or anything else we should know
                  </span>
                  <textarea
                    name="biggestWorkflowChallenge"
                    rows="4"
                    required
                  />
                </label>

                {status === "error" && (
                  <p className="trial-cta__error">{errorMessage}</p>
                )}

                <p className="trial-cta__microcopy">
                  This goes directly to Jeremy. You&rsquo;ll get your setup and
                  next steps.
                </p>

                <button
                  className="trial-cta__button trial-cta__button--primary"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? "Sending..."
                    : "Start my 15-day trial"}
                </button>
              </form>

              <a
                className="trial-cta__button trial-cta__button--secondary"
                href={anchorHref("scenario-matrix")}
              >
                Explore examples first
              </a>

              <p className="trial-cta__expectation">
                After setup, your team receives access to your Smarter Practice
                AI workspace.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
