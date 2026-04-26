const coachScenarios = [
  {
    id: 'scn-001',
    category: 'Get Paid Faster',
    coach: 'Revenue Cycle Coach Dana',
    scenarioTitle: 'Crown Denial Appeal Narrative with Missing Attachments',
    situation: 'A D2740 crown claim was denied for lack of medical necessity after the original submission only said fractured cusp and did not include the intraoral photo, existing restoration history, or bite sensitivity notes.',
    teamInput: 'Patient chart shows recurrent decay under an MOD composite, visible crack lines on tooth #19, pain on chewing, and an intraoral photo taken at prep. The payer denial asks for additional clinical support within 30 days.',
    outputPreview: `Appeal packet draft:
- Claim: D2740, tooth #19, date of service [insert DOS]
- Clinical basis: recurrent decay under failing MOD composite, cusp fracture risk, pain on chewing, and loss of structural integrity.
- Attachments checklist:
  - Pre-op PA or BW showing existing restoration and recurrent decay
  - Intraoral photo with tooth number labeled
  - Chart note documenting symptoms and failed restoration
  - Original EOB and denial reason
- Narrative:
  - Tooth #19 presented with recurrent decay beneath a failing MOD restoration and clinical symptoms of pain on chewing. Intraoral imaging documents compromised remaining tooth structure. A full coverage crown was necessary to restore function and prevent fracture progression.
- Follow-up call script:
  - I am calling to confirm receipt of the appeal packet for claim [number] and ask whether any additional documentation is needed before reconsideration.` ,
    whyItMatters: 'Appeals fail when teams respond with more words but not better evidence. A complete packet shortens the reimbursement cycle and reduces patient balance surprises.',
    tags: ['crown denial', 'appeal narrative', 'attachments', 'D2740', 'cash flow']
  },
  {
    id: 'scn-002',
    category: 'Get Paid Faster',
    coach: 'Revenue Cycle Coach Dana',
    scenarioTitle: 'Pre-Determination Narrative for Perio Grafting',
    situation: 'The periodontist recommended connective tissue grafting, but the payer often rejects graft pre-determinations unless recession measurements, sensitivity, and mucogingival defects are documented clearly.',
    teamInput: 'The hygienist recorded recession on #22 and #27, root sensitivity, minimal attached gingiva, and progression since last year. Photos exist but the treatment coordinator is unsure how to frame the pre-D.',
    outputPreview: `Pre-determination structure:
1. Diagnosis summary
   - Gingival recession on #22 and #27 with inadequate attached gingiva and documented sensitivity.
2. Progression evidence
   - Compare current recession readings to prior periodontal charting.
3. Medical necessity language
   - Procedure is intended to address progressive recession, sensitivity, and mucogingival instability, not cosmetic preference.
4. Attachment checklist
   - Current perio chart
   - Intraoral photos with recession visible
   - Provider diagnosis note
   - Treatment plan with tooth numbers and procedure codes
5. Team note
   - Avoid saying patient wants gumline improved. Use diagnosis-first language tied to function, stability, and symptoms.` ,
    whyItMatters: 'Pre-determinations are stronger when clinical risk and progression are organized before benefits are discussed.',
    tags: ['pre-determination', 'grafting', 'perio documentation', 'medical necessity']
  },
  {
    id: 'scn-003',
    category: 'Get Paid Faster',
    coach: 'Dr. Finance',
    scenarioTitle: 'A/R Over 90 Cleanup by Claim Type',
    situation: 'The practice has $212,000 in insurance A/R over 90 days, but the team works the aging report oldest-first without grouping claims by payer issue or fix type.',
    teamInput: 'The report shows COB errors, missing narratives, pending attachments, credentialing holds, and claims stuck in received status. The billing coordinator has four hours per week for cleanup.',
    outputPreview: `A/R cleanup sprint:
- Sort by fix type, not only by age.
- Week 1: COB and eligibility sequencing errors
- Week 2: missing attachment and narrative claims
- Week 3: payer received but not processed claims
- Week 4: credentialing or provider mismatch holds
Priority table:
| Bucket | Action | Owner | Deadline |
| COB errors | verify primary payer and resubmit | Billing | Friday |
| Missing docs | attach photo, PA, chart note | Clinical lead + Billing | Wednesday |
| Payer stalled | call with reference number | Billing | 48 hours |
Daily metric:
- Dollars corrected
- Claims resubmitted
- Claims paid
- Claims written off with reason` ,
    whyItMatters: 'A/R cleanup works faster when similar problems are batched, because the team can reuse payer scripts and documentation patterns.',
    tags: ['accounts receivable', 'aging claims', 'COB', 'billing workflow']
  },
  {
    id: 'scn-004',
    category: 'Get Paid Faster',
    coach: 'Patient Billing Coach Mia',
    scenarioTitle: 'EOB Explanation for a Confused Patient Balance',
    situation: 'A patient calls upset because insurance paid less than estimated on a posterior composite, leaving a larger balance than expected.',
    teamInput: 'The EOB shows a downgrade to amalgam allowance. The estimate form says insurance estimate only, but the patient says no one explained downgrades at checkout.',
    outputPreview: `Patient-facing explanation:
- Start with ownership:
  - I can see why this is frustrating. The estimate we gave did not make the downgrade possibility clear enough.
- Explain simply:
  - Your plan covered the filling, but it paid it at the lower silver-filling allowance even though the tooth-colored filling was completed.
- Next step:
  - We will review whether the claim should include any additional documentation. If an appeal is appropriate, we will submit it.
- Payment options:
  - We can split the remaining balance into [options] while the review is underway.
Internal fix:
- Add downgrade language to estimate review.
- Flag plans with frequent posterior composite downgrades.` ,
    whyItMatters: 'Clear EOB language protects trust and helps the front desk collect without sounding defensive or dismissive.',
    tags: ['EOB', 'patient billing', 'downgrade', 'collections script']
  },
  {
    id: 'scn-005',
    category: 'Get Paid Faster',
    coach: 'Revenue Cycle Coach Dana',
    scenarioTitle: 'Same-Day Collection Rate Recovery Plan',
    situation: 'Same-day patient collections fell to 68%, mostly because the team waits for insurance before collecting estimated co-pays on crown and SRP visits.',
    teamInput: 'The office has a written financial policy, but it is not consistently repeated at scheduling, treatment presentation, or checkout. Team members worry about sounding pushy.',
    outputPreview: `Point-of-service collection workflow:
- Before visit:
  - Confirm estimated patient portion and payment options.
- At presentation:
  - Your estimated portion today is $___ based on benefits available to us. If insurance processes differently, we adjust the account.
- At checkout:
  - How would you like to take care of the estimated portion today?
- Exception rules:
  - Doctor-approved hardship plan
  - Verified claim uncertainty over $___
  - Prior written payment arrangement
Tracking:
- Same-day collection percent
- Number of exceptions
- Exception reason by team member` ,
    whyItMatters: 'Collections improve when expectations are repeated calmly before the patient reaches checkout.',
    tags: ['same-day collections', 'financial policy', 'checkout', 'patient portion']
  },
  {
    id: 'scn-006',
    category: 'Get Paid Faster',
    coach: 'Insurance Systems Coach Priya',
    scenarioTitle: 'Benefit Verification Template for Missing Tooth Clause Risk',
    situation: 'Implant and bridge estimates are being disputed because the team verifies annual max and deductible but skips missing tooth clause and replacement frequency questions.',
    teamInput: 'Two patients received large unexpected balances in the last month. Verification notes vary by team member and do not show the payer representative name or call reference number.',
    outputPreview: `Verification template upgrade:
Required fields:
- Payer rep name and call reference
- Missing tooth clause: yes, no, unknown
- Replacement frequency and last paid date
- Waiting period status
- Alternate benefit language
- Implant, bridge, or partial exclusions
Patient estimate note:
- This estimate depends on plan rules that may include replacement frequency or missing tooth limitations. We verified the items above on [date], but final payment is determined when the claim processes.
Quality check:
- No major case estimate leaves the office without the limitation fields completed.` ,
    whyItMatters: 'Major restorative estimates need limitation-level verification, not only eligibility-level verification.',
    tags: ['benefit verification', 'missing tooth clause', 'major restorative', 'billing disputes']
  },
  {
    id: 'scn-007',
    category: 'Help Patients Say Yes',
    coach: 'Treatment Acceptance Coach Elena',
    scenarioTitle: 'SRP Documentation Review Before Presentation',
    situation: 'Hygienists diagnose SRP appropriately, but patients frequently decline because the handoff sounds like a more expensive cleaning instead of treatment for active disease.',
    teamInput: 'Charts include 5-6 mm pockets, bleeding, radiographic calculus, and bone loss. The financial coordinator often begins with insurance coverage before the hygienist explains disease activity.',
    outputPreview: `SRP readiness checklist:
- Clinical evidence present:
  - Full perio chart updated
  - Bleeding points documented
  - Radiographs reviewed
  - Diagnosis stated in plain language
- Handoff script:
  - Jeremy, today we found active gum infection in several areas. This is different from a routine cleaning because the bacteria are below the gumline and causing bleeding and pocketing.
- Financial coordinator bridge:
  - My job is to help you understand the investment and timing after the clinical need is clear.
- Avoid:
  - Your insurance covers two cleanings.
  - It is just a deep cleaning.` ,
    whyItMatters: 'Patients accept treatment more often when the diagnosis is clear before cost and benefits enter the conversation.',
    tags: ['SRP', 'case acceptance', 'hygiene diagnosis', 'handoff']
  },
  {
    id: 'scn-008',
    category: 'Help Patients Say Yes',
    coach: 'Treatment Acceptance Coach Elena',
    scenarioTitle: 'Large Case Sequencing for a Patient Worried About Travel',
    situation: 'A patient verbally accepted a full-mouth restorative plan but has not scheduled because they travel for work and fear being stuck mid-treatment.',
    teamInput: 'The case is $18,400 with phased crowns, build-ups, and bite stabilization. The patient asked about doing just the painful quadrant first.',
    outputPreview: `Case sequencing response:
- Acknowledge:
  - We can absolutely plan this around your travel. The goal is to avoid leaving you in an unstable middle stage.
- Phase plan:
  1. Urgent quadrant stabilization
  2. Bite records and provisional timing
  3. Remaining restorative visits grouped by travel windows
  4. Final seat and adjustment buffer
- Scheduling guardrails:
  - Do not start phase 2 unless phase 3 appointments are reserved.
  - Hold one short adjustment visit after each major phase.
- Financing cue:
  - We can align payments to phases rather than asking you to decide everything at once.` ,
    whyItMatters: 'Large cases often stall because the patient needs a life-compatible sequence, not more persuasion.',
    tags: ['large case', 'sequencing', 'travel', 'financing', 'case acceptance']
  },
  {
    id: 'scn-009',
    category: 'Help Patients Say Yes',
    coach: 'Patient Communication Coach Tia',
    scenarioTitle: 'EOB and Treatment Value Conversation for Crown Upgrade',
    situation: 'A patient compares the crown fee to the insurance allowance and asks why they should proceed if the plan pays so little.',
    teamInput: 'The doctor diagnosed a cracked tooth with an existing large restoration. The patient is financially cautious and has delayed treatment twice.',
    outputPreview: `Chairside value script:
- Clinical anchor:
  - The reason we are recommending the crown is that the tooth is structurally weakened. The insurance allowance does not measure crack risk.
- Insurance frame:
  - Your plan helps with part of the cost, but it does not decide what treatment protects the tooth best.
- Choice language:
  - You have options. The risk of waiting is that a repairable crack can become a root canal, fracture, or extraction.
- Close:
  - Would it help if we reserved the appointment and then reviewed payment choices before you leave today?` ,
    whyItMatters: 'Patients need a respectful distinction between insurance contribution and clinical need.',
    tags: ['crown acceptance', 'insurance objection', 'patient script', 'cracked tooth']
  },
  {
    id: 'scn-010',
    category: 'Help Patients Say Yes',
    coach: 'Financing Coach Alex',
    scenarioTitle: 'Normalize Financing Before the Patient Says No',
    situation: 'Cases between $1,500 and $4,000 are deferred even though financing is available because the team only mentions it after a patient says they cannot afford treatment.',
    teamInput: 'The treatment coordinator worries that offering financing too early sounds like pressure. The practice has three payment pathways but no standard language.',
    outputPreview: `Financial presentation flow:
- Present all pathways as normal:
  - Many patients choose one of three options: payment in full, split payment by appointment, or monthly financing.
- Ask preference, not affordability:
  - Which of those feels easiest for you to review first?
- Avoid rescue language:
  - Do not say if you cannot afford it, we have financing.
- Follow-up text:
  - I attached the monthly estimate we discussed and held the appointment time until tomorrow at 2 PM so you can review it.` ,
    whyItMatters: 'Financing works better when it is framed as a normal planning tool rather than a last resort.',
    tags: ['financing', 'payment options', 'case acceptance', 'treatment coordinator']
  },
  {
    id: 'scn-011',
    category: 'Help Patients Say Yes',
    coach: 'Hygiene Growth Coach Laura',
    scenarioTitle: 'Periodontal Maintenance Frequency Objection',
    situation: 'Long-term patients resist moving from six-month prophy visits to three- or four-month periodontal maintenance after SRP.',
    teamInput: 'The hygienist sees recurring inflammation but softens the recommendation because patients say insurance only covers two cleanings per year.',
    outputPreview: `Conversation guide:
- Diagnosis reminder:
  - After gum therapy, your mouth needs a different maintenance schedule than someone without periodontal disease.
- Insurance clarification:
  - Insurance benefits are helpful, but they are not always designed around your specific disease risk.
- Visual support:
  - Show pocket chart changes and bleeding areas.
- Close:
  - My recommendation is every 3 months for the next year. We will re-measure and adjust if your gums stay stable.
Team note:
- Do not call perio maintenance a cleaning in the close.` ,
    whyItMatters: 'Hygiene recommendations lose authority when the team uses benefit language instead of disease language.',
    tags: ['perio maintenance', 'hygiene communication', 'insurance objection', 'retention']
  },
  {
    id: 'scn-012',
    category: 'Help Patients Say Yes',
    coach: 'Treatment Acceptance Coach Elena',
    scenarioTitle: 'Unscheduled Treatment Follow-Up Call After Consult',
    situation: 'Patients often leave with treatment plans but no scheduled appointment because the team says call us when ready instead of setting a clear follow-up path.',
    teamInput: 'The unscheduled treatment report includes 46 patients over $1,000 diagnosed in the last 60 days. Notes contain clinical recommendations but inconsistent objection tracking.',
    outputPreview: `Follow-up call structure:
- Opening:
  - I am calling because Dr. Lee recommended treatment for [condition], and we wanted to help you decide the next best step.
- Confirm obstacle:
  - Was the biggest question timing, cost, insurance, or something about the procedure itself?
- Response log:
  - Timing: offer two appointment windows
  - Cost: review payment pathways
  - Fear: schedule doctor phone call or consult note review
  - Insurance: explain estimate and limitations
- Close:
  - The next opening that matches your plan is [date]. Would you like me to reserve that?` ,
    whyItMatters: 'Unscheduled treatment needs a managed pipeline, not a passive report.',
    tags: ['unscheduled treatment', 'follow-up call', 'case acceptance', 'pipeline']
  },
  {
    id: 'scn-013',
    category: 'Fix the Schedule',
    coach: 'Scheduling Coach Ben',
    scenarioTitle: 'Schedule Hole Recovery for Tomorrow Morning',
    situation: 'A two-hour crown appointment canceled for tomorrow at 9 AM, leaving prime doctor time open with less than 24 hours to recover it.',
    teamInput: 'The ASAP list is outdated, hygiene has three patients with diagnosed restorative needs, and the front desk is unsure who to call first.',
    outputPreview: `Recovery order:
1. Same-provider diagnosed treatment already accepted
2. Hygiene patients with diagnosed restorative and flexible schedules
3. Emergency patients likely to convert to definitive care
4. Recall patients only if production options are exhausted
Call script:
- We had a doctor appointment open tomorrow at 9 AM, and Dr. Patel had recommended taking care of tooth #__. If that time helps you, I can reserve it now.
Tracking:
- Time opened
- Calls made
- Appointment filled by category
- Production recovered` ,
    whyItMatters: 'Prime schedule recovery should prioritize diagnosed production, not the first person who answers.',
    tags: ['schedule hole', 'cancellation recovery', 'production', 'ASAP list']
  },
  {
    id: 'scn-014',
    category: 'Fix the Schedule',
    coach: 'Scheduling Coach Ben',
    scenarioTitle: 'Morning Huddle Plan for Same-Day Production',
    situation: 'Morning huddles happen daily, but the team mostly reviews who is coming in instead of identifying treatment opportunities and schedule risks.',
    teamInput: 'Today has two hygiene exams, one open 90-minute block, one patient with an unpaid balance, and a crown seat that may need a build-up discussion.',
    outputPreview: `10-minute huddle agenda:
- Yesterday:
  - Production, collections, and one missed opportunity
- Today schedule risks:
  - Open block: owner and fill plan
  - Late patient risk: confirmation status
  - Financial concern: who will discuss before treatment
- Opportunity scan:
  - Hygiene patients due for FMX, perio chart, unscheduled restorative
  - Doctor patients with same-day adjunctive needs
- Assignments:
  - Fill open block: Sam by 10 AM
  - Financial conversation: Mia before seating
  - Hygiene handoff: Laura with intraoral photo ready` ,
    whyItMatters: 'A useful huddle assigns owners to risks and opportunities before the day starts moving.',
    tags: ['morning huddle', 'same-day production', 'team accountability', 'schedule management']
  },
  {
    id: 'scn-015',
    category: 'Fix the Schedule',
    coach: 'Operations Coach Maya',
    scenarioTitle: 'Doctor Column Interrupted by Hygiene Exams',
    situation: 'The doctor is pulled from operative every 20 minutes for hygiene exams, causing restorative appointments to run late and assistants to feel rushed.',
    teamInput: 'The hygiene schedule is full, but exams are not batched. Assistants report that room turnover suffers after each interruption.',
    outputPreview: `Exam flow correction:
- Map current interruption times for 3 days.
- Create exam windows:
  - Morning: 10:10-10:30
  - Midday: 12:10-12:25
  - Afternoon: 2:40-3:00
- Hygiene prep checklist:
  - X-rays ready
  - Periodontal findings summarized
  - Patient concern stated in one sentence
- Doctor rule:
  - No exam interruption during anesthesia, prep finish, or final cement unless urgent.` ,
    whyItMatters: 'Exam batching protects clinical flow while still giving hygiene patients timely doctor attention.',
    tags: ['hygiene exams', 'doctor flow', 'schedule template', 'clinical efficiency']
  },
  {
    id: 'scn-016',
    category: 'Fix the Schedule',
    coach: 'Scheduling Coach Ben',
    scenarioTitle: 'Emergency Block Triage Rules',
    situation: 'Same-day emergencies are inserted wherever there is space, often displacing planned restorative treatment and creating late days.',
    teamInput: 'The front desk does not have a consistent triage script. Some emergencies are true pain cases, while others are chipped veneers, loose crowns, or second opinions.',
    outputPreview: `Emergency scheduling rules:
- Protected blocks:
  - 10:30 AM limited exam block
  - 2:30 PM limited exam block
- Triage questions:
  - Are you in pain now?
  - Is there swelling, fever, or trauma?
  - Can you chew on that side?
  - Is this a broken temporary, loose crown, or new patient concern?
- Booking decision:
  - Swelling/trauma: same-day urgent
  - Broken restoration without pain: emergency block
  - Cosmetic chip: next appropriate restorative consult
- Conversion note:
  - Every emergency visit ends with next-step scheduling.` ,
    whyItMatters: 'Emergency access matters, but unstructured emergency flow can damage the rest of the day.',
    tags: ['emergency scheduling', 'triage', 'doctor time', 'schedule control']
  },
  {
    id: 'scn-017',
    category: 'Fix the Schedule',
    coach: 'Hygiene Growth Coach Laura',
    scenarioTitle: 'Hygiene No-Show Risk Scoring',
    situation: 'Monday hygiene no-shows are twice the practice average, especially for patients who confirmed by text but did not respond to the final reminder.',
    teamInput: 'The practice has reminder software but no escalation rules. The standby list is not segmented by preferred days or family members.',
    outputPreview: `No-show prevention protocol:
- Risk flags:
  - Prior no-show in 12 months
  - No response to two-way confirmation
  - Monday or first appointment of day
  - Outstanding balance over $150
- Escalation:
  - 72 hours: text
  - 48 hours: call high-risk patients
  - 24 hours: release unconfirmed high-risk slots to standby list after policy warning
- Standby list fields:
  - Preferred day/time
  - Family grouping
  - Treatment or recall need
  - Last contacted date` ,
    whyItMatters: 'No-show prevention needs escalation rules, not just more reminders.',
    tags: ['no-shows', 'hygiene schedule', 'confirmation', 'standby list']
  },
  {
    id: 'scn-018',
    category: 'Fix the Schedule',
    coach: 'Scheduling Coach Ben',
    scenarioTitle: 'Doctor Production Block Redesign',
    situation: 'The doctor performs many small procedures each day but production per hour is below target because high-value procedures are scattered between low-value visits.',
    teamInput: 'The schedule has no production targets by block. Limited exams, crown preps, fillings, and consults are mixed without attention to setup time.',
    outputPreview: `Block template proposal:
| Block | Purpose | Target |
| Morning A | crown, bridge, implant restorative | $3,500+ |
| Morning B | operative cluster | $1,800+ |
| Early afternoon | consults and limited exams | conversion focus |
| Late afternoon | seats, adjustments, short restorative | controlled close |
Rules:
- Do not split crown prep blocks with hygiene checks.
- Cluster similar setup procedures.
- Hold one emergency slot outside prime prep time.
- Review production-per-hour weekly, not only daily total.` ,
    whyItMatters: 'A busy schedule can still underperform when procedure mix and timing are not intentional.',
    tags: ['block scheduling', 'production per hour', 'procedure mix', 'doctor productivity']
  },
  {
    id: 'scn-019',
    category: 'Grow New Patients',
    coach: 'Growth Coach Riley',
    scenarioTitle: 'New Patient Call Conversion Audit',
    situation: 'Marketing is generating calls, but only 52% of new patient calls become scheduled appointments.',
    teamInput: 'Call recordings show the team answers insurance questions first, asks for member ID too early, and rarely offers two appointment choices.',
    outputPreview: `Call audit scorecard:
- Greeting included name and practice: yes/no
- Caller concern identified before insurance: yes/no
- Appointment invitation made within 90 seconds: yes/no
- Two time options offered: yes/no
- Insurance handled as support, not barrier: yes/no
Recommended script:
- We can help with that. Let me first find a time for the doctor to evaluate the area, then I can collect your insurance details so we are prepared.
Weekly KPI:
- Calls answered
- Calls scheduled
- Calls lost by reason
- Average speed to appointment offer` ,
    whyItMatters: 'Marketing ROI depends on converting real phone demand into kept appointments.',
    tags: ['new patient calls', 'conversion', 'front desk', 'marketing ROI']
  },
  {
    id: 'scn-020',
    category: 'Grow New Patients',
    coach: 'Growth Coach Riley',
    scenarioTitle: 'Google Review Recovery After Fee Complaint',
    situation: 'A long-term patient left a negative review after a fee increase, and the team wants to respond without discussing private treatment details.',
    teamInput: 'The patient mentioned price gouging and said nobody explained the change. The practice recently updated fees due to lab and supply costs.',
    outputPreview: `Public response draft:
- Thank you for sharing this feedback. We are sorry the cost conversation did not feel clear. We work hard to explain treatment fees and options before care begins, and we would appreciate the chance to review your concern directly. Please call our office manager at [number].
Internal follow-up:
- Call patient within one business day.
- Review estimate, signed forms, and communication notes.
- Document resolution attempt.
Prevention:
- Add fee update language to treatment presentation.
- Train team on value and cost explanation without defensiveness.` ,
    whyItMatters: 'A review response must protect privacy while showing accountability to future patients reading it.',
    tags: ['reviews', 'fee complaint', 'reputation', 'patient communication']
  },
  {
    id: 'scn-021',
    category: 'Grow New Patients',
    coach: 'Growth Coach Riley',
    scenarioTitle: 'Implant Consultation Follow-Up Sequence',
    situation: 'Implant consults are scheduled from ads, but many patients do not move forward after learning the full treatment timeline.',
    teamInput: 'Patients receive a treatment plan printout but no staged educational follow-up. The coordinator does not know whether objections are cost, fear, time, or comparison shopping.',
    outputPreview: `Follow-up sequence:
Day 1 email:
- Recap diagnosis, treatment phases, and next decision point.
Day 3 call:
- Ask: What is the biggest question after reviewing the plan: timing, cost, surgery, or insurance?
Day 7 text:
- Offer a 10-minute benefits or financing review.
Day 14 email:
- Share what happens at the first appointment and expected healing checkpoints.
Objection log:
| Patient | Objection | Next action | Owner | Date |
| Cost | financing consult | TC | Friday |
| Fear | doctor call | Doctor | Tuesday |` ,
    whyItMatters: 'High-value consults need a follow-up system that identifies the real barrier instead of sending generic reminders.',
    tags: ['implant consult', 'lead nurturing', 'follow-up', 'case conversion']
  },
  {
    id: 'scn-022',
    category: 'Grow New Patients',
    coach: 'Growth Coach Riley',
    scenarioTitle: 'Membership Plan Enrollment Script for Uninsured Patients',
    situation: 'The practice has a membership plan, but uninsured new patients rarely enroll because the team explains it only at checkout.',
    teamInput: 'The plan includes preventive visits, discounts on treatment, and monthly payment options. Patients often ask whether the office takes cash patients.',
    outputPreview: `Enrollment timing:
- Mention during scheduling:
  - Since you do not have dental insurance, we have an in-office membership option that many patients use for preventive care and treatment savings.
- Explain after exam:
  - Based on what Dr. Kim recommended, membership would reduce today's preventive cost and lower the restorative fees we discussed.
- Close:
  - Would you like me to compare member and non-member totals before you decide?
Tracking:
- Eligible uninsured patients
- Offered membership
- Enrolled
- Treatment accepted after enrollment` ,
    whyItMatters: 'Membership plans grow when they are positioned as a care access pathway, not a checkout add-on.',
    tags: ['membership plan', 'uninsured patients', 'new patient growth', 'retention']
  },
  {
    id: 'scn-023',
    category: 'Grow New Patients',
    coach: 'Growth Coach Riley',
    scenarioTitle: 'Referral Source Tracking for Whitening Campaign',
    situation: 'A whitening promotion generated appointments, but the practice cannot tell whether patients came from Google, Instagram, existing patient referrals, or the local gym partnership.',
    teamInput: 'The front desk enters referral source inconsistently. The campaign used a landing page, QR cards, and social posts.',
    outputPreview: `Referral tracking cleanup:
- Standard source list:
  - Google organic
  - Google ad
  - Instagram
  - Existing patient referral
  - Gym QR card
  - Walk-by signage
- Front desk question:
  - What helped you decide to call us today?
- Weekly report:
| Source | Calls | Scheduled | Kept | Treatment diagnosed | Revenue |
Decision rule:
- Keep sources with kept-appointment quality, not just lead volume.
- Stop campaigns that create discount-only traffic without hygiene or restorative follow-through.` ,
    whyItMatters: 'Growth decisions need kept-appointment and treatment-quality data, not just call counts.',
    tags: ['marketing attribution', 'whitening campaign', 'referral source', 'new patients']
  },
  {
    id: 'scn-024',
    category: 'Grow New Patients',
    coach: 'Patient Experience Coach Tia',
    scenarioTitle: 'Broken Appointment Recovery for New Patients',
    situation: 'New patients who cancel their first visit are rarely reappointed, and the team assumes they were not serious.',
    teamInput: 'Cancellation reasons include work conflict, insurance uncertainty, and fear about cost. The office has no structured recovery script.',
    outputPreview: `Recovery workflow:
- Same day cancellation call:
  - I understand things come up. We were looking forward to helping with [reason]. I have two times that may work better.
- If insurance concern:
  - We can verify benefits before the visit and explain the estimate before treatment begins.
- If cost fear:
  - The first visit is about understanding what is going on and giving you options.
- Follow-up cadence:
  - Same day call
  - Next day text with two choices
  - One-week final invite
Metric:
- New patient cancellations recovered within 7 days` ,
    whyItMatters: 'Canceled new patients are warm leads with unresolved needs, not lost causes.',
    tags: ['new patient cancellation', 'reappointment', 'front desk script', 'growth']
  },
  {
    id: 'scn-025',
    category: 'Build a Stronger Team',
    coach: 'Team Systems Coach Naomi',
    scenarioTitle: 'New Assistant Onboarding Plan for Operatory Turnover',
    situation: 'Two new assistants joined the practice, and turnover time has doubled because tray setup, room close-out, and sterilization handoffs vary by person.',
    teamInput: 'The lead assistant trains verbally between patients. There is no week-by-week checklist or competency signoff.',
    outputPreview: `30-day onboarding plan:
Week 1:
- Shadow room setup and close-out
- Learn tray maps for top 10 procedures
- Sterilization flow walkthrough
Week 2:
- Perform turnover with lead assistant observing
- Practice doctor handoff language
Week 3:
- Run one column with spot checks
- Learn emergency setup and crown prep setup
Week 4:
- Competency signoff
Scorecard:
- Room ready on time
- Correct tray and materials
- Chart note support complete
- Infection control steps followed` ,
    whyItMatters: 'Assistant onboarding needs observable competencies, not just time spent shadowing.',
    tags: ['assistant onboarding', 'turnover', 'training', 'clinical systems']
  },
  {
    id: 'scn-026',
    category: 'Build a Stronger Team',
    coach: 'Team Systems Coach Naomi',
    scenarioTitle: 'Hygienist Lateness Coaching Script',
    situation: 'A hygienist is 5-8 minutes late several mornings each week, causing the first patient to start late and creating tension with the front desk.',
    teamInput: 'The office manager wants to address it without sounding punitive. The hygienist is clinically strong and patients like her.',
    outputPreview: `Coaching conversation:
- Open with facts:
  - I want to talk about start times. Over the last two weeks, your first patient started late four times because you arrived after the setup window.
- Connect impact:
  - That puts the front desk in apology mode and compresses your first appointment.
- Ask:
  - What is getting in the way of being ready by 7:45?
- Set expectation:
  - Going forward, I need you in the building and ready for huddle by 7:45 every clinical day.
- Support:
  - If there is a schedule barrier, let's solve it today.
- Follow-up:
  - We will check in next Friday.` ,
    whyItMatters: 'Good coaching is specific, behavior-based, and tied to patient flow rather than personality.',
    tags: ['coaching script', 'hygiene team', 'punctuality', 'manager tools']
  },
  {
    id: 'scn-027',
    category: 'Build a Stronger Team',
    coach: 'Team Systems Coach Naomi',
    scenarioTitle: 'Front Desk Role Clarity for Phones and Checkout',
    situation: 'Patients wait at checkout while phones ring because both front desk team members assume the other person owns the next task.',
    teamInput: 'The office has two front desk staff, one treatment coordinator, and no written priority rules for peak times.',
    outputPreview: `Front desk priority rules:
- Role A: live patient in office
  - Checkout
  - Collect estimated portion
  - Schedule next visit
- Role B: phones and digital requests
  - Answer calls
  - Return voicemails
  - Monitor texts
- Treatment coordinator:
  - Financial presentations and unscheduled treatment follow-up
Peak-time rule:
- A patient standing at the desk outranks a ringing phone.
Backup phrase:
- I am helping the patient in front of me. Can you grab that call and I will take the next one?` ,
    whyItMatters: 'Role clarity reduces resentment and improves both phone conversion and checkout collections.',
    tags: ['front desk', 'role clarity', 'checkout', 'phone workflow']
  },
  {
    id: 'scn-028',
    category: 'Build a Stronger Team',
    coach: 'Team Systems Coach Naomi',
    scenarioTitle: 'Morning Huddle Accountability Board',
    situation: 'The team discusses goals in huddle but does not track owners or follow-through, so the same problems repeat daily.',
    teamInput: 'Common recurring issues include unscheduled treatment, unfilled hygiene openings, pending claims, and lab cases not checked before seating appointments.',
    outputPreview: `Huddle board columns:
| Item | Owner | Due today | Status |
| Open hygiene at 2 PM | Front desk | 10 AM fill plan | pending |
| Lab case for crown seat | Assistant | before 9 AM | confirmed |
| $4,200 unscheduled case | TC | call by noon | pending |
| Claim attachment missing | Billing | upload today | pending |
End-of-day close:
- What was completed?
- What moved and why?
- What needs doctor or manager decision?
Rule:
- No huddle item without one owner.` ,
    whyItMatters: 'Team meetings change behavior only when work is assigned and reviewed.',
    tags: ['huddle', 'accountability', 'team systems', 'daily operations']
  },
  {
    id: 'scn-029',
    category: 'Build a Stronger Team',
    coach: 'HR Coach Simone',
    scenarioTitle: 'Cross-Training Plan for Billing Backup',
    situation: 'Only one person knows how to send corrected claims and appeals, creating delays whenever she is out.',
    teamInput: 'The backup employee can post payments but has never handled appeals, claim attachments, or payer portal follow-up.',
    outputPreview: `Cross-training plan:
Skill ladder:
1. Locate claim and EOB
2. Identify denial reason
3. Attach required documentation
4. Submit corrected claim or appeal
5. Log payer reference and next follow-up date
Practice cases:
- One crown denial
- One SRP attachment request
- One COB correction
Signoff:
- Backup completes three supervised claims.
- Billing lead audits notes for completeness.
Continuity rule:
- Every worked claim has next action, owner, and date.` ,
    whyItMatters: 'Single-person billing knowledge creates cash-flow risk and unnecessary stress.',
    tags: ['cross-training', 'billing backup', 'appeals', 'team resilience']
  },
  {
    id: 'scn-030',
    category: 'Build a Stronger Team',
    coach: 'Team Systems Coach Naomi',
    scenarioTitle: 'Difficult Patient Debrief Without Blame',
    situation: 'A patient complaint about wait time led to finger-pointing between the assistant, hygienist, and front desk.',
    teamInput: 'The patient waited 22 minutes after arriving early. The assistant says the room was not ready, hygiene says the doctor exam ran late, and front desk says nobody updated the patient.',
    outputPreview: `Debrief format:
- What happened:
  - Patient waited 22 minutes without an update.
- Process gaps:
  - No owner for delay communication
  - No threshold for front desk update
  - Room status not visible
- New rule:
  - At 8 minutes behind, clinical team updates front desk.
  - Front desk tells patient what is happening and gives a realistic estimate.
- Patient recovery script:
  - Thank you for waiting. We are running about 10 minutes behind because [brief reason]. We have not forgotten you.` ,
    whyItMatters: 'Blame conversations drain teams; process debriefs create better next-day behavior.',
    tags: ['patient complaint', 'team debrief', 'delay communication', 'culture']
  },
  {
    id: 'scn-031',
    category: 'Improve Profitability',
    coach: 'Profitability Coach Ryan',
    scenarioTitle: 'Overhead Leak Diagnosis Across Supplies and Lab',
    situation: 'Collections are stable, but overhead rose from 61% to 67% over two quarters and the owner cannot see one obvious cause.',
    teamInput: 'Supply ordering is split across three vendors, lab costs rose after a faster-turnaround vendor was added, and overtime increased during two staff vacancies.',
    outputPreview: `Overhead diagnosis:
- Compare each category as percent of collections:
  - Dental supplies
  - Lab
  - Payroll and overtime
  - Merchant fees
  - Repairs and maintenance
- Leak tests:
  - Supplies: duplicate SKUs, rush shipping, no par levels
  - Lab: remake rate, rush fees, case selection by vendor
  - Payroll: overtime by role and day
Action table:
| Leak | Evidence | 30-day fix |
| Supplies | rush fees weekly | central order day |
| Lab | fees up 18% | vendor mix review |
| Overtime | Friday front desk overlap | schedule adjustment |` ,
    whyItMatters: 'Profit leaks are often several small operating habits rather than one dramatic expense.',
    tags: ['overhead', 'profitability', 'supplies', 'lab costs', 'overtime']
  },
  {
    id: 'scn-032',
    category: 'Improve Profitability',
    coach: 'Profitability Coach Ryan',
    scenarioTitle: 'Production vs Collections Gap Diagnosis',
    situation: 'Monthly production looks healthy, but collections lag production by $94,000 over the quarter.',
    teamInput: 'Adjustments are inconsistently categorized, patient refunds are delayed, and claims sit in process longer than 30 days.',
    outputPreview: `Reconciliation workflow:
1. Start with gross production.
2. Subtract contractual adjustments by payer.
3. Separate courtesy discounts from PPO adjustments.
4. Compare net production to collections.
5. Tie unpaid production to:
   - Insurance A/R
   - Patient A/R
   - Pending refunds
   - Unposted payments
KPI table:
| Metric | Target | Current | Owner |
| Net collection ratio | 98% | ___ | Billing |
| Insurance over 60 | <15% | ___ | Billing |
| Patient over 60 | <10% | ___ | Front desk |` ,
    whyItMatters: 'The owner needs to know whether the gap is pricing, write-offs, billing delay, or collection execution.',
    tags: ['production vs collections', 'KPI', 'cash flow', 'financial diagnosis']
  },
  {
    id: 'scn-033',
    category: 'Improve Profitability',
    coach: 'Profitability Coach Ryan',
    scenarioTitle: 'Top CDT Write-Off Analysis',
    situation: 'The practice suspects PPO plans are dragging profitability but has not identified which procedure codes create the largest write-offs.',
    teamInput: 'The PM report can export procedure code, UCR fee, allowed amount, adjustment, payer, provider, and date of service.',
    outputPreview: `CDT write-off analysis:
- Export 12 months of completed procedures.
- Calculate:
  - UCR fee
  - Allowed amount
  - Dollar write-off
  - Write-off percent
  - Frequency
- Rank by total write-off dollars, not just percent.
Example table:
| CDT | Count | Avg UCR | Avg allowed | Total write-off |
| D2740 | 86 | $1,650 | $930 | $61,920 |
| D2950 | 74 | $410 | $185 | $16,650 |
Decision use:
- Fee update
- Payer negotiation
- PPO participation review
- Treatment mix planning` ,
    whyItMatters: 'Profitability improves faster when the team knows which codes and payers create the largest dollar drag.',
    tags: ['CDT analysis', 'write-offs', 'PPO', 'profitability']
  },
  {
    id: 'scn-034',
    category: 'Improve Profitability',
    coach: 'Operations Coach Maya',
    scenarioTitle: 'Lab Remake Cost Review',
    situation: 'Crown and bridge lab costs are high, but the team does not know whether the issue is vendor pricing, remakes, shade changes, or rushed case timing.',
    teamInput: 'The lab bill increased 21% year over year. Doctors switched some anterior cases to a premium lab, and assistants report more remakes after digital scan training turnover.',
    outputPreview: `Lab review checklist:
- Separate fees by:
  - Vendor
  - Procedure type
  - Doctor
  - Remake reason
  - Rush fee
- Remake categories:
  - Margin issue
  - Shade issue
  - Bite issue
  - Scan quality
  - Patient changed preference
- 30-day fix:
  - Scan calibration refresher
  - Photo protocol for anterior cases
  - Rush fee approval rule
  - Vendor-by-case selection guide` ,
    whyItMatters: 'Lab cost control should protect quality while removing preventable remake and rush expenses.',
    tags: ['lab costs', 'remakes', 'crown and bridge', 'margin']
  },
  {
    id: 'scn-035',
    category: 'Improve Profitability',
    coach: 'Profitability Coach Ryan',
    scenarioTitle: 'Hygiene Profitability and Perio Mix Review',
    situation: 'Hygiene is fully booked, but hygiene production per hour is low and perio maintenance is under-coded compared with chart findings.',
    teamInput: 'Only 9% of active hygiene patients are on periodontal maintenance. Chart audit shows more historical SRP and ongoing pocketing than the coding mix suggests.',
    outputPreview: `Hygiene profitability review:
- Pull by hygienist:
  - Hours worked
  - Gross hygiene production
  - Perio maintenance count
  - SRP diagnosed
  - Fluoride and adjunctive services
  - Doctor treatment diagnosed from hygiene
Audit questions:
- Are perio patients coded correctly?
- Are intervals clinically appropriate?
- Are handoffs creating restorative opportunities?
- Are no-shows concentrated by provider or day?
Action:
- Calibrate diagnosis language and coding triggers in next hygiene meeting.` ,
    whyItMatters: 'A full hygiene schedule can still underperform if disease status, intervals, and handoffs are not managed.',
    tags: ['hygiene profitability', 'perio mix', 'diagnosis', 'production']
  },
  {
    id: 'scn-036',
    category: 'Improve Profitability',
    coach: 'Profitability Coach Ryan',
    scenarioTitle: 'Merchant Fee and Payment Plan Leakage',
    situation: 'Merchant fees and patient payment plan balances are rising, but the practice has not reviewed which payment methods and plans create avoidable cost or risk.',
    teamInput: 'Patients often split balances into informal monthly payments. Card-not-present transactions are common for recurring payments.',
    outputPreview: `Payment leakage review:
- Merchant fee analysis:
  - Card-present vs card-not-present
  - Rewards cards
  - Financing fees
  - ACH availability
- Payment plan risk:
  - Balance over $500
  - Term over 3 months
  - Missed payment history
  - No card on file
Policy update:
- Offer ACH for recurring plans.
- Require written terms and auto-pay.
- Escalate balances over $1,000 to approved financing options.
- Review payment plan aging weekly.` ,
    whyItMatters: 'Small payment friction and informal plans can quietly reduce already-earned revenue.',
    tags: ['merchant fees', 'payment plans', 'collections', 'profit leakage']
  },
  {
    id: 'scn-037',
    category: 'Reduce PPO Drag',
    coach: 'PPO Strategy Coach Nina',
    scenarioTitle: 'PPO Minimum Fee and Break-Even Analysis',
    situation: 'The owner wants to know whether a low-paying PPO should be renegotiated, limited, or dropped, but the team only has production volume by plan.',
    teamInput: 'The plan brings 18% of visits but reimburses crowns, build-ups, and perio maintenance far below the office fee. Hygiene is busy and new patient demand is steady.',
    outputPreview: `Break-even analysis:
- Calculate direct cost per procedure:
  - Provider time
  - Assistant time
  - Supplies
  - Lab
  - Merchant/financing cost
- Add overhead allocation by chair hour.
- Compare allowed fee to break-even plus desired profit.
Decision table:
| CDT | PPO allowed | Break-even | Margin | Action |
| D2740 | $925 | $840 | low | renegotiate |
| D4910 | $78 | $92 | negative | review participation |
Plan decision:
- Keep, renegotiate, close to new patients, or exit with communication plan.` ,
    whyItMatters: 'A PPO can fill the schedule while still weakening profit if fees do not clear chair-hour economics.',
    tags: ['PPO break-even', 'minimum fee', 'plan analysis', 'profitability']
  },
  {
    id: 'scn-038',
    category: 'Reduce PPO Drag',
    coach: 'PPO Strategy Coach Nina',
    scenarioTitle: 'Leased Network Discovery',
    situation: 'The practice sees unexpected write-offs from patients who were not believed to be in-network, likely due to leased network arrangements.',
    teamInput: 'EOBs reference umbrella networks and third-party administrators. The credentialing file does not list all leased access relationships.',
    outputPreview: `Leased network audit:
- Pull EOBs with unexpected contractual adjustments.
- Record:
  - Payer name
  - Network name
  - TPA or umbrella network
  - Allowed amount
  - Contract source listed on EOB
- Call script:
  - Please identify the network contract used to price this claim and whether our provider is attached through a leased network.
- Action options:
  - Request fee schedule
  - Remove leased access if contract allows
  - Update verification notes
  - Add payer to PPO review list` ,
    whyItMatters: 'Leased network write-offs are hard to manage unless the practice identifies who is actually pricing the claim.',
    tags: ['leased network', 'PPO', 'EOB audit', 'contracting']
  },
  {
    id: 'scn-039',
    category: 'Reduce PPO Drag',
    coach: 'PPO Strategy Coach Nina',
    scenarioTitle: 'PPO Exit Patient Communication Plan',
    situation: 'The practice plans to leave one low-paying PPO but worries patients will hear we do not take your insurance and leave immediately.',
    teamInput: 'The plan pays poorly on restorative codes but includes many long-term families. The owner wants a phased approach.',
    outputPreview: `Patient communication plan:
- Internal training first:
  - We are changing our relationship with the plan, not abandoning patients.
- Patient letter sections:
  - What is changing
  - What stays the same
  - How out-of-network benefits may still help
  - Who to call for a personal estimate
- Phone script:
  - We can still see you. The difference is how your plan processes benefits, and we will help estimate that before your visit.
- Priority outreach:
  - Active treatment patients
  - Families with upcoming hygiene
  - High-value ongoing restorative patients` ,
    whyItMatters: 'PPO exits protect margin only when patient communication preserves continuity and trust.',
    tags: ['PPO exit', 'patient retention', 'out-of-network', 'communication plan']
  },
  {
    id: 'scn-040',
    category: 'Reduce PPO Drag',
    coach: 'PPO Strategy Coach Nina',
    scenarioTitle: 'Payer-by-Payer Crown Margin Review',
    situation: 'Crowns are a major procedure for the practice, but payer reimbursement varies widely and nobody has reviewed margin by payer.',
    teamInput: 'The owner wants to know which contracts hurt doctor compensation most after lab and chair time are considered.',
    outputPreview: `Crown margin review:
Inputs:
- D2740 completed count by payer
- Allowed fee
- Average lab cost
- Average chair time
- Assistant cost estimate
- Adjustment amount
Output table:
| Payer | Count | Allowed | Lab | Chair time | Est margin |
Questions:
- Which payer has high volume but low margin?
- Which payer has low volume and high admin burden?
- Which payer should be renegotiated first?
Follow-up:
- Prepare fee increase request using volume and market data.` ,
    whyItMatters: 'Code-level payer margin reveals which contracts deserve attention before broad strategic decisions are made.',
    tags: ['crown margin', 'payer analysis', 'PPO fees', 'D2740']
  },
  {
    id: 'scn-041',
    category: 'Reduce PPO Drag',
    coach: 'PPO Strategy Coach Nina',
    scenarioTitle: 'PPO New Patient Mix Warning',
    situation: 'New patient volume is up, but most growth comes from the lowest reimbursing PPO plans.',
    teamInput: 'Marketing reports celebrate lead volume, while the financial reports show rising write-offs and flat net collections.',
    outputPreview: `New patient quality dashboard:
- New patients by source
- Insurance type by source
- Average diagnosed treatment
- Average allowed amount by payer
- Kept appointment rate
- 90-day net collections
Decision rules:
- Do not scale ads that produce mostly low-margin PPO demand.
- Shift budget toward sources with better payer mix or fee-for-service conversion.
- Train scheduling to identify plan participation before promising benefits.
- Review top 10 new patient plans monthly.` ,
    whyItMatters: 'Growth can dilute profitability when the payer mix is ignored.',
    tags: ['new patient mix', 'PPO drag', 'marketing ROI', 'payer mix']
  },
  {
    id: 'scn-042',
    category: 'Reduce PPO Drag',
    coach: 'PPO Strategy Coach Nina',
    scenarioTitle: 'Fee Schedule Renegotiation Packet',
    situation: 'The practice wants to request higher PPO fees but has not prepared data beyond saying costs have gone up.',
    teamInput: 'The plan represents 11% of active patients. The practice has strong recall retention and low complaint rates.',
    outputPreview: `Renegotiation packet:
- Practice profile:
  - Provider credentials
  - Years serving community
  - Patient access and appointment availability
- Utilization data:
  - Patient count
  - Procedure mix
  - Claim volume
- Fee concerns:
  - Top CDT codes below market
  - Lab and supply cost pressure
  - Access risk if fees remain unsustainable
- Requested update:
  - Attach proposed fee schedule by CDT
- Follow-up cadence:
  - Submit request
  - Confirm receipt in 7 days
  - Escalate at 21 days` ,
    whyItMatters: 'Payers respond better to organized access and utilization data than informal complaints about low fees.',
    tags: ['PPO negotiation', 'fee schedule', 'payer packet', 'contracting']
  },
  {
    id: 'scn-043',
    category: 'Avoid Compliance Mistakes',
    coach: 'Compliance Coach Avery',
    scenarioTitle: 'HIPAA Wrong-Recipient Email Response',
    situation: 'A treatment plan with patient name, tooth numbers, and estimated fees was emailed to the wrong patient due to an autocomplete error.',
    teamInput: 'The recipient replied saying they received someone else\'s information. The office manager wants to know what to do before calling the patient.',
    outputPreview: `Immediate response checklist:
- Stop further email thread activity.
- Ask recipient to delete the message and confirm deletion.
- Preserve evidence internally; do not delete sent record.
- Identify exactly what PHI was disclosed.
- Notify privacy officer or assigned compliance lead.
- Document:
  - Date and time
  - Recipient
  - Information disclosed
  - Mitigation steps
  - Risk assessment outcome
Patient communication draft:
- We discovered that information related to your treatment estimate was sent to an incorrect email address. We have taken steps to request deletion and are reviewing our process to prevent recurrence.` ,
    whyItMatters: 'Wrong-recipient disclosures need calm containment, documentation, and policy-based review rather than improvisation.',
    tags: ['HIPAA', 'wrong recipient', 'email disclosure', 'incident response']
  },
  {
    id: 'scn-044',
    category: 'Avoid Compliance Mistakes',
    coach: 'Compliance Coach Avery',
    scenarioTitle: 'BAA Decision Tree for a New Software Vendor',
    situation: 'The practice is considering a texting and review platform, but the vendor says a BAA is not necessary because they only send reminders.',
    teamInput: 'The platform would receive patient names, phone numbers, appointment dates, and message history. The owner wants a practical decision tree.',
    outputPreview: `BAA decision tree:
1. Will the vendor receive, store, transmit, or access patient identifiers?
   - If yes, continue.
2. Is the information connected to care, appointments, billing, or treatment?
   - If yes, likely PHI.
3. Is the vendor performing a service for the practice involving PHI?
   - If yes, business associate review is needed.
4. Can the vendor sign a BAA and describe safeguards?
   - If no, do not transmit PHI through the platform.
Vendor questions:
- Where is data stored?
- Who can access messages?
- How are deletions handled?
- Is encryption used in transit and at rest?` ,
    whyItMatters: 'Reminder and review tools can still handle PHI, so vendor setup needs compliance review before launch.',
    tags: ['BAA', 'vendor review', 'HIPAA', 'texting platform']
  },
  {
    id: 'scn-045',
    category: 'Avoid Compliance Mistakes',
    coach: 'Compliance Coach Avery',
    scenarioTitle: 'Incomplete Consent Notes on Extraction Cases',
    situation: 'A chart audit found extraction notes missing risks, alternatives, and post-op instructions in several sampled records.',
    teamInput: 'Doctors say they discuss consent verbally, but the note template is optional and often skipped on busy emergency days.',
    outputPreview: `Consent documentation template:
Required note elements:
- Diagnosis and tooth number
- Recommended procedure
- Risks discussed
- Alternatives discussed, including no treatment
- Patient questions answered
- Post-op instructions provided
- Consent obtained before procedure
Spot audit:
- Review 10 extraction charts per provider per month.
- Track missing elements by provider.
- Correct template defaults in the PM system.
Coaching phrase:
- If it was important enough to explain, it is important enough to document.` ,
    whyItMatters: 'Consent documentation protects patients, providers, and the practice when outcomes or expectations are later disputed.',
    tags: ['informed consent', 'extractions', 'chart audit', 'documentation']
  },
  {
    id: 'scn-046',
    category: 'Avoid Compliance Mistakes',
    coach: 'Compliance Coach Avery',
    scenarioTitle: 'Social Media Before-and-After Photo Review',
    situation: 'The team wants to post before-and-after cosmetic photos, but the consent form on file is a general treatment consent, not a marketing release.',
    teamInput: 'The photos show teeth only, but the caption would mention veneers and the patient gave verbal permission at the visit.',
    outputPreview: `Posting review checklist:
- Do not post until written marketing authorization is signed.
- Confirm authorization includes:
  - Specific images or image type
  - Where images may be used
  - Whether name or story may be used
  - Right to revoke going forward
- Remove identifiers unless explicitly approved.
- Avoid clinical claims that imply guaranteed results.
- Store signed release with the image set.
Caption guidance:
- Keep educational and factual.
- Do not include diagnosis or treatment details beyond what authorization permits.` ,
    whyItMatters: 'Dental photos can still identify a patient or reveal treatment, so marketing use needs specific authorization.',
    tags: ['social media', 'photo release', 'HIPAA', 'marketing']
  },
  {
    id: 'scn-047',
    category: 'Avoid Compliance Mistakes',
    coach: 'Compliance Coach Avery',
    scenarioTitle: 'Sterilization Log Gap After Autoclave Error',
    situation: 'The autoclave displayed an error code after lunch, and the sterilization log has missing entries for two cycles earlier that day.',
    teamInput: 'Assistants are unsure whether instruments from the questionable cycles were used. The office needs a response plan and documentation format.',
    outputPreview: `Sterilization response:
- Stop using instruments from uncertain loads.
- Identify affected cycle numbers and trays.
- Reprocess any instruments that cannot be verified.
- Document:
  - Error code
  - Time discovered
  - Load numbers affected
  - Biological or chemical indicator results
  - Corrective action
- Notify lead clinical provider and office manager.
Prevention:
- Require initials, cycle result, and indicator confirmation before instruments return to storage.
- Review log at end of each day.` ,
    whyItMatters: 'Sterilization uncertainty should trigger containment and documentation, not guesswork.',
    tags: ['sterilization', 'infection control', 'autoclave', 'documentation']
  },
  {
    id: 'scn-048',
    category: 'Avoid Compliance Mistakes',
    coach: 'Compliance Coach Avery',
    scenarioTitle: 'Patient Texting Guidelines for PHI',
    situation: 'The front desk texts patients about balances, prescriptions, and treatment details using inconsistent language.',
    teamInput: 'Some patients prefer texting, but the practice has not defined what can be texted or how consent is documented.',
    outputPreview: `Texting policy draft:
Allowed with standard template:
- Appointment reminders
- Please call us about your account
- Your prescription request is ready for review, please call
Avoid in text unless secure system and consent support it:
- Diagnosis details
- Procedure specifics
- Detailed balances tied to treatment
- Clinical photos
Consent workflow:
- Document patient communication preference.
- Explain limits of standard texting.
- Use secure portal or phone call for sensitive details.
Team phrase:
- For privacy, I do not want to put those details in a text. Can I call you?` ,
    whyItMatters: 'Convenient communication still needs privacy boundaries the whole team can follow.',
    tags: ['texting', 'PHI', 'patient communication', 'HIPAA policy']
  },
  {
    id: 'scn-049',
    category: 'Make Smarter Money Decisions',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'CE Trip Tax Documentation Scenario',
    situation: 'The owner plans to attend a dental CE course in another state and wants to know what documentation should be kept for business substantiation.',
    teamInput: 'The trip includes course tuition, airfare, hotel, meals, a spouse traveling separately, and one extra personal day after the course.',
    outputPreview: `Documentation checklist:
- CE agenda showing course title, dates, hours, and dental relevance
- Registration receipt
- Airfare receipt
- Hotel folio with dates separated between business and personal days
- Meal receipts with business purpose noted
- Notes from course or certificate of completion
- Calendar entry showing travel and class schedule
Separation reminders:
- Track spouse costs separately unless there is a documented business role.
- Separate personal extra day costs from CE days.
- Ask CPA how to treat mixed-purpose travel before filing.` ,
    whyItMatters: 'Good records make legitimate business education easier to support and reduce year-end cleanup.',
    tags: ['CE travel', 'tax documentation', 'owner planning', 'records']
  },
  {
    id: 'scn-050',
    category: 'Make Smarter Money Decisions',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'Equipment Purchase Timing Analysis',
    situation: 'The doctor wants to buy a $92,000 scanner before year-end but is unsure whether the purchase is justified by production, financing terms, and tax timing.',
    teamInput: 'The scanner could reduce lab remakes, improve case presentation, and speed crown workflows. The practice has cash reserves but also plans a hygiene room refresh.',
    outputPreview: `Purchase decision model:
Inputs:
- Purchase price and financing terms
- Monthly payment
- Expected procedure volume affected
- Lab savings per case
- Remake reduction estimate
- Training and implementation time
- Cash reserve after down payment
Decision table:
| Factor | Estimate | Confidence |
| Monthly payment | $___ | high |
| Lab savings | $___ | medium |
| Added case acceptance | $___ | low/medium |
Questions for CPA/lender:
- Tax treatment and timing
- Section 179 eligibility
- Impact on cash reserves
Recommendation format:
- Buy now, delay, lease, or pilot with vendor demo period.` ,
    whyItMatters: 'Equipment decisions should be based on cash flow, utilization, and implementation capacity, not year-end urgency alone.',
    tags: ['equipment purchase', 'cash flow', 'tax timing', 'scanner']
  },
  {
    id: 'scn-051',
    category: 'Make Smarter Money Decisions',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'Associate Compensation Model Review',
    situation: 'The owner is hiring an associate and needs to compare daily minimum, percentage of collections, and percentage of adjusted production.',
    teamInput: 'The schedule has room for growth but payer mix is heavy PPO. The owner wants to avoid a model that rewards production that does not collect.',
    outputPreview: `Comp model comparison:
| Model | Advantage | Risk | Best safeguard |
| Daily minimum | recruiting stability | cost before volume | sunset date |
| % adjusted production | simple and timely | may ignore collections | exclude uncollectible adjustments |
| % collections | cash aligned | delayed pay disputes | clear reporting cadence |
Review items:
- Hygiene exam expectations
- Lab fee treatment
- Remake policy
- New patient allocation
- Non-compete or restrictive covenant review by attorney
Decision:
- Model must match cash flow, payer mix, and schedule maturity.` ,
    whyItMatters: 'Associate pay design affects profitability, behavior, and trust from the first month.',
    tags: ['associate compensation', 'collections', 'adjusted production', 'owner decision']
  },
  {
    id: 'scn-052',
    category: 'Make Smarter Money Decisions',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'Hygiene Room Expansion Break-Even',
    situation: 'The practice is considering adding a hygiene room but needs to know whether demand, staffing, and build-out cost support the decision.',
    teamInput: 'Recall is booked out 10 weeks, perio maintenance demand is increasing, and part-time hygienist availability is uncertain.',
    outputPreview: `Expansion model:
Inputs:
- Build-out cost
- Equipment cost
- Hygiene hours available
- Expected production per hygiene hour
- Doctor exam capacity
- Assistant/front desk support needs
Break-even calculation:
- Monthly fixed cost increase
- Expected hygiene gross production
- Expected hygiene net production
- Added restorative diagnosis from hygiene
Risk checks:
- Can staffing support the room?
- Will doctor exams disrupt operative?
- Is recall backlog durable or temporary?
Decision:
- Expand, extend hours first, or improve existing hygiene utilization.` ,
    whyItMatters: 'More chairs create profit only when demand, staffing, and doctor flow can support them.',
    tags: ['hygiene expansion', 'break-even', 'capacity planning', 'cash flow']
  },
  {
    id: 'scn-053',
    category: 'Make Smarter Money Decisions',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'Owner Distribution Guardrails',
    situation: 'The owner wants to increase monthly distributions but cash swings from insurance A/R and payroll timing make the practice feel unpredictable.',
    teamInput: 'The practice has two payrolls per month, quarterly tax estimates, lab bills due mid-month, and inconsistent patient collections.',
    outputPreview: `Distribution guardrail plan:
- Establish minimum operating cash:
  - One payroll cycle
  - Average monthly lab bill
  - Rent and debt service
  - Tax reserve
- Distribution rule:
  - Pay owner base amount monthly.
  - Extra distributions only when cash exceeds reserve after known obligations.
- Dashboard:
  - Bank balance
  - Insurance A/R over 60
  - Patient A/R over 60
  - Credit card payable
  - Upcoming tax payments
Monthly meeting:
- Decide distribution after reviewing the dashboard, not from bank balance alone.` ,
    whyItMatters: 'Owner pay becomes less stressful when distributions follow a cash reserve rule.',
    tags: ['owner distributions', 'cash reserve', 'practice finance', 'planning']
  },
  {
    id: 'scn-054',
    category: 'Make Smarter Money Decisions',
    coach: 'Dental CFO Coach Ryan',
    scenarioTitle: 'Fee Update Planning Before Annual Insurance Renewal',
    situation: 'The practice has not updated fees in 18 months and wants to adjust UCR fees before the next insurance renewal cycle.',
    teamInput: 'Inflation affected supplies, lab, wages, and rent. The owner does not want sudden patient backlash or unsupported fee changes.',
    outputPreview: `Fee update plan:
- Data review:
  - Current UCR by CDT
  - Local percentile benchmark if available
  - Top 30 procedure volume
  - PPO allowed amount by code
  - Patient out-of-pocket impact examples
- Rollout:
  - Update fees in PM system
  - Train team on explanation language
  - Review membership plan pricing
  - Notify patients only where estimates are affected
Script:
- We periodically review fees to keep up with the cost of delivering high-quality care. Before treatment begins, we will review your estimate and options clearly.
Follow-up:
- Monitor acceptance, complaints, and collections for 60 days.` ,
    whyItMatters: 'Fee updates should be planned from procedure data and paired with clear team communication.',
    tags: ['fee update', 'UCR', 'annual planning', 'patient communication']
  }
];

export default coachScenarios;
