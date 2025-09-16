import React, { useEffect } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useForm, useFieldArray } from 'react-hook-form';
import type { Section, SectionFormData, SectionFormInternalData } from '../types';
import { Button } from './Button';

interface SectionEditorProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (sectionData: SectionFormData) => void;
  section?: Section | null;
  title: string;
}

export const SectionEditor: React.FC<SectionEditorProps> = ({
  isOpen,
  onClose,
  onSave,
  section,
  title
}) => {
  const { register, control, handleSubmit, reset, formState: { errors } } = useForm<SectionFormInternalData>({
    defaultValues: {
      name: '',
      intro: '',
      title: '',
      subtitle: '',
      description: '',
      buttons: [],
      images: []
    }
  });

  const { fields: buttonFields, append: appendButton, remove: removeButton } = useFieldArray({
    control,
    name: 'buttons'
  });

  const { fields: imageFields, append: appendImage, remove: removeImage } = useFieldArray({
    control,
    name: 'images'
  });

  // Reset form when section changes
  useEffect(() => {
    if (section) {
      reset({
        name: section.name,
        intro: section.intro || '',
        title: section.title || '',
        subtitle: section.subtitle || '',
        description: section.description || '',
        buttons: section.buttons || [],
        images: section.images?.map(url => ({ url })) || []
      });
    } else {
      reset({
        name: '',
        intro: '',
        title: '',
        subtitle: '',
        description: '',
        buttons: [],
        images: []
      });
    }
  }, [section, reset, isOpen]);

  const onSubmit = (data: SectionFormInternalData) => {
    // Filter out empty buttons and images, convert images back to string array
    const cleanedData: SectionFormData = {
      ...data,
      buttons: data.buttons?.filter(button => button.label.trim() && button.value.trim()) || [],
      images: data.images?.map(img => img.url).filter(url => url.trim()) || []
    };
    
    onSave(cleanedData);
    onClose();
  };

  const addButton = () => {
    if (buttonFields.length < 3) {
      appendButton({ label: '', linkType: 'url', value: '' });
    }
  };

  const addImage = () => {
    if (imageFields.length < 8) {
      appendImage({ url: '' });
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/25" aria-hidden="true" />
      
      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
          <DialogTitle className="text-lg font-medium text-gray-900 mb-6">
            {title}
          </DialogTitle>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Section Name - Required */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Section Name *
              </label>
              <input
                type="text"
                {...register('name', { required: 'Section name is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter section name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Intro */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Intro (~80 characters)
              </label>
              <input
                type="text"
                {...register('intro')}
                maxLength={80}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief introduction"
              />
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title (~80 characters)
              </label>
              <input
                type="text"
                {...register('title')}
                maxLength={80}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Section title"
              />
            </div>

            {/* Subtitle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subtitle (~160 characters)
              </label>
              <input
                type="text"
                {...register('subtitle')}
                maxLength={160}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Section subtitle"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                {...register('description')}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Detailed description"
              />
            </div>

            {/* Buttons */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Buttons (max 3)
                </label>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={addButton}
                  disabled={buttonFields.length >= 3}
                >
                  Add Button
                </Button>
              </div>
              
              {buttonFields.map((field, index) => (
                <div key={field.id} className="border border-gray-200 rounded-lg p-4 mb-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Label
                      </label>
                      <input
                        type="text"
                        {...register(`buttons.${index}.label` as const)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                        placeholder="Button text"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Link Type
                      </label>
                      <select
                        {...register(`buttons.${index}.linkType` as const)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="url">URL</option>
                        <option value="scroll">Scroll Target</option>
                      </select>
                    </div>
                    
                    <div className="flex space-x-2">
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Value
                        </label>
                        <input
                          type="text"
                          {...register(`buttons.${index}.value` as const)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                          placeholder="URL or scroll target"
                        />
                      </div>
                      <div className="flex items-end">
                        <Button
                          type="button"
                          variant="danger"
                          size="sm"
                          onClick={() => removeButton(index)}
                        >
                          ×
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Images */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Images (max 8)
                </label>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={addImage}
                  disabled={imageFields.length >= 8}
                >
                  Add Image
                </Button>
              </div>
              
              {imageFields.map((field, index) => (
                <div key={field.id} className="flex space-x-2 mb-2">
                  <input
                    type="url"
                    {...register(`images.${index}.url` as const)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Image URL"
                  />
                  <Button
                    type="button"
                    variant="danger"
                    size="sm"
                    onClick={() => removeImage(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
              <Button
                type="button"
                variant="secondary"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
              >
                Save Section
              </Button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};