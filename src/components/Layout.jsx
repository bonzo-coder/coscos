import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect, Suspense } from "react";
import { gsap } from "gsap";
import ScissorLiftAnimation from './Tableanimation'; 
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText"; 
import ScrollToTop from "../assets/ScrollToTop.jsx";
import AnalyticsTracker from "../AnalyticsTracker"; // Adjust path if needed

gsap.registerPlugin(ScrollSmoother, SplitText);

// Funkcja wywoływana po animacji, aby w tle wczytać resztę plików
const prefetchAllPages = () => {
    import("../pages/About");
    import("../pages/Applications");
    import("./PlatformsLayout");
    import("./PlatformLayout");
    import("../pages/Accessories");
    import("../pages/Lifts");
};

export default function Layout() {
    const [showIntro, setShowIntro] = useState(false);
    const [fadeIntro, setFadeIntro] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeIntro(true);
        }, 6000);

        const unmountTimer = setTimeout(() => {
            setShowIntro(false);
            // Kiedy intro znika i strona główna jest gotowa -> pobieramy resztę w tle
            prefetchAllPages();
        }, 7000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(unmountTimer);
        }
    }, []);

    useEffect(() => {
        let smoother;
        if (typeof window !== "undefined") {
            const isMobile = window.innerWidth < 768;
            
            if (!isMobile) {
                const wrapper = document.querySelector('#smooth-wrapper');
                const content = document.querySelector('#smooth-content');

                if (wrapper && content) {
                    smoother = ScrollSmoother.create({
                        wrapper,
                        content,
                        smooth: 1,
                        effects: true,
                        smoothTouch: 0.1,
                    });
                }
            }
        }

        return () => {
            smoother && smoother.kill();
        };
    }, []);

    const renderPage = () => {
        return (
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div className="site-wrapper reveal">
                        <ScrollToTop />
                        <AnalyticsTracker /> {/* Add it inside the router here */}
                        <Header />
                        <main>
                            <div className="mainBody">
                                <div className={`route-shell${isHomePage ? ' route-shell--home' : ''}`}>
                                    {/* Suspense chroni aplikację, gdy "Leniwy" komponent musi się doładować */}
                                    <Suspense fallback={<div style={{height: '100vh', background: '#041433'}}></div>}>
                                        <Outlet/>
                                    </Suspense>
                                </div>
                            </div>
                        </main>
                        <Footer />

                        {showIntro && (
                            <div className={`intro-overlay ${fadeIntro ? 'fade-out' : ''}`}>
                                <ScissorLiftAnimation />
                            </div>
                        )}

                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="site-wrapper">
            {renderPage()}
        </div>
    );
}