import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => navigate('/')}
            variant="primary"
            size="lg"
            className="w-full"
          >
            Go to Home
          </Button>

          <Button
            onClick={() => navigate('/edit')}
            variant="secondary"
            size="lg"
            className="w-full"
          >
            View Landing Pages
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            LandingPagesMaker - Internal Tool
          </p>
        </div>
      </div>
    </div>
  );
};