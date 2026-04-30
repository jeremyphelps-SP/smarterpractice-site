import "./TermsPage.css";

const termsSections = [
  {
    title: "Use of the Service",
    body: "Smarter Practice AI is intended to help dental practice teams organize common business workflows, draft operational materials, and think through practice management decisions. You agree to use the service lawfully, responsibly, and only for purposes appropriate for your practice.",
  },
  {
    title: "No Medical, Legal, Financial, or Clinical Advice",
    body: "Smarter Practice AI does not provide medical, legal, financial, clinical, or professional advice. Content generated through the service should be reviewed by qualified professionals before it is used for decisions involving patient care, legal obligations, compliance, billing, employment, or financial matters.",
  },
  {
    title: "AI-Generated Content",
    body: "AI-generated content can be incomplete, inaccurate, or inappropriate for a specific situation. You are responsible for reviewing, editing, and approving any output before relying on it or sharing it with patients, staff, vendors, insurers, or other third parties.",
  },
  {
    title: "User Responsibilities",
    body: "You are responsible for the information you enter, the way your team uses the service, and the decisions made from any generated content. You should maintain appropriate supervision, policies, and review processes for your practice.",
  },
  {
    title: "Privacy and Protected Information",
    body: "You should avoid entering protected health information, sensitive employee information, financial account details, or other confidential information unless you have confirmed that doing so is appropriate for your practice and your obligations.",
  },
  {
    title: "Third-Party Services",
    body: "Smarter Practice AI may rely on third-party services, infrastructure, or tools to operate. Those services may have their own terms, privacy practices, and availability limitations.",
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Smarter Practice AI is not liable for indirect, incidental, consequential, special, or punitive damages, or for decisions made based on AI-generated content.",
  },
  {
    title: "Changes to These Terms",
    body: "These terms may be updated from time to time. Continued use of Smarter Practice AI after updates are posted means you accept the revised terms.",
  },
  {
    title: "Contact",
    body: "Contact Smarter Practice AI with questions about these terms.",
  },
];

export default function TermsPage() {
  return (
    <main className="terms-page" aria-labelledby="terms-page-title">
      <div className="terms-page__inner">
        <a className="terms-page__back-link" href={import.meta.env.BASE_URL}>
          Back to home
        </a>
        <header className="terms-page__header">
          <p className="terms-page__eyebrow">Legal</p>
          <h1 id="terms-page-title">Terms of Use</h1>
          <p>
            These terms govern your use of Smarter Practice AI and the
            practice-focused workflows, prompts, examples, and AI-supported
            materials available through the service.
          </p>
        </header>
        <div className="terms-page__sections">
          {termsSections.map((section) => (
            <section className="terms-page__section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
