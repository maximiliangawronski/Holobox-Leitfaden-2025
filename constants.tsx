import React from 'react';
import { Section } from './types';
import { 
  BookOpen, 
  Camera, 
  Film, 
  MonitorPlay, 
  Settings, 
  ClipboardCheck, 
  PenTool, 
  Scissors,
  Eye,
  Zap,
  RefreshCw,
  PlusCircle,
  MessageSquare,
  Clock,
  Mic,
  Moon,
  Save,
  Code,
  Copy
} from 'lucide-react';
import LayoutVisualizer from './components/LayoutVisualizer';
import LightingSetup from './components/LightingSetup';
import HandGesture, { GestureVariant } from './components/HandGesture';
import Checklist from './components/Checklist';

interface InteractionCardProps {
  title: string;
  description: string;
  variant: GestureVariant;
  color: string;
}

const InteractionCard: React.FC<InteractionCardProps> = ({ title, description, variant, color }) => {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md transition-all flex flex-col items-center text-center group">
      <strong className={`block text-xl ${color} mb-2`}>{title}</strong>
      <span className="text-sm text-slate-600 mb-6 min-h-[2.5rem] flex items-center justify-center leading-tight">
        {description}
      </span>
      <div className="relative w-full aspect-square max-w-[180px] bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 group-hover:bg-white transition-colors">
        <HandGesture variant={variant} className="p-4 transition-transform group-hover:scale-110" />
      </div>
    </div>
  );
};

export const GUIDE_CONTENT: Section[] = [
  {
    id: 'intro',
    title: 'Vorwort & Voraussetzungen',
    icon: BookOpen,
    description: 'Grundlagen für interaktive und asynchrone Lernszenarien.',
    colorTheme: 'indigo',
    subsections: [
      {
        title: 'Vorwort',
        content: (
          <div className="space-y-4">
            <p>
              Dieser Leitfaden (erstellt von Maximilian Gawronski, 2025) beinhaltet alle notwendigen Schritte, um asynchrone und interaktive Lehrszenarien für die Holobox zu erstellen. 
              Ziel ist ein ca. 15-minütiges, interaktives Lehrvideo auf einem Touch-Bildschirm.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
              <h4 className="font-bold text-indigo-700">Der Workflow im Detail:</h4>
              <ol className="list-decimal list-inside text-indigo-900 mt-2 space-y-1">
                <li>Planungsphase</li>
                <li>Vorbereitung im Studio</li>
                <li>Videoproduktion</li>
                <li>Postproduktion</li>
                <li>Einbinden in die Holobox</li>
                <li>Testen und Evaluation</li>
              </ol>
            </div>
          </div>
        )
      },
      {
        title: 'Ausrüstung & Software',
        content: (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-bold mb-2 flex items-center gap-2 text-indigo-600"><Camera className="w-4 h-4" /> Hardware</h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                <li>Filmkamera (4K/60FPS) + Zoomobjektiv</li>
                <li>Glasscheibe zum Schreiben (mobiles Gestell)</li>
                <li>Flüssigkreidemarker (breite Mine, ca. 8,0 mm)</li>
                <li>Stative, Computer/Laptop & Kontrollmonitor</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-bold mb-2 flex items-center gap-2 text-indigo-600"><Settings className="w-4 h-4" /> Software</h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                <li>Processing 4 (für Interaktion)</li>
                <li>OBS (für Studio-Monitoring)</li>
                <li>Videoschnitt- & Vektorgrafikprogramm</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'planning',
    title: '1. Planungsphase',
    icon: PenTool,
    description: 'Legen Sie das Fundament für Ihr Lernszenario durch ein präzises Konzept, durchdachte Interaktionsmethoden und detaillierte Layout-Vorlagen.',
    colorTheme: 'amber',
    subsections: [
      {
        title: 'Lehrmaterial: Adaption vs. Neuerstellung',
        content: (
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2"><RefreshCw className="w-4 h-4" /> Adaption (Bestehend)</h4>
              <p className="text-xs text-amber-800 leading-relaxed">
                Prüfen Sie: Wie viele Folien gibt es? Bei über 15 Min. Vortrag thematisch unterteilen. Vermeiden Sie "PowerPoint-Karaoke" (Ablesen). Ergänzen Sie Inhalte sinnvoll.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><PlusCircle className="w-4 h-4" /> Neuerstellung</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Denken Sie direkt in <strong>Szenen</strong>, nicht in Folien. Storyboard und Drehbuch sind die Basis. Planen Sie Interaktionen von Anfang an ein.
              </p>
            </div>
          </div>
        )
      },
      {
        title: 'Interaktionskonzepte am Touchscreen',
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InteractionCard title="Tippen (tap)" description="Kurzes Berühren für Buttons." variant="tap" color="text-amber-600" />
            <InteractionCard title="Wischen (swipe)" description="Dynamisches Bewegen von 3D-Objekten." variant="swipe" color="text-amber-600" />
            <InteractionCard title="Ziehen (drag)" description="Kontrollierter, konstanter Kontakt." variant="drag" color="text-amber-600" />
            <InteractionCard title="Tippen & Halten" description="Lange Berührung für Zustandswechsel." variant="hold" color="text-amber-600" />
          </div>
        )
      },
      {
        title: 'Verhalten bei Inaktivität (Ruhezustand)',
        content: (
          <div className="space-y-4">
            <p className="text-sm text-slate-600">Ziel: Den Nutzer sanft zurückführen oder Aufmerksamkeit erhalten.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <h5 className="font-bold text-xs uppercase mb-1">Während der Einheit</h5>
                <ul className="text-[11px] text-slate-500 space-y-1">
                  <li>• Softwareseitiges Timeout</li>
                  <li>• Hinweisnachricht (Pause)</li>
                  <li>• Automatisches Zurücksetzen</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-900 text-white rounded-lg">
                <h5 className="font-bold text-xs uppercase mb-1 text-amber-400">Im Leerlauf</h5>
                <ul className="text-[11px] text-slate-300 space-y-1">
                  <li>• Schwarzer Bildschirm (Energie)</li>
                  <li>• Bildschirmschoner ("Attention Grabber")</li>
                  <li>• Loopfähige Video-Clips</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        title: 'Layoutvorlagen digital umsetzen',
        content: (
          <div>
            <p className="text-sm mb-4">Erstellen Sie Skizzen in 3840 x 2160 Pixel (4K). Beachten Sie die Spiegelung für die Holobox!</p>
            <LayoutVisualizer />
          </div>
        )
      }
    ]
  },
  {
    id: 'studio',
    title: '2. Vorbereitung Studio',
    icon: Camera,
    description: 'Schaffen Sie die technischen Rahmenbedingungen durch eine präzise Lichtsetzung und ein optimal konfiguriertes Kamera- und Audio-Setup.',
    colorTheme: 'sky',
    subsections: [
      {
        title: 'Video & Audio Setup',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-sky-50 p-4 rounded-xl border border-sky-100">
                <h5 className="font-bold text-sky-900 mb-2 flex items-center gap-2"><Film className="w-4 h-4" /> Video-Parameter</h5>
                <ul className="text-xs space-y-1 text-sky-800">
                  <li>• 4K Auflösung / 60 FPS</li>
                  <li>• Brennweite: 35–50 mm (Porträt)</li>
                  <li>• Blende: f/4–f/8 (Tiefenschärfe)</li>
                  <li>• Kamera auf Brusthöhe, ca. 3,5m Abstand</li>
                </ul>
              </div>
              <div className="bg-sky-50 p-4 rounded-xl border border-sky-100">
                <h5 className="font-bold text-sky-900 mb-2 flex items-center gap-2"><Mic className="w-4 h-4" /> Audio-Parameter</h5>
                <ul className="text-xs space-y-1 text-sky-800">
                  <li>• Lavalier (Anstecker) bei viel Bewegung</li>
                  <li>• Richtmikrofon (Boom) für "Clean Look"</li>
                  <li>• Akustik optimieren (Vorhänge, Teppiche)</li>
                  <li>• Soundcheck vor Beginn zwingend!</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        title: 'Ausleuchtung im Studio',
        content: (
          <div className="space-y-4">
            <p className="text-sm text-slate-600">Präzise Lichtsetzung sorgt für Plastizität. Vermeiden Sie Spiegelungen in der Glasscheibe!</p>
            <div className="-mt-4">
              <LightingSetup />
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'video_production',
    title: '3. Videoproduktion',
    icon: Film,
    description: 'Setzen Sie Ihre Inhalte vor der Kamera professionell um und achten Sie dabei auf authentisches Auftreten, richtiges Timing und technische Konsistenz.',
    colorTheme: 'rose',
    subsections: [
      {
        title: 'Während des Drehs zu beachten',
        content: (
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-2"><span>•</span> <strong>Puffer einplanen:</strong> Am Anfang/Ende jeder Szene Zeit lassen für den Schnitt.</li>
            <li className="flex gap-2"><span>•</span> <strong>Sauberes Glas:</strong> Die Glasscheibe muss stets schlierenfrei sein.</li>
            <li className="flex gap-2"><span>•</span> <strong>Konsistenz:</strong> Falten in Kleidung, Haarposition und Stiftfarbe prüfen.</li>
            <li className="flex gap-2"><span>•</span> <strong>Klima:</strong> Studio kühl halten, um Schweiß beim Moderator zu vermeiden.</li>
          </ul>
        )
      },
      {
        title: 'Als Moderator beachten (Physical Tasks)',
        content: (
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 space-y-4">
            <p className="text-xs font-bold text-rose-900 uppercase tracking-wider">Glaubwürdigkeit & Timing:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <h6 className="font-bold text-[11px] text-rose-600 mb-2">Nonverbale Tasks (während Pause)</h6>
                <ul className="text-[10px] space-y-1 text-slate-500">
                  <li>• Kleidung richten</li>
                  <li>• Brille justieren / säubern</li>
                  <li>• Mit dem Stift spielen (Kappe ab/dran)</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <h6 className="font-bold text-[11px] text-rose-600 mb-2">Verbale Tasks</h6>
                <ul className="text-[10px] space-y-1 text-slate-500">
                  <li>• Kommentare zur Aufgabe (Fingerzeig)</li>
                  <li>• Hinweise zum Fortfahren geben</li>
                  <li>• Tempo & Melodie variieren</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'post_production',
    title: '4. Postproduktion',
    icon: Scissors,
    description: 'Transformieren Sie das Rohmaterial durch präzisen Schnitt, die Integration von Grafiken und eine strukturierte Vorbereitung aller digitalen Assets.',
    colorTheme: 'violet',
    subsections: [
      {
        title: 'Materialsichtung & Schnitt',
        content: (
          <div className="space-y-4">
            <ol className="list-decimal list-inside text-sm text-slate-600 space-y-2">
              <li>Rohmaterial sichten und nach Shotlist benennen.</li>
              <li>Grafiken/Bilder nach Layoutvorlage einfügen.</li>
              <li>Szenen hintereinander schneiden (Timing-Check).</li>
              <li>Finaler Export in thematische "Videoschnipsel".</li>
            </ol>
            <div className="p-4 bg-violet-50 rounded-lg border border-violet-100 flex items-start gap-3 mt-4">
              <Save className="w-5 h-5 text-violet-600 shrink-0" />
              <div>
                <h6 className="font-bold text-xs text-violet-900">Speicherung & Benennung</h6>
                <p className="text-[11px] text-violet-800">Verwenden Sie ein klares Schema (z.B. intro.mp4, quiz_1_loop.mp4) für die spätere Programmierung.</p>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'integration',
    title: '5. Einbinden in die Holobox',
    icon: MonitorPlay,
    description: 'Hauchen Sie Ihrem Projekt Leben ein, indem Sie die Hardware konfigurieren und die interaktive Logik sowie den Video-Ablauf in Processing implementieren.',
    colorTheme: 'emerald',
    subsections: [
      {
        title: 'Skriptstruktur & Erstellung',
        content: (
          <div className="space-y-4">
            <p className="text-sm text-slate-600">Ein funktionierendes Hauptskript in <strong>Processing</strong> muss folgende Aufgaben erfüllen:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="p-2 bg-emerald-50 rounded border border-emerald-100 text-[10px] text-emerald-900">• Speicherort der Videos kennen</li>
              <li className="p-2 bg-emerald-50 rounded border border-emerald-100 text-[10px] text-emerald-900">• Abspielreihenfolge definieren</li>
              <li className="p-2 bg-emerald-50 rounded border border-emerald-100 text-[10px] text-emerald-900">• Interaktive Funktionen beinhalten</li>
              <li className="p-2 bg-emerald-50 rounded border border-emerald-100 text-[10px] text-emerald-900">• Fehlerfrei laufen (Debug-Mode)</li>
            </ul>
          </div>
        )
      },
      {
        title: 'Einrichtung der Hardware',
        content: (
          <div className="space-y-2 text-sm text-slate-600">
            <p>1. Holobox an Strom anschließen.</p>
            <p>2. HDMI-Kabel (Bild) und USB-Kabel (Touch-Funktion) mit Computer verbinden.</p>
            <p>3. Auflösung wenn möglich auf <strong>3840 x 2160 (4K)</strong> und Bildwiederholung auf <strong>60 fps</strong> (oder höher) stellen.</p>
            <p>4. Bei Bedarf Touch-Eingabe neu kalibrieren oder Bildschirmausrichtung anpassen (falls Rotation nicht stimmt).</p>
          </div>
        )
      }
    ]
  },
  {
    id: 'evaluation',
    title: '6. Testen & Evaluation',
    icon: ClipboardCheck,
    description: 'Sichern Sie die Qualität Ihres Lernszenarios durch umfassende Systemtests und sammeln Sie wertvolles Nutzerfeedback für zukünftige Optimierungen.',
    colorTheme: 'cyan',
    subsections: [
      {
        title: 'Test-Checkliste (Holobox)',
        content: (
          <div className="space-y-6">
            <p className="text-sm text-slate-600">Nutzen Sie diese Checkliste für den finalen Testlauf direkt an der Hardware:</p>
            <Checklist 
              id="final-test"
              items={[
                "Skript läuft stabil auf der Holobox (keine Abstürze)",
                "Bild und Ton sind lippensynchron",
                "Interaktive Elemente (Buttons) reagieren präzise auf Touch",
                "Das Timing zwischen Videoloop und Feedback-Clip stimmt",
                "Es gibt keine Sackgassen im Video-Ablauf",
                "Die Reflexionen auf der Scheibe stören das Bild nicht",
                "Schriftgrößen sind aus 2 Meter Entfernung lesbar"
              ]} 
            />
          </div>
        )
      },
      {
        title: 'Evaluation-Methoden',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-200">
              <h5 className="font-bold text-cyan-900 mb-2 flex items-center gap-2">Methoden</h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                   <span className="text-[10px]"><strong>QR-Code:</strong> Extern via Google Forms etc.</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                   <span className="text-[10px]"><strong>Direkt integriert:</strong> Offline in Processing.</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">Warum Evaluation?</h5>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Asynchrones Lernen funktioniert nur, wenn die UX reibungslos ist. Feedback hilft, Missverständnisse in der Interaktion zu identifizieren.
              </p>
            </div>
          </div>
        )
      }
    ]
  }
];