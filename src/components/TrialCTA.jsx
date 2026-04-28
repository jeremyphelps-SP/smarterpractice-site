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
    <section className="trial-cta" aria-labelledby="trial-cta-title">
      <div className="trial-cta__inner">
        <div>
          <h2 id="trial-cta-title">
            Try one workflow in your practice this week.
          </h2>
          <p>
            Start a 15-day trial and see what your team can create with Smarter
            Practice AI.
          </p>
          <p>No setup. Your team can use this immediately.</p>
          <p className="trial-cta__differentiator">
            Built for dental practices - not a generic AI chat tool.
          </p>
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
