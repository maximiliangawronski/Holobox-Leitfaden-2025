
import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import { GUIDE_CONTENT } from './constants';
import { Menu, ArrowRight, CheckCircle, Trophy } from 'lucide-react';
import { THEMES } from './theme';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(GUIDE_CONTENT[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set([GUIDE_CONTENT[0].id]));

  const activeSection = useMemo(() => 
    GUIDE_CONTENT.find(s => s.id === activeSectionId) || GUIDE_CONTENT[0]
  , [activeSectionId]);

  const theme = THEMES[activeSection.colorTheme];
  const currentIndex = GUIDE_CONTENT.findIndex(s => s.id === activeSectionId);
  const progress = ((currentIndex + 1) / GUIDE_CONTENT.length) * 100;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setVisitedSections(prev => new Set([...prev, activeSectionId]));
  }, [activeSectionId]);

  const handleNext = () => {
    if (currentIndex < GUIDE_CONTENT.length - 1) {
      setActiveSectionId(GUIDE_CONTENT[currentIndex + 1].id);
    }
  };

  const isLastSection = currentIndex === GUIDE_CONTENT.length - 1;

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 lg:left-72 right-0 h-1.5 z-50 bg-slate-100">
        <div 
          className={`h-full transition-all duration-500 ease-out bg-gradient-to-r ${theme.gradientFrom} to-blue-400`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <Sidebar 
        sections={GUIDE_CONTENT} 
        activeSection={activeSectionId} 
        onSelectSection={setActiveSectionId}
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main className="flex-1 lg:ml-72 min-w-0 relative">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <Menu className="w-6 h-6 text-slate-600" />
            </button>
            <span className="font-bold text-slate-800 truncate max-w-[200px]">{activeSection.title}</span>
          </div>
          <div className="text-[10px] font-black bg-slate-100 px-2 py-1 rounded text-slate-500">
            {currentIndex + 1} / {GUIDE_CONTENT.length}
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-6 lg:p-16 pb-32">
          {/* Header Section */}
          <header className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-5">
                <div className={`p-4 rounded-2xl ${theme.headerIconBg} shadow-sm transform -rotate-3`}>
                  <activeSection.icon className={`w-10 h-10 ${theme.headerIconText}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${theme.activeText}`}>Kapitel {currentIndex + 1}</span>
                    {visitedSections.has(activeSectionId) && currentIndex !== 0 && <CheckCircle className="w-3 h-3 text-emerald-500" />}
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none">{activeSection.title}</h2>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-slate-500 mt-8 leading-relaxed font-medium border-l-8 border-slate-200 pl-6 py-2 italic">
              "{activeSection.description}"
            </p>
          </header>

          {/* Content Subsections */}
          <div className="space-y-10">
            {activeSection.subsections.map((sub, idx) => (
              <section 
                key={idx} 
                className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group"
              >
                <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                  <span className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${theme.gradientFrom} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`}></span>
                  {sub.title}
                </h3>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base">
                  {sub.content}
                </div>
              </section>
            ))}
          </div>

          {/* Navigation Footer */}
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
            
            <div className="text-center sm:text-left z-10">
              <h4 className="text-white font-bold text-lg">
                {isLastSection ? 'Leitfaden abgeschlossen!' : 'Bereit für das nächste Kapitel?'}
              </h4>
              <p className="text-slate-400 text-sm">
                {isLastSection ? 'Viel Erfolg bei Ihrem Holobox-Projekt.' : `Weiter zu: ${GUIDE_CONTENT[currentIndex + 1]?.title}`}
              </p>
            </div>

            {!isLastSection ? (
              <button
                onClick={handleNext}
                className={`z-10 group flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all`}
              >
                Weiterlesen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <div className="z-10 flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold shadow-lg animate-bounce">
                <Trophy className="w-6 h-6" />
                Fertig!
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
