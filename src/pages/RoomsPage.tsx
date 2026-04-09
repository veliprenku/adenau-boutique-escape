import { useI18n } from "@/lib/i18n";
import { rooms } from "@/lib/rooms";
import ScrollReveal from "@/components/ScrollReveal";
import RoomCard from "@/components/RoomCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RoomsPage() {
  const { lang, t } = useI18n();

  return (
    <div className="min-h-screen">
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, i) => (
            <ScrollReveal key={room.id} delay={i * 100}>
              <RoomCard room={room} />
            </ScrollReveal>
          ))}
        </div>
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
              href="https://www.booking.com"
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
