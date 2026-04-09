import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Wifi, Car, Coffee, Sparkles } from "lucide-react";
import type { Room } from "@/lib/rooms";

const amenityIcons: Record<string, typeof Wifi> = {
  wifi: Wifi,
  parking: Car,
  breakfast: Coffee,
  clean: Sparkles,
};

export default function RoomCard({ room }: { room: Room }) {
  const { lang, t } = useI18n();

  return (
    <Link
      to={`/rooms/${room.slug}`}
      className="group block bg-card rounded-xl overflow-hidden border border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="img-zoom aspect-[4/3]">
        <img
          src={room.image}
          alt={room.name[lang]}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-serif text-xl font-semibold text-foreground">
            {room.name[lang]}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {room.description[lang]}
        </p>
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
