import { useRef, useState } from "react";
import CoachScenarioMatrix from "./components/CoachScenarioMatrix";
import AIImageStudio from "./components/AIImageStudio";
import DecisionExamplesSection from "./components/DecisionExamplesSection";
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
      <div id="scenario-matrix" ref={matrixRef}>
        <CoachScenarioMatrix
          selectedChallenge={selectedChallenge}
          selectedQuickWin={selectedQuickWin}
        />
      </div>
      <DecisionExamplesSection />
      <AIImageStudio />
    </>
  );
}
