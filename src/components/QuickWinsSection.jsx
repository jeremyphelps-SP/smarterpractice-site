import "./QuickWinsSection.css";

const quickWins = [
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
];

export default function QuickWinsSection({ onSelectQuickWin = () => {} }) {
  return (
    <section className="quick-wins" aria-labelledby="quick-wins-title">
      <div className="quick-wins__inner">
        <div className="quick-wins__header">
          <h2 id="quick-wins-title">Try this in your practice today</h2>
          <p>
            These are real, practical ways dental teams are already using
            Smarter Practice AI.
          </p>
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
