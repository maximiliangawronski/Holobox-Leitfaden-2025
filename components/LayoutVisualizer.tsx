import React, { useState } from 'react';
import { 
  Type, 
  Image as ImageIcon, 
  Video, 
  MousePointer2, 
  Play, 
  CheckSquare, 
  Box, 
  Move3d,
  ArrowRight,
  Grid,
  Layers,
  MousePointerClick
} from 'lucide-react';

type LayoutType = 'standard' | 'video' | 'quiz2' | 'quiz4' | 'assignment' | 'object3d';

const LayoutVisualizer: React.FC = () => {
  const [activeLayout, setActiveLayout] = useState<LayoutType>('standard');

  const layouts: { id: LayoutType; label: string; icon: React.ElementType }[] = [
    { id: 'standard', label: 'Text & Bild', icon: Type },
    { id: 'video', label: 'Video Clip', icon: Video },
    { id: 'quiz2', label: 'Quiz (2)', icon: CheckSquare },
    { id: 'quiz4', label: 'Quiz (4)', icon: Grid },
    { id: 'assignment', label: 'Zuordnen', icon: Layers },
    { id: 'object3d', label: '3D Rotation', icon: Move3d },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 my-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Box className="w-5 h-5 text-indigo-600" />
          Interaktiver Layout-Simulator
        </h3>
        <span className="text-[10px] font-mono bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase tracking-tighter">Holobox 4K Vertical</span>
      </div>
      
      <p className="text-sm text-slate-500 mb-6">
        Wählen Sie ein Szenario, um die optimale Platzierung von UI-Elementen relativ zum Moderator zu prüfen. 
        Die Farben folgen deinem Skizzen-Code: <span className="text-green-600 font-bold">Grün (Header)</span>, <span className="text-orange-600 font-bold">Orange (Text)</span>, <span className="text-purple-600 font-bold">Lila (Interaktion)</span>.
      </p>

      {/* Grid Layout Selector */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
        {layouts.map((layout) => (
          <button
            key={layout.id}
            onClick={() => setActiveLayout(layout.id)}
            className={`flex items-center gap-2 p-3 rounded-lg text-xs font-bold transition-all border ${
              activeLayout === layout.id 
                ? 'bg-slate-900 text-white border-slate-900 shadow-md transform scale-[1.02]' 
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
            }`}
          >
            <layout.icon className={`w-4 h-4 ${activeLayout === layout.id ? 'text-white' : 'text-indigo-500'}`} />
            {layout.label}
          </button>
        ))}
      </div>

      {/* The Holobox Frame */}
      <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto bg-slate-50 rounded-lg border-[10px] border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-200">
        
        {/* Improved Persona Silhouette */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[88%] pointer-events-none z-0 flex justify-center opacity-20">
          <svg viewBox="0 0 200 600" preserveAspectRatio="xMidYMax" className="h-full">
             <defs>
               <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" style={{stopColor:'#64748b', stopOpacity:1}} />
                 <stop offset="100%" style={{stopColor:'#94a3b8', stopOpacity:1}} />
               </linearGradient>
             </defs>
             <circle cx="100" cy="55" r="30" fill="url(#bodyGrad)" />
             <path d="M 100 90 Q 150 95 170 140 L 175 320 Q 175 350 155 350 L 155 580 Q 155 600 135 600 L 110 600 L 110 400 L 90 400 L 90 600 L 65 600 Q 45 600 45 580 L 45 350 Q 25 350 25 320 L 30 140 Q 50 95 100 90" fill="url(#bodyGrad)" />
          </svg>
        </div>

        {/* UI Elements Layer */}
        <div className="absolute inset-0 z-10 p-4">
          
          {/* Static Header */}
          <div className="absolute top-6 left-3 right-3 h-10 border-2 border-green-500/40 bg-green-500/10 rounded-md flex items-center justify-center backdrop-blur-[2px]">
             <span className="text-green-700 text-[9px] font-black uppercase tracking-widest">Kapitel-Titel</span>
          </div>

          {activeLayout === 'standard' && (
            <>
              <div className="absolute top-24 left-3 w-[45%] h-56 border-2 border-orange-400/50 bg-orange-400/5 bg-white/40 rounded-lg p-2 flex flex-col gap-1.5 shadow-sm">
                <span className="text-orange-700 text-[8px] font-bold">KERNINHALTE</span>
                <div className="h-1 w-full bg-orange-200 rounded"></div>
                <div className="h-1 w-[90%] bg-orange-200 rounded"></div>
                <div className="h-1 w-[95%] bg-orange-200 rounded"></div>
              </div>
              <div className="absolute top-48 right-3 w-[40%] h-32 border-2 border-purple-400/50 bg-purple-50 rounded-lg flex items-center justify-center shadow-md">
                <ImageIcon className="text-purple-400 w-8 h-8" />
              </div>
            </>
          )}

          {activeLayout === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="w-full aspect-video border-4 border-blue-500 bg-blue-500/10 rounded-xl flex items-center justify-center shadow-xl group">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                   <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
                <div className="absolute -bottom-6 text-[8px] font-bold text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-200 uppercase">Video (Post-Production)</div>
              </div>
            </div>
          )}

          {activeLayout === 'quiz2' && (
            <div className="absolute top-[35%] -translate-y-1/2 inset-x-3 flex gap-3 h-40">
               <div className="flex-1 border-2 border-green-500/60 bg-green-50/80 rounded-xl flex flex-col items-center justify-center shadow-lg relative">
                  <span className="text-2xl font-black text-green-600/30">1</span>
                  <MousePointerClick className="w-4 h-4 text-green-600 absolute bottom-2 right-2 animate-pulse" />
               </div>
               <div className="flex-1 border-2 border-green-500/60 bg-green-50/80 rounded-xl flex flex-col items-center justify-center shadow-lg">
                  <span className="text-2xl font-black text-green-600/30">2</span>
               </div>
            </div>
          )}

          {activeLayout === 'quiz4' && (
            <div className="absolute top-[25%] inset-x-3 grid grid-cols-2 gap-2 h-48">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="border-2 border-green-500/40 bg-green-50/60 rounded-lg flex items-center justify-center relative shadow-sm">
                    <span className="text-xl font-black text-green-600/20">{i}</span>
                    {i === 2 && <MousePointer2 className="w-3 h-3 text-green-500 absolute bottom-1 right-1" />}
                 </div>
               ))}
            </div>
          )}

          {activeLayout === 'assignment' && (
            <div className="absolute inset-x-3 top-24 bottom-24 bg-white/20 rounded-lg">
               <div className="absolute left-2 top-[20%] -translate-y-1/2 w-10 h-10 bg-emerald-100 border-2 border-emerald-400 rounded-lg shadow-sm z-20"></div>
               <div className="absolute left-2 top-[50%] -translate-y-1/2 w-10 h-10 bg-emerald-100 border-2 border-emerald-400 rounded-lg shadow-sm z-20"></div>
               <div className="absolute left-2 top-[80%] -translate-y-1/2 w-10 h-10 bg-emerald-100 border-2 border-emerald-400 rounded-lg shadow-sm z-20"></div>

               <div className="absolute right-2 top-[20%] -translate-y-1/2 w-10 h-10 bg-emerald-100 border-2 border-emerald-400 rounded-full shadow-sm z-20"></div>
               <div className="absolute right-2 top-[50%] -translate-y-1/2 w-10 h-10 bg-emerald-100 border-2 border-emerald-400 rounded-full shadow-sm z-20"></div>
               <div className="absolute right-2 top-[80%] -translate-y-1/2 w-10 h-10 bg-emerald-100 border-2 border-emerald-400 rounded-full shadow-sm z-20"></div>

               <svg className="absolute inset-0 pointer-events-none z-10 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="16" y1="20" x2="84" y2="80" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" className="drop-shadow-[0_0_3px_rgba(16,185,129,0.8)]" />
                  <line x1="16" y1="50" x2="84" y2="20" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" className="drop-shadow-[0_0_3px_rgba(16,185,129,0.8)]" />
                  <line x1="16" y1="80" x2="84" y2="50" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" className="drop-shadow-[0_0_3px_rgba(16,185,129,0.8)]" />
               </svg>
            </div>
          )}

          {activeLayout === 'object3d' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-48 h-48 border-4 border-rose-500/30 bg-rose-500/5 rounded-full flex items-center justify-center relative">
                 <div className="w-32 h-32 bg-white rounded-2xl shadow-2xl border-2 border-rose-200 flex items-center justify-center rotate-12">
                   <Move3d className="w-12 h-12 text-rose-500" />
                 </div>
                 <div className="absolute top-0 right-0 p-2 bg-rose-500 text-white rounded-full shadow-lg">
                    <MousePointer2 className="w-4 h-4" />
                 </div>
              </div>
              <span className="mt-4 text-[9px] font-bold text-rose-600 bg-white px-3 py-1 rounded-full shadow-sm">Objekt rotieren (Processing)</span>
            </div>
          )}

          {/* Forward Button - Jetzt auf top-[62%] für exakte Taillen-Positionierung */}
          {['quiz2', 'quiz4', 'assignment', 'object3d'].includes(activeLayout) && (
            <div className="absolute top-[62%] right-3 w-14 h-10 border-2 border-purple-500 bg-purple-500 text-white rounded-lg flex flex-col items-center justify-center shadow-lg transform rotate-[-3deg] active:scale-95 transition-transform">
               <ArrowRight className="w-4 h-4" />
               <span className="text-[7px] font-black uppercase">Next</span>
            </div>
          )}

          {/* Holobox Bottom Controls */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-40">
             <div className="w-4 h-1 bg-slate-400 rounded-full"></div>
             <div className="w-4 h-1 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutVisualizer;