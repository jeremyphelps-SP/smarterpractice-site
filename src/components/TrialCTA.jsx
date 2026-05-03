import { useState } from "react";
import { trackEvent } from "../utils/analytics";
import "./TrialCTA.css";

const formspreeEndpoint = "https://formspree.io/f/xjglvnno";

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
            Fix a real problem in your practice this week &mdash; with your
            team actually using it.
          </h2>
          <p>
            Start your 15-day trial with a real workflow your team is dealing
            with right now.
          </p>
          <p>
            You&rsquo;ll get a structured setup so your team knows exactly how to
            use it from day one.
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

          <div className="trial-cta__next-steps">
            <p className="trial-cta__next-steps-label">What happens next</p>
            <ul>
              <li>You submit this form</li>
              <li>Your trial is set up with a real workflow</li>
              <li>Your team gets access and can start immediately</li>
            </ul>
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
