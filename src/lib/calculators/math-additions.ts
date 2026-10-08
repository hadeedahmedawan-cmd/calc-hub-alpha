import type { Calculator } from "./types";
import { fmt, n } from "./helpers";

const cat = "Math";

function factorial(k: number): number {
  let r = 1;
  for (let i = 2; i <= k; i++) r *= i;
  return r;
}

export const mathAdditions: Calculator[] = [
  {
    slug: "combinations-permutations",
    name: "Combinations & Permutations Calculator",
    category: cat,
    priority: "Medium",
    description: "Calculate the number of combinations (nCr) and permutations (nPr) for a set.",
    fields: [
      { name: "n", label: "Total items (n)", default: 10 },
      { name: "r", label: "Items chosen (r)", default: 3 },
    ],
    compute: (v) => {
      const nn = n(v.n), rr = n(v.r);
      if (rr > nn) throw new Error("r cannot be greater than n");
      const combos = factorial(nn) / (factorial(rr) * factorial(nn - rr));
      const perms = factorial(nn) / factorial(nn - rr);
      return { rows: [["Combinations (nCr)", fmt(combos, 0)], ["Permutations (nPr)", fmt(perms, 0)]] };
    },
    content: {
      howItWorks: [
        "Combinations count how many ways to choose r items from n when order doesn't matter: nCr = n! ÷ (r! × (n−r)!). Permutations count the same selection when order does matter: nPr = n! ÷ (n−r)!.",
        "Permutations are always equal to or larger than combinations for the same n and r, since every combination can be arranged in multiple orders — the permutation count is the combination count multiplied by r!.",
        "The distinction comes up constantly: picking a 3-person committee from 10 people is a combination (order irrelevant); picking a 1st, 2nd, and 3rd place finisher from 10 racers is a permutation (order matters completely).",
      ],
      example: "Choosing 3 items from 10: there are 120 combinations (order doesn't matter) but 720 permutations (order matters) — permutations are combinations × r! (here, × 3! = ×6).",
      faqs: [
        { q: "How do I know if my problem is a combination or permutation?", a: "Ask whether swapping the order of the chosen items would count as a different outcome. If yes (like race placements), it's a permutation. If no (like committee membership), it's a combination." },
        { q: "What does 0! equal, and why does that matter here?", a: "0! is defined as 1 by convention, which is what makes the nCr and nPr formulas work correctly when r equals n — choosing all n items from a set of n has exactly one combination." },
        { q: "Why do these numbers grow so fast?", a: "Factorials grow extremely quickly — 10! is already over 3.6 million — which is why combination and permutation counts can become enormous even for modest values of n." },
      ],
    },
  },
  {
    slug: "probability",
    name: "Basic Probability Calculator",
    category: cat,
    priority: "Low",
    description: "Calculate the probability of exactly k successes in n independent trials (binomial probability).",
    fields: [
      { name: "n", label: "Number of trials", default: 5 },
      { name: "k", label: "Number of successes", default: 3 },
      { name: "p", label: "Probability of success per trial", default: 0.5, step: "0.01", min: 0, max: 1 },
    ],
    compute: (v) => {
      const nn = n(v.n), k = n(v.k), p = n(v.p);
      if (k > nn) throw new Error("Successes cannot exceed trials");
      const nCr = factorial(nn) / (factorial(k) * factorial(nn - k));
      const prob = nCr * Math.pow(p, k) * Math.pow(1 - p, nn - k);
      return { rows: [["Probability", `${fmt(prob * 100, 2)}%`], ["As a decimal", fmt(prob, 4)]] };
    },
    content: {
      howItWorks: [
        "This calculates binomial probability — the chance of getting exactly k successes across n independent trials, each with the same probability p of success. Formula: P = C(n,k) × p^k × (1−p)^(n−k), where C(n,k) is the number of ways to arrange k successes among n trials.",
        "'Independent' is the key requirement — each trial's outcome can't influence the next, which holds for coin flips and dice rolls but not for situations like drawing cards without replacement.",
        "This is the standard tool for questions like 'what's the chance of exactly 3 heads in 5 coin flips' or 'what's the chance of exactly 2 defective parts in a batch of 20 with a known defect rate.'",
      ],
      example: "The chance of exactly 3 heads in 5 fair coin flips (p = 0.5): C(5,3) × 0.5³ × 0.5² = 10 × 0.125 × 0.25 = 31.25%.",
      faqs: [
        { q: "What if I want 'at least k' successes instead of 'exactly k'?", a: "Calculate this for each value from k up to n and add the results together, or subtract the probability of fewer than k successes from 1 — this tool gives the exact-k case as the building block." },
        { q: "Does this work for dice rolls too?", a: "Yes — for example, the probability of rolling exactly two 6s in four rolls of a die uses p = 1/6 (≈0.1667) as the per-trial success probability." },
        { q: "Why doesn't this work for card-drawing problems?", a: "Drawing cards without replacement changes the probability on each draw, violating the independence assumption this formula requires — that situation needs hypergeometric probability instead." },
      ],
    },
  },
  {
    slug: "slope",
    name: "Slope Calculator",
    category: cat,
    priority: "Low",
    description: "Calculate the slope and angle of a line between two points.",
    fields: [
      { name: "x1", label: "Point 1 — x", default: 1 },
      { name: "y1", label: "Point 1 — y", default: 2 },
      { name: "x2", label: "Point 2 — x", default: 4 },
      { name: "y2", label: "Point 2 — y", default: 8 },
    ],
    compute: (v) => {
      const x1 = n(v.x1), y1 = n(v.y1), x2 = n(v.x2), y2 = n(v.y2);
      if (x2 === x1) return { rows: [["Slope", "Undefined (vertical line)"]] };
      const m = (y2 - y1) / (x2 - x1);
      const angle = (Math.atan(m) * 180) / Math.PI;
      return { rows: [["Slope (m)", fmt(m, 3)], ["Angle from horizontal", `${fmt(angle, 2)}°`]] };
    },
    content: {
      howItWorks: [
        "Slope measures how steep a line is between two points: m = (y₂ − y₁) ÷ (x₂ − x₁), often described as 'rise over run.' A positive slope rises left to right; a negative slope falls.",
        "The angle from horizontal follows directly from the slope using the arctangent function, converting the ratio into a more intuitive degree measurement.",
        "A vertical line (where both points share the same x-coordinate) has an undefined slope, since the formula would require dividing by zero — this is a real mathematical edge case, not a calculator error.",
      ],
      example: "Between points (1, 2) and (4, 8): slope = (8−2) ÷ (4−1) = 2, which corresponds to an angle of about 63.4° from horizontal.",
      faqs: [
        { q: "What does a slope of 0 mean?", a: "A perfectly horizontal line — y doesn't change at all as x increases." },
        { q: "Why is a vertical line's slope undefined rather than infinite?", a: "Mathematically, division by zero has no defined value at all — calling it 'infinite' is a common informal shorthand, but 'undefined' is the technically accurate term." },
        { q: "How is slope used outside of pure math class?", a: "Grade of a road or ramp, pitch of a roof, rate of change in a data trend line — anywhere a 'steepness' or 'rate' needs a single number, it's fundamentally the same slope calculation." },
      ],
    },
  },
];
