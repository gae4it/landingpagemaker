import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useLandingPageStore } from '../store/useLandingPageStore';
import type { Section, SectionFormData } from '../types';
import { Button } from '../components/Button';
import { SectionCard } from '../components/SectionCard';
import { SectionEditor } from '../components/SectionEditor';
import { ConfirmModal } from '../components/ConfirmModal';

export const AddLandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { createLandingPage, isLoading, error } = useLandingPageStore();
  
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [sections, setSections] = useState<Section[]>([]);
  
  // Section editor state
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  
  // Confirm modal state
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {}
  });

  // Drag and drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleSaveLandingPage = async () => {
    if (!url.trim()) {
      alert('Please enter a landing page URL');
      return;
    }

    try {
      const landingPageData = {
        url: url.trim(),
        description: description.trim(),
        sections
      };

      await createLandingPage(landingPageData);
      navigate('/edit');
    } catch (error) {
      console.error('Failed to save landing page:', error);
    }
  };

  const handleAddSection = () => {
    setEditingSection(null);
    setIsEditorOpen(true);
  };

  const handleEditSection = (section: Section) => {
    setEditingSection(section);
    setIsEditorOpen(true);
  };

  const handleSaveSection = (sectionData: SectionFormData) => {
    if (editingSection) {
      // Update existing section
      setSections(sections.map(section => 
        section.id === editingSection.id 
          ? { ...section, ...sectionData }
          : section
      ));
    } else {
      // Add new section
      const newSection: Section = {
        id: crypto.randomUUID(),
        ...sectionData
      };
      setSections([...sections, newSection]);
    }
  };

  const handleDeleteSection = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      setConfirmModal({
        isOpen: true,
        title: 'Delete Section',
        message: `Are you sure you want to delete the section "${section.name}"?`,
        onConfirm: () => {
          setSections(sections.filter(s => s.id !== sectionId));
        }
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id && over) {
      setSections((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Add New Landing Page</h1>
            <Button
              variant="secondary"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Landing Page Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Landing Page
              </label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter landing page URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Landing Page Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter landing page description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Sections</h2>
            <Button onClick={handleAddSection}>
              + Add Section
            </Button>
          </div>

          {sections.length > 0 ? (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={sections.map(s => s.id)} strategy={horizontalListSortingStrategy}>
                <div className="flex space-x-4 overflow-x-auto pb-4">
                  {sections.map((section) => (
                    <SectionCard
                      key={section.id}
                      section={section}
                      onEdit={handleEditSection}
                      onDelete={handleDeleteSection}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No sections added yet.</p>
              <p className="text-sm">Click "Add Section" to get started.</p>
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleSaveLandingPage}
            disabled={isLoading || !url.trim()}
            variant="primary"
            size="lg"
          >
            {isLoading ? 'Saving...' : 'Save Landing Page'}
          </Button>
        </div>

        {/* Section Editor Modal */}
        <SectionEditor
          isOpen={isEditorOpen}
          onClose={() => setIsEditorOpen(false)}
          onSave={handleSaveSection}
          section={editingSection}
          title={editingSection ? 'Edit Section' : 'Add New Section'}
        />

        {/* Confirm Modal */}
        <ConfirmModal
          isOpen={confirmModal.isOpen}
          onClose={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
          onConfirm={confirmModal.onConfirm}
          title={confirmModal.title}
          message={confirmModal.message}
        />
      </div>
    </div>
  );
};