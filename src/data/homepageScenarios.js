export const homepageScenarios = [
  {
    id: "home-ppo-profitability",
    category: "Reduce PPO Drag",
    coach: "PPO Strategy Advisor",
    scenarioTitle: "Which PPO plans are quietly hurting your profit?",
    uploadThis:
      "12-month production by payer, PPO write-off reports, payer fee schedules, CDT production by payer, claim payment history, and A/R aging by payer.",
    analysis:
      "Production per chair hour, write-offs by payer and procedure, collection speed, denial patterns, and payer profitability across high-volume CDT codes.",
    reveals:
      "A plan that sends a lot of patients may be one of your least profitable relationships once write-offs, delays, denials, and chair time are included.",
    decision:
      "Renegotiate specific codes, restrict scheduling access, stop promoting the plan, or prepare a controlled exit strategy.",
    outcome: "Less hidden PPO margin loss and a clearer insurance strategy.",
    useWhen:
      "PPO production looks strong, but collections, write-offs, and chair time may be telling a different story.",
    expanded: {
      examplePracticeData:
        "Delta Premier production is high, but D4910, D2740, and D2392 reimburse below target margin. A/R aging shows slower payment and more documentation touches than two lower-volume plans.",
      dataReveals: [
        "Volume is masking low collection per chair hour.",
        "The most common CDT codes are carrying the largest write-off drag.",
        "Slow payment and repeated documentation touches add admin cost beyond the fee schedule.",
      ],
      decisionDrives: [
        "Rank PPO plans by profit per chair hour, not gross production.",
        "Flag underpaid high-volume CDT codes for renegotiation.",
        "Limit appointment access or stop promoting plans that displace better-margin patients.",
      ],
      teamNext: [
        "Build a payer-by-payer profitability table.",
        "Pull the top five CDT codes by payer.",
        "Mark plans for renegotiation, restriction, or exit planning.",
      ],
      whyItMatters:
        "PPO losses often hide inside production. The practice can look busy while profit per hour declines.",
    },
    tags: ["PPO", "write-offs", "chair hour", "payer profitability"],
    challenges: ["insurance-billing", "owner-bottleneck", "growth-case-acceptance"],
  },
  {
    id: "home-capacity-utilization",
    category: "Fix the Schedule",
    coach: "Huddle & Systems Coach",
    scenarioTitle: "Should you add hours, hire staff, or fix utilization first?",
    uploadThis:
      "Schedule screenshots, broken appointment reports, unscheduled treatment reports, new patient wait times, provider production per hour, and payroll schedules.",
    analysis:
      "Open chair time, provider utilization, production per available hour, recall backlog, overtime cost, and actual appointment demand.",
    reveals:
      "You may not need more capacity. You may need to stop leaking the capacity you already have.",
    decision:
      "Fix schedule utilization before adding hours, hiring, or expanding provider coverage.",
    outcome:
      "Higher production without automatically increasing payroll or owner complexity.",
    useWhen:
      "The practice is considering evenings, Fridays, another hygienist, or an associate before proving the current schedule is full.",
    expanded: {
      examplePracticeData:
        "The next 6 weeks show 19 open doctor hours, 14 hygiene openings, a 9-day new patient wait, and recurring overtime on two low-production days.",
      dataReveals: [
        "Demand is uneven, not clearly above current capacity.",
        "Broken appointments and weak recall fill are creating false pressure to expand.",
        "Overtime is not consistently tied to higher production days.",
      ],
      decisionDrives: [
        "Protect high-value blocks before adding more hours.",
        "Repair recall fill and short-notice opening workflows first.",
        "Add provider time only after current columns stay full with profitable appointments.",
      ],
      teamNext: [
        "Measure open chair time by provider and day.",
        "Create a fill protocol for openings inside 72 hours.",
        "Review utilization again after 30 days before adding payroll.",
      ],
      whyItMatters:
        "Adding hours or staff before fixing utilization increases payroll, management complexity, and owner dependency without solving the real constraint.",
    },
    tags: ["schedule utilization", "open chair time", "capacity", "payroll"],
    challenges: ["owner-bottleneck", "team-training", "growth-case-acceptance"],
  },
  {
    id: "home-case-acceptance-leakage",
    category: "Help Patients Say Yes",
    coach: "Case Acceptance Coach",
    scenarioTitle: "Where is case acceptance leaking?",
    uploadThis:
      "Treatment plan reports, unscheduled treatment reports, follow-up notes, patient message threads, financing logs, and schedule availability.",
    analysis:
      "Acceptance by provider, case size, procedure type, coordinator, follow-up timing, financing usage, and unscheduled treatment value.",
    reveals:
      "Patients may not be rejecting treatment. They may be falling through inconsistent follow-up.",
    decision:
      "Create a case-value-based follow-up protocol with scripts, timing, financing language, and escalation rules.",
    outcome: 'More diagnosed treatment moves from "presented" to scheduled.',
    useWhen:
      "Diagnosed treatment is sitting unscheduled and the team cannot tell whether the issue is presentation, financing, follow-up, or appointment availability.",
    expanded: {
      examplePracticeData:
        "$184,000 in unscheduled treatment was diagnosed in the last 60 days. Cases over $3,000 average 11 days to first follow-up, and financing is documented on fewer than half.",
      dataReveals: [
        "The largest cases are not getting faster or clearer follow-up.",
        "Financing is being used as a rescue tool instead of part of the planned presentation.",
        "Some patients accepted the need for care but never received a specific scheduling path.",
      ],
      decisionDrives: [
        "Separate acceptance problems from scheduling follow-through problems.",
        "Set follow-up timing by case value.",
        "Escalate stalled high-value cases before they age out.",
      ],
      teamNext: [
        "Run a weekly unscheduled treatment review by case value.",
        "Use 24-hour follow-up for large cases.",
        "Document financing offered, objection, next contact, and owner.",
      ],
      whyItMatters:
        "Case acceptance leakage is one of the fastest ways for production to disappear without anyone feeling like a mistake happened.",
    },
    tags: ["case acceptance", "follow-up", "financing", "unscheduled treatment"],
    challenges: ["patient-communication", "growth-case-acceptance"],
  },
  {
    id: "home-claim-denial-root-cause",
    category: "Get Paid Faster",
    coach: "Dental Claims Coach",
    scenarioTitle: "Are claim denials caused by payers or by your process?",
    uploadThis:
      "Denial notices, claim notes, EOBs, narratives, X-rays, perio documentation, A/R aging, and resubmission history.",
    analysis:
      "Denial patterns by payer, CDT code, provider, narrative quality, missing attachments, appeal timing, and repeat failure points.",
    reveals:
      'Some "insurance problems" may actually be preventable documentation or workflow problems.',
    decision:
      "Build payer-specific claim checklists, rewrite narratives, tighten documentation, and assign appeal deadlines.",
    outcome:
      "Fewer repeat denials, faster collections, and less insurance-team rework.",
    useWhen:
      "Denials are increasing and the practice needs to know whether the root cause is payer behavior, documentation quality, or team workflow.",
    expanded: {
      examplePracticeData:
        "D2740 and SRP denials repeat across three payers. Claim notes show missing X-rays, inconsistent perio charting, and appeals started more than 14 days after denial.",
      dataReveals: [
        "The same CDT codes are being denied for the same preventable reasons.",
        "Narratives and attachments are not consistent enough for high-risk payers.",
        "Delayed appeal work is turning correctable denials into aging balances.",
      ],
      decisionDrives: [
        "Create payer-specific claim checklists for high-denial CDT codes.",
        "Rewrite weak narratives before resubmission.",
        "Set appeal deadlines by denial date and dollar value.",
      ],
      teamNext: [
        "Group denials by payer and CDT code.",
        "Identify missing documentation patterns.",
        "Assign appeal ownership and due dates before the next billing block.",
      ],
      whyItMatters:
        "Denials create delayed collections, rework, patient frustration, and hidden administrative cost.",
    },
    tags: ["claim denials", "documentation", "appeals", "payer workflow"],
    challenges: ["insurance-billing", "team-training"],
  },
  {
    id: "home-ar-over-90-collectable",
    category: "Get Paid Faster",
    coach: "Dental Claims Coach",
    scenarioTitle: "Which A/R Over 90 Dollars Are Actually Collectable?",
    uploadThis:
      "A/R aging report, claim notes, denial notices, EOBs, attachment status, payer list, and resubmission history.",
    analysis: [
      "A/R over 90 by failure type",
      "Dollar value by payer, claim age, and missing item",
      "COB vs attachment vs credentialing vs payer follow-up",
      "Which claims can actually be corrected this week",
    ],
    reveals:
      "The team is working oldest-first instead of attacking the largest correctable failure types first.",
    decision:
      "Batch the $64k COB claims and $38k attachment claims before spending time on lower-value payer follow-up.",
    outcome:
      "Faster cash movement, cleaner ownership, and fewer wasted insurance calls.",
    useWhen:
      "Insurance A/R over 90 is growing and the team needs to prioritize by dollars recoverable, not just claim age.",
    expanded: {
      examplePracticeData:
        "Insurance A/R over 90 is $212,000. Roughly $64,000 is COB-related, $38,000 needs attachments, $29,000 is credentialing mismatch, and the rest is mixed payer follow-up. Billing has 5 protected hours per week.",
      dataReveals: [
        "The A/R report is being treated like a flat list instead of a queue by failure type.",
        "The team is calling old claims one by one without grouping correctable causes.",
        "Some claims are being resubmitted before the failure reason is corrected.",
      ],
      decisionDrives: [
        "Work COB claims first because they represent the largest correctable dollar pool.",
        "Batch attachment claims second and assign missing documentation ownership.",
        "Escalate credentialing mismatch separately to the office manager.",
        "Track dollars corrected, not calls made.",
      ],
      teamNext: [
        "Build a 2-Friday recovery queue.",
        "Assign each failure type to an owner.",
        "Track dollars corrected by category.",
        "Review the top 10 claims with the owner next Tuesday.",
      ],
      whyItMatters:
        "A/R drops faster when the practice attacks root causes in batches instead of mistaking activity for progress.",
    },
    tags: ["A/R over 90", "collections", "COB", "attachment status"],
    challenges: ["insurance-billing", "owner-bottleneck", "team-training"],
  },
  {
    id: "home-assisted-hygiene-margin",
    category: "Improve Profitability",
    coach: "Practice Growth Coach",
    scenarioTitle: "Is assisted hygiene making money or just making the day busier?",
    uploadThis:
      "Hygiene production reports, provider schedules, assistant payroll, procedure mix, cancellation reports, and daily production by provider.",
    analysis:
      "Production per hygiene hour, assistant cost per hour, perio mix, open chair time, cancellation impact, and production per patient visit.",
    reveals:
      "Assisted hygiene may feel efficient while quietly reducing margin in the wrong schedule or provider mix.",
    decision:
      "Expand assisted hygiene only where the numbers support it. Redesign or remove it where added labor does not create enough production.",
    outcome: "A hygiene model based on profitability, not activity.",
    useWhen:
      "The hygiene day feels busier with an assistant, but the owner needs to know whether the extra payroll is creating enough margin.",
    expanded: {
      examplePracticeData:
        "Two assisted hygiene columns added 14 visits per week, but perio mix stayed flat, cancellation losses rose on Mondays, and assistant payroll increased faster than hygiene production.",
      dataReveals: [
        "More movement did not automatically create more profitable appointments.",
        "Cancellations are more expensive when assisted blocks go unfilled.",
        "Low perio conversion can erase the benefit of added hygiene capacity.",
      ],
      decisionDrives: [
        "Keep assisted hygiene only in columns where production per hour rises enough.",
        "Redesign days where cancellations or low procedure mix erase margin.",
        "Remove assisted coverage where it only adds payroll.",
      ],
      teamNext: [
        "Compare assisted vs non-assisted production per hygiene hour.",
        "Subtract assistant labor cost by column and day.",
        "Track perio mix and cancellations before expanding the model.",
      ],
      whyItMatters:
        "Assisted hygiene can either create real capacity or quietly turn into expensive motion. The loss shows up as payroll creep, lower hygiene margin, and owner frustration when busy does not translate into profit.",
    },
    tags: ["assisted hygiene", "hygiene margin", "payroll", "perio mix"],
    challenges: ["owner-bottleneck", "team-training", "growth-case-acceptance"],
  },
  {
    id: "home-expense-leakage",
    category: "Make Smarter Money Decisions",
    coach: "Tax Strategy Co-Pilot",
    scenarioTitle: "Which expenses are leaking margin every month?",
    uploadThis:
      "Bank CSV exports, credit card exports, vendor invoices, subscription charges, merchant statements, payroll reports, and prior-year P&L.",
    analysis:
      "Recurring charges, duplicate subscriptions, vendor price creep, spend per provider, spend per visit, and unusual or unclear expenses.",
    reveals:
      "Margin leakage may be hiding in dozens of small charges no one owns.",
    decision:
      "Cancel unused tools, renegotiate vendor categories, separate questionable expenses, and create a monthly owner review workflow.",
    outcome:
      "Cleaner expenses, better documentation, and less profit lost to unmanaged spending.",
    useWhen:
      "Expenses feel stable, but subscriptions, vendor creep, unclear charges, or mixed-use spending may be quietly reducing margin.",
    expanded: {
      examplePracticeData:
        "Bank and card exports show 42 recurring vendors, 11 software charges, duplicate patient communication tools, supply increases above production growth, and several unclear owner charges.",
      dataReveals: [
        "No single expense looks alarming, but the recurring stack is growing.",
        "Duplicate tools and vendor price creep are not assigned to an owner.",
        "Unclear mixed-use charges create both margin leakage and documentation risk.",
      ],
      decisionDrives: [
        "Cancel unused or duplicate subscriptions.",
        "Renegotiate vendor categories growing faster than production.",
        "Separate questionable expenses before sending records to the CPA.",
      ],
      teamNext: [
        "Sort charges by vendor and recurrence.",
        "Mark keep, cancel, renegotiate, or document.",
        "Create a monthly owner expense review with vendor owners.",
      ],
      whyItMatters:
        "Expense leakage does not need one big mistake. It usually compounds through small charges no one owns.",
    },
    tags: ["expenses", "vendor creep", "subscriptions", "margin leakage"],
    challenges: ["owner-bottleneck", "growth-case-acceptance"],
  },
];
