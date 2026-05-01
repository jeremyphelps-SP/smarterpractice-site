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

const conciseScenarioTitles = {
  "What Am I Missing in A/R Over 90?": "A/R Over 90",
  "Tomorrow Morning Crown Cancellation Recovery": "Crown Cancellation Recovery",
  "What Are We Missing in Large Case Follow-Up?": "Large Case Follow-Up",
  "Should We Offer Financing Earlier or Wait for Objection?": "Financing Timing",
  "Owner-Level Referral Strategy Instead of Another Discount Campaign": "Referral Strategy",
  "Owner-Level Team Capacity Review Before Growth Push": "Team Capacity Review",
  "Owner Distribution Guardrails During Cash Swings": "Owner Distribution Guardrails",
  "Owner-Level Compliance Risk Map Before Adding Software": "Compliance Risk Map",
  "Owner-Level Choice: Pay Down Debt or Preserve Cash?": "Pay Down Debt or Preserve Cash",
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

function getPrecisionRewrite(text, sectionKey) {
  const lowerText = text.toLowerCase();

  if (sectionKey === "nextStep") {
    if (lowerText.includes("internal documentation today")) {
      return "Document the incident in your internal compliance log today.";
    }

    if (lowerText.includes("review autocomplete and attachment workflow")) {
      return "Audit autocomplete and attachment handling before sending another patient message.";
    }

    if (lowerText.includes("train team on double-check rule before sending estimates")) {
      return "Train the team to verify recipients before sending estimates.";
    }

    if (lowerText.includes("reimbursement and write-off gap")) {
      return "Calculate the reimbursement and write-off gap before changing payer strategy.";
    }
  }

  if (sectionKey === "whatToChange") {
    if (lowerText.includes("registration receipt")) {
      return "Collect the registration receipt.";
    }

    if (lowerText.includes("certificate")) {
      return "Collect the CE certificate.";
    }

    if (lowerText.includes("airfare receipt")) {
      return "Collect the airfare receipt.";
    }

    if (lowerText.includes("hotel folio split by dates")) {
      return "Collect the hotel folio with business and personal dates separated.";
    }

    if (lowerText.includes("meal receipts with business purpose")) {
      return "Collect meal receipts with the business purpose noted.";
    }

    if (lowerText.includes("spouse costs")) {
      return "Separate spouse costs from practice travel expenses.";
    }

    if (lowerText.includes("personal extra day")) {
      return "Separate the personal extra day from business travel.";
    }

    if (lowerText.includes("non-course entertainment")) {
      return "Separate non-course entertainment from CE expenses.";
    }

    if (lowerText.includes("lab fee treatment")) {
      return "Define how lab fees affect compensation.";
    }

    if (lowerText.includes("remake policy")) {
      return "Define the remake policy in the compensation agreement.";
    }

    if (lowerText.includes("write-off handling")) {
      return "Define how write-offs affect compensation.";
    }

    if (lowerText.includes("timing of payment")) {
      return "Define when compensation is paid.";
    }
  }

  return "";
}

function formatInstructionItem(item, sectionKey) {
  const text = stripFillerStart(String(item).trim());

  if (!text) {
    return "";
  }

  const precisionRewrite = getPrecisionRewrite(text, sectionKey);

  if (precisionRewrite) {
    return precisionRewrite;
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

  if (searchableText.includes("crown denial") || searchableText.includes("d2740")) {
    return "A D2740 crown claim is denied and the appeal needs stronger clinical documentation.";
  }

  if (searchableText.includes("a/r") || searchableText.includes("accounts receivable")) {
    return "Insurance A/R over 90 is growing and the team needs to prioritize by failure type.";
  }

  if (searchableText.includes("eob") || searchableText.includes("benefits")) {
    return "An EOB changes the patient balance and the team needs a clear explanation.";
  }

  if (searchableText.includes("no-show") || searchableText.includes("cancellation")) {
    return "Open chair time or broken appointments are leaving production unfilled.";
  }

  if (searchableText.includes("case acceptance") || searchableText.includes("large case")) {
    return "A diagnosed case is unscheduled and the patient needs a clear next conversation.";
  }

  if (searchableText.includes("hipaa") || searchableText.includes("compliance")) {
    return "A privacy, consent, or vendor issue needs documented containment and follow-up.";
  }

  if (searchableText.includes("ppo") || searchableText.includes("write-off")) {
    return "PPO write-offs or leased-network fees are reducing collections.";
  }

  if (searchableText.includes("fee") || searchableText.includes("pricing")) {
    return "Fee or pricing decisions need specific margin and patient-impact tradeoffs.";
  }

  if (searchableText.includes("huddle") || searchableText.includes("training") || searchableText.includes("onboarding")) {
    return "A recurring team handoff or training issue is slowing daily execution.";
  }

  if (
    searchableText.includes("claim") ||
    searchableText.includes("denial") ||
    searchableText.includes("appeal") ||
    searchableText.includes("payer")
  ) {
    return "A payer issue needs a documented appeal or follow-up plan.";
  }

  if (searchableText.includes("schedule") || searchableText.includes("appointment")) {
    return "The schedule needs a specific recovery plan.";
  }

  if (
    searchableText.includes("patient") ||
    searchableText.includes("case acceptance") ||
    searchableText.includes("communication")
  ) {
    return "A patient conversation needs clearer language and ownership.";
  }

  if (
    searchableText.includes("profit") ||
    searchableText.includes("fee") ||
    searchableText.includes("money") ||
    searchableText.includes("tax")
  ) {
    return "A practice decision needs financial tradeoffs and next steps.";
  }

  return "A real practice issue needs a specific action plan.";
}

function getScenarioOutcome(scenario) {
  const searchableText = [
    scenario.category,
    scenario.scenarioTitle,
    ...(scenario.tags || []),
  ]
    .join(" ")
    .toLowerCase();

  if (searchableText.includes("crown denial") || searchableText.includes("appeal")) {
    return "Faster appeal turnaround, stronger documentation, and fewer repeat denials.";
  }

  if (searchableText.includes("a/r") || searchableText.includes("collections")) {
    return "Lower aging balances, clearer ownership, and faster insurance cash movement.";
  }

  if (searchableText.includes("eob") || searchableText.includes("patient billing")) {
    return "Fewer balance disputes and more confident patient billing conversations.";
  }

  if (searchableText.includes("schedule") || searchableText.includes("no-show") || searchableText.includes("cancellation")) {
    return "Recovered chair time, fewer unfilled openings, and steadier production.";
  }

  if (searchableText.includes("case acceptance") || searchableText.includes("large case")) {
    return "More scheduled treatment, clearer follow-up, and fewer stalled cases.";
  }

  if (searchableText.includes("training") || searchableText.includes("onboarding") || searchableText.includes("huddle")) {
    return "Less rework, fewer interruptions, and more consistent team execution.";
  }

  if (searchableText.includes("hipaa") || searchableText.includes("compliance")) {
    return "Cleaner records, faster containment, and lower avoidable compliance risk.";
  }

  if (searchableText.includes("ppo") || searchableText.includes("write-off")) {
    return "Clearer payer decisions, reduced write-off leakage, and better margin control.";
  }

  if (searchableText.includes("profit") || searchableText.includes("fee") || searchableText.includes("tax")) {
    return "Better cash decisions, cleaner tradeoffs, and less financial guesswork.";
  }

  return "A clearer next step your team can act on.";
}

function getDisplayScenarioTitle(title) {
  const strippedTitle = title.replace(/\s*\([^)]*\)/g, "").trim();

  return conciseScenarioTitles[strippedTitle] || strippedTitle;
}

function createCoachPrompt(scenario) {
  return `Review this situation and respond with:
1. The most important next step
2. What needs to change
3. Key risks or mistakes to avoid
4. ${getScenarioSpecificInstruction(scenario)}

Context:
[Paste details]`;
}

function getExecutionExample(scenario) {
  if (scenario.executionExample) {
    return {
      ...scenario.executionExample,
      intro: "Drop in the real situation:",
      trigger: scenario.executionExample.trigger || getScenarioTrigger(scenario),
      prompt: createCoachPrompt(scenario),
    };
  }

  return {
    trigger: getScenarioTrigger(scenario),
    intro: "Drop in the real situation:",
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
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const selectedScenario =
    selectedScenarios.find((scenario) => scenario.id === selectedScenarioId) ||
    selectedScenarios[0];
  const recommendationSections = selectedScenario
    ? getRecommendationSections(selectedScenario)
    : [];
  const nextStepSection = recommendationSections.find(
    (section) => section.key === "nextStep",
  );
  const detailRecommendationSections = recommendationSections.filter(
    (section) => section.key !== "nextStep",
  );
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

  useEffect(() => {
    setIsDetailsOpen(false);
  }, [selectedScenarioId]);

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
          Get a clear next step based on your actual situation.
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
                  {getDisplayScenarioTitle(scenario.scenarioTitle)}
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
              {getDisplayScenarioTitle(selectedScenario.scenarioTitle)}
            </h3>

            <dl className="scenario-matrix__detail-list">
              <div>
                <dt className="scenario-matrix__label">Situation</dt>
                <dd className="scenario-matrix__body">
                  {selectedScenario.situation}
                </dd>
              </div>
              {nextStepSection && (
                <div className="scenario-matrix__action-block">
                  <dt className="scenario-matrix__label">
                    {nextStepSection.label}:
                  </dt>
                  <dd className="scenario-matrix__recommendation">
                    <ul>
                      {nextStepSection.items.map((item) => (
                        <li key={item}>
                          {formatInstructionItem(item, nextStepSection.key)}
                        </li>
                      ))}
                    </ul>
                    <p className="scenario-matrix__outcome">
                      <span>Outcome:</span> {getScenarioOutcome(selectedScenario)}
                    </p>
                  </dd>
                </div>
              )}
              {executionExample && (
                <div>
                  <dt className="scenario-matrix__label">Use this when:</dt>
                  <dd className="scenario-matrix__body">
                    {executionExample.trigger}
                  </dd>
                </div>
              )}
            </dl>

            <button
              type="button"
              className="scenario-matrix__details-toggle"
              aria-expanded={isDetailsOpen}
              onClick={() => setIsDetailsOpen((isOpen) => !isOpen)}
            >
              {isDetailsOpen ? "Show less" : "See full workflow"}
            </button>

            {isDetailsOpen && (
              <div className="scenario-matrix__details-panel">
                <dl className="scenario-matrix__detail-list">
                  <div>
                    <dt className="scenario-matrix__label">
                      Practice context
                    </dt>
                    <dd className="scenario-matrix__body">
                      {selectedScenario.teamInput}
                    </dd>
                  </div>
                  {detailRecommendationSections.map((section) => (
                    <div key={section.key}>
                      <dt className="scenario-matrix__label">
                        {section.label}:
                      </dt>
                      <dd className="scenario-matrix__recommendation">
                        <ul>
                          {section.items.map((item) => (
                            <li key={item}>
                              {formatInstructionItem(item, section.key)}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ))}
                  {executionExample && (
                    <div>
                      <dt className="scenario-matrix__label">Full prompt</dt>
                      <dd className="scenario-matrix__execution">
                        <p>{executionExample.intro}</p>
                        <blockquote>
                          {executionExample.prompt}
                        </blockquote>
                      </dd>
                    </div>
                  )}
                  {executionExample && (
                    <div>
                      <dt className="scenario-matrix__label">
                        {executionExample.outputLabel}
                      </dt>
                      <dd className="scenario-matrix__body">
                        <ul className="scenario-matrix__detail-bullets">
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
