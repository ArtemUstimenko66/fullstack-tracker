import axios from 'axios';
import { type TimeEntry, type CreateTimeEntryDto } from '@/types';

const API_BASE_URL = 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const timeEntriesApi = {
  getAll: async (): Promise<TimeEntry[]> => {
    const response = await apiClient.get<TimeEntry[]>('/time-entries');
    return response.data;
  },

  create: async (data: CreateTimeEntryDto): Promise<TimeEntry> => {
    const response = await apiClient.post<TimeEntry>('/time-entries', data);
    return response.data;
  },
};