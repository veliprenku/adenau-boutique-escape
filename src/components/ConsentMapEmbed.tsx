import { ExternalLink, MapPinned, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/lib/cookie-consent";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface ConsentMapEmbedProps {
  iframeTitle: string;
  src: string;
  mapsLink: string;
  className?: string;
  heightClassName?: string;
}

export default function ConsentMapEmbed({
  iframeTitle,
  src,
  mapsLink,
  className,
  heightClassName = "h-[320px]",
}: ConsentMapEmbedProps) {
  const { lang } = useI18n();
  const { allowExternalMedia, enableExternalMedia, openPreferences } = useCookieConsent();

  const copy =
    lang === "de"
      ? {
          badge: "Google Maps ist blockiert",
          title: "Karte erst nach Zustimmung laden",
          text:
            "Zum Schutz Ihrer Privatsphaere wird die eingebettete Karte erst geladen, wenn Sie externe Inhalte erlauben.",
          allow: "Karte laden",
          settings: "Cookie-Einstellungen",
          open: "In Google Maps oeffnen",
        }
      : {
          badge: "Google Maps is blocked",
          title: "Load the map only after consent",
          text:
            "To protect your privacy, the embedded map is only loaded after you allow external content.",
          allow: "Load map",
          settings: "Cookie settings",
          open: "Open in Google Maps",
        };

  if (allowExternalMedia) {
    return (
      <div
        className={cn(
          "overflow-hidden rounded-[1.5rem] border border-border/60 bg-card shadow-[0_28px_80px_-52px_rgba(15,23,42,0.45)]",
          className,
        )}
      >
        <iframe
          src={src}
          title={iframeTitle}
          className={cn("w-full border-0", heightClassName)}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.5rem] border border-border/60 bg-[radial-gradient(circle_at_top,rgba(188,156,107,0.14),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(244,238,229,0.96))] shadow-[0_28px_80px_-52px_rgba(15,23,42,0.45)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex w-full flex-col items-center justify-center px-6 py-8 text-center sm:px-10",
          heightClassName,
        )}
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-accent/15 bg-background/85 text-accent shadow-sm">
          <MapPinned className="h-7 w-7" />
        </div>

        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
          <ShieldCheck className="h-3.5 w-3.5" />
          {copy.badge}
        </p>

        <h3 className="max-w-xl font-serif text-2xl font-semibold text-foreground">
          {copy.title}
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {copy.text}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button
            type="button"
            onClick={enableExternalMedia}
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {copy.allow}
          </Button>
          <Button type="button" variant="outline" onClick={openPreferences} className="rounded-full">
            {copy.settings}
          </Button>
          <Button variant="ghost" asChild className="rounded-full">
            <a href={mapsLink} target="_blank" rel="noreferrer noopener">
              <ExternalLink className="h-4 w-4" />
              {copy.open}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
