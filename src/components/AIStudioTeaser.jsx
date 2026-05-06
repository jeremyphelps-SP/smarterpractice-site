import "./AIStudioTeaser.css";

const baseUrl = import.meta.env.BASE_URL;

const bullets = [
  "Use authorized patient photos and approved offers",
  "Generate brand-aligned visual concepts",
  "Support case acceptance, whitening, Invisalign, veneers, and marketing campaigns",
];

export default function AIStudioTeaser() {
  return (
    <section className="ai-studio-teaser" aria-labelledby="ai-studio-teaser-title">
      <div className="ai-studio-teaser__inner">
        <div className="ai-studio-teaser__content">
          <p className="ai-studio-teaser__eyebrow">AI Studio</p>
          <h2 id="ai-studio-teaser-title">
            Create better case acceptance and marketing visuals
          </h2>
          <p className="ai-studio-teaser__copy">
            Turn authorized patient photos, practice offers, and brand direction
            into polished visual drafts your team can review and refine.
          </p>
          <ul className="ai-studio-teaser__bullets">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="ai-studio-teaser__actions">
            <a className="ai-studio-teaser__primary" href={`${baseUrl}#/ai-studio`}>
              Explore AI Studio
            </a>
            <a className="ai-studio-teaser__secondary" href={`${baseUrl}#trial`}>
              Start 15-day trial
            </a>
          </div>
        </div>

        <div className="ai-studio-teaser__preview" aria-hidden="true">
          <div className="ai-studio-teaser__preview-header">
            <span>Practice-approved creative draft</span>
            <strong>AI Studio</strong>
          </div>
          <div className="ai-studio-teaser__preview-body">
            <img
              src={`${baseUrl}images/ai-studio/rolex.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
