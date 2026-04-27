export const scenarios = [
  {
    id: 'scn-001',
    category: 'Get Paid Faster',
    coach: 'Revenue Cycle Coach Dana',
    scenarioTitle: 'Crown Denial Appeal After the First Weak Submission',
    situation: 'Based on what we discussed in your last billing review, crown denials are not random. Your D2740 claim for tooth #19 was denied after the original narrative said only fractured cusp, even though the chart shows recurrent decay, pain on chewing, and an intraoral photo that was never attached.',
    teamInput: 'You have 21 days left to appeal. The claim value is $1,240, the patient already paid $420, and the front desk is worried about sending another balance statement before insurance reconsideration is complete.',
    outputPreview: `Coach response:
- Do not send another patient statement yet. This is an appeal-quality problem, not a patient-collection problem.
- Rebuild the packet around evidence, not emotion:
  1. Label the tooth, surface, and date of service.
  2. Attach the pre-op PA or BW, intraoral photo, and chart note.
  3. State why a direct restoration was not clinically adequate.
- Appeal narrative:
  - Tooth #19 presented with recurrent decay beneath a failing MOD restoration, visible crack lines, and pain on chewing. Remaining tooth structure was compromised. Full coverage was necessary to restore function and prevent fracture progression.
- What to do next:
  - Submit within 48 hours.
  - Call payer 3 business days later and log the reference number.
  - Hold patient billing until the payer response date is known.`,
    whyItMatters: 'This turns a denied claim into a controlled recovery process with patient trust, cash timing, and payer follow-up managed together.',
    tags: ['progressive', 'crown denial', 'appeal', 'D2740', 'cash flow'],
    roles: [
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-002',
    category: 'Get Paid Faster',
    coach: 'Revenue Cycle Coach Dana',
    scenarioTitle: 'What Am I Missing in A/R Over 90?',
    situation: 'You asked why A/R over 90 is still high even though the team works the report every Friday. The deeper issue is that they are working oldest-first instead of diagnosing why dollars are stuck.',
    teamInput: 'Insurance A/R over 90 is $212,000. Roughly $64,000 is COB-related, $38,000 needs attachments, $29,000 is credentialing mismatch, and the rest is mixed payer follow-up. Billing has 5 protected hours per week.',
    outputPreview: `Diagnostic read:
- What you are missing: the report is being treated like a list, not a queue of different failure types.
- Stop doing this:
  - Calling oldest claims one by one without grouping.
  - Resubmitting claims before the failure reason is corrected.
- New work order:
  | Bucket | Dollars | First action | Owner |
  | COB | $64,000 | verify primary/secondary order | Billing |
  | Attachments | $38,000 | upload missing docs | Clinical + Billing |
  | Credentialing | $29,000 | payer escalation | OM |
- What to do next:
  - Spend the next two Fridays only on COB and attachments.
  - Track dollars corrected, not calls made.
  - Review the top 10 claims with the owner next Tuesday.`,
    whyItMatters: 'A/R drops faster when the practice attacks root causes in batches instead of mistaking activity for progress.',
    tags: ['diagnostic', 'accounts receivable', 'COB', 'billing workflow'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-003',
    category: 'Get Paid Faster',
    coach: 'Patient Billing Coach Mia',
    scenarioTitle: 'EOB Conversation After a Composite Downgrade',
    situation: 'Based on the patient call you described, the tension is not just the $186 balance. The patient feels the estimate was presented as a promise, and your team is trying to explain insurance without accepting any ownership.',
    teamInput: 'The EOB downgraded D2392 to an amalgam allowance. The patient expected to owe $74 and now owes $260. She has been with the practice 9 years and has referred two family members.',
    outputPreview: `Patient call plan:
- Start with accountability:
  - I can see why this feels different from what you expected. We should have made the downgrade possibility clearer.
- Explain in plain English:
  - Your plan paid toward the filling, but it used the lower silver-filling allowance even though the tooth-colored filling was completed.
- Decision point:
  - If the chart supports an appeal, submit it.
  - If not, offer a one-time split payment and update future estimate language.
- What to do next:
  - Review the chart today.
  - Call the patient back by 4 PM with either appeal steps or payment options.
  - Add downgrade language to all posterior composite estimates by Friday.`,
    whyItMatters: 'The best billing conversations protect the relationship while still moving the balance toward resolution.',
    tags: ['diagnostic', 'EOB', 'patient billing', 'downgrade', 'collections'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-004',
    category: 'Get Paid Faster',
    coach: 'Insurance Systems Coach Priya',
    scenarioTitle: 'Should We Collect Now or Wait for Insurance?',
    situation: 'You asked whether to keep collecting estimated patient portions at checkout when benefits are uncertain. The real decision is not collect or do not collect. It is how much confidence the team has in the estimate and how exceptions are approved.',
    teamInput: 'Same-day collection is 68%. The owner wants 90%. Front desk avoids collecting crown co-pays when estimates vary by more than $150. Patient A/R over 60 is now $41,000.',
    outputPreview: `Decision framework:
- Collect today when:
  - Benefits were verified within 7 days.
  - Plan limitations are documented.
  - Estimate variance is under $150.
- Escalate before collecting when:
  - Missing tooth clause, frequency limit, or COB is unclear.
  - Estimate variance is over $150.
  - Patient has disputed a prior balance.
- Suggested language:
  - Your estimated portion today is $___ based on the benefits available to us. If insurance processes differently, we adjust the account.
- What to do next:
  - Create a confidence flag: green, yellow, red.
  - Green gets collected at checkout.
  - Yellow needs coordinator review.
  - Red needs written estimate language before treatment.`,
    whyItMatters: 'This gives the team permission to collect confidently without pretending every estimate is perfect.',
    tags: ['decision', 'same-day collections', 'financial policy', 'checkout'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-005',
    category: 'Get Paid Faster',
    coach: 'Revenue Cycle Coach Dana',
    scenarioTitle: 'Pre-D Packet for Perio Grafting with Weak Documentation',
    situation: 'Based on the perio cases you showed me, the payer is not rejecting grafting because grafting is impossible to cover. They are rejecting vague submissions that sound cosmetic.',
    teamInput: 'The patient has recession on #22 and #27, sensitivity, 1 mm attached gingiva, and recession progression from 3 mm to 5 mm over 14 months. The pre-D must go out this week before the patient loses momentum.',
    outputPreview: `Pre-D packet:
- Lead with diagnosis:
  - Progressive gingival recession on #22 and #27 with inadequate attached gingiva and sensitivity.
- Prove progression:
  - Include last year's perio chart beside current measurements.
- Avoid cosmetic framing:
  - Do not say the patient dislikes the gumline.
- Attach:
  - Current perio chart
  - Prior perio chart
  - Intraoral photos
  - Provider note
  - Treatment plan with codes and teeth
- What to do next:
  - Send the packet by Wednesday.
  - Schedule a benefits review call with the patient for 7 business days later.
  - If denied, appeal on progression and symptoms, not preference.`,
    whyItMatters: 'A strong pre-D keeps the clinical recommendation moving while reducing the chance that benefits confusion kills the case.',
    tags: ['progressive', 'pre-determination', 'grafting', 'perio', 'documentation'],
    roles: [
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-006',
    category: 'Help Patients Say Yes',
    coach: 'Treatment Acceptance Coach Elena',
    scenarioTitle: 'SRP Case That Keeps Turning Into a Cleaning Conversation',
    situation: 'Based on what we discussed after your hygiene meeting, the team is diagnosing SRP but presenting it like an upgraded cleaning. That is why patients keep asking what insurance covers instead of understanding active disease.',
    teamInput: 'The patient has 5-6 mm pockets, bleeding on 42% of sites, radiographic calculus, and early bone loss. The patient says, I only want what my insurance covers today.',
    outputPreview: `Coaching plan:
- Re-anchor the conversation:
  - This is not a cleaning decision. This is treatment for active gum infection.
- Handoff script:
  - We found bleeding and deeper pockets in several areas. A regular cleaning does not reach the bacteria causing this.
- Financial bridge:
  - Let us look at timing and benefits after we are clear on what your gums need.
- Decision point:
  - If the patient agrees clinically but hesitates financially, offer phased quadrants.
  - If the patient denies the diagnosis, show charting and bleeding points.
- What to do next:
  - Calibrate hygiene language tomorrow morning.
  - Audit 10 SRP charts for bleeding, pocketing, radiographs, and diagnosis notes.`,
    whyItMatters: 'Patients say yes when the team leads with diagnosis, not benefit design.',
    tags: ['progressive', 'SRP', 'case acceptance', 'hygiene', 'patient communication'],
    roles: [
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-007',
    category: 'Help Patients Say Yes',
    coach: 'Treatment Acceptance Coach Elena',
    scenarioTitle: 'What Are We Missing in Large Case Follow-Up?',
    situation: 'You said the patient accepted the $18,400 plan but disappeared after the consult. What you are missing is that acceptance in the room is not the same as a scheduled treatment pathway.',
    teamInput: 'The patient travels two weeks per month, wants to start with the painful quadrant, has $3,000 remaining insurance this year, and asked whether the whole plan has to be done before January.',
    outputPreview: `Diagnostic read:
- The blocker is not yes/no. It is sequence risk.
- Patient's hidden questions:
  - Will I be stuck mid-treatment while traveling?
  - Can I use this year's benefits without committing to everything now?
  - What happens if I start and need to pause?
- Proposed next conversation:
  - Based on what we discussed, I mapped this into phases so you are never left in an unstable stage.
- What to do next:
  1. Reserve phase 1 and phase 2 before starting.
  2. Align benefit timing with the first two phases.
  3. Offer financing by phase, not as one giant number.
  4. Call within 24 hours, not next week.`,
    whyItMatters: 'Large cases stall when the practice sells the treatment but does not coach the decision architecture.',
    tags: ['diagnostic', 'large case', 'sequencing', 'financing', 'case acceptance'],
    roles: [
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-008',
    category: 'Help Patients Say Yes',
    coach: 'Financing Coach Alex',
    scenarioTitle: 'Should We Offer Financing Earlier or Wait for Objection?',
    situation: 'The team is split. One person thinks early financing sounds pushy; another thinks waiting until the patient objects makes financing feel like a rescue plan. The numbers suggest the second person is right.',
    teamInput: 'Cases from $1,500-$4,000 have a 37% same-day acceptance rate. When financing is mentioned before the fee reveal, acceptance rises to 52%. When mentioned only after objection, it is 29%.',
    outputPreview: `Decision:
- Offer financing earlier, but do not lead with affordability fear.
- Use neutral choice language:
  - Most patients choose one of three paths: payment in full, split by appointment, or monthly financing.
- Do not say:
  - If you cannot afford this, we have financing.
- What to do next:
  - Test the new script for 30 days on all cases over $1,500.
  - Track acceptance by coordinator.
  - Track whether financing was introduced before or after the fee.
  - Review results in the first manager meeting next month.`,
    whyItMatters: 'The timing of the money conversation changes whether financing feels normal or embarrassing.',
    tags: ['decision', 'financing', 'case acceptance', 'payment options'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-009',
    category: 'Help Patients Say Yes',
    coach: 'Patient Communication Coach Tia',
    scenarioTitle: 'Crown Fee Objection from a Patient Who Trusts Insurance More Than Diagnosis',
    situation: 'Based on the pattern we saw in consult notes, the patient is not rejecting the crown. She is using insurance coverage as a proxy for whether the crown is really necessary.',
    teamInput: 'The patient has delayed treatment twice. The crown fee is $1,620, insurance estimate is $740, and the patient says, If my plan barely pays, maybe it is not that important.',
    outputPreview: `Chairside coaching script:
- Separate clinical need from plan design:
  - Your insurance helps with cost, but it does not measure crack risk or decide what keeps the tooth restorable.
- Make the risk concrete:
  - Waiting may turn a crown appointment into root canal plus crown, or a fracture that cannot be restored.
- Offer a decision, not pressure:
  - The decision today is whether we protect this tooth while it is still predictable.
- What to do next:
  - Show the photo.
  - Use one sentence to explain the crack.
  - Review two payment paths.
  - Reserve the appointment before the patient leaves.`,
    whyItMatters: 'High-trust clinical framing helps patients stop treating insurance as the clinical authority.',
    tags: ['progressive', 'crown acceptance', 'insurance objection', 'patient script'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-010',
    category: 'Help Patients Say Yes',
    coach: 'Hygiene Growth Coach Laura',
    scenarioTitle: 'What Am I Missing When Patients Decline Perio Maintenance?',
    situation: 'You are hearing patients say insurance only covers two cleanings, but the bigger issue is that the team keeps calling periodontal maintenance a cleaning.',
    teamInput: 'Only 11% of active hygiene patients are coded D4910, but audit notes show 26% have prior SRP or persistent pocketing. Hygienists are worried about upsetting long-term patients.',
    outputPreview: `Diagnostic read:
- What is missing: disease-status language.
- Replace:
  - You need to come more often for cleanings.
- With:
  - After gum therapy, we maintain the infection differently than routine preventive care.
- Decision point:
  - If bleeding and pocketing remain, recommend 3-month perio maintenance.
  - If stable for 12 months, reassess interval.
- What to do next:
  - Audit 25 hygiene charts this week.
  - Identify patients miscoded as prophy.
  - Calibrate hygienists on one standard explanation.
  - Track D4910 acceptance for 60 days.`,
    whyItMatters: 'Perio maintenance acceptance is usually a communication and calibration issue before it is an insurance issue.',
    tags: ['diagnostic', 'perio maintenance', 'hygiene', 'case acceptance'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-011',
    category: 'Fix the Schedule',
    coach: 'Scheduling Coach Ben',
    scenarioTitle: 'Tomorrow Morning Crown Cancellation Recovery',
    situation: 'Based on your schedule note, the 9 AM cancellation tomorrow is not just an empty slot. It is the highest-value doctor block of the week, and filling it with a limited exam would hide the real loss.',
    teamInput: 'Two-hour crown prep canceled at 3:20 PM. There are 14 patients on the ASAP list, three hygiene patients tomorrow with diagnosed restorative treatment, and $7,800 in unscheduled treatment from the last 30 days.',
    outputPreview: `Recovery plan:
- Call order:
  1. Accepted crown/build-up patients who asked for sooner appointments.
  2. Hygiene patients already coming tomorrow with diagnosed restorative.
  3. Emergency patients likely to convert to definitive care.
- Do not fill with:
  - Low-value limited exams unless the block is still open by 10 AM tomorrow.
- Call script:
  - Based on what Dr. Patel recommended, we had a treatment opening tomorrow at 9 AM. If that helps you move this forward, I can reserve it now.
- What to do next:
  - Assign one owner now.
  - Make 8 calls before 5 PM.
  - Text only after calls.
  - Track production recovered.`,
    whyItMatters: 'Schedule recovery should protect production quality, not just make the calendar look full.',
    tags: ['progressive', 'schedule hole', 'cancellation recovery', 'production'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-012',
    category: 'Fix the Schedule',
    coach: 'Scheduling Coach Ben',
    scenarioTitle: 'Should We Add Hours or Fix Utilization First?',
    situation: 'The owner is considering adding Friday hours because the schedule feels full, but the data shows recurring midweek gaps and no-show leakage. This is a decision point, not a staffing problem yet.',
    teamInput: 'Hygiene is booked out 9 weeks, doctor has 7.5 open hours next week, no-shows average 11%, and overtime would cost about $1,800 per month if Fridays are added.',
    outputPreview: `Decision:
- Fix utilization before adding hours.
- Why:
  - You already have doctor capacity leaking next week.
  - No-show rate is high enough to create false demand.
  - Friday hours add cost before the current template is disciplined.
- 30-day test:
  1. Fill doctor gaps from unscheduled treatment.
  2. Add no-show risk scoring.
  3. Protect two emergency blocks per day.
  4. Review hygiene overflow after cancellations are controlled.
- What to do next:
  - Delay Friday expansion for 30 days.
  - Measure recovered production and no-show reduction first.`,
    whyItMatters: 'Expanding hours before fixing utilization can turn a scheduling problem into a payroll problem.',
    tags: ['decision', 'schedule utilization', 'hours expansion', 'owner-level'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-013',
    category: 'Fix the Schedule',
    coach: 'Operations Coach Maya',
    scenarioTitle: 'What Am I Missing in Doctor Flow?',
    situation: 'You described the doctor as running behind every day, but the schedule is not overbooked on paper. That means the issue is likely interruption design, not total volume.',
    teamInput: 'Doctor is interrupted for hygiene exams every 20-30 minutes. Crown preps run 12 minutes late on average. Assistants say they lose setup rhythm after exams.',
    outputPreview: `Diagnostic read:
- What you are missing: exam timing is stealing transition time.
- Fix:
  - Batch hygiene exams into 2-3 windows.
  - Require hygienists to have radiographs, perio findings, and patient concerns ready before doctor enters.
  - Block no exam interruptions during anesthesia, prep finish, or final cement.
- Measure:
  - Procedure start variance
  - Crown prep end time
  - Number of doctor room switches per morning
- What to do next:
  - Pilot exam windows for 5 clinical days.
  - Debrief with hygienists and assistants next Friday.`,
    whyItMatters: 'Doctor flow improves when the practice manages transitions as seriously as appointments.',
    tags: ['diagnostic', 'doctor flow', 'hygiene exams', 'schedule template'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-014',
    category: 'Fix the Schedule',
    coach: 'Scheduling Coach Ben',
    scenarioTitle: 'Emergency Blocks Without Sacrificing Planned Production',
    situation: 'Based on last month, emergencies are not the problem. Uncontrolled emergency placement is the problem. They are pushing planned restorative into late-day stress.',
    teamInput: 'Same-day emergencies average 3.4 per day. Two blocks are available most mornings, but the front desk inserts emergencies wherever the patient can come. Planned production ran late 9 of the last 16 days.',
    outputPreview: `Operating rule:
- Emergencies go into protected blocks unless swelling, trauma, or uncontrolled pain requires escalation.
- Triage script:
  - Are you in pain now?
  - Is there swelling or fever?
  - Can you chew on that side?
  - Is anything broken, loose, or sharp?
- Decision point:
  - Urgent medical concern: same-day priority.
  - Broken restoration without pain: emergency block.
  - Cosmetic concern: next restorative consult.
- What to do next:
  - Add two emergency blocks tomorrow.
  - Train front desk on the four triage questions.
  - Track planned production displaced by emergency visits.`,
    whyItMatters: 'Emergency access should be reliable without letting emergencies run the whole practice.',
    tags: ['progressive', 'emergency scheduling', 'triage', 'production stability'],
    roles: [
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-015',
    category: 'Fix the Schedule',
    coach: 'Hygiene Growth Coach Laura',
    scenarioTitle: 'No-Show Pattern the Reminder System Is Not Solving',
    situation: 'The reminder software is doing what it was designed to do, but it is not making judgment calls. Your Monday hygiene no-shows need risk-based escalation.',
    teamInput: 'Monday hygiene no-show rate is 17%, practice average is 8%, and 61% of Monday no-shows had at least one prior broken appointment. Standby list is not segmented.',
    outputPreview: `Diagnostic plan:
- Risk flags:
  - Prior broken appointment
  - Monday or first appointment
  - No two-way confirmation
  - Balance over $150
- Escalation rule:
  - High-risk patients get a call 48 hours out.
  - Unconfirmed high-risk slots are offered to standby patients after policy notice.
- Standby list fields:
  - Preferred days
  - Family grouping
  - Treatment need
  - Last contacted
- What to do next:
  - Build the risk list for next Monday today.
  - Fill two backup candidates per hygiene column.`,
    whyItMatters: 'No-show control gets better when the team stops treating every appointment as equally likely to keep.',
    tags: ['diagnostic', 'no-shows', 'hygiene schedule', 'confirmation'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-016',
    category: 'Grow New Patients',
    coach: 'Growth Coach Riley',
    scenarioTitle: 'New Patient Calls Are Up, But Quality Is Down',
    situation: 'Based on the campaign report, you are getting more calls but not better growth. The owner sees 48 new patient calls and feels encouraged; the schedule shows only 19 kept visits.',
    teamInput: 'Google ads spent $3,200 this month. Call answer rate is 76%, scheduled rate is 54%, kept rate is 40%, and most callers ask about PPO participation before describing their dental concern.',
    outputPreview: `Growth diagnostic:
- Do not judge this campaign by calls.
- Judge it by kept visits, payer mix, diagnosed treatment, and collections within 90 days.
- Front desk script shift:
  - We can help with that. Let me first understand what is going on, then I will verify benefits so we are prepared.
- Decision point:
  - If kept visits stay under 50%, fix phone conversion before increasing spend.
  - If payer mix is low-margin PPO, adjust targeting.
- What to do next:
  - Audit 20 calls.
  - Score appointment offer within 90 seconds.
  - Pause budget increase until kept rate improves.`,
    whyItMatters: 'Growth that does not convert into kept, profitable visits is just expensive noise.',
    tags: ['diagnostic', 'new patients', 'call conversion', 'marketing ROI', 'owner-level'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-017',
    category: 'Grow New Patients',
    coach: 'Growth Coach Riley',
    scenarioTitle: 'Should We Spend More on Ads or Improve Recall Reactivation?',
    situation: 'You asked whether to add $2,000 per month to ads. Based on what we discussed, the practice has a cheaper growth lever sitting in the inactive patient list.',
    teamInput: 'There are 1,180 patients overdue 9+ months. Ads cost $180 per scheduled new patient. Hygiene has six openings next week and restorative diagnosis from recall averages $620 per returning patient.',
    outputPreview: `Decision:
- Improve recall reactivation before increasing ad spend.
- Why:
  - Existing patients already know the practice.
  - Hygiene has immediate openings.
  - Restorative follow-through from recall is measurable.
- 14-day campaign:
  - Segment by perio status, family members, and unscheduled treatment.
  - Call high-value overdue patients first.
  - Text only after a call attempt.
- What to do next:
  - Pull the overdue report today.
  - Build 3 message tracks.
  - Fill next week's six hygiene openings before adding ad budget.`,
    whyItMatters: 'Owner-level growth means choosing the highest-return demand source, not automatically buying more leads.',
    tags: ['decision', 'recall reactivation', 'ad spend', 'growth strategy', 'owner-level'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-018',
    category: 'Grow New Patients',
    coach: 'Growth Coach Riley',
    scenarioTitle: 'Implant Consult Follow-Up That Reveals the Real Objection',
    situation: 'Based on the last five implant consults, patients are not disappearing because they are uninterested. They leave with too many unresolved decisions: surgery fear, cost, timing, and insurance uncertainty.',
    teamInput: 'Implant consult show rate is 82%, but only 26% schedule the next step. Average case value is $5,800. Coordinator notes usually say thinking about it with no objection category.',
    outputPreview: `Progressive follow-up:
- Day 1:
  - Recap diagnosis, recommended sequence, and the one next appointment needed.
- Day 3 call:
  - What is the biggest question now: cost, surgery, timing, or comparing options?
- Day 7:
  - Offer a 10-minute financing or clinical clarification call.
- Decision log:
  | Objection | Next action |
  | Cost | financing review |
  | Fear | doctor call |
  | Timing | phased schedule |
- What to do next:
  - Recode the last 20 consults by objection.
  - Stop using thinking about it as a category.`,
    whyItMatters: 'High-value consults need coached follow-up, not generic reminder messages.',
    tags: ['progressive', 'implant consult', 'lead nurturing', 'case conversion'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-019',
    category: 'Grow New Patients',
    coach: 'Patient Experience Coach Tia',
    scenarioTitle: 'What Are We Missing in Membership Plan Enrollment?',
    situation: 'The membership plan is not failing because patients dislike it. It is failing because the team introduces it after the patient has already mentally paid full price at checkout.',
    teamInput: 'Only 13% of eligible uninsured patients enroll. The plan is $39 per month, includes preventive care, and discounts treatment 15%. Most uninsured new patients ask about cost during scheduling.',
    outputPreview: `Diagnostic read:
- What is missing: timing and comparison.
- Introduce during scheduling:
  - Since you do not have dental insurance, we have an in-office membership option many patients use.
- Compare after exam:
  | Option | Today | Treatment savings | Best for |
  | Non-member | $___ | none | one-time visit |
  | Member | $___ | 15% | ongoing care |
- What to do next:
  - Add uninsured flag to new patient intake.
  - Require member vs non-member comparison before checkout.
  - Track offer rate and enrollment rate separately.`,
    whyItMatters: 'Membership growth depends on making the option visible before the patient feels surprised by fees.',
    tags: ['diagnostic', 'membership plan', 'uninsured patients', 'growth'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-020',
    category: 'Grow New Patients',
    coach: 'Growth Coach Riley',
    scenarioTitle: 'Owner-Level Referral Strategy Instead of Another Discount Campaign',
    situation: 'The owner wants a whitening discount to create quick new patient demand. Based on your payer mix and open hygiene capacity, a referral campaign may create better patients with less margin damage.',
    teamInput: 'The last whitening promo brought 31 appointments, but only 9 converted to comprehensive exams. Existing patient referrals have a 74% kept rate and 2.1x higher diagnosed treatment in the first 90 days.',
    outputPreview: `Strategy recommendation:
- Choose referral campaign over broad discounting.
- Campaign design:
  - Invite loyal hygiene patients and completed restorative patients.
  - Offer a thank-you that does not discount clinical care.
  - Ask for referrals tied to trust, not price.
- Track:
  - Referral source
  - Kept visit rate
  - Comprehensive exam conversion
  - 90-day diagnosed treatment
- What to do next:
  - Build a list of 100 loyal patients.
  - Launch a 30-day referral ask.
  - Compare results to the last whitening campaign before repeating discounts.`,
    whyItMatters: 'Owner-level marketing protects brand and margin while still creating demand.',
    tags: ['owner-level', 'referrals', 'marketing strategy', 'new patients'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-021',
    category: 'Build a Stronger Team',
    coach: 'Team Systems Coach Naomi',
    scenarioTitle: 'New Assistant Onboarding After Turnover Time Doubled',
    situation: 'Based on last week\'s schedule review, the new assistants are not slow because they lack effort. They lack a visible standard for what ready means.',
    teamInput: 'Turnover increased from 12 to 24 minutes. Two assistants started in the last 30 days. Crown prep trays vary by assistant, and sterilization handoffs are verbal.',
    outputPreview: `Progressive onboarding plan:
- Week 1:
  - Shadow top 10 procedure setups.
  - Learn room close-out checklist.
- Week 2:
  - Perform turnover with lead assistant observing.
  - Correct tray setup before doctor enters.
- Week 3:
  - Run one column with spot checks.
- Scorecard:
  - Room ready on time
  - Correct tray
  - Materials stocked
  - Infection control complete
- What to do next:
  - Create one laminated setup map per procedure.
  - Sign off competencies, not days employed.`,
    whyItMatters: 'Training gets faster when standards are visible and measurable.',
    tags: ['progressive', 'assistant onboarding', 'turnover', 'training'],
    roles: [
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-022',
    category: 'Build a Stronger Team',
    coach: 'Team Systems Coach Naomi',
    scenarioTitle: 'Hygienist Lateness Coaching Without Losing Trust',
    situation: 'You asked how direct to be with a strong hygienist who is repeatedly late. The answer is direct on the behavior and respectful about the person.',
    teamInput: 'She has arrived 5-8 minutes late 6 times in 3 weeks. First patients start late, but patient reviews mention her positively. The office manager is worried about damaging morale.',
    outputPreview: `Coaching script:
- Start with facts:
  - Over the last three weeks, your first patient started late six times because you were not ready by 7:45.
- Connect impact:
  - That puts the front desk in apology mode and compresses your clinical time.
- Ask:
  - What is getting in the way of being ready by 7:45?
- Set expectation:
  - Starting tomorrow, I need you ready for huddle by 7:45 each clinical day.
- What to do next:
  - Document the conversation.
  - Offer support if there is a schedule barrier.
  - Review punctuality next Friday.`,
    whyItMatters: 'Strong culture is kind enough to be clear and clear enough to be fair.',
    tags: ['decision', 'coaching script', 'hygiene team', 'accountability'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-023',
    category: 'Build a Stronger Team',
    coach: 'Team Systems Coach Naomi',
    scenarioTitle: 'What Am I Missing When Huddles Do Not Change Behavior?',
    situation: 'You said the huddle happens every day, but the same problems keep repeating. That usually means the meeting has information but no ownership.',
    teamInput: 'Recurring issues include open hygiene, unscheduled treatment, lab cases not checked, and claims missing attachments. The huddle lasts 15 minutes but ends without assigned owners.',
    outputPreview: `Diagnostic read:
- What is missing: owner, due time, and end-of-day review.
- New huddle board:
  | Item | Owner | Due | Status |
  | Open hygiene 2 PM | Front desk | 10 AM | pending |
  | Lab case check | Assistant | 8:30 AM | pending |
  | $4,200 unscheduled case | TC | noon | pending |
- Rule:
  - No item enters the huddle without one owner.
- What to do next:
  - Use the board tomorrow.
  - Review completion before close.
  - Remove topics that do not require action.`,
    whyItMatters: 'Meetings improve the practice only when they convert concern into assigned work.',
    tags: ['diagnostic', 'huddle', 'accountability', 'team systems'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-024',
    category: 'Build a Stronger Team',
    coach: 'HR Coach Simone',
    scenarioTitle: 'Should We Hire Another Front Desk Person or Clarify Roles?',
    situation: 'The team feels overwhelmed, but based on workflow notes, the front desk may have an ownership problem before it has a headcount problem.',
    teamInput: 'Two front desk employees overlap from 9 AM to 3 PM. Calls are missed during checkout, checkout backs up after hygiene, and both employees assume the other person is watching texts.',
    outputPreview: `Decision:
- Clarify roles for 30 days before hiring.
- Role split:
  - Role A owns live patients: checkout, collections, next visit.
  - Role B owns phones, texts, voicemails, and online requests.
- Escalation rule:
  - Patient at desk outranks ringing phone.
  - Role B catches the phone and logs callback if needed.
- What to do next:
  - Assign roles by shift tomorrow.
  - Measure missed calls, checkout time, and patient wait time.
  - Revisit hiring only after role data is clean.`,
    whyItMatters: 'Hiring into unclear work often makes the confusion more expensive.',
    tags: ['decision', 'front desk', 'role clarity', 'staffing'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-025',
    category: 'Build a Stronger Team',
    coach: 'Team Systems Coach Naomi',
    scenarioTitle: 'Owner-Level Team Capacity Review Before Growth Push',
    situation: 'The owner wants 20 more new patients per month, but based on team capacity, the practice may not be ready to absorb growth without service quality slipping.',
    teamInput: 'Current call answer rate is 78%, hygiene is booked out 8 weeks, assistants are training, and checkout collections are inconsistent. Marketing wants to increase spend next month.',
    outputPreview: `Owner-level capacity read:
- Growth constraint is not demand yet. It is throughput.
- Risks if ads increase now:
  - More missed calls
  - Longer hygiene delays
  - More rushed handoffs
  - Lower collections at checkout
- Readiness checklist:
  - Call answer rate above 90%
  - Hygiene openings protected for new patients
  - Assistant onboarding complete
  - Financial policy consistently used
- What to do next:
  - Hold marketing spend steady for 30 days.
  - Fix call answer and checkout flow first.
  - Add demand after operations can catch it.`,
    whyItMatters: 'Growth is healthier when the team can deliver the experience being marketed.',
    tags: ['owner-level', 'team capacity', 'growth readiness', 'operations'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-026',
    category: 'Improve Profitability',
    coach: 'Profitability Coach Ryan',
    scenarioTitle: 'What Am I Missing in Overhead Creep?',
    situation: 'You said overhead rose from 61% to 67% and there is no obvious culprit. That is exactly when we stop looking for one big leak and start looking for several habits compounding.',
    teamInput: 'Supply spend rose from 6.2% to 8.8%, lab from 8.1% to 10.4%, and overtime is up $2,300 per month. Collections are flat, not falling.',
    outputPreview: `Diagnostic read:
- What you are missing: the overhead increase is three leaks, not one.
- First 30 days:
  | Leak | Evidence | Fix |
  | Supplies | rush shipping weekly | one order day + par levels |
  | Lab | premium vendor drift | case selection guide |
  | Overtime | front desk overlap | shift redesign |
- Do not cut quality blindly.
- What to do next:
  - Assign one owner per leak.
  - Review weekly dollars, not just percentages.
  - Expect improvement in 45-60 days, not instantly.`,
    whyItMatters: 'Profitability work improves when the owner sees operational causes behind financial ratios.',
    tags: ['diagnostic', 'overhead', 'profitability', 'owner-level'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-027',
    category: 'Improve Profitability',
    coach: 'Profitability Coach Ryan',
    scenarioTitle: 'Production Is Up, Collections Are Flat',
    situation: 'Based on your dashboard, production is not the number to celebrate yet. Gross production rose 9%, but collections stayed flat and adjustments rose faster than visits.',
    teamInput: 'Quarterly gross production is $842,000, collections are $701,000, write-offs are $112,000, and insurance A/R over 60 rose to $96,000.',
    outputPreview: `Progressive analysis:
- Step 1: Separate gross production from net production.
- Step 2: Identify adjustment categories:
  - PPO contractual
  - courtesy discounts
  - write-offs
  - refunds
- Step 3: Tie unpaid production to A/R buckets.
- Owner question:
  - Are we producing more profitable work or just more discounted work?
- What to do next:
  - Pull top 10 CDT write-offs by payer.
  - Review claims over 60 by payer.
  - Do not increase provider days until collection gap is explained.`,
    whyItMatters: 'Production growth that does not convert to cash can hide payer drag, billing delay, or discount leakage.',
    tags: ['progressive', 'production vs collections', 'profitability', 'cash flow'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-028',
    category: 'Improve Profitability',
    coach: 'Profitability Coach Ryan',
    scenarioTitle: 'Should We Buy the Scanner Now or Wait?',
    situation: 'The doctor wants the $92,000 scanner before year-end. The tension is real: it may reduce remakes and help case presentation, but it also competes with a hygiene room refresh.',
    teamInput: 'Vendor offers $1,980 per month financing. Lab remakes cost about $3,400 per month. Cash reserve would fall from $185,000 to $118,000 with the down payment and training package.',
    outputPreview: `Decision framework:
- Buy now only if three tests pass:
  1. Cash reserve remains above the owner-approved floor.
  2. Scanner has a named clinical owner.
  3. Expected savings or added acceptance exceeds monthly payment within 6 months.
- Current read:
  - Cash: probably acceptable.
  - Implementation ownership: unclear.
  - ROI: promising but unproven.
- Recommendation:
  - Negotiate a 60-day implementation plan before signing.
- What to do next:
  - Ask vendor for training schedule and cancellation terms.
  - Have CPA review timing.
  - Decide after implementation owner is confirmed.`,
    whyItMatters: 'Equipment should be bought for predictable operating return, not just tax timing or excitement.',
    tags: ['decision', 'equipment purchase', 'cash flow', 'owner-level'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-029',
    category: 'Improve Profitability',
    coach: 'Profitability Coach Ryan',
    scenarioTitle: 'Top CDT Write-Offs Reveal the Real Profit Drag',
    situation: 'Based on the payer report, your low-margin problem is concentrated. The top five CDT codes account for 61% of write-off dollars.',
    teamInput: 'D2740, D2950, D4910, D4341, and D2392 show the largest total write-offs. The owner was planning a general fee increase but has not reviewed payer-specific allowed amounts.',
    outputPreview: `Action plan:
- Do not start with a general fee increase.
- Start with code-by-payer drag:
  | CDT | Issue | Action |
  | D2740 | high dollar write-off | payer negotiation |
  | D4910 | below hygiene cost | plan review |
  | D2950 | underpaid adjunct | estimate language |
- Decision point:
  - Renegotiate, limit new patients, or prepare exit for worst plans.
- What to do next:
  - Pull 12-month volume by payer.
  - Compare allowed fee to break-even.
  - Build renegotiation packet for the top 2 plans.`,
    whyItMatters: 'Profit improves faster when fee strategy follows the codes causing the largest actual dollar loss.',
    tags: ['diagnostic', 'CDT analysis', 'write-offs', 'profitability'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-030',
    category: 'Improve Profitability',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'Owner Distribution Guardrails During Cash Swings',
    situation: 'The owner wants larger monthly distributions, but based on the last two quarters, the practice is using bank balance as a decision tool instead of a cash forecast.',
    teamInput: 'The practice has two payrolls monthly, $38,000 average lab bill, quarterly tax estimates, and insurance A/R over 60 at $96,000. Owner currently draws variable amounts based on month-end cash.',
    outputPreview: `Owner-level recommendation:
- Create a distribution floor and ceiling.
- Minimum reserve:
  - one payroll cycle
  - one month lab average
  - rent and debt service
  - tax reserve
- Distribution rule:
  - Base draw monthly.
  - Bonus draw only when cash exceeds reserve after known obligations.
- What to do next:
  - Set the reserve number with CPA.
  - Review monthly on the 10th, not at emotional month-end.
  - Tie bonus distributions to collected cash, not gross production.`,
    whyItMatters: 'Owner pay becomes calmer when it is governed by cash rules instead of hope and timing luck.',
    tags: ['owner-level', 'distributions', 'cash reserve', 'profitability'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-031',
    category: 'Reduce PPO Drag',
    coach: 'PPO Strategy Coach Nina',
    scenarioTitle: 'Should We Drop the Low-Paying PPO or Renegotiate First?',
    situation: 'You asked whether to drop the plan immediately. Based on the numbers, it deserves pressure first, but not an open-ended negotiation that delays a decision forever.',
    teamInput: 'The plan is 18% of visits, 24% of doctor chair time, and only 11% of collections. D2740 reimburses $925 against a $1,650 office fee. Hygiene is booked out 9 weeks.',
    outputPreview: `Decision:
- Renegotiate with a 60-day deadline, then decide exit or restriction.
- Why not drop today:
  - Patient communication needs preparation.
  - Active treatment cases need protection.
- Why not wait forever:
  - Chair time is being consumed below target margin.
- What to do next:
  1. Build the top CDT write-off packet.
  2. Request updated fee schedule.
  3. Stop accepting new patients from this plan if fees do not improve by deadline.
  4. Prepare patient transition messaging now.`,
    whyItMatters: 'PPO strategy should be decisive without being reckless.',
    tags: ['decision', 'PPO', 'renegotiation', 'owner-level'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-032',
    category: 'Reduce PPO Drag',
    coach: 'PPO Strategy Coach Nina',
    scenarioTitle: 'What Am I Missing in Leased Network Write-Offs?',
    situation: 'The team keeps saying we are out-of-network, but the EOBs say otherwise. What you are missing is leased network pricing through an umbrella agreement.',
    teamInput: 'Unexpected contractual adjustments total $18,600 over 90 days. EOBs reference a network name the office manager does not recognize. Credentialing files are incomplete.',
    outputPreview: `Diagnostic plan:
- Pull every EOB with unexpected adjustment.
- Record:
  - payer name
  - network name
  - TPA or umbrella network
  - allowed amount
  - contract source listed on EOB
- Payer call question:
  - Which network contract priced this claim, and how is our provider attached to it?
- What to do next:
  - Build a leased-network map by Friday.
  - Request fee schedules for each hidden network.
  - Decide whether removal is allowed by contract.`,
    whyItMatters: 'You cannot manage PPO drag if you cannot identify who is pricing the claim.',
    tags: ['diagnostic', 'leased network', 'PPO', 'EOB audit'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-033',
    category: 'Reduce PPO Drag',
    coach: 'PPO Strategy Coach Nina',
    scenarioTitle: 'PPO Exit Messaging for Long-Term Families',
    situation: 'Based on your patient list, the exit risk is not volume. It is trust. Long-term families need to hear continuity before they hear insurance change.',
    teamInput: 'The plan has 740 active patients, including 128 families with 5+ years in the practice. The plan underpays crown and perio codes, but many patients may still have out-of-network benefits.',
    outputPreview: `Progressive exit plan:
- Internal message:
  - We are changing our relationship with the plan, not ending care for patients.
- Patient letter:
  1. What is changing
  2. What stays the same
  3. How out-of-network benefits may still help
  4. Who to call for a personal estimate
- Priority calls:
  - active treatment
  - families scheduled in next 60 days
  - patients with perio maintenance
- What to do next:
  - Draft letter this week.
  - Train phones before mailing.
  - Prepare estimate examples for top procedures.`,
    whyItMatters: 'A PPO exit can improve margin only if the practice preserves patient confidence during the transition.',
    tags: ['progressive', 'PPO exit', 'patient retention', 'communication'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-034',
    category: 'Reduce PPO Drag',
    coach: 'PPO Strategy Coach Nina',
    scenarioTitle: 'New Patient Growth Is Making PPO Drag Worse',
    situation: 'The owner is happy new patients are up, but based on payer mix, the growth is pulling the practice toward lower-margin work.',
    teamInput: 'New patient volume rose 22%, but 68% of new patients are from the two lowest reimbursing PPOs. Net collections per new patient fell from $486 to $372.',
    outputPreview: `Owner-level read:
- This is not clean growth. It is volume with margin dilution.
- Decision point:
  - Keep scaling ads if payer mix improves.
  - Pause or retarget if low-margin PPO mix stays above 60%.
- Dashboard:
  - source
  - plan
  - kept visit
  - diagnosed treatment
  - 90-day collections
- What to do next:
  - Retarget campaigns toward higher-value services and geography.
  - Train phone team to capture plan before promising participation.
  - Review payer mix every 2 weeks.`,
    whyItMatters: 'Growth strategy has to measure profitability, not just patient count.',
    tags: ['owner-level', 'new patient mix', 'PPO drag', 'marketing ROI'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-035',
    category: 'Reduce PPO Drag',
    coach: 'PPO Strategy Coach Nina',
    scenarioTitle: 'Minimum Fee Threshold for Hygiene Codes',
    situation: 'Based on your hygiene profitability review, several plans reimburse D4910 below the cost of delivering the appointment once wages and room time are included.',
    teamInput: 'Average hygiene wage with taxes is $58 per hour. D4910 visits are 60 minutes. Two plans reimburse below $85, and perio maintenance demand is high.',
    outputPreview: `Decision framework:
- Calculate minimum acceptable fee:
  - hygienist cost
  - room overhead
  - supplies
  - admin time
  - target contribution margin
- If allowed fee is below minimum:
  - renegotiate
  - limit new patients from that plan
  - evaluate out-of-network path
- What to do next:
  - Set a minimum D4910 threshold this week.
  - Compare all PPO hygiene fees to threshold.
  - Bring the bottom two plans to the owner meeting.`,
    whyItMatters: 'A full hygiene schedule can still lose strategic value if plans underpay the maintenance model.',
    tags: ['decision', 'PPO hygiene', 'minimum fee', 'D4910'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-036',
    category: 'Avoid Compliance Mistakes',
    coach: 'Compliance Coach Avery',
    scenarioTitle: 'Wrong-Recipient Email: What To Do in the Next Hour',
    situation: 'Based on what you described, this is not a moment for panic or deletion. It is a containment and documentation moment.',
    teamInput: 'A treatment estimate with patient name, tooth numbers, and fees was emailed to the wrong patient. Recipient replied 18 minutes later. Office manager has not called either patient yet.',
    outputPreview: `Immediate response:
- Stop the thread. Do not forward or delete the sent message.
- Ask the unintended recipient to delete it and confirm deletion.
- Identify exactly what was disclosed.
- Notify privacy lead.
- Start risk assessment notes:
  - date/time
  - recipient
  - information disclosed
  - mitigation steps
  - patient notification decision
- What to do next:
  - Complete internal documentation today.
  - Review autocomplete and attachment workflow.
  - Train team on double-check rule before sending estimates.`,
    whyItMatters: 'Compliance response is strongest when the practice contains, documents, and improves the process quickly.',
    tags: ['progressive', 'HIPAA', 'wrong recipient', 'incident response'],
    roles: [
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-037',
    category: 'Avoid Compliance Mistakes',
    coach: 'Compliance Coach Avery',
    scenarioTitle: 'Does This Vendor Need a BAA?',
    situation: 'The vendor says a BAA is not necessary because they only send reminders. Based on the data fields involved, that answer is not enough.',
    teamInput: 'The platform will receive patient names, phone numbers, appointment dates, message history, and review requests. It may also sync appointment status from the practice software.',
    outputPreview: `Decision tree:
- Will the vendor receive patient identifiers? Yes.
- Are those identifiers tied to care, appointments, or billing? Yes.
- Is the vendor performing a service for the practice? Yes.
- Decision:
  - Treat as business associate review until proven otherwise.
- Vendor questions:
  - Will you sign a BAA?
  - Where is data stored?
  - Who can access messages?
  - How are deletions handled?
- What to do next:
  - Do not sync patient data until BAA and safeguards are reviewed.`,
    whyItMatters: 'Reminder tools can still handle PHI when they touch identifiable appointment data.',
    tags: ['decision', 'BAA', 'vendor review', 'HIPAA'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-038',
    category: 'Avoid Compliance Mistakes',
    coach: 'Compliance Coach Avery',
    scenarioTitle: 'What Are We Missing in Extraction Consent Notes?',
    situation: 'The doctors say consent is discussed verbally, but the audit shows missing documentation. What is missing is not conversation; it is proof of the conversation.',
    teamInput: 'Thirty percent of sampled extraction charts lack risks, alternatives, or post-op instructions. Most misses happen on same-day emergency extractions.',
    outputPreview: `Diagnostic read:
- Missing note elements:
  - diagnosis and tooth number
  - risks discussed
  - alternatives, including no treatment
  - post-op instructions
  - patient questions answered
- Template fix:
  - Make consent fields required for extraction procedure notes.
- Same-day emergency rule:
  - Speed does not remove documentation requirements.
- What to do next:
  - Audit 10 extraction notes per provider next month.
  - Review misses privately with each provider.
  - Add template prompts by Friday.`,
    whyItMatters: 'Consent quality matters most when treatment is urgent and memory later gets fuzzy.',
    tags: ['diagnostic', 'informed consent', 'extractions', 'documentation'],
    roles: [
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-039',
    category: 'Avoid Compliance Mistakes',
    coach: 'Compliance Coach Avery',
    scenarioTitle: 'Should We Text Balances and Treatment Details?',
    situation: 'The team wants texting to be convenient, but based on the examples you showed, convenience is drifting into sensitive detail without a clear policy.',
    teamInput: 'Texts include balances, procedure names, and prescription updates. Some patients consented to texting generally, but the office has no distinction between reminders and sensitive content.',
    outputPreview: `Decision:
- Keep reminders in text.
- Move sensitive details to phone, portal, or secure messaging.
- Safe text examples:
  - Please call us about your account.
  - Your appointment is tomorrow at 2 PM.
- Avoid standard text for:
  - diagnosis
  - procedure details
  - detailed balances tied to treatment
  - clinical photos
- What to do next:
  - Write a texting policy.
  - Train front desk on privacy phrase: For privacy, I do not want to put those details in a text. Can I call you?`,
    whyItMatters: 'A simple texting boundary protects privacy without making the team afraid to communicate.',
    tags: ['decision', 'texting', 'PHI', 'patient communication'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-040',
    category: 'Avoid Compliance Mistakes',
    coach: 'Compliance Coach Avery',
    scenarioTitle: 'Owner-Level Compliance Risk Map Before Adding Software',
    situation: 'The owner wants three new tools this quarter: texting, online forms, and payment links. Based on the current process, adding tools before governance will multiply privacy and access risk.',
    teamInput: 'Passwords are shared for two systems, BAAs are stored inconsistently, and no one owns quarterly user access review. The owner wants speed but not avoidable risk.',
    outputPreview: `Owner-level risk map:
- Highest risks:
  1. Shared logins
  2. Missing BAA inventory
  3. No user access review
  4. Unclear texting boundaries
- Decision:
  - Approve software rollout only after basic controls are assigned.
- 30-day governance plan:
  - Name compliance owner.
  - Build BAA tracker.
  - Remove shared logins.
  - Review active users in each platform.
- What to do next:
  - Delay new tool sync until access and BAA list are clean.`,
    whyItMatters: 'Technology creates leverage, but unmanaged access creates preventable compliance exposure.',
    tags: ['owner-level', 'compliance strategy', 'software', 'BAA'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-041',
    category: 'Make Smarter Money Decisions',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'CE Trip Documentation Before the Expense Happens',
    situation: 'Based on your travel plan, the CE trip has a clean business purpose, but the spouse travel and extra personal day need separation before receipts get messy.',
    teamInput: 'Course tuition is $2,400, airfare is $620, hotel is 4 nights at $310, spouse is traveling separately, and the owner added one personal day after the course.',
    outputPreview: `Documentation plan:
- Keep:
  - CE agenda
  - registration receipt
  - certificate
  - airfare receipt
  - hotel folio split by dates
  - meal receipts with business purpose
- Separate:
  - spouse costs
  - personal extra day
  - non-course entertainment
- What to do next:
  - Create one trip folder before leaving.
  - Ask CPA how to treat mixed-purpose travel.
  - Write one note after the course summarizing business takeaways for the practice.`,
    whyItMatters: 'Owner expenses are easier to defend and classify when documentation is built before year-end cleanup.',
    tags: ['progressive', 'CE travel', 'tax documentation', 'owner-level'],
    roles: [
      "owner",
      "manager"
    ]
  },
  {
    id: 'scn-042',
    category: 'Make Smarter Money Decisions',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'Should We Expand Hygiene or Extend Hours First?',
    situation: 'The owner wants another hygiene room, but based on capacity data, the decision should compare build-out risk against a smaller operating test.',
    teamInput: 'Recall is booked out 10 weeks. Build-out would cost $78,000. A part-time hygienist is available two days per week. Doctor exams already interrupt operative flow.',
    outputPreview: `Decision:
- Extend hygiene hours first for 60 days before building out.
- Why:
  - Demand appears real, but staffing and doctor exam flow are not proven.
  - A smaller test protects cash.
- Test metrics:
  - hygiene production per hour
  - perio maintenance mix
  - doctor exam disruption
  - restorative diagnosis from hygiene
- What to do next:
  - Add two hygiene days per month.
  - Batch doctor exams.
  - Recalculate room ROI after 60 days.`,
    whyItMatters: 'Expansion decisions should prove demand and flow before committing construction dollars.',
    tags: ['decision', 'hygiene expansion', 'capacity planning', 'owner-level'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-043',
    category: 'Make Smarter Money Decisions',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'Associate Compensation Model That Does Not Reward Uncollected Production',
    situation: 'Based on your payer mix, paying only on gross or adjusted production could create friction if collections lag. The model needs to match how cash actually enters the practice.',
    teamInput: 'The associate will inherit a PPO-heavy schedule. Expected production is $72,000 per month, but net collections may lag 30-45 days. Owner wants recruiting stability without overpaying during ramp-up.',
    outputPreview: `Comp model recommendation:
- Use a short daily minimum during ramp-up with conversion to percentage of collections or clearly defined adjusted production.
- Define:
  - lab fee treatment
  - remake policy
  - write-off handling
  - timing of payment
- Decision point:
  - If schedule is immature, daily minimum with sunset date.
  - If collections are reliable, percentage model can work.
- What to do next:
  - Model 3 months of cash under both options.
  - Have attorney review final terms.
  - Put reporting cadence in writing.`,
    whyItMatters: 'Compensation design shapes behavior, trust, and cash flow from the first pay period.',
    tags: ['owner-level', 'associate compensation', 'cash flow', 'decision'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-044',
    category: 'Make Smarter Money Decisions',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'What Am I Missing in Fee Update Planning?',
    situation: 'You are thinking about a 6% fee increase across the board. What you may be missing is that the impact is not equal across codes, payers, and patient conversations.',
    teamInput: 'Fees have not changed in 18 months. Supplies, lab, and wages increased. Top procedures are D1110, D4910, D2740, D2950, and D2392. PPO allowed fees limit collections on many codes.',
    outputPreview: `Diagnostic read:
- Do not make this only a percentage exercise.
- Review:
  - top 30 procedure volume
  - office fee vs local benchmark
  - PPO allowed fee
  - patient out-of-pocket impact
  - membership plan pricing
- Decision point:
  - Raise UCR where appropriate.
  - Renegotiate or review PPO plans where allowed fees block impact.
- What to do next:
  - Build a top-code fee table.
  - Train team on explanation language.
  - Monitor acceptance and complaints for 60 days.`,
    whyItMatters: 'Fee strategy works best when it connects pricing, payer reality, and patient communication.',
    tags: ['diagnostic', 'fee update', 'UCR', 'owner-level'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  },
  {
    id: 'scn-045',
    category: 'Make Smarter Money Decisions',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'Owner-Level Choice: Pay Down Debt or Preserve Cash?',
    situation: 'The owner wants to use excess cash to pay down equipment debt, but based on seasonal A/R swings and upcoming tax payments, preserving liquidity may be the smarter short-term move.',
    teamInput: 'Current cash is $210,000. Minimum operating reserve target is $150,000. Equipment debt balance is $64,000 at 7.2%. Quarterly tax estimate of $38,000 is due in six weeks.',
    outputPreview: `Decision framework:
- Do not pay debt below the reserve floor.
- Sequence:
  1. Set aside tax estimate.
  2. Confirm payroll and lab reserve.
  3. Review A/R over 60.
  4. Apply only true excess cash to debt.
- Current recommendation:
  - Hold cash until tax payment clears.
  - Reassess partial principal payment afterward.
- What to do next:
  - Ask CPA to confirm tax reserve.
  - Schedule debt review after next collection cycle.
  - Avoid making the decision from today's bank balance alone.`,
    whyItMatters: 'The best financial decision is not always the one that reduces debt fastest; sometimes it is the one that protects operating control.',
    tags: ['owner-level', 'debt', 'cash reserve', 'decision'],
    roles: [
      "owner",
      "manager",
      "frontdesk"
    ]
  }
];
