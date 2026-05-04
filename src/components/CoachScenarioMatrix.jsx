import { useMemo, useState } from "react";
import { homepageScenarios } from "../data/homepageScenarios";

const buttonResetStyle = {
  font: "inherit",
  cursor: "pointer",
};

const challengeLabels = {
  "owner-bottleneck": "Fix the schedule",
  "patient-communication": "Help patients say yes",
  "insurance-billing": "Get paid faster",
  "team-training": "Build a stronger team",
  "growth-case-acceptance": "Grow production",
};

const primarySections = [
  ["uploadThis", "Upload this"],
  ["analysis", "What Smarter Practice AI analyzes"],
  ["reveals", "What this reveals"],
  ["decision", "Decision it drives"],
  ["outcome", "Outcome"],
];

const expandedSections = [
  ["examplePracticeData", "Example practice data"],
  ["dataReveals", "What the data reveals"],
  ["decisionDrives", "Decision it drives"],
  ["teamNext", "What your team can do next"],
  ["whyItMatters", "Why it matters"],
];

function groupScenariosByCategory(scenarios) {
  return scenarios.reduce((groups, scenario) => {
    const category = scenario.category || "Uncategorized";

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(scenario);
    return groups;
  }, {});
}

function asList(value) {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value.filter(Boolean) : [value];
}

function renderSectionValue(value) {
  const items = asList(value);

  if (!items.length) {
    return null;
  }

  if (items.length === 1) {
    return <p>{items[0]}</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ScenarioSection({ label, value, isDecision = false }) {
  if (!value) {
    return null;
  }

  return (
    <div
      className={
        isDecision
          ? "scenario-matrix__analysis-section scenario-matrix__analysis-section--decision"
          : "scenario-matrix__analysis-section"
      }
    >
      <dt className="scenario-matrix__label">{label}</dt>
      <dd className="scenario-matrix__body">{renderSectionValue(value)}</dd>
    </div>
  );
}

function getExpandedValue(scenario, key) {
  return scenario.expanded?.[key];
}

export default function CoachScenarioMatrix({ selectedChallenge = null }) {
  const filteredScenarios = useMemo(() => {
    if (!selectedChallenge) {
      return homepageScenarios;
    }

    return homepageScenarios.filter((scenario) =>
      scenario.challenges?.includes(selectedChallenge),
    );
  }, [selectedChallenge]);

  const scenariosByCategory = useMemo(
    () => groupScenariosByCategory(filteredScenarios),
    [filteredScenarios],
  );
  const categories = useMemo(
    () => Object.keys(scenariosByCategory),
    [scenariosByCategory],
  );

  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "");
  const activeCategory = categories.includes(selectedCategory)
    ? selectedCategory
    : categories[0] || "";
  const selectedScenarios = useMemo(
    () => scenariosByCategory[activeCategory] || [],
    [activeCategory, scenariosByCategory],
  );
  const [selectedScenarioId, setSelectedScenarioId] = useState(
    selectedScenarios[0]?.id || "",
  );
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const selectedScenario =
    selectedScenarios.find((scenario) => scenario.id === selectedScenarioId) ||
    selectedScenarios[0];
  const selectedChallengeLabel = selectedChallenge
    ? challengeLabels[selectedChallenge]
    : "";

  const handleCategorySelect = (category) => {
    const nextScenarios = scenariosByCategory[category] || [];
    setSelectedCategory(category);
    setSelectedScenarioId(nextScenarios[0]?.id || "");
    setIsDetailsOpen(false);
  };

  const handleScenarioSelect = (scenarioId) => {
    setSelectedScenarioId(scenarioId);
    setIsDetailsOpen(false);
  };

  if (!categories.length) {
    return (
      <main className="scenario-matrix">
        <h2 className="scenario-matrix__title">Scenario Matrix</h2>
        <p className="scenario-matrix__intro-text">
          {selectedChallengeLabel
            ? "No examples found for this challenge yet."
            : "No scenarios are available yet."}
        </p>
      </main>
    );
  }

  return (
    <main className="scenario-matrix">
      <section className="scenario-matrix__intro">
        <p className="scenario-matrix__bridge">
          Real practice data. Clearer business decisions.
        </p>
        <h2 className="scenario-matrix__title">
          See what your data exposes before you make the call.
        </h2>
        <p className="scenario-matrix__intro-text">
          Upload reports, screenshots, exports, and copied notes. Smarter
          Practice AI connects the data, surfaces the hidden issue, and points
          to the operational decision.
        </p>
        {selectedChallengeLabel && (
          <p className="scenario-matrix__challenge-label">
            Examples focused on: {selectedChallengeLabel}
          </p>
        )}
      </section>

      <section
        aria-label="Scenario categories"
        className="scenario-matrix__categories"
      >
        {categories.map((category) => {
          const isSelected = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => handleCategorySelect(category)}
              aria-pressed={isSelected}
              className="scenario-matrix__category-button"
              style={buttonResetStyle}
            >
              {category}
            </button>
          );
        })}
      </section>

      <section className="scenario-matrix__layout">
        <aside
          className="scenario-matrix__scenario-list"
          aria-label={`${activeCategory} scenarios`}
        >
          <h3 className="scenario-matrix__list-title">{activeCategory}</h3>
          <div className="scenario-matrix__scenario-list-items">
            {selectedScenarios.map((scenario) => {
              const isSelected = scenario.id === selectedScenario?.id;

              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => handleScenarioSelect(scenario.id)}
                  aria-pressed={isSelected}
                  style={buttonResetStyle}
                  className="scenario-matrix__scenario-button"
                >
                  {scenario.scenarioTitle}
                </button>
              );
            })}
          </div>
        </aside>

        {selectedScenario && (
          <article className="scenario-matrix__detail-card">
            <p className="scenario-matrix__coach">{selectedScenario.coach}</p>
            <h3 className="scenario-matrix__scenario-title">
              {selectedScenario.scenarioTitle}
            </h3>
            <p className="scenario-matrix__use-case">
              <span>Use this when:</span> {selectedScenario.useWhen}
            </p>

            <dl className="scenario-matrix__detail-list scenario-matrix__analysis-flow">
              {primarySections.map(([key, label]) => (
                <ScenarioSection
                  key={key}
                  label={label}
                  value={selectedScenario[key]}
                  isDecision={key === "decision"}
                />
              ))}
            </dl>

            <p className="scenario-matrix__outcome scenario-matrix__trial-link">
              <a href="#trial">
                Want this for your practice? Start a 15-day trial &rarr;
              </a>
            </p>

            <button
              type="button"
              className="scenario-matrix__details-toggle"
              aria-expanded={isDetailsOpen}
              onClick={() => setIsDetailsOpen((isOpen) => !isOpen)}
            >
              {isDetailsOpen ? "Show less" : "Show more"}
            </button>

            {isDetailsOpen && (
              <div className="scenario-matrix__details-panel">
                <dl className="scenario-matrix__detail-list">
                  {expandedSections.map(([key, label]) => (
                    <ScenarioSection
                      key={key}
                      label={label}
                      value={getExpandedValue(selectedScenario, key)}
                    />
                  ))}
                  <div>
                    <dt className="scenario-matrix__label">Tags</dt>
                    <dd className="scenario-matrix__tags">
                      {selectedScenario.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            )}
          </article>
        )}
      </section>
    </main>
  );
}
