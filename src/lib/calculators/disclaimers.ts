// Category-specific disclaimers, shown on calculator pages where the subject
// matter genuinely warrants one (financial and health categories). Not every
// category gets one — a unit converter or a dice-roll random number
// generator doesn't need a disclaimer, and adding one anyway would just be
// noise. Written specifically for what each category actually covers, not a
// single generic "for informational purposes only" line copy-pasted everywhere.

export const CATEGORY_DISCLAIMERS: Record<string, string> = {
  Financial:
    "These calculators use standard financial formulas (amortization, compound interest, marginal tax brackets) to estimate results based on the numbers you enter. They don't account for your full financial picture, and results shouldn't be treated as financial, tax, or investment advice. For decisions with real money on the line, check the numbers with a lender, accountant, or financial advisor who can see your complete situation.",
  "Health & Fitness":
    "These calculators use established formulas (such as Mifflin-St Jeor for calorie needs or the Devine formula for ideal weight) to provide general estimates. They're built for a general population and don't account for individual medical conditions, medications, or circumstances. They aren't a substitute for advice from a doctor, registered dietitian, or other qualified healthcare provider — especially for anything related to pregnancy, chronic conditions, or medication dosing.",
};
