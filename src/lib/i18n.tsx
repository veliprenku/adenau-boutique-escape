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
      de: "Modernes Gästehaus in Adenau — ruhig, einladend und nur wenige Minuten von der weltberühmten Rennstrecke entfernt.",
      en: "Modern guesthouse in Adenau — quiet, welcoming, and just minutes from the world-famous track.",
    },
    explore: { de: "Zimmer entdecken", en: "Explore Rooms" },
    book: { de: "Jetzt buchen", en: "Book Your Stay" },
  },
  features: {
    ring: { de: "Nahe am Nürburgring", en: "Close to the Nürburgring" },
    ringDesc: {
      de: "Nur wenige Minuten zur Rennstrecke — perfekt für Motorsport-Fans und Besucher.",
      en: "Just minutes to the track — perfect for motorsport fans and visitors.",
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
      de: "Ferienzimmer Am Buttermarkt bietet Ihnen einen komfortablen Rückzugsort im Herzen von Adenau. Ob Sie die Nürburgring-Atmosphäre erleben, die Eifel erkunden oder einfach zur Ruhe kommen möchten — bei uns finden Sie den perfekten Ausgangspunkt.",
      en: "Ferienzimmer Am Buttermarkt offers you a comfortable retreat in the heart of Adenau. Whether you want to experience the Nürburgring atmosphere, explore the Eifel, or simply find peace — we provide the perfect starting point.",
    },
  },
  roomsSection: {
    title: { de: "Unsere Zimmer", en: "Our Rooms" },
    subtitle: { de: "Komfort und Ruhe für jeden Gast", en: "Comfort and calm for every guest" },
    from: { de: "ab", en: "from" },
    perNight: { de: "/ Nacht", en: "/ night" },
    viewDetails: { de: "Details ansehen", en: "View Details" },
    viewAll: { de: "Alle Zimmer ansehen", en: "View All Rooms" },
  },
  amenities: {
    title: { de: "Annehmlichkeiten", en: "Amenities" },
    subtitle: { de: "Alles für Ihren Komfort", en: "Everything for your comfort" },
    wifi: { de: "Kostenloses WLAN", en: "Free WiFi" },
    parking: { de: "Kostenlose Parkplätze", en: "Free Parking" },
    breakfast: { de: "Frühstück verfügbar", en: "Breakfast available" },
    clean: { de: "Tägliche Reinigung", en: "Daily Cleaning" },
    quiet: { de: "Ruhige Lage", en: "Quiet Location" },
    central: { de: "Zentrale Lage", en: "Central Location" },
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
  testimonials: {
    title: { de: "Gästestimmen", en: "Guest Reviews" },
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
    rights: { de: "Alle Rechte vorbehalten.", en: "All rights reserved." },
  },
  about: {
    heroTitle: { de: "Über uns & Adenau", en: "About Us & Adenau" },
    heroSubtitle: {
      de: "Ein persönliches Gästehaus mit Herz — mitten in der Eifel.",
      en: "A personal guesthouse with heart — in the heart of the Eifel.",
    },
    storyTitle: { de: "Unser Gästehaus", en: "Our Guesthouse" },
    storyText: {
      de: "Ferienzimmer Am Buttermarkt liegt im historischen Zentrum von Adenau, direkt am charmanten Buttermarkt. Unser Gästehaus verbindet die Tradition der Eifel mit modernem Komfort. Wir bieten unseren Gästen eine persönliche, herzliche Atmosphäre — ob Sie zum Nürburgring kommen, die Natur genießen oder einfach eine Auszeit suchen.",
      en: "Ferienzimmer Am Buttermarkt is located in the historic center of Adenau, right on the charming Buttermarkt square. Our guesthouse combines Eifel tradition with modern comfort. We offer our guests a personal, warm atmosphere — whether you're visiting the Nürburgring, enjoying nature, or simply looking for a getaway.",
    },
    adenauTitle: { de: "Warum Adenau?", en: "Why Adenau?" },
    adenauText: {
      de: "Adenau ist ein malerisches Städtchen in der Eifel, umgeben von grünen Hügeln und Wäldern. Mit seiner historischen Altstadt, lokalen Restaurants und der unmittelbaren Nähe zum Nürburgring ist es der ideale Ort für einen entspannten Aufenthalt — egal ob Sie Abenteuer oder Ruhe suchen.",
      en: "Adenau is a picturesque small town in the Eifel, surrounded by green hills and forests. With its historic old town, local restaurants, and proximity to the Nürburgring, it's the ideal place for a relaxed stay — whether you seek adventure or peace.",
    },
    ringTitle: { de: "Nürburgring ganz nah", en: "Nürburgring nearby" },
    ringText: {
      de: "Die legendäre Nordschleife liegt nur wenige Autominuten entfernt. Ob Rennsport-Wochenende, Touristenfahrten oder Events — von unserem Gästehaus aus erreichen Sie den Ring bequem und schnell.",
      en: "The legendary Nordschleife is just a short drive away. Whether it's a race weekend, tourist drives, or events — from our guesthouse, you'll reach the Ring quickly and conveniently.",
    },
    nearbyTitle: { de: "Umgebung entdecken", en: "Explore the Area" },
    nearbyText: {
      de: "Wanderwege durch die Eifel, regionale Küche in gemütlichen Gasthäusern, historische Kirchen und der entspannte Rhythmus des Dorflebens — Adenau hat viel zu bieten.",
      en: "Hiking trails through the Eifel, regional cuisine in cozy inns, historic churches, and the relaxed rhythm of village life — Adenau has much to offer.",
    },
  },
  contact: {
    heroTitle: { de: "Kontakt", en: "Contact" },
    heroSubtitle: {
      de: "Wir freuen uns auf Ihre Nachricht.",
      en: "We look forward to hearing from you.",
    },
    name: { de: "Name", en: "Name" },
    email: { de: "E-Mail", en: "Email" },
    message: { de: "Nachricht", en: "Message" },
    send: { de: "Nachricht senden", en: "Send Message" },
    phone: { de: "Telefon", en: "Phone" },
    address: { de: "Adresse", en: "Address" },
    info: { de: "Kontaktinformationen", en: "Contact Information" },
  },
  roomDetail: {
    backToRooms: { de: "Zurück zu den Zimmern", en: "Back to Rooms" },
    features: { de: "Ausstattung", en: "Features" },
    bookNow: { de: "Jetzt buchen", en: "Book Now" },
    relatedRooms: { de: "Weitere Zimmer", en: "Other Rooms" },
    perNight: { de: "pro Nacht", en: "per night" },
  },
} as const;

type Translations = typeof translations;

type NestedKeyOf<T> = {
  [K in keyof T]: T[K] extends { de: string; en: string }
    ? K
    : T[K] extends object
    ? `${K & string}.${NestedKeyOf<T[K]> & string}`
    : never;
}[keyof T];

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

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("de");

  const t = (section: keyof Translations, key: string): string => {
    const sec = translations[section] as any;
    if (!sec || !sec[key]) return key;
    return sec[key][lang] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
