import "./AIImageStudio.css";

const studioImages = {
  original: import.meta.env.BASE_URL + "images/ai-studio/original.jpg",
  featured: import.meta.env.BASE_URL + "images/ai-studio/wedding.jpg",
  thumbnails: [
    {
      src: import.meta.env.BASE_URL + "images/ai-studio/wedding.jpg",
      label: "Wedding cover",
    },
    {
      src: import.meta.env.BASE_URL + "images/ai-studio/luxury.jpg",
      label: "Luxury concept",
    },
    {
      src: import.meta.env.BASE_URL + "images/ai-studio/lifestyle.jpg",
      label: "Lifestyle visual",
    },
  ],
};

const valueCards = [
  {
    title: "Make treatment real",
    body: "Patients can see a personalized version of what they are considering.",
  },
  {
    title: "Create faster",
    body: "Generate branded concepts without waiting on a designer.",
  },
  {
    title: "Present consistently",
    body: "Give your team a repeatable way to support case acceptance.",
  },
];

export default function AIImageStudio() {
  return (
    <section className="ai-studio" aria-labelledby="ai-studio-title">
      <div className="ai-studio__intro">
        <p className="ai-studio__eyebrow">CASE ACCEPTANCE VISUALS</p>
        <div className="ai-studio__heading-group">
          <p
            style={{
              margin: "0 0 10px",
              color: "#52606d",
              fontSize: "0.95rem",
              fontWeight: 800,
            }}
          >
            Another way Smarter Practice AI helps your team:
          </p>
          <h2 id="ai-studio-title">AI Image Studio for Case Acceptance</h2>
          <p className="ai-studio__subheadline">
            Turn authorized patient photos into personalized treatment
            presentations in minutes&mdash;not days.
          </p>
        </div>
        <p className="ai-studio__body">
          Create polished, branded smile makeover concepts, promotional flyers,
          and patient-specific visuals that help patients understand the value
          of treatment.
        </p>
        <a className="ai-studio__cta" href="#ai-studio-workflow">
          See the workflow
        </a>
      </div>

      <div className="ai-studio__image-area" id="ai-studio-workflow">
        <article className="ai-studio__photo-card ai-studio__photo-card--original">
          <div className="ai-studio__card-label">
            <span>Authorized photo</span>
            <strong>Original</strong>
          </div>
          <img
            src={studioImages.original}
            alt="Authorized patient photo before AI Image Studio styling"
          />
        </article>

        <article className="ai-studio__photo-card ai-studio__photo-card--output">
          <div className="ai-studio__card-label">
            <span>Generated presentation</span>
            <strong>Output concepts</strong>
          </div>
          <img
            className="ai-studio__featured-image"
            src={studioImages.featured}
            alt="Generated wedding magazine style smile makeover flyer"
          />
          <div className="ai-studio__thumbnails" aria-label="Generated output examples">
            {studioImages.thumbnails.map((image) => (
              <figure key={image.label}>
                <img src={image.src} alt={`${image.label} generated output`} />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </article>
      </div>

      <div className="ai-studio__values">
        {valueCards.map((card) => (
          <article className="ai-studio__value-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>

      <article className="ai-studio__prompt-card">
        <p className="ai-studio__prompt-label">Example prompt</p>
        <blockquote>
          &ldquo;Create a smile makeover flyer using our branding for the person
          pictured. She is planning a wedding, so make it feel like a classy
          wedding magazine cover. Include whitening for $399, Invisalign for
          $2199, and veneers starting at $6999.&rdquo;
        </blockquote>
      </article>

      <p className="ai-studio__compliance">
        Use only with appropriate patient authorization. Generated visuals are
        for communication, education, and presentation support&mdash;not diagnosis,
        treatment planning, clinical simulation, or guaranteed results.
      </p>
    </section>
  );
}
