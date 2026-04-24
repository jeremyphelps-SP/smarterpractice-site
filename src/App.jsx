import React, { useState } from "react";

export default function App() {
  const rows = [
    "Insurance & Billing",
    "Case Acceptance & Treatment",
    "Scheduling & Front Desk",
    "Marketing & Patient Acquisition",
    "Team & Culture",
    "Practice Performance"
  ];

  const cols = [
    "Claims & Insurance",
    "Patient Communication",
    "Training & Systems",
    "Production Growth",
    "Profit Optimization",
    "Compliance & Risk",
    "Financial Strategy"
  ];

  const examples = {
    "Insurance & Billing": {
      "Claims & Insurance": [
        { coach: "Dental Claims Coach", situation: "Denied crown claim", prompt: "We just received a denial for D2740 citing insufficient documentation. Using our past approved appeals, draft a stronger appeal.", why: "Reuses successful appeal patterns.", result: "High-quality appeal ready to submit.", impact: ["$500–$1,500 recovered","3–5 min vs 40 min","Higher approvals"] },
        { coach: "Dental Claims Coach", situation: "Repeat denials", prompt: "Review our last 15 denied claims and identify recurring denial reasons.", why: "Finds patterns across claims.", result: "Clear root-cause diagnosis.", impact: ["Reduce denials","Less rework","Faster payments"] },
        { coach: "PPO Power Negotiator", situation: "PPO decision", prompt: "Should we drop our lowest-paying PPO or keep the volume based on our current mix?", why: "Compares margin vs volume tradeoffs.", result: "Clear PPO strategy.", impact: ["Better margins","Less write-offs","Higher profit"] },
        { coach: "Dental Claims Coach", situation: "Mistakes", prompt: "What are we likely doing wrong in our claim submission workflow that is leading to avoidable denials?", why: "Surfaces systemic issues.", result: "Targeted fixes.", impact: ["Fewer denials","Better processes","Faster cash"] }
      ],
      "Patient Communication": [
        { coach: "QuickAssist for Dentists", situation: "EOB confusion", prompt: "Explain an EOB vs patient balance clearly using our tone.", why: "Simplifies language.", result: "Clear communication.", impact: ["Fewer calls","Better understanding","Collections"] },
        { coach: "Dental Claims Coach", situation: "Denied explanation", prompt: "Explain to a patient why their claim was denied and what happens next.", why: "Translates complexity.", result: "Improved trust.", impact: ["Trust","Clarity","Faster decisions"] },
        { coach: "QuickAssist for Dentists", situation: "Templates", prompt: "Create reusable templates for our most common billing questions.", why: "Standardizes responses.", result: "Consistent messaging.", impact: ["Speed","Consistency","Experience"] }
      ],
      "Training & Systems": [
        { coach: "HuddleCoach + TeamPlaybook", situation: "Onboarding", prompt: "Create a step-by-step SOP for claim submission and follow-up based on our workflow.", why: "Encodes real processes.", result: "Standardized billing ops.", impact: ["Faster onboarding","Fewer errors","Consistency"] },
        { coach: "HuddleCoach + TeamPlaybook", situation: "QA gaps", prompt: "Build a pre-submission QA checklist to reduce preventable denials.", why: "Adds guardrails.", result: "Fewer denials at source.", impact: ["First-pass","Less waste","Cash"] }
      ],
      "Profit Optimization": [
        { coach: "PPO Power Negotiator", situation: "Underpayments", prompt: "Compare expected vs actual reimbursements—where are we losing the most?", why: "Analyzes fees vs collections.", result: "Prioritized recovery list.", impact: ["Recover revenue","Collections","Cash flow"] },
        { coach: "PPO Power Negotiator", situation: "Low-margin codes", prompt: "Which procedures are consistently underpaid across PPOs?", why: "Evaluates payer performance.", result: "Pinpoint low margins.", impact: ["Pricing","Margin","Decisions"] }
      ],
      "Compliance & Risk": [
        { coach: "HIPAA & Dental Safety Coach", situation: "PHI exposure", prompt: "Review billing/communication workflows—where are we at risk of exposing PHI?", why: "Audits workflows.", result: "Safer processes.", impact: ["Lower risk","Compliance","Trust"] },
        { coach: "HIPAA & Dental Safety Coach", situation: "Audit prep", prompt: "Create a HIPAA checklist for our billing workflows.", why: "Encodes compliance.", result: "Audit-ready.", impact: ["Audits","Standardization","Confidence"] }
      ]
    },

    "Case Acceptance & Treatment": {
      "Patient Communication": [
        { coach: "Chairside Clinical Companion", situation: "Hesitant patient", prompt: "Draft a script to move a hesitant patient forward on a $6,000 plan.", why: "Uses proven phrasing.", result: "Stronger presentation.", impact: ["10–20% lift","Less hesitation","Revenue"] },
        { coach: "Chairside Clinical Companion", situation: "Confusion", prompt: "Explain this treatment plan in simple terms.", why: "Translates clinical language.", result: "Better understanding.", impact: ["Trust","Engagement","Acceptance"] }
      ],
      "Training & Systems": [
        { coach: "HuddleCoach + TeamPlaybook", situation: "Inconsistent consults", prompt: "Create a standardized case presentation checklist.", why: "Captures best practices.", result: "Consistent consults.", impact: ["Confidence","Quality","Conversions"] }
      ],
      "Production Growth": [
        { coach: "Practice Growth Coach", situation: "Case mix", prompt: "What are we doing during consults that is hurting high-value case acceptance?", why: "Diagnoses behavior.", result: "Targeted improvement.", impact: ["Higher case value","Revenue","Growth"] },
        { coach: "Practice Growth Coach", situation: "Comparison", prompt: "Should we focus on improving case acceptance or increasing new patient flow right now?", why: "Compares growth levers.", result: "Clear direction.", impact: ["Better prioritization","ROI","Growth"] },
        { coach: "Practice Growth Coach", situation: "Mistakes", prompt: "What are the most common mistakes practices like ours make during consults?", why: "Benchmarks vs top performers.", result: "Eliminate errors.", impact: ["Higher acceptance","Experience","Revenue"] }
      ],
      "Profit Optimization": [
        { coach: "Practice Growth Coach", situation: "Discounting", prompt: "How can we reduce discounting without hurting acceptance?", why: "Refines positioning.", result: "Protected margins.", impact: ["Margin","Revenue","Acceptance"] }
      ],
      "Compliance & Risk": [
        { coach: "HIPAA & Dental Safety Coach", situation: "Consent", prompt: "Audit our informed consent process for gaps.", why: "Finds liability risks.", result: "Safer documentation.", impact: ["Compliance","Protection","Trust"] }
      ]
    },

    "Scheduling & Front Desk": {
      "Patient Communication": [
        { coach: "QuickAssist for Dentists", situation: "Balance confusion", prompt: "Draft a clear message explaining a patient’s balance and options.", why: "Simplifies language.", result: "Clarity.", impact: ["Fewer calls","Collections","Experience"] },
        { coach: "QuickAssist for Dentists", situation: "No-shows", prompt: "Write a confirmation/reminder sequence to reduce no-shows.", why: "Uses proven timing.", result: "Better attendance.", impact: ["Fewer gaps","Production","Stability"] }
      ],
      "Training & Systems": [
        { coach: "HuddleCoach + TeamPlaybook", situation: "Front desk SOP", prompt: "Create SOPs for scheduling, confirmations, cancellations.", why: "Standardizes workflows.", result: "Consistency.", impact: ["Fewer errors","Efficiency","Quality"] }
      ],
      "Production Growth": [
        { coach: "HuddleCoach + TeamPlaybook", situation: "Schedule gaps", prompt: "How should we proactively fill next week’s open appointments?", why: "Uses recall.", result: "More bookings.", impact: ["Utilization","Revenue","Less idle"] },
        { coach: "Practice Growth Coach", situation: "Decision", prompt: "Is it better to extend hours or improve efficiency?", why: "Compares options.", result: "Clear plan.", impact: ["Utilization","Revenue","Balance"] },
        { coach: "Practice Growth Coach", situation: "Mistakes", prompt: "What are we doing in scheduling that is reducing production?", why: "Finds inefficiencies.", result: "Fix bottlenecks.", impact: ["Production","Flow","Revenue"] }
      ],
      "Profit Optimization": [
        { coach: "Practice Growth Coach", situation: "Idle time", prompt: "Where are we losing efficiency between patients?", why: "Identifies bottlenecks.", result: "Higher throughput.", impact: ["Revenue","Efficiency","Flow"] }
      ],
      "Compliance & Risk": [
        { coach: "HIPAA & Dental Safety Coach", situation: "PHI texting", prompt: "What are safe texting guidelines to avoid PHI exposure?", why: "Applies HIPAA.", result: "Safer comms.", impact: ["Risk","Compliance","Trust"] }
      ]
    },

    "Marketing & Patient Acquisition": {
      "Patient Communication": [
        { coach: "QuickAssist for Dentists", situation: "Cold leads", prompt: "Create a 3-message follow-up sequence for leads who didn’t book.", why: "Proven cadence.", result: "Higher conversion.", impact: ["Bookings","Pipeline","ROI"] }
      ],
      "Training & Systems": [
        { coach: "Practice Growth Coach", situation: "No system", prompt: "Create a weekly marketing SOP.", why: "Adds structure.", result: "Consistency.", impact: ["Cadence","Quality","Results"] }
      ],
      "Production Growth": [
        { coach: "Practice Growth Coach", situation: "Need patients", prompt: "Top 3 highest-ROI ways to get new patients in 30 days?", why: "Targets growth.", result: "Plan.", impact: ["Patients","ROI","Growth"] },
        { coach: "Practice Growth Coach", situation: "Comparison", prompt: "Focus on new patients or better conversion?", why: "Compares strategies.", result: "Direction.", impact: ["ROI","Growth","Focus"] },
        { coach: "Practice Growth Coach", situation: "Mistakes", prompt: "What are the biggest mistakes practices like ours make in marketing?", why: "Finds errors.", result: "Fixes.", impact: ["Lower CAC","ROI","Growth"] }
      ],
      "Profit Optimization": [
        { coach: "Practice Growth Coach", situation: "High CAC", prompt: "Where can we lower cost per new patient?", why: "Optimizes channels.", result: "Lower CAC.", impact: ["Efficiency","ROI","Margin"] }
      ],
      "Compliance & Risk": [
        { coach: "HIPAA & Dental Safety Coach", situation: "Ad compliance", prompt: "Review ads for compliance risks.", why: "Checks language.", result: "Safer ads.", impact: ["Compliance","Risk","Clarity"] }
      ],
      "Financial Strategy": [
        { coach: "Practice Growth Coach", situation: "Budget", prompt: "Set a marketing budget aligned with goals.", why: "Aligns spend.", result: "Plan.", impact: ["Control","ROI","Planning"] }
      ]
    },

    "Team & Culture": {
      "Patient Communication": [
        { coach: "QuickAssist for Dentists", situation: "Tone", prompt: "Standardize team communication tone.", why: "Unifies voice.", result: "Consistency.", impact: ["Trust","Clarity","Experience"] }
      ],
      "Training & Systems": [
        { coach: "Staffing & HR Coach", situation: "Onboarding", prompt: "Create a 30-day onboarding plan.", why: "Encodes workflows.", result: "Consistency.", impact: ["Ramp","Performance","Oversight"] }
      ],
      "Production Growth": [
        { coach: "Practice Growth Coach", situation: "Productivity", prompt: "Where are we losing productive time?", why: "Finds inefficiencies.", result: "Higher output.", impact: ["Production","Efficiency","Revenue"] },
        { coach: "Practice Growth Coach", situation: "Comparison", prompt: "Hire vs improve utilization?", why: "Compares strategies.", result: "Decision.", impact: ["Cost","Performance","Efficiency"] },
        { coach: "Staffing & HR Coach", situation: "Mistakes", prompt: "Where is our team underperforming vs top practices?", why: "Benchmarks.", result: "Improvements.", impact: ["Performance","Retention","Output"] }
      ],
      "Profit Optimization": [
        { coach: "Staffing & HR Coach", situation: "Labor cost", prompt: "Where are we overstaffed?", why: "Analyzes staffing.", result: "Right-size.", impact: ["Cost","Margin","Efficiency"] }
      ]
    },

    "Practice Performance": {
      "Claims & Insurance": [
        { coach: "PPO Power Negotiator", situation: "PPO mix", prompt: "Which PPOs are most/least profitable?", why: "Benchmarks.", result: "Breakdown.", impact: ["Margins","Collections","Decisions"] }
      ],
      "Patient Communication": [
        { coach: "Chairside Clinical Companion", situation: "Experience gaps", prompt: "Where does communication break down across the journey?", why: "Maps journey.", result: "Gaps.", impact: ["Experience","Retention","Reviews"] }
      ],
      "Training & Systems": [
        { coach: "HuddleCoach + TeamPlaybook", situation: "No systems", prompt: "Which 3 SOPs should we build first?", why: "Prioritizes.", result: "Roadmap.", impact: ["Consistency","Scale","Quality"] }
      ],
      "Production Growth": [
        { coach: "Practice Growth Coach", situation: "Stalled growth", prompt: "What would you change first to increase production in 60 days?", why: "Prioritizes.", result: "Plan.", impact: ["Production","Focus","Results"] }
      ],
      "Profit Optimization": [
        { coach: "Practice Growth Coach", situation: "Low profit", prompt: "Top 3 changes to improve profitability?", why: "Benchmarks.", result: "Plan.", impact: ["Margin","Decisions","Income"] },
        { coach: "Practice Growth Coach", situation: "Comparison", prompt: "Increase production or improve profitability first?", why: "Compares.", result: "Direction.", impact: ["Prioritization","ROI","Growth"] },
        { coach: "Practice Growth Coach", situation: "Mistakes", prompt: "Biggest mistakes limiting profitability?", why: "Finds blind spots.", result: "Awareness.", impact: ["Avoid mistakes","Strategy","Outcomes"] }
      ],
      "Compliance & Risk": [
        { coach: "HIPAA & Dental Safety Coach", situation: "Audit", prompt: "If audited tomorrow, where are we exposed?", why: "Finds gaps.", result: "Risk map.", impact: ["Risk","Compliance","Confidence"] }
      ],
      "Financial Strategy": [
        { coach: "Dental Tax Strategy Co-Pilot", situation: "Tax", prompt: "What tax strategies should we prioritize this year?", why: "Surfaces opportunities.", result: "Plan.", impact: ["Savings","Planning","Profit"] }
      ]
    }
  };

  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);

  const current = selected?.row && selected?.col && examples[selected.row]?.[selected.col]?.length
    ? examples[selected.row][selected.col][index % examples[selected.row][selected.col].length]
    : null;

  const hasKey = (r, c) => !!examples[r]?.[c];

  return (
    <div style={{ padding: 20 }}>
      <h1>Interactive Demo</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 8 }}>
        <div></div>
        {cols.map((c) => (
          <div key={c} style={{ fontSize: 12 }}>{c}</div>
        ))}

        {rows.map((r) => (
          <React.Fragment key={r}>
            <div style={{ fontWeight: "bold" }}>{r}</div>
            {cols.map((c) => {
              const has = hasKey(r, c);
              const isSelected = selected?.row === r && selected?.col === c;

              return (
                <button
                  key={`${r}-${c}`}
                  onClick={() => {
                    if (has) {
                      setSelected({ row: r, col: c });
                      setIndex(0);
                    }
                  }}
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: "50%",
                    background: has ? "blue" : "#ccc",
                    outline: isSelected ? "3px solid lightblue" : "none",
                    cursor: has ? "pointer" : "not-allowed"
                  }}
                />
              );
            })}
          </React.Fragment>
        ))}
      </div>

      {current && (
        <div style={{ marginTop: 20 }}>
          <div><strong>Coach:</strong> {current.coach}</div>
          <div><strong>Scenario:</strong> {current.situation}</div>
          <div><strong>What your team types:</strong> {current.prompt}</div>
          <div><strong>Why this works:</strong> {current.why}</div>
          <div><strong>What this means for your practice:</strong> {current.result}</div>

          <button onClick={() => setIndex((prev) => prev + 1)} style={{ marginTop: 10 }}>
            See another real example
          </button>
        </div>
      )}
    </div>
  );
}
