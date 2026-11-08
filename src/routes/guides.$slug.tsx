import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GUIDE_BY_SLUG, formatUpdated } from "@/lib/guides";
import { CALC_BY_SLUG } from "@/lib/calculators/registry";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = GUIDE_BY_SLUG[params.slug];
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ params, loaderData }) => {
    const g = loaderData?.guide;
    if (!g) return { meta: [{ title: "Guide not found — CalcHub" }, { name: "robots", content: "noindex" }] };
    const url = `${SITE}/guides/${params.slug}`;
    return {
      meta: [
        { title: `${g.title} — CalcHub` },
        { name: "description", content: g.description },
        { property: "og:title", content: g.title },
        { property: "og:description", content: g.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:title", content: g.title },
        { name: "twitter:description", content: g.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: g.title,
            description: g.description,
            dateModified: g.updated,
            mainEntityOfPage: url,
            image: `${SITE}/og-image.png`,
            author: { "@type": "Person", name: "Hadeed Ahmed Awan" },
            publisher: { "@type": "Organization", name: "CalcHub", logo: { "@type": "ImageObject", url: `${SITE}/apple-touch-icon.png` } },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/guides` },
              { "@type": "ListItem", position: 3, name: g.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: GuidePage,
});

// Turns {{calc:slug|label}} markers into real links to calculators.
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\{\{calc:[a-z0-9-]+\|[^}]+\}\})/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\{\{calc:([a-z0-9-]+)\|([^}]+)\}\}$/);
        if (!m) return <span key={i}>{part}</span>;
        return (
          <Link key={i} to="/c/$slug" params={{ slug: m[1] }} className="text-foreground underline underline-offset-2">
            {m[2]}
          </Link>
        );
      })}
    </>
  );
}

function GuidePage() {
  const { guide } = Route.useLoaderData();
  const related = guide.related.map((s) => CALC_BY_SLUG[s]).filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <article className="mx-auto max-w-2xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-1.5">/</span>
          <Link to="/guides" className="hover:text-foreground">Guides</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground">{guide.title}</span>
        </nav>

        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">{guide.title}</h1>
        <p className="mt-2 text-xs text-muted-foreground">
          By Hadeed Ahmed Awan · Last reviewed {formatUpdated(guide.updated)} · {guide.readMinutes} min read
        </p>
        <p className="mt-5 text-base leading-relaxed text-foreground">{guide.intro}</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground">
          {guide.sections.map((s, i) => (
            <section key={i}>
              {s.heading && <h2 className="mb-3 text-lg font-semibold text-foreground">{s.heading}</h2>}
              <div className="space-y-4">
                {s.paragraphs.map((p, j) => (
                  <p key={j}><Inline text={p} /></p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {related.length > 0 && (
          <section className="mt-10 border-t border-border pt-6">
            <h2 className="text-base font-semibold text-foreground">Calculators mentioned in this guide</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {related.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/c/$slug"
                    params={{ slug: c.slug }}
                    className="block rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-md"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">{guide.disclaimer}</p>
      </article>
    </div>
  );
}
