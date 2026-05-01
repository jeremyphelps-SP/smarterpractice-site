import { trackEvent } from "../utils/analytics";
import "./TrialCTA.css";

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
          <p>Start a 15-day trial. No setup required.</p>
          <p>
            Use it when something slows your team down, creates confusion, or
            needs a better answer.
          </p>
          <p>
            Most teams start by fixing one real issue, like a denied claim, a
            patient message, or a schedule gap.
          </p>
          <div
            className="trial-cta__pricing"
            style={{ margin: "18px 0 4px" }}
            aria-label="Pricing"
          >
            <p style={{ marginTop: 0, fontWeight: 700, color: "#334e68" }}>
              Pricing
            </p>
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
          <a
            className="trial-cta__button trial-cta__button--primary"
            href="#trial"
            onClick={handleTrialClick}
          >
            Start 15-day trial
          </a>
          <a
            className="trial-cta__button trial-cta__button--secondary"
            href="#scenario-matrix"
          >
            Explore examples first
          </a>
        </div>
      </div>
    </section>
  );
}
