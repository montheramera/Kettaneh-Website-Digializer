export interface Step {
  icon: string;
  title: string;
}

export interface TimelineListItem {
  rank?: number;
  title: string;
  subtitle?: string;
}

export interface TimelineItem {
  period: string;
  date: string;
  content?: string;
  listItems?: TimelineListItem[];
}

export interface StepsData {
  title: string;
  subtitle: string;
  stepsTitle: string;
  steps: Step[];
  timelineTitle: string;
  timeline: TimelineItem[];
}

export interface LocalizedStepsData {
  ar: StepsData;
  en: StepsData;
}

export type GridColumns = "2" | "3" | "4" | "6";
export type Locale = "ar" | "en";
