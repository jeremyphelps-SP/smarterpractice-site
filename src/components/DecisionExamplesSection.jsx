import "./DecisionExamplesSection.css";

const decisionExamples = [
  {
    title: "Should we drop the low-paying PPO or renegotiate first?",
    situation:
      "The plan consumes meaningful chair time, but dropping it immediately would affect active families and cases already in progress.",
    teamInput: [
      "The plan represents 18% of visits and 24% of doctor chair time.",
      "It produces only 11% of collections.",
      "D2740 reimburses $925 against a $1,650 office fee.",
      "Hygiene is booked out 9 weeks.",
    ],
    decision:
      "Renegotiate with a 60-day deadline, then decide whether to exit or restrict new patients from the plan.",
    whyNot:
      "Do not drop it today without preparing patient communication and protecting active treatment cases. Do not leave negotiation open-ended either.",
    nextSteps: [
      "Build a packet around the top CDT write-offs.",
      "Request an updated fee schedule.",
      "Prepare patient transition messaging now.",
    ],
    whyItMatters:
      "PPO strategy should be decisive without creating avoidable patient trust or cash-flow risk.",
  },
  {
    title: "Should we expand hygiene or extend hours first?",
    situation:
      "The owner wants another hygiene room, but the practice needs to confirm demand, staffing, and doctor exam flow before committing construction dollars.",
    teamInput: [
      "Recall is booked out 10 weeks.",
      "Build-out would cost $78,000.",
      "A part-time hygienist is available two days per week.",
      "Doctor exams already interrupt operative flow.",
    ],
    decision:
      "Extend hygiene hours first for 60 days before building out another room.",
    whyNot:
      "A room build-out is expensive and permanent. A smaller operating test proves whether demand and flow can support the investment.",
    nextSteps: [
      "Add two hygiene days per month.",
      "Batch doctor exams to reduce interruptions.",
      "Track hygiene production, perio mix, diagnosis, and exam disruption.",
    ],
    whyItMatters:
      "Expansion decisions are stronger when the practice proves capacity and workflow before spending on construction.",
  },
  {
    title: "Should we add another front desk hire or clarify ownership first?",
    situation:
      "The team feels overwhelmed, but the symptoms point to unclear responsibility before confirmed headcount need.",
    teamInput: [
      "Two front desk employees overlap from 9 AM to 3 PM.",
      "Calls are missed during checkout.",
      "Checkout backs up after hygiene.",
      "Both employees assume the other person is watching texts.",
    ],
    decision:
      "Clarify role ownership and measure the bottleneck before adding headcount.",
    whyNot:
      "Hiring can hide a process problem. If ownership is unclear, another person may add cost without fixing missed calls or checkout delays.",
    nextSteps: [
      "Assign one owner for calls, texts, checkout, and follow-up windows.",
      "Track missed calls, checkout time, and patient wait time.",
      "Review results before approving a new role.",
    ],
    whyItMatters:
      "Staffing decisions improve when the practice separates true capacity constraints from unclear workflow ownership.",
  },
];

export default function DecisionExamplesSection() {
  return (
    <section className="decision-examples" aria-labelledby="decision-examples-title">
      <div className="decision-examples__inner">
        <div className="decision-examples__header">
          <h2 id="decision-examples-title">
            How Smarter Practice AI thinks through real decisions
          </h2>
          <p>
            Not generic answers. Structured thinking based on your practice's
            numbers, constraints, and goals.
          </p>
        </div>

        <div className="decision-examples__cards">
          {decisionExamples.map((example) => (
            <article className="decision-examples__card" key={example.title}>
              <h3>{example.title}</h3>

              <div className="decision-examples__block">
                <h4>Situation</h4>
                <p>{example.situation}</p>
              </div>

              <div className="decision-examples__block">
                <h4>Team Input</h4>
                <ul>
                  {example.teamInput.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="decision-examples__decision">
                <h4>Decision</h4>
                <p>{example.decision}</p>
              </div>

              <div className="decision-examples__block">
                <h4>Why not X</h4>
                <p>{example.whyNot}</p>
              </div>

              <div className="decision-examples__block">
                <h4>What to do next</h4>
                <ol>
                  {example.nextSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="decision-examples__block">
                <h4>Why it matters</h4>
                <p>{example.whyItMatters}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
