import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen, Lightbulb, Compass, Share2 } from 'lucide-react';
import { ReflectionTopic, REFLECTION_TOPICS } from '../data/portfolioData';

interface ReflectionModalProps {
  topic: ReflectionTopic | null;
  onClose: () => void;
  onSelectTopic: (topic: ReflectionTopic) => void;
}

export const ReflectionModal: React.FC<ReflectionModalProps> = ({ topic, onClose, onSelectTopic }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!topic) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [topic]);

  if (!topic) return null;

  const currentIndex = REFLECTION_TOPICS.findIndex(t => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? REFLECTION_TOPICS[currentIndex - 1] : null;
  const nextTopic = currentIndex < REFLECTION_TOPICS.length - 1 ? REFLECTION_TOPICS[currentIndex + 1] : null;

  const handlePrev = () => {
    if (prevTopic) onSelectTopic(prevTopic);
  };

  const handleNext = () => {
    if (nextTopic) onSelectTopic(nextTopic);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-[#FAF8F5] rounded-2xl border border-[#DADFD5] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-4 border-b border-[#DADFD5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif-display text-lg font-bold text-[#356AE6]">
              {String(topic.topicNumber).padStart(2, '0')}.
            </span>
            <div className="flex items-center gap-2 text-xs text-[#343A35]/70">
              <span className="font-medium">{topic.moduleGroup}</span>
              <span>·</span>
              <span>Topic {topic.topicNumber} of 8</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#343A35]/70 hover:text-[#343A35] hover:bg-[#E8E3DA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#356AE6]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans">
          {/* Title & Guiding Question */}
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#356AE6]">
              Reflective Journal Entry
            </span>
            <h2 id="modal-title" className="font-serif-display text-2xl sm:text-3xl font-bold text-[#343A35] mt-1 mb-3">
              {topic.title}
            </h2>

            <div className="p-4 rounded-xl bg-[#E8E3DA]/60 border border-[#DADFD5]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#343A35]/70 block mb-1">
                Guiding Question
              </span>
              <p className="font-editorial text-lg sm:text-xl italic text-[#343A35] leading-relaxed">
                "{topic.guidingQuestion}"
              </p>
            </div>
          </div>

          {/* Academic Lesson / Theoretical Foundation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#343A35]">
              <BookOpen className="w-4 h-4 text-[#356AE6]" />
              <h3>My Understanding of the Lesson</h3>
            </div>
            <div className="p-5 rounded-xl bg-[#F5F3EE] border border-[#DADFD5] text-[#343A35]/85 text-sm sm:text-base leading-relaxed">
              {topic.academicLesson}
            </div>
          </div>

          {/* Personal Experiences & Reflections */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#343A35]">
              <Compass className="w-4 h-4 text-[#356AE6]" />
              <h3>My Personal Experiences and Reflections</h3>
            </div>
            <div className="space-y-4 text-[#343A35]/90 text-sm sm:text-base leading-relaxed">
              {topic.personalReflections.map((paragraph, idx) => (
                <p key={idx} className="first-letter:font-serif-display first-letter:text-2xl first-letter:font-bold first-letter:text-[#356AE6] first-letter:mr-1">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* What I Learned or What I Take With Me */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#343A35]">
              <Lightbulb className="w-4 h-4 text-[#356AE6]" />
              <h3>What I Learned & What I Take With Me</h3>
            </div>
            <div className="p-5 rounded-xl bg-[#EAF0FF]/80 border border-[#356AE6]/20 text-[#343A35] text-sm sm:text-base leading-relaxed">
              <p className="font-editorial text-lg italic text-[#343A35]">
                {topic.takeaway}
              </p>
            </div>
          </div>

          {/* Key Themes Clean Metadata */}
          <div className="pt-4 border-t border-[#DADFD5] flex flex-wrap items-center gap-2 text-xs text-[#343A35]/70">
            <span className="font-medium text-[#343A35]">Key Concepts:</span>
            {topic.keyThemes.map((theme, i) => (
              <React.Fragment key={i}>
                <span>{theme}</span>
                {i < topic.keyThemes.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Modal Footer with Previous / Next Controls */}
        <div className="sticky bottom-0 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-4 border-t border-[#DADFD5] flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={!prevTopic}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
              prevTopic
                ? 'text-[#343A35] hover:bg-[#E8E3DA] active:bg-[#DADFD5]'
                : 'text-[#343A35]/30 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous:</span>
            <span className="truncate max-w-[120px] sm:max-w-[160px]">
              {prevTopic ? prevTopic.title : 'None'}
            </span>
          </button>

          <span className="text-xs text-[#343A35]/60 hidden md:inline">
            Use ← and → arrow keys or Esc
          </span>

          <button
            onClick={handleNext}
            disabled={!nextTopic}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
              nextTopic
                ? 'text-white bg-[#356AE6] hover:bg-[#2855be] active:bg-[#1f4399] shadow-sm'
                : 'text-[#343A35]/30 bg-[#E8E3DA]/40 cursor-not-allowed'
            }`}
          >
            <span className="truncate max-w-[120px] sm:max-w-[160px]">
              {nextTopic ? nextTopic.title : 'End'}
            </span>
            <span className="hidden sm:inline">:Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
