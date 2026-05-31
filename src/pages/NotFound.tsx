import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Home, Hotel, Search } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { BOOKING_URL, BRAND_NAME } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

const NotFound = () => {
  const location = useLocation();
  const { lang } = useI18n();
  const copy = {
    de: {
      eyebrow: "Seite nicht gefunden",
      title: "Diese Seite ist nicht verfuegbar.",
      text: "Die Adresse wurde vielleicht geaendert oder die Seite existiert nicht mehr. Von hier aus kommen Sie schnell zurueck zu den Zimmern oder zur Startseite.",
      home: "Zur Startseite",
      rooms: "Zimmer ansehen",
      booking: "Verfuegbarkeit pruefen",
      path: "Gesuchte Adresse",
    },
    en: {
      eyebrow: "Page not found",
      title: "This page is not available.",
      text: "The address may have changed or the page no longer exists. From here you can quickly return to the rooms or the homepage.",
      home: "Go home",
      rooms: "View rooms",
      booking: "Check availability",
      path: "Requested address",
    },
  }[lang];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={copy.eyebrow}
        description={`${BRAND_NAME} - ${copy.text}`}
        noIndex
      />
      <Navbar />
      <main className="section-padding flex min-h-[78vh] items-center pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded-lg border border-border/60 bg-secondary/50 p-6 shadow-[0_24px_80px_rgba(30,35,38,0.08)] md:p-8">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-accent/12 text-accent">
              <Search size={28} strokeWidth={1.8} />
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              404
            </p>
            <h1 className="mb-5 font-serif text-4xl font-semibold md:text-6xl">
              {copy.title}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {copy.text}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link to="/">
                  <Home size={18} />
                  {copy.home}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/rooms">
                  <Hotel size={18} />
                  {copy.rooms}
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-border/60 bg-card p-6 shadow-[0_24px_80px_rgba(30,35,38,0.08)] md:p-8">
            <p className="mb-2 text-sm font-medium text-muted-foreground">{copy.path}</p>
            <p className="break-all rounded-md bg-muted px-4 py-3 font-mono text-sm text-foreground">
              {location.pathname}
            </p>
            <div className="mt-8 border-t border-border/70 pt-6">
              <p className="font-serif text-2xl font-semibold">{BRAND_NAME}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {lang === "de"
                  ? "Wenn Sie ein Zimmer suchen, pruefen Sie die aktuelle Verfuegbarkeit direkt ueber die Buchungsseite."
                  : "If you are looking for a room, check current availability directly through the booking page."}
              </p>
              <Button asChild variant="secondary" className="mt-5 gap-2">
                <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                  {copy.booking}
                  <ArrowRight size={17} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
