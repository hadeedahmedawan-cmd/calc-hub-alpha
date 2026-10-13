// Muted, matte accent tones used only for tiny details (a dot beside a
// category heading, a short bar above a calculator title). Deliberately limited
// to five shades that share the same softness so the site stays calm and
// elegant instead of turning into a rainbow.

const TEAL = "oklch(0.5 0.075 192)";
const CLAY = "oklch(0.62 0.095 40)";
const OCHRE = "oklch(0.74 0.1 85)";
const SLATE = "oklch(0.52 0.06 250)";
const SAGE = "oklch(0.6 0.07 150)";

export const CATEGORY_TONES: Record<string, string> = {
  Financial: TEAL,
  "Health & Fitness": CLAY,
  "Unit Converters": SLATE,
  "Everyday & Utility": OCHRE,
  Math: SAGE,
  Engineering: SLATE,
  "Cooking & Kitchen": CLAY,
  "Home, DIY & Construction": SAGE,
  "Auto & Travel": SLATE,
  "Business & Work": TEAL,
  "Fun & Miscellaneous": OCHRE,
};

export const toneFor = (category: string): string => CATEGORY_TONES[category] ?? TEAL;
