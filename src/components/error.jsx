import { Link, useRouteError } from "react-router-dom"
import { useLanguage } from "../assets/LanguageContext.jsx"

export default function Error() {
    const error = useRouteError()
    const { language } = useLanguage()

    const content = {
        pl: {
            title: "Wystąpił problem z otwarciem tej strony",
            message: "Wybrana treść jest chwilowo niedostępna albo link prowadzi do błędnego adresu.",
            action: "Wróć na stronę główną",
            details: "Szczegóły błędu",
            fallbackStatus: "Nieznany błąd",
        },
        en: {
            title: "There was a problem opening this page",
            message: "The selected content is temporarily unavailable or the link points to an invalid address.",
            action: "Back to home page",
            details: "Error details",
            fallbackStatus: "Unknown error",
        },
    }

    const t = content[language] || content.pl
    const errorStatus = error?.status || t.fallbackStatus
    const errorMessage = error?.statusText || error?.message
    
    return (
        <div className="error-page">
            <main className="error-page__content">
                <section className="error-page__panel">
                    <p className="error-page__code">{errorStatus}</p>
                    <h1>{t.title}</h1>
                    <p className="error-page__message">{t.message}</p>
                    {errorMessage ? (
                        <p className="error-page__details">
                            <span>{t.details}:</span> {errorMessage}
                        </p>
                    ) : null}
                    <Link to="/" className="link-button error-page__button">{t.action}</Link>
                </section>
            </main>
        </div>
    )
}