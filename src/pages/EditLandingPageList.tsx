import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLandingPageStore } from '../store/useLandingPageStore';
import { Button } from '../components/Button';
import { SearchBar } from '../components/SearchBar';
import { LandingPageCard } from '../components/LandingPageCard';
import { ConfirmModal } from '../components/ConfirmModal';

export const EditLandingPageList: React.FC = () => {
  const navigate = useNavigate();
  const { landingPages, fetchLandingPages, deleteLandingPage, isLoading, error } = useLandingPageStore();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    landingPageId: string;
    landingPageUrl: string;
  }>({
    isOpen: false,
    landingPageId: '',
    landingPageUrl: ''
  });

  // Fetch landing pages on component mount
  useEffect(() => {
    fetchLandingPages();
  }, [fetchLandingPages]);

  // Filter landing pages based on search query
  const filteredLandingPages = landingPages.filter(landingPage =>
    landingPage.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
    landingPage.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (id: string) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id: string) => {
    const landingPage = landingPages.find(lp => lp.id === id);
    if (landingPage) {
      setConfirmModal({
        isOpen: true,
        landingPageId: id,
        landingPageUrl: landingPage.url
      });
    }
  };

  const confirmDelete = async () => {
    if (confirmModal.landingPageId) {
      try {
        await deleteLandingPage(confirmModal.landingPageId);
        setConfirmModal({ isOpen: false, landingPageId: '', landingPageUrl: '' });
      } catch (error) {
        console.error('Failed to delete landing page:', error);
      }
    }
  };

  const closeConfirmModal = () => {
    setConfirmModal({ isOpen: false, landingPageId: '', landingPageUrl: '' });
  };

  if (isLoading && landingPages.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading landing pages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Edit Existing Landing Pages</h1>
            <div className="flex space-x-3">
              <Button
                variant="secondary"
                onClick={() => navigate('/add')}
              >
                + Add New
              </Button>
              <Button
                variant="secondary"
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by URL or description..."
            className="max-w-md"
          />
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Landing Pages Grid */}
        {filteredLandingPages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLandingPages.map((landingPage) => (
              <LandingPageCard
                key={landingPage.id}
                landingPage={landingPage}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            {searchQuery ? (
              <div>
                <p className="text-gray-500 mb-2">No landing pages found matching "{searchQuery}"</p>
                <Button
                  variant="secondary"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </Button>
              </div>
            ) : landingPages.length === 0 ? (
              <div>
                <p className="text-gray-500 mb-4">No landing pages created yet.</p>
                <Button
                  variant="primary"
                  onClick={() => navigate('/add')}
                >
                  Create Your First Landing Page
                </Button>
              </div>
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </div>
        )}

        {/* Results count */}
        {landingPages.length > 0 && (
          <div className="mt-8 text-center text-sm text-gray-500">
            Showing {filteredLandingPages.length} of {landingPages.length} landing page{landingPages.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        )}

        {/* Confirm Delete Modal */}
        <ConfirmModal
          isOpen={confirmModal.isOpen}
          onClose={closeConfirmModal}
          onConfirm={confirmDelete}
          title="Delete Landing Page"
          message={`Are you sure you want to delete the landing page "${confirmModal.landingPageUrl}"? This action cannot be undone.`}
          confirmText="Delete"
          cancelText="Cancel"
        />
      </div>
    </div>
  );
};