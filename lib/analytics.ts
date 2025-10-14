export function initAnalytics() {
  if (typeof window === 'undefined') return;

  // Placeholder for GA4 initialization
  if (!(window as typeof window & { dataLayer?: unknown[] }).dataLayer) {
    (window as typeof window & { dataLayer: unknown[] }).dataLayer = [];
  }

  function gtag(...args: unknown[]) {
    (window as typeof window & { dataLayer: unknown[] }).dataLayer.push(args);
  }

  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
}
