import React from 'react';

export type GestureVariant = 'tap' | 'swipe' | 'drag' | 'hold';

interface HandGestureProps {
  variant: GestureVariant;
  className?: string;
}

const HandGesture: React.FC<HandGestureProps> = ({ variant, className = "" }) => {
  // Koordinaten der Fingerspitze für konsistente Zentrierung
  const fingerX = 125;
  const fingerY = 55;

  // Basis-Handform (Wird als oberstes Layer gerendert)
  const HandPath = () => (
    <path 
      d="M145,210 c-15,0 -35,-15 -45,-35 L75,135 c-5,-10 -5,-15 5,-22 c8,-5 15,-5 22,5 l15,20 v-80 c0,-12 18,-12 18,0 v60 h8 v-10 c0,-12 16,-12 16,0 v10 h8 v-8 c0,-12 16,-12 16,0 v8 h8 c12,0 12,12 12,20 v40 c0,25 -15,42 -38,42 z" 
      fill="white" 
      stroke="black" 
      strokeWidth="6" 
      strokeLinejoin="round"
      fillOpacity="0.95" /* Hohe Deckkraft, aber minimal transparent für den Effekt-Kern */
    />
  );

  return (
    <div className={`relative w-full h-full ${className}`}>
      <style>{`
        @keyframes pulse-tap-centered {
          0% { transform: scale(0.2); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
        @keyframes hold-grow-snap {
          0% { transform: scale(1); }
          92% { transform: scale(2.5); }
          100% { transform: scale(1); }
        }
        @keyframes swipe-anim {
          0%, 15% { transform: translate(0, 0); }
          30% { transform: translate(45px, -35px); opacity: 0.8; }
          31% { transform: translate(-10px, 10px); opacity: 0; }
          45%, 100% { transform: translate(0, 0); opacity: 1; }
        }
        @keyframes drag-anim {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(35px, -25px); }
        }
        
        /* 
           WICHTIG: Da die Elemente bereits in einer Gruppe mit 'translate' liegen,
           muss der transform-origin auf 0 0 (das Zentrum der Gruppe) gesetzt werden.
        */
        .anim-tap { 
          animation: pulse-tap-centered 1.2s ease-out infinite; 
          transform-origin: 0px 0px; 
        }
        .anim-hold { 
          animation: hold-grow-snap 2s ease-in-out infinite; 
          transform-origin: 0px 0px; 
        }
        .anim-swipe { 
          animation: swipe-anim 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; 
        }
        .anim-drag { 
          animation: drag-anim 3s ease-in-out infinite; 
        }
      `}</style>

      <svg viewBox="0 0 250 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Haupt-Gruppe für Swipe/Drag Animationen */}
        <g className={variant === 'swipe' ? 'anim-swipe' : variant === 'drag' ? 'anim-drag' : ''}>
          
          {/* 1. Ebene: Pfeile (Hintergrund) */}
          {(variant === 'swipe' || variant === 'drag') && (
            <g className="opacity-80">
              <path 
                d="M155,40 L200,15" 
                fill="none" 
                stroke="#ff0000" 
                strokeWidth="12" 
                strokeLinecap="round" 
              />
              <path 
                d="M180,45 L200,15 L170,10" 
                fill="none" 
                stroke="#ff0000" 
                strokeWidth="12" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              {variant === 'swipe' && (
                <g opacity="0.4">
                  <path d="M145,20 Q160,10 170,5" fill="none" stroke="black" strokeWidth="3" />
                  <path d="M160,50 Q180,40 190,35" fill="none" stroke="black" strokeWidth="3" />
                </g>
              )}
            </g>
          )}

          {/* 2. Ebene: Interaktions-Indikatoren (Hinter der Hand, aber sichtbar) */}
          <g transform={`translate(${fingerX}, ${fingerY})`}>
            {/* Blauer Kontaktpunkt */}
            <circle 
              cx="0" cy="0"
              r="22" 
              fill="#0095ff" 
              className={variant === 'hold' ? 'anim-hold' : ''} 
            />
            {/* Weißer Kern */}
            <circle cx="0" cy="0" r="8" fill="white" />
            
            {/* Tap-Animation: Ring expandiert exakt vom Zentrum aus */}
            {variant === 'tap' && (
              <circle 
                cx="0" cy="0"
                r="15" 
                fill="none" 
                stroke="#0095ff" 
                strokeWidth="5" 
                className="anim-tap" 
              />
            )}
          </g>

          {/* 3. Ebene: Die Hand (Oberstes Layer) */}
          <HandPath />
          
        </g>
      </svg>
    </div>
  );
};

export default HandGesture;