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
} as const;

export const roomCoverImages = {
  "101": getAssetBySuffix("/optimized/rooms/101/cover.jpg"),
  "102": getAssetBySuffix("/optimized/rooms/102/cover.jpg"),
  "103": getAssetBySuffix("/optimized/rooms/103/cover.jpg"),
  "201": getAssetBySuffix("/optimized/rooms/201/cover.jpg"),
  "202": getAssetBySuffix("/optimized/rooms/202/cover.jpg"),
} as const;

export const propertyImages = {
  exteriorHero: getAssetBySuffix("/optimized/property/exterior-hero.jpg"),
  exteriorPortrait: getAssetBySuffix(
    "/optimized/property/exterior-portrait.jpg",
  ),
  entranceDetail: getAssetBySuffix("/optimized/property/entrance-detail.jpg"),
  hallwayAccess: getAssetBySuffix("/optimized/property/hallway-access.jpg"),
  hallwayKeypad: getAssetBySuffix("/optimized/property/hallway-keypad.jpg"),
} as const;
