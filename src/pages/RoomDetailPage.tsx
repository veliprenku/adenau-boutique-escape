import { useParams, Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { rooms } from "@/lib/rooms";
import ScrollReveal from "@/components/ScrollReveal";
import RoomCard from "@/components/RoomCard";
import RoomGallery from "@/components/RoomGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { BOOKING_URL, BRAND_NAME, SITE_URL } from "@/lib/site";
import { ArrowLeft, BedDouble, Check, Maximize2, Users } from "lucide-react";

export default function RoomDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useI18n();

  const room = rooms.find((r) => r.slug === slug || r.id === slug);

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
      <Seo
        title={room.name[lang]}
        description={`${room.name[lang]} at ${BRAND_NAME} in Adenau near the Nuerburgring. ${room.description[lang]}`}
        image={`${SITE_URL}${room.image}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "HotelRoom",
          name: room.name[lang],
          description: room.longDescription[lang],
          containedInPlace: {
            "@type": "LodgingBusiness",
            name: BRAND_NAME,
            url: SITE_URL,
          },
          url: BOOKING_URL,
        }}
      />
      <Navbar />

      {/* Hero image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={room.image}
          alt={room.name[lang]}
          className="absolute inset-0 w-full h-full object-cover"
          decoding="async"
          sizes="100vw"
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
              <RoomGallery
                images={room.gallery}
                roomName={room.name[lang]}
                lang={lang}
              />
            </ScrollReveal>

            <ScrollReveal delay={150}>
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

            <ScrollReveal delay={180}>
              <div className="mb-10 rounded-lg border border-border/60 bg-card p-6 shadow-[0_18px_60px_rgba(30,35,38,0.06)]">
                <h2 className="mb-5 font-serif text-2xl font-semibold">
                  {t("roomDetail", "bookingDetails")}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: Check,
                      label: t("roomDetail", "bookingType"),
                      value: room.bookingType[lang],
                    },
                    {
                      icon: Users,
                      label: t("roomDetail", "capacity"),
                      value: `${room.maxGuests} ${t("roomsSection", "guests")}`,
                    },
                    {
                      icon: BedDouble,
                      label: t("roomDetail", "bedSetup"),
                      value: room.beds[lang],
                    },
                    {
                      icon: Maximize2,
                      label: t("roomDetail", "roomSize"),
                      value: `${room.sizeSqm} m² / ${room.sizeSqft} ft²`,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <item.icon size={18} className="mt-0.5 shrink-0 text-accent" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-card border border-border/50 rounded-lg p-8 shadow-[0_20px_70px_rgba(30,35,38,0.08)]">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
                {t("roomDetail", "bookingCtaEyebrow")}
              </p>
              <p className="mb-5 font-serif text-2xl font-semibold">
                {t("roomDetail", "bookingCtaTitle")}
              </p>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {t("roomDetail", "bookingCtaText")}
              </p>
              <a
                href={BOOKING_URL}
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
