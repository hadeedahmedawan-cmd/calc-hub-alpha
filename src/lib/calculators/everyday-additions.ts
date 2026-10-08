import type { Calculator } from "./types";
import { fmt, money, n } from "./helpers";

const cat = "Everyday & Utility";

export const everydayAdditions: Calculator[] = [
  {
    slug: "unit-price-comparator",
    name: "Unit Price Comparator",
    category: cat,
    priority: "Medium",
    description: "Compare two package sizes to find which one is actually the better deal per unit.",
    fields: [
      { name: "priceA", label: "Product A — price", unit: "$", default: 4.99 },
      { name: "sizeA", label: "Product A — size", default: 12 },
      { name: "priceB", label: "Product B — price", unit: "$", default: 7.49 },
      { name: "sizeB", label: "Product B — size", default: 20 },
    ],
    compute: (v) => {
      const pA = n(v.priceA), sA = n(v.sizeA), pB = n(v.priceB), sB = n(v.sizeB);
      const upA = pA / sA, upB = pB / sB;
      const winner = upA < upB ? "Product A" : upB < upA ? "Product B" : "Tie — same unit price";
      return {
        rows: [
          ["Product A unit price", `${money(upA)} per unit`],
          ["Product B unit price", `${money(upB)} per unit`],
          ["Better deal", winner],
        ],
      };
    },
    content: {
      howItWorks: [
        "Unit price divides total cost by quantity, giving a directly comparable per-unit cost regardless of package size: unit price = total price ÷ size. Whichever product has the lower unit price is the actual better value, even if its sticker price is higher.",
        "This matters because bigger packages aren't automatically cheaper per unit — bulk pricing, sales, and store-brand markups can all break the assumption that larger equals better value.",
        "Grocery stores in many regions post a 'unit price' tag on the shelf already, but it's not universal, and it's not always in directly comparable units (ounces vs. count, for instance) — this tool normalizes that.",
      ],
      example: "A $4.99 12oz product ($0.4158/oz) versus a $7.49 20oz product ($0.3745/oz): the larger package is the better deal despite the higher sticker price.",
      faqs: [
        { q: "Why isn't the bigger package always cheaper per unit?", a: "Retailers price based on demand, shelf placement, and promotions as much as raw economics — a 'family size' package is sometimes priced at a worse per-unit rate than the regular size, especially during sales on the smaller option." },
        { q: "Does this work for any kind of unit?", a: "Yes — ounces, count, sheets, loads, anything with a consistent quantity measure on both products works, as long as you're comparing the same kind of unit on both sides." },
        { q: "What if the package sizes use different units entirely?", a: "Convert both to the same unit first (using one of the site's unit converters if needed), since comparing price-per-ounce against price-per-gram directly wouldn't give a meaningful answer." },
      ],
    },
  },
  {
    slug: "change-breakdown",
    name: "Change / Cash Breakdown Calculator",
    category: cat,
    priority: "Low",
    description: "Break down an amount of money into the fewest US bills and coins.",
    fields: [{ name: "amount", label: "Amount", unit: "$", default: 47.68 }],
    compute: (v) => {
      let cents = Math.round(n(v.amount) * 100);
      const denoms: [number, string][] = [
        [10000, "$100 bill"], [5000, "$50 bill"], [2000, "$20 bill"], [1000, "$10 bill"],
        [500, "$5 bill"], [100, "$1 bill"], [25, "Quarter"], [10, "Dime"], [5, "Nickel"], [1, "Penny"],
      ];
      const rows: [string, string][] = [];
      for (const [val, name] of denoms) {
        const count = Math.floor(cents / val);
        if (count > 0) {
          rows.push([name, String(count)]);
          cents -= count * val;
        }
      }
      return { rows: rows.length ? rows : [["Result", "$0.00 — nothing to break down"]] };
    },
    content: {
      howItWorks: [
        "This uses a greedy algorithm — always taking the largest denomination that fits, then moving to the next-largest — to break an amount into the fewest possible US bills and coins.",
        "The greedy approach happens to give the true minimum count for standard US currency denominations, which isn't guaranteed for every possible set of denominations in general, but works correctly for USD.",
        "Useful for cashiers, cash-handling training, or just double-checking that you've got exact change for something before a transaction.",
      ],
      example: "$47.68 breaks down to 2×$20, 1×$5, 2×$1, 2 quarters, 1 dime, 1 nickel, and 3 pennies — the minimum count of bills and coins to make that exact amount.",
      faqs: [
        { q: "Why does the greedy method work for US currency specifically?", a: "US denominations are structured so that always grabbing the largest note or coin that fits never leads to a worse overall result — this isn't true for every possible currency system, but it holds for USD." },
        { q: "Does this include $2 bills or half-dollar coins?", a: "No — this covers the denominations in standard everyday circulation. $2 bills and half-dollars exist but are uncommon enough in daily use that most cash-handling scenarios don't count on having them available." },
        { q: "What if the amount has more than 2 decimal places?", a: "The calculator rounds to the nearest cent first, since US currency doesn't have a smaller unit than the penny to break down further." },
      ],
    },
  },
  {
    slug: "grade-curve",
    name: "Grade Curve Calculator",
    category: cat,
    priority: "Low",
    description: "Apply the square-root curving method to a raw test score.",
    fields: [{ name: "raw", label: "Raw score (out of 100)", default: 64, min: 0, max: 100 }],
    compute: (v) => {
      const raw = n(v.raw);
      if (raw < 0 || raw > 100) throw new Error("Enter a score between 0 and 100");
      const curved = Math.round(Math.sqrt(raw) * 10);
      return { rows: [["Raw score", `${raw}`], ["Curved score", `${curved}`], ["Points added", `+${curved - raw}`]] };
    },
    content: {
      howItWorks: [
        "The square-root curve is a common single-score curving method: take the square root of the raw score (out of 100) and multiply by 10. Formula: curved = √raw × 10.",
        "This method boosts lower scores more than higher ones — a 100 stays 100, but a 50 jumps to about 71, and a 25 jumps to 50. The lower the original score, the bigger the relative boost.",
        "This is one specific, widely-referenced curving method among several that instructors use — a flat-point curve (adding the same number of points to every score) is a different, equally common approach with different effects on the grade distribution.",
      ],
      example: "A raw score of 64 curves to √64 × 10 = 80 — a 16-point boost.",
      faqs: [
        { q: "Why does this method help lower scores more?", a: "The square root function compresses the top of the scale and stretches the bottom — the mathematical effect is that scores further from 100 get proportionally larger boosts than scores already close to it." },
        { q: "Is this the only way to curve grades?", a: "No — flat-point curves, curving to a target class average, and standard-deviation-based curves are all used by different instructors. This tool covers specifically the square-root method." },
        { q: "Does a score of 100 ever change under this method?", a: "No — √100 × 10 = 100 exactly, so a perfect score stays perfect under this particular curving method." },
      ],
    },
  },
  {
    slug: "work-hours-fte",
    name: "Work Hours to FTE Calculator",
    category: cat,
    priority: "Low",
    description: "Convert weekly work hours into a Full-Time-Equivalent (FTE) fraction.",
    fields: [
      { name: "weeklyHours", label: "Average hours worked per week", default: 30 },
      { name: "standardHours", label: "Standard full-time hours per week", default: 40 },
    ],
    compute: (v) => {
      const worked = n(v.weeklyHours), standard = n(v.standardHours);
      const fte = worked / standard;
      return { rows: [["FTE", fmt(fte, 2)], ["As percentage", `${fmt(fte * 100, 1)}%`]] };
    },
    content: {
      howItWorks: [
        "FTE (Full-Time-Equivalent) expresses part-time or variable hours as a fraction of a standard full-time schedule: FTE = hours worked ÷ standard full-time hours. An FTE of 1.0 means fully full-time; 0.5 means half-time.",
        "Standard full-time hours are usually 40/week in the US, though some organizations use 37.5 or other figures — the calculation works the same way regardless of which standard you're measuring against.",
        "HR and finance teams use FTE to normalize headcount across part-time and full-time staff for budgeting, staffing ratios, and benefits eligibility calculations, since raw headcount alone can be misleading when hours vary a lot.",
      ],
      example: "Someone working 30 hours a week against a 40-hour full-time standard has an FTE of 0.75, or 75%.",
      faqs: [
        { q: "Can FTE combine multiple part-time employees?", a: "Yes — two employees each at 0.5 FTE combine to 1.0 FTE for staffing and budgeting purposes, even though they're two separate people rather than one full-time position." },
        { q: "Does FTE account for overtime?", a: "Not directly — FTE is a straightforward ratio of scheduled or worked hours to the standard, and doesn't factor in overtime pay rates or rules on its own." },
        { q: "Why do different organizations use different standard hours?", a: "It usually reflects that organization's own definition of a full-time work week — some use exactly 40, others use 37.5 or 35 depending on industry norms and internal policy." },
      ],
    },
  },
];
