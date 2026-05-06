import { anchorHref } from "../utils/routes";
import "./PrivacyPage.css";

const privacySections = [
  {
    title: "Information We Collect",
    body: "We may collect information you provide directly, such as account details, practice information, messages, uploaded content, and workflow inputs, along with basic usage, device, and technical information needed to operate and improve the service.",
  },
  {
    title: "How We Use Information",
    body: "We use information to provide Smarter Practice AI, support dental practice workflows, respond to requests, maintain service reliability, improve user experience, and communicate about the service.",
  },
  {
    title: "Protected Health Information",
    body: "Because Smarter Practice AI supports dental practice workflows, users should be careful with patient or protected health information. Do not upload sensitive patient information unless you have determined that doing so is appropriate for your practice and your legal obligations.",
  },
  {
    title: "AI Usage and Uploaded Content",
    body: "Content entered into AI workflows may be processed to generate responses and support requested features. Avoid entering confidential, sensitive, or regulated information unless your practice has approved that use.",
  },
  {
    title: "Third-Party Services",
    body: "We may use third-party providers for hosting, analytics, infrastructure, communications, or AI functionality. These providers may process information according to their own terms and privacy practices.",
  },
  {
    title: "Data Security",
    body: "We use reasonable administrative and technical safeguards intended to protect information. No online service can guarantee absolute security, and users should maintain appropriate internal controls.",
  },
  {
    title: "Data Retention",
    body: "We retain information for as long as needed to provide the service, meet business needs, resolve issues, and comply with applicable obligations, unless a shorter retention period is required.",
  },
  {
    title: "Your Choices",
    body: "You may choose what information to provide, limit sensitive inputs, and contact Smarter Practice AI with privacy-related questions or requests. Some choices may affect how the service works.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this policy as the service changes. Updated versions will be posted with a revised effective date or similar notice when appropriate.",
  },
  {
    title: "Contact",
    body: "Contact Smarter Practice AI with questions about this privacy policy.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="privacy-page" aria-labelledby="privacy-page-title">
      <div className="privacy-page__inner">
        <a className="privacy-page__back-link" href={anchorHref("top")}>
          Back to home
        </a>
        <header className="privacy-page__header">
          <p className="privacy-page__eyebrow">Legal</p>
          <h1 id="privacy-page-title">Privacy Policy</h1>
          <p>
            Privacy matters because Smarter Practice AI supports dental practice
            workflows involving operations, communication, training, and
            business decisions.
          </p>
        </header>
        <div className="privacy-page__sections">
          {privacySections.map((section) => (
            <section className="privacy-page__section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
