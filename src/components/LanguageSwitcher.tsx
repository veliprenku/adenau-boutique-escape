import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe2 } from "lucide-react";

import { useI18n } from "@/lib/i18n";

type LanguageSwitcherProps = {
  tone?: "light" | "dark";
  full?: boolean;
};

const languageOptions = [
  { code: "de" as const, label: "Deutsch", shortLabel: "DE" },
  { code: "en" as const, label: "English", shortLabel: "EN" },
];

export default function LanguageSwitcher({
  tone = "dark",
  full = false,
}: LanguageSwitcherProps) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isLight = tone === "light";
  const activeLanguage = languageOptions.find((option) => option.code === lang) ?? languageOptions[0];

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const triggerClass = isLight
    ? "border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/15"
    : "border-border/70 bg-card text-foreground shadow-sm hover:border-accent/40 hover:bg-secondary/45";

  return (
    <div ref={containerRef} className={`relative ${full ? "w-full" : "inline-block"}`}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`inline-flex h-10 items-center justify-between gap-2 rounded-lg border px-3 text-sm font-semibold transition-all ${triggerClass} ${
          full ? "w-full" : "min-w-[8.75rem]"
        }`}
        aria-label="Change language"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2">
          <Globe2 size={16} className="opacity-70" />
          <span>{full ? activeLanguage.label : activeLanguage.shortLabel}</span>
        </span>
        <ChevronDown
          size={15}
          className={`opacity-60 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className={`absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border bg-card p-1 text-foreground shadow-[0_18px_60px_rgba(30,35,38,0.16)] ${
            full ? "left-0 right-auto w-full" : ""
          }`}
        >
          {languageOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => {
                setLang(option.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                lang === option.code
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
              }`}
            >
              <span>
                <span className="block font-semibold">{option.label}</span>
                <span className="block text-xs opacity-60">{option.shortLabel}</span>
              </span>
              {lang === option.code ? <Check size={16} className="text-accent" /> : null}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
