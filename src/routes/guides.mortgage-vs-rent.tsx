import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/guides/mortgage-vs-rent")({
  head: () => ({
    meta: [
      { title: "Mortgage vs. Rent: The Real Monthly Math — CalcHub" },
      { name: "description", content: "Buying and renting aren't as different on paper as people assume. A breakdown of what actually changes month to month, and the costs that never show up in either number." },
      { property: "og:title", content: "Mortgage vs. Rent: The Real Monthly Math" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE}/guides/mortgage-vs-rent` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/guides/mortgage-vs-rent` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/guides/mortgage-vs-rent` },
            { "@type": "ListItem", position: 3, name: "Mortgage vs. Rent", item: `${SITE}/guides/mortgage-vs-rent` },
          ],
        }),
      },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <article className="mx-auto max-w-2xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground">Mortgage vs. Rent</span>
        </nav>

        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          Mortgage vs. Rent: The Real Monthly Math
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Every "rent vs. buy" calculator on the internet reduces this to one number. That number
          is useful, but it's not the whole decision, and the parts it leaves out are usually
          bigger than the parts it includes.
        </p>

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground">
          <p>
            Start with the number everyone actually wants: on a $400,000 home with 20% down at
            6.5%, the mortgage payment is $2,022.62 a month. Put down 10% instead and it climbs to
            $2,275.44 — not because you borrowed a little more, but because the interest is now
            compounding on a bigger balance for the same 30 years. That gap, roughly $250 a month,
            is the actual price of the smaller down payment, and it's worth running through the{" "}
            <Link to="/c/$slug" params={{ slug: "mortgage" }} className="text-foreground underline underline-offset-2">
              mortgage calculator
            </Link>{" "}
            yourself before assuming a lower down payment is the "affordable" option. Sometimes
            it's just deferred cost.
          </p>

          <p>
            Here's the part most comparisons skip: that $2,022.62 isn't your real monthly cost of
            owning the home. Property taxes, homeowners insurance, and — if you put down less than
            20% — PMI all sit on top of it, usually adding somewhere between $400 and $800 a month
            depending on your location and tax rate. A landlord's rent number, by contrast,
            already has all of that baked in. Comparing a bare mortgage payment to a rent number is
            comparing two different kinds of totals, and it makes buying look cheaper than it is.
          </p>

          <h2 className="pt-2 text-lg font-semibold text-foreground">The maintenance line nobody budgets for</h2>
          <p>
            Renters have a landlord who eats the cost when the water heater dies. Owners don't.
            The commonly cited rule of thumb is 1% of the home's value per year in maintenance and
            repairs — on a $400,000 house, that's roughly $333 a month, and it doesn't arrive
            evenly. Some years it's replacing a $40 faucet washer. Some years the roof needs
            $12,000 of work in a single month. Renters get a predictable number. Owners get an
            average that hides genuinely unpredictable spikes, and the people who get caught out
            by this are usually the ones who budgeted the mortgage payment and nothing else.
          </p>

          <h2 className="pt-2 text-lg font-semibold text-foreground">What renting actually buys you</h2>
          <p>
            None of this is an argument that renting is smarter. It's an argument that the two
            options aren't as directly comparable as a single "which is cheaper" number implies.
            Renting buys flexibility — you can leave in a year if the job changes, the
            neighborhood doesn't work out, or life just goes sideways, without a real estate
            transaction attached to the decision. Buying buys equity — every principal payment is
            money that comes back to you later, which is not true of a single dollar of rent. Which
            of those matters more depends on how long you actually expect to stay, and that's the
            single biggest variable most people underweight.
          </p>
          <p>
            As a rough anchor: the often-cited break-even point for buying versus renting is
            somewhere around 3 to 5 years in a stable market — stay shorter than that and closing
            costs and selling costs on the home tend to eat whatever equity you built. Stay
            considerably longer, and owning tends to win outright. Right around that 3-to-5-year
            mark is genuinely a toss-up, and no calculator can tell you which side of that line
            your specific life will land on.
          </p>

          <h2 className="pt-2 text-lg font-semibold text-foreground">The down payment question is really two questions</h2>
          <p>
            Whether to put down 10% or 20% gets asked as one question, but it's actually two:
            can you afford the higher monthly payment that comes with putting down less, and do
            you want to tie up that extra cash in a house instead of keeping it liquid. PMI on a
            10%-down loan is an added cost, but it's not necessarily an irrational one — it can be
            the difference between buying now at today's price or waiting years to save the
            remaining 10%, during which prices and rates can both move against you. There's no
            universally correct answer here. There's only your own math, run through the{" "}
            <Link to="/c/$slug" params={{ slug: "down-payment" }} className="text-foreground underline underline-offset-2">
              down payment calculator
            </Link>{" "}
            with your actual numbers, not a stranger's example.
          </p>

          <h2 className="pt-2 text-lg font-semibold text-foreground">A quick gut check either way</h2>
          <p>
            If you're currently renting and thinking about whether you could afford to buy, a
            reasonable first move is checking your number against the standard affordability
            guideline — most lenders and planners still lean on keeping housing costs at or under
            roughly 30% of gross income, which you can check quickly with the{" "}
            <Link to="/c/$slug" params={{ slug: "rent-affordability" }} className="text-foreground underline underline-offset-2">
              rent affordability calculator
            </Link>
            . It's built around rent specifically, but the same 30% ceiling is a reasonable
            starting sanity check for a full mortgage payment too, once you've added taxes,
            insurance, and a maintenance buffer on top of the raw loan payment.
          </p>

          <p className="pt-2 text-sm text-muted-foreground">
            None of this replaces talking to a lender or a financial advisor about your specific
            situation — this is the shape of the decision, not a substitute for running your own
            numbers with someone who can see your full financial picture.
          </p>
        </div>
      </article>
    </div>
  );
}
