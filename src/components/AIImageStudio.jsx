import { useEffect, useRef, useState } from "react";
import { assetUrl } from "../utils/routes";
import "./AIImageStudio.css";

const generatedImages = [
  {
    id: "lululemon",
    src: assetUrl("images/ai-studio/lululemon.png"),
    styleName: "Fitness",
    inspiration: "Lululemon",
    alt: "Generated fitness lifestyle smile makeover presentation",
  },
  {
    id: "apple",
    src: assetUrl("images/ai-studio/apple.png"),
    styleName: "Tech Minimal",
    inspiration: "Apple",
    alt: "Generated tech minimalist smile makeover presentation",
  },
  {
    id: "peloton",
    src: assetUrl("images/ai-studio/peloton.png"),
    styleName: "Sport Performance",
    inspiration: "Peloton",
    alt: "Generated sport performance smile makeover presentation",
  },
  {
    id: "rolex",
    src: assetUrl("images/ai-studio/rolex.png"),
    styleName: "Luxury",
    inspiration: "Rolex",
    alt: "Generated luxury smile makeover presentation",
  },
  {
    id: "maldives",
    src: assetUrl("images/ai-studio/maldives.png"),
    styleName: "Travel Lifestyle",
    inspiration: "Maldives",
    alt: "Generated travel lifestyle smile makeover presentation",
  },
  {
    id: "better-homes",
    src: assetUrl("images/ai-studio/better-homes.png"),
    styleName: "Home Lifestyle",
    inspiration: "Better Homes",
    alt: "Generated home lifestyle smile makeover presentation",
  },
];

const studioImages = {
  original: assetUrl("images/ai-studio/original.jpg"),
};

const workflowSteps = [
  "Upload a real patient photo (with authorization)",
  "Describe the outcome and lifestyle context",
  "Draft a personalized presentation concept",
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

  const handleWorkflowClick = () => {
    document
      .getElementById("ai-studio-workflow")
      ?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <section className="ai-studio" aria-labelledby="ai-studio-title">
      <p className="ai-studio__section-bridge">
        One proof example inside the Smarter Practice AI workspace
      </p>
      <div className="ai-studio__intro">
        <p className="ai-studio__eyebrow">Proof example</p>
        <div className="ai-studio__heading-group">
          <p className="ai-studio__example-label">
            One example: improving case acceptance
          </p>
          <h2 id="ai-studio-title">
            Help patients picture the value before they decide
          </h2>
        </div>
        <p className="ai-studio__body">
          Here&rsquo;s how Smarter Practice AI helps your team turn authorized
          patient photos into personalized, branded visuals that make treatment
          easier to understand.
        </p>
        <button
          className="ai-studio__cta"
          onClick={handleWorkflowClick}
          type="button"
        >
          See the workflow
        </button>
      </div>

      <article className="ai-studio__workflow" aria-label="How AI Image Studio works">
        <div>
          <h3 className="ai-studio__workflow-label">How it works</h3>
          <p className="ai-studio__workflow-subtext">
            Create a stronger first draft before your team reviews and refines it.
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
            <span>Original authorized photo</span>
            <strong>Before</strong>
          </div>
          <img
            src={studioImages.original}
            alt="Authorized patient photo before AI Image Studio styling"
          />
        </article>

        <article className="ai-studio__photo-card ai-studio__photo-card--output">
          <div className="ai-studio__card-label">
            <span>Generated presentation concept</span>
            <strong>{selectedImage.styleName}</strong>
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
                <figcaption>
                  <span className="ai-studio__thumbnail-label">
                    {image.styleName}
                  </span>
                  <span className="ai-studio__thumbnail-reference">
                    ({image.inspiration})
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </article>
      </div>

      <p className="ai-studio__bridge">
        Patients make better decisions when they can clearly picture the value.
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
        <p className="ai-studio__consistency">
          Give your team a repeatable way to create these &mdash; without
          guessing what to ask.
        </p>
      </article>

      <p className="ai-studio__compliance">
        Use only with appropriate patient authorization. Generated visuals are
        for communication, education, and presentation support &mdash; not diagnosis,
        treatment planning, clinical simulation, or guaranteed results.
      </p>
    </section>
  );
}
