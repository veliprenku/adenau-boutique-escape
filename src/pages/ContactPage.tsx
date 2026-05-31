import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import ConsentMapEmbed from "@/components/ConsentMapEmbed";
import { ArrowUpRight, CalendarCheck, Mail, MapPin, Phone, Route, Send } from "lucide-react";
import { propertyImages } from "@/lib/media";
import {
  BRAND_NAME,
  CONTACT,
  PROPERTY_ADDRESS_LINES,
  PROPERTY_MAP_EMBED_URL,
  PROPERTY_MAP_URL,
} from "@/lib/site";

export default function ContactPage() {
  const { lang, t } = useI18n();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${BRAND_NAME} - ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n${formData.name}\n${formData.email}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Seo
        title={lang === "de" ? "Kontakt" : "Contact"}
        description={
          lang === "de"
            ? "Kontakt zu Buttermarkt House Rooms at the Ring in Adenau: Adresse, Telefon, E-Mail und Karte zur Unterkunft nahe dem Nuerburgring."
            : "Contact Buttermarkt House Rooms at the Ring in Adenau: address, phone, email, and map for the guesthouse near the Nuerburgring."
        }
      />
      <Navbar />

      <section className="section-padding pt-32 pb-12 md:pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              {t("contact", "eyebrow")}
            </p>
            <h1 className="mb-5 font-serif text-4xl font-semibold md:text-6xl">
              {t("contact", "heroTitle")}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("contact", "heroSubtitle")}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-border/60 bg-card shadow-[0_24px_80px_rgba(30,35,38,0.10)]">
            <img
              src={propertyImages.streetExterior}
              alt={BRAND_NAME}
              className="h-[260px] w-full object-cover md:h-[340px]"
              decoding="async"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/75 to-transparent p-6 text-primary-foreground">
              <p className="font-serif text-2xl font-semibold">{t("contact", "cardTitle")}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/78">
                {t("contact", "cardText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pb-20 md:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <div className="rounded-lg border border-border/60 bg-secondary/50 p-6 shadow-[0_24px_80px_rgba(30,35,38,0.08)] md:p-8">
              <h2 className="mb-6 font-serif text-2xl font-semibold">
                {t("contact", "info")}
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-border/60 bg-card p-4 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <MapPin size={18} />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t("contact", "address")}</p>
                  <p className="text-sm leading-relaxed text-foreground">
                    {PROPERTY_ADDRESS_LINES.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="block rounded-lg border border-border/60 bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/35">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Phone size={18} />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t("contact", "phone")}</p>
                  <p className="text-sm text-foreground">{CONTACT.phone}</p>
                </a>
                <a href={`mailto:${CONTACT.email}`} className="block rounded-lg border border-border/60 bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/35">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Mail size={18} />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t("contact", "email")}</p>
                  <p className="break-all text-sm text-foreground">{CONTACT.email}</p>
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={PROPERTY_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Route size={17} />
                  {t("contact", "directions")}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-all hover:border-accent/35 hover:bg-secondary/50"
                >
                  {t("contact", "openMail")}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form onSubmit={handleSubmit} className="rounded-lg border border-border/50 bg-card p-6 shadow-[0_24px_80px_rgba(30,35,38,0.08)] md:p-8">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <CalendarCheck size={20} />
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold">{lang === "de" ? "Anfrage senden" : "Send a request"}</p>
                  <p className="text-sm text-muted-foreground">{lang === "de" ? "Die Nachricht wird ueber Ihr E-Mail-Programm vorbereitet." : "The message opens in your email app."}</p>
                </div>
              </div>
              <div className="grid gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact", "name")}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact", "email")}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact", "message")}</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-3.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:shadow-md"
                >
                  <Send size={16} />
                  {t("contact", "send")}
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={250}>
          <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-lg border border-border/60 bg-card shadow-[0_24px_80px_rgba(30,35,38,0.08)]">
            <ConsentMapEmbed
              iframeTitle={lang === "de" ? `Karte zum ${BRAND_NAME}` : `Map to ${BRAND_NAME}`}
              src={PROPERTY_MAP_EMBED_URL}
              mapsLink={PROPERTY_MAP_URL}
              heightClassName="h-[340px] md:h-[420px]"
            />
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
