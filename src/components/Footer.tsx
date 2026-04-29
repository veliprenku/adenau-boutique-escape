import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarCheck, Mail, MapPin, Phone } from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useCookieConsent } from "@/lib/cookie-consent";
import { useI18n } from "@/lib/i18n";
import { BOOKING_URL, BRAND_NAME, CONTACT } from "@/lib/site";

export default function Footer() {
  const { lang, t } = useI18n();
  const { openPreferences } = useCookieConsent();

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="section-padding py-16 md:py-20">
        <div className="mb-12 grid gap-6 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/55">
              {lang === "de" ? "Direkt reservieren" : "Reserve direct"}
            </p>
            <h2 className="max-w-2xl font-serif text-2xl font-semibold md:text-3xl">
              {lang === "de"
                ? "Bereit fuer ruhige Naechte im Zentrum von Adenau?"
                : "Ready for calm nights in the center of Adenau?"}
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-end">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <CalendarCheck size={17} />
              {t("nav", "book")}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/15 px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              {t("nav", "contact")}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_0.8fr_0.9fr]">
          <div>
            <Link to="/" className="inline-flex">
              <BrandLogo tone="light" className="items-start" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              {lang === "de"
                ? "Ihr gemuetliches Gaestehaus in Adenau, nahe dem Nuerburgring."
                : "Your cozy guesthouse in Adenau, near the Nuerburgring."}
            </p>
            <div className="mt-6">
              <LanguageSwitcher tone="light" />
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/55">
              {t("footer", "address")}
            </h4>
            <div className="space-y-4 text-sm text-primary-foreground/68">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-foreground/85" />
                <span>Buttermarkt 3<br />53518 Adenau<br />Deutschland</span>
              </div>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-primary-foreground">
                <Phone size={16} className="shrink-0 text-primary-foreground/85" />
                <span>{CONTACT.phone}</span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 transition-colors hover:text-primary-foreground">
                <Mail size={16} className="shrink-0 text-primary-foreground/85" />
                <span>{CONTACT.email}</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/55">
              {t("footer", "links")}
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/68">
              <Link to="/" className="block transition-colors hover:text-primary-foreground">{t("nav", "home")}</Link>
              <Link to="/rooms" className="block transition-colors hover:text-primary-foreground">{t("nav", "rooms")}</Link>
              <Link to="/about" className="block transition-colors hover:text-primary-foreground">{t("nav", "about")}</Link>
              <Link to="/contact" className="block transition-colors hover:text-primary-foreground">{t("nav", "contact")}</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/55">
              {t("footer", "legal")}
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/68">
              <a href="#" className="block transition-colors hover:text-primary-foreground">{t("footer", "privacy")}</a>
              <a href="#" className="block transition-colors hover:text-primary-foreground">{t("footer", "imprint")}</a>
              <button
                type="button"
                onClick={openPreferences}
                className="block text-left transition-colors hover:text-primary-foreground"
              >
                {t("footer", "cookies")}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/45">
          Copyright {new Date().getFullYear()} {BRAND_NAME}. {t("footer", "rights")}
        </div>
      </div>
    </footer>
  );
}
