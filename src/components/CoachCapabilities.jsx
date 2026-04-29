import { useState } from "react";
import { coachCapabilityCategories } from "../data/coachCapabilities";
import "./CoachCapabilities.css";

export default function CoachCapabilities() {
  const [selectedCategoryName, setSelectedCategoryName] = useState(
    coachCapabilityCategories[0]?.category || "",
  );
  const selectedCategory =
    coachCapabilityCategories.find(
      (category) => category.category === selectedCategoryName,
    ) || coachCapabilityCategories[0];

  return (
    <section className="coach-capabilities" aria-labelledby="coach-capabilities-title">
      <div className="coach-capabilities__intro">
        <p className="coach-capabilities__eyebrow">PRACTICE-READY AI SUPPORT</p>
        <h2 id="coach-capabilities-title">
          Role-specific AI support for the work your practice already does
        </h2>
        <p>
          Give each part of the practice a clearer way to draft, decide,
          document, and follow through &mdash; without starting from a blank page.
        </p>
      </div>

      <div className="coach-capabilities__layout">
        <nav
          className="coach-capabilities__selector"
          aria-label="Practice capability categories"
        >
          <p className="coach-capabilities__selector-label">
            Practice areas
          </p>
          <div className="coach-capabilities__selector-list">
            {coachCapabilityCategories.map((category) => {
              const isSelected = category.category === selectedCategory.category;

              return (
                <button
                  key={category.category}
                  type="button"
                  className="coach-capabilities__category-button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategoryName(category.category)}
                >
                  <span>{category.category}</span>
                  <small>{category.summary}</small>
                </button>
              );
            })}
          </div>
        </nav>

        <article
          className="coach-capabilities__detail"
          aria-labelledby="coach-capabilities-detail-title"
        >
          <div className="coach-capabilities__detail-header">
            <p className="coach-capabilities__detail-kicker">
              Selected practice area
            </p>
            <h3 id="coach-capabilities-detail-title">
              {selectedCategory.category}
            </h3>
            <p>{selectedCategory.summary}</p>
          </div>

          <div className="coach-capabilities__detail-grid">
            <section className="coach-capabilities__detail-section">
              <p className="coach-capabilities__label">Coaches included</p>
              <ul className="coach-capabilities__coach-list">
                {selectedCategory.capabilities.map((capability) => (
                  <li key={capability.name}>{capability.name}</li>
                ))}
              </ul>
            </section>

            <section className="coach-capabilities__detail-section">
              <p className="coach-capabilities__label">Practice outcome</p>
              <p className="coach-capabilities__outcome">
                {selectedCategory.outcome}
              </p>
            </section>

            <section className="coach-capabilities__detail-section coach-capabilities__detail-section--wide">
              <p className="coach-capabilities__label">Example tasks</p>
              <ul className="coach-capabilities__task-list">
                {selectedCategory.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
