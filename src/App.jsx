import { useRef, useState } from "react";
import CoachCapabilities from "./components/CoachCapabilities";
import CoachScenarioMatrix from "./components/CoachScenarioMatrix";
import AIImageStudio from "./components/AIImageStudio";
import QuickWinsSection from "./components/QuickWinsSection";
import StartHereSection from "./components/StartHereSection";
import TrialCTA from "./components/TrialCTA";
import { trackEvent } from "./utils/analytics";

export default function App() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [selectedQuickWin, setSelectedQuickWin] = useState(null);
  const matrixRef = useRef(null);

  const handleSelectChallenge = (challengeKey) => {
    setSelectedQuickWin(null);
    setSelectedChallenge(challengeKey);
    trackEvent("challenge_selected", {
      selectedChallenge: challengeKey,
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
      <StartHereSection onSelectChallenge={handleSelectChallenge} />
      <QuickWinsSection
        selectedChallenge={selectedChallenge}
        onSelectQuickWin={handleSelectQuickWin}
      />
      <TrialCTA
        selectedChallenge={selectedChallenge}
        selectedQuickWin={selectedQuickWin}
      />
      <CoachCapabilities />
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
    </>
  );
}
