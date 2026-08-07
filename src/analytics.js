import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";

export const ANALYTICS_CONSENT_KEY = "easylink_analytics_consent";
export const ANALYTICS_CONSENT_EVENT = "analytics-consent-changed";

const gaMeasurementId = import.meta.env.VITE_GA_ID || "G-T08MM2XZDG";
const gtmId = import.meta.env.VITE_GTM_ID || "GTM-5VL79GSK";

let isInitialized = false;

export function getAnalyticsConsent() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
}

export function hasAnalyticsConsent() {
  return getAnalyticsConsent() === "granted";
}

export function initializeAnalytics() {
  if (isInitialized || !hasAnalyticsConsent()) {
    return;
  }

  if (gaMeasurementId) {
    ReactGA.initialize(gaMeasurementId);
  }

  if (gtmId) {
    TagManager.initialize({ gtmId });
  }

  isInitialized = true;
}

export function setAnalyticsConsent(status) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(ANALYTICS_CONSENT_KEY, status);

  if (status === "granted") {
    initializeAnalytics();
  }

  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_EVENT, {
    detail: { status },
  }));
}
