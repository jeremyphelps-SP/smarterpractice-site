import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section" aria-labelledby="about-section-title">
      <div className="about-section__inner">
        <div className="about-section__header">
          <p className="about-section__eyebrow">Built for dental operators</p>
          <h2 id="about-section-title">Why Smarter Practice AI Exists</h2>
        </div>
        <div className="about-section__copy">
          <p>
            Dental practice owners make constant operational decisions across
            revenue, staffing, patient experience, and growth. The answers that
            guide those decisions often live in scattered knowledge, memory,
            Google searches, and inconsistent team habits.
          </p>
          <p>
            Many dental teams know ChatGPT, but casual use is not automatically
            safe, consistent, or practice-ready. Smarter Practice AI gives teams
            a structured, dental-specific way to use AI for insurance, billing,
            scheduling, patient communication, staffing, training, compliance,
            profitability, and growth.
          </p>
        </div>
      </div>
    </section>
  );
}
