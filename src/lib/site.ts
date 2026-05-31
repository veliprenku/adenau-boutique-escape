export const SITE_URL = "https://buttermarkt-adenau.de";

export const BOOKING_URL = "https://www.booking.com/Share-fO61bX";

export const BOOKING_HOTEL_URL =
  "https://www.booking.com/hotel/de/ferienzimmer-am-buttermarkt.html";

export const BRAND_PRIMARY = "Buttermarkt House";

export const BRAND_SECONDARY = "Rooms at the Ring";

export const BRAND_NAME = `${BRAND_PRIMARY} ${BRAND_SECONDARY}`;

export const BRAND_SUBTITLE = "Adenau - Nuerburgring";

export const PROPERTY_ADDRESS = {
  streetAddress: "Hauptstraße 310",
  postalCode: "53518",
  addressLocality: "Adenau",
  addressCountry: "DE",
};

export const PROPERTY_ADDRESS_LINES = [
  PROPERTY_ADDRESS.streetAddress,
  `${PROPERTY_ADDRESS.postalCode} ${PROPERTY_ADDRESS.addressLocality}`,
  "Deutschland",
];

export const PROPERTY_MAP_QUERY = `${PROPERTY_ADDRESS.streetAddress}, ${PROPERTY_ADDRESS.postalCode} ${PROPERTY_ADDRESS.addressLocality}, Germany`;

export const PROPERTY_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROPERTY_MAP_QUERY)}`;

export const PROPERTY_MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(PROPERTY_MAP_QUERY)}&output=embed`;

export const CONTACT = {
  phone: "+49 2691 123456",
  email: "Shtufizija@gmail.com",
};

export const DEFAULT_DESCRIPTION =
  "Guesthouse in Adenau near the Nuerburgring with six comfortable rooms, private bathrooms, free WiFi, free private parking, coffee machines, desks, flat-screen TVs, and selected balcony or mountain-view rooms.";
