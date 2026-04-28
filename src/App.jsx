import { useState } from "react";
import CoachScenarioMatrix from "./components/CoachScenarioMatrix";
import AIImageStudio from "./components/AIImageStudio";
import StartHereSection from "./components/StartHereSection";

export default function App() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  return (
    <>
      <StartHereSection onSelectChallenge={setSelectedChallenge} />
      <CoachScenarioMatrix selectedChallenge={selectedChallenge} />
      <AIImageStudio />
    </>
  );
}
