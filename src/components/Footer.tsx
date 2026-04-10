import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import { useCookieConsent } from "@/lib/cookie-consent";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { lang, setLang, t } = useI18n();
  const { openPreferences } = useCookieConsent();

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex">
              <BrandLogo tone="light" className="items-start" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-70">
              {lang === "de"
                ? "Ihr gemuetliches Gaestehaus in Adenau, nahe dem Nuerburgring."
                : "Your cozy guesthouse in Adenau, near the Nuerburgring."}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider opacity-80">
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

          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider opacity-80">
              {t("footer", "links")}
            </h4>
            <div className="space-y-2 text-sm opacity-70">
              <Link to="/" className="block transition-opacity hover:opacity-100">{t("nav", "home")}</Link>
              <Link to="/rooms" className="block transition-opacity hover:opacity-100">{t("nav", "rooms")}</Link>
              <Link to="/about" className="block transition-opacity hover:opacity-100">{t("nav", "about")}</Link>
              <Link to="/contact" className="block transition-opacity hover:opacity-100">{t("nav", "contact")}</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider opacity-80">
              {t("footer", "legal")}
            </h4>
            <div className="mb-6 space-y-2 text-sm opacity-70">
              <a href="#" className="block transition-opacity hover:opacity-100">{t("footer", "privacy")}</a>
              <a href="#" className="block transition-opacity hover:opacity-100">{t("footer", "imprint")}</a>
              <button
                type="button"
                onClick={openPreferences}
                className="block text-left transition-opacity hover:opacity-100"
              >
                {t("footer", "cookies")}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLang("de")}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${lang === "de" ? "bg-primary-foreground/20" : "opacity-50 hover:opacity-100"}`}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${lang === "en" ? "bg-primary-foreground/20" : "opacity-50 hover:opacity-100"}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs opacity-50">
          Copyright {new Date().getFullYear()} Ferienzimmer Am Buttermarkt. {t("footer", "rights")}
        </div>
      </div>
    </footer>
  );
}
