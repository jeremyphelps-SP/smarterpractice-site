import { trackEvent } from "../utils/analytics";
import "./TrialCTA.css";

const trialEmail = "jeremy@smarterpractice.ai";
const trialEmailSubject = "Smarter Practice AI 15-Day Trial Request";
const trialEmailBody = `Name:
Practice Name:
Practice Email (for account setup):
Role:
Biggest Workflow Challenge:

Anything else we should know about your practice:`;
const trialMailtoHref = `mailto:${trialEmail}?subject=${encodeURIComponent(
  trialEmailSubject,
)}&body=${encodeURIComponent(trialEmailBody)}`;

export default function TrialCTA({
  selectedChallenge = null,
  selectedQuickWin = null,
}) {
  const handleTrialClick = () => {
    trackEvent("trial_cta_clicked", {
      selectedChallenge,
      selectedQuickWin: selectedQuickWin?.key,
      ctaLocation: "quick_wins",
    });
  };

  return (
    <section className="trial-cta" id="trial" aria-labelledby="trial-cta-title">
      <div className="trial-cta__inner">
        <div>
          <h2 id="trial-cta-title">
            Pick one problem. Get a clear next step your team can use immediately.
          </h2>
          <p>Request a 15-day trial.</p>
          <p>
            Send a few details and we&apos;ll set up your trial with the right
            starting workflow.
          </p>
          <p>
            Use it when something slows your team down, creates confusion, or
            needs a better answer.
          </p>
        </div>
        <div className="trial-cta__actions">
          <a
            className="trial-cta__button trial-cta__button--primary"
            href={trialMailtoHref}
            onClick={handleTrialClick}
          >
            Email Jeremy to request a trial
          </a>
          <p className="trial-cta__microcopy">
            This opens a pre-filled email so we can set up your workspace
            correctly.
          </p>
          <a
            className="trial-cta__button trial-cta__button--secondary"
            href="#scenario-matrix"
          >
            Explore examples first
          </a>
          <p className="trial-cta__expectation">
            After setup, your team will receive an invitation email from OpenAI
            to join your Smarter Practice AI workspace.
          </p>
        </div>
      </div>
    </section>
  );
}
