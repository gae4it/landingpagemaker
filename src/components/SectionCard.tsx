import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Section } from '../types';
import { Button } from './Button';

interface SectionCardProps {
  section: Section;
  onEdit: (section: Section) => void;
  onDelete: (sectionId: string) => void;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  section,
  onEdit,
  onDelete
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border border-gray-200 rounded-lg p-4 min-w-[280px] hover:shadow-md transition-shadow"
    >
      {/* Drag handle */}
      <div
        {...attributes}
        {...listeners}
        className="flex items-center mb-3 cursor-grab active:cursor-grabbing"
      >
        <svg 
          className="w-4 h-4 text-gray-400 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
        <span className="text-sm font-medium text-gray-500">Section</span>
      </div>

      {/* Section content */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{section.name}</h3>
        
        {section.intro && (
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Intro:</span> {section.intro}
          </p>
        )}
        
        {section.title && (
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Title:</span> {section.title}
          </p>
        )}
        
        {section.subtitle && (
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Subtitle:</span> {section.subtitle}
          </p>
        )}
        
        {section.description && (
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Description:</span> {section.description.substring(0, 100)}
            {section.description.length > 100 && '...'}
          </p>
        )}
        
        {section.buttons && section.buttons.length > 0 && (
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Buttons:</span> {section.buttons.length}
          </p>
        )}
        
        {section.images && section.images.length > 0 && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">Images:</span> {section.images.length}
          </p>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex justify-end space-x-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onEdit(section)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(section.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};