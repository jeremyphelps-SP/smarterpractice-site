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
      "PPO volume looks useful, but the owner needs to know whether those patients are helping margin or consuming better chair time.",
    expanded: {
      examplePracticeData:
        "Two high-volume plans drive 41% of visits, but D4910, D2740, and D2392 reimburse below target margin and show slower payment than lower-volume plans.",
      dataReveals: [
        "Gross production is overstating payer value.",
        "The most common CDT codes are carrying the largest write-off drag.",
      ],
      decisionDrives: [
        "Rank plans by profit per chair hour.",
        "Mark underpaid high-volume codes for renegotiation or restriction.",
        "Plan exits only where patient and cash-flow risk are manageable.",
      ],
      teamNext: [
        "Pull top CDT codes by payer.",
        "Sort payers by write-off, collection speed, and chair hour.",
        "Choose renegotiate, restrict, stop promoting, or exit planning.",
      ],
      whyItMatters:
        "PPO losses often hide inside production. The practice can look busy while profit per hour declines.",
    },
    tags: ["PPO", "write-offs", "chair hour", "payer profitability"],
    challenges: ["insurance-billing", "owner-bottleneck", "growth-case-acceptance"],
  },
  {
    id: "home-denial-root-cause",
    category: "Reduce PPO Drag",
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
      "Denials keep repeating and the team needs to separate payer friction from preventable claim defects.",
    expanded: {
      examplePracticeData:
        "D2740 and SRP denials repeat across three payers. Claim notes show missing X-rays, inconsistent perio charting, and appeals started more than 14 days after denial.",
      dataReveals: [
        "The same CDT codes are being denied for the same correctable reasons.",
        "Late appeals are turning fixable denials into aging balances.",
      ],
      decisionDrives: [
        "Create payer-specific checklists for high-denial codes.",
        "Rewrite weak narratives before resubmission.",
        "Set appeal due dates by denial date and dollar value.",
      ],
      teamNext: [
        "Group denials by payer and CDT code.",
        "Identify missing documentation patterns.",
        "Assign appeal ownership before the next billing block.",
      ],
      whyItMatters:
        "Denials create delayed collections, rework, patient frustration, and hidden administrative cost.",
    },
    tags: ["claim denials", "documentation", "appeals", "payer workflow"],
    challenges: ["insurance-billing", "team-training"],
  },
  {
    id: "home-pre-d-packet-ready",
    category: "Reduce PPO Drag",
    coach: "Dental Claims Coach",
    scenarioTitle: "Is this pre-D packet ready before submission?",
    uploadThis:
      "Draft pre-D, clinical notes, X-rays, perio charting, intraoral photos, payer requirements, and proposed CDT codes.",
    analysis:
      "Missing documentation, weak narratives, payer-specific requirements, attachment quality, and risk of denial before submission.",
    reveals:
      "The packet may look complete internally but still be weak against the payer's documentation standard.",
    decision:
      "Fix the narrative, add missing attachments, clarify clinical rationale, or delay submission until the packet is defensible.",
    outcome: "Cleaner pre-D submissions and fewer preventable delays.",
    useWhen:
      "The team is about to submit a higher-value pre-D and wants to catch weak documentation before the payer does.",
    expanded: {
      examplePracticeData:
        "The draft pre-D includes a treatment plan and X-rays, but the narrative does not connect pocketing, bone loss, symptoms, and proposed CDT codes.",
      dataReveals: [
        "Internal completeness is not the same as payer readiness.",
        "Weak rationale can delay approval even when treatment is clinically sound.",
      ],
      decisionDrives: [
        "Submit now only if the packet meets payer evidence requirements.",
        "Delay submission when missing attachments would create a predictable denial.",
      ],
      teamNext: [
        "Match attachments to payer requirements.",
        "Tighten the clinical narrative.",
        "Confirm CDT codes before submission.",
      ],
      whyItMatters:
        "Preventing a weak pre-D is usually faster than repairing a denial after the patient has already waited.",
    },
    tags: ["pre-D", "attachments", "payer requirements", "documentation"],
    challenges: ["insurance-billing", "team-training"],
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
      ],
      decisionDrives: [
        "Protect high-value blocks before adding more hours.",
        "Repair recall fill and short-notice opening workflows first.",
        "Add provider time only after current columns stay full with profitable appointments.",
      ],
      teamNext: [
        "Measure open chair time by provider and day.",
        "Create a fill protocol for openings inside 72 hours.",
        "Review utilization again after 30 days.",
      ],
      whyItMatters:
        "Adding hours or staff before fixing utilization increases payroll, management complexity, and owner dependency without solving the real constraint.",
    },
    tags: ["schedule utilization", "open chair time", "capacity", "payroll"],
    challenges: ["owner-bottleneck", "team-training", "growth-case-acceptance"],
  },
  {
    id: "home-overtime-scheduling",
    category: "Fix the Schedule",
    coach: "Huddle & Systems Coach",
    scenarioTitle: "Is overtime buying production or covering poor scheduling?",
    uploadThis:
      "Payroll report with overtime, daily schedule screenshots, production by day and provider, clock-in/out logs, broken appointment report, and closeout workflow.",
    analysis:
      "Overtime hours by role and day, production per labor hour, overtime cost per visit, late starts, poor handoffs, sterilization bottlenecks, and end-of-day admin drag.",
    reveals:
      "Overtime may be happening on low-production days because the team is compensating for broken workflows.",
    decision:
      "Approve overtime only where production supports it and redesign handoffs where overtime is not tied to profitable volume.",
    outcome: "Lower payroll drag and clearer staffing decisions.",
    useWhen:
      "Payroll is creeping up and the owner needs to know whether overtime is buying production or masking workflow drag.",
    expanded: {
      examplePracticeData:
        "Tuesday overtime averages 6.5 hours even though production is below Thursday. Closeout tasks, late seating, and sterilization backups recur in team notes.",
      dataReveals: [
        "Overtime is not consistently aligned with high-production days.",
        "Workflow bottlenecks are being paid for as extra labor.",
      ],
      decisionDrives: [
        "Approve overtime when production per labor hour supports it.",
        "Redesign handoffs and closeout where overtime is just cleanup.",
      ],
      teamNext: [
        "Compare overtime by role and day.",
        "Map the last hour of the day.",
        "Assign one bottleneck fix for the next week.",
      ],
      whyItMatters:
        "Overtime can hide operational drag. If it is not buying production, it is reducing margin.",
    },
    tags: ["overtime", "staffing", "schedule workflow", "payroll"],
    challenges: ["owner-bottleneck", "team-training"],
  },
  {
    id: "home-fill-openings-first",
    category: "Fix the Schedule",
    coach: "Huddle & Systems Coach",
    scenarioTitle: "Which openings should your team fill first?",
    uploadThis:
      "Tomorrow's schedule, unscheduled treatment list, overdue recall list, treatment value, patient availability, and cancellation history.",
    analysis:
      "Open chair time by provider, treatment value, patient likelihood to accept, urgency, recall risk, and fit by appointment length.",
    reveals:
      "The first patient available is not always the best patient to call.",
    decision:
      "Prioritize fill calls by production value, clinical urgency, likelihood to schedule, and fit for the opening.",
    outcome: "Better same-day recovery and less random scrambling.",
    useWhen:
      "A provider opening appears and the team needs a smarter call order than whoever answers first.",
    expanded: {
      examplePracticeData:
        "Tomorrow has a 90-minute doctor opening, three hygiene patients with diagnosed treatment, 12 overdue recall patients, and one patient with a history of short-notice cancellations.",
      dataReveals: [
        "Availability alone is a weak fill strategy.",
        "Some openings should recover value, not just activity.",
      ],
      decisionDrives: [
        "Call patients who fit time, urgency, and production value first.",
        "Use backup recall only after higher-value fits are exhausted.",
      ],
      teamNext: [
        "Sort candidates by fit and value.",
        "Assign the first five calls.",
        "Track whether the opening was filled profitably.",
      ],
      whyItMatters:
        "Same-day recovery works best when the team protects chair value instead of scrambling randomly.",
    },
    tags: ["open chair time", "schedule fill", "unscheduled treatment", "recall"],
    challenges: ["owner-bottleneck", "patient-communication"],
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
    outcome: "More diagnosed treatment moves from presented to scheduled.",
    useWhen:
      "Diagnosed treatment is sitting unscheduled and the team cannot tell whether the issue is presentation, financing, follow-up, or appointment availability.",
    expanded: {
      examplePracticeData:
        "$184,000 in unscheduled treatment was diagnosed in the last 60 days. Cases over $3,000 average 11 days to first follow-up, and financing is documented on fewer than half.",
      dataReveals: [
        "The largest cases are not getting faster or clearer follow-up.",
        "Financing is being used as a rescue tool instead of part of the planned presentation.",
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
    id: "home-financing-objections",
    category: "Help Patients Say Yes",
    coach: "Case Acceptance Coach",
    scenarioTitle: "Are financing objections hiding a presentation problem?",
    uploadThis:
      "Treatment plan, case value, patient notes, financing options offered, follow-up messages, and acceptance history.",
    analysis:
      "Whether the objection is cost, timing, confidence, unclear value, missing urgency, or lack of payment-path clarity.",
    reveals:
      "The patient may not need a discount. They may need a clearer explanation, staged plan, or financing conversation.",
    decision:
      "Rewrite the follow-up, clarify urgency, stage treatment if appropriate, and give the coordinator a better next conversation.",
    outcome:
      "More patients understand the path forward without pressuring the team into discounts.",
    useWhen:
      "Patients keep saying treatment is expensive and the team is unsure whether the real problem is value, timing, or payment clarity.",
    expanded: {
      examplePracticeData:
        "A $6,800 case was presented with financing mentioned once. Notes show the patient asked about timing, not price, but follow-up only repeated the balance.",
      dataReveals: [
        "The objection may be uncertainty, not refusal.",
        "Repeating the price can make a weak presentation weaker.",
      ],
      decisionDrives: [
        "Clarify urgency and sequence before offering discounts.",
        "Stage treatment only when it protects clinical priority.",
      ],
      teamNext: [
        "Rewrite the coordinator follow-up.",
        "Add a clear payment path.",
        "Document the patient's actual objection.",
      ],
      whyItMatters:
        "Financing helps only when patients understand why the treatment matters and what path they can say yes to.",
    },
    tags: ["financing", "case presentation", "objections", "follow-up"],
    challenges: ["patient-communication", "growth-case-acceptance"],
  },
  {
    id: "home-unscheduled-follow-up-first",
    category: "Help Patients Say Yes",
    coach: "Case Acceptance Coach",
    scenarioTitle: "Which unscheduled treatment should be followed up first?",
    uploadThis:
      "Unscheduled treatment report, case value, diagnosis date, provider, patient notes, insurance estimate, and last contact date.",
    analysis:
      "Case value, urgency, age of diagnosis, likelihood to schedule, insurance timing, and follow-up history.",
    reveals:
      "The highest-value opportunity may not be the oldest unscheduled case.",
    decision:
      "Build a prioritized follow-up queue based on value, urgency, and patient readiness.",
    outcome: "Better coordinator focus and more treatment moved into the schedule.",
    useWhen:
      "The unscheduled treatment list is too long and the coordinator needs to know where follow-up will matter most.",
    expanded: {
      examplePracticeData:
        "The report shows 88 unscheduled cases. Seven are over $3,000, 14 are under two weeks old, and several older cases have no recent patient contact.",
      dataReveals: [
        "Oldest-first follow-up can waste coordinator time.",
        "Value, urgency, and readiness should drive the first calls.",
      ],
      decisionDrives: [
        "Prioritize new high-value cases with clear next steps.",
        "Separate stale cases into a different reactivation workflow.",
      ],
      teamNext: [
        "Score cases by value, urgency, and last contact.",
        "Assign the top 10 follow-ups.",
        "Track scheduled dollars, not just calls.",
      ],
      whyItMatters:
        "Coordinator time is limited. The queue should focus on treatment most likely to move into the schedule.",
    },
    tags: ["unscheduled treatment", "follow-up queue", "case value", "coordinator"],
    challenges: ["patient-communication", "growth-case-acceptance"],
  },
  {
    id: "home-ar-over-90-collectable",
    category: "Get Paid Faster",
    coach: "Dental Claims Coach",
    scenarioTitle: "Which A/R over 90 dollars are actually collectable?",
    uploadThis:
      "A/R aging report, claim notes, denial notices, EOBs, attachment status, payer list, and resubmission history.",
    analysis:
      "A/R over 90 by failure type, dollar value by payer, claim age, missing item, COB, attachment gaps, credentialing mismatch, and payer follow-up.",
    reveals:
      "The team may be working oldest-first instead of attacking the largest correctable failure types first.",
    decision:
      "Batch the largest correctable dollar pools first and track dollars corrected, not calls made.",
    outcome:
      "Faster cash movement, cleaner ownership, and fewer wasted insurance calls.",
    useWhen:
      "Insurance A/R over 90 is growing and the team needs to prioritize by dollars recoverable, not just claim age.",
    expanded: {
      examplePracticeData:
        "Insurance A/R over 90 is $212,000. Roughly $64,000 is COB-related, $38,000 needs attachments, $29,000 is credentialing mismatch, and the rest is mixed payer follow-up.",
      dataReveals: [
        "The A/R report is being treated like a flat list instead of a queue by failure type.",
        "Some claims are being resubmitted before the failure reason is corrected.",
      ],
      decisionDrives: [
        "Work COB claims first because they represent the largest correctable dollar pool.",
        "Batch attachment claims second and assign missing documentation ownership.",
        "Track dollars corrected, not calls made.",
      ],
      teamNext: [
        "Build a 2-Friday recovery queue.",
        "Assign each failure type to an owner.",
        "Review the top 10 claims with the owner next Tuesday.",
      ],
      whyItMatters:
        "A/R drops faster when the practice attacks root causes in batches instead of mistaking activity for progress.",
    },
    tags: ["A/R over 90", "collections", "COB", "attachment status"],
    challenges: ["insurance-billing", "owner-bottleneck", "team-training"],
  },
  {
    id: "home-collect-now",
    category: "Get Paid Faster",
    coach: "Dental Claims Coach",
    scenarioTitle: "Should we collect now or wait for insurance?",
    uploadThis:
      "Treatment estimate, payer history, benefits breakdown, patient ledger, claim status, EOB history, and financial policy.",
    analysis:
      "Expected insurance payment, patient responsibility, payer reliability, claim delay risk, and patient communication needs.",
    reveals:
      "Waiting for insurance may be protecting the conversation but creating avoidable collection risk.",
    decision:
      "Collect the appropriate estimated patient portion now, explain the insurance uncertainty clearly, and document the financial conversation.",
    outcome: "Cleaner collections and fewer uncomfortable balance conversations later.",
    useWhen:
      "The team is hesitating to collect because insurance might pay differently than the estimate.",
    expanded: {
      examplePracticeData:
        "The estimate shows $620 patient responsibility, the payer often downgrades posterior composites, and the patient ledger already has one aging family balance.",
      dataReveals: [
        "Avoiding the conversation now may create a harder one later.",
        "Payer uncertainty needs clear language, not delayed collection.",
      ],
      decisionDrives: [
        "Collect the best-estimated patient portion today.",
        "Document what could change after insurance processes.",
      ],
      teamNext: [
        "Confirm benefits and payer history.",
        "Explain the estimate as an estimate.",
        "Add a ledger note after the conversation.",
      ],
      whyItMatters:
        "Cleaner front-end collections protect cash flow and reduce patient surprise balances.",
    },
    tags: ["collections", "estimate", "patient ledger", "insurance timing"],
    challenges: ["insurance-billing", "patient-communication"],
  },
  {
    id: "home-eob-trust",
    category: "Get Paid Faster",
    coach: "Dental Claims Coach",
    scenarioTitle: "Can this EOB be explained without losing patient trust?",
    uploadThis:
      "EOB, treatment plan, patient estimate, ledger, insurance notes, and the patient's question or complaint.",
    analysis:
      "Difference between estimate and actual benefits, payer language, patient responsibility, and the clearest explanation path.",
    reveals:
      "The issue may be less about the balance and more about how confusing the insurance explanation feels to the patient.",
    decision:
      "Send a clear patient-facing explanation, update estimate language, and flag recurring payer confusion for the team.",
    outcome: "Less patient frustration and fewer escalations to the owner.",
    useWhen:
      "An EOB created a balance difference and the team needs to explain it without sounding defensive or blaming the patient.",
    expanded: {
      examplePracticeData:
        "The estimate showed $74 due, but the EOB downgraded the procedure and left $260. The patient's message says the practice promised insurance would cover it.",
      dataReveals: [
        "The trust issue is the gap between estimate language and payer behavior.",
        "A technical EOB explanation will not be enough by itself.",
      ],
      decisionDrives: [
        "Explain the payer decision in plain English.",
        "Update estimate language where this payer pattern repeats.",
      ],
      teamNext: [
        "Check whether appeal is supported.",
        "Call the patient with one clear explanation.",
        "Add downgrade language for future estimates.",
      ],
      whyItMatters:
        "Patient trust can erode quickly when insurance language feels like a surprise bill.",
    },
    tags: ["EOB", "patient trust", "estimate", "billing conversation"],
    challenges: ["insurance-billing", "patient-communication"],
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
        "Low perio conversion can erase the benefit of added hygiene capacity.",
      ],
      decisionDrives: [
        "Keep assisted hygiene only where production per hour rises enough.",
        "Redesign days where cancellations or low procedure mix erase margin.",
        "Remove assisted coverage where it only adds payroll.",
      ],
      teamNext: [
        "Compare assisted vs non-assisted production per hygiene hour.",
        "Subtract assistant labor cost by column and day.",
        "Track perio mix before expanding the model.",
      ],
      whyItMatters:
        "Assisted hygiene can either create real capacity or quietly turn into expensive motion.",
    },
    tags: ["assisted hygiene", "hygiene margin", "payroll", "perio mix"],
    challenges: ["owner-bottleneck", "team-training", "growth-case-acceptance"],
  },
  {
    id: "home-expense-leakage",
    category: "Improve Profitability",
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
      ],
      decisionDrives: [
        "Cancel unused or duplicate subscriptions.",
        "Renegotiate vendor categories growing faster than production.",
        "Separate questionable expenses before sending records to the CPA.",
      ],
      teamNext: [
        "Sort charges by vendor and recurrence.",
        "Mark keep, cancel, renegotiate, or document.",
        "Create a monthly owner expense review.",
      ],
      whyItMatters:
        "Expense leakage does not need one big mistake. It usually compounds through small charges no one owns.",
    },
    tags: ["expenses", "vendor creep", "subscriptions", "margin leakage"],
    challenges: ["owner-bottleneck", "growth-case-acceptance"],
  },
  {
    id: "home-procedure-margin",
    category: "Improve Profitability",
    coach: "Practice Growth Coach",
    scenarioTitle: "Which procedures are using chair time without enough margin?",
    uploadThis:
      "Production by CDT code, fee schedules, procedure volume, provider schedule, estimated appointment length, supply/lab costs, and payer mix.",
    analysis:
      "Production per chair hour, write-offs by code, variable costs, lab costs, payer reimbursement, and procedure frequency.",
    reveals:
      "A procedure that looks productive in gross production may be weak after time, write-offs, and costs.",
    decision:
      "Adjust fees, renegotiate payer terms, change scheduling priority, or rethink procedure mix.",
    outcome: "Better margin per hour and more intentional chair-time allocation.",
    useWhen:
      "Production looks solid, but the owner suspects certain procedures are consuming too much time for too little margin.",
    expanded: {
      examplePracticeData:
        "D2740 volume is high, but PPO write-offs, lab costs, and 90-minute blocks reduce margin compared with shorter direct restorative visits.",
      dataReveals: [
        "Gross production is not the same as margin per hour.",
        "High-frequency codes deserve more scrutiny than rare big cases.",
      ],
      decisionDrives: [
        "Prioritize procedures by margin per hour.",
        "Adjust fees or renegotiate where payers suppress profitable delivery.",
        "Protect schedule time for stronger-margin work.",
      ],
      teamNext: [
        "Calculate chair-hour margin for top CDT codes.",
        "Add lab and supply costs.",
        "Flag weak codes for pricing or payer review.",
      ],
      whyItMatters:
        "A full schedule can still underperform when low-margin procedures consume the best chair time.",
    },
    tags: ["procedure margin", "CDT", "chair time", "fee strategy"],
    challenges: ["owner-bottleneck", "growth-case-acceptance"],
  },
  {
    id: "home-ce-trip-structure",
    category: "Make Smarter Money Decisions",
    coach: "Tax Strategy Co-Pilot",
    scenarioTitle: "Is the CE trip structured cleanly before receipts get messy?",
    uploadThis:
      "CE registration, agenda, travel receipts, hotel folio, meal receipts, calendar, spouse/family travel notes, and business purpose notes.",
    analysis:
      "Which expenses connect to the CE purpose, which are mixed or personal, date alignment, documentation gaps, and what should be flagged for CPA review.",
    reveals:
      "The problem may not be the trip. It may be weak documentation and mixed costs.",
    decision:
      "Create a clean CPA packet, separate personal costs, document business purpose, and flag gray-area items before year-end.",
    outcome: "Cleaner records and fewer avoidable tax-time questions.",
    useWhen:
      "The owner is attending CE with travel, meals, or family overlap and wants cleaner documentation before receipts become a mess.",
    expanded: {
      examplePracticeData:
        "The course runs Thursday to Saturday. The hotel folio includes an extra personal night, family meals, and one dinner with a vendor.",
      dataReveals: [
        "The business purpose is plausible, but mixed costs need separation.",
        "The CPA packet should be built before year-end memory fades.",
      ],
      decisionDrives: [
        "Separate personal and business costs.",
        "Flag gray areas instead of burying them in the card export.",
      ],
      teamNext: [
        "Attach agenda and registration.",
        "Annotate business-purpose meals.",
        "Send a clean packet to the CPA.",
      ],
      whyItMatters:
        "The risk is not just the expense. It is weak documentation, mixed costs, and unclear business purpose.",
    },
    tags: ["CE travel", "CPA packet", "documentation", "mixed costs"],
    challenges: ["owner-bottleneck"],
  },
  {
    id: "home-networking-roi",
    category: "Make Smarter Money Decisions",
    coach: "Tax Strategy Co-Pilot",
    scenarioTitle: "Is the country club, sponsorship, or networking membership producing business value?",
    uploadThis:
      "Club or sponsorship invoices, credit card charges, referral source report, new patient report, case value by source, attendance notes, and owner calendar entries.",
    analysis:
      "Cost per referred patient, production from referred patients, accepted treatment, retention, documentation, and separation of business vs personal use.",
    reveals:
      "The expense may be more hopeful visibility than measurable business development.",
    decision:
      "Renew only with referral tracking, business-purpose documentation, and a follow-up workflow. Otherwise reduce, separate personally, or stop.",
    outcome: "Less lifestyle-adjacent leakage and cleaner owner decision-making.",
    useWhen:
      "A networking expense feels useful, but nobody can show whether it produces patients, accepted treatment, or documented business value.",
    expanded: {
      examplePracticeData:
        "The club costs $9,600 per year. Referral reports show three new patients tied to events, one accepted treatment plan, and no consistent follow-up notes.",
      dataReveals: [
        "Visibility is being treated like strategy.",
        "Personal benefit and business development are not clearly separated.",
      ],
      decisionDrives: [
        "Renew only with source tracking and follow-up ownership.",
        "Reduce or separate personally if business value stays vague.",
      ],
      teamNext: [
        "Add referral-source tracking.",
        "Log event attendance and follow-up.",
        "Review production by source before renewal.",
      ],
      whyItMatters:
        "Lifestyle-adjacent expenses can become margin leakage and documentation risk if no one measures the business result.",
    },
    tags: ["networking ROI", "sponsorship", "referral source", "owner expenses"],
    challenges: ["owner-bottleneck", "growth-case-acceptance"],
  },
  {
    id: "home-tech-adoption",
    category: "Make Smarter Money Decisions",
    coach: "Practice Growth Coach",
    scenarioTitle: "Should we buy this new technology or fix adoption first?",
    uploadThis:
      "Vendor proposal, monthly cost, implementation plan, current workflow pain, staff capacity, production opportunity, and existing software usage.",
    analysis:
      "Total cost, expected operational gain, training burden, adoption risk, overlap with existing tools, and decision criteria.",
    reveals:
      "The practice may not need another tool. It may need to use the tools it already pays for more consistently.",
    decision:
      "Buy, delay, renegotiate, pilot with a limited workflow, or fix adoption first.",
    outcome: "Better technology decisions and fewer expensive shelfware tools.",
    useWhen:
      "A vendor proposal sounds compelling, but the owner is not sure whether the practice can actually adopt it.",
    expanded: {
      examplePracticeData:
        "The proposal adds $1,400 per month. Current software has a similar feature, but usage logs and team notes show inconsistent adoption.",
      dataReveals: [
        "The pain may be workflow discipline, not missing technology.",
        "Buying another tool could add complexity before solving adoption.",
      ],
      decisionDrives: [
        "Pilot before committing to a full rollout.",
        "Renegotiate or delay if adoption capacity is weak.",
        "Fix current-tool usage where overlap is high.",
      ],
      teamNext: [
        "Map the workflow problem.",
        "Compare current and proposed tool usage.",
        "Set a 30-day adoption test before purchase.",
      ],
      whyItMatters:
        "Technology spend should buy measurable operating improvement, not another subscription the team half-uses.",
    },
    tags: ["technology", "adoption", "vendor proposal", "software ROI"],
    challenges: ["owner-bottleneck", "team-training"],
  },
];
