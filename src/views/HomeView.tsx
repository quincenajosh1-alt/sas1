import React from 'react';
import { ArrowRight, BookOpen, Compass, Eye, Heart, Sparkles, Feather } from 'lucide-react';
import { JourneyGallery } from '../components/JourneyGallery';
import { PageId } from '../components/Navbar';
import { REFLECTION_TOPICS } from '../data/portfolioData';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenReflection: (topicId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenReflection }) => {
  return (
    <div className="space-y-20 sm:space-y-28 py-8 sm:py-12">
      {/* 1. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#356AE6]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Self and Society · Portfolio & Journal</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#343A35] tracking-tight leading-[1.15]">
              Still growing.<br />
              Still learning.<br />
              <span className="italic font-normal text-[#356AE6]">Still becoming.</span>
            </h1>

            <p className="font-editorial text-xl sm:text-2xl text-[#343A35]/90 leading-relaxed max-w-xl">
              An exploration of my identity, values, experiences, and the little things that make me who I am.
            </p>

            <p className="text-sm sm:text-base text-[#343A35]/80 leading-relaxed max-w-xl">
              Welcome to my digital journal, a space where I share my journey of understanding myself a little better. Through the lessons I've learned, the experiences I've encountered, and the perspectives of people who know me, this portfolio reflects how I see myself, what I am still discovering, and the person I hope to become. It is a collection of realizations, challenges, and promises that remind me that growth is never really finished. I am still learning, still growing, and still becoming.
            </p>

            {/* Action Buttons: Blue styling for primary, soft for secondary */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#356AE6] hover:bg-[#2855be] active:bg-[#1f4399] rounded-xl transition-all shadow-sm hover:shadow focus:ring-2 focus:ring-[#356AE6] focus:ring-offset-2"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('manifestos')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#343A35] bg-[#E8E3DA] hover:bg-[#DADFD5] active:bg-[#CCD4C7] rounded-xl transition-all border border-[#DADFD5]"
              >
                <span>Read My Manifestos</span>
              </button>
            </div>

            {/* Quiet Unboxed Metadata */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-[#343A35]/65">
              <span>8 Reflection Modules</span>
              <span aria-hidden="true">·</span>
              <span>2 External Interviews</span>
              <span aria-hidden="true">·</span>
              <span>Personal & Health Manifestos</span>
            </div>
          </div>

          {/* Right Column: Visual Journey Gallery */}
          <div className="lg:col-span-5">
            <JourneyGallery className="w-full shadow-md" />
          </div>
        </div>
      </section>

      {/* 2. CENTRAL REFLECTIVE STATEMENT BANNER */}
      <section className="bg-[#FAF8F5] border-y border-[#DADFD5] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#356AE6]">
            Guiding Tenet
          </span>
          <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl italic text-[#343A35] leading-snug">
            "You are not defined by who you used to be or limited by who you are today. You are continuously becoming."
          </blockquote>
          <p className="text-xs sm:text-sm text-[#343A35]/65 max-w-lg mx-auto">
            A reminder that uncertainty in emerging adulthood is not a failure of identity, but the very process of sculpting one.
          </p>
        </div>
      </section>

      {/* 3. "A LITTLE ABOUT MYSELF" & PREVIEW CARDS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#356AE6]">
              Introduction & Overview
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#343A35]">
              A Little About Myself
            </h2>
            <p className="text-sm sm:text-base text-[#343A35]/80 leading-relaxed">
              At 20, I find myself standing at the crossroads of childhood simplicity and adult responsibility. I am an extrovert who cherishes bringing joy to those around me, yet I find my deepest solace walking in nature under open skies. Here is how this portfolio unfolds:
            </p>
          </div>

          {/* 4 Preview Cards Linking to Main Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: About Me */}
            <div
              onClick={() => onNavigate('about')}
              className="group p-6 rounded-2xl bg-[#FAF8F5] border border-[#DADFD5] hover:border-[#356AE6]/40 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF0FF] text-[#356AE6] flex items-center justify-center">
                  <Compass className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#343A35]/60">
                  Chapter 01
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#343A35] group-hover:text-[#356AE6] transition-colors">
                  About Me
                </h3>
                <p className="text-xs sm:text-sm text-[#343A35]/75 leading-relaxed">
                  My background, personality traits, strengths, vulnerabilities, and the quiet lessons I am still learning at age 20.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DADFD5]/60 flex items-center text-xs font-semibold text-[#356AE6] group-hover:gap-2 gap-1.5 transition-all">
                <span>Meet the Author</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 2: My Reflections */}
            <div
              onClick={() => onNavigate('reflections')}
              className="group p-6 rounded-2xl bg-[#FAF8F5] border border-[#DADFD5] hover:border-[#356AE6]/40 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF0FF] text-[#356AE6] flex items-center justify-center">
                  <BookOpen className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#343A35]/60">
                  Chapter 02
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#343A35] group-hover:text-[#356AE6] transition-colors">
                  My Reflections
                </h3>
                <p className="text-xs sm:text-sm text-[#343A35]/75 leading-relaxed">
                  Eight academic topics spanning William James' duality of self, biological nurture, body image, AI, and mental health.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DADFD5]/60 flex items-center text-xs font-semibold text-[#356AE6] group-hover:gap-2 gap-1.5 transition-all">
                <span>Explore 8 Topics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3: Through Their Eyes */}
            <div
              onClick={() => onNavigate('interviews')}
              className="group p-6 rounded-2xl bg-[#FAF8F5] border border-[#DADFD5] hover:border-[#356AE6]/40 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF0FF] text-[#356AE6] flex items-center justify-center">
                  <Eye className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#343A35]/60">
                  Chapter 03
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#343A35] group-hover:text-[#356AE6] transition-colors">
                  Through Their Eyes
                </h3>
                <p className="text-xs sm:text-sm text-[#343A35]/75 leading-relaxed">
                  Candid interviews with two people who know me—revealing my dependable will, areas to improve, and recognized maturity.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DADFD5]/60 flex items-center text-xs font-semibold text-[#356AE6] group-hover:gap-2 gap-1.5 transition-all">
                <span>Read Interview Insights</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 4: My Manifestos */}
            <div
              onClick={() => onNavigate('manifestos')}
              className="group p-6 rounded-2xl bg-[#FAF8F5] border border-[#DADFD5] hover:border-[#356AE6]/40 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF0FF] text-[#356AE6] flex items-center justify-center">
                  <Feather className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#343A35]/60">
                  Chapter 04
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#343A35] group-hover:text-[#356AE6] transition-colors">
                  My Manifestos
                </h3>
                <p className="text-xs sm:text-sm text-[#343A35]/75 leading-relaxed">
                  Two solemn pledges: A Personal Letter of Promise to who I am becoming, and a Health Manifesto of 6 core well-being vows.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DADFD5]/60 flex items-center text-xs font-semibold text-[#356AE6] group-hover:gap-2 gap-1.5 transition-all">
                <span>View Dual Manifestos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED REFLECTION TEASER ROW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#E8E3DA]/80 border border-[#DADFD5] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-[#356AE6]">
                Featured Entry
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#343A35] mt-1">
                Perspectives of Self: William James & The 'I' vs. 'Me'
              </h3>
            </div>

            <button
              onClick={() => onOpenReflection('perspectives-of-self')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#356AE6] hover:underline"
            >
              <span>Read Full Reflection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm sm:text-base text-[#343A35]/85 font-editorial text-lg italic leading-relaxed">
            "I have come to realize that I am not simply a person with a fixed set of characteristics. Rather, I am someone whose understanding of himself continues to develop through personal experiences and relationships. In a way, the person I am today is a combination of what I believe about myself and what I have learned from the people who have become part of my life."
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#343A35]/70">
            <span>Topic 01</span>
            <span aria-hidden="true">·</span>
            <span>Module: Foundations of Self</span>
            <span aria-hidden="true">·</span>
            <span>Core Lesson: The Subjective Knower vs. The Social Self</span>
          </div>
        </div>
      </section>
    </div>
  );
};
