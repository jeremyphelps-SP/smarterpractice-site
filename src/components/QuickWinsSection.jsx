import "./QuickWinsSection.css";

const challengeLabels = {
  "owner-bottleneck": "Reduce owner interruptions",
  "patient-communication": "Improve patient communication",
  "insurance-billing": "Clean up insurance and billing workflows",
  "team-training": "Train the team faster",
  "growth-case-acceptance": "Grow production and case acceptance",
};

const quickWinsByChallenge = {
  default: [
    {
      title: "Missed Appointment Follow-Up",
      description:
        "Draft a calm, professional message to re-engage a patient after a missed appointment.",
      key: "missed-appointment",
    },
    {
      title: "Insurance Explanation",
      description:
        "Explain coverage and costs clearly to reduce confusion and frustration.",
      key: "insurance-explanation",
    },
    {
      title: "Front Desk Job Posting",
      description:
        "Create a clear, structured job post to attract better candidates.",
      key: "job-posting",
    },
  ],
  "owner-bottleneck": [
    {
      title: "Prepare a recommendation before asking the doctor",
      description:
        "Help the team bring a clear recommendation instead of an open-ended question.",
      key: "owner-recommendation",
    },
    {
      title: "Turn a recurring question into a checklist",
      description:
        "Capture repeated owner interruptions as reusable team guidance.",
      key: "recurring-question-checklist",
    },
    {
      title: "Draft a team decision note",
      description:
        "Summarize the issue, options, risks, and recommended next step before escalating.",
      key: "decision-note",
    },
  ],
  "patient-communication": [
    {
      title: "Missed Appointment Follow-Up",
      description:
        "Draft a calm, professional message to re-engage a patient after a missed appointment.",
      key: "missed-appointment",
    },
    {
      title: "Insurance Explanation",
      description:
        "Explain coverage and costs clearly to reduce confusion and frustration.",
      key: "insurance-explanation",
    },
    {
      title: "Treatment Follow-Up Message",
      description:
        "Create a clear follow-up message after a consultation or unscheduled treatment plan.",
      key: "treatment-follow-up",
    },
  ],
  "insurance-billing": [
    {
      title: "Insurance Explanation",
      description:
        "Explain coverage and costs clearly to reduce confusion and frustration.",
      key: "insurance-explanation",
    },
    {
      title: "Claims Follow-Up Script",
      description:
        "Create a structured call script for checking claim status with a payer.",
      key: "claims-follow-up",
    },
    {
      title: "A/R Workflow Checklist",
      description:
        "Turn aging balances and follow-up steps into a clearer weekly workflow.",
      key: "ar-workflow",
    },
  ],
  "team-training": [
    {
      title: "Front Desk Job Posting",
      description:
        "Create a clear, structured job post to attract better candidates.",
      key: "job-posting",
    },
    {
      title: "New Hire Onboarding Checklist",
      description:
        "Build a practical checklist for training a new front desk or admin team member.",
      key: "onboarding-checklist",
    },
    {
      title: "SOP From a Recurring Task",
      description:
        "Turn an informal daily workflow into a simple SOP the team can reuse.",
      key: "sop-recurring-task",
    },
  ],
  "growth-case-acceptance": [
    {
      title: "Treatment Follow-Up Message",
      description:
        "Create a clear follow-up message after a consultation or unscheduled treatment plan.",
      key: "treatment-follow-up",
    },
    {
      title: "Reactivation Campaign",
      description:
        "Draft outreach for patients who are overdue, inactive, or unscheduled.",
      key: "reactivation-campaign",
    },
    {
      title: "Review Request Message",
      description:
        "Create a simple, natural message asking satisfied patients for reviews.",
      key: "review-request",
    },
  ],
};

export default function QuickWinsSection({
  selectedChallenge = null,
  onSelectQuickWin = () => {},
}) {
  const quickWins =
    quickWinsByChallenge[selectedChallenge] || quickWinsByChallenge.default;
  const selectedChallengeLabel = selectedChallenge
    ? challengeLabels[selectedChallenge]
    : "";

  return (
    <section className="quick-wins" aria-labelledby="quick-wins-title">
      <div className="quick-wins__inner">
        <div className="quick-wins__header">
          <h2 id="quick-wins-title">Try this in your practice today</h2>
          <p>
            These are real, practical ways dental teams are already using
            Smarter Practice AI.
          </p>
          {selectedChallengeLabel && (
            <p className="quick-wins__context">
              Quick wins for: {selectedChallengeLabel}
            </p>
          )}
        </div>

        <div className="quick-wins__cards" aria-label="3-minute quick wins">
          {quickWins.map((quickWin) => (
            <button
              className="quick-wins__card"
              key={quickWin.key}
              type="button"
              onClick={() => onSelectQuickWin(quickWin.key)}
            >
              <span>{quickWin.title}</span>
              <p>{quickWin.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
