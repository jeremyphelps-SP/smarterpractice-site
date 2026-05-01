import { useEffect, useRef, useState } from "react";
import AboutSection from "./components/AboutSection";
import CoachCapabilities from "./components/CoachCapabilities";
import CoachScenarioMatrix from "./components/CoachScenarioMatrix";
import AIImageStudio from "./components/AIImageStudio";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import QuickWinsSection from "./components/QuickWinsSection";
import StartHereSection from "./components/StartHereSection";
import TrialCTA from "./components/TrialCTA";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import { trackEvent } from "./utils/analytics";

function HomePage() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [selectedCoachCategory, setSelectedCoachCategory] =
    useState("Get Paid Faster");
  const [selectedQuickWin, setSelectedQuickWin] = useState(null);
  const matrixRef = useRef(null);
  const coachCapabilitiesRef = useRef(null);

  const handleSelectChallenge = (challengeKey, coachCategory) => {
    setSelectedQuickWin(null);
    setSelectedChallenge(challengeKey);

    if (coachCategory) {
      setSelectedCoachCategory(coachCategory);
    }

    trackEvent("challenge_selected", {
      selectedChallenge: challengeKey,
      selectedCoachCategory: coachCategory,
    });

    requestAnimationFrame(() => {
      coachCapabilitiesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleSelectQuickWin = (quickWinKey) => {
    setSelectedQuickWin({
      key: quickWinKey,
      selectedAt: Date.now(),
    });

    requestAnimationFrame(() => {
      matrixRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <>
      <Hero />
      <AboutSection />
      <StartHereSection onSelectChallenge={handleSelectChallenge} />

      <div ref={coachCapabilitiesRef}>
        <CoachCapabilities
          selectedCategoryName={selectedCoachCategory}
          onSelectCategory={setSelectedCoachCategory}
        />
      </div>

      <div id="scenario-matrix" ref={matrixRef}>
        <CoachScenarioMatrix
          selectedChallenge={selectedChallenge}
          selectedQuickWin={selectedQuickWin}
        />
      </div>

      <AIImageStudio />

      <QuickWinsSection
        selectedChallenge={selectedChallenge}
        onSelectQuickWin={handleSelectQuickWin}
      />

      <TrialCTA
        selectedChallenge={selectedChallenge}
        selectedQuickWin={selectedQuickWin}
      />
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

  if (currentHash === "#/terms") {
    page = <TermsPage />;
  } else if (currentHash === "#/privacy") {
    page = <PrivacyPage />;
  }

  return (
    <>
      {page}
      <Footer />
    </>
  );
}