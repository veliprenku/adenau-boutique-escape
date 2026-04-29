export interface GalleryAsset {
  src: string;
  thumb: string;
}

const assetModules = import.meta.glob(
  "../assets/optimized/**/*.{jpg,jpeg,JPG,JPEG}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const assetEntries = Object.entries(assetModules).sort(([left], [right]) =>
  left.localeCompare(right, undefined, { numeric: true, sensitivity: "base" }),
);

const getAssetBySuffix = (suffix: string) => {
  const match = assetEntries.find(([path]) => path.endsWith(suffix));

  if (!match) {
    throw new Error(`Missing asset for ${suffix}`);
  }

  return match[1];
};

const getRoomAssets = (roomNumber: string): GalleryAsset[] =>
  assetEntries
    .filter(([path]) =>
      path.includes(`/assets/optimized/rooms/${roomNumber}/gallery/`),
    )
    .map(([path, src]) => {
      const fileName = path.split("/").pop();

      if (!fileName) {
        throw new Error(`Missing file name for optimized room ${roomNumber}`);
      }

      return {
        src,
        thumb: getAssetBySuffix(
          `/optimized/rooms/${roomNumber}/thumb/${fileName}`,
        ),
      };
    });

export const roomAssetSets = {
  "101": getRoomAssets("101"),
  "102": getRoomAssets("102"),
  "103": getRoomAssets("103"),
  "201": getRoomAssets("201"),
  "202": getRoomAssets("202"),
  "203": getRoomAssets("203"),
} as const;

export const roomCoverImages = {
  "101": getAssetBySuffix("/optimized/rooms/101/cover.jpg"),
  "102": getAssetBySuffix("/optimized/rooms/102/cover.jpg"),
  "103": getAssetBySuffix("/optimized/rooms/103/cover.jpg"),
  "201": getAssetBySuffix("/optimized/rooms/201/cover.jpg"),
  "202": getAssetBySuffix("/optimized/rooms/202/cover.jpg"),
  "203": getAssetBySuffix("/optimized/rooms/203/cover.jpg"),
} as const;

export const propertyImages = {
  amenityDetail: getAssetBySuffix("/optimized/property/amenity-detail.jpg"),
  balconyView: getAssetBySuffix("/optimized/property/balcony-view.jpg"),
  coveredTerrace: getAssetBySuffix("/optimized/property/covered-terrace.jpg"),
  entryStaircase: getAssetBySuffix("/optimized/property/entry-staircase.jpg"),
  exteriorHero: getAssetBySuffix("/optimized/property/exterior-hero.jpg"),
  exteriorPortrait: getAssetBySuffix(
    "/optimized/property/exterior-portrait.jpg",
  ),
  entranceDetail: getAssetBySuffix("/optimized/property/entrance-detail.jpg"),
  frontApproach: getAssetBySuffix("/optimized/property/front-approach.jpg"),
  guestDetail: getAssetBySuffix("/optimized/property/guest-detail.jpg"),
  guestLounge: getAssetBySuffix("/optimized/property/guest-lounge.jpg"),
  hallwayAccess: getAssetBySuffix("/optimized/property/hallway-access.jpg"),
  hallwayKeypad: getAssetBySuffix("/optimized/property/hallway-keypad.jpg"),
  houseExteriorSide: getAssetBySuffix(
    "/optimized/property/house-exterior-side.jpg",
  ),
  outsideFront: getAssetBySuffix("/optimized/property/outside-front.jpg"),
  quietSeating: getAssetBySuffix("/optimized/property/quiet-seating.jpg"),
  roomAccessDetail: getAssetBySuffix("/optimized/property/room-access-detail.jpg"),
  roomDoorDetail: getAssetBySuffix("/optimized/property/room-door-detail.jpg"),
  stairDetail: getAssetBySuffix("/optimized/property/stair-detail.jpg"),
  stairwellBright: getAssetBySuffix("/optimized/property/stairwell-bright.jpg"),
  streetExterior: getAssetBySuffix("/optimized/property/street-exterior.jpg"),
  upperHallway: getAssetBySuffix("/optimized/property/upper-hallway.jpg"),
} as const;
