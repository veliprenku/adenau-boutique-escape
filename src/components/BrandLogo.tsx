import darkLogo from "@/assets/logo.png";
import lightLogo from "@/assets/logo-white.png";
import {
  BRAND_NAME,
  BRAND_PRIMARY,
  BRAND_SECONDARY,
  BRAND_SUBTITLE,
} from "@/lib/site";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  tone?: "dark" | "light";
  compact?: boolean;
  showSubtitle?: boolean;
  className?: string;
}

export default function BrandLogo({
  tone = "dark",
  compact = false,
  showSubtitle = true,
  className,
}: BrandLogoProps) {
  const logoSrc = tone === "light" ? lightLogo : darkLogo;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src={logoSrc}
        alt={`${BRAND_NAME} logo`}
        decoding="async"
        className={cn(
          "w-auto shrink-0",
          compact ? "h-10 md:h-11" : "h-12 md:h-14",
          tone === "light" && "drop-shadow-[0_12px_30px_rgba(0,0,0,0.28)]",
        )}
      />

      <div className="min-w-0">
        <p
          className={cn(
            "font-serif font-semibold leading-tight tracking-normal",
            compact ? "max-w-[13rem] text-[0.82rem] sm:max-w-[15rem] sm:text-sm" : "max-w-[17rem] text-lg",
            tone === "light" ? "text-primary-foreground" : "text-foreground",
          )}
        >
          <span className="block">{BRAND_PRIMARY}</span>
          <span className="block">{BRAND_SECONDARY}</span>
        </p>

        {showSubtitle && (
          <p
            className={cn(
              "mt-1 text-[10px] font-semibold uppercase tracking-[0.22em]",
              compact ? "hidden lg:block" : "",
              tone === "light"
                ? "text-primary-foreground/72"
                : "text-muted-foreground",
            )}
          >
            {BRAND_SUBTITLE}
          </p>
        )}
      </div>
    </div>
  );
}
