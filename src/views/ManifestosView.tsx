import React, { useState } from 'react';
import { Feather, Heart, Activity, Droplets, Bed, Smile, Trees, Sparkles, Check, ArrowRight, BookOpen } from 'lucide-react';
import { MANIFESTOS_DATA } from '../data/portfolioData';
import { PageId } from '../components/Navbar';

interface ManifestosViewProps {
  onNavigate: (page: PageId) => void;
}

export const ManifestosView: React.FC<ManifestosViewProps> = ({ onNavigate }) => {
  const [activeManifesto, setActiveManifesto] = useState<'personal' | 'health'>('personal');

  const commitmentIcons = [
    <Activity className="w-5 h-5 text-[#356AE6]" />,
    <Droplets className="w-5 h-5 text-[#356AE6]" />,
    <Bed className="w-5 h-5 text-[#356AE6]" />,
    <Smile className="w-5 h-5 text-[#356AE6]" />,
    <Trees className="w-5 h-5 text-[#356AE6]" />,
    <Heart className="w-5 h-5 text-[#356AE6]" />,
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* 1. Header & Lead In */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#356AE6]">
          <Feather className="w-3.5 h-3.5" />
          <span>Chapter 04 · Guiding Vows</span>
        </div>
        <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#343A35] leading-tight">
          These are the promises I make to myself moving forward.
        </h1>
        <p className="text-base sm:text-lg text-[#343A35]/80 leading-relaxed">
          Self-discovery without intentional commitment is incomplete. Below are two solemn vows created for my <em>Self and Society</em> portfolio: a personal letter of promise to the person I am striving to become, and a holistic health manifesto dedicated to caring for my body, mind, and spirit.
        </p>
      </div>

      {/* 2. Blue Accent Navigation Switcher */}
      <div className="flex items-center justify-center">
        <div className="p-1.5 bg-[#E8E3DA] rounded-2xl flex items-center gap-2 border border-[#DADFD5] shadow-xs">
          <button
            onClick={() => setActiveManifesto('personal')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeManifesto === 'personal'
                ? 'bg-[#356AE6] text-white shadow-sm'
                : 'text-[#343A35]/80 hover:text-[#343A35] hover:bg-[#FAF8F5]/60'
            }`}
          >
            <Feather className="w-4 h-4" />
            <span>A. My Personal Manifesto</span>
          </button>

          <button
            onClick={() => setActiveManifesto('health')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeManifesto === 'health'
                ? 'bg-[#356AE6] text-white shadow-sm'
                : 'text-[#343A35]/80 hover:text-[#343A35] hover:bg-[#FAF8F5]/60'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>B. My Health Manifesto</span>
          </button>
        </div>
      </div>

      {/* 3. MANIFESTO CONTENT: SECTION A (PERSONAL) */}
      {activeManifesto === 'personal' && (
        <div className="space-y-10 animate-in fade-in duration-300">
          {/* Paper-inspired letter layout */}
          <div className="max-w-4xl mx-auto rounded-3xl paper-manifesto p-8 sm:p-14 lg:p-16 border border-[#DADFD5] relative overflow-hidden">
            {/* Subtle vintage letterhead ornament */}
            <div className="text-center pb-8 border-b border-[#DADFD5]/80 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#356AE6] font-semibold">
                Letter to Myself
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#343A35] tracking-tight">
                {MANIFESTOS_DATA.personal.title}
              </h2>
              <p className="font-editorial text-xl sm:text-2xl italic text-[#343A35]/80">
                "{MANIFESTOS_DATA.personal.subtitle}"
              </p>
            </div>

            {/* Letter Body - 7 Original Paragraphs */}
            <div className="pt-10 space-y-8 text-base sm:text-lg text-[#343A35]/90 leading-relaxed font-sans">
              {MANIFESTOS_DATA.personal.paragraphs.map((para, index) => {
                const isLast = index === MANIFESTOS_DATA.personal.paragraphs.length - 1;
                return (
                  <p
                    key={index}
                    className={
                      isLast
                        ? "p-6 rounded-2xl bg-[#EAF0FF]/70 border border-[#356AE6]/20 font-editorial text-xl sm:text-2xl italic text-[#343A35] font-semibold text-center mt-10 shadow-xs"
                        : "first-letter:font-serif-display first-letter:text-3xl first-letter:font-bold first-letter:text-[#356AE6] first-letter:mr-1.5"
                    }
                  >
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Letter Sign-Off / Wax Seal Element */}
            <div className="mt-14 pt-8 border-t border-[#DADFD5] flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#343A35]/70 gap-4">
              <div>
                <span className="block font-serif-display text-base font-bold text-[#343A35]">
                  The Person I Am Becoming
                </span>
                <span className="text-xs text-[#343A35]/60">Self & Society Academic Portfolio · Age 20</span>
              </div>

              <div className="px-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#DADFD5] text-xs font-semibold text-[#356AE6]">
                Solemn Promise · Signed in Heart
              </div>
            </div>
          </div>

          {/* Quick toggle banner to Health Manifesto */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                setActiveManifesto('health');
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#356AE6] hover:underline"
            >
              <span>Switch to Part B: My Health Manifesto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 4. MANIFESTO CONTENT: SECTION B (HEALTH) */}
      {activeManifesto === 'health' && (
        <div className="space-y-12 animate-in fade-in duration-300">
          {/* Health Manifesto Letter Body */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#FAF8F5] p-8 sm:p-14 border border-[#DADFD5] shadow-xs space-y-8">
            <div className="text-center pb-8 border-b border-[#DADFD5] space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#356AE6] font-semibold">
                A Promise to Live Well
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#343A35] tracking-tight">
                {MANIFESTOS_DATA.health.title}
              </h2>
              <p className="font-editorial text-xl sm:text-2xl italic text-[#343A35]/80">
                "{MANIFESTOS_DATA.health.subtitle}"
              </p>
            </div>

            {/* Health Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-[#343A35]/90 leading-relaxed font-sans">
              {MANIFESTOS_DATA.health.paragraphs.map((p, idx) => {
                const isClosing = idx === MANIFESTOS_DATA.health.paragraphs.length - 1;
                return (
                  <p
                    key={idx}
                    className={
                      isClosing
                        ? "p-6 rounded-2xl bg-[#EAF0FF]/70 border border-[#356AE6]/20 font-editorial text-xl sm:text-2xl italic text-[#343A35] font-semibold text-center mt-8 shadow-xs"
                        : "first-letter:font-serif-display first-letter:text-3xl first-letter:font-bold first-letter:text-[#356AE6] first-letter:mr-1.5"
                    }
                  >
                    {p}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Visual Section: 6 Core Health Commitments Grid */}
          <div className="space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#356AE6]">
                Everyday Practice
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#343A35]">
                My 6 Health Commitments in Action
              </h3>
              <p className="text-sm text-[#343A35]/75">
                Concrete habits designed to turn values into daily rhythms of vitality and peace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MANIFESTOS_DATA.health.commitments.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DADFD5] shadow-xs space-y-4 hover:border-[#356AE6]/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF0FF] flex items-center justify-center">
                      {commitmentIcons[index]}
                    </div>
                    <span className="font-serif-display text-lg font-bold text-[#356AE6]">
                      {item.number}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif-display text-lg font-bold text-[#343A35]">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-[#356AE6] mt-1">
                      {item.summary}
                    </p>
                  </div>

                  <p className="text-xs text-[#343A35]/75 leading-relaxed pt-2 border-t border-[#DADFD5]/60">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick toggle banner to Personal Manifesto */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                setActiveManifesto('personal');
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#356AE6] hover:underline"
            >
              <span>Switch to Part A: My Personal Manifesto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 5. Concluding Reflection */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#E8E3DA]/80 border border-[#DADFD5] text-center space-y-4 max-w-4xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#356AE6]">
          Portfolio Culmination
        </span>
        <blockquote className="font-editorial text-2xl sm:text-3xl italic text-[#343A35] leading-snug">
          "I do not promise to become a perfect person. I promise to become a better one, one decision, one lesson, and one day at a time."
        </blockquote>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#356AE6] hover:bg-[#2855be] rounded-xl transition-all shadow-sm"
          >
            <span>Return to Portfolio Home</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
