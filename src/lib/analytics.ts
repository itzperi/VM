// Optional GA4 + Google Ads conversion tracking. Everything here is a no-op
// unless the matching VITE_* variable is set at build time (see .env.example),
// so local builds and the prerender script never load third-party scripts.
//
// Why it matters: the 30-40 bulk enquiries/month goal can't be managed without
// counting enquiries per channel, and Google Ads can't optimise toward 5,000+
// unit leads without a conversion event.

type Env = Record<string, string | undefined>;
const env: Env = ((import.meta as unknown as { env?: Env }).env) ?? {};

const GA_ID = env.VITE_GA_MEASUREMENT_ID;
// Format: AW-XXXXXXXXX/ConversionLabel
const ADS_CONVERSION = env.VITE_GOOGLE_ADS_CONVERSION;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initAnalytics(): void {
  if (typeof window === 'undefined' || (!GA_ID && !ADS_CONVERSION) || window.gtag) return;
  const primaryId = GA_ID || ADS_CONVERSION!.split('/')[0];
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the raw `arguments` object, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  if (GA_ID) window.gtag('config', GA_ID);
  if (ADS_CONVERSION) window.gtag('config', ADS_CONVERSION.split('/')[0]);
}

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}

/** Fired on every quote submission. `units` is the selected quantity tier. */
export function trackLead(params: { units?: string; requirement: string; source: string }): void {
  trackEvent('generate_lead', { quantity_tier: params.units, requirement: params.requirement, form: params.source });
  if (ADS_CONVERSION) trackEvent('conversion', { send_to: ADS_CONVERSION });
}
