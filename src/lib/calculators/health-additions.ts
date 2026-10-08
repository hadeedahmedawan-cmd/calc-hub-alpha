import type { Calculator } from "./types";
import { fmt, n } from "./helpers";

const cat = "Health & Fitness";

export const healthAdditions: Calculator[] = [
  {
    slug: "pregnancy-weight-gain",
    name: "Pregnancy Weight Gain Calculator",
    category: cat,
    priority: "Medium",
    description: "Check recommended total pregnancy weight gain range based on pre-pregnancy BMI category.",
    fields: [
      { name: "category", label: "Pre-pregnancy weight category", type: "select", default: "normal", options: [
        { value: "underweight", label: "Underweight (BMI under 18.5)" },
        { value: "normal", label: "Normal weight (BMI 18.5-24.9)" },
        { value: "overweight", label: "Overweight (BMI 25-29.9)" },
        { value: "obese", label: "Obese (BMI 30+)" },
      ] },
      { name: "week", label: "Current week of pregnancy", default: 20, min: 1, max: 42 },
    ],
    compute: (v) => {
      const week = n(v.week);
      const ranges: Record<string, [number, number]> = {
        underweight: [28, 40],
        normal: [25, 35],
        overweight: [15, 25],
        obese: [11, 20],
      };
      const [lo, hi] = ranges[v.category ?? "normal"];
      // Rough pro-rating: ~1-4.5 lb total in first 13 weeks, remainder spread evenly after.
      const progress = week <= 13 ? week / 13 : 1;
      const remainingWeeks = Math.max(42 - 13, 1);
      const afterFirst = week > 13 ? (week - 13) / remainingWeeks : 0;
      const estLo = week <= 13 ? lo * 0.1 * progress : lo * 0.1 + (lo - lo * 0.1) * afterFirst;
      const estHi = week <= 13 ? hi * 0.1 * progress : hi * 0.1 + (hi - hi * 0.1) * afterFirst;
      return {
        rows: [
          ["Recommended total gain (full term)", `${lo}-${hi} lb`],
          [`Rough estimate by week ${week}`, `${fmt(estLo, 0)}-${fmt(estHi, 0)} lb`],
        ],
      };
    },
    content: {
      howItWorks: [
        "Recommended pregnancy weight gain ranges come from the Institute of Medicine's guidelines, which set different total-gain targets based on pre-pregnancy BMI category — underweight starting points call for more total gain, while higher starting BMI categories call for less.",
        "The week-by-week estimate follows the commonly described pattern: a smaller amount in the first trimester (often just a few pounds total), then roughly even weekly gain through the remainder of pregnancy.",
        "These are population-level guidelines, not a target to hit exactly — actual healthy pregnancy weight gain varies by individual, and a doctor or midwife tracking your specific pregnancy is the real authority on what's appropriate for you.",
      ],
      example: "A person in the normal pre-pregnancy BMI category is looking at a total recommended gain of 25-35 lb across a full-term pregnancy, distributed roughly evenly after the first trimester.",
      faqs: [
        { q: "Is it a problem if I'm outside this range?", a: "Not automatically — these are population guidelines. Your prenatal care provider is tracking your specific pregnancy and is the right person to interpret whether your individual pattern is a concern." },
        { q: "Do twin or multiple pregnancies use the same ranges?", a: "No — multiples pregnancies have separate, higher recommended ranges. This tool covers singleton pregnancies only." },
        { q: "Why is first-trimester gain usually so much smaller?", a: "Early pregnancy weight gain is mostly from the placenta, amniotic fluid, and maternal blood volume increases, which build up gradually — significant fat and tissue gain for the pregnancy typically comes later." },
        { q: "Should I try to lose weight during pregnancy if I'm in the obese category?", a: "This isn't a decision to make from a calculator — weight management during pregnancy should be discussed directly with your healthcare provider, who can account for your full medical picture." },
      ],
    },
  },
  {
    slug: "body-frame-size",
    name: "Body Frame Size Calculator",
    category: cat,
    priority: "Low",
    description: "Estimate body frame size (small, medium, large) using the wrist circumference method.",
    fields: [
      { name: "height", label: "Height", unit: "cm", default: 170 },
      { name: "wrist", label: "Wrist circumference", unit: "cm", default: 16 },
      { name: "sex", label: "Sex", type: "select", default: "female", options: [
        { value: "female", label: "Female" }, { value: "male", label: "Male" },
      ] },
    ],
    compute: (v) => {
      const height = n(v.height), wrist = n(v.wrist);
      const r = height / wrist;
      const sex = v.sex ?? "female";
      const frame = sex === "female"
        ? (r > 10.9 ? "Small" : r >= 9.9 ? "Medium" : "Large")
        : (r > 10.4 ? "Small" : r >= 9.6 ? "Medium" : "Large");
      return { rows: [["Height-to-wrist ratio", fmt(r, 2)], ["Estimated frame size", frame]] };
    },
    content: {
      howItWorks: [
        "This method estimates skeletal frame size by comparing height to wrist circumference — a thinner wrist relative to height suggests a smaller frame, and a thicker wrist relative to height suggests a larger one. Formula: ratio = height ÷ wrist circumference, with different cutoffs for men and women.",
        "Frame size is sometimes used alongside BMI or ideal-weight calculations, since a healthy weight range can shift somewhat for a genuinely small or large skeletal frame, not just height.",
        "This is a rough, widely-used field estimate rather than a precise clinical measurement — actual frame and bone structure vary more than any single ratio can fully capture.",
      ],
      example: "At 170cm height and a 16cm wrist for a female: ratio = 170 ÷ 16 = 10.6, which falls in the Small frame category.",
      faqs: [
        { q: "Where exactly do I measure wrist circumference?", a: "Wrap a tape measure snugly (not tight) around the wrist at the narrowest point, just below the wrist bone, and use your dominant hand for consistency if measuring yourself." },
        { q: "Does frame size actually change my ideal weight range?", a: "Some frameworks nudge the healthy weight range slightly for genuinely small or large frames, but the effect is modest — BMI and other measures remain the more heavily used references." },
        { q: "Is this method scientifically precise?", a: "It's a widely used practical estimate, not a clinical measurement like a DEXA bone density scan — treat the result as a general indicator, not an exact classification." },
      ],
    },
  },
  {
    slug: "blood-pressure-category",
    name: "Blood Pressure Category Checker",
    category: cat,
    priority: "Medium",
    description: "Check which standard blood pressure category a reading falls into.",
    fields: [
      { name: "systolic", label: "Systolic (top number)", unit: "mmHg", default: 120 },
      { name: "diastolic", label: "Diastolic (bottom number)", unit: "mmHg", default: 80 },
    ],
    compute: (v) => {
      const sys = n(v.systolic), dia = n(v.diastolic);
      let category: string;
      if (sys > 180 || dia > 120) category = "Hypertensive Crisis — seek immediate medical care";
      else if (sys >= 140 || dia >= 90) category = "High Blood Pressure (Stage 2)";
      else if (sys >= 130 || dia >= 80) category = "High Blood Pressure (Stage 1)";
      else if (sys >= 120 && dia < 80) category = "Elevated";
      else category = "Normal";
      return { rows: [["Reading", `${sys}/${dia} mmHg`], ["Category", category]] };
    },
    content: {
      howItWorks: [
        "This uses the American Heart Association's standard blood pressure categories, based on whichever of your two numbers (systolic or diastolic) lands in the higher category — the readings don't need to both fall in the same range.",
        "Categories run from Normal, through Elevated and two stages of High Blood Pressure, up to Hypertensive Crisis, which the AHA specifically flags as needing immediate medical attention rather than routine follow-up.",
        "A single reading is a snapshot, not a diagnosis — blood pressure naturally fluctuates through the day, and clinical hypertension diagnoses are typically based on multiple readings over time, not one measurement.",
      ],
      example: "A reading of 135/85 mmHg falls into Stage 1 High Blood Pressure, since the systolic number (135) is in that category's range even though the diastolic number alone might read differently.",
      faqs: [
        { q: "What should I do if I get a Hypertensive Crisis reading?", a: "The AHA specifically recommends seeking immediate medical attention for a reading over 180/120 mmHg, especially if accompanied by symptoms like chest pain, shortness of breath, or vision changes — this isn't a wait-and-see situation." },
        { q: "Why does only one number need to be elevated for a category to apply?", a: "The AHA's guidelines classify by whichever number is higher precisely because either systolic or diastolic elevation alone carries real cardiovascular risk." },
        { q: "Can one high reading mean I have hypertension?", a: "Not on its own — a single elevated reading can reflect stress, recent caffeine, or measurement conditions. Clinical diagnosis typically relies on multiple readings over separate visits or home monitoring over time." },
        { q: "Does this tool store or send my reading anywhere?", a: "No — like every calculator on this site, this runs entirely in your browser and nothing you enter is transmitted or saved." },
      ],
    },
  },
  {
    slug: "waist-to-height-ratio",
    name: "Waist-to-Height Ratio Calculator",
    category: cat,
    priority: "Low",
    description: "Calculate waist-to-height ratio, a simple indicator of central body fat and related health risk.",
    fields: [
      { name: "waist", label: "Waist circumference", unit: "cm", default: 80 },
      { name: "height", label: "Height", unit: "cm", default: 170 },
    ],
    compute: (v) => {
      const waist = n(v.waist), height = n(v.height);
      const r = waist / height;
      const cat2 = r < 0.5 ? "Healthy range" : r <= 0.6 ? "Increased risk" : "High risk";
      return { rows: [["Ratio", fmt(r, 3)], ["Category", cat2]] };
    },
    content: {
      howItWorks: [
        "Waist-to-height ratio divides waist circumference by height, both in the same units. The commonly cited guideline is simple to remember: keep your waist circumference under half your height.",
        "This measure has gained traction as a simpler alternative to BMI for flagging central (abdominal) fat specifically, which research has linked more directly to cardiovascular and metabolic risk than overall body weight.",
        "Unlike BMI, waist-to-height ratio doesn't require separate charts for men and women or different age brackets — the same 0.5 threshold is used as a general reference across adult populations.",
      ],
      example: "An 80cm waist on a 170cm-tall person gives a ratio of 0.47 — within the healthy range under the 0.5 threshold.",
      faqs: [
        { q: "Where do I measure waist circumference for this?", a: "At the narrowest point of your torso, usually around the belly button, with the tape snug but not compressing the skin — measure after exhaling normally, not while holding your breath in." },
        { q: "Is waist-to-height ratio better than BMI?", a: "It's a useful complement, not a full replacement — waist-to-height ratio focuses on central fat distribution specifically, while BMI reflects overall weight relative to height. Many practitioners use both together." },
        { q: "Does this ratio work the same for children?", a: "The same 0.5 general guideline is commonly referenced for children and adults alike, which is part of why waist-to-height ratio is sometimes preferred over BMI in pediatric contexts — but a pediatrician's assessment is the right authority for a child's specific situation." },
      ],
    },
  },
  {
    slug: "due-date-conception",
    name: "Due Date by Conception Date Calculator",
    category: cat,
    priority: "Low",
    description: "Estimate a pregnancy due date starting from a known conception date, rather than last period date.",
    fields: [{ name: "conceptionDate", label: "Conception date", type: "date" }],
    compute: (v) => {
      if (!v.conceptionDate) throw new Error("Please select a conception date");
      const d = new Date(v.conceptionDate);
      d.setDate(d.getDate() + 266);
      return { rows: [["Estimated due date", d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })]] };
    },
    content: {
      howItWorks: [
        "This method adds 266 days (38 weeks) directly to a known conception date, rather than the more common approach of adding 280 days (40 weeks) to the first day of your last menstrual period.",
        "The two methods are actually calculating the same underlying due date, just from different starting points — 280 days from LMP and 266 days from conception typically land close to the same date, since ovulation (and likely conception) usually falls around day 14 of a standard cycle.",
        "This calculator is most useful for people who know their conception date with more confidence than their last period date — for example, from fertility tracking, IVF, or a known single date of intercourse.",
      ],
      example: "A conception date of January 1 gives an estimated due date of September 24 — 266 days later.",
      faqs: [
        { q: "Why 266 days here instead of 280?", a: "280 days is counted from the last menstrual period, which is typically about 14 days before conception for a standard cycle — 266 days from conception lands on approximately the same calendar date." },
        { q: "Which method is more accurate, this one or the LMP-based calculator?", a: "If you know your conception date confidently (from IVF timing or fertility tracking, for example), this method can be more precise than an LMP estimate on an irregular cycle. For most pregnancies, an early ultrasound remains the most accurate dating method overall." },
        { q: "What if I'm not sure of my exact conception date?", a: "Use the LMP-based due date calculator instead, or rely on your provider's ultrasound dating, which doesn't depend on knowing either date precisely." },
      ],
    },
  },
];
