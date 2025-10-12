// Re-export from validations for consistency
export type { Button, Image, Section, LandingPage } from "@/lib/validations";

// Database types with relations
export interface LandingPageWithSections {
  id: string;
  url: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  sections: SectionWithRelations[];
}

export interface SectionWithRelations {
  id: string;
  name: string;
  intro: string | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  order: number;
  landingPageId: string;
  buttons: ButtonWithId[];
  images: ImageWithId[];
}

export interface ButtonWithId {
  id: string;
  label: string;
  linkType: string;
  value: string;
  sectionId: string;
}

export interface ImageWithId {
  id: string;
  url: string;
  alt: string | null;
  sectionId: string;
}