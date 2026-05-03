import "./ProofStrip.css";

const proofPoints = [
  "Fewer denied claims",
  "Faster collections",
  "Clearer patient communication",
  "More consistent team workflows",
  "Safer practice-owned AI use",
];

export default function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Practice value highlights">
      <div className="proof-strip__inner">
        {proofPoints.map((point) => (
          <article className="proof-strip__item" key={point}>
            <span aria-hidden="true" />
            <p>{point}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
