export interface TimeEntry {
  id: string;
  date: string; 
  project: string;
  hours: number;
  description: string;
  createdAt: string;
}

export interface CreateTimeEntryDto {
  date: string;
  project: string;
  hours: number;
  description: string;
}

export const PROJECTS = [
  'Viso Internal',
  'Client A',
  'Client B',
  'Personal Development',
  'Research & Development',
] as const;

export type Project = typeof PROJECTS[number];