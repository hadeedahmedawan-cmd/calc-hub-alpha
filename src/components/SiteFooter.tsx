import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <div>CalcHub — all calculations run in your browser.</div>
        <nav className="flex items-center gap-4">
          <Link to="/about" className="hover:text-foreground">
            About
          </Link>
          <Link to="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
