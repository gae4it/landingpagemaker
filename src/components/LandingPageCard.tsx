import React from 'react';
import type { LandingPage } from '../types';
import { Button } from './Button';

interface LandingPageCardProps {
  landingPage: LandingPage;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const LandingPageCard: React.FC<LandingPageCardProps> = ({
  landingPage,
  onEdit,
  onDelete
}) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-500 mb-1">Landing Page</h3>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{landingPage.url}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">{landingPage.description}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          Last edited: {formatDate(landingPage.updatedAt)}
        </span>
        
        <div className="flex space-x-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onEdit(landingPage.id)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(landingPage.id)}
          >
            Delete
          </Button>
        </div>
      </div>
      
      {landingPage.sections.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500">
            {landingPage.sections.length} section{landingPage.sections.length !== 1 ? 's' : ''}
          </span>
        </div>
      )}
    </div>
  );
};