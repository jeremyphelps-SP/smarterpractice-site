import "./StartHereSection.css";

const challengeOptions = [
  {
    title: "Get paid faster",
    description: "Move claims, denials, and balances forward without waiting.",
    challengeKey: "insurance-billing",
    coachCategory: "Get Paid Faster",
  },
  {
    title: "Help patients say yes",
    description: "Make treatment clearer so more patients schedule next steps.",
    challengeKey: "patient-communication",
    coachCategory: "Help Patients Say Yes",
  },
  {
    title: "Fix the schedule",
    description: "Fill gaps, protect provider time, and reduce daily scrambling.",
    challengeKey: "owner-bottleneck",
    coachCategory: "Fix the Schedule",
  },
  {
    title: "Build a stronger team",
    description: "Give the team clearer answers, owners, and next steps.",
    challengeKey: "team-training",
    coachCategory: "Run a Stronger Team",
  },
  {
    title: "Grow production",
    description: "Focus follow-up on the patients most likely to move forward.",
    challengeKey: "growth-case-acceptance",
    coachCategory: "Grow Production",
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
          <p className="start-here__work-cue">
            Your team isn't guessing. They're using the same tools top practices
            rely on every day.
          </p>
        </div>

        <div className="start-here__cards" aria-label="Choose a practice challenge">
          {challengeOptions.map((challenge) => (
            <button
              className="start-here__card"
              key={challenge.challengeKey}
              type="button"
              onClick={() =>
                onSelectChallenge(challenge.challengeKey, challenge.coachCategory)
              }
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
