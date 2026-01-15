import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TimeEntryForm from '@/components/TimeTracker/TimeEntryForm';
import { Button } from '@/components/ui/button';

export default function AddEntryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <header className="mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to List
            </Button>
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900">
            Add Time Entry
          </h1>
          <p className="text-gray-600 mt-2">
            Record your work hours for a project
          </p>
        </header>

        <TimeEntryForm />
      </div>
    </div>
  );
}