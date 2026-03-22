export interface ChartingExample {
  id: string;
  title: string;
  situation: string;
  example: string;
  keyElements: string[];
  tags: string[];
}

export interface ChartingCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  examples: ChartingExample[];
}

export const chartingCategories: ChartingCategory[] = [
  {
    id: "vital-signs",
    name: "Vital Signs & Assessment",
    description:
      "Documentation of vital signs, initial assessments, and routine monitoring findings.",
    icon: "🩺",
    examples: [
      {
        id: "vs-routine",
        title: "Routine Vital Signs Documentation",
        situation:
          "Documenting stable vital signs during routine morning assessment.",
        example:
          "0800: Vital signs obtained: T 98.4°F (oral), HR 72 bpm (regular rhythm, strong peripheral pulses), RR 16 breaths/min (unlabored), BP 118/76 mmHg (left arm, supine), SpO₂ 98% on room air. Patient alert, oriented ×4, denies pain, shortness of breath, or dizziness. Lung sounds clear to auscultation bilaterally. Bowel sounds present ×4 quadrants. No edema noted. Patient states feeling well and rested.",
        keyElements: [
          "All five vital signs with specifics",
          "Position and extremity for BP",
          "O2 delivery method",
          "Neurological status",
          "Subjective patient statement",
          "Associated physical findings",
        ],
        tags: ["vitals", "assessment", "routine", "morning"],
      },
      {
        id: "vs-hypertension",
        title: "Hypertensive Episode",
        situation:
          "Patient presents with elevated blood pressure requiring intervention.",
        example:
          "1415: Patient reported headache rated 6/10, described as 'pounding' at the back of the head. BP 186/102 mmHg (right arm, seated), repeat BP in 5 minutes 182/98 mmHg (right arm, seated). HR 88 bpm, RR 18 breaths/min, SpO₂ 97% on room air. Patient denies chest pain, visual changes, nausea, or difficulty speaking. Neurological exam intact: pupils equal and reactive to light, no facial droop, grip strength equal bilaterally. MD [Name] notified at 1420. Orders received to administer labetalol 200 mg PO. Medication administered at 1430. Patient instructed to remain in bed and call light within reach. Will reassess BP and symptoms in 30 minutes per MD order.",
        keyElements: [
          "Symptom onset and description",
          "Multiple BP readings with specifics",
          "Neuro assessment",
          "Time of physician notification",
          "Orders received and action taken",
          "Follow-up plan",
        ],
        tags: ["blood pressure", "hypertension", "emergency", "medication"],
      },
      {
        id: "vs-fever",
        title: "Fever Assessment and Intervention",
        situation:
          "Patient develops elevated temperature requiring assessment and treatment.",
        example:
          "2200: Patient reported feeling 'hot and chilly.' Temperature 102.8°F (tympanic), HR 108 bpm, RR 20 breaths/min, BP 110/68 mmHg, SpO₂ 96% on room air. Skin warm and flushed, diaphoretic. Patient oriented ×3, reports mild headache, denies rigors, rash, or neck stiffness. Last temperature at 1800 was 99.6°F. Blood cultures ×2 drawn per existing order from bilateral peripheral sites before antibiotic administration. Urine specimen collected for urinalysis and culture. Acetaminophen 650 mg PO administered at 2215 per PRN order. Cool damp cloth applied to forehead. Increased IV fluid rate per MD standing order. Charge nurse [Name] and covering MD [Name] notified of fever spike. Temperature reassessed at 2300: 101.2°F. Patient reports feeling 'a little better.'",
        keyElements: [
          "Patient's subjective report",
          "All vital signs",
          "Skin assessment",
          "Baseline comparison",
          "Interventions in order with times",
          "Notification of providers",
          "Reassessment findings",
        ],
        tags: ["fever", "temperature", "infection", "intervention"],
      },
      {
        id: "vs-tachycardia",
        title: "Tachycardia Assessment",
        situation: "Sudden onset of elevated heart rate during monitoring.",
        example:
          "1050: Telemetry alarm triggered. Patient observed on monitor with sinus tachycardia at rate of 128 bpm. Bedside assessment performed: patient awake, alert, anxious-appearing. Reports palpitations and mild shortness of breath onset approximately 10 minutes ago. Denies chest pain, diaphoresis, or near-syncope. BP 98/60 mmHg, RR 22 breaths/min, SpO₂ 95% on 2L nasal cannula (down from 98% at 0800 assessment). Oxygen increased to 4L nasal cannula. 12-lead ECG obtained and transmitted to cardiology. IV access patent, NS bolus 500 mL infusing per protocol. MD [Name] notified at 1055, arrived to bedside at 1108. Patient remained in bed with head of bed elevated 30°. Side rails up ×3, call light within reach. Continuous cardiac and SpO₂ monitoring ongoing.",
        keyElements: [
          "Alarm trigger and initial finding",
          "Patient appearance and symptoms",
          "Vital sign comparison to baseline",
          "Interventions taken",
          "Provider notification time",
          "Safety measures",
          "Monitoring plan",
        ],
        tags: ["tachycardia", "cardiac", "telemetry", "emergency"],
      },
      {
        id: "vs-bradycardia",
        title: "Bradycardia Assessment",
        situation: "Patient found with unexpectedly low heart rate during routine monitoring.",
        example:
          "0930: Telemetry displayed heart rate of 44 bpm. Bedside assessment: patient awake, alert, oriented ×4. Denies chest pain, dizziness, syncope, or dyspnea. Reports feeling 'a little tired.' BP 102/64 mmHg, RR 16 breaths/min, SpO₂ 97% on room air. Skin warm and dry; no diaphoresis. 12-lead ECG obtained at 0932: sinus bradycardia rate 44 bpm, PR interval 0.22 seconds, no ST changes noted. Current medications reviewed — patient receiving metoprolol succinate 100 mg PO daily (last dose 0800). MD [Name] notified at 0935 of symptomatic bradycardia. Orders received: hold metoprolol; IV access established; atropine 0.5 mg IV at bedside per order. Continuous cardiac monitoring ongoing. Patient instructed to remain in bed and use call light for any symptoms. Will reassess q30 minutes.",
        keyElements: [
          "HR finding and context",
          "Symptom assessment including syncope",
          "Full vital signs",
          "12-lead ECG with findings",
          "Medication review for causative agents",
          "Provider notification and orders",
          "Safety interventions",
        ],
        tags: ["bradycardia", "cardiac", "telemetry", "ECG", "metoprolol"],
      },
      {
        id: "vs-orthostatic",
        title: "Orthostatic Hypotension Assessment",
        situation: "Patient reports dizziness upon standing; orthostatic vital signs ordered.",
        example:
          "1100: Patient reported dizziness and lightheadedness when standing to ambulate to bathroom. Orthostatic vital signs obtained: Supine — BP 122/78 mmHg, HR 68 bpm (after 5 minutes lying flat); Sitting — BP 108/70 mmHg, HR 80 bpm (after 2 minutes sitting); Standing — BP 94/60 mmHg, HR 96 bpm (after 1 minute standing; patient reported increased dizziness, held onto bed rail). Positive orthostatic hypotension identified: systolic drop of 28 mmHg and diastolic drop of 18 mmHg from supine to standing with associated symptoms. Patient assisted back to supine immediately. Denies syncope or loss of consciousness. Skin pale, diaphoretic during standing assessment. MD [Name] notified at 1108. Orders received: IV fluid bolus NS 500 mL, hold morning antihypertensive (amlodipine), hold diuretic (furosemide). Fall risk reassessed — HIGH; bed alarm activated, two-person assist for all transfers. Patient and family educated on slow positional changes, dangling at bedside prior to standing.",
        keyElements: [
          "Supine/sitting/standing measurements with timing",
          "Positive criteria identified (≥20 mmHg systolic, ≥10 mmHg diastolic)",
          "Associated symptoms at each position",
          "Immediate safety response",
          "Medication review",
          "Provider notification and orders",
          "Fall prevention update",
          "Patient education",
        ],
        tags: ["orthostatic hypotension", "dizziness", "falls", "vital signs", "safety"],
      },
      {
        id: "vs-sepsis-screen",
        title: "Sepsis Screening — SIRS Criteria",
        situation: "Patient meets SIRS criteria; sepsis screening initiated.",
        example:
          "1400: During routine assessment, patient noted to meet SIRS criteria. Assessment findings: Temperature 38.6°C (101.5°F) (tympanic); HR 108 bpm; RR 22 breaths/min; WBC 14,200/mm³ per morning labs (bands 12%). Two or more SIRS criteria met — sepsis protocol activated per facility policy at 1405. Source of infection suspected: foley catheter in situ since admission (day 5); urine cloudy and malodorous on assessment. BP 98/60 mmHg (baseline 130/80 mmHg); SpO₂ 94% on 2L NC, increased to 4L NC → SpO₂ 97%. Rapid IV access: 18-gauge left antecubital. Blood cultures ×2 drawn from separate peripheral sites before antibiotic administration. Urinalysis and urine culture obtained via foley catheter. Lactate level drawn. CBC, BMP, CMP ordered. Broad-spectrum antibiotics ordered: ceftriaxone 1 g IV per order administered at 1420. NS 30 mL/kg bolus initiated. Rapid Response Team and attending MD [Name] notified at 1406. ICU consult placed. Continuous monitoring initiated. Family notified at 1415.",
        keyElements: [
          "SIRS criteria met — listed individually",
          "Protocol activation time",
          "Suspected source of infection",
          "Cultures before antibiotics",
          "IV fluid resuscitation volume",
          "Antibiotic administration with time",
          "Lactate ordered",
          "RRT and provider notification",
          "ICU consult",
        ],
        tags: ["sepsis", "SIRS", "infection", "protocol", "rapid response"],
      },
      {
        id: "vs-hypothermia",
        title: "Hypothermia Assessment",
        situation: "Patient presents with subnormal temperature requiring intervention.",
        example:
          "0200: Patient's temperature obtained during routine vital signs: 35.0°C (95.0°F) (rectal). Mild hypothermia identified. Patient awake but lethargic, oriented ×2 (person and place only). Skin cool and pale to touch; no shivering currently. BP 100/62 mmHg, HR 56 bpm (bradycardia), RR 14 breaths/min, SpO₂ 94% on room air — oxygen applied 4L NC → SpO₂ 97%. History: patient returned from 3-hour surgical procedure (abdominal surgery) 4 hours ago; intraoperative hypothermia documented in OR record. Warming interventions initiated: passive rewarming — additional blankets applied; active external rewarming — forced-air warming blanket (Bair Hugger) applied to upper body; warm IV fluids: NS warmed to 40°C infusing per order. Head covered with warm towel. Cardiac monitoring applied — no dysrhythmias noted currently. MD [Name] notified at 0205. Repeat temperature at 0230: 35.8°C (96.4°F) — improving. Will continue to monitor q30 minutes.",
        keyElements: [
          "Temperature route (rectal for accuracy)",
          "Classification of hypothermia severity",
          "Associated vital sign changes",
          "Neurological status",
          "Contributing history",
          "Passive and active warming measures",
          "Cardiac monitoring for dysrhythmias",
          "Trending temperatures",
        ],
        tags: ["hypothermia", "temperature", "post-op", "warming", "monitoring"],
      },
      {
        id: "vs-hypertensive-urgency",
        title: "Hypertensive Urgency — Reassessment",
        situation: "Monitoring blood pressure after antihypertensive administration.",
        example:
          "1500: Blood pressure reassessment following hydralazine 10 mg IV administered at 1430 for BP 204/118 mmHg. Serial BP readings post-administration: 1445 — BP 192/110 mmHg; 1500 — BP 178/102 mmHg; 1515 — BP 162/96 mmHg; 1530 — BP 148/90 mmHg. HR stable at 84–88 bpm throughout monitoring period. Patient denies chest pain, shortness of breath, visual disturbances, or severe headache at this time. Neurological status intact — alert and oriented ×4; no focal neurological deficits. No evidence of end-organ damage at this time: no chest pain, equal bilateral breath sounds, urine output 45 mL past hour, no new neurological findings. MD [Name] updated at 1530 regarding BP trend. Orders received: continue current antihypertensive regimen and reassess BP in 1 hour. Patient instructed on importance of compliance with antihypertensive medications.",
        keyElements: [
          "Baseline BP before intervention",
          "Medication name, dose, route, and time",
          "Serial BP measurements with times",
          "End-organ damage assessment",
          "Neurological status",
          "Provider update",
          "Updated orders",
          "Patient education",
        ],
        tags: ["hypertension", "blood pressure", "medication monitoring", "urgent"],
      },
      {
        id: "vs-o2-desaturation",
        title: "Oxygen Desaturation Event",
        situation: "Pulse oximetry alarm triggered for dropping SpO₂.",
        example:
          "0145: SpO₂ alarm at 88% (down from 96% at 0100 assessment). Patient found supine, somnolent but arousable with sternal rub. Snoring respirations noted. Airway: partial obstruction from tongue. Patient repositioned to left lateral position — SpO₂ improved to 90%. Jaw thrust maneuver applied — SpO₂ improved to 93%. Oxygen escalated from 2L NC to 4L NC — SpO₂ 95% within 2 minutes. RR 10 breaths/min (shallow). Patient is 6 hours post-op from laparoscopic cholecystectomy; received hydromorphone 1 mg IV at 0100 per PRN order. Naloxone 0.4 mg IV administered at 0148 per standing opioid reversal order. Patient became more alert and conversant within 4 minutes; SpO₂ 97% on 4L NC. RR improved to 16 breaths/min. Surgeon Dr. [Name] and anesthesiology [Name] notified at 0150. Continuous pulse oximetry with waveform monitoring maintained. PCA hold placed per order. Head of bed elevated 30°. Will assess q15 minutes per order.",
        keyElements: [
          "SpO2 reading and baseline comparison",
          "Patient's level of consciousness",
          "Airway management steps",
          "Progressive oxygen escalation",
          "Contributing medications identified",
          "Reversal agent administered with time",
          "Response to intervention",
          "Provider notification",
          "Ongoing monitoring plan",
        ],
        tags: ["oxygen desaturation", "opioid", "naloxone", "post-op", "airway"],
      },
      {
        id: "vs-pain-vitals",
        title: "Vital Signs During Acute Pain",
        situation: "Documenting vital sign changes associated with acute pain episode.",
        example:
          "1630: Patient with known renal colic reports sudden onset of right flank pain rated 9/10. Vital signs during acute pain: BP 168/96 mmHg (baseline 122/78 mmHg), HR 112 bpm (baseline 76 bpm), RR 24 breaths/min (labored), SpO₂ 97% on room air, T 98.8°F. Patient writhing in bed, unable to find position of comfort, diaphoretic. Pain onset 10 minutes ago, colicky and waxing/waning, radiating to right groin. No urinary symptoms reported. Last void 2 hours ago; urine output adequate. Urinalysis obtained — gross hematuria noted. Ketorolac 30 mg IV administered at 1635 per PRN order. Morphine 4 mg IV administered at 1640 per protocol (pain ≥ 8/10). IV fluids increased per standing order. Heating pad declined by patient. Pain reassessment at 1710: 5/10, more tolerable; BP 138/84 mmHg, HR 88 bpm. MD [Name] notified at 1635 — urological consult placed. CT abdomen/pelvis ordered.",
        keyElements: [
          "Vital sign changes from baseline during pain",
          "Pain characteristics (PQRST)",
          "Non-verbal pain indicators",
          "Urinalysis results",
          "Medications given with times",
          "Reassessment after intervention",
          "Provider notification",
          "Diagnostic workup ordered",
        ],
        tags: ["pain", "renal colic", "vital signs", "kidney stone", "acute pain"],
      },
      {
        id: "vs-postprocedure",
        title: "Post-Procedure Vital Signs Monitoring",
        situation: "Monitoring vital signs following bedside procedure.",
        example:
          "1300: Thoracentesis completed by Dr. [Name] at 1255 — 850 mL of straw-colored pleural fluid removed from left pleural space without complications during procedure. Post-procedure monitoring initiated. Vital signs q15 minutes ×4, then q30 minutes ×2:\n1300 — BP 124/76 mmHg, HR 82 bpm, RR 18 breaths/min, SpO₂ 96% on 2L NC (improved from 92% pre-procedure).\n1315 — BP 122/74 mmHg, HR 80 bpm, RR 16 breaths/min, SpO₂ 97%.\n1330 — BP 120/72 mmHg, HR 78 bpm, RR 16 breaths/min, SpO₂ 97%.\n1345 — BP 118/70 mmHg, HR 76 bpm, RR 16 breaths/min, SpO₂ 98% — patient denies pain, dyspnea, or dizziness. Lung sounds improved: bilateral air entry now audible at left base (diminished pre-procedure). Puncture site assessed: small dry dressing in place, no bleeding or subcutaneous emphysema palpated. Chest X-ray ordered post-procedure — results pending. Patient tolerated procedure well; resting comfortably in semi-Fowler's position.",
        keyElements: [
          "Procedure name and completion time",
          "Amount and character of fluid removed",
          "Monitoring frequency schedule",
          "Serial vital signs with times",
          "SpO2 improvement from baseline",
          "Lung sound comparison",
          "Puncture site assessment",
          "Post-procedure imaging",
        ],
        tags: ["thoracentesis", "post-procedure", "vital signs", "monitoring", "pleural effusion"],
      },
      {
        id: "vs-neurological-vitals",
        title: "Neurological Vital Signs — Cushing's Triad Alert",
        situation: "Vital sign pattern suggesting increased intracranial pressure.",
        example:
          "0500: Vital signs obtained during q1h neurological checks per post-craniotomy protocol. Concerning trend identified — Cushing's triad developing: BP 190/52 mmHg (widening pulse pressure; baseline 128/78 mmHg), HR 44 bpm (bradycardia; baseline 72 bpm), RR 8 breaths/min (irregular pattern with apneic periods). Patient's GCS declining: current GCS 8 (E2V2M4) vs. GCS 14 at 0300. Left pupil 6 mm, sluggish response (right pupil 3 mm, brisk — anisocoria NEW). Patient does not follow commands; moaning to pain only. Neurosurgeon Dr. [Name] called STAT at 0502. Rapid Response Team activated. Head of bed elevated 30°. Oxygen via 100% NRB mask applied. IV access confirmed patent ×2 large-bore. Mannitol 1 g/kg IV ready per standing order awaiting physician order confirmation. CT head ordered STAT. OR notified of potential emergent return to OR. Family notified at 0510.",
        keyElements: [
          "Cushing's triad components identified",
          "Trend from previous readings",
          "GCS comparison",
          "Pupil changes — new findings",
          "STAT physician notification",
          "Immediate neuroprotective interventions",
          "Imaging ordered",
          "OR notification",
        ],
        tags: ["Cushing's triad", "ICP", "neuro", "post-craniotomy", "emergency"],
      },
      {
        id: "vs-pediatric-vitals",
        title: "Pediatric Vital Signs Assessment",
        situation: "Documenting age-appropriate vital signs for a 4-year-old patient.",
        example:
          "0900: Vital signs obtained for 4-year-old (weight 16 kg, height 102 cm). Age-appropriate ranges for reference: HR 80–120 bpm, RR 20–30 breaths/min, BP 90–110/55–75 mmHg, SpO₂ ≥95%. Assessment findings: T 37.1°C (98.8°F) (axillary), HR 98 bpm (regular, strong radial pulses bilaterally), RR 24 breaths/min (unlabored, no retractions), BP 96/60 mmHg (right arm, pediatric cuff confirmed correct size — cuff bladder covers ≥80% of arm circumference), SpO₂ 99% on room air. Child awake, alert, cooperative with caregiver present. Capillary refill <2 seconds bilaterally. Skin warm, well-perfused, no mottling. Child verbalized no pain; no non-verbal pain cues (FLACC score 0). Parent/guardian verbalized child is behaving 'normally.' All vital signs within age-appropriate normal limits. No acute distress noted.",
        keyElements: [
          "Age and weight documented",
          "Age-appropriate ranges stated for comparison",
          "All five vital signs with specifics",
          "Correct pediatric cuff size noted",
          "Capillary refill",
          "Pediatric pain scale used (FLACC)",
          "Parent/caregiver report",
        ],
        tags: ["pediatric", "vital signs", "assessment", "child", "age-appropriate"],
      },
    ],
  },
  {
    id: "pain-management",
    name: "Pain Management",
    description:
      "Documentation of pain assessments, interventions, and reassessments using standardized scales.",
    icon: "💊",
    examples: [
      {
        id: "pain-initial",
        title: "Initial Pain Assessment",
        situation:
          "Comprehensive pain assessment using the PQRST framework on admission or new pain complaint.",
        example:
          "1130: Patient reports new onset pain. Pain assessment completed using PQRST method: Provocation — pain worsens with deep breathing and movement, improves slightly with splinting incision site. Quality — described as sharp, stabbing. Region/Radiation — located at right upper quadrant, radiates to right shoulder. Severity — rated 7/10 on numeric pain scale (0–10). Timing — onset 45 minutes ago, constant with intermittent spikes. Patient alert, oriented ×4. Facial grimacing and guarding of abdomen noted. Vital signs: BP 140/88 mmHg, HR 94 bpm, RR 20 breaths/min. Morphine 2 mg IV administered at 1135 per order. Patient educated on use of pain scale and encouraged to report changes in pain. Repositioned to position of comfort; head of bed elevated 30°.",
        keyElements: [
          "PQRST framework",
          "Numeric pain scale",
          "Behavioral indicators",
          "Vital signs",
          "Intervention with time",
          "Patient education",
          "Non-pharmacological measures",
        ],
        tags: ["pain", "assessment", "PQRST", "abdominal pain"],
      },
      {
        id: "pain-reassessment",
        title: "Pain Reassessment After Intervention",
        situation:
          "Documenting effectiveness of pain medication 30–60 minutes after administration.",
        example:
          "1205: Pain reassessment 30 minutes following morphine 2 mg IV administration. Patient reports pain decreased from 7/10 to 3/10. Describes pain as 'still there but much more manageable.' No longer grimacing; appears more relaxed. Vital signs: BP 122/78 mmHg, HR 80 bpm, RR 16 breaths/min, SpO₂ 98% on room air. Respiratory status unchanged from baseline; no signs of opioid-related respiratory depression. Patient denies nausea, pruritus, or dizziness. Able to take a deeper breath without severe pain. Pain management plan discussed with patient; encouraged to request analgesia before pain becomes severe. Will continue to monitor.",
        keyElements: [
          "Time elapsed since intervention",
          "Before and after pain scores",
          "Patient's subjective response",
          "Behavioral indicators",
          "Safety monitoring (respiratory)",
          "Side effect assessment",
          "Patient education",
        ],
        tags: ["pain", "reassessment", "morphine", "opioid safety"],
      },
      {
        id: "pain-chronic",
        title: "Chronic Pain Management",
        situation:
          "Documenting assessment and management of a patient with chronic pain.",
        example:
          "0900: Patient with known chronic lower back pain (lumbar degenerative disc disease) reports current pain 5/10 on numeric scale, consistent with usual chronic pain level per patient report. Patient states pain is 'about the same as usual.' Using pain coping strategies as instructed: TENS unit applied to lower back ×20 minutes, warm compress applied, ambulated with walker for 15 minutes in hallway. Oxycodone 5 mg PO scheduled dose administered at 0900. Patient educated on non-pharmacological strategies. Pain goal per patient: 'to keep pain below 6 so I can do my PT.' Will reassess after physical therapy session.",
        keyElements: [
          "Chronic condition context",
          "Pain score vs. patient's baseline",
          "Non-pharmacological interventions",
          "Scheduled medication administration",
          "Patient's personal pain goal",
          "Reassessment plan",
        ],
        tags: ["chronic pain", "back pain", "non-pharmacological", "opioid"],
      },
      {
        id: "pain-neonatal",
        title: "Neonatal Pain Assessment",
        situation: "Assessing and documenting pain in a neonate using validated tool.",
        example:
          "1100: Pain assessment performed on 28-week gestational age neonate (day of life 5) following heel stick for blood glucose. NIPS (Neonatal Infant Pain Scale) scoring: Facial expression — 1 (grimacing); Cry — 2 (vigorous crying); Breathing pattern — 1 (change from baseline); Arms — 1 (flexed/extended); Legs — 1 (flexed/extended); State of arousal — 2 (awake/alert). Total NIPS score: 8/10 — significant pain. Non-pharmacological comfort measures initiated immediately: kangaroo/skin-to-skin care with mother (positioned per NICU protocol), non-nutritive sucking with pacifier and sucrose 24% 0.1 mL oral solution administered per order. Swaddling and containment positioning provided. Reassessment at 15 minutes: NIPS score reduced to 2/10. Neonate settled with sucking behavior; color improved (pink); HR decreased from 168 bpm to 142 bpm; RR 42 breaths/min. Neonatology team notified of score and response. Documentation entered in EMR.",
        keyElements: [
          "Gestational age and day of life",
          "Validated neonatal pain tool (NIPS)",
          "Score with individual components",
          "Non-pharmacological interventions",
          "Sucrose administration",
          "Reassessment score",
          "Physiological response documented",
        ],
        tags: ["neonatal", "pain", "NIPS", "NICU", "non-pharmacological"],
      },
      {
        id: "pain-cognitive-impairment",
        title: "Pain Assessment in Cognitively Impaired Patient",
        situation: "Assessing pain in a patient who cannot self-report.",
        example:
          "1430: Patient with advanced dementia (unable to self-report pain) assessed using PAINAD (Pain Assessment in Advanced Dementia) tool. Patient noted grimacing and resisting care during repositioning. PAINAD components: Breathing — 0 (normal); Negative vocalization — 1 (occasional moaning); Facial expression — 2 (frightened expression); Body language — 1 (tense); Consolability — 1 (distracted by voice/touch). Total PAINAD score: 5/10 — moderate pain. Patient's behavioral baseline reviewed — no grimacing noted during this morning's care per nursing note. Acetaminophen 650 mg PO administered at 1435 per scheduled order. Non-pharmacological measures: repositioned to right side with pillow support; gentle ROM assessment of hips revealed resistance and grimacing with right hip flexion (right hip replacement 2 weeks ago). Orthopaedic surgical team notified. Reassessment PAINAD score at 1530: 2/10 — improved.",
        keyElements: [
          "Inability to self-report documented",
          "Validated observational tool (PAINAD)",
          "Individual component scores",
          "Baseline behavioral comparison",
          "Pharmacological intervention with time",
          "Non-pharmacological measures",
          "Source of pain investigation",
          "Reassessment score",
        ],
        tags: ["dementia", "pain assessment", "PAINAD", "cognitive impairment", "non-verbal"],
      },
      {
        id: "pain-pca",
        title: "Patient-Controlled Analgesia (PCA) Monitoring",
        situation: "Documenting PCA usage, effectiveness, and safety monitoring.",
        example:
          "1200: PCA monitoring completed. Patient 16 hours post-thoracotomy using morphine PCA: dose 1 mg, lockout interval 8 minutes, 4-hour limit 24 mg. PCA pump data reviewed: demands in past 4 hours — 18 attempts, 14 delivered doses, 14 mg morphine delivered (within 4-hour limit). Pain at rest 3/10; pain with deep breathing/coughing 6/10. Patient encouraged to use PCA 10–15 minutes before planned activity or breathing exercises. Sedation scale: 1 (awake and alert — no sedation). RR 14 breaths/min. SpO₂ 97% on 2L NC. No pruritus, nausea, or urinary retention reported. IV site patent without infiltration or phlebitis. PCA button within patient reach; patient demonstrates correct technique. Safety check: PCA line free of piggybacks; anti-siphon valve in place. Incentive spirometry completed ×10 breaths at 1 L volume. Respiratory therapy at bedside for breathing exercises. PCA teaching reinforced — patient verbalized understanding.",
        keyElements: [
          "PCA settings documented",
          "Demands vs. deliveries",
          "Total dose in period",
          "Pain scores at rest and with activity",
          "Sedation level assessment",
          "Respiratory monitoring",
          "Safety checks",
          "Teaching and technique",
        ],
        tags: ["PCA", "patient-controlled analgesia", "morphine", "post-op", "pain management"],
      },
      {
        id: "pain-procedural",
        title: "Procedural Pain Management",
        situation: "Managing and documenting pain during a painful bedside procedure.",
        example:
          "1500: Chest tube insertion procedure for left pneumothorax (spontaneous). Pre-procedure pain baseline: 4/10 left-sided pleuritic chest pain. Informed consent obtained; procedure explained to patient. Pre-procedural analgesia: lorazepam 1 mg IV administered at 1455 for anxiolysis; lidocaine 1% 10 mL injected subcutaneously at procedural site by physician at 1505 — patient reports burning then numbness at site. During procedure: patient reported pain 6/10 at time of trocar insertion despite local anesthesia. Fentanyl 50 mcg IV administered at 1508 per acute pain order. Patient encouraged with relaxation breathing. Chest tube (28 Fr) successfully placed in left 4th intercostal space midaxillary line at 1512; connected to water-seal drainage system. Post-procedure assessment: pain 3/10. BP 128/76 mmHg, HR 82 bpm, SpO₂ improving to 96% from 89%. Breath sounds audible at left base (absent pre-procedure). Patient resting comfortably. Chest X-ray ordered to confirm placement.",
        keyElements: [
          "Pre-procedure baseline pain",
          "Pre-procedure medications with times",
          "Local anesthesia details",
          "Patient's pain report during procedure",
          "Procedural analgesia given",
          "Procedure completion time",
          "Post-procedure reassessment",
          "Physiological improvement documented",
        ],
        tags: ["procedural pain", "chest tube", "fentanyl", "anxiolysis", "pneumothorax"],
      },
      {
        id: "pain-neuropathic",
        title: "Neuropathic Pain Assessment",
        situation: "Documenting neuropathic pain characteristics and management.",
        example:
          "1000: Patient with diabetic peripheral neuropathy reports bilateral lower extremity pain. Pain described as burning, shooting, and electric shock-like sensations from mid-calf to feet bilaterally; rated 7/10 on NRS. Reports symptoms worse at night, interfering with sleep for past 3 months — averaging 4 hours sleep per night. Hyperalgesia and allodynia present: light touch from sheet on feet reported as 'excruciating.' Denies relief from OTC analgesics. Current gabapentin 300 mg TID — initiated 2 weeks ago. Monofilament testing (Semmes-Weinstein): unable to detect 10-gram monofilament at plantar surface bilaterally. Vibration sense absent at bilateral great toes. Lower extremity skin assessment: dry, cracked heels bilaterally; no open wounds; no hair on distal lower legs; skin cool to mid-calf. Podiatry referral placed. Gabapentin increase discussed with endocrinology — dose titration ordered. Sleep hygiene education provided. Tricyclic antidepressant consideration per physician discussion documented.",
        keyElements: [
          "Neuropathic pain descriptors",
          "Functional impact (sleep, ADLs)",
          "Allodynia and hyperalgesia assessment",
          "Monofilament and vibration testing",
          "Skin assessment of affected areas",
          "Current medication and response",
          "Specialist referrals",
          "Patient education",
        ],
        tags: ["neuropathic pain", "diabetes", "peripheral neuropathy", "gabapentin", "assessment"],
      },
      {
        id: "pain-pediatric",
        title: "Pediatric Pain Assessment — FACES Scale",
        situation: "Using age-appropriate pain scale for a 6-year-old child.",
        example:
          "1400: Pain assessment for 6-year-old (25 kg) admitted with appendicitis, post-appendectomy day 1. Wong-Baker FACES Pain Rating Scale used — child points to face 3 (hurts even more) correlating to 6/10 on adult scale. Pain described by child as 'owie in my tummy.' Pain location: right lower quadrant surgical site, worse with movement. FLACC observation: Face 1, Legs 1, Activity 1, Cry 1, Consolability 0 — total 4/10 (consistent with child's self-report). Last analgesic: ketorolac 10 mg IV at 1100 — effectiveness per parent 'helped a little.' Child currently crying, holding abdomen, reluctant to reposition. Oxycodone 2.5 mg PO liquid (0.1 mg/kg dose) administered at 1405 per weight-based order. Parent educated on medication and to anticipate 30-minute onset. Repositioned to position of comfort. Distraction: tablet with favorite cartoon provided. Reassessment at 1445: FACES score 1 (hurts a little bit), FLACC 1 — significant improvement. Child resting quietly with parent at bedside.",
        keyElements: [
          "Age-appropriate scale (FACES)",
          "Behavioral scale (FLACC) for validation",
          "Weight-based dosing documented",
          "Preceding analgesic and effectiveness",
          "Non-pharmacological interventions",
          "Parent education",
          "Reassessment with improvement",
        ],
        tags: ["pediatric pain", "FACES scale", "FLACC", "child", "appendicitis"],
      },
      {
        id: "pain-sickle-cell",
        title: "Sickle Cell Vaso-occlusive Crisis Pain",
        situation: "Documenting acute pain crisis management in sickle cell disease.",
        example:
          "0800: Patient with known sickle cell disease (HbSS) presenting in vaso-occlusive crisis (VOC). Pain score on admission 10/10; location bilateral lower extremities, hips, and lower back. Pain described as 'deep, achy, crushing.' Patient pale, diaphoretic, unable to ambulate. Per patient's personal pain management plan on file: morphine IV preferred, heating pads to extremities. IV access established ×2 (18-gauge bilateral forearm). Initial morphine 4 mg IV administered at 0810 per acute pain order. Reassessment at 0840: pain 8/10. Morphine 2 mg IV administered at 0840 (q30 minute PRN). Hydroxyurea compliance verified — patient states has been taking regularly. CBC, reticulocyte count, BMP, type and screen drawn. IV fluid NS at 150 mL/hr per order. Heating pads applied to bilateral lower extremities per patient preference. Hematology team notified; pain management team consulted for PCA initiation. Reassessment at 0900: pain 6/10, remains distressed. PCA initiated at 0910.",
        keyElements: [
          "Disease type documented",
          "Pain characteristics of VOC",
          "Patient's personal pain plan referenced",
          "Sequential analgesic administration with times",
          "Reassessment between doses",
          "IV fluids",
          "Lab work",
          "Specialist consultation",
        ],
        tags: ["sickle cell", "vaso-occlusive crisis", "acute pain", "morphine", "hematology"],
      },
      {
        id: "pain-post-epidural",
        title: "Epidural Analgesia Monitoring",
        situation: "Monitoring patient receiving epidural analgesia for pain management.",
        example:
          "0600: Epidural analgesia assessment performed — continuous epidural infusion of bupivacaine 0.125%/fentanyl 2 mcg/mL at 8 mL/hr via lumbar epidural catheter (placed by anesthesiology at 0400, catheter secured with Tegaderm, insertion site intact — no redness, drainage, or swelling). Pain assessment: 2/10 at rest, 4/10 with movement — patient satisfied with pain control. Sensory level assessed with ice: bilateral sensory block at T10 level. Motor assessment: modified Bromage Scale 0 — no motor block; patient able to flex knees and lift legs bilaterally. Pruritus reported — mild (2/10), managed with diphenhydramine 25 mg IV per order. No nausea. BP 118/72 mmHg, HR 74 bpm (no hypotension — common epidural side effect). RR 14 breaths/min, SpO₂ 98%. Patient positioned with head of bed 30°. Call light within reach. Patient reminded to call before attempting to stand given epidural in situ.",
        keyElements: [
          "Infusion rate and solution",
          "Catheter site assessment",
          "Pain scores at rest and with movement",
          "Sensory level assessment",
          "Motor block assessment (Bromage)",
          "Common side effects assessed",
          "Vital signs with focus on hypotension",
          "Safety instructions",
        ],
        tags: ["epidural", "analgesia", "bupivacaine", "post-op", "pain management"],
      },
      {
        id: "pain-palliative",
        title: "Palliative Pain Management",
        situation: "Documenting comfort-focused pain management in palliative care setting.",
        example:
          "1600: Comfort care pain assessment for patient with end-stage pancreatic cancer. Patient grimacing and moaning at rest; PAINAD score 7/10 (unable to self-report verbally since this morning). Family at bedside reports patient was requesting pain relief earlier today but now unresponsive. Palliative care nurse [Name] called to bedside. Scheduled morphine 10 mg SQ q4h last administered at 1400; next due 1800. Comfort care goal: pain score ≤ 3. Morphine 5 mg SQ administered now per breakthrough PRN order for uncontrolled pain. Ongoing scheduled infusion: morphine 30 mg/24hr SQ infusion via butterfly needle (site right outer arm, intact). Positioning: repositioned to right lateral position with pillow support; mouth care performed; lips moistened. Glycopyrrolate 0.2 mg SQ administered for secretion management. Family provided emotional support; chaplain presence requested by family. Reassessment at 1640: PAINAD 3/10 — patient appears more settled, facial expression relaxed. Family verbalized satisfaction with comfort measures.",
        keyElements: [
          "Comfort-focused goals stated",
          "Observational tool in non-verbal patient",
          "Scheduled and breakthrough dosing",
          "Route and infusion details",
          "Non-pharmacological comfort measures",
          "Symptom management (secretions)",
          "Family support and spiritual care",
          "Reassessment",
        ],
        tags: ["palliative care", "comfort care", "morphine", "end-of-life", "pain management"],
      },
      {
        id: "pain-postpartum",
        title: "Postpartum Pain Management",
        situation: "Documenting pain assessment and management following vaginal delivery.",
        example:
          "1000: Postpartum pain assessment — patient 12 hours post-vaginal delivery with 2nd degree perineal laceration repair. Pain 5/10, described as perineal burning and uterine cramping (consistent with expected postpartum findings). Uterine fundus: firm, midline at umbilicus, brisk lochia rubra (pad saturated in 1 hour — within normal limits). Perineum: moderate edema, ecchymosis without hematoma formation; suture line intact without gaping. Ice pack applied to perineum for 20 minutes (removes for 10 minutes per instruction). Patient voided 300 mL clear yellow urine spontaneously. Ibuprofen 600 mg PO administered with food at 1005 per scheduled order. Patient educated on multimodal pain management: alternating ibuprofen and acetaminophen schedule, ice/heat for perineum, sitz bath technique, peri-bottle use, stool softener importance. Patient verbalizes understanding. Will reassess pain in 60 minutes after medication.",
        keyElements: [
          "Hours post-delivery",
          "Pain characteristics related to delivery",
          "Uterine assessment",
          "Lochia assessment",
          "Perineal assessment",
          "Non-pharmacological measures",
          "Multimodal analgesic plan",
          "Patient education",
        ],
        tags: ["postpartum", "perineal pain", "uterine cramping", "ibuprofen", "vaginal delivery"],
      },
    ],
  },
  {
    id: "medication-administration",
    name: "Medication Administration",
    description:
      "Documentation of medication administration, patient education, and adverse reactions.",
    icon: "💉",
    examples: [
      {
        id: "med-routine-iv",
        title: "IV Antibiotic Administration",
        situation:
          "Routine intravenous antibiotic administration with patient monitoring.",
        example:
          "1400: Vancomycin 1.25 g IV administered in 250 mL NS over 90 minutes via right forearm peripheral IV (20-gauge catheter, insertion date 3/18, site without redness, swelling, or tenderness). Two patient identifiers verified (name and date of birth). Allergy band checked — NKDA confirmed. Medication label verified against MAR: correct medication, dose, route, time, and patient. Pre-infusion vital signs: BP 124/78 mmHg, HR 76 bpm. Patient educated on signs of infusion reaction including flushing, rash, or difficulty breathing, and instructed to notify nurse immediately. Infusion started at 1405. Patient monitored at 15-minute intervals during infusion. No adverse reactions noted. Post-infusion vital signs at 1540: BP 120/76 mmHg, HR 74 bpm. Vancomycin trough level to be drawn at 1730 per pharmacist recommendation.",
        keyElements: [
          "Patient identifiers and allergy check",
          "5 Rights of medication administration",
          "IV site assessment",
          "Pre/post vital signs",
          "Patient education on side effects",
          "Monitoring frequency",
          "Lab draw scheduled",
        ],
        tags: ["IV", "antibiotic", "vancomycin", "infusion", "safety"],
      },
      {
        id: "med-insulin",
        title: "Insulin Administration",
        situation:
          "Subcutaneous insulin administration following blood glucose check.",
        example:
          "0755: Fingerstick blood glucose 218 mg/dL per glucometer (calibrated, QC within range). Patient identifiers confirmed ×2. Per sliding scale insulin order and carbohydrate intake for breakfast (45 g carbohydrates consumed): Regular insulin 4 units subcutaneous administered to right upper outer arm at 0800. Two-nurse verification completed per facility policy with RN [Name]. Injection site free of lipohypertrophy, bruising, or active infection. Patient educated on hypoglycemia symptoms: shakiness, sweating, confusion, headache. Patient to call for assistance before ambulating. Next scheduled fingerstick glucose at 1100.",
        keyElements: [
          "Glucose reading with meter information",
          "Dose calculation rationale",
          "Two-nurse verification",
          "Injection site assessment",
          "Patient education on hypoglycemia",
          "Next monitoring time",
        ],
        tags: ["insulin", "diabetes", "glucose", "subcutaneous", "safety"],
      },
      {
        id: "med-adverse-reaction",
        title: "Adverse Medication Reaction",
        situation:
          "Patient develops an adverse reaction during medication administration.",
        example:
          "1510: Approximately 10 minutes into IV ampicillin-sulbactam infusion, patient reported sudden onset of generalized urticaria with pruritus and throat tightness. Infusion immediately stopped at 1512. Assessment: diffuse urticarial rash noted across chest, abdomen, and bilateral upper arms; no angioedema visualized; SpO₂ 97% on room air (baseline 99%); BP 96/58 mmHg (baseline 124/80 mmHg); HR 110 bpm; patient anxious and distressed, throat tightness reported (rates 4/10). Rapid Response Team activated at 1513. Epinephrine 0.3 mg IM (0.3 mL of 1:1000 solution) administered to left outer thigh at 1514 per standing orders. Oxygen applied at 6L via face mask. MD [Name] arrived 1516. Diphenhydramine 50 mg IV and methylprednisolone 125 mg IV administered per orders. IV fluid bolus 1L NS initiated. Allergy to penicillin-class antibiotics documented in EMR and allergy band applied. Family notified at 1530. Patient monitored continuously; symptoms improving at 1545.",
        keyElements: [
          "Exact time of reaction onset",
          "Infusion stopped immediately",
          "Full symptom description",
          "Baseline comparison",
          "RRT activation time",
          "Interventions in chronological order",
          "Allergy documentation",
          "Family notification",
        ],
        tags: [
          "adverse reaction",
          "anaphylaxis",
          "allergy",
          "emergency",
          "rapid response",
        ],
      },
      {
        id: "med-blood-transfusion",
        title: "Blood Transfusion Administration",
        situation: "Initiating and monitoring a packed red blood cell transfusion.",
        example:
          "1000: Pre-transfusion assessment completed. Patient with hemoglobin 6.8 g/dL (symptomatic anemia — fatigue, pallor, exertional dyspnea). Typed and crossmatched for 2 units PRBCs. Informed consent obtained and signed. Pre-transfusion vital signs: BP 110/70 mmHg, HR 102 bpm, RR 18 breaths/min, T 37.0°C, SpO₂ 94% on room air. Two-nurse verification completed with RN [Name]: blood unit #AF12345, type A+, expiration 2026-04-10, patient blood type A+ (matching). Patient identifiers verified ×2 (name and DOB) against blood bank tag and patient wristband. Unit 1 of 2 PRBCs initiated at 1010 via 18-gauge right AC at 100 mL/hr. Monitoring: 15 minutes post-initiation vital signs at 1025: BP 112/72 mmHg, HR 98 bpm, T 37.1°C, SpO₂ 95% — no transfusion reaction symptoms (no fever, chills, urticaria, back pain, or chest pain). Patient educated on signs to report. Transfusion completed at 1310 (300 mL over 3 hours). Post-transfusion vital signs: BP 116/74 mmHg, HR 88 bpm, SpO₂ 97%. IV tubing flushed with NS. Hemoglobin/hematocrit to be rechecked in 4 hours per order.",
        keyElements: [
          "Pre-transfusion hemoglobin",
          "Informed consent",
          "Two-nurse verification",
          "Blood unit ID and type matching",
          "Patient identifier verification",
          "15-minute monitoring vital signs",
          "Transfusion reaction assessment",
          "Post-transfusion vital signs",
          "Lab follow-up scheduled",
        ],
        tags: ["blood transfusion", "PRBC", "anemia", "transfusion reaction", "safety"],
      },
      {
        id: "med-anticoagulation",
        title: "Anticoagulation Administration — Heparin Drip",
        situation: "Monitoring and documenting IV heparin infusion for DVT treatment.",
        example:
          "0800: Heparin infusion monitoring — DVT protocol. Current aPTT result at 0600: 68 seconds (therapeutic range 60–100 seconds). Per weight-based heparin nomogram (patient weight 80 kg): current rate 1,200 units/hr — therapeutic, no rate adjustment needed. Heparin 25,000 units in 250 mL D5W infusing via infusion pump at 12 mL/hr; pump settings verified and double-checked with RN [Name]. IV site right antecubital — patent, no redness, swelling, or infiltration. Bleeding precautions reinforced: soft toothbrush, electric razor only, avoid IM injections; fall precautions in place (Morse score 60). Patient instructed to report any unusual bleeding or bruising. No current signs of bleeding: no hematuria, no blood in stool, no bruising, no epistaxis. Heparin drip line labeled with anticoagulant sticker per facility policy. Next aPTT due at 1200. Warfarin 5 mg PO administered at 0800 as ordered (heparin bridge therapy).",
        keyElements: [
          "Current aPTT with therapeutic range",
          "Weight-based nomogram reference",
          "Current rate and adjustment determination",
          "Infusion details and pump verification",
          "IV site assessment",
          "Bleeding precautions",
          "Bleeding assessment",
          "Next lab timing",
        ],
        tags: ["heparin", "anticoagulation", "DVT", "aPTT", "infusion safety"],
      },
      {
        id: "med-high-alert",
        title: "High-Alert Medication — Concentrated Electrolyte",
        situation: "Administering IV potassium replacement per critical lab value.",
        example:
          "1600: Critical lab value reported by laboratory: serum potassium 2.8 mEq/L (critical low). Patient on telemetry — cardiac rhythm assessed: sinus rhythm with frequent PVCs noted (new). MD [Name] notified at 1605 of critical potassium and new PVCs. Orders received: KCl 40 mEq IVPB in 100 mL NS over 4 hours via central venous catheter (patient has right subclavian triple-lumen catheter — port confirms dedicated for potassium replacement per facility policy; not to be infused peripherally). Two-nurse verification of KCl IVPB completed with RN [Name] per high-alert medication protocol. Patient identifiers verified ×2. Infusion initiated at 1620 at 25 mL/hr via infusion pump. Patient instructed on burning sensation that may occur (none reported). Cardiac monitoring continuous throughout infusion. Repeat potassium level to be drawn 2 hours post-infusion. Patient educated on potassium-rich foods to increase dietary intake.",
        keyElements: [
          "Critical lab value and notification",
          "ECG/telemetry findings",
          "High-alert medication policy cited",
          "Central line route required",
          "Two-nurse verification",
          "Pump settings and rate",
          "Continuous monitoring during infusion",
          "Repeat lab timing",
        ],
        tags: ["potassium", "high-alert medication", "electrolyte replacement", "KCl", "safety"],
      },
      {
        id: "med-chemotherapy-oral",
        title: "Oral Chemotherapy Administration",
        situation: "Administering and documenting oral chemotherapy with safety precautions.",
        example:
          "0900: Oral chemotherapy administration — capecitabine 1,500 mg PO (3 × 500 mg tablets) for breast cancer treatment (cycle 3, day 8 of 14-day treatment cycle). Two-nurse verification completed per oncology protocol with RN [Name]: correct medication, dose (based on BSA 1.7 m² — dose-verified with pharmacy calculation), patient, date (within cycle window), route. Patient identifiers verified ×2. PPE applied: gloves ×2 layers during handling per hazardous drug policy. Tablets administered directly to patient without crushing. Patient takes with 8 oz water after breakfast (currently completed). Patient reminded not to handle tablets directly (family not to handle). Medication waste: empty blister packs disposed of in chemotherapy waste container per facility policy. Side effect review completed with patient: hand-foot syndrome (current status: grade 1 — mild redness bilateral palms), mucositis (no oral sores today), nausea (mild, 1/10, managed with ondansetron PRN). Next CBC due Friday per oncologist order.",
        keyElements: [
          "Chemotherapy cycle and day",
          "BSA-based dose verification",
          "Two-nurse verification",
          "PPE during handling",
          "Side effect assessment with grading",
          "Waste disposal compliance",
          "Patient handling instructions",
          "Follow-up labs",
        ],
        tags: ["chemotherapy", "oral chemo", "capecitabine", "oncology", "hazardous drugs"],
      },
      {
        id: "med-controlled-substance",
        title: "Controlled Substance Waste Documentation",
        situation: "Documenting partial use and waste of a controlled substance.",
        example:
          "2200: PRN order for hydromorphone 1 mg IV for pain 6/10. Hydromorphone 2 mg/mL vial withdrawn from Pyxis (count verified on removal: 24 → 23). Dose required: 0.5 mL (1 mg). Waste performed at bedside with witness RN [Name] at 2202: 0.5 mL (1 mg) wasted into sharps container. Witness observed and co-signed waste in Pyxis and paper log per facility controlled substance policy. Hydromorphone 1 mg (0.5 mL) IV administered slowly over 2–3 minutes at 2205. Patient identifiers verified ×2 prior to administration. Pain reassessment at 2235: pain 2/10 (down from 6/10). Respiratory rate 14 breaths/min, SpO₂ 98%, sedation level 1 (awake and alert). No adverse effects reported. Pyxis count verified after administration. Controlled substance log completed in full.",
        keyElements: [
          "Dose ordered vs. dose available",
          "Count before and after withdrawal",
          "Waste amount and method",
          "Witness name and co-signature",
          "Administration time and route",
          "Pain reassessment with time",
          "Sedation and respiratory monitoring",
          "Log compliance",
        ],
        tags: ["controlled substance", "hydromorphone", "waste documentation", "opioid", "safety"],
      },
      {
        id: "med-medication-error",
        title: "Medication Error Discovery and Response",
        situation: "Discovering and responding to a medication error.",
        example:
          "1400: While preparing 1400 medications, discovered that lisinopril 10 mg was administered at 0800 in error — patient's medication had been changed to lisinopril 5 mg at 2300 last evening per MD order, but old MAR had not been updated in pharmacy system at time of 0800 administration by night nurse. Patient received lisinopril 10 mg PO instead of 5 mg. Immediate assessment: BP 102/62 mmHg (baseline 128/78 mmHg) — hypotension identified, may be related. HR 86 bpm, RR 16 breaths/min, SpO₂ 97%. Patient reports mild lightheadedness but denies syncope, chest pain, or dyspnea. Patient instructed to remain in bed. IV fluid bolus 250 mL NS initiated. MD [Name] notified immediately at 1402 of medication error and current vital signs. Orders received: hold lisinopril remainder of day, repeat BP q30 minutes, increase IV fluid rate. Charge nurse [Name] notified. Medication error incident report filed in safety reporting system. Pharmacy notified to reconcile MAR discrepancy. Family notified. MAR corrected.",
        keyElements: [
          "Error clearly described (what was ordered vs. given)",
          "Time of error identification",
          "Immediate patient assessment",
          "Potential effect on patient",
          "Immediate interventions",
          "Provider notification with time",
          "Incident report filed",
          "System correction completed",
        ],
        tags: ["medication error", "patient safety", "lisinopril", "incident report", "hypotension"],
      },
      {
        id: "med-eye-drops",
        title: "Ophthalmic Medication Administration",
        situation: "Administering prescribed eye drops with proper technique.",
        example:
          "0800: Ophthalmic medications administered per schedule. Patient identifiers verified ×2. Medication reconciliation: timolol 0.5% ophthalmic solution 1 drop right eye (OD) q12h for open-angle glaucoma, and prednisolone acetate 1% ophthalmic suspension 1 drop right eye (OD) q6h post-cataract surgery (post-op day 4). Administered in order: prednisolone acetate first (per pharmacist recommendation — steroid before beta-blocker). Technique documented: patient supine, head slightly tilted, lower conjunctival sac exposed; drop instilled into lower cul-de-sac without touching dropper to eye or periorbital tissues; nasolacrimal occlusion applied for 2 minutes; punctal occlusion prevented systemic absorption. Patient performed nasolacrimal occlusion correctly — demonstrated competency. Eye assessment: no discharge, redness minimal and improved from yesterday, no pain reported, vision described as 'a little blurry right after the drop' (expected, informed). Waited 5 minutes between medications per protocol. Patient's own eye drops stored in individual labeled container per facility policy.",
        keyElements: [
          "Eye specified (OD/OS/OU)",
          "Correct instillation order",
          "No-touch technique",
          "Nasolacrimal occlusion",
          "Eye assessment before and after",
          "Expected side effects discussed",
          "Patient competency demonstrated",
          "Storage compliance",
        ],
        tags: ["ophthalmic", "eye drops", "timolol", "prednisolone", "glaucoma"],
      },
      {
        id: "med-subcutaneous-injection",
        title: "Subcutaneous Injection Technique",
        situation: "Documenting subcutaneous injection with site rotation.",
        example:
          "2100: Enoxaparin (Lovenox) 40 mg subcutaneous injection administered for DVT prophylaxis. Patient identifiers verified ×2. Allergy confirmed: NKDA. MAR verified: correct medication, dose, route, time. Injection site selection: abdomen (right lower quadrant) per rotation schedule documented in EMR (last injection left lower quadrant at 2100 yesterday). Skin assessed at injection site: no bruising, induration, or redness. Technique: skin pinched and elevated, 45° angle insertion, air bubble not expelled (standard for enoxaparin — preserves full dose), did not aspirate, slow injection with 10-second hold before withdrawal, pressure applied for 10 seconds without rubbing (prevents bruising). Post-injection site: small drop of blood blotted; no significant bruising. Patient tolerated without complaint. Current anti-Xa level: 0.32 IU/mL (within therapeutic prophylaxis range 0.2–0.4 IU/mL) per yesterday's lab. Site rotation chart updated in EMR.",
        keyElements: [
          "Site selection with rotation documentation",
          "Site skin assessment pre-injection",
          "Technique specifics (angle, bubble, no aspiration)",
          "Post-injection pressure without rubbing",
          "Anti-Xa level if available",
          "Patient tolerance",
          "Rotation chart updated",
        ],
        tags: ["enoxaparin", "subcutaneous", "DVT prophylaxis", "injection technique", "anticoagulation"],
      },
      {
        id: "med-IV-push",
        title: "IV Push Medication Administration",
        situation: "Administering intravenous push medication with proper rate control.",
        example:
          "1200: Furosemide 40 mg IV push administered per order for pulmonary edema. Patient identifiers verified ×2. NKDA confirmed. MAR verified ×5 rights plus right reason (documented crackles, SpO₂ declining, +3 kg from admit weight). IV site assessment prior to administration: 20-gauge right antecubital catheter, no signs of infiltration, blood return confirmed with 5 mL NS flush. Furosemide 40 mg administered IV push over 2 minutes (per ISMP guidelines — too-rapid administration associated with ototoxicity; rate not to exceed 4 mg/minute). Patient monitored during push: no complaints of hearing change, tinnitus, or burning at site. Post-push: flushed IV line with 10 mL NS. Patient instructed that diuresis expected within 30–60 minutes; call light within reach; urinal at bedside; fall precautions reinforced. Pre-administration vital signs: BP 168/104 mmHg, SpO₂ 91% on 4L NC. Diuresis onset at 1245 — 500 mL urine output within first hour. Reassessment at 1300: BP 148/90 mmHg, SpO₂ 94% on 4L NC. Lung sounds reassessed — improved bilateral bases.",
        keyElements: [
          "5 rights plus right reason",
          "IV site assessment and flush before",
          "Administration rate and time (≤4 mg/min)",
          "Ototoxicity monitoring",
          "Post-flush",
          "Patient instructions for diuresis",
          "Pre/post vital signs comparison",
          "Diuretic response documented",
        ],
        tags: ["furosemide", "IV push", "diuretic", "pulmonary edema", "rate compliance"],
      },
      {
        id: "med-antibiotic-timing",
        title: "Time-Sensitive Antibiotic Administration",
        situation: "Documenting time-critical antibiotic initiation for sepsis protocol.",
        example:
          "1430: Sepsis protocol initiated at 1415 (refer to sepsis screening documentation). Time-sensitive antibiotic administration: order received at 1420 for cefepime 2 g IV in 100 mL NS over 30 minutes — STAT. Time from sepsis protocol activation to antibiotic administration: 15 minutes (within 1-hour bundle compliance window). Pre-administration: patient identifiers verified ×2; allergy — PCN allergy documented (rash); cephalosporin cross-reactivity risk discussed with MD [Name] at 1418 — MD confirmed cefepime appropriate given low cross-reactivity risk and severity of illness; patient informed and agreed. IV site: 18-gauge left antecubital — patent, no infiltration. Blood cultures ×2 confirmed drawn at 1416 (before antibiotic). Cefepime initiated at 1430. Patient monitored q10 minutes during infusion for allergy reaction: no urticaria, pruritus, or respiratory symptoms noted. Infusion completed at 1500. Time from blood cultures to antibiotic start: 14 minutes. Documented in sepsis bundle compliance tracking.",
        keyElements: [
          "Sepsis protocol reference",
          "Time-to-antibiotic measurement",
          "Allergy cross-reactivity discussion documented",
          "Blood cultures confirmed before antibiotics",
          "IV site assessment",
          "Monitoring during infusion",
          "Bundle compliance tracking",
        ],
        tags: ["sepsis", "antibiotics", "cefepime", "time-sensitive", "bundle compliance"],
      },
    ],
  },
  {
    id: "wound-care",
    name: "Wound Care & Skin Assessment",
    description:
      "Documentation of wound assessments, dressing changes, and skin integrity findings.",
    icon: "🩹",
    examples: [
      {
        id: "wound-surgical",
        title: "Surgical Wound Assessment",
        situation:
          "Post-operative wound assessment and dressing change documentation.",
        example:
          "1030: Surgical wound assessment and dressing change performed. Abdominal midline incision assessed: wound 12 cm in length, closed with staples (×14 staples intact and evenly spaced), well-approximated edges without dehiscence. Surrounding skin without erythema, warmth, or edema. No drainage noted on previous dressing. Wound bed pink and well-perfused. No signs of infection (no purulent drainage, no foul odor, no excessive erythema). Old dressing removed and discarded. Wound site cleansed with normal saline using sterile technique. Clean dry dressing applied. Patient tolerated procedure without distress; pain rated 3/10 during procedure, returned to 1/10 at rest following procedure. Patient instructed on wound care signs and symptoms requiring reporting: increased redness, warmth, swelling, drainage, or fever greater than 101°F. Patient verbalized understanding.",
        keyElements: [
          "Wound dimensions and closure type",
          "Approximation status",
          "Signs of infection assessment",
          "Drainage assessment",
          "Sterile technique notation",
          "Wound care performed",
          "Pain during procedure",
          "Patient education",
        ],
        tags: ["wound", "surgical", "post-op", "dressing change", "staples"],
      },
      {
        id: "wound-pressure-injury",
        title: "Pressure Injury Documentation",
        situation:
          "Assessment and documentation of a newly identified pressure injury.",
        example:
          "1400: Pressure injury identified on bilateral heel inspection during routine skin assessment. Right heel: Stage 2 pressure injury, 2.5 cm × 1.8 cm, shallow open area with pink/red wound bed, partial thickness skin loss; no slough or eschar noted; no tunneling or undermining; minimal serous drainage; surrounding skin intact without maceration. Left heel: Stage 1 pressure injury, approximately 4 cm × 3 cm area of non-blanchable erythema; skin intact; no open area; warm to touch. Photos obtained per facility protocol. Wound care nurse [Name] notified at 1415 and will assess tomorrow. Pressure injury reported to charge nurse and documented on facility incident tracking system. Bilateral heel protectors applied. Repositioning schedule q2h reinforced with patient and family. Foam overlay placed on mattress. Nutritional assessment ordered; dietitian consult placed. Wound prevention care plan updated. Family educated on pressure injury prevention, staging, and current treatment plan.",
        keyElements: [
          "Exact location",
          "Stage per NPIAP guidelines",
          "Dimensions",
          "Wound bed description",
          "Drainage amount and type",
          "Surrounding tissue",
          "Photo documentation",
          "Wound nurse notification",
          "Incident reporting",
          "Prevention interventions",
          "Family education",
        ],
        tags: [
          "pressure injury",
          "skin integrity",
          "wound",
          "prevention",
          "staging",
        ],
      },
      {
        id: "wound-skin-assessment",
        title: "Comprehensive Skin Assessment",
        situation:
          "Head-to-toe skin assessment on admission or shift assessment.",
        example:
          "0730: Head-to-toe skin assessment completed. Skin warm, dry, and intact without lesions, rashes, or areas of breakdown across scalp, face, neck, chest, abdomen, back, and all extremities. Mucous membranes moist and pink. No petechiae, ecchymosis, or jaundice noted. Bony prominences assessed: occiput, scapulae, sacrum, coccyx, bilateral trochanters, bilateral heels — all without redness or breakdown. Patient notes a well-healed surgical scar on right lower quadrant (approximately 4 cm, reports appendectomy 2012). One small bruise noted on left forearm (2 cm × 1.5 cm, yellow-green discoloration consistent with resolving bruise per patient report from IV removal 5 days ago). Pressure redistribution mattress in place. Repositioning completed; patient turned to left lateral position, pillows placed between knees and at back for support. Skin care completed: moisture barrier applied to perirectal area. Next repositioning due 0930.",
        keyElements: [
          "Systematic head-to-toe approach",
          "Bony prominence assessment",
          "Existing wounds or scars noted",
          "Bruising with plausible explanation",
          "Preventive measures in place",
          "Repositioning documented",
          "Next scheduled repositioning",
        ],
        tags: [
          "skin assessment",
          "admission",
          "pressure prevention",
          "documentation",
        ],
      },
      {
        id: "wound-dehiscence",
        title: "Wound Dehiscence",
        situation: "Documenting partial wound dehiscence discovered during assessment.",
        example:
          "1400: Surgical wound assessment — abdominal midline incision, post-op day 7. Upon removal of dressing, wound dehiscence noted: inferior 3 cm of 14 cm incision has separated; wound edges separated approximately 1 cm; wound base visible with moist granulation tissue; no bowel or organ evisceration; no purulent drainage or foul odor. Surrounding skin erythema 1 cm bilateral of wound margins. Patient reports noticing 'something felt different' when coughing this morning. Current vital signs: BP 124/78 mmHg, HR 88 bpm, T 37.4°C — no signs of systemic infection. Wound measured and photographed per protocol. Moist wound dressing (saline-moistened gauze) applied per wound care nurse order — wound kept moist and covered. General surgeon Dr. [Name] notified at 1410 of dehiscence — orders received for wet-to-damp dressing changes q8h. Wound care nurse [Name] notified and bedside consult scheduled for 1600. Patient instructed to avoid Valsalva maneuver; abdominal binder applied for support. Family instructed on wound care plan.",
        keyElements: [
          "Post-op day",
          "Dehiscence length and gap measurement",
          "Evisceration assessment",
          "Drainage and infection assessment",
          "Patient's subjective account",
          "Wound photographed",
          "Moist wound environment maintained",
          "Surgeon notification with time",
          "Wound care nurse consult",
        ],
        tags: ["dehiscence", "wound", "post-op", "surgical wound", "complication"],
      },
      {
        id: "wound-diabetic-foot",
        title: "Diabetic Foot Wound Assessment",
        situation: "Documenting a diabetic foot ulcer assessment and care.",
        example:
          "1000: Right plantar foot wound assessment — patient with type 2 diabetes, A1C 10.2% (last month). Wagner Grade 2 diabetic foot ulcer, plantar surface right 1st metatarsal head. Wound measurements: 2.8 cm × 2.1 cm × 0.5 cm depth. Wound bed: 70% granulation tissue (pink/red), 30% yellow slough at wound edges. No probe-to-bone noted. No tunneling or undermining identified. Drainage: moderate serous drainage. Wound margins: macerated 2 mm surrounding. Surrounding skin: no erythema, warmth, or edema beyond 1 cm of wound margin; ABI 0.72 (indicating mild arterial insufficiency — vascular surgery follow-up pending). Pedal pulses: right dorsalis pedis diminished, right posterior tibial diminished; left pulses 2+ bilaterally. Sensation: monofilament testing — right foot unable to detect 10g monofilament at 4 of 8 test sites. Total contact casting applied by podiatry for offloading (patient non-weight bearing to right foot). Wound cleansed with wound cleanser; selective debridement of slough per wound care nurse order; silver-impregnated foam dressing applied. Photos obtained. Wound care nurse and podiatry aware.",
        keyElements: [
          "Wagner grade classification",
          "3-dimensional wound measurement",
          "Wound bed tissue percentages",
          "Probe-to-bone assessment",
          "Vascular status (ABI, pulses)",
          "Sensation assessment",
          "Offloading device",
          "Debridement documentation",
          "Photography",
        ],
        tags: ["diabetic foot ulcer", "Wagner grade", "wound care", "offloading", "diabetes"],
      },
      {
        id: "wound-drain-management",
        title: "Surgical Drain Management",
        situation: "Documenting assessment and output from a Jackson-Pratt drain.",
        example:
          "0800: Jackson-Pratt (JP) drain #1 (right axilla post-mastectomy, post-op day 3) emptied and assessed. Output since last emptied at 2000 (12-hour output): 38 mL serosanguineous drainage (expected progression — was 65 mL first 12 hours post-op). Drainage character: slightly less blood-tinged than yesterday; no foul odor; no purulent material. Bulb emptied: squeezed and reconnected to maintain vacuum (patient demonstrated correct technique during evening teaching). Insertion site assessed: suture securing drain intact; skin around insertion site without erythema, induration, or drainage leakage. Drain tubing patent without kinking. Output recorded on I&O flow sheet. Cumulative 72-hour drain output: 189 mL serosanguineous. General criteria for drain removal discussed with patient: typically when output <30 mL over 24 hours for 2 consecutive days. Patient asking about drain removal timeline. Surgeon Dr. [Name] updated at morning rounds — will reassess for removal tomorrow if output continues to decrease. Drain site dressing changed; patient verbalizes drain care instructions.",
        keyElements: [
          "Drain location and post-op day",
          "12-hour output volume and character",
          "Vacuum restoration technique",
          "Insertion site assessment",
          "Cumulative output tracking",
          "Criteria for removal discussed",
          "Surgeon communication",
          "Patient education on drain care",
        ],
        tags: ["JP drain", "wound drain", "post-mastectomy", "surgical drain", "output"],
      },
      {
        id: "wound-negative-pressure",
        title: "Negative Pressure Wound Therapy (NPWT)",
        situation: "Managing and documenting a wound VAC (negative pressure wound therapy) dressing.",
        example:
          "1400: Wound VAC dressing change performed on right lower extremity wound (traumatic degloving injury, 12 cm × 8 cm wound area, wound care day 10). Wound care nurse [Name] present and performed dressing change; this nurse assisted and documented. Pre-procedure analgesia: morphine 4 mg IV at 1345 per PRN order (pain at 7/10 pre-procedure). Previous dressing intact; no leaks noted prior to removal. Dressing removed — foam adherent to wound bed in two areas; saline used to gently loosen adherent foam. Wound assessment: 85% granulation tissue, 15% fibrinous slough (improved from 60% granulation on day 7). Wound depth decreased from 3 cm to 1.8 cm (positive progression). No tunneling. Moderate serous drainage in canister (75 mL since last change 72 hours ago). Wound irrigated with 60 mL sterile NS. New Granufoam dressing applied; wound thoroughly sealed with transparent drape; new canister attached. VAC settings: 125 mmHg continuous. Seal tested — no audible air leak. Tubing secured. Pain post-procedure: 3/10.",
        keyElements: [
          "Wound location and size",
          "Pre-procedure analgesia",
          "Foam removal technique",
          "Wound assessment with comparison to previous",
          "Canister output volume",
          "Seal integrity",
          "VAC settings",
          "Post-procedure pain assessment",
        ],
        tags: ["NPWT", "wound VAC", "negative pressure", "wound healing", "dressing change"],
      },
      {
        id: "wound-fistula",
        title: "Enterocutaneous Fistula Management",
        situation: "Documenting assessment and management of an enterocutaneous fistula.",
        example:
          "0900: Enterocutaneous fistula (ECF) assessment — right abdominal wall, identified post-op day 14 following bowel surgery. Fistula output past 24 hours: 320 mL (low-output fistula — <500 mL/24h). Output character: green-tinged liquid with mild feculent odor (consistent with small bowel origin). Skin around fistula: moderate periwound erythema and maceration despite barrier cream — wound ostomy nurse [Name] present for assessment and pouch system adjustment. Previous ostomy pouch seal intact ×16 hours prior to this change. Wound ostomy nurse applied protective skin barrier ring (Eakin seal) and replaced with convex pouching system — improved seal achieved. IV nutrition: TPN infusing at 80 mL/hr per central line (nutrition support while bowel at rest). Patient's weight: 68 kg (down 2 kg from last week — malnutrition risk; dietitian notified). Gastroenterology team notified of increased periwound irritation. Skin photos obtained. Output recorded on fistula flow sheet.",
        keyElements: [
          "Fistula output volume and classification (high/low)",
          "Output character and suspected origin",
          "Periwound skin assessment",
          "WOCN nurse involvement",
          "Pouching system type",
          "Nutritional support",
          "Weight trend",
          "Specialist notification",
        ],
        tags: ["fistula", "wound ostomy", "TPN", "wound care", "post-op complication"],
      },
      {
        id: "wound-burn",
        title: "Burn Wound Assessment",
        situation: "Documenting burn wound assessment and initial wound care.",
        example:
          "1030: Burn wound assessment — patient with partial thickness burns to bilateral anterior lower legs following hot water scald injury (workplace incident). Total burn surface area (TBSA): approximately 9% (each lower leg anterior surface = 3.5% TBSA; bilateral = 7%; small areas anterior feet bilateral = 2%). Burns classified: superficial partial thickness (blistered, pink, moist, extremely painful — appropriate for area) bilateral anterior lower legs; deep partial thickness area 3 cm × 4 cm right medial ankle (pale, leathery appearance, decreased pain sensation — deeper injury). Parkland formula fluid resuscitation: weight 75 kg; first 24-hour fluid requirement = 4 mL × kg × %TBSA = 4 × 75 × 9 = 2,700 mL LR; half (1,350 mL) in first 8 hours from time of injury (1000), second half over next 16 hours. Current LR rate: 169 mL/hr. Foley catheter inserted for strict urine output monitoring — target 0.5–1 mL/kg/hr (37–75 mL/hr). Burn wound care: gentle cleansing with chlorhexidine solution; silver sulfadiazine cream applied to superficial partial thickness areas; mepitel one silicone dressing to deep partial thickness area. Burn surgery consult placed.",
        keyElements: [
          "TBSA calculated and documented",
          "Burn depth classification by area",
          "Parkland formula calculation",
          "IV fluid type and rate",
          "Urine output target",
          "Wound care products by burn depth",
          "Specialist consult",
        ],
        tags: ["burn", "TBSA", "Parkland formula", "partial thickness", "wound care"],
      },
      {
        id: "wound-stoma",
        title: "Ostomy Assessment and Pouch Change",
        situation: "Documenting colostomy assessment and routine pouch change.",
        example:
          "1100: Colostomy assessment and pouch change performed — descending colostomy created post sigmoid colectomy (post-op day 8). Stoma assessment: round, approximately 3 cm diameter; moist and beefy red (healthy); protrudes approximately 2 cm above skin surface; no retraction, prolapse, or hernia noted; slight edema compared to yesterday (expected at this post-op stage — patient counseled that edema will reduce over 6–8 weeks). Stoma output: formed brown stool visible in previous pouch (normal for descending colostomy location); gas noted on pouch removal. Periostomal skin: mild erythema 1 cm radius surrounding stoma base (contact dermatitis from previous adhesive); no denudation or breakdown. Skin barrier applied: Stomahesive paste to crease near stoma base; ConvaTec two-piece system with convex flange (size 45 mm, opening cut to 31 mm per sizing guide). Pouch snapped onto flange. Patient performed entire pouch change independently with nurse observing — first independent change (milestone). Patient expressed improved confidence. WOCN nurse notified of skin irritation — will review at scheduled visit tomorrow.",
        keyElements: [
          "Stoma color and viability",
          "Stoma dimensions and protrusion",
          "Stoma output character",
          "Periostomal skin assessment",
          "Skin barrier and pouching system details",
          "Patient self-care milestone",
          "WOCN nurse communication",
        ],
        tags: ["colostomy", "ostomy", "stoma", "WOCN", "patient education"],
      },
      {
        id: "wound-suture-removal",
        title: "Suture/Staple Removal",
        situation: "Documenting suture removal and wound status assessment.",
        example:
          "1300: Suture removal performed on right knee laceration repair (emergency department repair 10 days ago; 5 interrupted sutures with 3-0 nylon). Wound fully healed — sutures scheduled for removal at 10–14 days per plastic surgery follow-up plan. Assessment prior to removal: wound edges approximated ×100% length; no signs of dehiscence, infection, or inflammation; surrounding skin without warmth or tenderness. Suture removal technique: small curved scissors inserted under each suture knot, cut close to skin, suture withdrawn pulling toward wound line (to avoid dragging contaminated external portion through tissue). All 5 sutures removed intact and complete. Wound post-removal: fully approximated; no opening; steri-strips applied per protocol ×3 as additional support. Patient instructed to keep steri-strips in place until they fall off naturally; avoid soaking wound for 1 week; use sunscreen over scar for 6–12 months to minimize hyperpigmentation. Patient tolerated procedure without discomfort. Follow-up: no further wound appointments needed unless reopening, drainage, or redness develops.",
        keyElements: [
          "Number and type of sutures",
          "Days since placement",
          "Wound assessment before removal",
          "Proper removal technique described",
          "All sutures accounted for",
          "Post-removal reinforcement",
          "Patient education on scar care",
        ],
        tags: ["suture removal", "wound", "laceration", "steri-strips", "healing"],
      },
      {
        id: "wound-skin-tear",
        title: "Skin Tear Assessment and Management",
        situation: "Documenting management of a skin tear in an elderly patient.",
        example:
          "1500: Skin tear identified on left forearm during routine care — patient repositioned and arm contacted side rail. ISTAP Classification: Category 2 — partial skin loss with wound flap not viable to cover entire wound bed. Wound location: left forearm, 4 cm × 2 cm; flap approximately 60% viable (pink), 40% non-viable (pale, non-blanching). No active bleeding. Wound cleansed with wound cleanser and patted dry. Non-viable flap gently repositioned as best as possible; viable flap edges aligned. Bordered foam dressing applied (non-traumatic removal). Photo documentation obtained. MD [Name] notified. Incident report filed per policy. Skin tear prevention measures discussed with CNA [Name] and documented in nursing care plan: long sleeve gown at patient's request, foam padding to bed rails, silicone-based emollient lotion applied to bilateral forearms BID, minimize tape on fragile skin, use of no-sting barrier film before adhesives. Patient's skin integrity noted as fragile (corticosteroid use ×5 years; age 84).",
        keyElements: [
          "ISTAP classification",
          "Wound measurements",
          "Flap viability assessment",
          "Gentle cleansing technique",
          "Non-traumatic dressing",
          "Photo documentation",
          "Incident reporting",
          "Prevention measures",
          "Contributing risk factors identified",
        ],
        tags: ["skin tear", "ISTAP", "elderly", "wound care", "prevention"],
      },
      {
        id: "wound-abrasion",
        title: "Abrasion/Road Rash Wound Care",
        situation: "Documenting initial care of a road rash abrasion from trauma.",
        example:
          "1800: Wound care performed on traumatic abrasion, left lateral thigh and knee — sustained in bicycle fall approximately 2 hours ago. Wound assessment: 15 cm × 8 cm superficial abrasion left lateral thigh; 4 cm × 4 cm superficial abrasion left knee; multiple surface gravel particles visible in both wounds. No full-thickness skin loss. No active bleeding at this time. No crepitus or deformity of underlying bone. Wound irrigated with high-pressure sterile NS irrigation (60 mL syringe with 18-gauge angiocatheter tip, 6-8 psi) — approximately 500 mL used for thigh wound, 200 mL for knee. Gravel particles removed with sterile forceps — wound bed clear post-irrigation. Wounds free of debris on final inspection. Antibiotic ointment (bacitracin) applied. Non-adherent dressing (Telfa) applied and secured with ABD pad and rolled gauze. Tetanus status: last tetanus 8 years ago — tetanus toxoid 0.5 mL IM administered right deltoid per order. Patient educated on wound care, dressing change technique, and signs of infection. Return to ED instructions provided.",
        keyElements: [
          "Mechanism and time of injury",
          "Wound extent and depth",
          "Foreign body assessment",
          "High-pressure irrigation volume",
          "Foreign body removal",
          "Wound bed clear on inspection",
          "Tetanus immunization status and action",
          "Return precautions",
        ],
        tags: ["abrasion", "trauma", "wound care", "irrigation", "tetanus"],
      },
    ],
  },
  {
    id: "falls-safety",
    name: "Falls & Safety",
    description:
      "Documentation of fall risk assessments, fall events, and safety interventions.",
    icon: "⚠️",
    examples: [
      {
        id: "falls-risk-assessment",
        title: "Fall Risk Assessment",
        situation:
          "Documenting fall risk assessment and prevention interventions.",
        example:
          "0800: Morse Fall Scale completed on admission. Score: History of falling — 25 (fell at home 2 months ago); Secondary diagnosis — 15 (diabetes mellitus, hypertension); Ambulatory aid — 15 (uses cane at home); IV/heparin lock — 20 (peripheral IV in right forearm); Gait/transferring — 10 (weak, slow gait); Mental status — 0 (oriented to own ability). Total Morse Fall Scale score: 85 — HIGH risk for falls. Fall prevention interventions implemented: fall risk armband applied (yellow); bed alarm activated; call light within reach; non-slip footwear provided; bed in lowest position; side rails raised ×3; environment cleared of clutter; nurse call system demonstrated and patient verbalized understanding. Patient and family educated on fall risk, prevention strategies, and importance of calling for assistance prior to ambulation. Patient verbalized understanding and agreed to call for help.",
        keyElements: [
          "Validated fall risk tool used",
          "Individual risk factors scored",
          "Total score and risk category",
          "Specific prevention interventions",
          "Equipment applied",
          "Patient and family education",
          "Patient agreement to safety plan",
        ],
        tags: ["fall risk", "Morse scale", "safety", "prevention", "assessment"],
      },
      {
        id: "falls-event",
        title: "Fall Event Documentation",
        situation: "Documenting a patient fall and immediate response.",
        example:
          "1645: Loud noise heard from patient room. Upon entering, found patient on floor in bathroom, supine, stating 'I tried to get up myself.' Immediate assessment: patient awake and alert, oriented ×4; denies head strike; no loss of consciousness per patient report; no visible bleeding; patient reports right hip pain 5/10. Vital signs immediately post-fall: BP 118/74 mmHg, HR 84 bpm, RR 18 breaths/min, SpO₂ 97% on room air. No deformity or crepitus noted on right hip or lower extremity; able to wiggle toes bilaterally; sensation intact bilaterally. Patient assisted back to bed with two-person assist; maintained spinal precautions until assessment completed. MD [Name] notified at 1650. Orders received for right hip X-ray. Neurovascular checks q1h ordered. Bed alarm reset; patient reminded to call for assistance. Incident/occurrence report completed per facility policy. Family notified at 1700. Charge nurse [Name] notified. Fall prevention care plan reviewed and updated: two-person assist for all transfers, commode at bedside, increased rounding frequency. Continued monitoring q1h.",
        keyElements: [
          "Discovery circumstances",
          "Immediate assessment including head injury",
          "Immediate vital signs",
          "Neurovascular assessment",
          "Transfer back to bed with safety",
          "MD notification time",
          "Orders received",
          "Incident report filed",
          "Family notification",
          "Updated fall prevention plan",
        ],
        tags: ["fall event", "fall", "incident", "safety", "hip injury"],
      },
      {
        id: "falls-restraint-alternative",
        title: "Restraint Alternatives — Safety Interventions",
        situation: "Documenting restraint alternatives for a high-fall-risk confused patient.",
        example:
          "1900: Patient with moderate dementia and fall risk score of 95 (Morse Scale — HIGH). Patient repeatedly attempting to get out of bed without assistance, not retaining redirection regarding fall risk. Per facility policy, least-restrictive measures must be attempted before any restraint consideration. Restraint alternatives implemented and documented: (1) Family member at bedside (son) — educated to remain with patient continuously; (2) Bed in lowest position, floor mat alongside bed; (3) Bed alarm active and audible (tested and functioning); (4) Frequent rounding q1h by nursing staff; (5) Night light active — room not fully dark; (6) Patient toileted (voided 200 mL — addressing suspected toileting need driving agitation); (7) Environmental: TV on with familiar station, photos of family placed in visual field; (8) Wanderguard bracelet applied at wrist (door alarm activation if patient approaches exit). Post-interventions: patient settled into bed watching television with son. Physician notified of continued agitation. Medical record reflects all alternatives tried prior to any consideration of more restrictive measures.",
        keyElements: [
          "Fall risk score documented",
          "Behavior prompting concern",
          "Least-restrictive mandate cited",
          "All alternatives numbered and described",
          "Toileting as cause of agitation addressed",
          "Family engagement",
          "Environmental modifications",
          "Response to interventions",
        ],
        tags: ["fall prevention", "restraint alternatives", "dementia", "safety", "agitation"],
      },
      {
        id: "falls-post-fall-huddle",
        title: "Post-Fall Huddle Documentation",
        situation: "Documenting the post-fall huddle and care plan revision.",
        example:
          "1800: Post-fall huddle completed at 1730 following patient fall at 1645 (refer to fall event documentation). Huddle participants: charge nurse [Name], bedside RN [Name], CNA [Name], patient, and daughter. Fall review: patient ambulated to bathroom without calling for assistance despite repeated education; non-slip socks removed by patient prior to fall (patient reports 'too hot'); bed alarm not triggered (investigation revealed alarm was off — CNA turned off during 1600 care and did not re-activate). Root cause identified: (1) bed alarm deactivated and not restored; (2) patient's continued self-initiation of ambulation. Updated care plan implemented: (1) two-person assist for ALL transfers — documented in care plan and Kardex; (2) bed alarm policy: alarm must be confirmed on by RN before exiting room (added to rounding checklist); (3) commode placed at bedside to reduce bathroom trips; (4) patient and family re-educated (verbalized understanding); (5) physical therapy consult placed for safety evaluation and strengthening. Follow-up neurovascular checks q1h per order. Nurse manager notified. Quality/risk management notified per policy.",
        keyElements: [
          "Huddle participants listed",
          "Root cause analysis",
          "System failure identified",
          "Updated care plan items",
          "Education reinforcement",
          "PT consult",
          "Leadership and risk notification",
        ],
        tags: ["fall", "post-fall huddle", "root cause", "care plan", "safety"],
      },
      {
        id: "falls-sitter",
        title: "Patient Safety Sitter Documentation",
        situation: "Documenting use and handoff of a patient safety sitter.",
        example:
          "0700: Safety sitter handoff completed at start of shift. Patient is 68-year-old with acute delirium, high fall risk (Morse 85), and history of attempting to remove urinary catheter and IV lines. Safety sitter [Name, CNA] at bedside for direct 1:1 observation. Handoff included: patient's current behavior (calm but intermittently confused, redirectable with verbal cues), items patient has attempted to remove (Foley catheter — hand mitts ordered but not applied per least-restrictive policy in effect), safety interventions in place (side rails ×3, bed alarm, IV arm guard for protection of IV site), bathroom assistance required for all toileting. Sitter instructed to call for nursing staff immediately for any of following: patient attempting to get OOB, agitation, line/tube removal attempt, or acute change in condition. Sitter verbalizes understanding. RN to reassess need for sitter and document q4h per policy. Sitter break coverage: RN [Name] to provide coverage during sitter's breaks.",
        keyElements: [
          "Sitter name and role",
          "Reason for 1:1 observation",
          "Behaviors to monitor",
          "Lines/tubes at risk",
          "Specific call-back criteria",
          "Sitter break coverage plan",
          "Reassessment interval",
        ],
        tags: ["safety sitter", "1:1 observation", "delirium", "fall prevention", "safety"],
      },
      {
        id: "falls-medication-risk",
        title: "Medication-Related Fall Risk Assessment",
        situation: "Documenting fall risk assessment with medication reconciliation focus.",
        example:
          "0900: Comprehensive fall risk reassessment following pharmacy medication reconciliation. Patient is 78-year-old with Morse Fall Scale score 70 (HIGH risk). Pharmacist-identified high-risk medications for falls: (1) oxycodone 5 mg q6h PRN (initiated 2 days ago — opioid); (2) zolpidem 5 mg qHS (long-acting sedative); (3) metoprolol 100 mg BID (anti-hypertensive, risk of orthostatic hypotension); (4) furosemide 40 mg daily (diuretic — nocturia risk); (5) temazepam 15 mg qHS (benzodiazepine — Beers Criteria medication). Physician [Name] contacted regarding Beers Criteria medications — temazepam discontinued; zolpidem dose decreased to 2.5 mg per physician order. Orthostatic vital signs documented (see VS entry 0800 — negative for orthostatic hypotension today). Nocturia assessment: patient voided twice overnight — portable commode at bedside. Nursing fall prevention interventions reviewed with patient and family. Non-slip footwear in use. PT performing balance assessment this morning.",
        keyElements: [
          "Morse score",
          "High-risk medications listed",
          "Beers Criteria medications identified",
          "Physician notification and medication changes",
          "Orthostatic assessment referenced",
          "Nocturia mitigation",
          "PT referral for balance",
        ],
        tags: ["fall risk", "polypharmacy", "Beers Criteria", "medication review", "elderly"],
      },
      {
        id: "falls-alcohol-withdrawal",
        title: "Fall Risk — Alcohol Withdrawal",
        situation: "Managing fall risk in a patient undergoing alcohol withdrawal.",
        example:
          "1400: CIWA-Ar assessment score: 24 (severe alcohol withdrawal). Patient with elevated fall risk due to withdrawal symptoms: tremors (bilateral upper extremities 3+), diaphoresis, agitation, and intermittent confusion. Morse Fall Scale: 90 (HIGH risk). Patient's gait unsteady on assessment — unable to ambulate without two-person assist. Safety interventions: bed lowest position; padded side rails ×4 per order; bed alarm active; patient in room closest to nurses' station; one-to-one nursing per facility policy for CIWA score ≥20. Lorazepam 2 mg IV administered at 1410 per CIWA protocol (score ≥20). CIWA reassessment at 1510: score 18 (decreased). Tremors improved to 2+. Gait reassessment at 1530: patient requires one-person assist only at this time. IV access patent — IV thiamine 100 mg administered at 1410, IV folate 1 mg at 1430 per order. Neurology consult placed. Family notified of withdrawal severity and fall risk. ICU transfer discussed with team — ongoing monitoring.",
        keyElements: [
          "CIWA-Ar score and severity level",
          "Specific withdrawal symptoms and severity",
          "Fall prevention specific to withdrawal",
          "CIWA-directed medication",
          "Nutritional supplementation",
          "Reassessment after intervention",
          "ICU consideration",
        ],
        tags: ["alcohol withdrawal", "CIWA", "fall risk", "lorazepam", "safety"],
      },
      {
        id: "falls-elopement",
        title: "Elopement Risk and Prevention",
        situation: "Documenting elopement risk assessment and prevention for a patient with dementia.",
        example:
          "1100: Elopement risk assessment completed for patient with moderate Alzheimer's dementia. Patient was found twice this week at unit exit door attempting to leave. Elopement risk score: HIGH. Prevention measures in place and documented: (1) Wanderguard bracelet applied to right ankle (alarms at unit doors — tested and functioning); (2) Patient room located away from exit; (3) Unit exit code changed per facility policy; (4) Patient's photo on unit white board for identification; (5) Family asked to update contact for notification if elopement occurs; (6) Patient's belongings (coat, shoes) stored in locked wardrobe — patient less likely to exit without these items; (7) Regular environmental engagement: activities scheduled with occupational therapy qd. Family met with social work [Name] at 1030 — discharge planning for memory care placement initiated (patient no longer safe for home per family assessment). Family educated on elopement signs and current facility precautions. Neuropsychiatry consulted.",
        keyElements: [
          "Elopement history",
          "Risk score",
          "Wanderguard device and testing",
          "Environmental modifications",
          "Family notification plan",
          "Engagement strategies",
          "Discharge planning initiation",
          "Specialist consultation",
        ],
        tags: ["elopement", "dementia", "wandering", "safety", "Wanderguard"],
      },
      {
        id: "falls-vision-impairment",
        title: "Fall Prevention — Visually Impaired Patient",
        situation: "Documenting fall prevention strategies for a visually impaired patient.",
        example:
          "0800: Fall risk assessment — Morse Fall Scale 75 (HIGH). Patient with bilateral macular degeneration; legal blindness; can perceive light and shapes only. Fall prevention strategies individualized to visual impairment: (1) Call light placed in same location consistently — patient verbalizes location; (2) Bedside table, personal items, and call light arranged same way each shift (patient prefers items on left side); (3) Walking path from bed to bathroom clear of all equipment and clutter (verified daily); (4) High-contrast tape on floor marking bathroom threshold; (5) Non-slip bath mat in bathroom; (6) Patient uses white cane (stored within reach against left side of bed); (7) Staff announcement before entering room and before touching patient; (8) Orientation to room orientation given each shift — patient demonstrates recall; (9) Glasses-cleaning cloth at bedside (patient wears low-vision glasses for near tasks). PT referral placed for environmental assessment and assistive device evaluation. Patient and family verbalize satisfaction with current approach.",
        keyElements: [
          "Visual impairment degree documented",
          "Consistent environment orientation",
          "Visual cues (high-contrast tape)",
          "Personal mobility aid location",
          "Bathroom safety features",
          "Staff communication approach",
          "PT consult for environment evaluation",
        ],
        tags: ["fall prevention", "visual impairment", "safety", "environmental modification", "patient-centered"],
      },
      {
        id: "falls-child",
        title: "Pediatric Fall Event Documentation",
        situation: "Documenting a fall event involving a pediatric patient.",
        example:
          "1530: Pediatric fall event — patient (7-year-old, 22 kg) found on floor beside bed. Mother present at bedside states she 'looked away for a moment' and child 'scooted to edge and slid off.' Side rails were down per parent request (had been explained previously that rails up ×3 policy exists for children this age). Immediate assessment: child crying but consolable; alert and oriented; denies head strike per child and mother; no loss of consciousness; small area of bruising noted right outer forearm (point of impact per child). No deformity, crepitus, or neurovascular deficit in right arm. GCS 15. Vital signs: BP 102/62 mmHg, HR 112 bpm (expected given upset), RR 22 breaths/min, SpO₂ 99%. Pediatric hospitalist Dr. [Name] notified at 1533. Neurological checks q1h ×4 ordered. X-ray right forearm ordered — results pending. Mother tearful and apologetic — supported with empathy; fall prevention policy re-explained including side rail importance. Incident report completed. Side rails restored and locked. Charge nurse [Name] and nurse manager [Name] notified.",
        keyElements: [
          "Patient age and weight",
          "Circumstances of fall",
          "Head injury assessment",
          "Point of impact identified",
          "Neurovascular assessment",
          "GCS score",
          "Provider notification time",
          "Family emotional support",
          "Incident report",
        ],
        tags: ["pediatric fall", "fall event", "child safety", "incident report", "neurovascular"],
      },
      {
        id: "falls-high-risk-meds-post",
        title: "Post-Sedation Fall Prevention",
        situation: "Documenting fall precautions following procedural sedation.",
        example:
          "1445: Post-procedural sedation fall prevention protocol initiated following colonoscopy with propofol/midazolam sedation. Patient awake but drowsy (sedation score 2 — drowsy, opens eyes to voice). Ambulatory assessment deferred until sedation score ≤1. Bed in lowest position, side rails ×4 elevated. Call light within reach. Patient instructed: do not attempt to get out of bed without nursing assistance — patient verbalized understanding ×2. Companion (wife) at bedside — educated that patient should not operate motor vehicle, sign legal documents, or make important decisions for 24 hours post-sedation per endoscopy unit policy. Driver confirmed — wife will transport home. Vital signs at 1445: BP 124/78 mmHg, HR 74 bpm, SpO₂ 97% on 2L NC. Sedation reassessment q15 minutes. At 1530: sedation score 0 (alert); steady gait with ambulation to bathroom with nurse escort — no dizziness or unsteadiness. Discharge criteria met at 1545: full alertness, oral intake tolerated, vital signs stable, driver confirmed.",
        keyElements: [
          "Sedation score at initial assessment",
          "Ambulation deferred until criteria met",
          "Side rail and environment safety",
          "24-hour post-sedation instructions to companion",
          "Driver confirmation",
          "Serial sedation scoring",
          "Discharge criteria documented",
        ],
        tags: ["post-sedation", "fall prevention", "propofol", "discharge criteria", "safety"],
      },
      {
        id: "falls-near-miss",
        title: "Near-Miss Fall Documentation",
        situation: "Documenting a near-miss fall event and immediate response.",
        example:
          "1715: Near-miss fall event. Upon routine rounding, found patient standing at bedside holding onto IV pole for support with both hands, swaying. Patient had gotten OOB without assistance. Assisted patient to sit on edge of bed; orthostatic vital signs obtained: standing BP 86/52 mmHg (significant drop from sitting 122/78 mmHg). Patient reported 'I just wanted to get the TV remote' but felt dizzy on standing. No fall occurred; no injury. Patient assisted safely back to supine position; feet elevated slightly. BP reassessed supine at 5 minutes: 118/74 mmHg. MD [Name] notified at 1720 of near-miss and orthostatic readings. Orders received: NS bolus 250 mL, hold lisinopril next dose, reinforce bed rest. Fall prevention care plan updated immediately: remote and all frequently needed items placed within arm's reach; call light verified within reach; rounding frequency increased to q30 minutes. Near-miss documented in safety reporting system per facility policy. Patient re-educated on fall risks — verbalized understanding.",
        keyElements: [
          "Circumstances of near-miss",
          "Orthostatic vital signs at time of event",
          "Immediate safety response",
          "BP recovery documented",
          "Provider notification",
          "Care plan revision",
          "Increased rounding frequency",
          "Near-miss reporting system",
        ],
        tags: ["near-miss", "fall prevention", "orthostatic hypotension", "safety", "reporting"],
      },
    ],
  },
  {
    id: "respiratory",
    name: "Respiratory Assessment",
    description:
      "Documentation of respiratory assessments, oxygen therapy, and breathing treatments.",
    icon: "🫁",
    examples: [
      {
        id: "resp-routine",
        title: "Routine Respiratory Assessment",
        situation: "Standard respiratory assessment during shift.",
        example:
          "1400: Respiratory assessment performed. Respiratory rate 18 breaths/min, regular rhythm, unlabored effort. No accessory muscle use, nasal flaring, or retractions observed. Chest expansion symmetrical bilaterally. Lung sounds: clear and equal to auscultation in all fields — upper anterior, lower anterior, lateral, and posterior fields ×8. No crackles, wheezes, rhonchi, or stridor noted. SpO₂ 98% on room air. Patient denies dyspnea, cough, or chest tightness. Skin and mucous membranes pink; no cyanosis of lips or fingertips. Able to speak in full sentences without dyspnea.",
        keyElements: [
          "Respiratory rate and pattern",
          "Effort and accessory muscle use",
          "Chest expansion symmetry",
          "Full lung field auscultation",
          "SpO2 with O2 delivery method",
          "Cyanosis assessment",
          "Functional status (speaking)",
        ],
        tags: ["respiratory", "lungs", "auscultation", "assessment", "routine"],
      },
      {
        id: "resp-distress",
        title: "Respiratory Distress",
        situation: "Patient develops signs of acute respiratory distress.",
        example:
          "0315: Patient's SpO₂ alarm triggered at 86% on 2L nasal cannula. Patient found sitting upright in bed, visibly anxious and dyspneic. RR 28 breaths/min with labored effort; accessory muscles engaged; nasal flaring present. Lung sounds reveal coarse bilateral crackles at bases, diminished in lower lobes bilaterally. SpO₂ 86% → increased oxygen to 6L nasal cannula → SpO₂ 90% → oxygen changed to 100% non-rebreather mask → SpO₂ 94% within 5 minutes. Patient reports 'can't catch my breath,' onset approximately 20 minutes ago. Denies chest pain or fever. BP 158/96 mmHg (baseline 130/80 mmHg), HR 112 bpm, RR 28 breaths/min, T 99.0°F. Bilateral lower extremity pitting edema noted — +2 at ankles bilaterally (increased from baseline trace). Rapid Response Team activated at 0317. MD [Name] notified at 0318. Head of bed elevated 90°. Patient reassured. IV access patent. Labs ordered: ABG, BNP, CBC, BMP. Chest X-ray ordered stat. Furosemide 40 mg IV administered per order at 0335. Strict I&O monitoring initiated. Continuous monitoring maintained.",
        keyElements: [
          "Alarm trigger and initial finding",
          "Full respiratory assessment",
          "Progressive oxygen escalation with SpO2 responses",
          "Vital sign changes from baseline",
          "Associated findings (edema)",
          "RRT activation",
          "Interventions in order",
          "Diagnostic orders",
          "Positioning",
        ],
        tags: [
          "respiratory distress",
          "hypoxia",
          "pulmonary edema",
          "rapid response",
          "emergency",
        ],
      },
      {
        id: "resp-nebulizer",
        title: "Nebulizer Treatment Documentation",
        situation:
          "Administering and documenting a nebulizer breathing treatment.",
        example:
          "1000: Patient reports tightness in chest and wheezing onset approximately 30 minutes ago. Pre-treatment assessment: RR 22 breaths/min, SpO₂ 94% on room air, expiratory wheeze audible bilaterally on auscultation. Peak flow obtained: 210 L/min (patient's personal best 400 L/min; 52% of predicted — in yellow zone per patient's action plan). Albuterol 2.5 mg/ipratropium 0.5 mg (DuoNeb) nebulizer treatment administered over 15 minutes via mouthpiece. Patient instructed on proper breathing technique: slow, deep inhalations through mouthpiece with brief breath hold. Patient tolerated treatment without distress. Post-treatment assessment: RR 18 breaths/min, SpO₂ 97% on room air, diminished expiratory wheeze; breath sounds improved bilaterally. Peak flow post-treatment: 310 L/min (78% of personal best — improved to green zone). Patient reports chest tightness improved to 2/10 from 6/10. Patient educated on trigger avoidance and when to use rescue inhaler vs. when to seek emergency care. MD notified of exacerbation and response to treatment.",
        keyElements: [
          "Pre-treatment assessment",
          "Peak flow with personal best comparison",
          "Zone assessment",
          "Medication name, dose, route",
          "Proper technique instruction",
          "Post-treatment comparison",
          "Patient education",
          "MD notification",
        ],
        tags: ["nebulizer", "asthma", "COPD", "bronchospasm", "albuterol"],
      },
      {
        id: "resp-tracheostomy",
        title: "Tracheostomy Care and Assessment",
        situation: "Documenting routine tracheostomy care and tube assessment.",
        example:
          "0800: Tracheostomy care performed — patient with size 8.0 Shiley cuffed tracheostomy tube, tracheostomy day 14. Inner cannula removed and cleaned: soaked in hydrogen peroxide 50% solution for 10 minutes, scrubbed with pipe cleaners, rinsed with NS, reinserted. Cuff pressure assessed with manometer: 22 cmH₂O (within recommended range 20–25 cmH₂O — adjusted from 28 cmH₂O). Stoma assessment: stoma margins clean and intact; small amount of dried secretions at stoma site removed with NS-dampened applicator; skin without erythema, breakdown, or excoriation. Tracheostomy ties assessed: one-finger breadth slack maintained. Tracheostomy tie changed using two-nurse technique (second nurse [Name] held tube securely during tie change to prevent accidental decannulation). Extra tracheostomy tube (same size and one size smaller) at bedside and confirmed present. Suction: suction performed pre-care — thick white secretions, moderate amount; SpO₂ 95% on tracheostomy collar with 40% FiO₂ (improved from 93% pre-suction). Humidification in place. Patient communicated with Passy Muir valve for 20 minutes during care — tolerated well.",
        keyElements: [
          "Tube size and type",
          "Inner cannula cleaning steps",
          "Cuff pressure with manometer",
          "Stoma assessment",
          "Two-nurse technique for tie change",
          "Backup tube at bedside",
          "Suction assessment",
          "Communication device trial",
        ],
        tags: ["tracheostomy", "trach care", "cuff pressure", "airway", "suction"],
      },
      {
        id: "resp-ventilator",
        title: "Mechanical Ventilator Assessment",
        situation: "Documenting ventilator settings and patient assessment in ICU.",
        example:
          "0600: Mechanical ventilator assessment completed. Mode: Assist Control Volume Control (AC-VC). Settings: FiO₂ 0.50, PEEP 8 cmH₂O, Tidal Volume 500 mL (6.5 mL/kg IBW — lung-protective strategy), Rate 16 breaths/min, I:E ratio 1:2. Patient parameters: SpO₂ 96%; ABG at 0500: pH 7.38, PaCO₂ 42 mmHg, PaO₂ 94 mmHg, HCO₃ 25 mEq/L (on room air equivalent: P/F ratio 188 — moderate ARDS). Respiratory mechanics: Peak inspiratory pressure 34 cmH₂O, Plateau pressure 26 cmH₂O (≤30 acceptable; <4 cmH₂O difference between peak and plateau — no significant airway resistance concern), auto-PEEP assessed: 0 cmH₂O. Ventilator circuit intact — no moisture in circuit; heat moisture exchanger functioning. ETT position: 22 cm at lip (chest X-ray from 0400 confirms 4 cm above carina — no change). ETT cuff pressure: 24 cmH₂O. Sedation-analgesia assessment: RASS -2 (light sedation per goal), CPOT 2 (acceptable). Spontaneous breathing trial criteria assessed — patient does not meet criteria today (FiO₂ >0.40). HOB 30–45° maintained for VAP prevention.",
        keyElements: [
          "Ventilator mode and all settings",
          "ABG interpretation",
          "P/F ratio calculation",
          "Plateau pressure lung protection",
          "ETT position confirmation",
          "Cuff pressure",
          "Sedation and pain scores",
          "SBT criteria assessment",
          "VAP prevention bundle",
        ],
        tags: ["mechanical ventilation", "ICU", "ARDS", "lung-protective", "ETT"],
      },
      {
        id: "resp-incentive-spirometry",
        title: "Incentive Spirometry Education and Use",
        situation: "Teaching and documenting incentive spirometry post-operatively.",
        example:
          "1000: Incentive spirometry (IS) education and practice — post-op day 1 following abdominal hysterectomy. Patient was taught IS technique pre-operatively per protocol; reinforcement provided today. Technique reviewed: patient seated upright at 90°; slow maximal inspiration through mouthpiece; sustained breath hold for 3–5 seconds; slow exhalation; rest 30 seconds between attempts; target 10 repetitions per session, sessions q1h while awake. Demonstration: patient demonstrated correct technique; achieves sustained inspiration of 1,200 mL on best effort (pre-op baseline was 2,000 mL — expected post-op reduction). Patient reports avoiding deep breaths due to incisional pain (6/10 with deep inspiration). Ketorolac 30 mg IV administered at 0950 and pillow splinting technique reinforced — patient holds pillow firmly against abdomen during IS use and coughing. IS volume improved to 1,600 mL with splinting at 1010. Goal: 2,000 mL by post-op day 3. Lung sounds: clear bilaterally — no atelectatic crackles. SpO₂ 96% on 2L NC. Pulmonary hygiene plan reinforced.",
        keyElements: [
          "Surgical context",
          "IS technique components",
          "Patient performance volume",
          "Pre-operative baseline comparison",
          "Pain barrier identified and addressed",
          "Splinting technique for incisional support",
          "Volume goal by target day",
          "Lung sound assessment",
        ],
        tags: ["incentive spirometry", "post-op", "atelectasis prevention", "pulmonary hygiene", "pain splinting"],
      },
      {
        id: "resp-chest-tube",
        title: "Chest Tube Management",
        situation: "Documenting chest tube drainage assessment and site care.",
        example:
          "0800: Chest tube assessment — right-sided chest tube (28 Fr) inserted 2 days ago for hemopneumothorax following blunt chest trauma. Water-seal drainage system assessment: water-seal chamber — water level at 2 cm mark; tidaling observed with respirations (lung not fully re-expanded — expected); no continuous bubbling in water-seal chamber (no air leak — positive sign). Suction: -20 cmH₂O wall suction; suction chamber bubbling gently (appropriate level). Drainage chamber: total drainage since midnight (8 hours) — 75 mL (decreased from 250 mL first 24 hours); drainage character: serosanguineous (improving from bloody). Tubing: no kinks, loops, or clots; positioned below chest level. Insertion site: small dry gauze dressing intact; no subcutaneous emphysema palpated at insertion site or chest wall. Occlusive dressing intact at insertion site. Vital signs: BP 122/74 mmHg, HR 84 bpm, SpO₂ 97% on 2L NC (improving). Patient reports chest pain 3/10 at insertion site with deep breathing. Morning chest X-ray ordered to assess lung re-expansion. Thoracic surgery notified of output trend — may discuss removal today.",
        keyElements: [
          "Tube size and indication",
          "Water-seal assessment (tidaling, air leak)",
          "Suction level",
          "8-hour and total drainage volume and character",
          "Tubing assessment",
          "Insertion site and subcutaneous emphysema",
          "SpO2 and vital signs improvement",
          "Removal criteria discussion",
        ],
        tags: ["chest tube", "thoracic", "pneumothorax", "hemothorax", "drainage"],
      },
      {
        id: "resp-oxygen-therapy",
        title: "Oxygen Therapy Management",
        situation: "Managing and documenting oxygen delivery and weaning.",
        example:
          "1200: Oxygen therapy assessment and weaning attempt. Patient admitted with pneumonia; on supplemental oxygen ×3 days. Current: 3L NC, SpO₂ 95%. Per physician order to wean oxygen as tolerated — target SpO₂ ≥94% on room air. Wean trial: (1) Oxygen decreased to 2L NC at 1200 — SpO₂ 95% at 1210; (2) Oxygen decreased to 1L NC at 1230 — SpO₂ 94% at 1245; (3) Oxygen removed (room air trial) at 1300 — SpO₂ 91% at 1310 — patient reported dyspnea. Oxygen reapplied 1L NC at 1310 — SpO₂ 93%, dyspnea improved. Physician [Name] notified of room air tolerance: SpO₂ 91%. Order received to continue 1L NC. Patient instructed on importance of wearing oxygen consistently. Safety: no smoking education reiterated to family. Oxygen equipment: NC patent, no kinks, properly positioned in nares. Humidification attached (rates >4L require humidification — not applicable at 1L). Lung sounds reassessed: decreased right lower lobe, scattered crackles right base (consistent with pneumonia location on CXR).",
        keyElements: [
          "Baseline SpO2 and flow rate",
          "Stepwise weaning with timing",
          "SpO2 at each wean level",
          "Patient's symptoms during wean",
          "Failure point documented",
          "Physician notification and order",
          "Safety education",
          "Lung sound correlation",
        ],
        tags: ["oxygen therapy", "oxygen weaning", "SpO2", "pneumonia", "NC"],
      },
      {
        id: "resp-cpap",
        title: "CPAP Therapy Documentation",
        situation: "Initiating and documenting non-invasive CPAP therapy.",
        example:
          "2200: CPAP therapy initiated for obstructive sleep apnea — patient's home CPAP device used per physician order. Patient's own CPAP: ResMed AirSense 10, AutoCPAP mode, pressure range 8–15 cmH₂O, ramp time 20 minutes. CPAP mask: nasal pillow (patient's preferred and verified fit). Pre-CPAP vital signs: BP 148/92 mmHg, HR 88 bpm, SpO₂ 91% (baseline for this patient during sleep without CPAP). CPAP applied at 2200; patient tolerated application without issue. SpO₂ at 2220 (after 20-minute ramp): 95%. Patient educated to keep mask on overnight and call nurse if unable to tolerate or if mask causes discomfort. Equipment safety check: electrical device approved by biomedical engineering per facility policy for patient-owned equipment (sticker present). Morning download data to be reviewed for AHI and usage hours. Bedside suction available per routine airway precaution. CPAP humidifier chamber filled with distilled water.",
        keyElements: [
          "Device brand and settings",
          "Mask type and fit",
          "Pre-CPAP SpO2 baseline",
          "SpO2 response to therapy",
          "Equipment safety approval",
          "Patient tolerance assessment",
          "Data download plan",
          "Humidifier and safety checks",
        ],
        tags: ["CPAP", "sleep apnea", "non-invasive", "OSA", "oxygen therapy"],
      },
      {
        id: "resp-pulmonary-rehab",
        title: "Pulmonary Rehabilitation Exercises",
        situation: "Documenting pulmonary rehabilitation exercises in a COPD patient.",
        example:
          "1000: Pulmonary rehabilitation session completed at bedside — patient with COPD (FEV1/FVC 0.58, GOLD Stage 3). Session conducted by RN [Name] in collaboration with respiratory therapy. Pursed-lip breathing: patient demonstrated correct technique — inhale through nose ×2 counts, exhale through pursed lips ×4 counts; completed 10 repetitions. Diaphragmatic breathing: patient placed hands on abdomen to monitor diaphragmatic excursion — good technique observed, abdomen rising with inhalation. Coughing technique: huff cough demonstrated for secretion clearance (less fatiguing than forced cough). Ambulation: patient walked 40 feet in hallway with 2L NC; SpO₂ maintained 93% during walking (dropped briefly to 90% at midpoint — patient stopped, pursed-lip breathing ×1 minute, SpO₂ recovered to 94%, continued walk). Dyspnea scale: Borg 3/10 at rest, Borg 5/10 at peak exertion (tolerable — consistent with past sessions). Arm exercises ×5 each (shoulder circles, arm raises) — tolerated. 6-minute walk test completed: 210 meters (improvement from 180 meters last week). Respiratory therapy to provide COPD medication adherence teaching at 1400.",
        keyElements: [
          "Disease severity staging",
          "Breathing techniques with steps",
          "Activity tolerance with SpO2",
          "SpO2 recovery pattern",
          "Dyspnea scale (Borg)",
          "Functional exercise testing",
          "Trend comparison",
        ],
        tags: ["COPD", "pulmonary rehab", "breathing exercises", "pursed-lip breathing", "exercise tolerance"],
      },
      {
        id: "resp-suction",
        title: "Oropharyngeal/Nasopharyngeal Suctioning",
        situation: "Documenting suctioning procedure for a patient unable to clear secretions.",
        example:
          "1430: Patient with stroke (right MCA infarct, dysphagia — NPO) noted to have excessive oral secretions, gurgling respirations, and SpO₂ 93% on 4L NC (from baseline 97%). Oral suctioning performed: Yankauer suction catheter used, suction pressure 100 mmHg; patient positioned in lateral recumbent position to prevent aspiration. Large amount of thick white secretions suctioned from oral cavity and oropharynx over 2-minute procedure. Patient tolerated procedure with mild coughing response. Post-suction: SpO₂ 96% on 4L NC; gurgling respirations resolved; lung sounds — right lower lobe diminished (consistent with known aspiration risk and CXR findings). Nasopharyngeal suctioning performed per order (patient unable to cooperate with oral care due to agitation): appropriate nostril selected, lubricated catheter inserted — secretions obtained, procedure tolerated. Oral care completed with sponge toothette per aspiration precaution protocol (small amount of 0.12% chlorhexidine rinse applied). Suction supplies replaced. Speech therapy consultation confirmed for tomorrow.",
        keyElements: [
          "Indication for suctioning",
          "Positioning for aspiration prevention",
          "Suction pressure setting",
          "Secretion character and amount",
          "Patient tolerance",
          "SpO2 improvement post-suction",
          "Oral care completed",
          "Speech therapy consultation",
        ],
        tags: ["suctioning", "secretion management", "dysphagia", "stroke", "oral care"],
      },
      {
        id: "resp-respiratory-failure",
        title: "Acute Respiratory Failure — Escalation of Care",
        situation: "Documenting rapid deterioration and escalation in a patient with respiratory failure.",
        example:
          "0400: Patient admitted overnight with community-acquired pneumonia — status worsening. SpO₂ 84% on 15L NRB mask (was 94% at 0200 on 6L NC). Patient in severe respiratory distress: RR 36 breaths/min, labored, accessory muscle use severe, nasal flaring, unable to complete full sentences. Cyanosis of lips. Altered mental status — patient confused (was fully oriented at 0200). ABG obtained: pH 7.28, PaCO₂ 58 mmHg, PaO₂ 48 mmHg, HCO₃ 26 mEq/L (acute respiratory and metabolic acidosis, hypoxemic respiratory failure, P/F ratio 64 — severe ARDS criteria). Intensivist Dr. [Name] called emergently at 0402. Decision made for emergent intubation — anesthesia called STAT. Rapid Response Team to room 0404. Patient preoxygenated with BVM at 15L — SpO₂ improved to 89%. RSI medications prepared per physician: succinylcholine 100 mg IV, etomidate 20 mg IV. Video laryngoscopy performed by Dr. [Name] — ETT size 7.5 placed, confirmed with waveform capnography (CO₂ waveform present), bilateral breath sounds, CXR portable ordered. Patient transferred to ICU at 0435.",
        keyElements: [
          "Rapid deterioration from baseline documented",
          "ABG interpretation with severity",
          "P/F ratio and ARDS classification",
          "Clinical signs of severity",
          "Emergent provider notification",
          "RSI medications documented",
          "ETT confirmation method",
          "ICU transfer",
        ],
        tags: ["respiratory failure", "intubation", "ARDS", "RSI", "ICU transfer"],
      },
      {
        id: "resp-pulmonary-embolism",
        title: "Suspected Pulmonary Embolism Assessment",
        situation: "Documenting assessment and response to suspected pulmonary embolism.",
        example:
          "1300: Patient (post-op day 4 following right total knee replacement) reported sudden onset of right-sided chest pain and dyspnea at rest. Assessment: Patient anxious, tachypneic — RR 26 breaths/min; SpO₂ 90% on room air (was 97% at morning assessment). HR 114 bpm (sinus tachycardia on monitor); BP 132/84 mmHg; T 37.8°C. Right calf tender to palpation with mild swelling (right calf circumference 2 cm greater than left at 10 cm below tibial tuberosity). Breath sounds diminished right lower lobe; no pleural rub appreciated. Oxygen escalated to 4L NC — SpO₂ 94%. Wells PE score calculated: 3 points (immobilization/recent surgery = 1.5; suspected DVT = 3; HR >100 = 1.5; no other active malignancy, prior PE, or hemoptysis) — Wells score 6 = HIGH probability PE. Surgeon Dr. [Name] notified at 1305. STAT CT pulmonary angiography ordered. Labs: BMP, CBC, troponin, BNP, type and screen, D-dimer stat. Anticoagulation discussed — will await CT results. Patient NPO in case of need for intervention. IV access ×2 established.",
        keyElements: [
          "Sudden onset documented",
          "Wells PE score with components",
          "SpO2 change from baseline",
          "Calf assessment with measurement",
          "Oxygen escalation response",
          "STAT imaging ordered",
          "Anticoagulation readiness",
          "NPO status",
        ],
        tags: ["pulmonary embolism", "PE", "Wells score", "DVT", "post-op complication"],
      },
    ],
  },
  {
    id: "cardiac",
    name: "Cardiac Assessment",
    description:
      "Documentation of cardiac assessments, telemetry findings, and cardiac interventions.",
    icon: "❤️",
    examples: [
      {
        id: "cardiac-routine",
        title: "Routine Cardiac Assessment",
        situation: "Standard cardiac assessment during shift.",
        example:
          "0800: Cardiac assessment performed. HR 68 bpm, regular rate and rhythm on telemetry (sinus rhythm, no ectopy noted). Heart sounds S1 and S2 auscultated; no murmurs, rubs, or gallops appreciated. Peripheral pulses: radial and pedal pulses 2+ bilaterally, capillary refill less than 2 seconds bilaterally. No peripheral edema. Skin warm, dry, and well-perfused; no pallor or cyanosis. Patient denies chest pain, palpitations, or dizziness. Orthostatic vital signs checked per order: supine BP 128/76 mmHg HR 68; sitting 126/74 mmHg HR 72; standing 122/70 mmHg HR 78 — no orthostatic hypotension identified (less than 20 mmHg systolic change). Patient ambulated in hallway ×2 laps without chest pain, palpitations, or dyspnea.",
        keyElements: [
          "Heart rate and rhythm",
          "Telemetry reading",
          "Heart sound assessment",
          "Peripheral pulse assessment",
          "Capillary refill",
          "Edema assessment",
          "Orthostatic vital signs",
          "Activity tolerance",
        ],
        tags: ["cardiac", "heart", "assessment", "telemetry", "orthostatic"],
      },
      {
        id: "cardiac-chest-pain",
        title: "Chest Pain Assessment",
        situation:
          "Patient reports new onset chest pain requiring urgent assessment.",
        example:
          "1320: Patient activated call light reporting chest pain. Bedside assessment immediate. Patient alert, diaphoretic, appears anxious. Reports substernal chest pressure 7/10, described as 'heavy, like someone sitting on my chest.' Onset 10 minutes ago at rest. Radiates to left arm and jaw. No relief with position change. Associated shortness of breath. No nausea or vomiting reported. Denies cough or pleuritic component. BP 150/94 mmHg, HR 102 bpm, RR 22 breaths/min, SpO₂ 94% on room air. 12-lead ECG obtained immediately at 1322; ST elevation noted in leads II, III, aVF — transmitted to attending physician and cardiology. Oxygen 4L nasal cannula applied; SpO₂ improved to 97%. Cardiac monitor with continuous ST monitoring applied. Aspirin 325 mg PO chewed administered per STEMI protocol at 1324. IV access ×2 large-bore (18-gauge bilateral antecubital) established. Code Blue team notified at 1322. MD [Name] and cardiologist [Name] at bedside by 1328. Cardiology proceeding with emergent cardiac catheterization. Family notified at 1330. Patient transferred to cardiac catheterization lab at 1342.",
        keyElements: [
          "OPQRST pain assessment",
          "Associated symptoms",
          "Vital signs",
          "ECG obtained with time",
          "Specific ECG findings",
          "Interventions with times",
          "Code/rapid response activation",
          "Provider notification",
          "Family notification",
          "Transfer time",
        ],
        tags: ["chest pain", "STEMI", "MI", "emergency", "cardiac cath"],
      },
    ],
  },
  {
    id: "neurological",
    name: "Neurological Assessment",
    description:
      "Documentation of neurological exams, level of consciousness, and stroke assessments.",
    icon: "🧠",
    examples: [
      {
        id: "neuro-routine",
        title: "Routine Neurological Assessment",
        situation: "Standard neurological assessment during shift.",
        example:
          "1200: Neurological assessment performed. Patient alert and oriented ×4 (person, place, time, and situation). GCS score 15 (E4V5M6). Pupils equal, round, and reactive to light bilaterally (PERRL); 4 mm, brisk reaction. Cranial nerves grossly intact: extraocular movements intact, no facial asymmetry, tongue midline, shoulder shrug equal bilaterally. Motor strength: upper extremities 5/5 bilaterally, lower extremities 5/5 bilaterally. Sensation intact to light touch in all four extremities. Gait steady; ambulates independently. Follows commands appropriately. Speech clear and coherent. No deficits noted from previous assessment.",
        keyElements: [
          "Level of consciousness",
          "Orientation specifics",
          "Glasgow Coma Scale score",
          "Pupil assessment",
          "Cranial nerve screen",
          "Motor strength bilaterally",
          "Sensation",
          "Gait",
          "Speech",
          "Comparison to previous",
        ],
        tags: [
          "neuro",
          "assessment",
          "GCS",
          "pupils",
          "orientation",
          "routine",
        ],
      },
      {
        id: "neuro-stroke",
        title: "Stroke Symptoms — Code Stroke",
        situation: "Patient exhibits sudden neurological deficits consistent with stroke.",
        example:
          "1515: Family member at bedside activated call light reporting patient was 'acting strange and not making sense.' Bedside assessment: Patient not following commands appropriately; unable to state name, location, or date. Facial asymmetry noted — left-sided facial droop with unequal smile. Left arm drift positive — left arm drifts and pronates within 10 seconds of raising both arms. Speech slurred and incoherent (dysarthria). Grip strength: right 5/5, left 0/5. No response to stimuli on left side. Last known well time confirmed with family: 1500 (15 minutes ago). Cincinnati Stroke Scale: facial droop — abnormal; arm drift — abnormal; speech — abnormal. Score: 3/3 — HIGH suspicion for stroke. Code Stroke activated at 1518. Vital signs: BP 188/108 mmHg, HR 88 bpm, RR 18 breaths/min, SpO₂ 96% on room air. Oxygen 4L nasal cannula applied. Blood glucose 134 mg/dL. Stroke team and neurologist [Name] at bedside by 1523. IV access ×2 established. CT head without contrast ordered stat. Blood drawn: CBC, BMP, PT/INR, PTT, type and screen. Patient NPO. Family educated on stroke signs and hospital stroke protocol. CT completed at 1540; results pending.",
        keyElements: [
          "Family's report",
          "Specific neurological deficits",
          "Last known well time",
          "Cincinnati Stroke Scale with score",
          "Code Stroke activation time",
          "Vital signs",
          "Blood glucose",
          "Team notification",
          "Interventions",
          "NPO status",
          "Family education",
        ],
        tags: ["stroke", "code stroke", "neurological deficit", "emergency", "Cincinnati"],
      },
      {
        id: "neuro-seizure",
        title: "Seizure Documentation",
        situation: "Witnessing and documenting a patient seizure.",
        example:
          "0215: Patient observed in tonic-clonic seizure activity. Onset 0215. Patient in bed, upper extremities and lower extremities with rhythmic jerking movements, eyes deviated to the right, jaw clenched. No injury noted at onset. Side rails padded immediately; patient turned to lateral position to maintain airway and prevent aspiration. Timing begun. Suction at bedside. Call for help made; two staff members at bedside. Duration of seizure: 90 seconds. Post-ictal period: patient unresponsive ×3 minutes, then became increasingly drowsy and minimally responsive to voice; no return to baseline at time of this entry. Oxygen applied 4L nasal cannula at end of seizure; SpO₂ 94% → improved to 98%. MD [Name] notified at 0217. Orders received: lorazepam 2 mg IV administered at 0220 (no further seizure activity observed after administration). Vital signs post-seizure: BP 146/88 mmHg, HR 106 bpm, RR 18 breaths/min, T 98.8°F. Blood glucose 102 mg/dL. No incontinence noted. IV access patent. Continuous neuro checks q15 minutes per order. Family notified at 0225.",
        keyElements: [
          "Seizure onset time",
          "Exact description of movements",
          "Duration",
          "Safety measures taken",
          "Post-ictal assessment",
          "Interventions",
          "MD notification",
          "Medication administered",
          "Post-seizure vital signs",
          "Blood glucose",
          "Monitoring frequency",
        ],
        tags: ["seizure", "tonic-clonic", "post-ictal", "emergency", "neuro"],
      },
    ],
  },
  {
    id: "fluid-nutrition",
    name: "Fluid & Nutrition",
    description:
      "Documentation of intake and output, IV fluid management, and nutritional assessments.",
    icon: "🥗",
    examples: [
      {
        id: "fluid-intake-output",
        title: "Intake & Output Documentation",
        situation: "End-of-shift intake and output documentation.",
        example:
          "1900 — 8-hour shift Intake and Output summary (1100–1900):\n\nINTAKE: Oral fluids: 360 mL (water 240 mL, juice 120 mL). IV fluids: NS 0.9% at 100 mL/hr ×8 hours = 800 mL. IV medications: 150 mL (vancomycin 250 mL bag with 100 mL absorbed, other IV piggybacks 50 mL). Oral medications with water: 60 mL. TOTAL INTAKE: 1,370 mL.\n\nOUTPUT: Urine via Foley catheter: 580 mL (amber, clear, no sediment). Wound drain (Jackson-Pratt right flank): 45 mL serosanguineous drainage. Emesis ×1 episode: approximately 100 mL green bilious. TOTAL OUTPUT: 725 mL.\n\n8-HOUR FLUID BALANCE: +645 mL (positive balance). Cumulative 24-hour balance (including prior nursing entry): +1,240 mL. MD [Name] notified of positive fluid balance and decreased urine output (less than 0.5 mL/kg/hr for past 3 hours for 72 kg patient). Orders pending.",
        keyElements: [
          "All intake sources itemized",
          "All output sources itemized",
          "Urine characteristics",
          "Drain characteristics",
          "Shift and cumulative balance",
          "Urine output per kg/hr calculation",
          "MD notification of concern",
        ],
        tags: ["intake output", "fluid balance", "Foley", "IV fluids", "monitoring"],
      },
      {
        id: "fluid-nutrition-assessment",
        title: "Nutritional Assessment",
        situation:
          "Documenting nutritional assessment findings and interventions.",
        example:
          "1030: Nutritional assessment completed. Patient's height 5'6\" (168 cm), weight 142 lbs (64.5 kg) on admission (bed scale); BMI 22.9. Patient reports unintentional weight loss of 15 lbs over past 3 months. Appetite described as 'poor' — eating approximately 25–50% of meals. Malnutrition screening tool (MST) score: 4 — high risk. Patient reports nausea and early satiety limiting intake. Current diet order: regular diet. Meal intake today: breakfast 25% consumed, lunch 50% consumed. Food preferences obtained; patient prefers softer foods and small frequent meals. Nutritionist/dietitian consult placed at 1035. Speech therapy consult ordered for swallowing assessment per MD order (patient reports occasional coughing with thin liquids). Oral nutritional supplement (Ensure) 1 can offered with lunch; patient consumed 75%. Patient and family educated on importance of adequate nutrition for healing. Will continue to monitor and document meal intake percentages.",
        keyElements: [
          "Height, weight, BMI",
          "Weight history and loss amount",
          "Validated screening tool with score",
          "Current oral intake",
          "Food preferences",
          "Dietitian consult",
          "Supplementation",
          "Patient education",
        ],
        tags: [
          "nutrition",
          "assessment",
          "malnutrition",
          "dietitian",
          "weight loss",
        ],
      },
    ],
  },
  {
    id: "mental-health",
    name: "Mental Health",
    description:
      "Documentation of mental health assessments, safety screenings, and psychiatric interventions.",
    icon: "🧩",
    examples: [
      {
        id: "mh-safety-screening",
        title: "Safety Screening & Suicide Risk Assessment",
        situation:
          "Conducting and documenting a patient safety screening for suicidal ideation.",
        example:
          "1400: Safety screening completed using Columbia Suicide Severity Rating Scale (C-SSRS) per protocol. Patient admitted for medical detoxification from alcohol. Screen results: Ideation — patient endorsed passive death wish ('I wouldn't mind not waking up') and active ideation without plan. Patient denied specific plan, intent, or access to means. No prior attempts reported. Behavior — no preparatory behaviors noted. C-SSRS score indicates moderate risk. Patient denies homicidal ideation. Patient calm and cooperative, maintains appropriate eye contact, speech non-pressured. No auditory or visual hallucinations reported by patient. Oriented ×4. Psychiatry consulted at 1405 by MD [Name]; will evaluate. Immediate safety interventions implemented: room cleared of sharps and potential ligature risks per facility policy; belongings secured per protocol; patient on 1:1 direct observation per order; patient verbalized understanding of safety measures. Family notified of psychiatric consult with patient consent. Supportive therapeutic communication provided; patient encouraged to verbalize feelings and to notify staff of any changes.",
        keyElements: [
          "Validated screening tool (C-SSRS)",
          "Specific ideation details",
          "Plan and intent inquiry",
          "Prior attempts history",
          "Risk level determination",
          "Safety interventions implemented",
          "Psychiatric consult",
          "Observation level",
          "Therapeutic communication",
        ],
        tags: [
          "mental health",
          "suicide",
          "C-SSRS",
          "safety screening",
          "psychiatric",
        ],
      },
      {
        id: "mh-agitation",
        title: "Acute Agitation Management",
        situation:
          "Documenting management of an acutely agitated patient.",
        example:
          "2100: Patient observed pacing room, vocalizing loudly ('I need to leave'), attempting to remove IV tubing. Loud voices audible from hallway. Bedside approach made by two staff members. De-escalation techniques initiated: calm, quiet tone used; staff positioned at patient's eye level; non-threatening posture maintained; clear and simple verbal commands provided; patient offered water and acknowledged frustration. CIWA-Ar score obtained: 18 (moderate alcohol withdrawal). Patient at this time unable to re-direct from behavior. MD [Name] notified at 2106. Haldol 5 mg IM administered to right deltoid at 2115 per order. Patient assisted to bed, side rails raised, bed in lowest position, call light within reach. Continuous 1:1 observation in place. Patient became less agitated by 2130; able to participate in brief conversation; agreed to remain in bed. Repeat assessment at 2200: patient resting comfortably; CIWA-Ar score 10 (mild). All interventions documented in behavior flow sheet.",
        keyElements: [
          "Observed behaviors with specifics",
          "De-escalation techniques attempted",
          "Assessment tool used (CIWA-Ar)",
          "MD notification",
          "Medication administered with route",
          "Safety measures implemented",
          "Observation level",
          "Response to intervention",
          "Reassessment finding",
        ],
        tags: [
          "agitation",
          "de-escalation",
          "alcohol withdrawal",
          "CIWA",
          "psychiatric",
        ],
      },
    ],
  },
  {
    id: "patient-education",
    name: "Patient Education",
    description:
      "Documentation of patient teaching, learning assessment, and return demonstrations.",
    icon: "📚",
    examples: [
      {
        id: "ed-diabetes",
        title: "Diabetes Self-Management Education",
        situation:
          "Documenting patient education session on diabetes self-management.",
        example:
          "1300: Diabetes self-management education provided per physician order in preparation for discharge tomorrow. Topics covered: (1) Blood glucose monitoring — technique demonstrated using patient's own glucometer; patient return-demonstrated correct technique; verbalized target glucose range (80–180 mg/dL per MD). (2) Insulin administration — subcutaneous injection technique demonstrated using training pen; patient performed return demonstration correctly ×3 with verbal prompting on first attempt, independently on second and third attempts. (3) Signs and symptoms of hypoglycemia and hyperglycemia — patient able to verbalize three signs of each and appropriate actions. (4) Foot care — importance demonstrated; patient verbalized daily foot inspection technique. (5) Diet and carbohydrate counting — basic carbohydrate information reviewed; patient expressed confusion about portion sizes; dietitian follow-up arranged. Barriers to learning assessed: patient is a visual learner; written materials in English (preferred language confirmed) provided; reading level confirmed appropriate for materials given. Patient's daughter present and participated in education. Discharge instructions printed and given. Follow-up diabetes education appointment scheduled with outpatient diabetes educator.",
        keyElements: [
          "Physician order for education",
          "All topics covered listed",
          "Return demonstrations documented",
          "Comprehension assessment",
          "Barriers to learning addressed",
          "Learning style considered",
          "Materials provided",
          "Family involvement",
          "Follow-up plan",
        ],
        tags: [
          "patient education",
          "diabetes",
          "discharge teaching",
          "self-management",
          "insulin",
        ],
      },
      {
        id: "ed-discharge",
        title: "Comprehensive Discharge Teaching",
        situation: "Documenting discharge education prior to patient discharge.",
        example:
          "1000: Discharge teaching completed prior to anticipated 1200 discharge. Patient and spouse present for entire teaching session. Topics reviewed:\n\n1. Diagnosis: patient verbalized understanding of heart failure, its causes, and relationship to symptoms.\n2. Medications: medication reconciliation reviewed; patient correctly identified all seven medications by name and purpose; instructed on new medications (lisinopril 5 mg — blood pressure, furosemide 40 mg — fluid removal). Patient verbalized potential side effects to monitor and report.\n3. Daily weight monitoring: scale provided by social work; patient verbalized to weigh daily each morning, report weight gain of more than 2 lbs in one day or 5 lbs in one week to cardiologist.\n4. Dietary restrictions: 2-gram sodium diet reviewed; patient and spouse engaged with dietitian (present at session) and verbalized food substitution examples.\n5. Activity: gradual return to activity; patient to walk 5–10 minutes daily, increasing by 5 minutes weekly.\n6. Fluid restriction: 1,500 mL/day discussed; patient verbalized understanding.\n7. When to call MD or go to ER: warning signs reviewed; patient verbalized signs requiring emergency care (worsening shortness of breath, chest pain, weight gain >2 lbs/day).\n8. Follow-up appointments: cardiologist appointment 1/14 at 10:00 AM confirmed; primary care 1/17 at 2:00 PM confirmed; prescriptions given. Discharge paperwork signed. Patient denies remaining questions. Transportation confirmed.",
        keyElements: [
          "Patient and support person present",
          "All discharge topics enumerated",
          "Comprehension verified for each topic",
          "Teach-back method used",
          "New medications highlighted",
          "Warning signs for emergency",
          "All follow-up appointments confirmed",
          "Paperwork signed",
          "Transportation confirmed",
        ],
        tags: [
          "discharge",
          "patient education",
          "heart failure",
          "teach-back",
          "self-care",
        ],
      },
    ],
  },
  {
    id: "end-of-life",
    name: "End-of-Life Care",
    description:
      "Documentation of comfort care, goals of care discussions, and hospice/palliative measures.",
    icon: "🕊️",
    examples: [
      {
        id: "eol-goals-of-care",
        title: "Goals of Care Discussion",
        situation:
          "Documenting a goals of care family meeting.",
        example:
          "1400: Goals of care family meeting conducted at bedside. Present: patient (when alert, participated intermittently), patient's spouse [Name], adult daughter [Name], son [Name], attending physician Dr. [Name], palliative care nurse practitioner [Name], and bedside RN (this nurse). Meeting lasted approximately 60 minutes.\n\nDiscussion summary: physician explained patient's current prognosis — advanced metastatic pancreatic cancer with multi-organ dysfunction; curative options exhausted. Family asked multiple clarifying questions regarding prognosis and what dying process may look like. Questions answered clearly and compassionately by medical team.\n\nPatient's previously expressed wishes reviewed: patient had verbalized to spouse that 'quality of life matters more than quantity.' Advance directive reviewed — patient designated spouse as healthcare proxy; DNR/DNI preference documented.\n\nGoals of care plan agreed upon: transition to comfort-focused care, discontinue curative-intent interventions. Hospice consult accepted by family; referral placed at 1500. Comfort measures initiated: pain and dyspnea management prioritized; unnecessary labs and vitals discontinued; diet liberalized to preference; visiting hours unrestricted per patient and family request.\n\nFamily expressed grief openly; supported by palliative care NP and chaplain (called at family request, arrived 1500). Family verbalized understanding of plan and expressed gratitude. Plan documented in chart; POLST form updated and signed by physician.",
        keyElements: [
          "All attendees listed",
          "Meeting duration",
          "Medical information communicated",
          "Patient's previously expressed wishes",
          "Advance directive review",
          "Goals of care plan decided",
          "Hospice referral",
          "Comfort measures initiated",
          "Emotional support provided",
          "POLST/documentation updated",
        ],
        tags: [
          "end of life",
          "goals of care",
          "palliative",
          "hospice",
          "family meeting",
        ],
      },
      {
        id: "eol-comfort-care",
        title: "Comfort Care Assessment",
        situation:
          "Ongoing documentation during comfort/hospice care phase.",
        example:
          "0200: Comfort care assessment. Patient unresponsive, breathing pattern irregular — Cheyne-Stokes respirations noted with apneic pauses up to 15 seconds. Jaw relaxed, oral secretions present — repositioned to lateral position; oral suctioning performed gently with bulb syringe; foam swabs used to keep lips and oral mucosa moist. No signs of pain or distress: face relaxed, no grimacing or furrowing of brow, extremities without restlessness or agitation. Comfort scale (PAINAD score): 2 (some labored breathing noted, otherwise comfortable). Morphine 2 mg SQ administered at 0205 per comfort order for respiratory distress prevention. Skin: warm, mottled appearance to bilateral lower extremities and knees — family previously educated on this as normal end-of-life change. Peripheral pulses weak and thready bilaterally. Room environment: lighting dim per family preference; soft music playing per family request; Bible on bedside table per patient's request. Family (spouse and two adult children) at bedside; chaplain present. Family offered support and information. No distress reported by family at this time. Will continue q1h assessments.",
        keyElements: [
          "Breathing pattern description",
          "Secretion management",
          "Comfort assessment (no pain/distress)",
          "Validated comfort scale",
          "Medication administered proactively",
          "Skin changes documented",
          "Environment supporting dignity",
          "Family presence and emotional support",
          "Assessment frequency",
        ],
        tags: [
          "comfort care",
          "end of life",
          "Cheyne-Stokes",
          "PAINAD",
          "hospice",
        ],
      },
    ],
  },
  {
    id: "post-operative",
    name: "Post-Operative Care",
    description:
      "Documentation of immediate and ongoing post-operative assessments and recovery monitoring.",
    icon: "🏥",
    examples: [
      {
        id: "post-op-arrival",
        title: "Post-Operative Arrival Assessment",
        situation:
          "Documenting patient arrival from PACU to surgical unit.",
        example:
          "1430: Patient received from PACU following laparoscopic cholecystectomy under general anesthesia. SBAR report received from PACU RN [Name]. Handoff assessment upon arrival:\n\nAirway/Breathing: Patient awake and able to speak; maintained own airway; RR 16 breaths/min, unlabored; SpO₂ 97% on 2L nasal cannula (previously 99% on 6L in PACU; patient tolerating wean); breath sounds clear bilaterally.\n\nCirculation: BP 122/78 mmHg, HR 80 bpm, warm and well-perfused, no bleeding noted.\n\nNeuro/Mental Status: Alert, oriented ×3; drowsy but arousable; reports feeling 'groggy but okay.'\n\nPain: Pain 3/10 at incision sites; received morphine 4 mg IV in PACU (last dose 1345); grimacing minimally with movement; antiemetic administered in PACU — no nausea at this time.\n\nWound: Three laparoscopic port sites: right upper quadrant, epigastric, umbilical — all with small dry dressings, no drainage. Abdominal dressing dry and intact.\n\nIV/Lines: Right forearm 18-gauge PIV patent; flushed without resistance; NS at 75 mL/hr infusing.\n\nUrine Output: Foley catheter in place; 80 mL clear yellow urine since surgery end (approximately 1.5 hours); adequate.\n\nPost-operative orders reviewed, noted, and acknowledged. Call surgeon if: BP less than 90 systolic, SpO₂ less than 92%, urine output less than 30 mL/hr, temperature greater than 101.5°F, signs of bleeding. Bed in lowest position, call light within reach, side rails raised ×3.",
        keyElements: [
          "Source of report and procedure performed",
          "SBAR format",
          "Airway and breathing",
          "Circulation",
          "Neurological/mental status",
          "Pain and last medication",
          "Wound assessment",
          "IV access",
          "Urine output",
          "Orders reviewed",
          "Call parameters noted",
          "Safety measures",
        ],
        tags: [
          "post-op",
          "PACU",
          "surgical",
          "arrival assessment",
          "handoff",
        ],
      },
    ],
  },
  {
    id: "labor-delivery",
    name: "Labor & Delivery",
    description:
      "Documentation of labor assessment, fetal monitoring, and delivery events.",
    icon: "👶",
    examples: [
      {
        id: "ld-admission",
        title: "Labor Admission Assessment",
        situation:
          "Documenting assessment of a patient presenting in active labor.",
        example:
          "0330: G2P1 patient, 39 weeks and 3 days gestation, presented to Labor & Delivery with regular uterine contractions and spontaneous rupture of membranes at home. Initial assessment:\n\nContractions: q4–5 minutes, lasting 45–60 seconds, moderate intensity by palpation. Patient rates contraction pain 7/10.\n\nFetal Heart Rate (FHR): External fetal monitor applied. Baseline FHR 140 bpm with moderate variability; accelerations present (2 accelerations of >15 bpm lasting >15 seconds noted in 20-minute strip); no decelerations observed. Reactive NST.\n\nCervical Exam (obtained by CNM [Name] at 0345): 5 cm dilated, 80% effaced, -1 station; vertex presentation confirmed.\n\nRupture of Membranes: Patient reports clear fluid gush at home approximately 1 hour ago; confirmed on assessment — fluid at vaginal vault — positive ferning on microscopy, positive nitrazine, fluid clear without foul odor or meconium staining. GBS status: negative (tested at 36 weeks).\n\nVital Signs: BP 118/72 mmHg, HR 86 bpm, RR 18 breaths/min, T 98.6°F, SpO₂ 98% on room air.\n\nIV access established: 18-gauge left forearm; LR at 125 mL/hr per order. OB panel labs drawn. Epidural anesthesia requested; anesthesiology notified. Patient and support person (husband) educated on labor process and monitoring. Birth plan reviewed.",
        keyElements: [
          "OB history (G#P#)",
          "Gestational age",
          "Contraction assessment",
          "FHR tracing description",
          "Cervical exam (by who)",
          "ROM confirmation",
          "GBS status",
          "Maternal vital signs",
          "IV access and fluids",
          "Labs drawn",
          "Patient preferences/birth plan",
        ],
        tags: [
          "labor",
          "delivery",
          "OB",
          "admission",
          "fetal monitoring",
          "cervical exam",
        ],
      },
    ],
  },
];

export function getAllExamples(): ChartingExample[] {
  return chartingCategories.flatMap((cat) => cat.examples);
}

export function searchExamples(query: string): (ChartingExample & { categoryId: string; categoryName: string })[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return chartingCategories.flatMap((cat) =>
    cat.examples
      .filter(
        (ex) =>
          ex.title.toLowerCase().includes(q) ||
          ex.situation.toLowerCase().includes(q) ||
          ex.example.toLowerCase().includes(q) ||
          ex.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          ex.keyElements.some((ke) => ke.toLowerCase().includes(q))
      )
      .map((ex) => ({ ...ex, categoryId: cat.id, categoryName: cat.name }))
  );
}

export function getCategoryById(id: string): ChartingCategory | undefined {
  return chartingCategories.find((cat) => cat.id === id);
}
