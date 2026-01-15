import { useState, useEffect } from 'react';
import { timeEntriesApi } from '@/services/api';
import { type TimeEntry } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TimeEntryList() {
  const [entries, setEntries] = useState<TimeEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const loadEntries = async () => {
    try {
      setLoading(true);
      const data = await timeEntriesApi.getAll();
      setEntries(data);
    } catch (error) {
      console.error('Error loading entries:', error);
      alert('Failed to load entries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const groupedEntries = entries.reduce((acc, entry) => {
    if (!acc[entry.date]) {
      acc[entry.date] = [];
    }
    acc[entry.date].push(entry);
    return acc;
  }, {} as Record<string, TimeEntry[]>);

  const dates = Object.keys(groupedEntries).sort((a, b) => b.localeCompare(a));

  const getDayTotal = (date: string) => {
    return groupedEntries[date].reduce((sum, entry) => sum + Number(entry.hours), 0);
  };

  const grandTotal = entries.reduce((sum, entry) => sum + Number(entry.hours), 0);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Loading entries...</p>
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-gray-600 mb-4">No entries yet.</p>
          <p className="text-sm text-gray-500">
            Click "Add Entry" button to create your first time entry!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Entry History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {dates.map((date) => (
            <div key={date}>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">{date}</h3>
                <span className="text-sm font-medium text-gray-600">
                  Day Total: {getDayTotal(date).toFixed(2)}h
                </span>
              </div>

              <div className="space-y-2">
                {groupedEntries[date].map((entry) => (
                  <div
                    key={entry.id}
                    className="border rounded-lg p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-gray-900">
                        {entry.project}
                      </span>
                      <span className="text-sm font-medium text-blue-600">
                        {Number(entry.hours).toFixed(2)}h
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{entry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="py-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              Grand Total
            </span>
            <span className="text-2xl font-bold text-blue-600">
              {grandTotal.toFixed(2)}h
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}