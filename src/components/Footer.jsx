import { Link } from "react-router-dom";
import { useLanguage } from "../assets/LanguageContext.jsx";
import { getMapsUrl } from "../utils/maps.js";

const primaryPhone = "+48600392004";
const secondaryPhone = "+48227507320";

export default function Footer() {
  const { language } = useLanguage();
  const mapsUrl = getMapsUrl();

  const text = {
    pl: {
      menu: "Menu",
      website: "Strona",
      contact: "Kontakt",
      company: "Easy Link Polska",
      phoneLabel: "tel.",
      phones: ["+48 600 392 004", "+48 22 750 73 20"],
      fax: "fax +48 22 750 87 88",
      address: "05-500 Piaseczno, ul. Nefrytowa 12",
      email: "e-mail: info@easylink.com.pl",
      links: [
        { label: "Strona główna", to: "/" },
        { label: "O firmie", to: "/about" },
        { label: "Zastosowania", to: "/applications" },
        { label: "Platformy", to: "/platforms" },
        { label: "Akcesoria", to: "/accessories" },
        { label: "Przenośniki taśmowe", to: "/lifts" },
        { label: "Paletyzator", to: "/palletizer" },
        { label: "Polityka prywatności", to: "/privacy-policy" },
      ],
    },
    en: {
      menu: "Menu",
      website: "Website",
      contact: "Contact",
      company: "Easy Link Poland",
      phoneLabel: "tel.",
      phones: ["+48 600 392 004", "+48 22 750 73 20"],
      fax: "fax +48 22 750 87 88",
      address: "05-500 Piaseczno, Nefrytowa 12",
      email: "e-mail: info@easylink.com.pl",
      links: [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Applications", to: "/applications" },
        { label: "Platforms", to: "/platforms" },
        { label: "Accessories", to: "/accessories" },
        { label: "Conveyor Belts", to: "/lifts" },
        { label: "Palletizer", to: "/palletizer" },
        { label: "Privacy Policy", to: "/privacy-policy" },
      ],
    },
  };

  const t = text[language] || text.pl;

  return (
    <footer className="site-footer">
      <div className="site-footer__col">
        <h3>{t.menu}</h3>
        <ul className="site-footer__links">
          {t.links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="site-footer__col">
        <h4>{t.website}</h4>
        <a href="https://www.easylink.com.pl" target="_blank" rel="noreferrer">
          www.easylink.com.pl
        </a>
      </div>

      <div className="site-footer__col">
        <h4>{t.contact}</h4>
        <p>{t.company}</p>
        <p>
          {t.phoneLabel}{" "}
          <a href={`tel:${primaryPhone}`}>{t.phones[0]}</a>
          {"  |  "}
          {t.phoneLabel}{" "}
          <a href={`tel:${secondaryPhone}`}>{t.phones[1]}</a>
        </p>
        <p>{t.fax}</p>
        <p>
          <a href={mapsUrl} target="_blank" rel="noreferrer">{t.address}</a>
        </p>
        <p>
          <a href="mailto:info@easylink.com.pl">{t.email}</a>
        </p>
      </div>
    </footer>
  );
}