import "./Hero.css";

const practiceAreas = [
  "Insurance",
  "Billing",
  "Scheduling",
  "Patient communication",
  "Training",
  "Compliance",
  "Profitability",
  "Practice operations",
];

export default function Hero() {
  return (
    <header className="homepage-hero" aria-labelledby="homepage-hero-title">
      <div className="homepage-hero__inner">
        <div className="homepage-hero__content">
          <p className="homepage-hero__brand">Smarter Practice AI</p>
          <h1 id="homepage-hero-title">
            ChatGPT, structured for smarter dental practice ownership.
          </h1>
          <p className="homepage-hero__lead">
            Help your dental team use AI for insurance, billing, scheduling,
            patient communication, training, compliance, profitability, and
            practice operations.
          </p>
          <p className="homepage-hero__support">
            Give each role a clearer way to draft, decide, document, and follow
            through without relying on random prompts or one-off answers.
          </p>
          <div className="homepage-hero__actions" aria-label="Homepage actions">
            <a
              className="homepage-hero__button homepage-hero__button--primary"
              href="#scenario-matrix"
            >
              Explore practice examples
            </a>
            <a
              className="homepage-hero__button homepage-hero__button--secondary"
              href="#trial"
            >
              Start 15-day trial
            </a>
          </div>
          <p className="homepage-hero__disclaimer">
            Smarter Practice AI is not affiliated with or endorsed by OpenAI.
          </p>
        </div>

        <aside className="homepage-hero__panel" aria-label="Practice areas">
          <p className="homepage-hero__panel-label">Built for the business side</p>
          <div className="homepage-hero__area-grid">
            {practiceAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
          <div className="homepage-hero__outcome">
            <strong>From blank page to next step</strong>
            <p>
              Turn common practice problems into clearer scripts, checklists,
              follow-up plans, and team-ready recommendations.
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}
