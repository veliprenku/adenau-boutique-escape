import { useEffect, useState } from "react";
import { Cookie, ExternalLink, ShieldCheck, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useCookieConsent } from "@/lib/cookie-consent";
import { useI18n } from "@/lib/i18n";

export default function CookieConsentBanner() {
  const { lang } = useI18n();
  const {
    hasResolved,
    preferences,
    isPreferencesOpen,
    acceptAll,
    acceptEssential,
    savePreferences,
    openPreferences,
    closePreferences,
  } = useCookieConsent();
  const [externalMediaEnabled, setExternalMediaEnabled] = useState(false);

  useEffect(() => {
    setExternalMediaEnabled(Boolean(preferences?.externalMedia));
  }, [preferences, isPreferencesOpen]);

  if (!hasResolved) {
    return null;
  }

  const copy =
    lang === "de"
      ? {
          badge: "Cookie-Hinweis",
          title: "Wir nutzen nur das, was fuer diese Website notwendig ist.",
          text:
            "Diese Website speichert notwendige Einstellungen lokal. Externe Inhalte wie Google Maps werden erst geladen, wenn Sie zustimmen.",
          essential: "Nur notwendig",
          acceptAll: "Alle akzeptieren",
          customize: "Einstellungen",
          manageTitle: "Cookie-Einstellungen",
          manageDescription:
            "Sie koennen festlegen, ob externe Inhalte wie Google Maps geladen werden duerfen.",
          necessaryTitle: "Notwendige Speicherung",
          necessaryText:
            "Speichert Ihre Sprachwahl und Cookie-Entscheidung. Diese Option ist immer aktiv.",
          externalTitle: "Externe Inhalte",
          externalText:
            "Erlaubt eingebettete Google-Maps-Inhalte. Dabei koennen Daten an Google uebertragen werden.",
          cancel: "Abbrechen",
          save: "Auswahl speichern",
          active: "Immer aktiv",
        }
      : {
          badge: "Cookie notice",
          title: "We only use what this website actually needs.",
          text:
            "This website stores necessary preferences locally. External content such as Google Maps is only loaded after you agree.",
          essential: "Necessary only",
          acceptAll: "Accept all",
          customize: "Settings",
          manageTitle: "Cookie settings",
          manageDescription:
            "Choose whether external content such as Google Maps may be loaded.",
          necessaryTitle: "Necessary storage",
          necessaryText:
            "Stores your language choice and cookie decision. This option is always active.",
          externalTitle: "External content",
          externalText:
            "Allows embedded Google Maps content. Data may be transferred to Google when enabled.",
          cancel: "Cancel",
          save: "Save choices",
          active: "Always active",
        };

  return (
    <>
      {!preferences && !isPreferencesOpen && (
        <div className="fixed inset-x-4 bottom-4 z-[60] md:left-6 md:right-auto md:bottom-6 md:max-w-xl">
          <div className="rounded-lg border border-border/70 bg-background p-5 shadow-[0_32px_90px_-48px_rgba(15,23,42,0.65)]">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  <Cookie className="h-3.5 w-3.5" />
                  {copy.badge}
                </p>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {copy.title}
                </h2>
              </div>
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-accent" />
            </div>

            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              {copy.text}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                type="button"
                variant="outline"
                onClick={acceptEssential}
                className="rounded-full"
              >
                {copy.essential}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={openPreferences}
                className="rounded-full"
              >
                <SlidersHorizontal className="h-4 w-4" />
                {copy.customize}
              </Button>
              <Button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {copy.acceptAll}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={isPreferencesOpen} onOpenChange={(open) => (open ? openPreferences() : closePreferences())}>
        <DialogContent className="max-w-2xl rounded-lg border-border/70 bg-background p-0 overflow-hidden">
          <div className="border-b border-border/60 bg-secondary/35 px-6 py-5">
            <DialogHeader className="space-y-2 text-left">
              <DialogTitle className="font-serif text-2xl">
                {copy.manageTitle}
              </DialogTitle>
              <DialogDescription className="max-w-xl text-sm leading-relaxed">
                {copy.manageDescription}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="space-y-4 px-6 py-6">
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-foreground">{copy.necessaryTitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {copy.necessaryText}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {copy.active}
                </span>
              </div>
            </div>

            <div className="rounded-lg border border-border/60 bg-card p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground">{copy.externalTitle}</p>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {copy.externalText}
                  </p>
                </div>

                <Switch
                  checked={externalMediaEnabled}
                  onCheckedChange={setExternalMediaEnabled}
                  aria-label={copy.externalTitle}
                />
              </div>
            </div>
          </div>

          <DialogFooter className="border-t border-border/60 bg-secondary/25 px-6 py-5 sm:justify-between">
            <Button type="button" variant="ghost" onClick={closePreferences}>
              {copy.cancel}
            </Button>
            <div className="flex flex-col gap-3 sm:flex-row">
              {!preferences && (
                <Button type="button" variant="outline" onClick={acceptEssential}>
                  {copy.essential}
                </Button>
              )}
              <Button
                type="button"
                onClick={() => savePreferences({ externalMedia: externalMediaEnabled })}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {copy.save}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
