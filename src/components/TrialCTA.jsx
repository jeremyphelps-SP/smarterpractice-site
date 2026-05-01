import { useState } from "react";
import { trackEvent } from "../utils/analytics";
import "./TrialCTA.css";

const formspreeEndpoint = "https://formspree.io/f/xjglvnno";

export default function TrialCTA({
  selectedChallenge = null,
  selectedQuickWin = null,
}) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    trackEvent("trial_form_submitted", {
      selectedChallenge,
      selectedQuickWin: selectedQuickWin?.key,
      ctaLocation: "trial_cta",
    });

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or email jeremy@smarterpractice.ai.",
      );
    }
  };

  return (
    <section className="trial-cta" id="trial" aria-labelledby="trial-cta-title">
      <div className="trial-cta__inner">
        <div>
          <h2 id="trial-cta-title">
            Start with one real workflow from your practice.
          </h2>
          <p>Request a 15-day trial.</p>
          <p>
            Send a quick note and I&apos;ll set up your trial with the right
            starting workflow.
          </p>

          <div className="trial-cta__pricing" aria-label="Pricing">
            <p className="trial-cta__pricing-label">Pricing</p>
            <p>
              Free 15-day trial.
              <br />
              <br />
              $60/month for the first account
              <br />
              $45/month for each additional team member
              <br />
              <br />
              No contracts. Cancel anytime.
            </p>
          </div>
        </div>

        <div className="trial-cta__actions">
          {status === "success" ? (
            <p className="trial-cta__success">
              You&apos;re all set. Jeremy will review your request and follow up
              to set up your Smarter Practice AI workspace. Watch for an
              invitation email from OpenAI once your workspace is ready.
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
                  This goes directly to Jeremy.
                </p>

                <button
                  className="trial-cta__button trial-cta__button--primary"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? "Sending..."
                    : "Request 15-day trial"}
                </button>
              </form>

              <a
                className="trial-cta__button trial-cta__button--secondary"
                href="#scenario-matrix"
              >
                Explore examples first
              </a>

              <p className="trial-cta__expectation">
                After setup, your team will receive an invitation email from
                OpenAI to join your Smarter Practice AI workspace.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
