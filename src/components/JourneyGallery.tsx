import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Maximize2, X } from 'lucide-react';

interface PhotoItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  caption: string;
  isPortrait: boolean;
  thumbnailPosition?: string;
  stagePosition?: string;
}

const JOURNEY_PHOTOS: PhotoItem[] = [
  {
    id: 1,
    title: "Family on My 18th Birthday",
    category: "Family Foundation",
    src: "/assets/aistudio/IMG_2420_landscape.jpg",
    alt: "Josh with parents and sister smiling at the beach under canopy with blue sea and sky",
    caption: "Me and my family on my 18th birthday",
    isPortrait: false,
    thumbnailPosition: "object-center",
    stagePosition: "object-[center_65%]",
  },
  {
    id: 2,
    title: "Sister's 26th Birthday Celebration",
    category: "Family Memories",
    src: "/assets/aistudio/IMG_9699_landscape.jpg",
    alt: "Josh and family celebrating his sister's 26th birthday at restaurant",
    caption: "My family celebrating my sister's 26th birthday",
    isPortrait: false,
    thumbnailPosition: "object-center",
    stagePosition: "object-[center_35%]",
  },
  {
    id: 3,
    title: "Graduation Milestones",
    category: "Friendship & Milestones",
    src: "/assets/aistudio/e4a106cbe9d067b92d601fa7747c4d44_34e7a364.JPEG",
    alt: "Josh and high school friends celebrating senior high graduation in caps, gowns, and stoles",
    caption: "My 5 years highschool friends",
    isPortrait: false,
    thumbnailPosition: "object-center",
    stagePosition: "object-[center_30%]",
  },
  {
    id: 4,
    title: "Laughter with Friends",
    category: "Peer Connections",
    src: "/assets/aistudio/IMG_3929_767e9156.JPEG",
    alt: "Josh and group of close friends sitting on a couch in formal attire smiling and posing together",
    caption: "The people that found me in college",
    isPortrait: false,
    thumbnailPosition: "object-center",
    stagePosition: "object-[center_35%]",
  },
];

interface JourneyGalleryProps {
  className?: string;
}

export const JourneyGallery: React.FC<JourneyGalleryProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentPhoto = JOURNEY_PHOTOS[currentIndex];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? JOURNEY_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === JOURNEY_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for carousel & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev === 0 ? JOURNEY_PHOTOS.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev === JOURNEY_PHOTOS.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <div className={`relative rounded-3xl bg-[#FAF8F5] border border-[#DADFD5] p-3 sm:p-4 shadow-sm flex flex-col justify-between ${className}`}>
      {/* Gallery Header Title */}
      <div className="flex items-center justify-between px-2 pt-1 pb-3 border-b border-[#DADFD5]/70">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#EAF0FF] text-[#356AE6] flex items-center justify-center">
            <Users className="w-4 h-4 stroke-[1.75]" />
          </div>
          <div>
            <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#343A35] leading-tight">
              The People Throughout My Journey
            </h3>
            <span className="text-[11px] text-[#343A35]/65">
              Photo {currentIndex + 1} of {JOURNEY_PHOTOS.length} · {currentPhoto.category}
            </span>
          </div>
        </div>

        {/* Lightbox button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="p-1.5 rounded-lg text-[#343A35]/70 hover:text-[#356AE6] hover:bg-[#E8E3DA] transition-colors"
          title="View full size"
          aria-label="Open image in fullscreen"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Main Display Stage: Landscape ratio with no face cutting for portraits */}
      <div className="relative mt-3 w-full aspect-16/10 sm:aspect-16/10 rounded-2xl overflow-hidden bg-[#2D332E] border border-[#DADFD5]/60 group">
        {/* Subtle blurred backdrop for aesthetic full bleed without cutting portrait faces */}
        <img
          src={currentPhoto.src}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover ${currentPhoto.stagePosition || 'object-[center_65%]'} blur-2xl scale-125 opacity-40 brightness-75 select-none transition-all duration-500`}
        />

        {/* Main sharp image filling landscape stage seamlessly */}
        <img
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className={`relative z-10 w-full h-full object-cover ${currentPhoto.stagePosition || 'object-[center_65%]'} select-none transition-all duration-300`}
        />

        {/* Carousel Arrow Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#FAF8F5]/85 backdrop-blur-md text-[#343A35] hover:text-white hover:bg-[#356AE6] flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#356AE6]"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#FAF8F5]/85 backdrop-blur-md text-[#343A35] hover:text-white hover:bg-[#356AE6] flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#356AE6]"
          aria-label="Next photo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Caption & Navigation Dots */}
      <div className="mt-3 px-2 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-t border-[#DADFD5]/60 text-xs">
        <p className="font-editorial text-sm italic text-[#343A35]/90 line-clamp-2 leading-snug">
          "{currentPhoto.caption}"
        </p>

        {/* Thumbnails / Indicators */}
        <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
          {JOURNEY_PHOTOS.map((photo, idx) => (
            <button
              key={photo.id}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all rounded-full ${
                currentIndex === idx
                  ? 'w-6 h-2 bg-[#356AE6]'
                  : 'w-2 h-2 bg-[#DADFD5] hover:bg-[#343A35]/40'
              }`}
              aria-label={`Jump to ${photo.title}`}
            />
          ))}
        </div>
      </div>

      {/* Interactive Thumbnail Strip for quick browsing */}
      <div className="mt-2.5 grid grid-cols-4 gap-2 pt-2 border-t border-[#DADFD5]/50">
        {JOURNEY_PHOTOS.map((photo, idx) => (
          <button
            key={photo.id}
            onClick={() => setCurrentIndex(idx)}
            className={`relative aspect-4/3 rounded-lg overflow-hidden border transition-all ${
              currentIndex === idx
                ? 'border-[#356AE6] ring-2 ring-[#356AE6]/30 shadow-xs scale-102'
                : 'border-[#DADFD5] opacity-65 hover:opacity-100'
            }`}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className={`w-full h-full object-cover ${photo.thumbnailPosition || 'object-center'}`}
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white" onClick={(e) => e.stopPropagation()}>
            <div>
              <h4 className="font-serif-display text-lg sm:text-xl font-bold">
                The People Throughout My Journey
              </h4>
              <p className="text-xs text-white/70">
                {currentPhoto.title} · {currentIndex + 1} of {JOURNEY_PHOTOS.length}
              </p>
            </div>

            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close fullscreen view"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Image Stage (Uncropped) */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            />

            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Caption */}
          <div className="text-center text-white/90 font-editorial text-lg italic max-w-2xl mx-auto" onClick={(e) => e.stopPropagation()}>
            "{currentPhoto.caption}"
          </div>
        </div>
      )}
    </div>
  );
};
