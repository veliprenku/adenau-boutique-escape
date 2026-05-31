import { useI18n } from "@/lib/i18n";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import ConsentMapEmbed from "@/components/ConsentMapEmbed";
import adenauLandscape from "@/assets/adenau-landscape.jpg";
import adenauVillage from "@/assets/adenau-village.jpg";
import nuerburgring from "@/assets/nuerburgring.jpg";
import { propertyImages } from "@/lib/media";
import {
  BRAND_NAME,
  DEFAULT_DESCRIPTION,
  PROPERTY_MAP_EMBED_URL,
  PROPERTY_MAP_URL,
} from "@/lib/site";
import { BriefcaseBusiness, Car, Coffee, MapPin, Monitor, ShowerHead, UsersRound, Wifi } from "lucide-react";

export default function AboutPage() {
  const { lang, t } = useI18n();

  const sections = [
    {
      title: t("about", "storyTitle"),
      text: t("about", "storyText"),
      image: propertyImages.streetExterior,
    },
    {
      title: t("about", "adenauTitle"),
      text: t("about", "adenauText"),
      image: adenauVillage,
    },
    {
      title: t("about", "ringTitle"),
      text: t("about", "ringText"),
      image: nuerburgring,
    },
    {
      title: t("about", "nearbyTitle"),
      text: t("about", "nearbyText"),
      image: adenauLandscape,
    },
  ];
  const propertyHighlights = [
    { icon: UsersRound, label: lang === "de" ? "6 Zimmer" : "6 rooms" },
    { icon: ShowerHead, label: t("amenities", "privateBathroom") },
    { icon: Wifi, label: t("amenities", "wifi") },
    { icon: Car, label: t("amenities", "parking") },
    { icon: Coffee, label: t("amenities", "coffeeMachine") },
    { icon: Monitor, label: t("amenities", "flatScreenTv") },
    { icon: BriefcaseBusiness, label: t("amenities", "workDesk") },
    { icon: MapPin, label: lang === "de" ? "Balkon & Bergblick in einigen Zimmern" : "Balcony & mountain views in selected rooms" },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title={lang === "de" ? "Ueber uns" : "About"}
        description={
          lang === "de"
            ? "Buttermarkt House Rooms at the Ring in Adenau: sechs Zimmer mit eigenem Bad, kostenfreiem WLAN, Privatparkplaetzen, Kaffeemaschine und Naehe zum Nuerburgring."
            : DEFAULT_DESCRIPTION
        }
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={propertyImages.exteriorHero}
          alt={lang === "de" ? `${BRAND_NAME} Aussenansicht` : `${BRAND_NAME} exterior`}
          className="absolute inset-0 w-full h-full object-cover"
          decoding="async"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-foreground/20" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center section-padding">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground mb-4">
            {t("about", "heroTitle")}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl">
            {t("about", "heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding py-12 bg-background">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4">
            {propertyHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border/60 bg-card p-4 shadow-[0_14px_45px_rgba(30,35,38,0.05)]"
              >
                <item.icon size={19} className="mb-3 text-accent" />
                <p className="text-sm font-medium leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Content sections */}
      {sections.map((sec, i) => (
        <section key={i} className={`section-padding section-spacing ${i % 2 === 1 ? "bg-secondary/50" : ""}`}>
          <div className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            i % 2 === 1 ? "lg:[direction:rtl]" : ""
          }`}>
            <ScrollReveal>
              <div className="lg:[direction:ltr]">
                <h2 className="font-serif text-3xl font-semibold mb-6">{sec.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{sec.text}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="img-zoom rounded-lg overflow-hidden shadow-[0_20px_70px_rgba(30,35,38,0.1)] lg:[direction:ltr]">
                <img
                  src={sec.image}
                  alt={sec.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* Map placeholder */}
      <section className="section-padding py-16 bg-card">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-semibold mb-6">
              {lang === "de" ? "So finden Sie uns" : "How to find us"}
            </h2>
            <ConsentMapEmbed
              iframeTitle={lang === "de" ? `Karte zum ${BRAND_NAME}` : `Map to ${BRAND_NAME}`}
              src={PROPERTY_MAP_EMBED_URL}
              mapsLink={PROPERTY_MAP_URL}
              heightClassName="h-[400px]"
            />
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
