import { useI18n } from "@/lib/i18n";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroMain from "@/assets/hero-main.jpg";
import adenauLandscape from "@/assets/adenau-landscape.jpg";
import adenauVillage from "@/assets/adenau-village.jpg";
import nuerburgring from "@/assets/nuerburgring.jpg";
import breakfast from "@/assets/breakfast.jpg";

export default function AboutPage() {
  const { lang, t } = useI18n();

  const sections = [
    {
      title: t("about", "storyTitle"),
      text: t("about", "storyText"),
      image: heroMain,
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
      image: breakfast,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={adenauLandscape}
          alt="Adenau Eifel"
          className="absolute inset-0 w-full h-full object-cover"
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
              <div className="img-zoom rounded-xl overflow-hidden lg:[direction:ltr]">
                <img src={sec.image} alt={sec.title} loading="lazy" className="w-full h-72 md:h-96 object-cover" />
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
            <div className="rounded-xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.8!2d6.9345!3d50.3825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bfb0b0b0b0b0b0%3A0x0!2sAdenau!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
