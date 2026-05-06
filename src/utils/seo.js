import { canonicalUrlForRoute } from "./routes";

const siteName = "Smarter Practice AI";

const seoProfiles = {
  home: {
    title: "Smarter Practice AI | ChatGPT for Dental Practice Operations",
    description:
      "Smarter Practice AI helps dental practices use ChatGPT in a safer, dental-specific, structured way for insurance, billing, scheduling, patient communication, training, SOPs, compliance, and practice operations.",
  },
  howItWorks: {
    title:
      "How Smarter Practice AI Helps Dental Practices Use ChatGPT Safely",
    description:
      "See how Smarter Practice AI turns random ChatGPT use into structured dental practice workflows for owners, office managers, and teams.",
  },
  aiStudio: {
    title: "AI Smile Studio for Dental Practice Marketing",
    description:
      "Create practice-appropriate AI-assisted dental marketing visuals and case acceptance concepts inside a safer Smarter Practice AI workflow.",
  },
  contact: {
    title: "Contact Smarter Practice AI",
    description:
      "Contact Smarter Practice AI to ask about trial access, dental-practice workflows, and safer team use of ChatGPT.",
  },
  terms: {
    title: "Terms of Use | Smarter Practice AI",
    description: "Terms of use for Smarter Practice AI.",
  },
  privacy: {
    title: "Privacy Policy | Smarter Practice AI",
    description: "Privacy policy for Smarter Practice AI.",
  },
};

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export function applySeoMetadata(routeKey) {
  const profile = seoProfiles[routeKey] || seoProfiles.home;
  const canonicalUrl = canonicalUrlForRoute(routeKey);

  document.title = profile.title;
  upsertMeta("name", "description", profile.description);
  upsertCanonical(canonicalUrl);

  upsertMeta("property", "og:site_name", siteName);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:title", profile.title);
  upsertMeta("property", "og:description", profile.description);
  upsertMeta("property", "og:url", canonicalUrl);

  upsertMeta("name", "twitter:card", "summary");
  upsertMeta("name", "twitter:title", profile.title);
  upsertMeta("name", "twitter:description", profile.description);
}
