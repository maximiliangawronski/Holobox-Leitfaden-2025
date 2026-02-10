import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ThemeColor } from './theme';

export interface SubSection {
  title: string;
  content: React.ReactNode;
}

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  colorTheme: ThemeColor;
  subsections: SubSection[];
}