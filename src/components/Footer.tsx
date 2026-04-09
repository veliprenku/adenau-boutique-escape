import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { lang, setLang, t } = useI18n();

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">
              Ferienzimmer<br />Am Buttermarkt
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              {lang === "de"
                ? "Ihr gemütliches Gästehaus in Adenau, nahe dem Nürburgring."
                : "Your cozy guesthouse in Adenau, near the Nürburgring."}
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
              {t("footer", "address")}
            </h4>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Buttermarkt 3<br />53518 Adenau<br />Deutschland</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>+49 2691 123456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>info@buttermarkt-adenau.de</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
              {t("footer", "links")}
            </h4>
            <div className="space-y-2 text-sm opacity-70">
              <Link to="/" className="block hover:opacity-100 transition-opacity">{t("nav", "home")}</Link>
              <Link to="/rooms" className="block hover:opacity-100 transition-opacity">{t("nav", "rooms")}</Link>
              <Link to="/about" className="block hover:opacity-100 transition-opacity">{t("nav", "about")}</Link>
              <Link to="/contact" className="block hover:opacity-100 transition-opacity">{t("nav", "contact")}</Link>
            </div>
          </div>

          {/* Language & Legal */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
              {t("footer", "legal")}
            </h4>
            <div className="space-y-2 text-sm opacity-70 mb-6">
              <a href="#" className="block hover:opacity-100 transition-opacity">{t("footer", "privacy")}</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">{t("footer", "imprint")}</a>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang("de")}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${lang === "de" ? "bg-primary-foreground/20" : "opacity-50 hover:opacity-100"}`}
              >
                DE
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${lang === "en" ? "bg-primary-foreground/20" : "opacity-50 hover:opacity-100"}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Ferienzimmer Am Buttermarkt. {t("footer", "rights")}
        </div>
      </div>
    </footer>
  );
}
