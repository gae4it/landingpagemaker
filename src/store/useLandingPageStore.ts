import { create } from "zustand";
import type { Section } from "@/lib/validations";

interface LandingPageStore {
  // Current editing state
  isEditorOpen: boolean;
  editingSection: Section | null;
  
  // Section management
  sections: Section[];
  setSections: (sections: Section[]) => void;
  addSection: (section: Section) => void;
  updateSection: (section: Section) => void;
  deleteSection: (id: string) => void;
  moveSection: (fromIndex: number, toIndex: number) => void;
  
  // Modal management
  setEditorOpen: (open: boolean) => void;
  setEditingSection: (section: Section | null) => void;
  
  // Reset store
  reset: () => void;
}

const initialState = {
  isEditorOpen: false,
  editingSection: null,
  sections: [],
};

export const useLandingPageStore = create<LandingPageStore>((set, get) => ({
  ...initialState,
  
  setSections: (sections) => set({ sections }),
  
  addSection: (section) => {
    const { sections } = get();
    set({ sections: [...sections, { ...section, id: crypto.randomUUID() }] });
  },
  
  updateSection: (updatedSection) => {
    const { sections } = get();
    set({
      sections: sections.map(section =>
        section.id === updatedSection.id ? updatedSection : section
      ),
    });
  },
  
  deleteSection: (id) => {
    const { sections } = get();
    set({ sections: sections.filter(section => section.id !== id) });
  },
  
  moveSection: (fromIndex, toIndex) => {
    const { sections } = get();
    const newSections = [...sections];
    const [movedSection] = newSections.splice(fromIndex, 1);
    if (movedSection) {
      newSections.splice(toIndex, 0, movedSection);
      set({ sections: newSections });
    }
  },
  
  setEditorOpen: (isEditorOpen) => set({ isEditorOpen }),
  
  setEditingSection: (editingSection) => set({ editingSection }),
  
  reset: () => set(initialState),
}));