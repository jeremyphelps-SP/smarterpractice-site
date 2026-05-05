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
        "Two high-volume plans drive 41% of visits, but D4910, D2740, and D2392 reimburse below target margin and pay slower than lower-volume plans.",
      deeperFinding: [
        "Gross production is overstating payer value.",
        "The most common CDT codes are carrying the largest write-off drag.",
      ],
      nextActions: [
        "Pull top CDT codes by payer.",
        "Rank plans by write-off, collection speed, and chair hour.",
        "Choose renegotiate, restrict, stop promoting, or exit planning.",
      ],
    },
    tags: ["PPO", "write-offs", "chair hour", "payer profitability"],
    challenges: ["insurance-billing", "owner-bottleneck", "growth-case-acceptance"],
  },
  {
    id: "home-ppo-top-codes",
    category: "Reduce PPO Drag",
    coach: "PPO Strategy Advisor",
    scenarioTitle: "Which top CDT codes create the biggest write-off drag?",
    uploadThis:
      "Payer fee schedules, 12-month production by CDT code, procedure volume, write-off reports, chair-time estimates, and current fee increase requests.",
    analysis:
      "Code frequency, reimbursement gaps, write-off dollars, chair-hour impact, and which targeted increases would move the most margin.",
    reveals:
      "An across-the-board increase request may miss the codes causing the largest real loss.",
    decision:
      "Ask for targeted increases on the high-volume codes doing the most damage, or restrict the plan if those codes cannot be improved.",
    outcome: "A sharper PPO negotiation with fewer wasted asks.",
    useWhen:
      "The owner wants to renegotiate but does not know whether to ask broadly or target the codes that actually drive the loss.",
    expanded: {
      examplePracticeData:
        "D4910, D2740, D2392, and D4341 make up 54% of one payer's production, but two of those codes create most of the write-off dollars.",
      deeperFinding: [
        "The payer problem is concentrated, not evenly spread across the fee schedule.",
        "A broad increase may sound fair but fail to protect the procedures the practice performs most.",
      ],
      nextActions: [
        "Rank CDT codes by write-off dollars and chair hours.",
        "Build a targeted fee increase request.",
        "Set a restrict-or-keep decision date if the payer refuses.",
      ],
    },
    tags: ["PPO negotiation", "CDT codes", "fee schedule", "write-off drag"],
    challenges: ["insurance-billing", "owner-bottleneck", "growth-case-acceptance"],
  },
  {
    id: "home-denial-root-cause",
    category: "Reduce PPO Drag",
    coach: "Claims & Denials Coach",
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
      deeperFinding: [
        "The same CDT codes are being denied for the same correctable reasons.",
        "Late appeals are turning fixable denials into aging balances.",
      ],
      nextActions: [
        "Group denials by payer and CDT code.",
        "Identify missing documentation patterns.",
        "Assign appeal ownership before the next billing block.",
      ],
    },
    tags: ["claim denials", "documentation", "appeals", "payer workflow"],
    challenges: ["insurance-billing", "team-training"],
  },
  {
    id: "home-pre-d-packet-ready",
    category: "Reduce PPO Drag",
    coach: "Claims & Denials Coach",
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
      deeperFinding: [
        "Internal completeness is not the same as payer readiness.",
        "Weak rationale can delay approval even when treatment is clinically sound.",
      ],
      nextActions: [
        "Match attachments to payer requirements.",
        "Tighten the clinical narrative.",
        "Confirm CDT codes before submission.",
      ],
    },
    tags: ["pre-D", "attachments", "payer requirements", "documentation"],
    challenges: ["insurance-billing", "team-training"],
  },
  {
    id: "home-capacity-utilization",
    category: "Fix the Schedule",
    coach: "Practice Growth Coach",
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
      deeperFinding: [
        "Demand is uneven, not clearly above current capacity.",
        "Broken appointments and weak recall fill are creating false pressure to expand.",
      ],
      nextActions: [
        "Measure open chair time by provider and day.",
        "Create a fill protocol for openings inside 72 hours.",
        "Review utilization again after 30 days.",
      ],
    },
    tags: ["schedule utilization", "open chair time", "capacity", "payroll"],
    challenges: ["owner-bottleneck", "team-training", "growth-case-acceptance"],
  },
  {
    id: "home-overtime-scheduling",
    category: "Fix the Schedule",
    coach: "Staffing & HR Coach",
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
      deeperFinding: [
        "Overtime is not consistently aligned with high-production days.",
        "Workflow bottlenecks are being paid for as extra labor.",
      ],
      nextActions: [
        "Compare overtime by role and day.",
        "Map the last hour of the day.",
        "Assign one bottleneck fix for next week.",
      ],
    },
    tags: ["overtime", "staffing", "schedule workflow", "payroll"],
    challenges: ["owner-bottleneck", "team-training"],
  },
  {
    id: "home-fill-openings-first",
    category: "Fix the Schedule",
    coach: "Team Systems Coach",
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
        "Tomorrow has a 90-minute doctor opening, three hygiene patients with diagnosed treatment, 12 overdue recall patients, and one patient with a short-notice cancellation pattern.",
      deeperFinding: [
        "Availability alone is a weak fill strategy.",
        "Some openings should recover value, not just activity.",
      ],
      nextActions: [
        "Sort candidates by fit and value.",
        "Assign the first five calls.",
        "Track whether the opening was filled profitably.",
      ],
    },
    tags: ["open chair time", "schedule fill", "unscheduled treatment", "recall"],
    challenges: ["owner-bottleneck", "patient-communication"],
  },
  {
    id: "home-huddle-action-plan",
    category: "Fix the Schedule",
    coach: "Practice QuickAssist",
    scenarioTitle: "Can today's huddle notes become a clear action plan?",
    uploadThis:
      "Huddle notes, today's schedule screenshot, daily production goal, patient handoff notes, open chair time, and team bottleneck comments.",
    analysis:
      "Time-sensitive schedule issues, missed handoffs, unclear owners, before-lunch bottlenecks, and which action belongs to which role.",
    reveals:
      "The team may be naming the right problems but leaving the huddle without ownership.",
    decision:
      "Turn the notes into three owner-assigned actions before lunch, with one follow-up time and one metric to check.",
    outcome: "Fewer dropped handoffs and a more useful daily huddle.",
    useWhen:
      "The morning huddle produces discussion but not clear next steps the team can execute today.",
    expanded: {
      examplePracticeData:
        "The huddle notes mention two open blocks, one implant consult needing a handoff, and sterilization running behind, but no owner is assigned.",
      deeperFinding: [
        "The huddle is creating awareness without accountability.",
        "Small same-day issues are becoming end-of-day cleanup.",
      ],
      nextActions: [
        "Assign the open-block call list.",
        "Script the implant consult handoff.",
        "Check sterilization flow before lunch.",
      ],
    },
    tags: ["huddle", "action plan", "team ownership", "schedule bottleneck"],
    challenges: ["team-training", "owner-bottleneck"],
  },
  {
    id: "home-case-acceptance-leakage",
    category: "Help Patients Say Yes",
    coach: "Practice Growth Coach",
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
      deeperFinding: [
        "The largest cases are not getting faster or clearer follow-up.",
        "Financing is being used as a rescue tool instead of part of the planned presentation.",
      ],
      nextActions: [
        "Run a weekly unscheduled treatment review by case value.",
        "Use 24-hour follow-up for large cases.",
        "Document financing offered, objection, next contact, and owner.",
      ],
    },
    tags: ["case acceptance", "follow-up", "financing", "unscheduled treatment"],
    challenges: ["patient-communication", "growth-case-acceptance"],
  },
  {
    id: "home-financing-objections",
    category: "Help Patients Say Yes",
    coach: "Chairside Communication Coach",
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
      deeperFinding: [
        "The objection may be uncertainty, not refusal.",
        "Repeating the price can make a weak presentation weaker.",
      ],
      nextActions: [
        "Rewrite the coordinator follow-up.",
        "Add a clear payment path.",
        "Document the patient's actual objection.",
      ],
    },
    tags: ["financing", "case presentation", "objections", "follow-up"],
    challenges: ["patient-communication", "growth-case-acceptance"],
  },
  {
    id: "home-unscheduled-follow-up-first",
    category: "Help Patients Say Yes",
    coach: "Practice Growth Coach",
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
      deeperFinding: [
        "Oldest-first follow-up can waste coordinator time.",
        "Value, urgency, and readiness should drive the first calls.",
      ],
      nextActions: [
        "Score cases by value, urgency, and last contact.",
        "Assign the top 10 follow-ups.",
        "Track scheduled dollars, not just calls.",
      ],
    },
    tags: ["unscheduled treatment", "follow-up queue", "case value", "coordinator"],
    challenges: ["patient-communication", "growth-case-acceptance"],
  },
  {
    id: "home-smile-consult-photo",
    category: "Help Patients Say Yes",
    coach: "AI Smile Studio",
    scenarioTitle: "Can this patient photo support a clearer smile consultation?",
    uploadThis:
      "Authorized patient photos, treatment goals, cosmetic notes, shade or style preferences, clinical limitations, consent notes, and brand guidelines.",
    analysis:
      "Visual goals, patient language, consultation framing, before-and-after concept needs, and whether the image use is appropriate for the presentation.",
    reveals:
      "The case may be stalled because the patient cannot picture the path, not because they rejected the treatment.",
    decision:
      "Create a clearer visual consultation concept, adjust the presentation, or hold the asset until consent and clinical limits are clear.",
    outcome: "A more concrete cosmetic conversation without waiting on a designer.",
    useWhen:
      "A cosmetic or smile consultation needs better visual support and the practice has authorized patient imagery or concept direction.",
    expanded: {
      examplePracticeData:
        "The patient wants a natural, brighter result before a wedding. The team has authorized photos, shade notes, and a treatment path but no visual consultation aid.",
      deeperFinding: [
        "The patient goal is emotional and visual, while the current presentation is mostly procedural.",
        "A concept can support understanding, but consent and clinical boundaries still matter.",
      ],
      nextActions: [
        "Confirm photo authorization.",
        "Create a consultation concept tied to the treatment goal.",
        "Pair the visual with a clear next appointment recommendation.",
      ],
    },
    tags: ["AI Smile Studio", "cosmetic consult", "patient photos", "case acceptance"],
    challenges: ["patient-communication", "growth-case-acceptance"],
  },
  {
    id: "home-ar-over-90-collectable",
    category: "Get Paid Faster",
    coach: "Claims & Denials Coach",
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
      deeperFinding: [
        "The A/R report is being treated like a flat list instead of a queue by failure type.",
        "Some claims are being resubmitted before the failure reason is corrected.",
      ],
      nextActions: [
        "Build a 2-Friday recovery queue.",
        "Assign each failure type to an owner.",
        "Track dollars corrected by category.",
      ],
    },
    tags: ["A/R over 90", "collections", "COB", "attachment status"],
    challenges: ["insurance-billing", "owner-bottleneck", "team-training"],
  },
  {
    id: "home-collect-now",
    category: "Get Paid Faster",
    coach: "Claims & Denials Coach",
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
      deeperFinding: [
        "Avoiding the conversation now may create a harder one later.",
        "Payer uncertainty needs clear language, not delayed collection.",
      ],
      nextActions: [
        "Confirm benefits and payer history.",
        "Explain the estimate as an estimate.",
        "Add a ledger note after the conversation.",
      ],
    },
    tags: ["collections", "estimate", "patient ledger", "insurance timing"],
    challenges: ["insurance-billing", "patient-communication"],
  },
  {
    id: "home-eob-trust",
    category: "Get Paid Faster",
    coach: "Claims & Denials Coach",
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
      deeperFinding: [
        "The trust issue is the gap between estimate language and payer behavior.",
        "A technical EOB explanation will not be enough by itself.",
      ],
      nextActions: [
        "Check whether appeal is supported.",
        "Call the patient with one clear explanation.",
        "Add downgrade language for future estimates.",
      ],
    },
    tags: ["EOB", "patient trust", "estimate", "billing conversation"],
    challenges: ["insurance-billing", "patient-communication"],
  },
  {
    id: "home-denials-appeal-first",
    category: "Get Paid Faster",
    coach: "Claims & Denials Coach",
    scenarioTitle: "Which denials should we appeal first?",
    uploadThis:
      "Denial list, claim values, denial notices, EOBs, claim notes, attachments, payer appeal windows, and provider documentation.",
    analysis:
      "Appealability, dollar value, deadline risk, missing documentation, repeat denial cause, and expected recovery by payer and CDT code.",
    reveals:
      "The team may be spending equal effort on low-value or weak appeals while high-dollar supportable claims age out.",
    decision:
      "Prioritize high-dollar, supportable appeals before low-probability follow-up work.",
    outcome: "More recovered dollars from the same billing time.",
    useWhen:
      "The denial pile is too large and the billing team needs a recovery queue instead of a flat task list.",
    expanded: {
      examplePracticeData:
        "Twenty-six denials total $47,000. Eight have strong X-rays and narratives, five need perio charting, and six are near payer appeal deadlines.",
      deeperFinding: [
        "The appeal queue should be based on recoverable dollars and evidence strength.",
        "Some claims need documentation repair before appeal, not another call.",
      ],
      nextActions: [
        "Rank denials by dollars, deadline, and support.",
        "Repair missing documentation before appeal.",
        "Assign the top five appeals to this week's billing block.",
      ],
    },
    tags: ["appeals", "denials", "billing queue", "recoverable dollars"],
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
      deeperFinding: [
        "More movement did not automatically create more profitable appointments.",
        "Low perio conversion can erase the benefit of added hygiene capacity.",
      ],
      nextActions: [
        "Compare assisted vs non-assisted production per hygiene hour.",
        "Subtract assistant labor cost by column and day.",
        "Track perio mix before expanding the model.",
      ],
    },
    tags: ["assisted hygiene", "hygiene margin", "payroll", "perio mix"],
    challenges: ["owner-bottleneck", "team-training", "growth-case-acceptance"],
  },
  {
    id: "home-expense-leakage",
    category: "Improve Profitability",
    coach: "Expense & CPA Prep Advisor",
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
      deeperFinding: [
        "No single expense looks alarming, but the recurring stack is growing.",
        "Duplicate tools and vendor price creep are not assigned to an owner.",
      ],
      nextActions: [
        "Sort charges by vendor and recurrence.",
        "Mark keep, cancel, renegotiate, or document.",
        "Create a monthly owner expense review.",
      ],
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
      deeperFinding: [
        "Gross production is not the same as margin per hour.",
        "High-frequency codes deserve more scrutiny than rare big cases.",
      ],
      nextActions: [
        "Calculate chair-hour margin for top CDT codes.",
        "Add lab and supply costs.",
        "Flag weak codes for pricing or payer review.",
      ],
    },
    tags: ["procedure margin", "CDT", "chair time", "fee strategy"],
    challenges: ["owner-bottleneck", "growth-case-acceptance"],
  },
  {
    id: "home-tech-adoption",
    category: "Improve Profitability",
    coach: "Dental Technology Advisor",
    scenarioTitle: "Should we buy this technology or fix adoption first?",
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
      "A scanner, AI tool, or software proposal sounds compelling, but the owner is not sure whether the practice can actually adopt it.",
    expanded: {
      examplePracticeData:
        "The proposal adds $1,400 per month. Current software has a similar feature, but usage logs and team notes show inconsistent adoption.",
      deeperFinding: [
        "The pain may be workflow discipline, not missing technology.",
        "Buying another tool could add complexity before solving adoption.",
      ],
      nextActions: [
        "Map the workflow problem.",
        "Compare current and proposed tool usage.",
        "Set a 30-day adoption test before purchase.",
      ],
    },
    tags: ["technology", "adoption", "vendor proposal", "software ROI"],
    challenges: ["owner-bottleneck", "team-training"],
  },
  {
    id: "home-ce-trip-structure",
    category: "Make Smarter Money Decisions",
    coach: "Expense & CPA Prep Advisor",
    scenarioTitle: "Is the CE trip documented cleanly before receipts get messy?",
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
      deeperFinding: [
        "The business purpose is plausible, but mixed costs need separation.",
        "The CPA packet should be built before year-end memory fades.",
      ],
      nextActions: [
        "Attach agenda and registration.",
        "Annotate business-purpose meals.",
        "Send a clean packet to the CPA.",
      ],
    },
    tags: ["CE travel", "CPA packet", "documentation", "mixed costs"],
    challenges: ["owner-bottleneck"],
  },
  {
    id: "home-expansion-footprint",
    category: "Make Smarter Money Decisions",
    coach: "Expansion & Buildout Advisor",
    scenarioTitle: "Should we expand now or optimize the current footprint first?",
    uploadThis:
      "Build-out proposal, floor plan, current schedule utilization, production by provider, staffing model, equipment costs, lease terms, and projected operatories.",
    analysis:
      "Current capacity, hidden flow constraints, staffing needs, sterilization and patient flow, change-order risk, and projected production required to justify the build-out.",
    reveals:
      "The practice may be trying to build around a utilization problem instead of proving the new operatories can produce.",
    decision:
      "Expand, phase the build-out, renegotiate the proposal, or optimize current chair utilization first.",
    outcome: "A cleaner expansion decision with fewer expensive surprises.",
    useWhen:
      "The owner is considering more operatories, relocation, or a build-out and needs to know what could prevent the expansion from paying off.",
    expanded: {
      examplePracticeData:
        "The proposal adds two operatories, but current provider utilization is 78%, sterilization is already tight, and staffing plans assume one assistant who is not hired yet.",
      deeperFinding: [
        "The constraint may be flow and staffing, not square footage.",
        "Build-out cost risk increases when operational assumptions are vague.",
      ],
      nextActions: [
        "Compare current utilization to projected chair demand.",
        "Flag sterilization, staffing, and change-order risks.",
        "Choose expand now, phase later, or optimize first.",
      ],
    },
    tags: ["expansion", "build-out", "operatories", "utilization"],
    challenges: ["owner-bottleneck", "growth-case-acceptance"],
  },
  {
    id: "home-job-ad-dso",
    category: "Make Smarter Money Decisions",
    coach: "Staffing & HR Coach",
    scenarioTitle: "Is this job ad strong enough to compete with DSOs?",
    uploadThis:
      "Draft job ad, compensation range, benefits, schedule, role expectations, local competitor postings, turnover notes, and onboarding checklist.",
    analysis:
      "Offer clarity, compensation positioning, schedule tradeoffs, candidate friction, role fit, retention risk, and whether onboarding supports the promise.",
    reveals:
      "The hiring problem may be a weak offer and unclear role, not just a tight labor market.",
    decision:
      "Rewrite the job ad, adjust compensation or schedule, clarify the role, or fix onboarding before spending more on recruiting.",
    outcome: "A stronger hiring funnel and fewer mismatched candidates.",
    useWhen:
      "The practice is struggling to hire an assistant, hygienist, or front-desk role and needs to compete without guessing.",
    expanded: {
      examplePracticeData:
        "The ad says competitive pay but lists no range. Local postings show higher hygiene pay, four-day schedules, and clearer benefits.",
      deeperFinding: [
        "The practice may be invisible to good candidates because the offer is too vague.",
        "Hiring friction can become retention friction if onboarding is thin.",
      ],
      nextActions: [
        "Rewrite the ad with role, schedule, pay range, and benefits.",
        "Compare the offer to local postings.",
        "Add a first-30-days onboarding checklist.",
      ],
    },
    tags: ["hiring", "job ad", "DSO competition", "onboarding"],
    challenges: ["team-training", "owner-bottleneck"],
  },
  {
    id: "home-hipaa-incident",
    category: "Make Smarter Money Decisions",
    coach: "HIPAA & Safety Coach",
    scenarioTitle: "Is this HIPAA incident handled correctly?",
    uploadThis:
      "Incident description, patient communication draft, policy text, audit notes, who accessed or received the information, timeline, and corrective action notes.",
    analysis:
      "What happened, what information was involved, whether policy steps were followed, documentation gaps, patient communication risk, and what needs escalation.",
    reveals:
      "The risky part may be the undocumented response after the incident, not only the incident itself.",
    decision:
      "Document the timeline, contain the issue, update the patient communication, assign corrective action, and escalate for compliance review when needed.",
    outcome: "A cleaner incident response and fewer preventable compliance gaps.",
    useWhen:
      "A record, email, message, or transfer mistake happened and the owner needs a structured response before the team improvises.",
    expanded: {
      examplePracticeData:
        "A statement was emailed to the wrong patient. The team has a draft apology, but no documented timeline, policy reference, or corrective action owner.",
      deeperFinding: [
        "The team is reacting verbally instead of creating a defensible incident record.",
        "Patient communication should be clear without speculating beyond the facts.",
      ],
      nextActions: [
        "Document what happened and when.",
        "Contain access and assign corrective action.",
        "Have compliance counsel or the designated officer review next steps.",
      ],
    },
    tags: ["HIPAA", "incident response", "patient communication", "documentation"],
    challenges: ["team-training", "owner-bottleneck", "patient-communication"],
  },
];
