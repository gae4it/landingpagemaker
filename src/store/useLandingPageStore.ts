import { create } from 'zustand';
import type { LandingPage, Section } from '../types';
import { firebaseService } from '../services/firebase';

interface LandingPageStore {
  // State
  landingPages: LandingPage[];
  currentLandingPage: LandingPage | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  
  // Landing Page Actions
  fetchLandingPages: () => Promise<void>;
  fetchLandingPage: (id: string) => Promise<void>;
  createLandingPage: (landingPage: Omit<LandingPage, 'id' | 'updatedAt'>) => Promise<string>;
  updateLandingPage: (id: string, updates: Partial<Omit<LandingPage, 'id'>>) => Promise<void>;
  deleteLandingPage: (id: string) => Promise<void>;
  
  // Section Actions
  addSection: (landingPageId: string, section: Omit<Section, 'id'>) => Promise<void>;
  updateSection: (landingPageId: string, sectionId: string, updates: Partial<Section>) => Promise<void>;
  deleteSection: (landingPageId: string, sectionId: string) => Promise<void>;
  reorderSections: (landingPageId: string, sections: Section[]) => Promise<void>;
  
  // Local state management
  setCurrentLandingPage: (landingPage: LandingPage | null) => void;
  clearError: () => void;
}

export const useLandingPageStore = create<LandingPageStore>((set, get) => ({
  // Initial state
  landingPages: [],
  currentLandingPage: null,
  isLoading: false,
  error: null,

  // Basic setters
  setError: (error) => set({ error }),
  setLoading: (isLoading) => set({ isLoading }),
  setCurrentLandingPage: (currentLandingPage) => set({ currentLandingPage }),
  clearError: () => set({ error: null }),

  // Fetch all landing pages
  fetchLandingPages: async () => {
    set({ isLoading: true, error: null });
    try {
      const landingPages = await firebaseService.getAllLandingPages();
      set({ landingPages, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch landing pages',
        isLoading: false 
      });
    }
  },

  // Fetch single landing page
  fetchLandingPage: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const landingPage = await firebaseService.getLandingPage(id);
      set({ currentLandingPage: landingPage, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch landing page',
        isLoading: false 
      });
    }
  },

  // Create new landing page
  createLandingPage: async (landingPageData) => {
    set({ isLoading: true, error: null });
    try {
      const id = await firebaseService.createLandingPage(landingPageData);
      
      // Refresh the list
      await get().fetchLandingPages();
      
      set({ isLoading: false });
      return id;
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to create landing page',
        isLoading: false 
      });
      throw error;
    }
  },

  // Update landing page
  updateLandingPage: async (id: string, updates) => {
    set({ isLoading: true, error: null });
    try {
      await firebaseService.updateLandingPage(id, updates);
      
      // Update local state
      const { landingPages, currentLandingPage } = get();
      
      // Update in the list
      const updatedLandingPages = landingPages.map(lp => 
        lp.id === id ? { ...lp, ...updates, updatedAt: Date.now() } : lp
      );
      
      // Update current if it's the same one
      const updatedCurrentLandingPage = currentLandingPage?.id === id 
        ? { ...currentLandingPage, ...updates, updatedAt: Date.now() }
        : currentLandingPage;

      set({ 
        landingPages: updatedLandingPages,
        currentLandingPage: updatedCurrentLandingPage,
        isLoading: false 
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to update landing page',
        isLoading: false 
      });
    }
  },

  // Delete landing page
  deleteLandingPage: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      await firebaseService.deleteLandingPage(id);
      
      // Update local state
      const { landingPages, currentLandingPage } = get();
      const updatedLandingPages = landingPages.filter(lp => lp.id !== id);
      const updatedCurrentLandingPage = currentLandingPage?.id === id ? null : currentLandingPage;

      set({ 
        landingPages: updatedLandingPages,
        currentLandingPage: updatedCurrentLandingPage,
        isLoading: false 
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to delete landing page',
        isLoading: false 
      });
    }
  },

  // Add section to landing page
  addSection: async (landingPageId: string, sectionData) => {
    const { currentLandingPage } = get();
    if (!currentLandingPage || currentLandingPage.id !== landingPageId) return;

    const newSection: Section = {
      id: crypto.randomUUID(),
      ...sectionData
    };

    const updatedSections = [...currentLandingPage.sections, newSection];
    await get().updateLandingPage(landingPageId, { sections: updatedSections });
  },

  // Update section
  updateSection: async (landingPageId: string, sectionId: string, updates) => {
    const { currentLandingPage } = get();
    if (!currentLandingPage || currentLandingPage.id !== landingPageId) return;

    const updatedSections = currentLandingPage.sections.map(section =>
      section.id === sectionId ? { ...section, ...updates } : section
    );

    await get().updateLandingPage(landingPageId, { sections: updatedSections });
  },

  // Delete section
  deleteSection: async (landingPageId: string, sectionId: string) => {
    const { currentLandingPage } = get();
    if (!currentLandingPage || currentLandingPage.id !== landingPageId) return;

    const updatedSections = currentLandingPage.sections.filter(section => section.id !== sectionId);
    await get().updateLandingPage(landingPageId, { sections: updatedSections });
  },

  // Reorder sections
  reorderSections: async (landingPageId: string, sections: Section[]) => {
    await get().updateLandingPage(landingPageId, { sections });
  }
}));