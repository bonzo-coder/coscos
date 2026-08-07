import { useLanguage } from '../assets/LanguageContext';
import videoHero from "../../public/video/easylink-video.mp4";
import RotabLogo from "../../public/rotab-logo.svg";
import palletizerImg1 from "../../public/img/palletizer1.avif";
import palletizerImg2 from "../../public/img/palletizer2.jpg.avif";
import palletizerImg3 from "../../public/img/palletizer3.jpg.avif";
import palletizerImg4 from "../../public/img/palletizer4.jpg.avif";
import palletizerImg5 from "../../public/img/palletizer4.jpg.avif";

const textContent = {
  pl: {
    company: "Easy Link Polska",
    title: " Paletyzatory automatyczne",
    paragraphs: [
      "Jako dystrybutor rozwiązań firmy ROTAB AB oferujemy nowoczesne automatyczne paletyzatory przeznaczone do wydajnego układania produktów na paletach w liniach produkcyjnych i pakujących. Systemy te pozwalają znacząco usprawnić końcowy etap procesu logistycznego, zwiększając wydajność oraz powtarzalność operacji.",
      "Paletyzatory ROTAB mogą obsługiwać różne typy ładunków, takie jak kartony, skrzynki czy worki. Dzięki elastycznej konstrukcji i możliwości integracji z przenośnikami oraz systemami transportu palet, rozwiązania te można łatwo dopasować do specyfiki danej linii produkcyjnej.",
      "Automatyzacja procesu paletyzacji pozwala ograniczyć pracę manualną, poprawić bezpieczeństwo stanowisk pracy oraz zoptymalizować wykorzystanie przestrzeni magazynowej. Systemy te znajdują zastosowanie w wielu branżach, m.in. w przemyśle spożywczym, produkcyjnym i logistycznym.",
      "Zapewniamy wsparcie na każdym etapie wdrożenia - od analizy potrzeb i doboru odpowiedniego rozwiązania, po integrację systemu oraz serwis techniczny. Dzięki temu nasi Klienci mogą w pełni wykorzystać możliwości nowoczesnych systemów automatycznej paletyzacji."
    ],
    title1: "Paletyzator automatyczny EasyLink CUBE G1 stawia konkurencję do pionu",
    text1: "Urządzenie umożliwia w pełni automatyczny załadunek towarów na paletę. Maszyna paletująca Easy Link wyposażona jest w narzędzie chwytające, które jest dostosowane w zależności od rodzaju opakowania, jego rozmiarów i wagi. Jest w pełni konfigurowalna oraz łatwa w montażu, a jej kompaktowa konstrukcja zajmuje minimalną ilość przestrzeni przy linii pakowania produktów.",
    title2: "Wszechstronnie uzdolniony paletyzator automatyczny",
    text2: "CUBE G1 został zaprojektowany do automatycznego układania rozmaitych towarów oraz produktów na paletach. Konstrukcja paletyzera spełnia wymogi niezawodności i łatwości w utrzymaniu higieny na linii pakującej. Paletyzator składa się z modułów, dzięki czemu w łatwy sposób można dopasować jego konfigurację do indywidualnych potrzeb klienta.",
    title3: "Dopasowany do wyzwań. Niezawodna maszyna do pakowania",
    text3: "Konstrukcja paletyzera CUBE G1 jest wykonana ze stali nierdzewnej. Dotykowy panel umożliwia intuicyjną obsługę paletyzatora. Paletyzator CUBE G1 jest w pełni konfigurowalny oraz łatwy w montażu. Dzięki zaawansowanej konstrukcji możliwe jest podłączenie paletyzatora CUBE G1 do sieci komputerowej i uzyskanie zdalnie pomocy producenta przy połączeniu przez tunel VPN (Software Remote Maintenance). Tą metodą można uzyskać bezpośrednią pomoc przy konfiguracji urządzenia, rozwiązywaniu problemów technicznych oraz aktualizacje oprogramowania.",
    title4: "Swoboda konfiguracji. Opcjonalne wyposażenie maszyny paletującej",
    text4: [
      "Podstawową konstrukcję urządzenia można wzbogacić o dodatkowe moduły zwiększające funkcjonalność urządzenia:",
      "dodatkowe narzędzia chwytające produkty",
      "podajnik rolkowy transportujący produkty do Paletyzera  (używany jako bufor przy wymiany palet), ustawiający opakowanie w pozycji do pobrania przez chwytak Paletyzera",
      "automatyczny podajnik przekładek - do wstępnie wyciętych arkuszy o wymiarach 1200 x 800 mm"
    ],
    title5: "Paletyzator automatyczny CUBE G1 - dane techniczne",
    text5: [
      "Długość: 1930 mm",
      "Szerokość: 1870 mm",
      "Wysokość: 2500 mm (bez wieży z lampą ostrzegawczą)",
      "Maksymalne ilość cykli pobierania: ok. 8 szt/min (chwytanie pojedynczego opakowania) lub 16 szt/min (chwytanie  w jednym czasie dwóch opakowań)",
      "Maksymalna długość produktu: 600 mm",
      "Maksymalna szerokość produktu: 400 mm"
    ]
  },
  en: {
    company: "Easy Link Poland",
    title: "Automatic Palletizers",
    paragraphs: [
      "As a distributor of solutions from ROTAB AB, we offer modern automatic palletizers designed for efficient product stacking on pallets in production and packaging lines. These systems significantly streamline the final stage of the logistics process, increasing efficiency and consistency of operations.",
      "ROTAB palletizers can handle various types of loads, such as cartons, crates, or bags. Thanks to their flexible design and integration capabilities with conveyors and pallet transport systems, these solutions can be easily adapted to the specific needs of a production line.",
      "Automating the palletizing process reduces manual labor, improves workplace safety, and optimizes warehouse space utilization. These systems are used in various industries, including food processing, manufacturing, and logistics.",
      "We provide support at every stage of implementation - from needs analysis and selecting the right solution to system integration and technical service. This ensures that our clients can fully leverage the potential of modern automatic palletizing systems."
    ],
    title1: "The EasyLink CUBE G1 automatic palletizer stands out from the competition",
    text1: "The device enables fully automatic loading of goods onto a pallet. The Easy Link palletizing machine is equipped with a gripping tool, which is adapted depending on the type of packaging, its dimensions, and weight. It is fully configurable and easy to install, and its compact design takes up minimal space on the product packaging line.",
    title2: "A versatile automatic palletizer",
    text2: "The CUBE G1 is designed to automatically stack various goods and products on pallets. The palletizer's design meets the requirements of reliability and ease of maintaining hygiene on the packaging line. The palletizer consists of modules, making it easy to adapt its configuration to the individual needs of the customer.",
    title3: "Tailored to challenges. Reliable packaging machine",
    text3: "The structure of the CUBE G1 palletizer is made of stainless steel. A touch panel enables intuitive operation of the palletizer. The CUBE G1 palletizer is fully configurable and easy to assemble. Thanks to its advanced design, it is possible to connect the CUBE G1 palletizer to a computer network and obtain remote manufacturer support via a VPN tunnel (Software Remote Maintenance). This method allows direct help with device configuration, troubleshooting, and software updates.",
    title4: "Freedom of configuration. Optional equipment for the palletizing machine",
    text4: [
      "The basic structure of the device can be enriched with additional modules increasing the functionality of the device:",
      "additional product gripping tools",
      "a roller conveyor transporting products to the Palletizer (used as a buffer during pallet exchange), positioning the packaging to be picked up by the Palletizer's gripper",
      "automatic slip sheet dispenser - for pre-cut sheets measuring 1200 x 800 mm"
    ],
    title5: "CUBE G1 automatic palletizer - technical data",
    text5: [
      "Length: 1930 mm",
      "Width: 1870 mm",
      "Height: 2500 mm (without tower with warning lamp)",
      "Maximum number of picking cycles: approx. 8 pcs/min (gripping a single package) or 16 pcs/min (gripping two packages at the same time)",
      "Maximum product length: 600 mm",
      "Maximum product width: 400 mm"
    ]
  }
};

export default function About() {
  const { language } = useLanguage();
  const content = textContent[language] || textContent.pl;
  const { company, title, paragraphs } = content;

  // Combine features into an array to easily map through them
  const features = [
    { img: palletizerImg1, title: content.title1, text: content.text1 },
    { img: palletizerImg2, title: content.title2, text: content.text2 },
    { img: palletizerImg3, title: content.title3, text: content.text3 },
    { img: palletizerImg4, title: content.title4, text: content.text4 },
    { img: palletizerImg5, title: content.title5, text: content.text5 },
  ];

  return (
    <main className="about-page">
      <section className="lifts-hero">
        <video className="lifts-hero__video" autoPlay muted loop playsInline>
          <source src={videoHero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="lifts-hero__overlay" />
        <img src={RotabLogo} alt="Rotab" className="lifts-hero__logo" />
        <div className="lifts-hero__text">
          <p className="about-hero__eyebrow">{company}</p>
          <h1>{title}</h1>
        </div>
      </section>

      <section className="palletizer-layout">
        {/* LEFT column - current paragraphs */}
        <div className="palletizer-layout__left">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* RIGHT column - 5 image+text divs */}
        <div className="palletizer-layout__right">
          {features.map((feature, i) => (
            <div className="palletizer-feature" key={i}>
              <div className="palletizer-feature__img">
                <img src={feature.img} alt={feature.title} />
              </div>
              <div className="palletizer-feature__text">
                <h3>{feature.title}</h3>
                
                {/* Handle strings vs arrays (for text4 and text5 lists) */}
                {Array.isArray(feature.text) ? (
                  <ul>
                    {feature.text.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{feature.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
