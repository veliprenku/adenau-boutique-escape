import roomComfort from "@/assets/room-comfort.jpg";
import roomNuerburgring from "@/assets/room-nuerburgring.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomStandard from "@/assets/room-standard.jpg";

export interface Room {
  id: string;
  slug: string;
  name: { de: string; en: string };
  price: number;
  description: { de: string; en: string };
  longDescription: { de: string; en: string };
  image: string;
  amenities: string[];
  features: { de: string[]; en: string[] };
}

export const rooms: Room[] = [
  {
    id: "1",
    slug: "double-room-comfort",
    name: { de: "Doppelzimmer Komfort", en: "Double Room Comfort" },
    price: 79,
    description: {
      de: "Ein geräumiges Doppelzimmer mit modernem Komfort und natürlichem Licht.",
      en: "A spacious double room with modern comfort and natural light.",
    },
    longDescription: {
      de: "Unser Doppelzimmer Komfort bietet Ihnen viel Platz zum Entspannen. Das helle, freundliche Zimmer ist mit einem bequemen Doppelbett, einem modernen Badezimmer und einem Arbeitsbereich ausgestattet. Genießen Sie den Blick ins Grüne und starten Sie erholt in den Tag.",
      en: "Our Double Room Comfort offers plenty of space to relax. The bright, friendly room features a comfortable double bed, a modern bathroom, and a work area. Enjoy the view of the greenery and start your day refreshed.",
    },
    image: roomComfort,
    amenities: ["wifi", "parking", "breakfast", "clean"],
    features: {
      de: ["Doppelbett (180x200cm)", "Eigenes Badezimmer mit Dusche", "Kostenfreies WLAN", "Flachbild-TV", "Schreibtisch", "Handtücher & Bettwäsche"],
      en: ["Double bed (180x200cm)", "Private bathroom with shower", "Free WiFi", "Flat-screen TV", "Writing desk", "Towels & bed linen"],
    },
  },
  {
    id: "2",
    slug: "nuerburgring-weekend-room",
    name: { de: "Nürburgring Wochenendzimmer", en: "Nürburgring Weekend Room" },
    price: 89,
    description: {
      de: "Ideal für Motorsport-Begeisterte — komfortabel und stilvoll mit subtilen Racing-Akzenten.",
      en: "Ideal for motorsport enthusiasts — comfortable and stylish with subtle racing accents.",
    },
    longDescription: {
      de: "Das Nürburgring Wochenendzimmer ist perfekt für alle, die das Rennstrecken-Feeling auch nach dem Tag auf dem Ring noch spüren möchten. Stilvolle Details, ein großzügiges Bett und alles, was Sie für ein erholsames Wochenende brauchen.",
      en: "The Nürburgring Weekend Room is perfect for those who want to feel the track atmosphere even after a day at the Ring. Stylish details, a generous bed, and everything you need for a restful weekend.",
    },
    image: roomNuerburgring,
    amenities: ["wifi", "parking", "clean"],
    features: {
      de: ["Queensize-Bett", "Eigenes Badezimmer", "Kostenfreies WLAN", "Flachbild-TV", "Garderobe", "Motorsport-Dekor"],
      en: ["Queen-size bed", "Private bathroom", "Free WiFi", "Flat-screen TV", "Wardrobe", "Motorsport decor"],
    },
  },
  {
    id: "3",
    slug: "family-guest-room",
    name: { de: "Familien-Gästezimmer", en: "Family Guest Room" },
    price: 109,
    description: {
      de: "Großzügig geschnitten für Familien — mit Platz für bis zu vier Gäste.",
      en: "Generously sized for families — with space for up to four guests.",
    },
    longDescription: {
      de: "Unser Familien-Gästezimmer bietet ausreichend Platz für die ganze Familie. Mit zwei bequemen Betten, einem hellen Wohnbereich und einem geräumigen Bad ist dieses Zimmer Ihr Zuhause in der Eifel.",
      en: "Our Family Guest Room offers plenty of space for the whole family. With two comfortable beds, a bright living area, and a spacious bathroom, this room is your home in the Eifel.",
    },
    image: roomFamily,
    amenities: ["wifi", "parking", "breakfast", "clean"],
    features: {
      de: ["Zwei Einzelbetten / Doppelbett", "Zusatzbett möglich", "Eigenes großes Bad", "Kostenfreies WLAN", "Flachbild-TV", "Familiäre Atmosphäre"],
      en: ["Two single beds / double bed", "Extra bed available", "Private large bathroom", "Free WiFi", "Flat-screen TV", "Family-friendly atmosphere"],
    },
  },
  {
    id: "4",
    slug: "standard-quiet-room",
    name: { de: "Standard Ruhezimmer", en: "Standard Quiet Room" },
    price: 69,
    description: {
      de: "Ein gemütliches Einzelzimmer — schlicht, sauber und perfekt für eine ruhige Nacht.",
      en: "A cozy single room — simple, clean, and perfect for a quiet night.",
    },
    longDescription: {
      de: "Das Standard Ruhezimmer ist ideal für Alleinreisende oder Geschäftsreisende, die eine saubere, ruhige Unterkunft suchen. Funktional eingerichtet, mit allem Notwendigen für einen erholsamen Aufenthalt.",
      en: "The Standard Quiet Room is ideal for solo travelers or business guests looking for a clean, quiet accommodation. Functionally furnished with everything needed for a restful stay.",
    },
    image: roomStandard,
    amenities: ["wifi", "parking", "clean"],
    features: {
      de: ["Einzelbett (120x200cm)", "Eigenes Badezimmer", "Kostenfreies WLAN", "Handtücher & Bettwäsche", "Nachttischlampe", "Kleiderschrank"],
      en: ["Single bed (120x200cm)", "Private bathroom", "Free WiFi", "Towels & bed linen", "Bedside lamp", "Wardrobe"],
    },
  },
];
