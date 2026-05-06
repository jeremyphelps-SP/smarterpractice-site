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
import HowItWorksPage from "./pages/HowItWorksPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

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
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  let page = <HomePage />;

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (!currentHash) {
      return;
    }

    if (currentHash.startsWith("#/")) {
      window.scrollTo({ top: 0 });
      return;
    }

    const targetId = currentHash.slice(1);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView();
      });
    });
  }, [currentHash]);

  if (currentHash === "#/terms") {
    page = <TermsPage />;
  } else if (currentHash === "#/privacy") {
    page = <PrivacyPage />;
  } else if (currentHash === "#/how-it-works") {
    page = <HowItWorksPage />;
  } else if (currentHash === "#/ai-studio") {
    page = <AIStudioPage />;
  }

  return (
    <>
      <SiteNav currentHash={currentHash} />
      {page}
      <Footer />
    </>
  );
}
