import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Mini Time Tracker
            </h1>
            <p className="text-gray-600 mt-2">
              Track your work hours across different projects
            </p>
          </div>
          
          <Link to="/add">
            <Button size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Add Entry
            </Button>
          </Link>
        </header>
      </div>
    </div>
  );
}