import { useRef, useState } from "react";
import AboutSection from "./components/AboutSection";
import CoachCapabilities from "./components/CoachCapabilities";
import CoachScenarioMatrix from "./components/CoachScenarioMatrix";
import AIImageStudio from "./components/AIImageStudio";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import QuickWinsSection from "./components/QuickWinsSection";
import StartHereSection from "./components/StartHereSection";
import TrialCTA from "./components/TrialCTA";
import { trackEvent } from "./utils/analytics";

export default function App() {
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
      matrixRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <Hero />
      <AboutSection />
      <StartHereSection onSelectChallenge={handleSelectChallenge} />
      <QuickWinsSection
        selectedChallenge={selectedChallenge}
        onSelectQuickWin={handleSelectQuickWin}
      />
      <TrialCTA
        selectedChallenge={selectedChallenge}
        selectedQuickWin={selectedQuickWin}
      />
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
      <section className="trial-cta trial-cta--final" aria-labelledby="final-cta-title">
        <div className="trial-cta__inner">
          <div>
            <h2 id="final-cta-title">Ready to try this with your team?</h2>
            <p>
              Start with one workflow and see how Smarter Practice AI helps your
              practice move faster.
            </p>
          </div>
          <div className="trial-cta__actions">
            <a
              className="trial-cta__button trial-cta__button--primary"
              href="#trial"
            >
              Start 15-day trial
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
