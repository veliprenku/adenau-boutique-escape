import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "de" | "en";

const translations = {
  nav: {
    home: { de: "Startseite", en: "Home" },
    rooms: { de: "Zimmer", en: "Rooms" },
    about: { de: "Über uns", en: "About" },
    contact: { de: "Kontakt", en: "Contact" },
    book: { de: "Buchen", en: "Book Now" },
  },
  hero: {
    title: { de: "Ein ruhiger Aufenthalt nahe dem Nürburgring", en: "A calm stay near the Nürburgring" },
    subtitle: {
      de: "Modernes Gästehaus in Adenau - ruhig, einladend und nur wenige Minuten von der weltberühmten Rennstrecke entfernt.",
      en: "Modern guesthouse in Adenau - quiet, welcoming, and just minutes from the world-famous track.",
    },
    explore: { de: "Zimmer entdecken", en: "Explore Rooms" },
    book: { de: "Jetzt buchen", en: "Book Your Stay" },
  },
  features: {
    ring: { de: "Nahe am Nürburgring", en: "Close to the Nürburgring" },
    ringDesc: {
      de: "Nur wenige Minuten zur Rennstrecke - perfekt für Motorsport-Fans und Besucher.",
      en: "Just minutes to the track - perfect for motorsport fans and visitors.",
    },
    rooms: { de: "Helle, erholsame Zimmer", en: "Bright, restful rooms" },
    roomsDesc: {
      de: "Saubere, komfortable Räume mit natürlichem Licht und modernem Komfort.",
      en: "Clean, comfortable spaces with natural light and modern amenities.",
    },
    booking: { de: "Einfache Buchung", en: "Easy booking" },
    bookingDesc: {
      de: "Unkompliziert reservieren und Ihren Aufenthalt in der Eifel genießen.",
      en: "Reserve effortlessly and enjoy your stay in the Eifel.",
    },
  },
  intro: {
    welcome: { de: "Willkommen in Adenau", en: "Welcome to Adenau" },
    text: {
      de: "Buttermarkt House Rooms at the Ring bietet Ihnen einen komfortablen Rückzugsort im Herzen von Adenau. Ob Sie die Nürburgring-Atmosphäre erleben, die Eifel erkunden oder einfach zur Ruhe kommen möchten - bei uns finden Sie den perfekten Ausgangspunkt.",
      en: "Buttermarkt House Rooms at the Ring offers you a comfortable retreat in the heart of Adenau. Whether you want to experience the Nürburgring atmosphere, explore the Eifel, or simply find peace - we provide the perfect starting point.",
    },
  },
  roomsSection: {
    title: { de: "Unsere Zimmer", en: "Our Rooms" },
    subtitle: { de: "Komfort und Ruhe für jeden Gast", en: "Comfort and calm for every guest" },
    details: { de: "Zimmerdetails", en: "Room details" },
    viewDetails: { de: "Details ansehen", en: "View Details" },
    viewAll: { de: "Alle Zimmer ansehen", en: "View All Rooms" },
    guests: { de: "Gaeste", en: "guests" },
    livePrice: { de: "Verfuegbarkeit pruefen", en: "Check availability" },
    bookingText: {
      de: "Aktuelle Verfuegbarkeit und Buchung laufen direkt ueber Booking.com.",
      en: "Current availability and booking are handled directly through Booking.com.",
    },
  },
  amenities: {
    title: { de: "Annehmlichkeiten", en: "Amenities" },
    subtitle: { de: "Alles für Ihren Komfort", en: "Everything for your comfort" },
    wifi: { de: "Kostenloses WLAN", en: "Free WiFi" },
    parking: { de: "Kostenlose Parkplätze", en: "Free Parking" },
    access: { de: "Einfacher Zugang", en: "Easy access" },
    clean: { de: "Gepflegte Zimmer", en: "Well-kept rooms" },
    quiet: { de: "Ruhige Lage", en: "Quiet Location" },
    central: { de: "Zentrale Lage", en: "Central Location" },
    privateBathroom: { de: "Eigenes Bad", en: "Private bathroom" },
    coffeeMachine: { de: "Kaffeemaschine", en: "Coffee machine" },
    flatScreenTv: { de: "Flachbild-TV", en: "Flat-screen TV" },
    workDesk: { de: "Schreibtisch", en: "Work desk" },
    familyFriendly: { de: "Familienfreundlich", en: "Family friendly" },
  },
  houseGallery: {
    title: { de: "Ein Blick ins Haus", en: "A Look Inside" },
    subtitle: {
      de: "Warme Details, helle Aufenthaltsbereiche und ruhige Plaetze zum Ankommen.",
      en: "Warm details, bright shared areas, and calm corners to settle in.",
    },
    text: {
      de: "Neben den Zimmern praegen gepflegte Flure, ein gemuetlicher Wohnbereich, klare Zugangspunkte und geschuetzte Aussenplaetze das Gefuehl im Haus. Speisen servieren wir vor Ort nicht.",
      en: "Beyond the rooms, tidy hallways, a comfortable lounge, clear access points, and sheltered outdoor spaces shape the feel of the house. We do not serve food on site.",
    },
  },
  propertyDetails: {
    title: { de: "Ankommen, einchecken, wohlfühlen", en: "Arrive, Check In, Settle In" },
   
  },
  lifestyle: {
    title: { de: "Adenau & Nürburgring", en: "Adenau & Nürburgring" },
    subtitle: {
      de: "Wo Erholung auf Motorsport trifft",
      en: "Where relaxation meets motorsport",
    },
    text: {
      de: "Die Eifel bietet eine einzigartige Kombination aus Natur, Geschichte und Motorsport. Adenau, das charmante Tor zum Nürburgring, verzaubert mit seinen Fachwerkhäusern, gemütlichen Restaurants und der entspannten Atmosphäre eines traditionellen deutschen Dorfes.",
      en: "The Eifel offers a unique combination of nature, history, and motorsport. Adenau, the charming gateway to the Nürburgring, enchants with its half-timbered houses, cozy restaurants, and the relaxed atmosphere of a traditional German village.",
    },
  },
  faq: {
    title: { de: "Häufige Fragen", en: "Frequently Asked Questions" },
  },
  cta: {
    title: { de: "Bereit für Ihren Aufenthalt?", en: "Ready for your stay?" },
    subtitle: {
      de: "Buchen Sie jetzt und erleben Sie die Eifel von ihrer schönsten Seite.",
      en: "Book now and experience the Eifel at its finest.",
    },
    button: { de: "Jetzt buchen", en: "Book Now" },
  },
  footer: {
    address: { de: "Adresse", en: "Address" },
    links: { de: "Navigation", en: "Navigation" },
    legal: { de: "Rechtliches", en: "Legal" },
    privacy: { de: "Datenschutz", en: "Privacy Policy" },
    imprint: { de: "Impressum", en: "Imprint" },
    cookies: { de: "Cookie-Einstellungen", en: "Cookie Settings" },
    rights: { de: "Alle Rechte vorbehalten.", en: "All rights reserved." },
  },
  about: {
    heroTitle: { de: "Über uns & Adenau", en: "About Us & Adenau" },
    heroSubtitle: {
      de: "Sechs komfortable Zimmer in Adenau - nahe am Nuerburgring, ruhig gelegen und praktisch ausgestattet.",
      en: "Six comfortable rooms in Adenau - close to the Nuerburgring, calm, and thoughtfully equipped.",
    },
    storyTitle: { de: "Unser Gästehaus", en: "Our Guesthouse" },
    storyText: {
      de: "Buttermarkt House Rooms at the Ring ist ein Gaestehaus in Adenau mit sechs Zimmern fuer Touristen, Reisende und Gaeste, die beruflich oder privat in der Eifel unterwegs sind. Die Unterkunft bietet kostenfreie Privatparkplaetze, kostenloses WLAN und Zimmer mit eigenem Bad. Jede Einheit ist mit Kleiderschrank, Schreibtisch, Flachbild-TV und Kaffeemaschine ausgestattet; einige Zimmer verfuegen zudem ueber Balkon und Bergblick.",
      en: "Buttermarkt House Rooms at the Ring is a guesthouse in Adenau with six rooms for tourists, travelers, and guests visiting the Eifel for work or leisure. The property offers free private parking, free WiFi, and rooms with private bathrooms. Each unit includes a wardrobe, desk, flat-screen TV, and coffee machine; selected rooms also feature a balcony and mountain views.",
    },
    adenauTitle: { de: "Warum Adenau?", en: "Why Adenau?" },
    adenauText: {
      de: "Adenau ist ein praktischer und angenehmer Ausgangspunkt fuer Ihren Aufenthalt in der Eifel. Die Lage verbindet kurze Wege zum Nuerburgring mit Restaurants, Cafes, Einkaufsmoeglichkeiten und der ruhigen Atmosphaere einer kleinen Stadt.",
      en: "Adenau is a practical and pleasant base for a stay in the Eifel. The location combines quick access to the Nuerburgring with restaurants, cafes, shops, and the calm atmosphere of a small town.",
    },
    ringTitle: { de: "Nürburgring ganz nah", en: "Nürburgring nearby" },
    ringText: {
      de: "Der Nuerburgring liegt etwa 5,6 Meilen bzw. 9 km von der Unterkunft entfernt. Damit eignet sich Buttermarkt House Rooms at the Ring besonders fuer Motorsport-Wochenenden, Touristenfahrten, Events und kurze Aufenthalte rund um die Strecke.",
      en: "The Nuerburgring is about 5.6 miles, or 9 km, from the property. This makes Buttermarkt House Rooms at the Ring a strong choice for motorsport weekends, tourist drives, events, and short stays around the track.",
    },
    nearbyTitle: { de: "Umgebung entdecken", en: "Explore the Area" },
    nearbyText: {
      de: "Von Adenau aus erreichen Sie weitere Ziele in der Region: die Abtei Maria Laach liegt rund 19 Meilen entfernt, Cochem Castle etwa 28 Meilen, Bonner Kammerspiele und Kurfuerstenbad jeweils rund 27 Meilen. Sportpark Pennenfeld, Museumsmeile und der Alte Bundestag liegen etwa 29 Meilen entfernt; der Flughafen Koeln/Bonn ist rund 43 Meilen entfernt.",
      en: "From Adenau, several regional destinations are within reach: Monastery Maria Laach is around 19 miles away, Cochem Castle about 28 miles, and Bonner Kammerspiele and Kurfuerstenbad around 27 miles. Sportpark Pennenfeld, Museumsmeile, and the Old Bundestag are about 29 miles away; Cologne Bonn Airport is around 43 miles from the property.",
    },
  },
  contact: {
    heroTitle: { de: "Kontakt", en: "Contact" },
    heroSubtitle: {
      de: "Schnell anfragen, direkt buchen oder die Route nach Adenau planen.",
      en: "Send a quick request, book directly, or plan your route to Adenau.",
    },
    eyebrow: { de: "Anfrage & Anreise", en: "Request & Arrival" },
    cardTitle: { de: "Hauptstraße 310, Adenau", en: "Hauptstraße 310, Adenau" },
    cardText: {
      de: "Das Haus liegt zentral am Buttermarkt und bleibt trotzdem ein ruhiger Ausgangspunkt fuer Ihren Aufenthalt nahe dem Nuerburgring.",
      en: "The house sits centrally at Buttermarkt while staying a calm base for your visit near the Nuerburgring.",
    },
    name: { de: "Name", en: "Name" },
    email: { de: "E-Mail", en: "Email" },
    message: { de: "Nachricht", en: "Message" },
    send: { de: "Nachricht senden", en: "Send Message" },
    openMail: { de: "E-Mail oeffnen", en: "Open email" },
    directions: { de: "Route planen", en: "Get directions" },
    phone: { de: "Telefon", en: "Phone" },
    address: { de: "Adresse", en: "Address" },
    info: { de: "Kontakt direkt", en: "Direct contact" },
  },
  roomDetail: {
    backToRooms: { de: "Zurück zu den Zimmern", en: "Back to Rooms" },
    features: { de: "Ausstattung", en: "Features" },
    bookNow: { de: "Jetzt buchen", en: "Book Now" },
    relatedRooms: { de: "Weitere Zimmer", en: "Other Rooms" },
    bookingDetails: { de: "Zimmerdetails", en: "Room details" },
    bookingType: { de: "Zimmerkategorie", en: "Room type" },
    capacity: { de: "Kapazitaet", en: "Capacity" },
    bedSetup: { de: "Betten", en: "Beds" },
    roomSize: { de: "Groesse", en: "Size" },
    bookingCtaEyebrow: { de: "Buchung", en: "Booking" },
    bookingCtaTitle: { de: "Verfuegbarkeit ansehen", en: "Check availability" },
    bookingCtaText: {
      de: "Alle Buchungsdetails sehen Sie direkt im Buchungsprozess.",
      en: "All booking details are shown directly during the booking process.",
    },
  },
} as const;

type Translations = typeof translations;

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (section: keyof Translations, key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "de",
  setLang: () => {},
  t: () => "",
});

const LANGUAGE_STORAGE_KEY = "buttermarkt-language-v1";

const getStoredLanguage = (): Lang => {
  if (typeof window === "undefined") {
    return "de";
  }

  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored === "en" ? "en" : "de";
  } catch {
    return "de";
  }
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getStoredLanguage);

  const setLang = (next: Lang) => {
    setLangState(next);

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    } catch {
      // Ignore storage write failures and keep the selected language for the current session.
    }
  };

  const t = (section: keyof Translations, key: string): string => {
    const sec = translations[section] as Record<string, Partial<Record<Lang, string>>>;
    return sec[key]?.[lang] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
