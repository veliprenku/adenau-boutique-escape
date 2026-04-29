import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { BedDouble, Maximize2, Users, Wifi, Car, KeyRound, Sparkles } from "lucide-react";
import type { Room } from "@/lib/rooms";

const amenityIcons: Record<string, typeof Wifi> = {
  wifi: Wifi,
  parking: Car,
  access: KeyRound,
  clean: Sparkles,
};

export default function RoomCard({ room }: { room: Room }) {
  const { lang, t } = useI18n();

  return (
    <Link
      to={`/rooms/${room.slug}`}
      className="group block bg-card rounded-lg overflow-hidden border border-border/50 shadow-[0_18px_60px_rgba(30,35,38,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(30,35,38,0.12)]"
    >
      <div className="img-zoom aspect-[4/3]">
        <img
          src={room.image}
          alt={room.name[lang]}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          {room.bookingType[lang]}
        </p>
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-serif text-xl font-semibold text-foreground">
            {room.name[lang]}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {room.description[lang]}
        </p>
        <div className="mb-4 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Users size={14} />
            {room.maxGuests} {t("roomsSection", "guests")}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BedDouble size={14} />
            {room.beds[lang]}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Maximize2 size={14} />
            {room.sizeSqm} m²
          </span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          {room.amenities.map((a) => {
            const Icon = amenityIcons[a];
            return Icon ? (
              <Icon key={a} size={16} className="text-muted-foreground" />
            ) : null;
          })}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-foreground font-serif text-lg font-semibold">
            {t("roomsSection", "from")} €{room.price}
            <span className="text-muted-foreground text-sm font-sans font-normal">
              {" "}{t("roomsSection", "perNight")}
            </span>
          </span>
          <span className="text-accent text-sm font-medium group-hover:underline underline-offset-4">
            {t("roomsSection", "viewDetails")} →
          </span>
        </div>
      </div>
    </Link>
  );
}
