import React from 'react';
import { Eye, Quote, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { INTERVIEW_DATA } from '../data/portfolioData';
import { PageId } from '../components/Navbar';

interface ThroughTheirEyesViewProps {
  onNavigate: (page: PageId) => void;
}

export const ThroughTheirEyesView: React.FC<ThroughTheirEyesViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      {/* 1. Header & Lead In */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#356AE6]">
          <Eye className="w-3.5 h-3.5" />
          <span>Chapter 03 · External Perspectives</span>
        </div>
        <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#343A35] leading-tight">
          Sometimes, others help us see what we fail to notice in ourselves.
        </h1>
        <p className="text-base sm:text-lg text-[#343A35]/80 leading-relaxed">
          {INTERVIEW_DATA.intro}
        </p>
      </div>

      {/* 2. Two Interviewee Editorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INTERVIEW_DATA.interviewees.map((person) => (
          <div
            key={person.id}
            className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#DADFD5] shadow-xs flex flex-col justify-between space-y-6"
          >
            <div>
              {/* Header Badgeless unboxed metadata */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DADFD5]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#356AE6]">
                    {person.relationship}
                  </span>
                  <h3 className="font-serif-display text-xl font-bold text-[#343A35] mt-0.5">
                    {person.roleDescription}
                  </h3>
                </div>
                <Quote className="w-8 h-8 text-[#DADFD5] fill-[#DADFD5]/50 shrink-0" />
              </div>

              {/* Central Quote */}
              <blockquote className="my-6 p-4 rounded-xl bg-[#E8E3DA]/60 border border-[#DADFD5] font-editorial text-lg italic text-[#343A35] leading-relaxed">
                "{person.quote}"
              </blockquote>

              {/* Observed Strengths */}
              <div className="space-y-2 mb-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#343A35] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#356AE6]" />
                  <span>Strengths They Observed</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#343A35]/85">
                  {person.observedStrengths.map((str, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#356AE6] font-bold">·</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Observed Growth Areas */}
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#343A35]/80 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-[#356AE6]" />
                  <span>Areas For Growth They Noted</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#343A35]/85">
                  {person.observedGrowthAreas.map((area, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#356AE6] font-bold">·</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Author's Personal Reflection on this Interview */}
            <div className="pt-4 border-t border-[#DADFD5] text-xs text-[#343A35]/75 italic leading-relaxed">
              <span className="font-semibold not-italic text-[#343A35] block mb-1">My Takeaway:</span>
              {person.reflectionSnippet}
            </div>
          </div>
        ))}
      </div>

      {/* 3. MY REALIZATIONS SECTION */}
      <section className="space-y-10 pt-4">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#356AE6]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Synthesis & Introspection</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#343A35]">
            {INTERVIEW_DATA.realizations.title}
          </h2>
          <p className="font-editorial text-xl italic text-[#343A35]/85">
            {INTERVIEW_DATA.realizations.subtitle}
          </p>
        </div>

        {/* 4 Pillars Highlight Grid: Noticed Strengths & Areas for Improvement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Highlighted Qualities Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#DADFD5] space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#356AE6]">
              <ShieldCheck className="w-4 h-4" />
              <span>Qualities They Recognized In Me</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {INTERVIEW_DATA.realizations.highlightedQualities.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#DADFD5]/80 space-y-1">
                  <div className="text-sm font-semibold text-[#343A35]">{item.name}</div>
                  <div className="text-xs text-[#343A35]/70 leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlighted Areas for Improvement Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#DADFD5] space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#343A35]">
              <AlertTriangle className="w-4 h-4 text-[#356AE6]" />
              <span>Areas For Improvement I Acknowledge</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {INTERVIEW_DATA.realizations.growthAreas.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#DADFD5]/80 space-y-1">
                  <div className="text-sm font-semibold text-[#343A35]">{item.name}</div>
                  <div className="text-xs text-[#343A35]/70 leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The 4 Complete Realization Essays (Full text preserved from PDF) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#DADFD5] shadow-xs space-y-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#356AE6]">
            Personal Essay on the Interviews
          </div>

          <div className="space-y-6 text-base sm:text-lg text-[#343A35]/90 leading-relaxed font-sans">
            {INTERVIEW_DATA.realizations.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="first-letter:font-serif-display first-letter:text-3xl first-letter:font-bold first-letter:text-[#356AE6] first-letter:mr-1.5"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Bottom Pull Quote */}
          <div className="pt-6 border-t border-[#DADFD5]">
            <p className="font-editorial text-xl sm:text-2xl italic text-[#343A35] text-center max-w-2xl mx-auto">
              "Personal growth is not about being perfect, but about recognizing my weaknesses, appreciating my strengths, and continuously working to become a better version of myself."
            </p>
          </div>
        </div>
      </section>

      {/* 4. Navigation to Manifestos */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#E8E3DA]/80 border border-[#DADFD5] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#343A35]">
            Ready to Read My Manifestos?
          </h3>
          <p className="text-sm text-[#343A35]/75">
            Turn self-reflection into commitment with my Personal Letter to Myself and 6 Health Vows.
          </p>
        </div>

        <button
          onClick={() => onNavigate('manifestos')}
          className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#356AE6] hover:bg-[#2855be] rounded-xl transition-all shadow-sm shrink-0"
        >
          <span>Read My Manifestos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
