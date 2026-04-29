import { coachCapabilityCategories } from "../data/coachCapabilities";
import "./CoachCapabilities.css";

export default function CoachCapabilities() {
  return (
    <section className="coach-capabilities" aria-labelledby="coach-capabilities-title">
      <div className="coach-capabilities__intro">
        <p className="coach-capabilities__eyebrow">PRACTICE-READY AI SUPPORT</p>
        <h2 id="coach-capabilities-title">
          Role-specific AI support for the work your practice already does
        </h2>
        <p>
          Smarter Practice AI gives dental teams structured coaches, advisors,
          and studios for claims, PPO strategy, staffing, compliance, growth,
          patient communication, technology, and case acceptance.
        </p>
      </div>

      <div className="coach-capabilities__grid">
        {coachCapabilityCategories.map((category) => (
          <article className="coach-capabilities__category" key={category.category}>
            <div className="coach-capabilities__category-header">
              <h3>{category.category}</h3>
              <p>{category.summary}</p>
            </div>
            <div className="coach-capabilities__items">
              {category.capabilities.map((capability) => (
                <div className="coach-capabilities__item" key={capability.name}>
                  <h4>{capability.name}</h4>
                  <p>{capability.description}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
