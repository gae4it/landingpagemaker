"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { SectionCard } from "@/components/SectionCard";
import { SectionEditor } from "@/components/SectionEditor";
import { api } from "@/trpc/react";
import { landingPageSchema, MAX_SECTIONS_PER_PAGE } from "@/lib/validations";
import type { LandingPage, Section } from "@/lib/validations";

export default function AddLandingPage() {
  const router = useRouter();
  const [sections, setSections] = useState<Section[]>([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<Section | null>(null);

  const createLandingPage = api.landingPage.create.useMutation({
    onSuccess: (data) => {
      toast.success("Landing page created successfully!");
      router.push(`/edit/${data.id}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LandingPage>({
    resolver: zodResolver(landingPageSchema),
  });

  const onSubmit = (data: LandingPage) => {
    createLandingPage.mutate({
      ...data,
      sections: sections.map(({ id, ...section }, index) => ({
        ...section,
        order: index,
      })),
    });
  };

  const handleAddSection = (section: Section) => {
    if (sections.length >= MAX_SECTIONS_PER_PAGE) {
      toast.error(`Maximum ${MAX_SECTIONS_PER_PAGE} sections allowed`);
      return;
    }
    setSections([...sections, { ...section, id: crypto.randomUUID() }]);
    setIsEditorOpen(false);
  };

  const handleEditSection = (section: Section) => {
    setEditingSection(section);
    setIsEditorOpen(true);
  };

  const handleUpdateSection = (updatedSection: Section) => {
    setSections(sections.map(s => s.id === updatedSection.id ? updatedSection : s));
    setIsEditorOpen(false);
    setEditingSection(null);
  };

  const handleDeleteSection = (id: string) => {
    setSections(sections.filter(s => s.id !== id));
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newSections = [...sections];
    [newSections[index - 1], newSections[index]] = [newSections[index], newSections[index - 1]];
    setSections(newSections);
  };

  const handleMoveDown = (index: number) => {
    if (index === sections.length - 1) return;
    const newSections = [...sections];
    [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
    setSections(newSections);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Landing Page</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Landing Page URL"
              type="url"
              placeholder="https://example.com"
              error={errors.url?.message}
              {...register("url")}
            />

            <Textarea
              label="Landing Page Description"
              placeholder="Describe your landing page..."
              rows={3}
              error={errors.description?.message}
              {...register("description")}
            />

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Sections ({sections.length}/{MAX_SECTIONS_PER_PAGE})
                </h2>
                <Button
                  type="button"
                  onClick={() => setIsEditorOpen(true)}
                  disabled={sections.length >= MAX_SECTIONS_PER_PAGE}
                >
                  + Add Section
                </Button>
              </div>

              {sections.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No sections added yet. Click "Add Section" to get started.
                </div>
              ) : (
                <div className="space-y-4">
                  {sections.map((section, index) => (
                    <SectionCard
                      key={section.id}
                      section={section}
                      onEdit={() => handleEditSection(section)}
                      onDelete={() => handleDeleteSection(section.id!)}
                      onMoveUp={() => handleMoveUp(index)}
                      onMoveDown={() => handleMoveDown(index)}
                      canMoveUp={index > 0}
                      canMoveDown={index < sections.length - 1}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-4">
              <Link href="/">
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                disabled={createLandingPage.isPending || sections.length === 0}
              >
                {createLandingPage.isPending ? "Saving..." : "Save Landing Page"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <SectionEditor
        isOpen={isEditorOpen}
        onClose={() => {
          setIsEditorOpen(false);
          setEditingSection(null);
        }}
        onSave={editingSection ? handleUpdateSection : handleAddSection}
        section={editingSection}
      />
    </div>
  );
}