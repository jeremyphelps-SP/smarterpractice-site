import "./Hero.css";

const practiceAreas = [
  { label: "Insurance", icon: "shieldCheck" },
  { label: "Billing", icon: "invoice" },
  { label: "Scheduling", icon: "calendar" },
  { label: "Patient communication", icon: "chat" },
  { label: "Training", icon: "book" },
  { label: "Compliance", icon: "shield", accent: true },
  { label: "Profitability", icon: "chart", accent: true },
  { label: "Practice operations", icon: "gear" },
];

function CapabilityIcon({ type }) {
  const commonProps = {
    "aria-hidden": "true",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24",
  };

  switch (type) {
    case "shieldCheck":
      return (
        <svg {...commonProps}>
          <path d="M12 3.5 19 6v5.4c0 4.2-2.7 7.4-7 9.1-4.3-1.7-7-4.9-7-9.1V6l7-2.5Z" />
          <path d="m8.8 12 2.1 2.1 4.4-4.6" />
        </svg>
      );
    case "invoice":
      return (
        <svg {...commonProps}>
          <path d="M7 3.8h9.5L20 7.3V20H7V3.8Z" />
          <path d="M16.5 3.8v3.5H20" />
          <path d="M10 10.2h5.2" />
          <path d="M10 14h3" />
          <path d="M15.7 17.2c1.2 0 2.1-.5 2.1-1.4s-.7-1.2-2-1.4c-1-.2-1.7-.5-1.7-1.3s.8-1.3 1.9-1.3" />
          <path d="M16 10.9v6.9" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...commonProps}>
          <path d="M6 5h12a2 2 0 0 1 2 2v11.5H4V7a2 2 0 0 1 2-2Z" />
          <path d="M8 3.5V7" />
          <path d="M16 3.5V7" />
          <path d="M4 9.5h16" />
          <path d="M8 13h.1" />
          <path d="M12 13h.1" />
          <path d="M16 13h.1" />
          <path d="M8 16h.1" />
          <path d="M12 16h.1" />
        </svg>
      );
    case "chat":
      return (
        <svg {...commonProps}>
          <path d="M5 17.2c-1.3-1.2-2-2.8-2-4.6C3 8.3 7 5 12 5s9 3.3 9 7.6-4 7.6-9 7.6c-1 0-2-.1-2.9-.4L5 21v-3.8Z" />
        </svg>
      );
    case "book":
      return (
        <svg {...commonProps}>
          <path d="M5 5.5c2.6-.9 4.9-.6 7 1v13c-2.1-1.6-4.4-1.9-7-1V5.5Z" />
          <path d="M19 5.5c-2.6-.9-4.9-.6-7 1v13c2.1-1.6 4.4-1.9 7-1V5.5Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3.5 19 6v5.4c0 4.2-2.7 7.4-7 9.1-4.3-1.7-7-4.9-7-9.1V6l7-2.5Z" />
          <path d="M12 8.5v4.2" />
          <path d="M12 16h.1" />
        </svg>
      );
    case "chart":
      return (
        <svg {...commonProps}>
          <path d="M5 19V9.5" />
          <path d="M11 19V5" />
          <path d="M17 19v-7.2" />
          <path d="M3.8 19h16.4" />
        </svg>
      );
    case "gear":
      return (
        <svg {...commonProps}>
          <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
          <path d="m18.4 13.8 1.5 1.2-1.6 2.8-1.9-.7c-.5.4-1 .7-1.6.9l-.3 2h-3.2l-.3-2c-.6-.2-1.1-.5-1.6-.9l-1.9.7L6 15l1.5-1.2a6.6 6.6 0 0 1 0-1.8L6 10.8 7.6 8l1.9.7c.5-.4 1-.7 1.6-.9l.3-2h3.2l.3 2c.6.2 1.1.5 1.6.9l1.9-.7 1.6 2.8-1.5 1.2c.1.6.1 1.2-.1 1.8Z" />
        </svg>
      );
    default:
      return null;
  }
}

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
          <div
            className="homepage-hero__trust-block"
            aria-label="Smarter Practice AI trust and differentiation"
          >
            <p className="homepage-hero__trust-note">
              Built on ChatGPT — structured for real dental workflows, with
              HIPAA-ready safeguards.
            </p>
            <ul className="homepage-hero__trust-list">
              <li>No prompt guessing</li>
              <li>No inconsistent team use</li>
              <li>No unmanaged PHI copy/paste workflows</li>
            </ul>
          </div>
        </div>

        <aside className="homepage-hero__panel" aria-label="Practice areas">
          <p className="homepage-hero__panel-label">Built for the business side</p>
          <div className="homepage-hero__area-grid">
            {practiceAreas.map((area) => (
              <div className="homepage-hero__area-item" key={area.label}>
                <span
                  className={`homepage-hero__area-icon${
                    area.accent ? " homepage-hero__area-icon--accent" : ""
                  }`}
                >
                  <CapabilityIcon type={area.icon} />
                </span>
                <span>{area.label}</span>
              </div>
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
