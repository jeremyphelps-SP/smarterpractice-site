import { useEffect, useRef, useState } from "react";
import CoachCapabilities from "./components/CoachCapabilities";
import CoachScenarioMatrix from "./components/CoachScenarioMatrix";
import AIImageStudio from "./components/AIImageStudio";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import QuickWinsSection from "./components/QuickWinsSection";
import TrialCTA from "./components/TrialCTA";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

const proofItems = [
  "Reduce claim friction",
  "Improve case acceptance",
  "Fix scheduling gaps",
  "Standardize patient communication",
];

function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Practice value proof">
      <div className="proof-strip__inner">
        <p>Used by dental teams to:</p>
        <ul>
          {proofItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HomePage() {
  const selectedChallenge = null;
  const [selectedCoachCategory, setSelectedCoachCategory] =
    useState("Get Paid Faster");
  const [selectedQuickWin, setSelectedQuickWin] = useState(null);
  const matrixRef = useRef(null);

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
      <ProofStrip />

      <div id="scenario-matrix" ref={matrixRef}>
        <CoachScenarioMatrix
          selectedChallenge={selectedChallenge}
          selectedQuickWin={selectedQuickWin}
        />
      </div>

      <CoachCapabilities
        selectedCategoryName={selectedCoachCategory}
        onSelectCategory={setSelectedCoachCategory}
      />

      <QuickWinsSection
        selectedChallenge={selectedChallenge}
        onSelectQuickWin={handleSelectQuickWin}
      />

      <AIImageStudio />

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
