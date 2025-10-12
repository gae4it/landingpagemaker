"use client";

import { useState, use } from "react";
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
import { ExportButton } from "@/components/ExportButton";
import { ConfirmModal } from "@/components/ConfirmModal";
import { api } from "@/trpc/react";
import { landingPageSchema, MAX_SECTIONS_PER_PAGE } from "@/lib/validations";
import type { LandingPage, Section } from "@/lib/validations";

interface EditLandingPageProps {
  params: Promise<{ id: string }>;
}

export default function EditLandingPage({ params }: EditLandingPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [sectionToDelete, setSectionToDelete] = useState<string | null>(null);

  const { data: landingPage, refetch } = api.landingPage.getById.useQuery({ id });

  const updateLandingPage = api.landingPage.update.useMutation({
    onSuccess: () => {
      toast.success("Landing page updated successfully!");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const createSection = api.section.create.useMutation({
    onSuccess: () => {
      toast.success("Section added successfully!");
      refetch();
      setIsEditorOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateSection = api.section.update.useMutation({
    onSuccess: () => {
      toast.success("Section updated successfully!");
      refetch();
      setIsEditorOpen(false);
      setEditingSection(null);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const deleteSection = api.section.delete.useMutation({
    onSuccess: () => {
      toast.success("Section deleted successfully!");
      refetch();
      setDeleteModalOpen(false);
      setSectionToDelete(null);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const moveSectionUp = api.section.moveUp.useMutation({
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const moveSectionDown = api.section.moveDown.useMutation({
    onSuccess: () => {
      refetch();
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
    resolver: zodResolver(landingPageSchema.pick({ url: true, description: true })),
    values: {
      url: landingPage?.url || "",
      description: landingPage?.description || "",
    },
  });

  const onSubmit = (data: Pick<LandingPage, "url" | "description">) => {
    updateLandingPage.mutate({
      id,
      ...data,
    });
  };

  const handleAddSection = (section: Section) => {
    createSection.mutate({
      landingPageId: id,
      name: section.name,
      intro: section.intro,
      title: section.title,
      subtitle: section.subtitle,
      description: section.description,
      buttons: section.buttons,
      images: section.images,
    });
  };

  const handleEditSection = (section: any) => {
    setEditingSection({
      id: section.id,
      name: section.name,
      intro: section.intro || "",
      title: section.title || "",
      subtitle: section.subtitle || "",
      description: section.description || "",
      buttons: section.buttons || [],
      images: section.images || [],
    });
    setIsEditorOpen(true);
  };

  const handleUpdateSection = (section: Section) => {
    if (!section.id) return;
    updateSection.mutate({
      id: section.id,
      name: section.name,
      intro: section.intro,
      title: section.title,
      subtitle: section.subtitle,
      description: section.description,
      buttons: section.buttons,
      images: section.images,
    });
  };

  const handleDeleteSection = (sectionId: string) => {
    setSectionToDelete(sectionId);
    setDeleteModalOpen(true);
  };

  const confirmDeleteSection = () => {
    if (sectionToDelete) {
      deleteSection.mutate({ id: sectionToDelete });
    }
  };

  const handleMoveUp = (sectionId: string) => {
    moveSectionUp.mutate({ id: sectionId });
  };

  const handleMoveDown = (sectionId: string) => {
    moveSectionDown.mutate({ id: sectionId });
  };

  if (!landingPage) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading landing page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/edit" className="text-blue-600 hover:text-blue-700">
            ← Back to Landing Pages
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Edit Landing Page</h1>
            <ExportButton landingPageId={id} />
          </div>
          
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

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={updateLandingPage.isPending}
              >
                {updateLandingPage.isPending ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </div>

        {/* Sections */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Sections ({landingPage.sections.length}/{MAX_SECTIONS_PER_PAGE})
            </h2>
            <Button
              onClick={() => setIsEditorOpen(true)}
              disabled={landingPage.sections.length >= MAX_SECTIONS_PER_PAGE}
            >
              + Add Section
            </Button>
          </div>

          {landingPage.sections.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No sections added yet. Click "Add Section" to get started.
            </div>
          ) : (
            <div className="space-y-4">
              {landingPage.sections.map((section, index) => (
                <SectionCard
                  key={section.id}
                  section={{
                    id: section.id,
                    name: section.name,
                    intro: section.intro || undefined,
                    title: section.title || undefined,
                    subtitle: section.subtitle || undefined,
                    description: section.description || undefined,
                    buttons: section.buttons || [],
                    images: section.images || [],
                  }}
                  onEdit={() => handleEditSection(section)}
                  onDelete={() => handleDeleteSection(section.id)}
                  onMoveUp={() => handleMoveUp(section.id)}
                  onMoveDown={() => handleMoveDown(section.id)}
                  canMoveUp={index > 0}
                  canMoveDown={index < landingPage.sections.length - 1}
                />
              ))}
            </div>
          )}
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

      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setSectionToDelete(null);
        }}
        onConfirm={confirmDeleteSection}
        title="Delete Section"
        message="Are you sure you want to delete this section? This action cannot be undone."
        isLoading={deleteSection.isPending}
      />
    </div>
  );
}