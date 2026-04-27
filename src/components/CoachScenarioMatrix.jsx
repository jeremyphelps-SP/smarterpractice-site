import { useEffect, useMemo, useState } from "react";
import { scenarios } from "../data/scenarios";

const pageStyle = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "32px 20px 48px",
  color: "#1f2933",
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const filterWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  margin: "24px 0",
};

const layoutStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(240px, 320px) minmax(0, 1fr)",
  gap: "24px",
  alignItems: "start",
};

const panelStyle = {
  border: "1px solid #d9e2ec",
  borderRadius: "8px",
  background: "#ffffff",
  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
};

const buttonResetStyle = {
  font: "inherit",
  cursor: "pointer",
};

const roleLabels = {
  owner: "Dentist Owner",
  manager: "Office Manager",
  frontdesk: "Front Desk / Treatment Coordinator",
};

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

export default function CoachScenarioMatrix({ selectedRole = null }) {
  const filteredScenarios = useMemo(() => {
    if (!selectedRole) {
      return scenarios;
    }

    return scenarios.filter((scenario) =>
      scenario.roles?.includes(selectedRole),
    );
  }, [selectedRole]);

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
  const selectedRoleLabel = selectedRole ? roleLabels[selectedRole] : "";

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

  const handleCategorySelect = (category) => {
    const nextScenarios = scenariosByCategory[category] || [];
    setSelectedCategory(category);
    setSelectedScenarioId(nextScenarios[0]?.id || "");
  };

  if (!categories.length) {
    return (
      <main style={pageStyle}>
        <h1>Coach Scenario Matrix</h1>
        <p>
          {selectedRoleLabel
            ? "No examples found for this role yet."
            : "No coach scenarios are available yet."}
        </p>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      <section>
        <p style={{ margin: "0 0 8px", color: "#52606d", fontWeight: 700 }}>
          SmarterPractice coach scenarios
        </p>
        <h1 style={{ margin: 0, fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
          Coach Scenario Matrix
        </h1>
        <p style={{ maxWidth: "760px", lineHeight: 1.65, color: "#52606d" }}>
          Choose a practice category, then select a scenario to preview how a
          coach can turn team context into a practical next step.
        </p>
        {selectedRoleLabel && (
          <p
            style={{
              display: "inline-flex",
              margin: "12px 0 0",
              borderRadius: "999px",
              background: "#e0ecff",
              color: "#1f5eff",
              padding: "8px 12px",
              fontWeight: 800,
            }}
          >
            Showing examples for: {selectedRoleLabel}
          </p>
        )}
      </section>

      <section aria-label="Scenario categories" style={filterWrapStyle}>
        {categories.map((category) => {
          const isSelected = category === selectedCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => handleCategorySelect(category)}
              aria-pressed={isSelected}
              style={{
                ...buttonResetStyle,
                border: isSelected ? "1px solid #1f5eff" : "1px solid #bcccdc",
                borderRadius: "999px",
                padding: "10px 14px",
                background: isSelected ? "#1f5eff" : "#ffffff",
                color: isSelected ? "#ffffff" : "#243b53",
                fontWeight: 700,
              }}
            >
              {category}
            </button>
          );
        })}
      </section>

      <section style={layoutStyle}>
        <aside style={panelStyle} aria-label={`${activeCategory} scenarios`}>
          <h2
            style={{
              margin: 0,
              padding: "18px 18px 12px",
              fontSize: "1rem",
              borderBottom: "1px solid #edf2f7",
            }}
          >
            {activeCategory}
          </h2>
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
                    padding: "14px 16px",
                    textAlign: "left",
                    background: isSelected ? "#e0ecff" : "#ffffff",
                    color: "#243b53",
                    fontWeight: isSelected ? 800 : 600,
                    lineHeight: 1.35,
                  }}
                >
                  {scenario.scenarioTitle}
                </button>
              );
            })}
          </div>
        </aside>

        {selectedScenario && (
          <article style={{ ...panelStyle, padding: "24px" }}>
            <p style={{ margin: "0 0 8px", color: "#52606d", fontWeight: 700 }}>
              {selectedScenario.coach}
            </p>
            <h2 style={{ margin: "0 0 20px", fontSize: "1.75rem" }}>
              {selectedScenario.scenarioTitle}
            </h2>

            <dl style={{ display: "grid", gap: "18px", margin: 0 }}>
              <div>
                <dt style={{ fontWeight: 800 }}>Situation</dt>
                <dd style={{ margin: "6px 0 0", lineHeight: 1.6 }}>
                  {selectedScenario.situation}
                </dd>
              </div>
              <div>
                <dt style={{ fontWeight: 800 }}>Team input</dt>
                <dd style={{ margin: "6px 0 0", lineHeight: 1.6 }}>
                  {selectedScenario.teamInput}
                </dd>
              </div>
              <div>
                <dt style={{ fontWeight: 800 }}>Output preview</dt>
                <dd style={{ margin: "6px 0 0", lineHeight: 1.6 }}>
                  {selectedScenario.outputPreview}
                </dd>
              </div>
              <div>
                <dt style={{ fontWeight: 800 }}>Why it matters</dt>
                <dd style={{ margin: "6px 0 0", lineHeight: 1.6 }}>
                  {selectedScenario.whyItMatters}
                </dd>
              </div>
              <div>
                <dt style={{ fontWeight: 800 }}>Tags</dt>
                <dd
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    margin: "8px 0 0",
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
