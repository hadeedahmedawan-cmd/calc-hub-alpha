import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { calcsByCategory, CATEGORY_SLUGS } from "@/lib/calculators/registry";
import { CATEGORY_INTROS } from "@/lib/calculators/category-intros";
import { AdSlot } from "@/components/AdSlot";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = CATEGORY_SLUGS[params.slug];
    if (!category) throw notFound();
    return { category };
  },
  head: ({ params, loaderData }) => {
    const category = loaderData?.category;
    if (!category) return { meta: [{ title: "Category not found — CalcHub" }] };
    const calcs = calcsByCategory()[category] ?? [];
    const url = `${SITE}/category/${params.slug}`;
    return {
      meta: [
        { title: `${category} Calculators — CalcHub` },
        { name: "description", content: `${calcs.length} free ${category.toLowerCase()} calculators. ${CATEGORY_INTROS[category] ?? ""}`.slice(0, 160) },
        { property: "og:title", content: `${category} Calculators — CalcHub` },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: category, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const calcs = calcsByCategory()[category] ?? [];
  const intro = CATEGORY_INTROS[category];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground">{category}</span>
        </nav>

        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {category} Calculators
        </h1>
        {intro && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{intro}</p>}
        <p className="mt-2 text-xs text-muted-foreground">{calcs.length} calculators in this category</p>

        <AdSlot slot="3333333333" format="horizontal" minHeight={100} label="Sponsored" className="my-8" />

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {calcs.map((c) => (
            <Link
              key={c.slug}
              to="/c/$slug"
              params={{ slug: c.slug }}
              className="block rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
