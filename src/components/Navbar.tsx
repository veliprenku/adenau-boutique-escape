import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? "bg-background/90 nav-glass border-b border-border shadow-sm"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";

  const links = [
    { to: "/", label: t("nav", "home") },
    { to: "/rooms", label: t("nav", "rooms") },
    { to: "/about", label: t("nav", "about") },
    { to: "/contact", label: t("nav", "contact") },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="section-padding flex items-center justify-between h-20">
        <Link to="/" className={`font-serif text-lg md:text-xl font-semibold tracking-tight ${textColor} transition-colors`}>
          Ferienzimmer Am Buttermarkt
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${textColor} ${
                location.pathname === link.to ? "opacity-100" : "opacity-80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className={`flex items-center gap-1 text-xs font-medium ${textColor}`}>
            <button
              onClick={() => setLang("de")}
              className={`px-2 py-1 rounded transition-all ${lang === "de" ? "bg-foreground/10" : "opacity-60 hover:opacity-100"}`}
            >
              DE
            </button>
            <span className="opacity-40">|</span>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded transition-all ${lang === "en" ? "bg-foreground/10" : "opacity-60 hover:opacity-100"}`}
            >
              EN
            </button>
          </div>
          <a
            href="https://www.booking.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90 hover:shadow-md"
          >
            {t("nav", "book")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${textColor} transition-colors`}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 nav-glass border-t border-border animate-slide-down">
          <div className="section-padding py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground text-base font-medium py-2 border-b border-border/50"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setLang("de")}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${lang === "de" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"}`}
              >
                Deutsch
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${lang === "en" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"}`}
              >
                English
              </button>
            </div>
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-5 py-3 rounded-lg text-sm font-medium text-center mt-2"
            >
              {t("nav", "book")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
