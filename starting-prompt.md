https://github.com/gae4it/landingpagemaker

✅ FINAL PROMPT: LandingPagesMaker
🧰 Tech Stack

Use the following technologies:

Tool/Library	Purpose
React (Vite)	Frontend UI framework
Typescript
TailwindCSS	CSS utility-first styling
Zustand	Global state management
Firebase Firestore	Realtime cloud database (NoSQL)
dnd-kit	Drag-and-drop for reordering sections
uuid	Generate unique IDs
react-router-dom	Client-side routing
@headlessui/react (optional)	Accessible modal/dialog UI
React Hook Form (optional)	For better form management
📌 Global Rules & Guidelines

All app interface text must be written in English

All code comments must be in English

The app should be publicly accessible without authentication

All data must be persistently stored in Firebase Firestore

The app must be responsive, but design should prioritize functionality over visuals

🏁 Project Goal

Build a web-based internal tool called LandingPagesMaker, designed to collect and organize textual and media content from coworkers for landing page creation.

🏠 App Pages Overview
/ - Home Page

Contains two main buttons:

+ Add New Landing Page

Directly opens a page to create a new landing page with sections

✏️ Edit Existing Landing Page

Opens the list of existing landing pages

/add - Add New Landing Page

Display the following editable fields at the top:

Fixed title: "Landing Page"

Input: Landing Page URL (editable)

Textarea: Landing Page Description (editable)

Underneath:

+ Add Section button

Display existing sections as horizontal draggable cards using dnd-kit

Each Section Card contains:

Fixed label: "Section"

The section name (required)

Edit button

Red delete button (with confirmation popup:
Are you sure you want to delete this Section?)

/edit - Edit Existing Landing Pages

Show a search field at the top to filter by landing page name

Display a list of saved landing pages, ordered by last edited date (descending)

Each Landing Page Card displays:

"Landing Page" (fixed label)

The landing page URL

The project description

Edit button

Red Delete button (with confirmation popup:
Are you sure you want to delete this Landing Page?)

/edit/:id - Edit a Landing Page

At the top:

"Landing Page" (fixed label)

Editable input for: Landing Page URL

Editable textarea for: Landing Page Description

Below:

+ Add Section button

List of section cards shown horizontally

Support drag-and-drop reordering

Section Editor (modal or inline component)

When adding or editing a section, provide a form with these fields:

Field	Type	Required	Notes
Section Name	Text	✅ Yes	Required field
Intro	Short text	❌ No	~80 characters
Title	Short text	❌ No	~80 characters
Subtitle	Medium text	❌ No	~160 characters
Description	Long text	❌ No	No length limit
Button 1-3	Object	❌ No	Each: Label + URL or scroll target
Images 1–8	Image URL	❌ No	Allow uploading or pasting 8 image URLs

Each button should include:

{
  label: string;
  linkType: 'url' | 'scroll';
  value: string;
}


Each image:

images: string[]; // Array of image URLs, max length = 8

🧱 React Component Structure
src/
├── components/
│   ├── SectionCard.tsx
│   ├── LandingPageCard.tsx
│   ├── SectionEditor.tsx
│   ├── ConfirmModal.tsx
│   ├── SearchBar.tsx
│   └── Button.tsx
│
├── pages/
│   ├── HomePage.tsx
│   ├── AddLandingPage.tsx
│   ├── EditLandingPageList.tsx
│   ├── EditLandingPageDetail.tsx
│   └── NotFound.tsx
│
├── store/
│   └── useLandingPageStore.ts
│
├── services/
│   └── firebase.ts
│
├── types/
│   └── index.ts
│
├── App.tsx
└── main.tsx

🗃️ Firestore Data Structure

Collection: landingPages

LandingPage {
  id: string;
  url: string;
  description: string;
  updatedAt: number; // timestamp
  sections: Section[];
}

Section {
  id: string;
  name: string;
  intro?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: {
    label: string;
    linkType: 'url' | 'scroll';
    value: string;
  }[];
  images?: string[]; // max 8
}

🧠 Zustand Store Sample
type LandingPage = {
  id: string;
  url: string;
  description: string;
  updatedAt: number;
  sections: Section[];
};

type Section = {
  id: string;
  name: string;
  intro?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: Button[];
  images?: string[];
};

type Button = {
  label: string;
  linkType: 'url' | 'scroll';
  value: string;
};

📝 Files to Be Created
1. README.md

A clear and detailed explanation of:

Project purpose

How to run it locally

Tech stack used

Folder structure

Firebase setup instructions

Deployment notes

💡 This README must be AI-friendly so that AI tools can understand how to contribute to the codebase.

2. CHANGES.md

Every AI or human developer working on the project must log all remaining tasks and changes here.

Use bullet points and dates.

Example:

## Remaining Tasks – 2025-09-16

- [ ] Add image upload to Section Editor
- [ ] Implement drag-and-drop with dnd-kit
- [ ] Wire Zustand store with Firestore

3. .github/github-instructions.md

A special guide for AI coding agents or contributors:

What files to edit

Naming conventions

How to log changes in CHANGES.md

What parameters/configs are required

Deployment checklist (e.g., Firebase config keys)

Example content:

# GitHub AI Instructions

- All code comments must be in English
- Always update `CHANGES.md` after any edit
- Do not include unused imports
- Follow the component structure defined in README.md
- Use Tailwind utility classes for all styling

✅ Final Notes

No user authentication

Public and open access

All strings, placeholders, UI texts, and comments must be in English

App must be responsive, but prioritize function over aesthetics

All data must be stored persistently in Firebase Firestore

Deletion of sections or landing pages must require confirmation popup