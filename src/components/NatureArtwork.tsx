import React from 'react';

interface NatureArtworkProps {
  className?: string;
  variant?: 'hero' | 'compact' | 'manifesto';
}

export const NatureArtwork: React.FC<NatureArtworkProps> = ({ className = '', variant = 'hero' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#E8E3DA]/60 border border-[#DADFD5] ${className}`}>
      <svg
        viewBox="0 0 600 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover select-none"
        aria-label="Minimalist serene nature landscape depicting rolling hills, sunrise, and pine trees"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="60%" stopColor="#EAE5DC" />
            <stop offset="100%" stopColor="#DADFD5" />
          </linearGradient>

          <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF7E6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#EBD7B2" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="hill1Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CCD4C7" />
            <stop offset="100%" stopColor="#B4BEAE" />
          </linearGradient>

          <linearGradient id="hill2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#98A492" />
            <stop offset="100%" stopColor="#7E8C78" />
          </linearGradient>

          <linearGradient id="hill3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#536052" />
            <stop offset="100%" stopColor="#343A35" />
          </linearGradient>

          <pattern id="grainPattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="0.5" fill="#343A35" opacity="0.08" />
            <circle cx="45" cy="35" r="0.5" fill="#343A35" opacity="0.08" />
            <circle cx="30" cy="50" r="0.5" fill="#343A35" opacity="0.08" />
          </pattern>
        </defs>

        {/* Sky */}
        <rect width="600" height="450" fill="url(#skyGrad)" />
        <rect width="600" height="450" fill="url(#grainPattern)" />

        {/* Gentle Morning Sun / Vast Sky */}
        <circle cx="380" cy="140" r="80" fill="url(#sunGrad)" />
        <circle cx="380" cy="140" r="120" stroke="#EBD7B2" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />

        {/* Distant Birds / Freedom in the Sky */}
        <path d="M120 100 Q130 92 140 100 Q150 92 160 100" stroke="#7E8C78" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M150 82 Q158 75 166 82 Q174 75 182 82" stroke="#7E8C78" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M100 120 Q106 114 112 120 Q118 114 124 120" stroke="#7E8C78" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />

        {/* Distant Mountains / Horizon */}
        <path
          d="M0 260 C120 230 200 240 320 220 C420 200 520 235 600 210 L600 450 L0 450 Z"
          fill="url(#hill1Grad)"
          opacity="0.85"
        />

        {/* Midground Rolling Hills */}
        <path
          d="M0 310 C160 270 260 320 380 290 C480 265 540 280 600 270 L600 450 L0 450 Z"
          fill="url(#hill2Grad)"
          opacity="0.9"
        />

        {/* Foreground Ridge & Sanctuary Path */}
        <path
          d="M0 380 C110 340 230 360 340 330 C460 300 530 340 600 320 L600 450 L0 450 Z"
          fill="url(#hill3Grad)"
        />

        {/* Winding Nature Path */}
        <path
          d="M180 450 C210 400 240 375 280 355 C310 340 330 335 345 330"
          stroke="#E8E3DA"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="2 6"
          opacity="0.7"
        />

        {/* Elegant Pine Trees Silhouettes */}
        <g fill="#343A35" opacity="0.95">
          {/* Tree 1 */}
          <polygon points="460,330 450,370 470,370" />
          <polygon points="460,310 448,345 472,345" />
          <polygon points="460,290 452,325 468,325" />
          <rect x="458" y="370" width="4" height="20" />

          {/* Tree 2 */}
          <polygon points="505,340 496,380 514,380" />
          <polygon points="505,320 494,355 516,355" />
          <polygon points="505,305 498,335 512,335" />
          <rect x="503" y="380" width="4" height="18" />

          {/* Tree 3 */}
          <polygon points="425,350 417,390 433,390" />
          <polygon points="425,330 415,365 435,365" />
          <polygon points="425,315 419,345 431,345" />
          <rect x="423" y="390" width="4" height="15" />

          {/* Distant trees */}
          <polygon points="120,330 114,355 126,355" opacity="0.7" />
          <polygon points="120,318 116,338 124,338" opacity="0.7" />
          <rect x="119" y="355" width="2" height="10" opacity="0.7" />

          <polygon points="145,340 140,362 150,362" opacity="0.6" />
          <polygon points="145,328 141,348 149,348" opacity="0.6" />
          <rect x="144" y="362" width="2" height="8" opacity="0.6" />
        </g>
      </svg>

      {/* Editorial Plate Overlay */}
      <div className="absolute bottom-4 left-4 right-4 bg-[#F5F3EE]/90 backdrop-blur-md px-4 py-3 rounded-xl border border-[#DADFD5] flex items-center justify-between text-xs text-[#343A35]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#356AE6]"></span>
          <span className="font-medium tracking-wide">Nature as Sanctuary & Perspective</span>
        </div>
        <span className="text-[#343A35]/60 italic font-editorial text-sm">"The vastness of the sky reminds me..."</span>
      </div>
    </div>
  );
};
