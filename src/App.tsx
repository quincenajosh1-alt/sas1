import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ReflectionsView } from './views/ReflectionsView';
import { ThroughTheirEyesView } from './views/ThroughTheirEyesView';
import { ManifestosView } from './views/ManifestosView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  // Sync hash routing for responsive and shareable URLs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'reflections', 'interviews', 'manifestos'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenReflectionFromHome = (topicId: string) => {
    setSelectedTopicId(topicId);
    setCurrentPage('reflections');
    window.location.hash = 'reflections';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#343A35] flex flex-col font-sans selection:bg-[#DADFD5] selection:text-[#343A35]">
      {/* Sticky Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main View Area with Smooth Transitions */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenReflection={handleOpenReflectionFromHome}
          />
        )}

        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentPage === 'reflections' && (
          <ReflectionsView
            initialTopicId={selectedTopicId}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'interviews' && (
          <ThroughTheirEyesView onNavigate={handleNavigate} />
        )}

        {currentPage === 'manifestos' && (
          <ManifestosView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Persistent Footer Across All Pages */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
