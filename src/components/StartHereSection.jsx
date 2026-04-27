import "./StartHereSection.css";

const roleOptions = [
  {
    title: "Dentist Owner",
    description:
      "Reduce interruptions, improve decisions, and give your team better first-draft thinking.",
    roleKey: "owner",
  },
  {
    title: "Office Manager",
    description:
      "Create SOPs, improve communication, and bring more structure to daily operations.",
    roleKey: "manager",
  },
  {
    title: "Front Desk / Treatment Coordinator",
    description:
      "Handle patient communication with more clarity, consistency, and confidence.",
    roleKey: "frontdesk",
  },
];

export default function StartHereSection({ onSelectRole = () => {} }) {
  return (
    <section className="start-here" aria-labelledby="start-here-title">
      <div className="start-here__inner">
        <div className="start-here__header">
          <h2 id="start-here-title">Where should you start?</h2>
          <p>
            Choose your role and see practical ways Smarter Practice AI can help
            your team use ChatGPT more effectively.
          </p>
        </div>

        <div className="start-here__cards" aria-label="Choose your role">
          {roleOptions.map((role) => (
            <button
              className="start-here__card"
              key={role.roleKey}
              type="button"
              onClick={() => onSelectRole(role.roleKey)}
            >
              <span>{role.title}</span>
              <p>{role.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
