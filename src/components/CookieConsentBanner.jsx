import { useMemo, useState } from "react";
import {
  ANALYTICS_CONSENT_KEY,
  setAnalyticsConsent,
} from "../analytics";
import { useLanguage } from "../assets/LanguageContext.jsx";
import { labels } from "../assets/texts";

function CookieConsentBanner() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return !window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
  });

  const buttonsDisabled = useMemo(() => !isVisible, [isVisible]);
  const cookieLabels = labels[language]?.cookieBanner || labels.pl.cookieBanner;

  const handleChoice = (status) => {
    setAnalyticsConsent(status);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label={cookieLabels.ariaLabel}>
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          {cookieLabels.message}
        </p>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--secondary"
            onClick={() => handleChoice("denied")}
            disabled={buttonsDisabled}
          >
            {cookieLabels.reject}
          </button>
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--primary"
            onClick={() => handleChoice("granted")}
            disabled={buttonsDisabled}
          >
            {cookieLabels.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsentBanner;
