import { useEffect, useState } from "react";
import CoachCapabilities from "./components/CoachCapabilities";
import CoachScenarioMatrix from "./components/CoachScenarioMatrix";
import AIImageStudio from "./components/AIImageStudio";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
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

  return (
    <>
      <Hero />
      <ProofStrip />

      <div id="scenario-matrix">
        <CoachScenarioMatrix selectedChallenge={selectedChallenge} />
      </div>

      <CoachCapabilities
        selectedCategoryName={selectedCoachCategory}
        onSelectCategory={setSelectedCoachCategory}
      />

      <AIImageStudio />

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
