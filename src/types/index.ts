export interface Button {
  label: string;
  linkType: 'url' | 'scroll';
  value: string;
}

export interface Section {
  id: string;
  name: string;
  intro?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: Button[];
  images?: string[]; // max 8 images
}

export interface LandingPage {
  id: string;
  url: string;
  description: string;
  updatedAt: number; // timestamp
  sections: Section[];
}

// Form types for editing
export interface SectionFormData {
  name: string;
  intro?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: Button[];
  images?: string[]; // Keep as string array for final save
}

// Internal form type for react-hook-form
export interface SectionFormInternalData {
  name: string;
  intro?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: Button[];
  images?: { url: string }[]; // Object array for form handling
}

export interface LandingPageFormData {
  url: string;
  description: string;
}