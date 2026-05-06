import "./Footer.css";

export default function Footer() {
  const aiStudioUrl = `${import.meta.env.BASE_URL}#/ai-studio`;
  const howItWorksUrl = `${import.meta.env.BASE_URL}#/how-it-works`;
  const termsUrl = `${import.meta.env.BASE_URL}#/terms`;
  const privacyUrl = `${import.meta.env.BASE_URL}#/privacy`;

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <strong>Smarter Practice AI</strong>
          <p>ChatGPT, structured for smarter dental practice ownership.</p>
        </div>
        <nav className="site-footer__links" aria-label="Footer links">
          <a href={aiStudioUrl}>AI Studio</a>
          <a href={howItWorksUrl}>How It Works</a>
          <a href={termsUrl}>Terms of Use</a>
          <a href={privacyUrl}>Privacy Policy</a>
        </nav>
        <div className="site-footer__legal">
          <p>Smarter Practice AI is not affiliated with or endorsed by OpenAI.</p>
          <p>&copy; 2026 Smarter Practice AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
