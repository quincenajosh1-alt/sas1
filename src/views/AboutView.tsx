import React from 'react';
import { ArrowRight, Check, Compass, Heart, Sparkles, User, AlertCircle, Smile } from 'lucide-react';
import { EditorialPortrait } from '../components/EditorialPortrait';
import { PageId } from '../components/Navbar';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      {/* 1. Header & Lead In */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#356AE6]">
          <Compass className="w-3.5 h-3.5" />
          <span>Chapter 01 · Personal Narrative</span>
        </div>
        <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#343A35] leading-tight">
          Before anything else, let me introduce myself.
        </h1>
        <p className="text-base sm:text-lg text-[#343A35]/80 leading-relaxed">
          Welcome to my inner reflections. Below is an honest look into who I am today—where I come from, what moves me, the traits that define my interactions, and the open questions I carry as I navigate my twentieth year.
        </p>
      </div>

      {/* 2. Highlighted Statement */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#E8E3DA]/80 border border-[#DADFD5] text-center max-w-4xl mx-auto shadow-xs">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#356AE6] block mb-2">
          Personal Creed
        </span>
        <blockquote className="font-editorial text-2xl sm:text-3xl italic text-[#343A35] leading-relaxed">
          "I believe that real love is measured by how much you are willing to be inconvenienced for someone, and that is me—Josh, a person who will always try to make time."
        </blockquote>
      </div>

      {/* 3. Split Layout: Detailed Prose on Left, Editorial Portrait Composition on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        {/* Left Column: Comprehensive Story & Attributes (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-10">
          {/* Section 1: Background & Current Identity */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#356AE6]">
              <User className="w-3.5 h-3.5" />
              <span>Background & Current Identity</span>
            </div>
            <h2 className="font-serif-display text-2xl font-bold text-[#343A35]">
              At 20, Navigating the Crossroads
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-[#343A35]/85 leading-relaxed">
              <p>
                I am a 20-year-old student currently engaging deeply with the questions of <em>Self and Society</em>. Growing up in the Philippines, my life has been rooted in a close-knit family environment where compassion and problem-solving were modeled every single day.
              </p>
              <p>
                Turning 20 marked a poignant shift in how I view life. When I was younger, my biggest concerns were simply convincing my mother to skip afternoon naps and running outside to play. Today, I feel the weight of adult responsibilities, important life choices, and societal expectations. Yet, with that transition has come a much stronger sense of conviction—when I genuinely believe in a cause or principle, I am ready to stand up for it with all my heart.
              </p>
            </div>
          </section>

          {/* Section 2: Personality & Defining Characteristics */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#356AE6]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personality & Defining Characteristics</span>
            </div>
            <h2 className="font-serif-display text-2xl font-bold text-[#343A35]">
              Extroverted Warmth with an Adaptable Heart
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-[#343A35]/85 leading-relaxed">
              <p>
                In our class personality tests, I consistently emerged as an extrovert. I genuinely enjoy being surrounded by people, initiating conversations, and fostering a space where everyone feels at ease. I love being a joyful presence for those around me, finding genuine fulfillment whenever I can brighten someone's day.
              </p>
              <p>
                At the same time, I consider myself adaptable. I can attune to different wavelengths and connect with people regardless of their backgrounds or temperaments. Yet, as I have realized through Gordon Allport's teachings, personality is not a rigid label: I also deeply cherish quiet solitary moments where I can process my thoughts, breathe, and reflect.
              </p>
            </div>
          </section>

          {/* Section 3: Strengths and Weaknesses Matrix */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#356AE6]">
              <Compass className="w-3.5 h-3.5" />
              <span>Duality of Character</span>
            </div>
            <h2 className="font-serif-display text-2xl font-bold text-[#343A35]">
              Strengths & Areas for Continuous Growth
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Strengths Card */}
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#DADFD5] space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#356AE6] flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  <span>My Core Strengths</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#343A35]/85">
                  <li className="flex items-start gap-2">
                    <span className="text-[#356AE6] font-bold">·</span>
                    <span><strong>Determination & Strong Will:</strong> Staying committed to promises and persevering through tough times.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#356AE6] font-bold">·</span>
                    <span><strong>Dependability:</strong> A reliable teammate and friend who fulfills his word.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#356AE6] font-bold">·</span>
                    <span><strong>Compassion & Empathy:</strong> Deeply influenced by family values and Filipino <em>pakikipagkapwa</em>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#356AE6] font-bold">·</span>
                    <span><strong>Resilience:</strong> Standing back up, coping, and finding courage to begin again.</span>
                  </li>
                </ul>
              </div>

              {/* Weaknesses / Growth Areas Card */}
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#DADFD5] space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#343A35]/80 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-[#356AE6]" />
                  <span>Areas I Am Actively Working On</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#343A35]/85">
                  <li className="flex items-start gap-2">
                    <span className="text-[#356AE6] font-bold">·</span>
                    <span><strong>Cramming & Procrastination:</strong> Leaving complex projects to deadline hours; needing disciplined time allocation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#356AE6] font-bold">·</span>
                    <span><strong>Patience:</strong> Expecting rapid momentum and sometimes wanting others to match my exact tempo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#356AE6] font-bold">·</span>
                    <span><strong>Managing Expectations:</strong> Recognizing that people express care and loyalty in diverse ways.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#356AE6] font-bold">·</span>
                    <span><strong>Deep Listening:</strong> Continually remaining open to viewpoints that differ from my initial assumptions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Interests & Sources of Happiness */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#356AE6]">
              <Smile className="w-3.5 h-3.5" />
              <span>Interests & Sources of Joy</span>
            </div>
            <h2 className="font-serif-display text-2xl font-bold text-[#343A35]">
              Nature, Meaningful Connection & Simple Joys
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-[#343A35]/85 leading-relaxed">
              <p>
                My greatest source of restorative peace is taking long, quiet walks outdoors. Whenever academic pressures or personal worries start to feel overwhelming, looking up at the vast expanse of the open sky immediately recalibrates my perspective. It gently reminds me how transient individual storms are, and that I don't have to carry the whole world at once.
              </p>
              <p>
                Beyond nature, spending quality unhurried time with my family, laughing with close friends, sharing candid conversations, and seeing others feel supported bring me genuine contentment.
              </p>
            </div>
          </section>

          {/* Section 5: Things I Am Still Learning About Myself */}
          <section className="space-y-3 p-6 rounded-2xl bg-[#EAF0FF]/50 border border-[#356AE6]/20">
            <h3 className="font-serif-display text-xl font-bold text-[#343A35]">
              Things I Am Still Learning About Myself
            </h3>
            <p className="text-sm sm:text-base text-[#343A35]/85 leading-relaxed">
              I am learning that asking for help is not a compromise of my independence, but a sign of emotional wisdom. I am learning that taking a step back to breathe is not giving up—it is the space needed to keep moving forward. Most of all, I am learning that at 20, I do not need to possess all the answers today. Selfhood is an unfolding art.
            </p>
          </section>
        </div>

        {/* Right Column: Editorial Portrait Artwork & Profile Showcase (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="sticky top-24">
            <EditorialPortrait />

            {/* Quick Navigation Card Below Portrait */}
            <div className="mt-6 p-6 rounded-2xl bg-[#FAF8F5] border border-[#DADFD5] space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#356AE6]">
                Next in the Journal
              </div>
              <h4 className="font-serif-display text-lg font-bold text-[#343A35]">
                Dive into My 8 Academic Reflections
              </h4>
              <p className="text-xs text-[#343A35]/75 leading-relaxed">
                From William James and Gordon Allport to Filipino culture and digital selfhood in the era of AI.
              </p>
              <button
                onClick={() => onNavigate('reflections')}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#356AE6] hover:bg-[#2855be] active:bg-[#1f4399] rounded-xl transition-all shadow-sm"
              >
                <span>Read My Reflections</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
