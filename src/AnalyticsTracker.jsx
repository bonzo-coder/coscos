import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import {
  ANALYTICS_CONSENT_EVENT,
  hasAnalyticsConsent,
} from "./analytics";

function AnalyticsTracker() {
  const location = useLocation();
  const [hasConsent, setHasConsent] = useState(() => hasAnalyticsConsent());

  useEffect(() => {
    const handleConsentChange = (event) => {
      setHasConsent(event.detail?.status === "granted");
    };

    window.addEventListener(ANALYTICS_CONSENT_EVENT, handleConsentChange);

    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_EVENT, handleConsentChange);
    };
  }, []);

  useEffect(() => {
    if (!hasConsent) {
      return;
    }

    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search
    });
  }, [hasConsent, location]);

  return null;
}

export default AnalyticsTracker;