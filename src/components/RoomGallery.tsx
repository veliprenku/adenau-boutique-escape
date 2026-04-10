import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Image, Maximize2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { GalleryAsset } from "@/lib/media";
import { cn } from "@/lib/utils";

interface RoomGalleryProps {
  images: GalleryAsset[];
  roomName: string;
  lang: "de" | "en";
}

export default function RoomGallery({
  images,
  roomName,
  lang,
}: RoomGalleryProps) {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [lightboxApi, setLightboxApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const copy =
    lang === "de"
      ? {
          eyebrow: "Einblicke",
          title: "Swipe-Galerie",
          hint: "Wischen, Pfeile nutzen oder ein Foto im Vollbild oeffnen.",
          open: "Vollbild",
          photo: "Foto",
          photos: "Fotos",
          thumbnails: "Schnellwahl",
          tapHint: "Zum Vergoessern antippen",
          fullscreenTitle: `${roomName} Bildergalerie`,
          fullscreenDescription:
            "Wischen Sie durch alle Fotos und betrachten Sie jedes Bild im Vollbild.",
        }
      : {
          eyebrow: "Inside the room",
          title: "Swipe Gallery",
          hint: "Swipe, use the arrows, or open any image in fullscreen.",
          open: "Fullscreen",
          photo: "Photo",
          photos: "photos",
          thumbnails: "Quick picks",
          tapHint: "Tap to enlarge",
          fullscreenTitle: `${roomName} image gallery`,
          fullscreenDescription:
            "Swipe through every photo and inspect each image in fullscreen.",
        };

  useEffect(() => {
    if (!mainApi) {
      return;
    }

    const handleSelect = () => {
      setActiveIndex(mainApi.selectedScrollSnap());
    };

    handleSelect();
    mainApi.on("select", handleSelect);
    mainApi.on("reInit", handleSelect);

    return () => {
      mainApi.off("select", handleSelect);
      mainApi.off("reInit", handleSelect);
    };
  }, [mainApi]);

  useEffect(() => {
    if (!lightboxApi) {
      return;
    }

    const handleSelect = () => {
      const nextIndex = lightboxApi.selectedScrollSnap();
      setActiveIndex(nextIndex);

      if (mainApi && mainApi.selectedScrollSnap() !== nextIndex) {
        mainApi.scrollTo(nextIndex);
      }
    };

    lightboxApi.on("select", handleSelect);
    lightboxApi.on("reInit", handleSelect);

    return () => {
      lightboxApi.off("select", handleSelect);
      lightboxApi.off("reInit", handleSelect);
    };
  }, [lightboxApi, mainApi]);

  useEffect(() => {
    if (mainApi && mainApi.selectedScrollSnap() !== activeIndex) {
      mainApi.scrollTo(activeIndex);
    }

    if (lightboxApi && lightboxApi.selectedScrollSnap() !== activeIndex) {
      lightboxApi.scrollTo(activeIndex);
    }
  }, [activeIndex, lightboxApi, mainApi]);

  if (!images.length) {
    return null;
  }

  const progress = `${((activeIndex + 1) / images.length) * 100}%`;
  const currentCounter = `${String(activeIndex + 1).padStart(2, "0")} / ${String(
    images.length,
  ).padStart(2, "0")}`;
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < images.length - 1;

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const goPrev = () => {
    if (canGoPrev) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goNext = () => {
    if (canGoNext) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const openLightboxAt = (index: number) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
  };

  const renderThumbnails = (
    tone: "light" | "dark",
    size: "default" | "compact" = "default",
  ) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <p
          className={cn(
            "text-xs font-medium tracking-[0.28em] uppercase",
            tone === "dark" ? "text-white/60" : "text-muted-foreground",
          )}
        >
          {copy.thumbnails}
        </p>
        <p
          className={cn(
            "text-xs",
            tone === "dark" ? "text-white/50" : "text-muted-foreground",
          )}
        >
          {copy.tapHint}
        </p>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={`${tone}-${image.src}`}
            type="button"
            onClick={() => goTo(index)}
            className={cn(
              "group relative shrink-0 overflow-hidden border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              size === "compact"
                ? "h-16 w-20 rounded-xl"
                : "h-20 w-24 rounded-2xl",
              tone === "dark"
                ? "border-white/10 bg-white/5 focus-visible:ring-offset-black"
                : "border-border/60 bg-card focus-visible:ring-offset-background",
              activeIndex === index
                ? tone === "dark"
                  ? "scale-[1.02] border-white/70 shadow-[0_18px_40px_-30px_rgba(255,255,255,0.7)]"
                  : "scale-[1.02] border-accent shadow-[0_18px_40px_-30px_hsl(var(--accent))]"
                : "opacity-75 hover:opacity-100",
            )}
            aria-label={`${copy.photo} ${index + 1}`}
          >
            <img
              src={image.thumb}
              alt={`${roomName} ${copy.photo.toLowerCase()} ${index + 1}`}
              loading="lazy"
              decoding="async"
              sizes="96px"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t via-transparent to-transparent",
                tone === "dark" ? "from-black/60" : "from-black/45",
              )}
            />
            <span className="absolute bottom-2 left-2 text-[11px] font-medium text-white">
              {index + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="mb-12">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
              {copy.eyebrow}
            </p>
            <h2 className="font-serif text-2xl font-semibold mb-2">
              {copy.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              {copy.hint}
            </p>
          </div>

          <Badge
            variant="outline"
            className="w-fit rounded-full border-accent/25 bg-accent/5 px-4 py-1.5 text-foreground"
          >
            <Image className="mr-2 h-3.5 w-3.5 text-accent" />
            {images.length} {copy.photos}
          </Badge>
        </div>

        <div className="rounded-[2rem] border border-border/60 bg-gradient-to-br from-card via-card to-secondary/60 p-4 shadow-[0_32px_80px_-48px_rgba(15,23,42,0.45)] md:p-5">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 bg-background">
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 p-4 md:p-5">
              <Badge className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-white shadow-none backdrop-blur-sm">
                {currentCounter}
              </Badge>

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => openLightboxAt(activeIndex)}
                className="h-10 rounded-full border-white/15 bg-black/55 px-4 text-white backdrop-blur-sm hover:bg-black/70 hover:text-white"
              >
                <Maximize2 />
                {copy.open}
              </Button>
            </div>

            <Carousel
              setApi={setMainApi}
              opts={{ align: "start" }}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={image.src} className="pl-0">
                    <button
                      type="button"
                      onClick={() => openLightboxAt(index)}
                      className="group relative block w-full text-left"
                      aria-label={`${copy.open} ${copy.photo.toLowerCase()} ${
                        index + 1
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={`${roomName} ${copy.photo.toLowerCase()} ${
                          index + 1
                        }`}
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                        decoding="async"
                        sizes="(min-width: 1024px) 66vw, 100vw"
                        className="h-[24rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-[30rem]"
                      />

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 md:p-6">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="mb-1 text-xs font-medium tracking-[0.32em] text-white/60 uppercase">
                              {copy.photo} {index + 1}
                            </p>
                            <p className="text-sm text-white/85 md:text-base">
                              {copy.tapHint}
                            </p>
                          </div>

                          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-white/75 backdrop-blur-sm sm:flex">
                            <ArrowLeft className="h-3.5 w-3.5" />
                            <ArrowRight className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      </div>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="absolute inset-y-0 left-0 z-10 flex items-center p-3 md:p-4">
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={goPrev}
                disabled={!canGoPrev}
                className="h-11 w-11 rounded-full border-white/15 bg-black/45 text-white backdrop-blur-sm hover:bg-black/65 hover:text-white"
                aria-label={lang === "de" ? "Vorheriges Foto" : "Previous photo"}
              >
                <ArrowLeft />
              </Button>
            </div>

            <div className="absolute inset-y-0 right-0 z-10 flex items-center p-3 md:p-4">
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={goNext}
                disabled={!canGoNext}
                className="h-11 w-11 rounded-full border-white/15 bg-black/45 text-white backdrop-blur-sm hover:bg-black/65 hover:text-white"
                aria-label={lang === "de" ? "Naechstes Foto" : "Next photo"}
              >
                <ArrowRight />
              </Button>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border/80">
              <div
                className="h-full rounded-full bg-accent transition-all duration-300"
                style={{ width: progress }}
              />
            </div>
            <span className="min-w-fit text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">
              {currentCounter}
            </span>
          </div>

          <div className="mt-5">{renderThumbnails("light")}</div>
        </div>
      </div>

      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="h-screen max-w-none translate-x-[-50%] translate-y-[-50%] gap-0 overflow-hidden border-0 bg-black p-0 text-white shadow-none sm:rounded-none [&>button]:right-4 [&>button]:top-4 [&>button]:z-30 [&>button]:rounded-full [&>button]:border [&>button]:border-white/15 [&>button]:bg-black/70 [&>button]:p-2.5 [&>button]:text-white [&>button]:opacity-100 [&>button]:ring-offset-black [&>button]:backdrop-blur-md [&>button]:hover:bg-white/10 sm:[&>button]:right-6 sm:[&>button]:top-5">
          <DialogTitle className="sr-only">{copy.fullscreenTitle}</DialogTitle>
          <DialogDescription className="sr-only">
            {copy.fullscreenDescription}
          </DialogDescription>

          <div className="relative flex h-full flex-col overflow-hidden bg-black">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black via-black/82 to-transparent px-4 pb-12 pt-4 sm:px-8 sm:pb-16 sm:pt-5">
              <div className="pointer-events-auto flex items-start justify-between gap-4 pr-16 sm:pr-20">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.32em] text-white/45 uppercase sm:text-xs">
                    {roomName}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <p className="font-serif text-xl text-white sm:text-2xl">
                      {currentCounter}
                    </p>
                    <Badge className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white shadow-none">
                      {images.length} {copy.photos}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex-1 px-4 pb-28 pt-20 sm:px-8 sm:pb-32 sm:pt-24">
              <Carousel
                setApi={setLightboxApi}
                opts={{ align: "start" }}
                className="mx-auto h-full w-full max-w-[min(94vw,1800px)]"
              >
                <CarouselContent className="ml-0 h-full">
                  {images.map((image, index) => (
                    <CarouselItem
                      key={`fullscreen-${image.src}`}
                      className="pl-0"
                    >
                      <div className="flex h-full items-center justify-center">
                        <img
                          src={image.src}
                          alt={`${roomName} ${copy.photo.toLowerCase()} ${
                            index + 1
                          }`}
                          loading="lazy"
                          decoding="async"
                          sizes="100vw"
                          className="h-auto max-h-[calc(100vh-13rem)] w-auto max-w-full rounded-[1.75rem] object-contain shadow-[0_32px_120px_-42px_rgba(0,0,0,0.9)] sm:max-h-[calc(100vh-14rem)]"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <div className="absolute inset-y-0 left-0 flex items-center pl-4 sm:pl-6">
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={goPrev}
                  disabled={!canGoPrev}
                  className="h-12 w-12 rounded-full border-white/15 bg-black/55 text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
                  aria-label={lang === "de" ? "Vorheriges Foto" : "Previous photo"}
                >
                  <ArrowLeft />
                </Button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6">
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={goNext}
                  disabled={!canGoNext}
                  className="h-12 w-12 rounded-full border-white/15 bg-black/55 text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
                  aria-label={lang === "de" ? "Naechstes Foto" : "Next photo"}
                >
                  <ArrowRight />
                </Button>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/96 to-transparent px-4 pb-4 pt-16 sm:px-8 sm:pb-5 sm:pt-20">
              <div className="pointer-events-auto mx-auto max-w-[min(94vw,1800px)]">
                {renderThumbnails("dark", "compact")}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
