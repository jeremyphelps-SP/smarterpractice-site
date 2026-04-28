import { trackEvent } from "../utils/analytics";
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
    {
      title: "Treatment Follow-Up Message",
      description:
        "Create a clear follow-up message after a consultation or unscheduled treatment plan.",
      key: "treatment-follow-up",
    },
    {
      title: "Claims Follow-Up Script",
      description:
        "Create a structured call script for checking claim status with a payer.",
      key: "claims-follow-up",
    },
    {
      title: "Review Request Message",
      description:
        "Create a simple, natural message asking satisfied patients for reviews.",
      key: "review-request",
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
    {
      title: "Doctor Interruption Triage",
      description:
        "Create a simple rule for what needs the doctor now and what can wait.",
      key: "doctor-interruption-triage",
    },
    {
      title: "Owner-Level Weekly Update",
      description:
        "Summarize key team issues, decisions needed, and progress in one concise note.",
      key: "owner-weekly-update",
    },
    {
      title: "Delegate the Next Step",
      description:
        "Turn an owner answer into clear ownership, deadline, and follow-up instructions.",
      key: "delegate-next-step",
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
    {
      title: "Service Recovery Reply",
      description:
        "Draft a calm response when a patient is frustrated about timing, fees, or confusion.",
      key: "service-recovery-reply",
    },
    {
      title: "Pre-Visit Expectation Message",
      description:
        "Set expectations before an appointment so patients arrive prepared and confident.",
      key: "pre-visit-expectation",
    },
    {
      title: "Post-Op Check-In",
      description:
        "Create a friendly follow-up message after treatment to answer common concerns.",
      key: "post-op-check-in",
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
    {
      title: "Denial Appeal Outline",
      description:
        "Organize the evidence, narrative, and next steps needed for an appeal.",
      key: "denial-appeal-outline",
    },
    {
      title: "Estimate Variance Explanation",
      description:
        "Help the team explain why a final balance differs from the original estimate.",
      key: "estimate-variance",
    },
    {
      title: "Payer Escalation Summary",
      description:
        "Summarize stalled payer issues so the next call starts with the right context.",
      key: "payer-escalation-summary",
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
    {
      title: "Phone Script Practice",
      description:
        "Create a training script for common patient questions and front desk handoffs.",
      key: "phone-script-practice",
    },
    {
      title: "Role Clarity Checklist",
      description:
        "Clarify who owns calls, texts, checkout, follow-up, and daily exceptions.",
      key: "role-clarity-checklist",
    },
    {
      title: "Daily Huddle Prompt",
      description:
        "Build a short agenda that helps the team surface blockers before the day starts.",
      key: "daily-huddle-prompt",
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
    {
      title: "Large Case Follow-Up",
      description:
        "Draft a next-step message for a patient who paused after a major consult.",
      key: "large-case-follow-up",
    },
    {
      title: "Unscheduled Treatment List",
      description:
        "Create a practical call plan for patients with diagnosed but unscheduled treatment.",
      key: "unscheduled-treatment-list",
    },
    {
      title: "Referral Ask Message",
      description:
        "Write a natural message inviting loyal patients to refer friends or family.",
      key: "referral-ask-message",
    },
  ],
};

export default function QuickWinsSection({
  selectedChallenge = null,
  onSelectQuickWin = () => {},
}) {
  const quickWins =
    quickWinsByChallenge[selectedChallenge] || quickWinsByChallenge.default;
  const visibleQuickWins = quickWins.slice(0, 3);
  const selectedChallengeLabel = selectedChallenge
    ? challengeLabels[selectedChallenge]
    : "";

  const handleQuickWinClick = (quickWin) => {
    trackEvent("quick_win_selected", {
      selectedChallenge,
      quickWinKey: quickWin.key,
      quickWinTitle: quickWin.title,
    });
    onSelectQuickWin(quickWin.key);
  };

  return (
    <section className="quick-wins" aria-labelledby="quick-wins-title">
      <div className="quick-wins__inner">
        <div className="quick-wins__header">
          <h2 id="quick-wins-title">
            Try one of these in your practice today
          </h2>
          <p>
            These are real, practical ways dental teams are already using
            Smarter Practice AI.
          </p>
          <p className="quick-wins__differentiator">
            Not generic prompts - these are built on real practice workflows,
            data, and decisions.
          </p>
          {selectedChallengeLabel && (
            <p className="quick-wins__context">
              Quick wins for: {selectedChallengeLabel}
            </p>
          )}
        </div>

        <div className="quick-wins__cards" aria-label="3-minute quick wins">
          {visibleQuickWins.map((quickWin) => (
            <button
              className="quick-wins__card"
              key={quickWin.key}
              type="button"
              onClick={() => handleQuickWinClick(quickWin)}
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
