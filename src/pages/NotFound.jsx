import { Link } from "react-router-dom"
import { useLanguage } from "../assets/LanguageContext.jsx"

export default function NotFound() {
    const { language } = useLanguage()

    const content = {
        pl: {
            code: "404",
            title: "Nie udało się znaleźć tej strony",
            message: "Wygląda na to, że adres jest nieprawidłowy albo strona została przeniesiona.",
            action: "Wróć na stronę główną",
        },
        en: {
            code: "404",
            title: "We couldn’t find this page",
            message: "It looks like the address is invalid or the page has been moved.",
            action: "Back to home page",
        },
    }

    const t = content[language] || content.pl

    return (
        <section className="not-found-page">
            <div className="not-found-page__panel">
                <p className="not-found-page__code">{t.code}</p>
                <h1>{t.title}</h1>
                <p className="not-found-page__message">{t.message}</p>
                <Link to="/" className="link-button not-found-page__button">{t.action}</Link>
            </div>
        </section>
    )
}
