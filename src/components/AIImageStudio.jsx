import { useEffect, useRef, useState } from "react";
import "./AIImageStudio.css";

const generatedImages = [
  {
    id: "lululemon",
    src: import.meta.env.BASE_URL + "images/ai-studio/lululemon.png",
    label: "Fitness / Lululemon style",
    alt: "Generated fitness lifestyle smile makeover presentation",
  },
  {
    id: "apple",
    src: import.meta.env.BASE_URL + "images/ai-studio/apple.png",
    label: "Tech / Apple style",
    alt: "Generated tech minimalist smile makeover presentation",
  },
  {
    id: "peloton",
    src: import.meta.env.BASE_URL + "images/ai-studio/peloton.png",
    label: "Sport / Peloton style",
    alt: "Generated sport performance smile makeover presentation",
  },
  {
    id: "rolex",
    src: import.meta.env.BASE_URL + "images/ai-studio/rolex.png",
    label: "Luxury / Rolex style",
    alt: "Generated luxury smile makeover presentation",
  },
  {
    id: "maldives",
    src: import.meta.env.BASE_URL + "images/ai-studio/maldives.png",
    label: "Travel / Maldives style",
    alt: "Generated travel lifestyle smile makeover presentation",
  },
  {
    id: "better-homes",
    src: import.meta.env.BASE_URL + "images/ai-studio/better-homes.png",
    label: "Lifestyle / Better Homes",
    alt: "Generated home lifestyle smile makeover presentation",
  },
];

const studioImages = {
  original: import.meta.env.BASE_URL + "images/ai-studio/original.jpg",
};

const workflowSteps = [
  "Upload a real patient photo (with authorization)",
  "Describe the outcome and lifestyle context",
  "Generate a personalized presentation in seconds",
];

const valueCards = [
  {
    title: "Make it personal",
    body: "Show patients a version of themselves \u2014 not a generic example",
  },
  {
    title: "Make it emotional",
    body: "Connect treatment to confidence, lifestyle, and identity",
  },
  {
    title: "Make it easier to say yes",
    body: "Give your team better tools for case presentation",
  },
];

const promptExamples = [
  "Lululemon (fitness)",
  "Apple (tech/minimal)",
  "Peloton (sport/performance)",
  "Rolex (luxury)",
  "Maldives (travel/lifestyle)",
  "Better Homes (lifestyle/home)",
];

export default function AIImageStudio() {
  const [selectedImage, setSelectedImage] = useState(generatedImages[0]);
  const [isFading, setIsFading] = useState(false);
  const fadeTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  const handleThumbnailClick = (image) => {
    if (image.id === selectedImage.id) {
      return;
    }

    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
    }

    setIsFading(true);
    fadeTimeoutRef.current = setTimeout(() => {
      setSelectedImage(image);
      setIsFading(false);
      fadeTimeoutRef.current = null;
    }, 120);
  };

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
            One example: improving case acceptance
          </p>
          <h2 id="ai-studio-title">
            Make treatment real before patients say yes
          </h2>
        </div>
        <p className="ai-studio__body">
          Here&rsquo;s how Smarter Practice AI helps your team turn authorized
          patient photos into personalized, branded visuals that make treatment
          easier to understand.
        </p>
        <a className="ai-studio__cta" href="#ai-studio-workflow">
          See the workflow
        </a>
      </div>

      <article className="ai-studio__workflow" aria-label="How AI Image Studio works">
        <div>
          <h3 className="ai-studio__workflow-label">How it works</h3>
          <p className="ai-studio__workflow-subtext">
            No design work. No back-and-forth. No waiting.
          </p>
        </div>
        <ol className="ai-studio__workflow-steps">
          {workflowSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </article>

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
          <div className="ai-studio__featured-image-frame">
            <img
              className={`ai-studio__featured-image${isFading ? " is-fading" : ""}`}
              src={selectedImage.src}
              alt={selectedImage.alt}
            />
          </div>
          <div className="ai-studio__thumbnails" aria-label="Generated output examples">
            {generatedImages.map((image) => (
              <figure key={image.id}>
                <button
                  type="button"
                  className="ai-studio__thumbnail-button"
                  aria-pressed={selectedImage.id === image.id}
                  onClick={() => handleThumbnailClick(image)}
                >
                  <img src={image.src} alt={image.alt} />
                </button>
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </article>
      </div>

      <p className="ai-studio__bridge">
        Patients don&rsquo;t buy treatment plans. They buy outcomes they can
        picture.
      </p>

      <div className="ai-studio__values">
        {valueCards.map((card) => (
          <article className="ai-studio__value-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>

      <article className="ai-studio__prompt-card">
        <p className="ai-studio__prompt-label">How your team prompts it</p>
        <div className="ai-studio__prompt-structure">
          <p>
            &ldquo;Create a smile makeover presentation using our branding for the
            person pictured.
          </p>
          <p>Position it like a [lifestyle brand].</p>
          <p>Focus on [patient context].</p>
          <p>Include [services + pricing].&rdquo;</p>
        </div>
        <ul className="ai-studio__prompt-examples" aria-label="Prompt examples">
          {promptExamples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
        <p className="ai-studio__consistency">
          Give your team a repeatable way to create these &mdash; without
          guessing what to ask.
        </p>
      </article>

      <p className="ai-studio__compliance">
        Use only with appropriate patient authorization. Generated visuals are
        for communication, education, and presentation support&mdash;not diagnosis,
        treatment planning, clinical simulation, or guaranteed results.
      </p>
    </section>
  );
}
