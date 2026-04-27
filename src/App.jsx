import { useState } from "react";
import CoachScenarioMatrix from "./components/CoachScenarioMatrix";
import AIImageStudio from "./components/AIImageStudio";
import StartHereSection from "./components/StartHereSection";

export default function App() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <>
      <StartHereSection onSelectRole={setSelectedRole} />
      <CoachScenarioMatrix selectedRole={selectedRole} />
      <AIImageStudio />
    </>
  );
}
