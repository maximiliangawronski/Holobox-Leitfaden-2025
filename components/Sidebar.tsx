import React, { useState } from 'react';
import { Section } from '../types';
import { ChevronRight, Search, X } from 'lucide-react';
import { THEMES } from '../theme';

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  onSelectSection: (id: string) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection, onSelectSection, isOpen, toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = sections.filter(section => 
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.subsections.some(sub => sub.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar Content */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-slate-200 bg-slate-50">
          <h1 className="text-2xl font-bold text-slate-800">Holobox Guide</h1>
          <p className="text-xs text-slate-500 mt-1">Interaktive Lernszenarien 2025</p>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-slate-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 border-none rounded-lg py-2 pl-10 pr-8 text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-200 rounded-full"
              >
                <X className="w-3 h-3 text-slate-500" />
              </button>
            )}
          </div>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-180px)]">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              const theme = THEMES[section.colorTheme];
              
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    onSelectSection(section.id);
                    if (window.innerWidth < 1024) toggleSidebar();
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all ${
                    isActive 
                      ? `${theme.activeBg} ${theme.activeText} shadow-sm ring-1 ${theme.ring}` 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? theme.activeIcon : 'text-slate-400'}`} />
                    <span className="font-medium text-sm">{section.title}</span>
                  </div>
                  {isActive && <ChevronRight className={`w-4 h-4 ${theme.activeIcon}`} />}
                </button>
              );
            })
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-slate-400 italic">Keine Treffer gefunden.</p>
            </div>
          )}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 bg-white">
          <p className="text-[10px] text-slate-400 text-center">© 2025 Maximilian Gawronski</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;