import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <strong>Smarter Practice AI</strong>
          <p>ChatGPT, structured for smarter dental practice ownership.</p>
        </div>
        <nav className="site-footer__links" aria-label="Legal links">
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
        <div className="site-footer__legal">
          <p>Smarter Practice AI is not affiliated with or endorsed by OpenAI.</p>
          <p>© 2026 Smarter Practice AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
