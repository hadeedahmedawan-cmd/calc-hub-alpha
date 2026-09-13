import type { Calculator } from "./types";
import { financial } from "./financial";
import { health } from "./health";
import { converters } from "./converters";
import { everyday } from "./everyday";
import { mathCalcs } from "./math";
import { misc } from "./misc";
import { CONTENT } from "./content";

const RAW: Calculator[] = [
  ...financial, ...health, ...converters, ...everyday, ...mathCalcs, ...misc,
];

export const ALL_CALCULATORS: Calculator[] = RAW.map((c) =>
  CONTENT[c.slug] ? { ...c, content: CONTENT[c.slug] } : c,
);

export const ROUNDED_COUNT = Math.floor(ALL_CALCULATORS.length / 10) * 10;

export const CALC_BY_SLUG: Record<string, Calculator> = Object.fromEntries(
  ALL_CALCULATORS.map((c) => [c.slug, c]),
);

export function calcsByCategory(): Record<string, Calculator[]> {
  const out: Record<string, Calculator[]> = {};
  for (const c of ALL_CALCULATORS) (out[c.category] ??= []).push(c);
  return out;
}

export function slugifyCategory(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const CATEGORY_SLUGS: Record<string, string> = Object.fromEntries(
  [...new Set(ALL_CALCULATORS.map((c) => c.category))].map((cat) => [slugifyCategory(cat), cat]),
);