"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { LandingPageCard } from "@/components/LandingPageCard";
import { ConfirmModal } from "@/components/ConfirmModal";
import { api } from "@/trpc/react";
import { MAX_LANDING_PAGES } from "@/lib/validations";

export default function EditLandingPages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data: landingPages = [], refetch } = api.landingPage.getAll.useQuery();

  const deleteLandingPage = api.landingPage.delete.useMutation({
    onSuccess: () => {
      toast.success("Landing page deleted successfully!");
      void refetch();
      setDeleteId(null);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const filteredPages = landingPages.filter(
    (page) =>
      page.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    deleteLandingPage.mutate({ id });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Edit Landing Pages ({landingPages.length}/{MAX_LANDING_PAGES})
            </h1>
            <Link href="/add">
              <Button>+ Add New</Button>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <Input
              placeholder="Search by URL or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>

          {/* Landing Pages Grid */}
          {filteredPages.length === 0 ? (
            <div className="text-center py-12">
              {searchQuery ? (
                <div>
                  <p className="text-gray-500 mb-2">No landing pages found matching your search.</p>
                  <Button
                    variant="ghost"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear search
                  </Button>
                </div>
              ) : (
                <div>
                  <p className="text-gray-500 mb-4">No landing pages created yet.</p>
                  <Link href="/add">
                    <Button>Create your first landing page</Button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPages.map((page) => (
                <LandingPageCard
                  key={page.id}
                  landingPage={page}
                  onDelete={() => setDeleteId(page.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <ConfirmModal
        isOpen={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={() => deleteId && handleDelete(deleteId)}
        title="Delete Landing Page"
        message="Are you sure you want to delete this landing page? This action cannot be undone and will also delete all associated sections."
        isLoading={deleteLandingPage.isPending}
      />
    </div>
  );
}