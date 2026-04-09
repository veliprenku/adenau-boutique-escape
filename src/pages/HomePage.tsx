import { useI18n } from "@/lib/i18n";
import { rooms } from "@/lib/rooms";
import ScrollReveal from "@/components/ScrollReveal";
import RoomCard from "@/components/RoomCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { MapPin, Sun, CalendarCheck, Wifi, Car, Coffee, Sparkles, TreePine, ChevronDown, Star, Quote } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";
import breakfast from "@/assets/breakfast.jpg";
import nuerburgring from "@/assets/nuerburgring.jpg";
import adenauVillage from "@/assets/adenau-village.jpg";
import adenauLandscape from "@/assets/adenau-landscape.jpg";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const testimonials = [
  {
    name: "Thomas M.",
    location: "Köln",
    text: {
      de: "Perfekte Lage für unser Nürburgring-Wochenende. Sauber, ruhig und die Gastgeber sind sehr freundlich.",
      en: "Perfect location for our Nürburgring weekend. Clean, quiet, and the hosts are very friendly.",
    },
  },
  {
    name: "Sarah K.",
    location: "Amsterdam",
    text: {
      de: "Ein wunderbares kleines Gästehaus. Die Zimmer sind hell und gemütlich. Adenau ist ein Traum!",
      en: "A wonderful little guesthouse. The rooms are bright and cozy. Adenau is a dream!",
    },
  },
  {
    name: "Marco R.",
    location: "München",
    text: {
      de: "Schon zum dritten Mal hier. Die Lage am Buttermarkt ist ideal, und man fühlt sich sofort willkommen.",
      en: "Third time staying here. The location on the Buttermarkt is ideal, and you immediately feel welcome.",
    },
  },
];

const faqItems = {
  de: [
    { q: "Wie weit ist der Nürburgring entfernt?", a: "Der Nürburgring ist nur etwa 5 Autominuten entfernt. Die Nordschleife erreichen Sie in weniger als 10 Minuten." },
    { q: "Gibt es Parkplätze?", a: "Ja, kostenfreie Parkplätze stehen für unsere Gäste direkt am Haus zur Verfügung." },
    { q: "Bieten Sie Frühstück an?", a: "Ja, auf Wunsch bereiten wir Ihnen gerne ein Frühstück zu. Bitte teilen Sie uns dies bei der Buchung mit." },
    { q: "Kann ich direkt buchen?", a: "Sie können uns telefonisch oder per E-Mail kontaktieren. Alternativ buchen Sie über Booking.com." },
    { q: "Sind Haustiere erlaubt?", a: "Haustiere sind nach vorheriger Absprache willkommen. Bitte kontaktieren Sie uns vorab." },
  ],
  en: [
    { q: "How far is the Nürburgring?", a: "The Nürburgring is only about a 5-minute drive away. You can reach the Nordschleife in less than 10 minutes." },
    { q: "Is parking available?", a: "Yes, free parking is available for our guests directly at the house." },
    { q: "Do you offer breakfast?", a: "Yes, we are happy to prepare breakfast on request. Please let us know when booking." },
    { q: "Can I book directly?", a: "You can contact us by phone or email. Alternatively, book via Booking.com." },
    { q: "Are pets allowed?", a: "Pets are welcome by prior arrangement. Please contact us in advance." },
  ],
};

export default function HomePage() {
  const { lang, t } = useI18n();
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroMain}
          alt="Ferienzimmer Am Buttermarkt"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
        <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground mb-6 animate-fade-up leading-tight">
            {t("hero", "title")}
          </h1>
          <p className="text-primary-foreground/85 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
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
              href="https://www.booking.com"
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
      <section className="section-padding py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: MapPin, title: t("features", "ring"), desc: t("features", "ringDesc") },
            { icon: Sun, title: t("features", "rooms"), desc: t("features", "roomsDesc") },
            { icon: CalendarCheck, title: t("features", "booking"), desc: t("features", "bookingDesc") },
          ].map((feat, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="text-center p-8 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
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
      <section className="section-padding section-spacing bg-secondary/50">
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
              <div className="img-zoom rounded-xl overflow-hidden">
                <img src={breakfast} alt="Breakfast" loading="lazy" className="w-full h-48 md:h-64 object-cover" />
              </div>
              <div className="img-zoom rounded-xl overflow-hidden mt-8">
                <img src={adenauVillage} alt="Adenau" loading="lazy" className="w-full h-48 md:h-64 object-cover" />
              </div>
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.slice(0, 4).map((room, i) => (
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
            { icon: Coffee, label: t("amenities", "breakfast") },
            { icon: Sparkles, label: t("amenities", "clean") },
            { icon: TreePine, label: t("amenities", "quiet") },
            { icon: MapPin, label: t("amenities", "central") },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border/50 transition-all duration-300 hover:shadow-md">
                <item.icon size={20} className="text-accent shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lifestyle / Adenau + Nürburgring */}
      <section className="section-padding section-spacing">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="img-zoom rounded-xl overflow-hidden">
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
            {[heroMain, breakfast, adenauLandscape, adenauVillage].map((img, i) => (
              <div key={i} className="img-zoom rounded-lg overflow-hidden aspect-square">
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-spacing bg-secondary/50">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
              {lang === "de" ? "Bewertungen" : "Reviews"}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12">
              {t("testimonials", "title")}
            </h2>
            <div className="relative">
              <Quote size={32} className="text-accent/20 mx-auto mb-4" />
              <p className="font-serif text-xl md:text-2xl italic text-foreground/80 mb-6 leading-relaxed min-h-[6rem]">
                "{testimonials[testimonialIdx].text[lang]}"
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-bronze text-bronze" />
                ))}
              </div>
              <p className="font-medium text-sm">{testimonials[testimonialIdx].name}</p>
              <p className="text-muted-foreground text-xs">{testimonials[testimonialIdx].location}</p>
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === testimonialIdx ? "bg-accent scale-110" : "bg-border hover:bg-stone"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
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
                  className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
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
              href="https://www.booking.com"
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
