import { z } from 'zod';

export const timeEntryFormSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  project: z.string().min(1, 'Project is required'),
  hours: z.number().min(0.01, 'Minimum 0.01 hours').max(24, 'Maximum 24 hours'),
  description: z.string().min(1, 'Description is required'),
});

export type TimeEntryFormData = z.infer<typeof timeEntryFormSchema>;