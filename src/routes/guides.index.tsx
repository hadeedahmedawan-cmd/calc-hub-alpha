import { createFileRoute, Link } from "@tanstack/react-router";
import { GUIDES, STATIC_GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/site";

const DESC = "Plain-English guides that explain the math behind the calculators: mortgages, compound interest, BMI, paychecks and more.";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "Guides — CalcHub" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Guides — CalcHub" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/guides` },
      { name: "twitter:title", content: "Guides — CalcHub" },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE}/guides` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/guides` },
          ],
        }),
      },
    ],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground">Guides</span>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Guides</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The calculators give you a number. These guides explain where the number comes from, what it leaves out,
          and how to use it without fooling yourself.
        </p>

        <ul className="mt-8 space-y-4">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link
                to="/guides/$slug"
                params={{ slug: g.slug }}
                className="block rounded-lg border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-foreground">{g.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{g.description}</p>
                <p className="mt-2 text-xs text-muted-foreground">{g.readMinutes} min read</p>
              </Link>
            </li>
          ))}
          {STATIC_GUIDES.map((g) => (
            <li key={g.href}>
              <Link
                to="/guides/mortgage-vs-rent"
                className="block rounded-lg border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-foreground">{g.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{g.description}</p>
                <p className="mt-2 text-xs text-muted-foreground">{g.readMinutes} min read</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
