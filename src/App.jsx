import { useEffect, useState } from "react";
import CoachCapabilities from "./components/CoachCapabilities";
import CoachScenarioMatrix from "./components/CoachScenarioMatrix";
import AIStudioTeaser from "./components/AIStudioTeaser";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProofStrip from "./components/ProofStrip";
import SiteNav from "./components/SiteNav";
import TrialCTA from "./components/TrialCTA";
import AIStudioPage from "./pages/AIStudioPage";
import ContactPage from "./pages/ContactPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import { getRouteState } from "./utils/routes";
import { applySeoMetadata } from "./utils/seo";

function HomePage() {
  const selectedChallenge = null;
  const [selectedCoachCategory, setSelectedCoachCategory] =
    useState("Get Paid Faster");

  return (
    <>
      <Hero />

      <ProofStrip />

      <CoachCapabilities
        selectedCategoryName={selectedCoachCategory}
        onSelectCategory={setSelectedCoachCategory}
      />

      <div id="scenario-matrix">
        <CoachScenarioMatrix selectedChallenge={selectedChallenge} />
      </div>

      <AIStudioTeaser />

      <TrialCTA selectedChallenge={selectedChallenge} />
    </>
  );
}

export default function App() {
  const [routeState, setRouteState] = useState(() =>
    getRouteState(window.location),
  );
  let page = <HomePage />;

  useEffect(() => {
    const syncRouteState = () => {
      setRouteState(getRouteState(window.location));
    };

    window.addEventListener("hashchange", syncRouteState);
    window.addEventListener("popstate", syncRouteState);

    return () => {
      window.removeEventListener("hashchange", syncRouteState);
      window.removeEventListener("popstate", syncRouteState);
    };
  }, []);

  useEffect(() => {
    applySeoMetadata(routeState.routeKey);
  }, [routeState.routeKey]);

  useEffect(() => {
    if (!routeState.anchorId) {
      window.scrollTo({ top: 0 });
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(routeState.anchorId)?.scrollIntoView();
      });
    });
  }, [routeState]);

  if (routeState.routeKey === "terms") {
    page = <TermsPage />;
  } else if (routeState.routeKey === "privacy") {
    page = <PrivacyPage />;
  } else if (routeState.routeKey === "howItWorks") {
    page = <HowItWorksPage />;
  } else if (routeState.routeKey === "aiStudio") {
    page = <AIStudioPage />;
  } else if (routeState.routeKey === "contact") {
    page = <ContactPage />;
  }

  return (
    <>
      <SiteNav
        currentAnchor={routeState.anchorId}
        currentRoute={routeState.routeKey}
      />
      {page}
      <Footer />
    </>
  );
}
