import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { ROUNDED_COUNT } from "@/lib/calculators/registry";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CalcHub" },
      { name: "description", content: "CalcHub is a free collection of calculators and converters for finance, health, math, and everyday life. Built and maintained by Hadeed Ahmed Awan." },
      { property: "og:title", content: "About CalcHub" },
      { property: "og:url", content: `${SITE}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">About CalcHub</h1>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            CalcHub is a free collection of {ROUNDED_COUNT}+ calculators and converters covering
            finance, health, math, everyday conversions, and more. The goal is simple: give
            people a fast, accurate tool for a specific calculation without a sign-up, an
            account, or unnecessary friction. Open the page, enter your numbers, get an answer.
          </p>

          <p>
            Every calculation runs directly in your browser. Nothing you type is sent to a
            server or stored anywhere.
          </p>

          <p>
            CalcHub is built and maintained by Hadeed Ahmed Awan, a Karachi-based publishing and
            content specialist with a long-standing interest in building useful, straightforward
            tools for everyday problems.
          </p>

          <h2 className="pt-2 text-base font-semibold text-foreground">How the calculators are built</h2>
          <p>
            Every formula on this site follows standard, publicly documented methodology — the
            same amortization formula lenders use for mortgages and loans, the Mifflin-St Jeor
            equation for calorie estimates, the Devine formula for ideal body weight, current IRS
            tax brackets for income tax estimates, and so on. Each calculator's worked example is
            checked against its own underlying formula before publishing, so the numbers shown as
            examples genuinely match what the tool itself calculates.
          </p>
          <p>
            That said, this is one person building and checking a growing set of tools, not a
            team of licensed professionals reviewing every page. Where a calculator touches
            something with real financial or health consequences, the page says so directly, and
            you should treat the result as a starting estimate to verify with a qualified
            professional, not a final answer.
          </p>

          <p>
            The site is actively maintained, and new calculators are added over time based on
            what people are searching for and asking about. If you have a suggestion, a
            correction, or found something that isn't working right, the{" "}
            <a href="/contact" className="text-foreground underline underline-offset-2">
              contact page
            </a>{" "}
            has the details.
          </p>
        </div>
      </div>
    </div>
  );
}
