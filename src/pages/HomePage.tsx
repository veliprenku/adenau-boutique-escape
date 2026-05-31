import { useI18n } from "@/lib/i18n";
import { rooms } from "@/lib/rooms";
import ScrollReveal from "@/components/ScrollReveal";
import RoomCard from "@/components/RoomCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { MapPin, Sun, CalendarCheck, Wifi, Car, KeyRound, Coffee, TreePine, ChevronDown } from "lucide-react";
import nuerburgring from "@/assets/nuerburgring.jpg";
import { propertyImages } from "@/lib/media";
import { BOOKING_URL, BRAND_NAME, DEFAULT_DESCRIPTION, SITE_URL } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = {
  de: [
    { q: "Wann ist der Check-in?", a: "Der Check-in ist von 15:00 bis 18:00 Uhr moeglich. Besondere Anfragen koennen beim Buchen angegeben werden." },
    { q: "Wann ist der Check-out?", a: "Der Check-out ist von 08:00 bis 11:00 Uhr vorgesehen." },
    { q: "Wie weit ist der Nürburgring entfernt?", a: "Der Nürburgring ist etwa 9 km entfernt. Die Nordschleife erreichen Sie in wenigen Autominuten." },
    { q: "Gibt es Parkplätze?", a: "Ja, kostenfreie private Parkplätze stehen direkt an der Unterkunft zur Verfügung." },
    { q: "Servieren Sie Speisen vor Ort?", a: "Nein, wir servieren keine Speisen vor Ort. Restaurants, Cafes und Einkaufsmoeglichkeiten finden Sie in Adenau in der Naehe." },
    { q: "Sind Kinder willkommen?", a: "Ja, Kinder jeden Alters sind willkommen. Kinder ab 18 Jahren gelten in dieser Unterkunft als Erwachsene." },
    { q: "Gibt es Babybetten oder Zustellbetten?", a: "Nein, Babybetten und Zustellbetten sind in dieser Unterkunft nicht verfuegbar." },
    { q: "Sind Haustiere erlaubt?", a: "Nein, Haustiere sind nicht erlaubt." },
    { q: "Wie funktionieren Stornierung und Vorauszahlung?", a: "Stornierungs- und Vorauszahlungsbedingungen koennen je nach Zimmerkategorie und Rate unterschiedlich sein. Bitte pruefen Sie die Bedingungen direkt bei der Buchung." },
  ],
  en: [
    { q: "What time is check-in?", a: "Check-in is available from 3:00 PM to 6:00 PM. Special requests can be added during the booking step." },
    { q: "What time is check-out?", a: "Check-out is from 8:00 AM to 11:00 AM." },
    { q: "How far is the Nürburgring?", a: "The Nürburgring is about 9 km away. You can reach the Nordschleife within a short drive." },
    { q: "Is parking available?", a: "Yes, free private parking is available on site for guests." },
    { q: "Do you serve food on site?", a: "No, we do not serve food on site. Restaurants, cafes, and shops are available nearby in Adenau." },
    { q: "Are children welcome?", a: "Yes, children of all ages are welcome. Children aged 18 and above are charged as adults at this property." },
    { q: "Are cribs or extra beds available?", a: "No, cribs and extra beds are not available at this property." },
    { q: "Are pets allowed?", a: "No, pets are not allowed." },
    { q: "How do cancellation and prepayment work?", a: "Cancellation and prepayment policies can vary by room type and rate. Please check the conditions directly when booking." },
  ],
};

export default function HomePage() {
  const { lang, t } = useI18n();
  const introImages = [
    {
      src: rooms[0].image,
      alt: rooms[0].name[lang],
    },
    {
      src: propertyImages.exteriorPortrait,
      alt: lang === "de" ? "Aussenansicht des Gaestehauses" : "Guesthouse exterior",
    },
  ];
  const galleryPreviewItems = [
    {
      src: propertyImages.roomDoorDetail,
      alt: lang === "de" ? "Zimmertuer und Zugang im Haus" : "Room door and access in the house",
    },
    {
      src: propertyImages.guestLounge,
      alt: lang === "de" ? "Wohnbereich im Haus" : "Guest lounge in the house",
    },
    {
      src: propertyImages.coveredTerrace,
      alt: lang === "de" ? "Ueberdachter Aussenbereich" : "Covered outdoor terrace",
    },
    {
      src: rooms[5].image,
      alt: rooms[5].name[lang],
    },
  ];
  const houseImages = [
    {
      src: propertyImages.guestLounge,
      alt: lang === "de" ? "Wohnbereich mit Sofa" : "Lounge area with sofa",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      src: propertyImages.stairwellBright,
      alt: lang === "de" ? "Helles Treppenhaus" : "Bright stairwell",
      className: "",
    },
    {
      src: propertyImages.entryStaircase,
      alt: lang === "de" ? "Treppenhaus und Eingang" : "Staircase and entry",
      className: "",
    },
    {
      src: propertyImages.balconyView,
      alt: lang === "de" ? "Blick vom Balkon" : "Balcony view",
      className: "",
    },
    {
      src: propertyImages.upperHallway,
      alt: lang === "de" ? "Heller Flurbereich" : "Bright hallway area",
      className: "",
    },
  ];
  const propertyDetailImages = [
    {
      src: propertyImages.frontApproach,
      alt: lang === "de" ? "Aussenansicht und Ankunft" : "Exterior arrival view",
    },
    {
      src: propertyImages.streetExterior,
      alt: lang === "de" ? "Aussenansicht von der Strasse" : "Street exterior view",
    },
    {
      src: propertyImages.stairDetail,
      alt: lang === "de" ? "Treppendetail im Haus" : "Stair detail in the house",
    },
    {
      src: propertyImages.guestDetail,
      alt: lang === "de" ? "Zimmerdetail mit Ausstattung" : "Room detail with amenities",
    },
    {
      src: propertyImages.quietSeating,
      alt: lang === "de" ? "Ruhiger Sitzbereich" : "Quiet seating area",
    },
    {
      src: propertyImages.houseExteriorSide,
      alt: lang === "de" ? "Seitliche Hausansicht" : "Side view of the house",
    },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        description={DEFAULT_DESCRIPTION}
        image={`${SITE_URL}/apple-touch-icon.png`}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <img
          src={propertyImages.exteriorHero}
          alt={lang === "de" ? `${BRAND_NAME} Aussenansicht` : `${BRAND_NAME} exterior`}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          decoding="async"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-charcoal/28 to-black/70" />
        <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
          <p className="mb-5 animate-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/80">
            {BRAND_NAME}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground mb-6 animate-fade-up leading-tight" style={{ animationDelay: "80ms" }}>
            {t("hero", "title")}
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "220ms" }}>
            {t("hero", "subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Link
              to="/rooms"
              className="bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-8 py-3.5 rounded-lg font-medium text-sm tracking-wide transition-all hover:bg-primary-foreground/25"
            >
              {t("hero", "explore")}
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-medium text-sm tracking-wide transition-all hover:opacity-90 hover:shadow-lg"
            >
              {t("hero", "book")}
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
          <ChevronDown className="text-primary-foreground/60" size={28} />
        </div>
      </section>

      {/* Features */}
      <section className="section-padding py-20 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: MapPin, title: t("features", "ring"), desc: t("features", "ringDesc") },
            { icon: Sun, title: t("features", "rooms"), desc: t("features", "roomsDesc") },
            { icon: CalendarCheck, title: t("features", "booking"), desc: t("features", "bookingDesc") },
          ].map((feat, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="text-center p-8 rounded-lg bg-card border border-border/60 shadow-[0_18px_60px_rgba(30,35,38,0.06)] transition-all duration-300 hover:shadow-[0_24px_70px_rgba(30,35,38,0.1)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-accent/10 ring-1 ring-accent/15 flex items-center justify-center mx-auto mb-5">
                  <feat.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3">{feat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding section-spacing bg-secondary/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div>
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                {lang === "de" ? "Über uns" : "About us"}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                {t("intro", "welcome")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                {t("intro", "text")}
              </p>
              <Link
                to="/about"
                className="text-accent font-medium text-sm hover:underline underline-offset-4 transition-all"
              >
                {lang === "de" ? "Mehr erfahren →" : "Learn more →"}
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {introImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`img-zoom rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(30,35,38,0.12)] ${index === 1 ? "mt-8" : ""}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Room Preview */}
      <section className="section-padding section-spacing">
        <ScrollReveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
              {lang === "de" ? "Zimmer" : "Rooms"}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              {t("roomsSection", "title")}
            </h2>
            <p className="text-muted-foreground">{t("roomsSection", "subtitle")}</p>
          </div>
        </ScrollReveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <ScrollReveal key={room.id} delay={i * 100}>
              <RoomCard room={room} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-block bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-medium text-sm tracking-wide transition-all hover:opacity-90 hover:shadow-md"
            >
              {t("roomsSection", "viewAll")}
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Amenities */}
      <section className="section-padding section-spacing bg-card">
        <ScrollReveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
              {lang === "de" ? "Service" : "Service"}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              {t("amenities", "title")}
            </h2>
            <p className="text-muted-foreground">{t("amenities", "subtitle")}</p>
          </div>
        </ScrollReveal>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: Wifi, label: t("amenities", "wifi") },
            { icon: Car, label: t("amenities", "parking") },
            { icon: KeyRound, label: t("amenities", "access") },
            { icon: Coffee, label: t("amenities", "coffeeMachine") },
            { icon: TreePine, label: t("amenities", "quiet") },
            { icon: MapPin, label: t("amenities", "central") },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex items-center gap-4 p-5 rounded-lg bg-background border border-border/50 transition-all duration-300 hover:shadow-md">
                <item.icon size={20} className="text-accent shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* House impressions */}
      <section className="section-padding section-spacing bg-secondary/35">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <ScrollReveal>
            <div>
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                {lang === "de" ? "Im Haus" : "Inside the house"}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5">
                {t("houseGallery", "title")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                {t("houseGallery", "subtitle")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("houseGallery", "text")}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="grid auto-rows-[10rem] grid-cols-2 gap-4 md:auto-rows-[12rem]">
              {houseImages.map((image) => (
                <div
                  key={image.src}
                  className={`img-zoom overflow-hidden rounded-lg shadow-[0_20px_70px_rgba(30,35,38,0.1)] ${image.className}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 35vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Property details */}
      <section className="section-padding py-16 md:py-24">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              {lang === "de" ? "Details" : "Details"}
            </p>
            <h2 className="mb-4 font-serif text-3xl font-semibold md:text-4xl">
              {t("propertyDetails", "title")}
            </h2>
           
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3">
            {propertyDetailImages.map((image, index) => (
              <div
                key={image.src}
                className={`img-zoom overflow-hidden rounded-lg shadow-[0_18px_55px_rgba(30,35,38,0.08)] ${
                  index === 0 || index === 5 ? "aspect-[4/3]" : "aspect-square"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Lifestyle / Adenau + Nürburgring */}
      <section className="section-padding section-spacing">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="img-zoom rounded-lg overflow-hidden shadow-[0_20px_70px_rgba(30,35,38,0.1)]">
              <img src={nuerburgring} alt="Nürburgring" loading="lazy" className="w-full h-80 md:h-[28rem] object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div>
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                {lang === "de" ? "Umgebung" : "Surroundings"}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                {t("lifestyle", "title")}
              </h2>
              <p className="text-foreground/70 font-serif text-xl italic mb-6">
                {t("lifestyle", "subtitle")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("lifestyle", "text")}
              </p>
              <Link to="/about" className="text-accent font-medium text-sm hover:underline underline-offset-4">
                {lang === "de" ? "Mehr über die Umgebung →" : "More about the area →"}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-padding py-16">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreviewItems.map((image) => (
              <div key={image.src} className="img-zoom rounded-lg overflow-hidden aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section className="section-padding section-spacing">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">FAQ</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold">
                {t("faq", "title")}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems[lang].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="font-medium text-left hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Banner */}
      <section className="section-padding py-20 md:py-28 bg-charcoal text-primary-foreground">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5">
              {t("cta", "title")}
            </h2>
            <p className="opacity-70 mb-8 text-lg">
              {t("cta", "subtitle")}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-lg font-medium tracking-wide transition-all hover:opacity-90 hover:shadow-xl"
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
