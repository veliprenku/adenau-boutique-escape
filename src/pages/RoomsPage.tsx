import { useI18n } from "@/lib/i18n";
import { rooms } from "@/lib/rooms";
import ScrollReveal from "@/components/ScrollReveal";
import RoomCard from "@/components/RoomCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { BOOKING_URL } from "@/lib/site";

export default function RoomsPage() {
  const { lang, t } = useI18n();

  return (
    <div className="min-h-screen">
      <Seo
        title={lang === "de" ? "Zimmer" : "Rooms"}
        description={
          lang === "de"
            ? "Zimmer in Adenau am Buttermarkt nahe dem Nuerburgring: komfortable Doppelzimmer und Familienzimmer mit WLAN, Parkplaetzen und ruhiger Lage."
            : "Rooms in Adenau at Buttermarkt near the Nuerburgring: comfortable double rooms and family rooms with WiFi, parking, and a calm location."
        }
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            {lang === "de" ? "Unsere Unterkünfte" : "Our Accommodations"}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-5">
            {t("roomsSection", "title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t("roomsSection", "subtitle")}
          </p>
        </div>
      </section>

      {/* Rooms grid */}
      <section className="section-padding section-spacing">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <ScrollReveal key={room.id} delay={i * 100}>
              <RoomCard room={room} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-border/60 bg-card p-6 text-center shadow-[0_18px_60px_rgba(30,35,38,0.06)]">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("roomsSection", "bookingText")}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:opacity-90"
            >
              {t("roomsSection", "livePrice")}
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-charcoal text-primary-foreground">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-semibold mb-5">
              {t("cta", "title")}
            </h2>
            <p className="opacity-70 mb-8">{t("cta", "subtitle")}</p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-lg font-medium transition-all hover:opacity-90"
            >
              {t("cta", "button")}
            </a>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
