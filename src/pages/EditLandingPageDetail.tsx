import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useLandingPageStore } from '../store/useLandingPageStore';
import type { Section, SectionFormData } from '../types';
import { Button } from '../components/Button';
import { SectionCard } from '../components/SectionCard';
import { SectionEditor } from '../components/SectionEditor';
import { ConfirmModal } from '../components/ConfirmModal';

export const EditLandingPageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { 
    currentLandingPage, 
    fetchLandingPage, 
    updateLandingPage, 
    addSection,
    updateSection,
    deleteSection,
    reorderSections,
    isLoading, 
    error 
  } = useLandingPageStore();
  
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  
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

  // Fetch landing page on component mount
  useEffect(() => {
    if (id) {
      fetchLandingPage(id);
    }
  }, [id, fetchLandingPage]);

  // Update local state when currentLandingPage changes
  useEffect(() => {
    if (currentLandingPage) {
      setUrl(currentLandingPage.url);
      setDescription(currentLandingPage.description);
    }
  }, [currentLandingPage]);

  // Redirect if landing page not found
  useEffect(() => {
    if (!isLoading && !currentLandingPage && id) {
      navigate('/edit');
    }
  }, [isLoading, currentLandingPage, id, navigate]);

  const handleSaveLandingPage = async () => {
    if (!id || !currentLandingPage) return;

    if (!url.trim()) {
      alert('Please enter a landing page URL');
      return;
    }

    try {
      await updateLandingPage(id, {
        url: url.trim(),
        description: description.trim()
      });
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

  const handleSaveSection = async (sectionData: SectionFormData) => {
    if (!id) return;

    try {
      if (editingSection) {
        // Update existing section
        await updateSection(id, editingSection.id, sectionData);
      } else {
        // Add new section
        await addSection(id, sectionData);
      }
    } catch (error) {
      console.error('Failed to save section:', error);
    }
  };

  const handleDeleteSection = (sectionId: string) => {
    if (!id || !currentLandingPage) return;

    const section = currentLandingPage.sections.find(s => s.id === sectionId);
    if (section) {
      setConfirmModal({
        isOpen: true,
        title: 'Delete Section',
        message: `Are you sure you want to delete the section "${section.name}"?`,
        onConfirm: async () => {
          try {
            await deleteSection(id, sectionId);
          } catch (error) {
            console.error('Failed to delete section:', error);
          }
        }
      });
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    if (!id || !currentLandingPage) return;

    const { active, over } = event;

    if (active.id !== over?.id && over) {
      const sections = currentLandingPage.sections;
      const oldIndex = sections.findIndex(item => item.id === active.id);
      const newIndex = sections.findIndex(item => item.id === over.id);

      const reorderedSections = arrayMove(sections, oldIndex, newIndex);
      
      try {
        await reorderSections(id, reorderedSections);
      } catch (error) {
        console.error('Failed to reorder sections:', error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading landing page...</p>
        </div>
      </div>
    );
  }

  if (!currentLandingPage) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Landing page not found.</p>
          <Button onClick={() => navigate('/edit')}>
            Back to List
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Edit Landing Page</h1>
            <div className="flex space-x-3">
              <Button
                variant="secondary"
                onClick={() => navigate('/edit')}
              >
                Back to List
              </Button>
            </div>
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

            <div className="flex justify-end">
              <Button
                onClick={handleSaveLandingPage}
                disabled={isLoading || !url.trim()}
                variant="primary"
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
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

          {currentLandingPage.sections.length > 0 ? (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext 
                items={currentLandingPage.sections.map(s => s.id)} 
                strategy={horizontalListSortingStrategy}
              >
                <div className="flex space-x-4 overflow-x-auto pb-4">
                  {currentLandingPage.sections.map((section) => (
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