import { useParams, Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { rooms } from "@/lib/rooms";
import ScrollReveal from "@/components/ScrollReveal";
import RoomCard from "@/components/RoomCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Check } from "lucide-react";

export default function RoomDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useI18n();

  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Room not found</p>
      </div>
    );
  }

  const otherRooms = rooms.filter((r) => r.id !== room.id).slice(0, 2);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={room.image}
          alt={room.name[lang]}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 section-padding">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-primary-foreground/80 text-sm mb-4 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            {t("roomDetail", "backToRooms")}
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-primary-foreground">
            {room.name[lang]}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <p className="text-muted-foreground leading-relaxed text-lg mb-10">
                {room.longDescription[lang]}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-serif text-2xl font-semibold mb-6">
                {t("roomDetail", "features")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {room.features[lang].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-accent shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-card border border-border/50 rounded-xl p-8">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
                {t("roomsSection", "from")}
              </p>
              <p className="font-serif text-4xl font-semibold mb-1">
                €{room.price}
              </p>
              <p className="text-muted-foreground text-sm mb-8">
                {t("roomDetail", "perNight")}
              </p>
              <a
                href="https://www.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-accent text-accent-foreground py-3.5 rounded-lg font-medium text-center text-sm transition-all hover:opacity-90 hover:shadow-md"
              >
                {t("roomDetail", "bookNow")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related rooms */}
      <section className="section-padding py-16 bg-secondary/50">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl font-semibold mb-8 text-center">
              {t("roomDetail", "relatedRooms")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherRooms.map((r) => (
                <RoomCard key={r.id} room={r} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
