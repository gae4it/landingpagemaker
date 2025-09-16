import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            LandingPagesMaker
          </h1>
          <p className="text-gray-600">
            Create and manage landing page content with ease
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => navigate('/add')}
            variant="primary"
            size="lg"
            className="w-full"
          >
            + Add New Landing Page
          </Button>

          <Button
            onClick={() => navigate('/edit')}
            variant="secondary"
            size="lg"
            className="w-full"
          >
            ✏️ Edit Existing Landing Page
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Internal tool for collecting and organizing content
          </p>
        </div>
      </div>
    </div>
  );
};