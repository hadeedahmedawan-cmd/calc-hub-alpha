import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — CalcHub" },
      { name: "description", content: "CalcHub's privacy policy: what data is collected, how cookies and advertising work on this site, and how to get in touch." },
      { property: "og:title", content: "Privacy Policy — CalcHub" },
      { property: "og:url", content: `${SITE}/privacy` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-xs text-muted-foreground">Last updated: July 2026</p>

        <div className="mt-6 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-base font-semibold text-foreground">Calculations and your input</h2>
            <p className="mt-2">
              Every calculator on CalcHub runs entirely in your own browser. The numbers you
              enter are never sent to a server, never stored, and never seen by us. Closing or
              refreshing the page clears everything.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Cookies and advertising</h2>
            <p className="mt-2">
              CalcHub uses Google AdSense to display ads. Google and its advertising partners
              may use cookies or similar technologies to show ads based on your visits to this
              site and other sites, and to measure how ads perform. You can review or adjust how
              Google personalizes ads for you at{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2"
              >
                adssettings.google.com
              </a>
              , and read Google's own policy at{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2"
              >
                policies.google.com/technologies/partner-sites
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Server and usage logs</h2>
            <p className="mt-2">
              Like most websites, our hosting provider automatically logs standard technical
              information when you visit — things like your approximate location, browser type,
              and the pages requested. This is common server-level logging, not something
              CalcHub collects or reviews individually, and it is not linked to any personal
              identity.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">No accounts, no personal data collection</h2>
            <p className="mt-2">
              CalcHub does not require sign-up or an account, and we do not ask for your name,
              email, or any other personal information to use the calculators.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Children's privacy</h2>
            <p className="mt-2">
              CalcHub is not directed at children under 13, and we do not knowingly collect any
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Changes to this policy</h2>
            <p className="mt-2">
              This policy may be updated from time to time as the site changes. The date at the
              top of this page reflects the most recent update.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions about this policy can be sent to{" "}
              <a
                href="mailto:hadeed.writes4u@gmail.com"
                className="text-foreground underline underline-offset-2"
              >
                hadeed.writes4u@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
