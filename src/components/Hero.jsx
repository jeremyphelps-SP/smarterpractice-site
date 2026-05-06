import "./Hero.css";

const consoleFlow = [
  {
    title: "Real practice data in",
    body: "Reports, screenshots, EOBs, schedules, claim notes, bank CSVs, and copied text.",
  },
  {
    title: "Dental-specific coach analysis",
    body: "Claims, scheduling, case acceptance, profitability, training, and compliance context.",
  },
  {
    title: "Clear next step out",
    body: "A decision, script, checklist, appeal outline, SOP, or owner-ready summary.",
  },
];

export default function Hero() {
  return (
    <header
      className="homepage-hero"
      id="top"
      aria-labelledby="homepage-hero-title"
    >
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
            Give each role a clear, repeatable way to use AI &mdash; without
            relying on random prompts or one-off answers.
          </p>
          <p className="homepage-hero__safety-line">
            Handle patient information here; not in personal ChatGPT accounts.
          </p>
          <div className="homepage-hero__actions" aria-label="Homepage actions">
            <a
              className="homepage-hero__button homepage-hero__button--primary"
              href="#trial"
            >
              Start 15-day trial
            </a>
            <a
              className="homepage-hero__button homepage-hero__button--secondary"
              href="#scenario-matrix"
            >
              Explore practice examples
            </a>
          </div>
        </div>

        <aside
          className="homepage-hero__panel"
          aria-label="Practice decision console"
        >
          <div className="homepage-hero__panel-header">
            <p className="homepage-hero__panel-label">
              Practice decision console
            </p>
            <strong>From messy practice input to an owner-ready next step.</strong>
          </div>

          <div className="homepage-hero__console-status">
            <span>Practice-owned workspace</span>
            <span>Dental-specific coaches</span>
          </div>

          <ol className="homepage-hero__workflow" aria-label="Decision workflow">
            {consoleFlow.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.body}</span>
              </li>
            ))}
          </ol>

          <div className="homepage-hero__safety-card">
            <strong>Handle patient information here.</strong>
            <p>
              Not in personal ChatGPT accounts. Use within your
              practice&rsquo;s policies and patient authorization.
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}
