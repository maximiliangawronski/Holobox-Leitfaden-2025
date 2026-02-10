export type ThemeColor = 'indigo' | 'amber' | 'sky' | 'rose' | 'violet' | 'emerald' | 'cyan';

interface ThemeStyles {
  activeBg: string;
  activeText: string;
  activeIcon: string;
  ring: string;
  headerIconBg: string;
  headerIconText: string;
  gradientFrom: string;
  buttonHover: string;
}

export const THEMES: Record<ThemeColor, ThemeStyles> = {
  indigo: {
    activeBg: 'bg-indigo-50',
    activeText: 'text-indigo-700',
    activeIcon: 'text-indigo-600',
    ring: 'ring-indigo-200',
    headerIconBg: 'bg-indigo-100',
    headerIconText: 'text-indigo-600',
    gradientFrom: 'from-indigo-500',
    buttonHover: 'hover:bg-indigo-600'
  },
  amber: {
    activeBg: 'bg-amber-50',
    activeText: 'text-amber-800',
    activeIcon: 'text-amber-600',
    ring: 'ring-amber-200',
    headerIconBg: 'bg-amber-100',
    headerIconText: 'text-amber-600',
    gradientFrom: 'from-amber-500',
    buttonHover: 'hover:bg-amber-600'
  },
  sky: {
    activeBg: 'bg-sky-50',
    activeText: 'text-sky-800',
    activeIcon: 'text-sky-600',
    ring: 'ring-sky-200',
    headerIconBg: 'bg-sky-100',
    headerIconText: 'text-sky-600',
    gradientFrom: 'from-sky-500',
    buttonHover: 'hover:bg-sky-600'
  },
  rose: {
    activeBg: 'bg-rose-50',
    activeText: 'text-rose-800',
    activeIcon: 'text-rose-600',
    ring: 'ring-rose-200',
    headerIconBg: 'bg-rose-100',
    headerIconText: 'text-rose-600',
    gradientFrom: 'from-rose-500',
    buttonHover: 'hover:bg-rose-600'
  },
  violet: {
    activeBg: 'bg-violet-50',
    activeText: 'text-violet-800',
    activeIcon: 'text-violet-600',
    ring: 'ring-violet-200',
    headerIconBg: 'bg-violet-100',
    headerIconText: 'text-violet-600',
    gradientFrom: 'from-violet-500',
    buttonHover: 'hover:bg-violet-600'
  },
  emerald: {
    activeBg: 'bg-emerald-50',
    activeText: 'text-emerald-800',
    activeIcon: 'text-emerald-600',
    ring: 'ring-emerald-200',
    headerIconBg: 'bg-emerald-100',
    headerIconText: 'text-emerald-600',
    gradientFrom: 'from-emerald-500',
    buttonHover: 'hover:bg-emerald-600'
  },
  cyan: {
    activeBg: 'bg-cyan-50',
    activeText: 'text-cyan-800',
    activeIcon: 'text-cyan-600',
    ring: 'ring-cyan-200',
    headerIconBg: 'bg-cyan-100',
    headerIconText: 'text-cyan-600',
    gradientFrom: 'from-cyan-500',
    buttonHover: 'hover:bg-cyan-600'
  }
};