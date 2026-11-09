import React from 'react';
import { BookOpen, MapPin, Sparkles, Heart, Compass } from 'lucide-react';

const resolveAsset = (path: string) => {
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const EditorialPortrait: React.FC = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#DADFD5] p-6 lg:p-8 shadow-sm flex flex-col justify-between h-full">
      {/* Background subtle botanical drawing */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="#343A35" strokeWidth="2">
          <path d="M100 20 C100 80 180 100 180 180" />
          <path d="M100 50 C120 40 150 45 160 70" />
          <path d="M100 90 C130 85 160 100 165 125" />
          <path d="M100 130 C120 130 150 145 155 170" />
          <path d="M100 60 C80 50 50 55 40 80" />
          <path d="M100 100 C70 95 40 110 35 135" />
        </svg>
      </div>

      <div>
        {/* Top Header Card */}
        <div className="flex items-center justify-between pb-6 border-b border-[#DADFD5]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#343A35]/60 font-medium">Digital Journal</span>
            <h4 className="font-serif-display text-2xl text-[#343A35] font-semibold mt-0.5">Author Profile</h4>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#EAF0FF] border border-[#356AE6]/20 flex items-center justify-center text-[#356AE6]">
            <Compass className="w-6 h-6 stroke-[1.5]" />
          </div>
        </div>

        {/* Central Visual Showcase: The Reflective Scholar */}
        <div className="my-6 p-6 rounded-xl bg-[#E8E3DA]/70 border border-[#DADFD5] relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#DADFD5] shadow-sm shrink-0 bg-[#343A35]">
              <img
                src={resolveAsset("assets/aistudio/IMG_0239_0d718059.jpg")}
                alt="Josh holding a sunflower smiling"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
            <div>
              <h5 className="font-serif-display text-lg font-bold text-[#343A35]">Josh</h5>
              <div className="flex items-center gap-2 text-xs text-[#343A35]/70 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#356AE6]" />
                <span>Quezon, Philippines</span>
                <span>·</span>
                <span>Age 20</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#343A35]/85 italic font-editorial leading-relaxed border-t border-[#DADFD5] pt-3">
            "At 20, I am not supposed to have everything figured out just yet. I am still growing, and I am learning to embrace that process."
          </p>
        </div>

        {/* Core Attributes Matrix */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3.5 rounded-lg bg-[#F5F3EE] border border-[#DADFD5]/80">
            <div className="text-xs text-[#343A35]/60 font-medium">Personality</div>
            <div className="text-sm font-semibold text-[#343A35] mt-0.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#356AE6]" />
              <span>Extroverted & Joyful</span>
            </div>
            <div className="text-[11px] text-[#343A35]/65 mt-1 leading-tight">Comfortable connector, adaptable, brings optimism.</div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#F5F3EE] border border-[#DADFD5]/80">
            <div className="text-xs text-[#343A35]/60 font-medium">Core Values</div>
            <div className="text-sm font-semibold text-[#343A35] mt-0.5 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#356AE6]" />
              <span>Pakikipagkapwa</span>
            </div>
            <div className="text-[11px] text-[#343A35]/65 mt-1 leading-tight">Shared inner self, compassion, family foundation.</div>
          </div>
        </div>

        {/* Lived Reality Snapshot */}
        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DADFD5] text-xs text-[#343A35]/80 space-y-2">
          <div className="font-semibold text-[#343A35] flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#356AE6]" />
            <span>Academic Portfolio Milestone</span>
          </div>
          <p className="leading-relaxed">
            Compiled for the Self and Society academic journey, analyzing 8 theoretical modules, 2 external interviews, and dual future manifestos.
          </p>
        </div>
      </div>

      {/* Bottom Seal */}
      <div className="mt-6 pt-4 border-t border-[#DADFD5] flex items-center justify-between text-xs text-[#343A35]/60">
        <span>Academic Year 2026</span>
        <span className="font-serif-display italic font-semibold text-[#343A35]">Continuous Becoming</span>
      </div>
    </div>
  );
};
