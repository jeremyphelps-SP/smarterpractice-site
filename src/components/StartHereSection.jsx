import "./StartHereSection.css";

const challengeOptions = [
  {
    title: "Reduce owner interruptions",
    description:
      "Help your team prepare better drafts, answers, and recommendations before escalating to the doctor.",
    challengeKey: "owner-bottleneck",
  },
  {
    title: "Improve patient communication",
    description:
      "Create clearer messages for scheduling, treatment follow-up, payments, insurance questions, and service recovery.",
    challengeKey: "patient-communication",
  },
  {
    title: "Clean up insurance and billing workflows",
    description:
      "Bring more structure to claims follow-up, payer issues, financial explanations, and A/R workflows.",
    challengeKey: "insurance-billing",
  },
  {
    title: "Train the team faster",
    description:
      "Turn recurring questions, informal knowledge, and daily workflows into SOPs, scripts, and checklists.",
    challengeKey: "team-training",
  },
  {
    title: "Grow production and case acceptance",
    description:
      "Support reactivation, treatment follow-up, case presentation, reviews, referrals, and campaign ideas.",
    challengeKey: "growth-case-acceptance",
  },
];

export default function StartHereSection({ onSelectChallenge = () => {} }) {
  return (
    <section className="start-here" aria-labelledby="start-here-title">
      <div className="start-here__inner">
        <div className="start-here__header">
          <p className="start-here__positioning">
            Smarter Practice AI helps your team make better decisions,
            communicate more clearly, and run a more profitable practice.
          </p>
          <h2 id="start-here-title">What do you want to improve first?</h2>
          <p>
            Choose a common practice challenge and see practical ways Smarter
            Practice AI helps your team handle real problems.
          </p>
          <p className="start-here__training-note">
            Capture your practice's knowledge. Don't let it walk out the door.
          </p>
        </div>

        <div className="start-here__cards" aria-label="Choose a practice challenge">
          {challengeOptions.map((challenge) => (
            <button
              className="start-here__card"
              key={challenge.challengeKey}
              type="button"
              onClick={() => onSelectChallenge(challenge.challengeKey)}
            >
              <span>{challenge.title}</span>
              <p>{challenge.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
