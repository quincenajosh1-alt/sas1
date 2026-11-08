import React, { useState } from 'react';
import { BookOpen, ArrowRight, Layers, Sparkles, Filter } from 'lucide-react';
import { REFLECTION_TOPICS, MODULE_GROUPS, ReflectionTopic } from '../data/portfolioData';
import { ReflectionModal } from '../components/ReflectionModal';
import { PageId } from '../components/Navbar';

interface ReflectionsViewProps {
  initialTopicId?: string | null;
  onNavigate: (page: PageId) => void;
}

export const ReflectionsView: React.FC<ReflectionsViewProps> = ({ initialTopicId, onNavigate }) => {
  const [selectedModuleGroup, setSelectedModuleGroup] = useState<number | 'all'>('all');
  const [activeTopic, setActiveTopic] = useState<ReflectionTopic | null>(() => {
    if (initialTopicId) {
      return REFLECTION_TOPICS.find(t => t.id === initialTopicId) || null;
    }
    return null;
  });

  const filteredTopics = selectedModuleGroup === 'all'
    ? REFLECTION_TOPICS
    : REFLECTION_TOPICS.filter(t => t.moduleGroupId === selectedModuleGroup);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* 1. Header & Lead In */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#356AE6]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Chapter 02 · Academic Reflections</span>
        </div>
        <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#343A35] leading-tight">
          Every lesson has taught me something about who I am.
        </h1>
        <p className="text-base sm:text-lg text-[#343A35]/80 leading-relaxed">
          Throughout our <em>Self and Society</em> course, each theoretical concept served as a personal mirror. Below are eight dedicated reflection entries organized into three core module groups. Click any card to read the complete entry, academic analysis, and personal learnings.
        </p>
      </div>

      {/* 2. Module Group Filter Tabs (Segmented control) */}
      <div className="p-1.5 bg-[#E8E3DA] rounded-xl flex flex-wrap items-center gap-1.5 border border-[#DADFD5] max-w-full overflow-x-auto">
        <button
          onClick={() => setSelectedModuleGroup('all')}
          className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
            selectedModuleGroup === 'all'
              ? 'bg-[#FAF8F5] text-[#343A35] shadow-xs font-semibold'
              : 'text-[#343A35]/70 hover:text-[#343A35]'
          }`}
        >
          All Reflections (8)
        </button>

        {MODULE_GROUPS.map((group) => {
          const isSelected = selectedModuleGroup === group.id;
          return (
            <button
              key={group.id}
              onClick={() => setSelectedModuleGroup(group.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-[#FAF8F5] text-[#343A35] shadow-xs font-semibold'
                  : 'text-[#343A35]/70 hover:text-[#343A35]'
              }`}
            >
              Group {group.id}: {group.title} ({group.topicIds.length})
            </button>
          );
        })}
      </div>

      {/* 3. Module Group Summaries if filtered */}
      {selectedModuleGroup !== 'all' && (
        <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DADFD5] space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#356AE6]">
            <Layers className="w-3.5 h-3.5" />
            <span>{MODULE_GROUPS.find(g => g.id === selectedModuleGroup)?.subtitle}</span>
          </div>
          <h2 className="font-serif-display text-xl font-bold text-[#343A35]">
            {MODULE_GROUPS.find(g => g.id === selectedModuleGroup)?.title}
          </h2>
          <p className="text-sm text-[#343A35]/80 leading-relaxed">
            {MODULE_GROUPS.find(g => g.id === selectedModuleGroup)?.description}
          </p>
        </div>
      )}

      {/* 4. Reflection Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredTopics.map((topic) => (
          <article
            key={topic.id}
            onClick={() => setActiveTopic(topic)}
            className="group p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#DADFD5] hover:border-[#356AE6]/50 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Header unboxed metadata */}
              <div className="flex items-center justify-between text-xs text-[#343A35]/65">
                <span className="font-serif-display text-lg font-bold text-[#356AE6]">
                  {String(topic.topicNumber).padStart(2, '0')}.
                </span>
                <span className="font-medium">{topic.moduleGroup}</span>
              </div>

              {/* Title & Question */}
              <div>
                <h3 className="font-serif-display text-xl font-bold text-[#343A35] group-hover:text-[#356AE6] transition-colors leading-snug">
                  {topic.title}
                </h3>
                <p className="font-editorial text-sm italic text-[#343A35]/75 mt-1.5 leading-relaxed line-clamp-2">
                  "{topic.guidingQuestion}"
                </p>
              </div>

              {/* Brief Description */}
              <p className="text-xs sm:text-sm text-[#343A35]/80 leading-relaxed line-clamp-3">
                {topic.briefDescription}
              </p>
            </div>

            {/* Bottom Interactive Trigger */}
            <div className="mt-6 pt-4 border-t border-[#DADFD5]/70 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#356AE6] group-hover:underline flex items-center gap-1.5">
                <span>Read Reflection</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>

              <span className="text-[11px] text-[#343A35]/50">
                Click to expand
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* 5. Bottom Navigation Banner */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#E8E3DA]/80 border border-[#DADFD5] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#343A35]">
            Continue to Through Their Eyes
          </h3>
          <p className="text-sm text-[#343A35]/75">
            Discover what family and peers observed about my character, strengths, and areas to improve.
          </p>
        </div>

        <button
          onClick={() => onNavigate('interviews')}
          className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#356AE6] hover:bg-[#2855be] rounded-xl transition-all shadow-sm shrink-0"
        >
          <span>Read Interview Insights</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 6. Active Reflection Modal */}
      <ReflectionModal
        topic={activeTopic}
        onClose={() => setActiveTopic(null)}
        onSelectTopic={(t) => setActiveTopic(t)}
      />
    </div>
  );
};
