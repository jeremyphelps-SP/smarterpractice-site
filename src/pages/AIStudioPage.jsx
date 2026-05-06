import AIImageStudio from "../components/AIImageStudio";
import "./AIStudioPage.css";

const baseUrl = import.meta.env.BASE_URL;

const provideItems = [
  "Authorized patient photos",
  "Practice offers",
  "Brand direction",
  "Procedure focus",
  "Target patient audience",
  "Preferred visual style",
];

const draftItems = [
  "Case acceptance visuals",
  "Smile consultation campaign concepts",
  "Whitening, Invisalign, and veneer offer graphics",
  "Social media creative drafts",
  "Patient education visuals",
  "Internal campaign concepts for team review",
];

const useItems = [
  "Review concepts before launching a campaign",
  "Align visuals with the practice brand",
  "Improve case acceptance conversations",
  "Create better first drafts for marketing material",
  "Give the team a safer, more structured place to work with patient-related creative assets",
];

const guardrails = [
  "Use only authorized patient images and approved practice materials",
  "Do not deceptively alter clinical before/after photos",
  "Do not use AI visuals as diagnosis or clinical documentation",
  "Final materials should be reviewed by the practice before publication",
  "Handle patient information here; not in personal ChatGPT accounts",
];

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function AIStudioPage() {
  const handleDemoScroll = () => {
    document
      .getElementById("ai-studio-demo")
      ?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <main className="ai-studio-page" aria-labelledby="ai-studio-page-title">
      <section className="ai-studio-page__hero">
        <div>
          <p className="ai-studio-page__eyebrow">AI Studio</p>
          <h1 id="ai-studio-page-title">
            AI Studio for case acceptance and dental marketing visuals
          </h1>
          <p className="ai-studio-page__subheadline">
            Use authorized patient photos, practice-approved offers, and brand
            direction to create polished visual drafts for whitening, Invisalign,
            veneers, and other patient-facing campaigns.
          </p>
          <p className="ai-studio-page__safety">
            Use authorized patient photos and practice-approved materials. Handle
            patient information here; not in personal ChatGPT accounts.
          </p>
          <div className="ai-studio-page__actions">
            <a href={`${baseUrl}#trial`}>Start 15-day trial</a>
            <button onClick={handleDemoScroll} type="button">
              See the visual workflow
            </button>
          </div>
        </div>
        <aside className="ai-studio-page__console" aria-label="AI Studio workflow summary">
          <p>Practice creative workflow</p>
          <ol>
            <li>Authorized inputs in</li>
            <li>Brand-aligned concepts drafted</li>
            <li>Team reviews before publication</li>
          </ol>
        </aside>
      </section>

      <section className="ai-studio-page__overview" aria-label="AI Studio capabilities">
        <article>
          <p className="ai-studio-page__section-label">What you can provide</p>
          <ItemList items={provideItems} />
        </article>
        <article>
          <p className="ai-studio-page__section-label">What AI Studio can draft</p>
          <ItemList items={draftItems} />
        </article>
      </section>

      <section className="ai-studio-page__use" aria-label="How your team can use AI Studio outputs">
        <div className="ai-studio-page__section-heading">
          <p className="ai-studio-page__section-label">How your team can use the outputs</p>
          <h2>Better first drafts for patient-facing creative work.</h2>
          <p>
            AI Studio supports case acceptance and marketing workflows by giving
            the team a structured place to explore visual directions before
            anyone publishes or presents final material.
          </p>
        </div>
        <ItemList items={useItems} />
      </section>

      <div className="ai-studio-page__demo" id="ai-studio-demo">
        <AIImageStudio />
      </div>

      <section className="ai-studio-page__guardrails" aria-label="Responsible AI Studio use">
        <div className="ai-studio-page__section-heading">
          <p className="ai-studio-page__section-label">Guardrails for responsible use</p>
          <h2>Visual drafting support, not clinical decision-making.</h2>
        </div>
        <ItemList items={guardrails} />
      </section>
    </main>
  );
}
