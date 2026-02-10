
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { GUIDE_CONTENT } from './constants';
import { Menu, ArrowRight } from 'lucide-react';
import { THEMES } from './theme';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(GUIDE_CONTENT[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeSection = GUIDE_CONTENT.find(s => s.id === activeSectionId) || GUIDE_CONTENT[0];
  const theme = THEMES[activeSection.colorTheme];

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSectionId]);

  const handleNext = () => {
    const currentIndex = GUIDE_CONTENT.findIndex(s => s.id === activeSectionId);
    if (currentIndex < GUIDE_CONTENT.length - 1) {
      setActiveSectionId(GUIDE_CONTENT[currentIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Navigation */}
      <Sidebar 
        sections={GUIDE_CONTENT} 
        activeSection={activeSectionId} 
        onSelectSection={setActiveSectionId}
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-72 min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-slate-200 p-4 flex items-center gap-4 shadow-sm">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 rounded-md">
            <Menu className="w-6 h-6 text-slate-600" />
          </button>
          <span className="font-bold text-slate-800 truncate">{activeSection.title}</span>
        </div>

        <div className="max-w-4xl mx-auto p-6 lg:p-12 pb-24">
          {/* Header Section */}
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl ${theme.headerIconBg}`}>
                <activeSection.icon className={`w-8 h-8 ${theme.headerIconText}`} />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{activeSection.title}</h2>
            </div>
            
            <div className={`h-1 w-full bg-gradient-to-r ${theme.gradientFrom} to-transparent rounded-full opacity-30`}></div>
            
            {/* Einleitungstext unter der Linie */}
            <p className="text-lg text-slate-600 mt-6 leading-relaxed italic border-l-4 border-slate-200 pl-4">
              {activeSection.description}
            </p>
          </header>

          {/* Content Subsections */}
          <div className="space-y-12">
            {activeSection.subsections.map((sub, idx) => (
              <section key={idx} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
                  {sub.title}
                </h3>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                  {sub.content}
                </div>
              </section>
            ))}
          </div>

          {/* Navigation Footer */}
          <div className="mt-12 flex justify-end">
            {GUIDE_CONTENT.findIndex(s => s.id === activeSectionId) < GUIDE_CONTENT.length - 1 && (
              <button
                onClick={handleNext}
                className={`group flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium shadow-lg ${theme.buttonHover} transition-all transform hover:-translate-y-1`}
              >
                Nächstes Kapitel
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
