import { useEffect, useMemo, useState } from "react";
import { scenarios } from "../data/scenarios";

const buttonResetStyle = {
  font: "inherit",
  cursor: "pointer",
};

const challengeLabels = {
  "owner-bottleneck": "Reduce owner interruptions",
  "patient-communication": "Improve patient communication",
  "insurance-billing": "Clean up insurance and billing workflows",
  "team-training": "Train the team faster",
  "growth-case-acceptance": "Grow production and case acceptance",
};

const quickWinScenarioIds = {
  "missed-appointment": "scn-015",
  "insurance-explanation": "scn-003",
  "denial-appeal-outline": "scn-001",
};

const recommendationSectionOrder = [
  ["direction", "Direction"],
  ["whatIsHappening", "What's happening"],
  ["whatToChange", "What to change"],
  ["nextStep", "Next step"],
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

function getRecommendationSections(scenario) {
  const recommendation = scenario.recommendedNextStep || {};

  return recommendationSectionOrder
    .map(([key, label]) => ({
      key,
      label,
      items: asList(recommendation[key]),
    }))
    .filter((section) => section.items.length);
}

export default function CoachScenarioMatrix({
  selectedChallenge = null,
  selectedQuickWin = null,
}) {
  const filteredScenarios = useMemo(() => {
    if (!selectedChallenge) {
      return scenarios;
    }

    return scenarios.filter((scenario) =>
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
  const selectedScenarios = scenariosByCategory[activeCategory] || [];
  const [selectedScenarioId, setSelectedScenarioId] = useState(
    selectedScenarios[0]?.id || "",
  );

  const selectedScenario =
    selectedScenarios.find((scenario) => scenario.id === selectedScenarioId) ||
    selectedScenarios[0];
  const recommendationSections = selectedScenario
    ? getRecommendationSections(selectedScenario)
    : [];
  const selectedChallengeLabel = selectedChallenge
    ? challengeLabels[selectedChallenge]
    : "";

  useEffect(() => {
    if (activeCategory !== selectedCategory) {
      setSelectedCategory(activeCategory);
      setSelectedScenarioId(selectedScenarios[0]?.id || "");
      return;
    }

    if (
      selectedScenarios.length &&
      !selectedScenarios.some((scenario) => scenario.id === selectedScenarioId)
    ) {
      setSelectedScenarioId(selectedScenarios[0].id);
    }
  }, [activeCategory, selectedCategory, selectedScenarioId, selectedScenarios]);

  useEffect(() => {
    const targetScenarioId = quickWinScenarioIds[selectedQuickWin?.key];
    if (!targetScenarioId) {
      return;
    }

    const targetScenario = filteredScenarios.find(
      (scenario) => scenario.id === targetScenarioId,
    );
    if (!targetScenario) {
      return;
    }

    setSelectedCategory(targetScenario.category);
    setSelectedScenarioId(targetScenario.id);
  }, [filteredScenarios, selectedQuickWin]);

  const handleCategorySelect = (category) => {
    const nextScenarios = scenariosByCategory[category] || [];
    setSelectedCategory(category);
    setSelectedScenarioId(nextScenarios[0]?.id || "");
  };

  if (!categories.length) {
    return (
      <main className="scenario-matrix">
        <h2 className="scenario-matrix__title">Coach Scenario Matrix</h2>
        <p className="scenario-matrix__intro-text">
          {selectedChallengeLabel
            ? "No examples found for this challenge yet."
            : "No coach scenarios are available yet."}
        </p>
      </main>
    );
  }

  return (
    <main className="scenario-matrix">
      <section className="scenario-matrix__intro">
        <h2 className="scenario-matrix__title">
          See how your practice can handle real problems with Smarter Practice AI
        </h2>
        <p className="scenario-matrix__intro-text">
          Structured recommendations based on your numbers, workflows, and
          constraints.
        </p>
        <p className="scenario-matrix__intro-text">
          These are the same types of decisions your practice is making every
          week.
        </p>
        <p className="scenario-matrix__intro-text">
          Instead of searching for answers, get a clear next step for your
          specific situation.
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
              style={{
                ...buttonResetStyle,
                border: isSelected ? "1px solid #1f5eff" : "1px solid #bcccdc",
                background: isSelected ? "#1f5eff" : "#ffffff",
                color: isSelected ? "#ffffff" : "#243b53",
              }}
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
          <h3 className="scenario-matrix__list-title">
            {activeCategory}
          </h3>
          <div style={{ display: "grid", gap: "1px", background: "#edf2f7" }}>
            {selectedScenarios.map((scenario) => {
              const isSelected = scenario.id === selectedScenario?.id;

              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setSelectedScenarioId(scenario.id)}
                  style={{
                    ...buttonResetStyle,
                    border: 0,
                    background: isSelected ? "#e0ecff" : "#ffffff",
                    fontWeight: isSelected ? 800 : 600,
                  }}
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
            <p className="scenario-matrix__coach">
              {selectedScenario.coach}
            </p>
            <h3 className="scenario-matrix__scenario-title">
              {selectedScenario.scenarioTitle}
            </h3>

            <dl style={{ display: "grid", gap: "18px", margin: 0 }}>
              <div>
                <dt className="scenario-matrix__label">Situation</dt>
                <dd className="scenario-matrix__body">
                  {selectedScenario.situation}
                </dd>
              </div>
              <div>
                <dt className="scenario-matrix__label">Practice context</dt>
                <dd className="scenario-matrix__body">
                  {selectedScenario.teamInput}
                </dd>
              </div>
              <div>
                <dt className="scenario-matrix__label">
                  Recommended next step
                </dt>
                <dd
                  className="scenario-matrix__recommendation"
                  style={{
                    display: "grid",
                    gap: "14px",
                  }}
                >
                  {recommendationSections.map((section, index) => (
                    <div
                      key={section.key}
                      style={{
                        borderTop:
                          index === 0 ? 0 : "1px solid #e6eef6",
                        paddingTop: index === 0 ? 0 : "12px",
                        textAlign: "left",
                      }}
                    >
                      <p
                        className="scenario-matrix__recommendation-label"
                      >
                        {section.label}:
                      </p>
                      {section.key === "direction" ? (
                        <p style={{ margin: 0 }}>{section.items[0]}</p>
                      ) : (
                        <ul
                          style={{
                            display: "grid",
                            gap: "6px",
                            margin: "4px 0 0",
                            paddingLeft: "20px",
                          }}
                        >
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="scenario-matrix__label">Why it matters</dt>
                <dd className="scenario-matrix__body">
                  {selectedScenario.whyItMatters}
                </dd>
              </div>
              <div>
                <dt className="scenario-matrix__label">Tags</dt>
                <dd
                  className="scenario-matrix__tags"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {selectedScenario.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        borderRadius: "999px",
                        background: "#f0f4f8",
                        color: "#334e68",
                        padding: "6px 10px",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </article>
        )}
      </section>
    </main>
  );
}
