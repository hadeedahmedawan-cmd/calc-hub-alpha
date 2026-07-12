import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CalcHub" },
      { name: "description", content: "Get in touch with CalcHub about a calculation error, a new calculator suggestion, or a general question." },
      { property: "og:title", content: "Contact — CalcHub" },
      { property: "og:url", content: `${SITE}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Contact</h1>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Have a question, found an error in a calculation, or want to suggest a new
            calculator? Reach out directly by email:
          </p>

          <p>
            <a
              href="mailto:hadeed.writes4u@gmail.com"
              className="text-base font-medium text-foreground underline underline-offset-2"
            >
              hadeed.writes4u@gmail.com
            </a>
          </p>

          <p>
            Genuine questions, bug reports, and calculator suggestions are read and answered as
            quickly as possible.
          </p>
        </div>
      </div>
    </div>
  );
}
