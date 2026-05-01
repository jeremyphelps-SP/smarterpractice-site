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
    <header
      className="homepage-hero"
      id="top"
      aria-labelledby="homepage-hero-title"
    >
      <div className="homepage-hero__brand-bar">
        <a
          className="homepage-hero__wordmark"
          href="#top"
          aria-label="Smarter Practice AI home"
        >
          <span className="homepage-hero__mark">SP</span>
          <span>
            <span className="brand-primary">Smarter Practice</span>
            <span className="brand-secondary">AI</span>
          </span>
        </a>
      </div>

      <div className="homepage-hero__inner">
        <div className="homepage-hero__content">
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
              Turn messy, day-to-day practice problems into clear next steps
              your team can actually use.
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}
