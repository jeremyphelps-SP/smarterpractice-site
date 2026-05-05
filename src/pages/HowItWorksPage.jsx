import "./HowItWorksPage.css";

const baseUrl = import.meta.env.BASE_URL;

const valueCards = [
  {
    title: "A practice-owned workspace",
    body: "Your team receives access to a Smarter Practice AI workspace configured for dental practice use.",
  },
  {
    title: "Dental-specific coaches",
    body: "The coaches are custom GPTs available inside your workspace for claims, scheduling, patient communication, compliance, growth, billing, training, and practice operations.",
  },
  {
    title: "Familiar ChatGPT interface",
    body: "Your team can type questions, paste text, upload files, attach screenshots, and ask for next steps in an interface that feels familiar if they have used ChatGPT before.",
  },
];

const accessSteps = [
  {
    title: "Start the trial",
    body: "Submit the trial form with the workflow your team wants help with.",
  },
  {
    title: "Join the workspace",
    body: "Your team receives access to the Smarter Practice AI workspace.",
  },
  {
    title: "Use the right coach",
    body: "Open the coach that matches the task, then paste, upload, or ask for help.",
  },
];

const knowledgeCards = [
  {
    title: "Do not let knowledge walk out the door",
    body: "When a key team member leaves, their notes, scripts, payer tricks, follow-up language, and workflow shortcuts often leave with them. Smarter Practice AI helps turn that informal knowledge into reusable practice materials.",
  },
  {
    title: "Keep work tied to the practice",
    body: "Useful AI conversations, templates, SOPs, and training materials should not live only in a personal ChatGPT account your practice does not own. Smarter Practice AI is designed around practice-owned access and continuity.",
  },
  {
    title: "Train the next person faster",
    body: "New team members can start with existing practice scripts, checklists, workflows, and examples instead of rebuilding everything from scratch.",
  },
];

const knowledgeExamples = [
  "Claim appeal templates",
  "Payer-specific notes",
  "Scheduling rules",
  "Patient communication scripts",
  "Treatment follow-up language",
  "Financial conversation scripts",
  "SOPs and checklists",
  "Onboarding materials",
  "Vendor decision notes",
  "Compliance workflow reminders",
];

const uploadExamples = [
  "Claim denials, EOBs, claim notes, and payer letters",
  "Schedule screenshots, broken appointment reports, and recall lists",
  "Treatment plans, follow-up notes, financing objections, and patient messages",
  "PPO fee schedules, payer reports, A/R aging, and production by payer",
  "SOP drafts, team policies, onboarding notes, and training materials",
  "Bank CSVs, credit card exports, vendor invoices, and expense lists",
];

const coachExamples = [
  "Claims & Denials Coach",
  "PPO Strategy Advisor",
  "Chairside Communication Coach",
  "Scheduling and Utilization support",
  "Compliance and safety workflow support",
  "Practice operations and training support",
];

const personalChatGPTItems = [
  "Individual account use",
  "Generic prompting",
  "Inconsistent team answers",
  "Not practice-owned",
  "Knowledge may stay with the individual",
  "Useful prompts and conversations can leave with staff",
  "Practice has limited continuity",
  "Not the right place for patient information",
];

const smarterPracticeItems = [
  "Practice-owned workspace",
  "Dental-specific coaches",
  "More consistent workflows",
  "Built for team use",
  "Reusable workflows and templates",
  "Better continuity when roles change",
  "Handle patient information here, not in personal ChatGPT accounts",
];

const starterIdeas = [
  "Paste a claim denial and ask for an appeal draft.",
  "Upload a schedule screenshot and ask where capacity is leaking.",
  "Paste a patient message and ask for a clearer response.",
  "Upload a PPO report and ask which plans deserve attention.",
  "Paste a workflow and ask for an SOP.",
  "Upload an expense export and ask what needs owner review.",
];

function BulletList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="how-it-works-page" aria-labelledby="how-it-works-title">
      <div className="how-it-works-page__inner">
        <a className="how-it-works-page__back-link" href={baseUrl}>
          Back to homepage
        </a>

        <header className="how-it-works-page__hero">
          <p className="how-it-works-page__eyebrow">How It Works</p>
          <h1 id="how-it-works-title">How Smarter Practice AI works</h1>
          <p>
            Smarter Practice AI gives your dental practice a HIPAA-compliant
            enterprise ChatGPT workspace with dental-specific coaches and
            workflows. If you have used ChatGPT before, the interface will feel
            familiar. The difference is the structure, safety, and dental
            practice focus.
          </p>
          <div className="how-it-works-page__note">
            Handle patient information here &mdash; not in personal ChatGPT
            accounts.
          </div>
        </header>

        <section className="how-it-works-page__section">
          <div className="how-it-works-page__section-header">
            <p>What you get</p>
            <h2>A workspace built around dental practice work.</h2>
          </div>
          <div className="how-it-works-page__card-grid">
            {valueCards.map((card) => (
              <article className="how-it-works-page__card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="how-it-works-page__section">
          <div className="how-it-works-page__section-header">
            <p>How access works</p>
            <h2>Start with one workflow, then bring the team in.</h2>
          </div>
          <div className="how-it-works-page__steps">
            {accessSteps.map((step, index) => (
              <article className="how-it-works-page__step" key={step.title}>
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="how-it-works-page__section">
          <div className="how-it-works-page__section-header">
            <p>Practice-owned knowledge</p>
            <h2>Build a practice-owned knowledge base.</h2>
            <span>
              Every appeal, script, SOP, workflow, and decision your team
              improves with Smarter Practice AI can become part of the
              practice&rsquo;s operating knowledge. The goal is not just to
              answer one question. The goal is to help your practice build
              reusable assets your team can keep using.
            </span>
          </div>
          <div className="how-it-works-page__card-grid">
            {knowledgeCards.map((card) => (
              <article className="how-it-works-page__card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
          <div className="how-it-works-page__knowledge-list">
            <div>
              <h3>Examples of knowledge to preserve</h3>
              <BulletList items={knowledgeExamples} />
            </div>
            <p>
              Smarter Practice AI helps your practice move from individual
              know-how to shared operating intelligence.
            </p>
          </div>
        </section>

        <section className="how-it-works-page__section how-it-works-page__split">
          <div className="how-it-works-page__section-header">
            <p>Uploads and pasted text</p>
            <h2>Bring the messy practice inputs your team already has.</h2>
          </div>
          <div className="how-it-works-page__list-card">
            <BulletList items={uploadExamples} />
            <p>
              Use only according to your practice policies, patient
              authorization, and applicable privacy requirements.
            </p>
          </div>
        </section>

        <section className="how-it-works-page__section how-it-works-page__split">
          <div className="how-it-works-page__section-header">
            <p>Where the coaches are</p>
            <h2>Open the coach that matches the work.</h2>
          </div>
          <div className="how-it-works-page__list-card">
            <p>
              The coaches are custom GPTs inside your Smarter Practice AI
              workspace. Your team opens them the same way they would open GPTs
              in ChatGPT. The difference is that these coaches are structured
              around dental practice workflows instead of generic prompting.
            </p>
            <div className="how-it-works-page__chips">
              {coachExamples.map((coach) => (
                <span key={coach}>{coach}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="how-it-works-page__section">
          <div className="how-it-works-page__section-header">
            <p>Different from personal ChatGPT</p>
            <h2>Practice workspace beats scattered personal accounts.</h2>
          </div>
          <div className="how-it-works-page__comparison">
            <article>
              <h3>Personal ChatGPT accounts</h3>
              <BulletList items={personalChatGPTItems} />
            </article>
            <article>
              <h3>Smarter Practice AI</h3>
              <BulletList items={smarterPracticeItems} />
            </article>
          </div>
        </section>

        <section className="how-it-works-page__section how-it-works-page__split">
          <div className="how-it-works-page__section-header">
            <p>What to use first</p>
            <h2>Start where the practice already feels friction.</h2>
          </div>
          <div className="how-it-works-page__list-card">
            <BulletList items={starterIdeas} />
          </div>
        </section>

        <section className="how-it-works-page__cta">
          <div>
            <p>Start with one real workflow.</p>
            <h2>
              The fastest way to understand Smarter Practice AI is to use it on
              a problem your team is already dealing with.
            </h2>
          </div>
          <div className="how-it-works-page__cta-actions">
            <a href={`${baseUrl}#trial`}>Start 15-day trial &rarr;</a>
            <a href={`${baseUrl}#scenario-matrix`}>Explore practice examples</a>
          </div>
        </section>
      </div>
    </main>
  );
}
