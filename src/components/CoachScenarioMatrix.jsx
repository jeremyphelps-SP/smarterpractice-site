import { useEffect, useMemo, useState } from "react";
import { scenarios } from "../data/scenarios";

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

const recommendationSectionOrder = [
  ["whatIsHappening", "Why it's happening"],
  ["whatToChange", "What to fix"],
  ["nextStep", "Do this"],
];

const actionStarts = [
  "add",
  "align",
  "appeal",
  "approve",
  "ask",
  "assign",
  "attach",
  "audit",
  "batch",
  "build",
  "call",
  "calibrate",
  "check",
  "collect",
  "confirm",
  "create",
  "delay",
  "define",
  "document",
  "do",
  "escalate",
  "explain",
  "fix",
  "focus",
  "follow",
  "hold",
  "include",
  "label",
  "lead",
  "make",
  "map",
  "model",
  "move",
  "name",
  "offer",
  "prepare",
  "prove",
  "raise",
  "reassess",
  "remove",
  "reserve",
  "review",
  "schedule",
  "separate",
  "set",
  "spend",
  "stop",
  "submit",
  "summarize",
  "test",
  "track",
  "train",
  "treat",
  "turn",
  "update",
  "use",
  "verify",
  "write",
];

const collectionTerms = [
  "agenda",
  "certificate",
  "chart",
  "folio",
  "note",
  "photo",
  "receipt",
  "registration",
  "treatment plan",
];

const actionTermRules = [
  [["appeal"], "Appeal"],
  [["attachment", "attachments", "photo", "photos", "radiograph"], "Attach"],
  [["audit"], "Audit"],
  [["call"], "Call"],
  [["chart", "note", "notes", "documentation"], "Document"],
  [["checklist"], "Create"],
  [["claim", "claims"], "Track"],
  [["decision"], "Document"],
  [["estimate"], "Review"],
  [["fee", "fees", "pricing"], "Review"],
  [["financing"], "Offer"],
  [["follow-up", "follow up"], "Schedule"],
  [["huddle"], "Run"],
  [["language", "message", "script"], "Write"],
  [["policy"], "Write"],
  [["report"], "Review"],
  [["schedule", "appointment", "visit"], "Schedule"],
  [["task", "workflow"], "Assign"],
  [["training"], "Train"],
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

function sentenceCase(value) {
  const text = String(value).trim();

  if (!text) {
    return "";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

function hasActionStart(value) {
  const text = value.toLowerCase();

  return actionStarts.some(
    (verb) => text === verb || text.startsWith(`${verb} `),
  );
}

function ensurePeriod(value) {
  return /[.!?]$/.test(value) ? value : `${value}.`;
}

function stripFillerStart(value) {
  return value
    .replace(/^identify\s+/i, "")
    .replace(/^start with\s+/i, "Lead with ")
    .replace(/^begin with\s+/i, "Lead with ")
    .replace(/^start by\s+/i, "")
    .replace(/^begin by\s+/i, "")
    .replace(/^complete\s+/i, "");
}

function chooseActionVerb(text, fallback = "Fix") {
  const lowerText = text.toLowerCase();
  const rule = actionTermRules.find(([terms]) =>
    terms.some((term) => lowerText.includes(term)),
  );

  return rule ? rule[1] : fallback;
}

function formatInstructionItem(item, sectionKey) {
  const text = stripFillerStart(String(item).trim());

  if (!text) {
    return "";
  }

  const normalized = sentenceCase(text);

  if (text.endsWith("?")) {
    return ensurePeriod(`Answer this question: ${text}`);
  }

  if (/^(if|when)\b/i.test(normalized)) {
    return ensurePeriod(`Apply this rule: ${text}`);
  }

  if (hasActionStart(normalized)) {
    return ensurePeriod(normalized);
  }

  if (sectionKey === "whatIsHappening") {
    return ensurePeriod(sentenceCase(text));
  }

  if (sectionKey === "whatToChange") {
    const lowerText = text.toLowerCase();
    const prefix = collectionTerms.some((term) => lowerText.includes(term))
      ? "Collect"
      : chooseActionVerb(text, "Change");

    return ensurePeriod(`${prefix} ${text}`);
  }

  if (sectionKey === "nextStep") {
    return ensurePeriod(`${chooseActionVerb(text, "Do")} ${text}`);
  }

  return ensurePeriod(normalized);
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

function getScenarioSpecificInstruction(scenario) {
  const category = scenario.category || "";
  const searchableText = [
    category,
    scenario.coach,
    scenario.scenarioTitle,
    ...(scenario.tags || []),
  ]
    .join(" ")
    .toLowerCase();

  if (
    searchableText.includes("claim") ||
    searchableText.includes("denial") ||
    searchableText.includes("appeal") ||
    searchableText.includes("payer") ||
    searchableText.includes("ppo") ||
    searchableText.includes("billing")
  ) {
    return "Create the appeal or follow-up plan.";
  }

  if (category === "Avoid Compliance Mistakes" || searchableText.includes("hipaa")) {
    return "List the documentation and notification steps.";
  }

  if (category === "Fix the Schedule" || searchableText.includes("schedule")) {
    return "Create the recovery plan.";
  }

  if (
    category === "Help Patients Say Yes" ||
    category === "Grow New Patients" ||
    searchableText.includes("patient communication") ||
    searchableText.includes("case acceptance")
  ) {
    return "Write what the team should say.";
  }

  return "Map the decision factors.";
}

function getScenarioTrigger(scenario) {
  const searchableText = [
    scenario.category,
    scenario.coach,
    scenario.scenarioTitle,
    ...(scenario.tags || []),
  ]
    .join(" ")
    .toLowerCase();

  if (
    searchableText.includes("claim") ||
    searchableText.includes("denial") ||
    searchableText.includes("appeal") ||
    searchableText.includes("payer")
  ) {
    return "Use this when a claim, denial, EOB, or payer issue needs a clear next move.";
  }

  if (searchableText.includes("hipaa") || searchableText.includes("compliance")) {
    return "Use this when a compliance question needs containment, documentation, and follow-up.";
  }

  if (searchableText.includes("schedule") || searchableText.includes("appointment")) {
    return "Use this when the schedule needs a recovery plan instead of another quick fix.";
  }

  if (
    searchableText.includes("patient") ||
    searchableText.includes("case acceptance") ||
    searchableText.includes("communication")
  ) {
    return "Use this when the team needs clearer patient language and a next step.";
  }

  if (
    searchableText.includes("profit") ||
    searchableText.includes("fee") ||
    searchableText.includes("money") ||
    searchableText.includes("tax")
  ) {
    return "Use this when a practice decision needs clear financial tradeoffs.";
  }

  return "Use this when the team needs to turn a practice issue into a specific action plan.";
}

function getPromptGroundingSentence(scenario) {
  const topic = scenario.scenarioTitle.replace(/\s*\([^)]*\)/g, "").trim();

  return `Focus on ${topic.toLowerCase()} in the context of ${scenario.category.toLowerCase()}.`;
}

function createCoachPrompt(scenario) {
  return `You are my ${scenario.coach}.
${getPromptGroundingSentence(scenario)}

Review this situation and respond with:
1. The most important next step
2. What needs to change
3. Any key risks or mistakes to avoid
4. ${getScenarioSpecificInstruction(scenario)}

Context:
[Paste details]`;
}

function getExecutionExample(scenario) {
  if (scenario.executionExample) {
    return {
      ...scenario.executionExample,
      trigger: scenario.executionExample.trigger || getScenarioTrigger(scenario),
      prompt: createCoachPrompt(scenario),
    };
  }

  return {
    trigger: getScenarioTrigger(scenario),
    intro: "Paste the relevant note, report, patient message, or workflow detail and say:",
    prompt: createCoachPrompt(scenario),
    outputLabel: "You'll get:",
    outputs: [
      "A practical draft your team can use",
      "The key details to check before acting",
      "A clear follow-up step",
    ],
  };
}

export default function CoachScenarioMatrix({ selectedChallenge = null }) {
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
  const executionExample = selectedScenario
    ? getExecutionExample(selectedScenario)
    : null;
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
          Pick a real problem. Get a clear next step.
        </h2>
        <p className="scenario-matrix__intro-text">
          Structured recommendations based on your numbers, workflows, and
          constraints.
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
                      <ul
                        style={{
                          display: "grid",
                          gap: "6px",
                          margin: "4px 0 0",
                          paddingLeft: "20px",
                        }}
                      >
                        {section.items.map((item) => (
                          <li key={item}>
                            {formatInstructionItem(item, section.key)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </dd>
              </div>
              {executionExample && (
                <div>
                  <dt className="scenario-matrix__label">
                    Use this in your practice
                  </dt>
                  <dd className="scenario-matrix__execution">
                    <p className="scenario-matrix__execution-label">
                      Use this when:
                    </p>
                    <p>{executionExample.trigger}</p>
                    <p>{executionExample.intro}</p>
                    <blockquote>
                      {executionExample.prompt}
                    </blockquote>
                    <p className="scenario-matrix__execution-label">
                      {executionExample.outputLabel}
                    </p>
                    <ul>
                      {executionExample.outputs.map((output) => (
                        <li key={output}>{output}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
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
