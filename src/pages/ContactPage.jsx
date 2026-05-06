import TrialCTA from "../components/TrialCTA";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <main className="contact-page" aria-labelledby="contact-page-title">
      <section className="contact-page__hero">
        <p className="contact-page__eyebrow">Contact</p>
        <h1 id="contact-page-title">Contact Smarter Practice AI</h1>
        <p>
          Ask about trial access, dental-practice workflows, and safer team use
          of ChatGPT inside Smarter Practice AI.
        </p>
      </section>

      <TrialCTA />
    </main>
  );
}
