
import React, { useState } from 'react';
import { Section } from '../types';
import { ChevronRight, Search, X, Check } from 'lucide-react';
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
    section.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <aside 
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-slate-200 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-xl">H</div>
            <h1 className="text-xl font-black text-slate-900 tracking-tighter">Holobox Guide</h1>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">© 2025 M. Gawronski</p>
        </div>

        <div className="p-4 border-b border-slate-50">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            <input 
              type="text"
              placeholder="Inhalt suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-8 text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-220px)] scrollbar-hide">
          {filteredSections.map((section, idx) => {
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
                className={`w-full group flex items-center justify-between p-3.5 rounded-2xl text-left transition-all duration-300 ${
                  isActive 
                    ? `${theme.activeBg} ${theme.activeText} shadow-md shadow-indigo-100 ring-1 ${theme.ring}` 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`relative flex items-center justify-center w-8 h-8 rounded-xl transition-all ${isActive ? 'bg-white shadow-sm' : 'bg-slate-100 group-hover:bg-white'}`}>
                    <Icon className={`w-4 h-4 ${isActive ? theme.activeIcon : 'text-slate-400'}`} />
                    <span className="absolute -top-1 -left-1 text-[8px] font-black opacity-30">{idx + 1}</span>
                  </div>
                  <span className={`font-bold text-sm tracking-tight ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                    {section.title}
                  </span>
                </div>
                {isActive && <div className={`w-1.5 h-1.5 rounded-full ${theme.activeIcon} bg-current animate-pulse`}></div>}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                 <Check className="w-4 h-4" />
               </div>
               <div className="text-[10px]">
                 <p className="font-bold text-slate-800">Status: Aktiv</p>
                 <p className="text-slate-500">Edition 2025.1</p>
               </div>
             </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
