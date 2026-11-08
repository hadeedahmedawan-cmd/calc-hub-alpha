// Minimal client-side error logger used by the root error boundary.
// Swap the console call for a real service (Sentry, etc.) if you add one later.
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[CalcHub error]", error, {
    route: window.location.pathname,
    ...context,
  });
}
