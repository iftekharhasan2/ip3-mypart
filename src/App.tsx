import React, { useState } from 'react';
import { PresentationSlider } from './components/PresentationSlider';
import { Navbar } from './components/Navbar';
import { AboutPage } from './components/AboutPage';
import { ApproachPage } from './components/ApproachPage';
import { FocusPage } from './components/FocusPage';
import { ServicesPage } from './components/ServicesPage';
import { Ip3TrailerSection } from './components/Ip3TrailerSection';
import { SystemsArchitectureSection } from './components/SystemsArchitectureSection';
import { ExecutiveCard } from './components/ExecutiveCard';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LetsTalkModal } from './components/LetsTalkModal';
import { LetsCollaborateModal } from './components/LetsCollaborateModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { CMSProvider, useCMS } from './context/CMSContext';
import { ContentGate } from './components/ContentGate';

function AppContent() {
  const { data, themeMode, setThemeMode, toggleTheme } = useCMS();

  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'approach' | 'focus' | 'services'>('home');
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const [autoplayInterval] = useState<number>(3000);

  // Executive Modals & Theme State
  const isDarkMode = themeMode === 'dark';
  const handleSetDarkMode = (val: boolean | ((prev: boolean) => boolean)) => {
    if (typeof val === 'function') {
      const nextVal = val(isDarkMode);
      setThemeMode(nextVal ? 'dark' : 'light');
    } else {
      setThemeMode(val ? 'dark' : 'light');
    }
  };

  const [isTalkModalOpen, setIsTalkModalOpen] = useState<boolean>(false);
  const [isCollaborateModalOpen, setIsCollaborateModalOpen] = useState<string | boolean>(false);
  const [collaborateArea, setCollaborateArea] = useState<string>('Multi-Domain System Transformation');
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  // Hidden keyboard shortcut (Ctrl+Shift+A or Cmd+Shift+A) to open Admin/CMS Studio
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [targetSection, setTargetSection] = useState<string | undefined>(undefined);

  const handleSelectSlide = (id: number) => {
    setCurrentSlideId(id);
  };

  const handleNavigate = (page: 'home' | 'about' | 'approach' | 'focus' | 'services', sectionId?: string) => {
    setCurrentPage(page);
    setTargetSection(sectionId);
    if (sectionId) {
      setTimeout(() => {
        const target = document.querySelector(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--white)] font-sans antialiased overflow-x-clip selection:bg-[#ff7e67]/30 selection:text-[#ff9d8c] transition-colors duration-250">
      {/* Header Overlay Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {currentPage === 'about' ? (
        /* Dedicated Separate About Page with IP3 People sub-page */
        <AboutPage
          darkMode={isDarkMode}
          setDarkMode={handleSetDarkMode}
          initialSection={targetSection}
          onOpenTalk={() => setIsTalkModalOpen(true)}
          onOpenCollaborate={(area) => {
            setCollaborateArea(area || 'Multi-Domain System Transformation');
            setIsCollaborateModalOpen(true);
          }}
          onNavigateHome={() => handleNavigate('home', '#hero')}
          onNavigateContact={() => handleNavigate('home', '#contact-advisory')}
          onNavigateApproach={() => handleNavigate('approach')}
          onNavigateFocus={(sectionId) => handleNavigate('focus', sectionId)}
        />
      ) : currentPage === 'approach' ? (
        /* Dedicated Separate Approach Page */
        <ApproachPage
          onNavigateHome={() => handleNavigate('home', '#hero')}
          onNavigateContact={() => handleNavigate('home', '#contact-advisory')}
        />
      ) : currentPage === 'focus' ? (
        /* Dedicated Separate Focus Page */
        <FocusPage
          darkMode={isDarkMode}
          setDarkMode={handleSetDarkMode}
          initialSection={targetSection}
          onOpenTalk={() => setIsTalkModalOpen(true)}
          onOpenCollaborate={(area) => {
            setCollaborateArea(area || 'Multi-Domain System Transformation');
            setIsCollaborateModalOpen(true);
          }}
          onNavigateHome={() => handleNavigate('home', '#hero')}
          onNavigateContact={() => handleNavigate('home', '#contact-advisory')}
          onNavigateApproach={() => handleNavigate('approach')}
          onNavigateAbout={() => handleNavigate('about')}
        />
      ) : currentPage === 'services' ? (
        /* Dedicated Separate Services Page with 5 Sub-Pages */
        <ServicesPage
          initialSubPageId={targetSection}
          onOpenTalk={() => setIsTalkModalOpen(true)}
          onOpenCollaborate={(area) => {
            setCollaborateArea(area || 'Sovereign Advisory & Systems');
            setIsCollaborateModalOpen(true);
          }}
          onNavigateHome={() => handleNavigate('home', '#hero')}
          onNavigateContact={() => handleNavigate('home', '#contact-advisory')}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateApproach={() => handleNavigate('approach')}
          onNavigateFocus={() => handleNavigate('focus')}
        />
      ) : (
        /* Main Home Page Stream */
        <>
          {/* Main Presentation Slider Header Hero */}
          <section id="hero" className="w-full h-screen relative">
            <PresentationSlider
              slides={data.slides}
              currentSlideId={currentSlideId}
              onChangeSlide={handleSelectSlide}
              autoplayInterval={autoplayInterval}
            />
          </section>

          {/* Official Institutional Trailer Section */}
          <Ip3TrailerSection />

          {/* Complexity & Systems Architecture Section (Built for the complexity of now) */}
          <SystemsArchitectureSection />

          {/* Executive Briefing / Strategic Leadership Section */}
          <ExecutiveCard
            darkMode={isDarkMode}
            setDarkMode={handleSetDarkMode}
            onOpenTalk={() => setIsTalkModalOpen(true)}
            onOpenCollaborate={() => {
              setCollaborateArea('Multi-Domain System Transformation');
              setIsCollaborateModalOpen(true);
            }}
          />

          {/* IP3 Client Advisory, Contact & Consultation Section */}
          <ContactSection />
        </>
      )}

      {/* Footer */}
      <Footer />


      {/* Interactive Action Modals */}
      <LetsTalkModal
        isOpen={isTalkModalOpen}
        onClose={() => setIsTalkModalOpen(false)}
        darkMode={isDarkMode}
      />

      <LetsCollaborateModal
        isOpen={Boolean(isCollaborateModalOpen)}
        onClose={() => setIsCollaborateModalOpen(false)}
        darkMode={isDarkMode}
        preselectedArea={collaborateArea}
      />

      {/* Admin Panel Modal for Full Site Content & Typography Control */}
      <AdminPanelModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <CMSProvider>
      {/* Nothing renders until MongoDB has answered — see ContentGate. */}
      <ContentGate>
        <AppContent />
      </ContentGate>
    </CMSProvider>
  );
}
