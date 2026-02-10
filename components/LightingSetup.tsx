import React from 'react';
import { Sun, Camera as CameraIcon } from 'lucide-react';

const LightingSetup: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden my-4">
      <div className="relative aspect-[16/10] bg-slate-50 overflow-hidden shadow-inner flex items-center justify-center p-8">
        <svg viewBox="0 0 800 500" className="w-full h-full max-w-3xl" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="lightGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef9c3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#fef9c3" stopOpacity="0" />
            </radialGradient>
            <filter id="softShadow">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.05"/>
            </filter>
            <style>
              {`.label-text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 11px; font-weight: 800; fill: #475569; text-transform: uppercase; letter-spacing: 0.05em; }`}
            </style>
          </defs>

          {/* 1. Die Hohlkehle (Cyclorama) */}
          <path 
            d="M 350 100 
               C 650 100, 700 150, 700 300 
               C 700 450, 600 480, 450 480 
               L 150 480 
               C 50 480, 50 430, 200 350 
               C 350 270, 350 100, 350 100 Z" 
            fill="white" 
            stroke="#cbd5e1" 
            strokeWidth="3" 
            strokeLinejoin="round" 
          />
          <path d="M 200 350 L 550 430" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5,5" />

          {/* 2. Glasscheibe (Blau, im Zentrum) */}
          <g transform="translate(320, 150)" filter="url(#softShadow)">
            <path 
              d="M 0 0 L 180 50 L 180 320 L 0 270 Z" 
              fill="rgba(14, 165, 233, 0.05)" 
              stroke="#0ea5e9" 
              strokeWidth="4" 
              strokeLinejoin="round"
            />
            <text x="20" y="295" fill="#0ea5e9" fontSize="10" fontWeight="900" className="font-mono uppercase italic tracking-tighter opacity-30">Glas-Ebene</text>
          </g>

          {/* 3. Moderator (Strichmännchen hinter Glas) */}
          <g transform="translate(430, 220)">
             <circle cx="0" cy="0" r="16" fill="white" stroke="#334155" strokeWidth="3" />
             <line x1="0" y1="16" x2="0" y2="100" stroke="#334155" strokeWidth="3" />
             <line x1="0" y1="40" x2="-35" y2="90" stroke="#334155" strokeWidth="3" />
             <line x1="0" y1="40" x2="35" y2="90" stroke="#334155" strokeWidth="3" />
             <line x1="0" y1="100" x2="-20" y2="170" stroke="#334155" strokeWidth="3" />
             <line x1="0" y1="100" x2="20" y2="170" stroke="#334155" strokeWidth="3" />
          </g>

          {/* 4. Kamera (Unten links) */}
          <g transform="translate(180, 400)">
             <path d="M 0 35 L -35 100 M 0 35 L 35 100 M 0 35 L 0 100" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
             <line x1="0" y1="10" x2="0" y2="35" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
             <g transform="rotate(-35)">
                <rect x="-25" y="-30" width="50" height="30" fill="white" stroke="#1e293b" strokeWidth="3" rx="2" />
                <rect x="25" y="-22" width="10" height="15" fill="white" stroke="#1e293b" strokeWidth="3" />
                <path d="M 35 -28 L 60 -40 L 60 15 L 35 3 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />
                <rect x="-10" y="-38" width="20" height="8" fill="white" stroke="#1e293b" strokeWidth="2" rx="1" />
             </g>
             <text x="0" y="90" textAnchor="middle" className="label-text">Kamera</text>
          </g>

          {/* 5. Lichter (Hauptlicht) */}
          <g transform="translate(240, 230)">
             <path d="M 0 30 L 0 200 M -30 200 L 30 200 M 0 200 L -15 220 M 0 200 L 15 220" stroke="#334155" strokeWidth="2.5" />
             <rect x="-15" y="-40" width="30" height="65" fill="#fef9c3" stroke="#334155" strokeWidth="2.5" transform="rotate(-15)" rx="2" />
             <path d="M 20 -20 L 280 80 L 180 280 L 0 50 Z" fill="url(#lightGlow)" opacity="0.6" />
             <text x="-40" y="-50" className="label-text">Hauptlicht</text>
          </g>

          {/* 6. Lichter (Hintergrundlicht) */}
          <g transform="translate(580, 260)">
             <path d="M 0 30 L 0 180 M -30 180 L 30 180" stroke="#334155" strokeWidth="2.5" />
             <rect x="-20" y="-30" width="45" height="45" fill="#fef9c3" stroke="#334155" strokeWidth="2.5" rx="2" />
             <text x="35" y="0" className="label-text">Hintergrundlicht</text>
          </g>

          {/* 7. Lichter (Fülllicht) */}
          <g transform="translate(420, 360)">
             <path d="M 0 30 L 0 110 M -20 110 L 20 110" stroke="#334155" strokeWidth="2.5" />
             <rect x="-18" y="-18" width="36" height="36" fill="#fef9c3" stroke="#334155" strokeWidth="2.5" rx="2" />
             <text x="0" y="100" textAnchor="middle" className="label-text">Fülllicht</text>
          </g>
        </svg>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
        <div className="flex gap-4">
          <div className="p-2 h-fit bg-indigo-50 rounded-lg">
            <CameraIcon className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-xs uppercase text-slate-700">Kameraposition</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Kamera auf Brusthöhe des Moderators positionieren.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="p-2 h-fit bg-yellow-50 rounded-lg">
            <Sun className="w-4 h-4 text-yellow-500" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-xs uppercase text-slate-700">Reflexions-Schutz</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Seitliche Lichtquellen verhindern direkte Spiegelungen in der Glasscheibe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightingSetup;