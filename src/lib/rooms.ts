import { roomAssetSets, roomCoverImages, type GalleryAsset } from "@/lib/media";

type LocalizedText = { de: string; en: string };

export interface Room {
  id: string;
  slug: string;
  name: LocalizedText;
  price: number;
  description: LocalizedText;
  longDescription: LocalizedText;
  image: string;
  gallery: GalleryAsset[];
  amenities: string[];
  features: { de: string[]; en: string[] };
}

export const rooms: Room[] = [
  {
    id: "101",
    slug: "zimmer-101",
    name: { de: "Zimmer 101", en: "Room 101" },
    price: 79,
    description: {
      de: "Helles Doppelzimmer mit modernem Bad und Platz zum Arbeiten.",
      en: "Bright double room with a modern bathroom and space to work.",
    },
    longDescription: {
      de: "Zimmer 101 bietet ein ruhiges, gepflegtes Ambiente mit viel Tageslicht, warmem Holzboden und einem klaren modernen Look. Ideal fuer Paare oder Ring-Besucher, die ein entspanntes Doppelzimmer mit eigenem Bad suchen.",
      en: "Room 101 offers a calm, well-kept setting with plenty of daylight, warm wood flooring, and a clean modern look. It is ideal for couples or Ring visitors who want a relaxed double room with a private bathroom.",
    },
    image: roomCoverImages["101"],
    gallery: roomAssetSets["101"],
    amenities: ["wifi", "parking", "clean"],
    features: {
      de: [
        "Doppelbett",
        "Eigenes Badezimmer",
        "Kostenfreies WLAN",
        "Flachbild-TV",
        "Schreibtisch",
        "Handtuecher und Bettwaesche",
      ],
      en: [
        "Double bed",
        "Private bathroom",
        "Free WiFi",
        "Flat-screen TV",
        "Desk",
        "Towels and bed linen",
      ],
    },
  },
  {
    id: "102",
    slug: "zimmer-102",
    name: { de: "Zimmer 102", en: "Room 102" },
    price: 79,
    description: {
      de: "Gemutliches Doppelzimmer mit kompakter Aufteilung und modernem Komfort.",
      en: "Cozy double room with a compact layout and modern comfort.",
    },
    longDescription: {
      de: "Zimmer 102 ist ein angenehmes Doppelzimmer mit klarer Ausstattung, warmen Farben und einem modernen Bad. Eine gute Wahl fuer kurze Wochenenden am Nuerburgring oder entspannte Tage in Adenau.",
      en: "Room 102 is a comfortable double room with clean lines, warm tones, and a modern bathroom. It is a strong choice for short Nuerburgring weekends or relaxed days in Adenau.",
    },
    image: roomCoverImages["102"],
    gallery: roomAssetSets["102"],
    amenities: ["wifi", "parking", "clean"],
    features: {
      de: [
        "Doppelbett",
        "Modernes Badezimmer",
        "Kostenfreies WLAN",
        "Flachbild-TV",
        "Sitz- und Arbeitsbereich",
        "Handtuecher und Bettwaesche",
      ],
      en: [
        "Double bed",
        "Modern bathroom",
        "Free WiFi",
        "Flat-screen TV",
        "Seating and work area",
        "Towels and bed linen",
      ],
    },
  },
  {
    id: "103",
    slug: "zimmer-103",
    name: { de: "Familienzimmer 103", en: "Family Room 103" },
    price: 109,
    description: {
      de: "Grosszuegiges Zimmer mit mehreren Schlafplaetzen fuer Familien oder kleine Gruppen.",
      en: "Generous room with multiple sleeping spaces for families or small groups.",
    },
    longDescription: {
      de: "Familienzimmer 103 bietet mehr Flexibilitaet fuer Gaeste, die zusammen reisen. Der helle Raum verbindet mehrere Schlafmoeglichkeiten mit derselben modernen, gepflegten Ausstattung wie die anderen Zimmer im Haus.",
      en: "Family Room 103 gives extra flexibility to guests traveling together. The bright space combines multiple sleeping options with the same modern, well-kept finish found throughout the house.",
    },
    image: roomCoverImages["103"],
    gallery: roomAssetSets["103"],
    amenities: ["wifi", "parking", "breakfast", "clean"],
    features: {
      de: [
        "Mehrere Schlafplaetze",
        "Eigenes Badezimmer",
        "Kostenfreies WLAN",
        "Flachbild-TV",
        "Tisch und Sitzbereich",
        "Handtuecher und Bettwaesche",
      ],
      en: [
        "Multiple sleeping spaces",
        "Private bathroom",
        "Free WiFi",
        "Flat-screen TV",
        "Table and seating area",
        "Towels and bed linen",
      ],
    },
  },
  {
    id: "201",
    slug: "zimmer-201",
    name: { de: "Komfortzimmer 201", en: "Comfort Room 201" },
    price: 89,
    description: {
      de: "Ruhiges Komfortzimmer unter dem Dach mit viel Licht und wohnlicher Atmosphaere.",
      en: "Quiet comfort room under the roof with plenty of light and a homely feel.",
    },
    longDescription: {
      de: "Zimmer 201 verbindet den ruhigen Charakter des oberen Stockwerks mit einem hellen Schlafbereich und einem grossen modernen Bad. Es passt gut zu Gaesten, die etwas mehr Rueckzug und eine entspannte Zimmeratmosphaere suchen.",
      en: "Room 201 combines the calm of the upper floor with a bright sleeping area and a spacious modern bathroom. It suits guests who want a little more privacy and a relaxed room atmosphere.",
    },
    image: roomCoverImages["201"],
    gallery: roomAssetSets["201"],
    amenities: ["wifi", "parking", "clean"],
    features: {
      de: [
        "Doppelbett",
        "Grosses Badezimmer",
        "Kostenfreies WLAN",
        "Flachbild-TV",
        "Schreibtisch",
        "Handtuecher und Bettwaesche",
      ],
      en: [
        "Double bed",
        "Large bathroom",
        "Free WiFi",
        "Flat-screen TV",
        "Desk",
        "Towels and bed linen",
      ],
    },
  },
  {
    id: "202",
    slug: "zimmer-202",
    name: { de: "Komfortzimmer 202", en: "Comfort Room 202" },
    price: 89,
    description: {
      de: "Grosses, sonniges Doppelzimmer mit offenem Raumgefuehl und modernem Setup.",
      en: "Large, sunlit double room with an open feel and a modern setup.",
    },
    longDescription: {
      de: "Zimmer 202 wirkt besonders offen und freundlich. Viel Tageslicht, klare Materialien und ein grosszuegiger Grundriss machen es zu einer starken Wahl fuer alle, die etwas mehr Raum und Leichtigkeit im Aufenthalt suchen.",
      en: "Room 202 feels especially open and welcoming. Plenty of daylight, clean materials, and a generous layout make it a strong choice for guests who want a little more space and ease during their stay.",
    },
    image: roomCoverImages["202"],
    gallery: roomAssetSets["202"],
    amenities: ["wifi", "parking", "breakfast", "clean"],
    features: {
      de: [
        "Doppelbett",
        "Eigenes Badezimmer",
        "Kostenfreies WLAN",
        "Flachbild-TV",
        "Sitz- und Arbeitsbereich",
        "Handtuecher und Bettwaesche",
      ],
      en: [
        "Double bed",
        "Private bathroom",
        "Free WiFi",
        "Flat-screen TV",
        "Seating and work area",
        "Towels and bed linen",
      ],
    },
  },
];
