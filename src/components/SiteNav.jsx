import { useEffect, useState } from "react";
import { anchorHref, routeHref } from "../utils/routes";
import "./SiteNav.css";

const navLinks = [
  { label: "Home", href: anchorHref("top"), key: "home" },
  { label: "Examples", href: anchorHref("scenario-matrix"), key: "examples" },
  { label: "AI Studio", href: routeHref("aiStudio"), key: "studio" },
  { label: "How It Works", href: routeHref("howItWorks"), key: "how" },
];

function getActiveKey(currentRoute, currentAnchor) {
  if (currentRoute === "aiStudio") {
    return "studio";
  }

  if (currentRoute === "howItWorks") {
    return "how";
  }

  if (currentAnchor === "scenario-matrix") {
    return "examples";
  }

  return "home";
}

export default function SiteNav({ currentAnchor = "", currentRoute = "home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeKey = getActiveKey(currentRoute, currentAnchor);
  const trialHref = anchorHref("trial");

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("hashchange", closeMenu);

    return () => {
      window.removeEventListener("hashchange", closeMenu);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-nav" aria-label="Site navigation">
      <div className="site-nav__inner">
        <a className="site-nav__brand" href={anchorHref("top")}>
          <span className="site-nav__mark">SP</span>
          <span>
            <span className="site-nav__brand-primary">Smarter Practice</span>
            <span className="site-nav__brand-secondary">AI</span>
          </span>
        </a>

        <nav className="site-nav__links" aria-label="Primary links">
          {navLinks.map((link) => (
            <a
              aria-current={activeKey === link.key ? "page" : undefined}
              href={link.href}
              key={link.key}
            >
              {link.label}
            </a>
          ))}
          <a className="site-nav__trial-link" href={trialHref}>
            Start Trial
          </a>
        </nav>

        <div className="site-nav__mobile-actions">
          <button
            aria-controls="site-nav-menu"
            aria-expanded={isMenuOpen}
            className="site-nav__menu-button"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            Menu
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile primary links"
        className={`site-nav__mobile-panel${
          isMenuOpen ? " site-nav__mobile-panel--open" : ""
        }`}
        hidden={!isMenuOpen}
        id="site-nav-menu"
      >
        {navLinks.map((link) => (
          <a
            aria-current={activeKey === link.key ? "page" : undefined}
            href={link.href}
            key={link.key}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        <a
          className="site-nav__mobile-panel-trial"
          href={trialHref}
          onClick={handleLinkClick}
        >
          Start Trial
        </a>
      </nav>
    </header>
  );
}
