# LandingPageMaker - T3 Stack with Neon PostgreSQL

## Project Brief

Create a complete **LandingPageMaker** web application using **T3 Stack** (Next.js 15, TypeScript, tRPC, Prisma, Tailwind CSS) with **Neon PostgreSQL** database. This is an internal tool for collecting and organizing textual and media content from coworkers for landing page creation.

## 🎯 Key Project Specifications

- **Images**: External URLs only (no upload functionality)
- **Preview**: No landing page preview needed
- **Export**: TXT format export functionality
- **Design**: Modern simple cards with rounded borders, no animations
- **Drag&Drop**: Simple implementation with up/down buttons (universal desktop/mobile)
- **Limits**: Max 25 sections per landing page, max 250 landing pages total
- **Notifications**: react-hot-toast library
- **Authentication**: None required (publicly accessible)
- **Database**: Existing Neon account will be used

## 🧰 Tech Stack Requirements

| Tool/Library          | Purpose                                              |
| --------------------- | ---------------------------------------------------- |
| **Next.js 15**        | Frontend framework with App Router                   |
| **TypeScript**        | Type safety throughout the application               |
| **tRPC**              | Type-safe API layer (replaces REST endpoints)        |
| **Prisma**            | ORM for PostgreSQL database operations               |
| **Neon PostgreSQL**   | Serverless PostgreSQL 16 database (existing account) |
| **Tailwind CSS**      | Utility-first CSS framework                          |
| **Zustand**           | Client-side state management                         |
| **React Hook Form**   | Form validation and management                       |
| **@headlessui/react** | Accessible modal/dialog components                   |
| **Zod**               | Schema validation for tRPC and forms                 |
| **react-hot-toast**   | Toast notifications library                          |

## 🎯 Project Requirements

### Global Rules

- All interface text and code comments must be in **English**
- No authentication required (publicly accessible)
- All data must be persistently stored in **Neon PostgreSQL**
- Responsive design with modern simple cards (rounded borders, no animations)
- All landing pages and sections must be deletable with confirmation modals
- **Limits**: Maximum 250 landing pages, maximum 25 sections per landing page
- **Images**: External URLs only (no file upload)
- **Export**: TXT format export functionality required
- **Section Reordering**: Up/down buttons (universal for desktop/mobile)

### Database Schema (Prisma)

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model LandingPage {
  id          String   @id @default(cuid())
  url         String
  description String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  sections    Section[]

  @@map("landing_pages")
}

model Section {
  id            String      @id @default(cuid())
  name          String
  intro         String?
  title         String?
  subtitle      String?
  description   String?
  order         Int         @default(0)
  landingPageId String
  landingPage   LandingPage @relation(fields: [landingPageId], references: [id], onDelete: Cascade)
  buttons       Button[]
  images        Image[]

  @@map("sections")
}

model Button {
  id        String  @id @default(cuid())
  label     String
  linkType  String  // "url" | "scroll"
  value     String
  sectionId String
  section   Section @relation(fields: [sectionId], references: [id], onDelete: Cascade)

  @@map("buttons")
}

model Image {
  id        String  @id @default(cuid())
  url       String
  alt       String?
  sectionId String
  section   Section @relation(fields: [sectionId], references: [id], onDelete: Cascade)

  @@map("images")
}
```

## 📱 App Pages & Routing

### 1. `/` - Home Page

- **Layout**: Centered card with navigation buttons
- **Components**:
  - Large heading: "LandingPageMaker"
  - Description: "Create and manage landing page content with ease"
  - Two main buttons:
    - **"+ Add New Landing Page"** → Navigate to `/add`
    - **"✏️ Edit Existing Landing Page"** → Navigate to `/edit`

### 2. `/add` - Add New Landing Page

- **Top Section**: Landing page details form
  - **Field**: "Landing Page URL" (required, type: url validation only)
  - **Field**: "Landing Page Description" (textarea)
- **Sections Area**:
  - **Button**: "+ Add Section" (opens SectionEditor modal, max 25 sections)
  - **Display**: Modern simple cards with rounded borders
  - **Features**: Up/down buttons for reordering (universal desktop/mobile)
  - **Save Button**: "Save Landing Page" (creates record and navigates to `/edit`)

### 3. `/edit` - Edit Existing Landing Pages List

- **Search Bar**: Filter landing pages by URL or description
- **Landing Page Cards**: Modern simple cards with rounded borders, grid/list format, ordered by `updatedAt DESC`
- **Limit Notice**: Show "X/250 landing pages" counter
- **Each Card Shows**:
  - Label: "Landing Page"
  - URL (clickable external link)
  - Description (truncated if long)
  - Last updated date
  - Section count: "X/25 sections"
  - **"Edit" button** → Navigate to `/edit/[id]`
  - **"Delete" button** → Show confirmation modal

### 4. `/edit/[id]` - Edit Landing Page Detail

- **Top Section**: Editable landing page details
  - URL input (pre-filled)
  - Description textarea (pre-filled)
  - **Export Button**: "Export to TXT" (downloads formatted text file)
- **Sections Management**:
  - **Button**: "+ Add Section" (disabled if 25 sections reached)
  - **Section Cards**: Vertical/horizontal layout with up/down reorder buttons
  - **Auto-save**: Changes saved automatically or via "Save Changes" button

## 🧩 Components Structure

```
src/
├── app/
│   ├── page.tsx                    # Home page
│   ├── add/page.tsx               # Add landing page
│   ├── edit/
│   │   ├── page.tsx               # Edit landing pages list
│   │   └── [id]/page.tsx          # Edit specific landing page
│   ├── layout.tsx                 # Root layout with toast provider
│   ├── globals.css                # Global styles
│   └── api/                       # tRPC API (auto-generated)
├── components/
│   ├── ui/
│   │   ├── Button.tsx             # Reusable button component
│   │   ├── Input.tsx              # Form input component
│   │   ├── Textarea.tsx           # Form textarea component
│   │   └── Modal.tsx              # Base modal component
│   ├── SectionCard.tsx            # Modern simple section card with up/down buttons
│   ├── LandingPageCard.tsx        # Modern simple landing page card
│   ├── SectionEditor.tsx          # Modal for adding/editing sections
│   ├── ConfirmModal.tsx           # Confirmation dialog
│   ├── SearchBar.tsx              # Search input with filtering
│   └── ExportButton.tsx           # TXT export functionality
├── lib/
│   ├── db.ts                      # Prisma client instance
│   ├── utils.ts                   # Utility functions
│   ├── validations.ts             # Zod schemas with limits
│   └── export.ts                  # TXT export formatting
├── server/
│   ├── api/
│   │   ├── routers/
│   │   │   └── landingpage.ts     # tRPC landing page router
│   │   ├── root.ts                # Root tRPC router
│   │   └── trpc.ts                # tRPC setup and context
│   └── db.ts                      # Prisma client for server
├── store/
│   └── useLandingPageStore.ts     # Zustand client state
└── types/
    └── index.ts                   # Shared TypeScript types
```

## 🔧 tRPC API Endpoints Required

```typescript
// Landing Page Operations
landingPage.getAll()                    // Get all landing pages (max 250)
landingPage.getById({ id: string })     // Get single landing page
landingPage.create({ url, description, sections? })  // Create new landing page (check limits)
landingPage.update({ id, url?, description?, sections? })  // Update landing page
landingPage.delete({ id: string })      // Delete landing page
landingPage.export({ id: string })      // Export landing page to TXT format

// Section Operations (nested in landing page operations or separate router)
section.create({ landingPageId, ...sectionData })     // Add section (max 25 per landing page)
section.update({ id, ...sectionData })                 // Update section
section.delete({ id: string })                         // Delete section
section.moveUp({ id: string })                         // Move section up
section.moveDown({ id: string })                       // Move section down
```

## 📝 Section Editor Form Fields

**Modal/Dialog Component** with React Hook Form validation:

| Field             | Type          | Required | Validation     | Notes                                   |
| ----------------- | ------------- | -------- | -------------- | --------------------------------------- |
| **Section Name**  | text          | ✅ Yes   | min: 1 char    | Required field                          |
| **Intro**         | text          | ❌ No    | max: 80 chars  | Short introductory text                 |
| **Title**         | text          | ❌ No    | max: 80 chars  | Section title                           |
| **Subtitle**      | text          | ❌ No    | max: 160 chars | Section subtitle                        |
| **Description**   | textarea      | ❌ No    | No limit       | Long description text                   |
| **Buttons** (1-3) | dynamic array | ❌ No    | max: 3 buttons | Each button: { label, linkType, value } |
| **Images** (1-8)  | dynamic array | ❌ No    | max: 8 images  | URL strings, validated as URLs          |

**Button Object Structure**:

```typescript
{
  label: string; // Button text
  linkType: "url" | "scroll"; // Link type selection
  value: string; // URL or scroll target ID
}
```

## 📄 TXT Export Format

When exporting a landing page to TXT format, use this structure:

```
LANDING PAGE: [URL]
DESCRIPTION: [Description]

=== SECTION 1: [Name] ===
Intro: [intro]
Title: [title]
Subtitle: [subtitle]
Description: [description]
Buttons: [label] -> [value] ([linkType])
Images: [url1], [url2], [url3]

=== SECTION 2: [Name] ===
Intro: [intro]
Title: [title]
Subtitle: [subtitle]
Description: [description]
Buttons: [label] -> [value] ([linkType])
Images: [url1], [url2]

[Continue for all sections...]

---
Total Sections: X
Generated: [Date and Time]
```

## 💾 Environment Setup

### Required Environment Variables

```env
# Database
DATABASE_URL="postgresql://[user]:[password]@[neon-host]/[database]?sslmode=require"

# Next.js
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

### Neon Database Setup Steps

1. Create account at [neon.tech](https://neon.tech)
2. Create new PostgreSQL database with these recommended settings:
   - **PostgreSQL Version**: 16 (latest stable)
   - **Cloud Provider**: AWS (better integration with Vercel)
   - **Region**: EU Central 1 (Frankfurt) for European users
   - **Compute Size**: Shared (sufficient for free tier)
3. Copy connection string to `DATABASE_URL`
4. Run `npx prisma migrate dev` to create tables
5. Optional: Run `npx prisma studio` to view database

## 🎨 UI/UX Requirements

### Design Principles

- **Modern simple interface** with rounded borders, no animations
- **Responsive design** (mobile-friendly)
- **Loading states** for all async operations
- **Error handling** with user-friendly messages
- **Confirmation modals** for destructive actions
- **Toast notifications** with react-hot-toast for success/error feedback
- **Limits Display**: Show counters (X/250 landing pages, X/25 sections)
- **Export Functionality**: TXT format download for landing pages

### Section Reordering Implementation

- **Up/Down Buttons**: Universal method for desktop and mobile
- **Modern Simple Design**: Clean buttons with rounded borders, no animations
- **Section Cards**: Modern simple cards with rounded borders
- **Persist order** to database after each move
- **Accessible** keyboard navigation support
- **Visual Feedback**: Simple hover states, no complex animations or transparency

## 📋 Required Documentation Files

### 1. `README.md`

Comprehensive project documentation including:

- Project overview and purpose
- Tech stack explanation
- Local development setup
- Environment variables configuration
- Neon database setup guide
- Available scripts and commands
- Deployment instructions
- Contributing guidelines

### 2. `CHANGES.md`

Change tracking log with:

- Completed features checklist
- Remaining tasks and TODOs
- Future enhancements roadmap
- Version history with dates
- Instructions for contributors

### 3. `GITHUB_INSTRUCTIONS.md`

AI contributor guidelines:

- Code style and conventions
- Component structure rules
- How to update CHANGES.md
- Environment setup checklist
- Testing requirements
- Deployment process

### 4. `ORIGINAL_PROMPT.md`

**IMPORTANT**: Copy this entire prompt document and save it as `ORIGINAL_PROMPT.md` in the project root directory. This file serves as the complete specification document that was used to create this project and can be used to recreate or understand the project requirements in the future.

## ⚡ Implementation Priority

### Phase 1: Core Setup (Foundation)

1. **Initialize T3 Stack project** with all required dependencies
2. **Setup Neon PostgreSQL** and environment variables
3. **Create Prisma schema** and run initial migration
4. **Setup basic routing** structure with Next.js App Router

### Phase 2: Backend API (tRPC + Prisma)

1. **Create tRPC routers** for landing pages and sections
2. **Implement all CRUD operations** with proper validation
3. **Add error handling** and response formatting
4. **Test all API endpoints** manually

### Phase 3: Frontend Components

1. **Build UI components** (Button, Input, Modal, etc.)
2. **Create page components** for all routes
3. **Implement SectionEditor** form with validation
4. **Add confirmation modals** for delete operations

### Phase 4: Advanced Features

1. **Implement up/down reordering** with simple buttons
2. **Add search/filtering** functionality
3. **Integrate Zustand** for client state management
4. **Add TXT export** functionality
5. **Add loading states** and error boundaries
6. **Implement limits** (250 landing pages, 25 sections)

### Phase 5: Polish & Documentation

1. **Responsive design** improvements
2. **Performance optimizations**
3. **Complete all documentation** files
4. **Final testing** and bug fixes

## 🚀 Deployment

### Recommended Hosting

- **Frontend**: Vercel (free tier, optimized for Next.js)
- **Database**: Neon PostgreSQL 16 on AWS (free tier: 10GB, 100 hours compute/month)
- **Recommended Region**: EU Central 1 (Frankfurt) for European users
- **Total Cost**: $0/month for small to medium projects

### Deployment Checklist

- [ ] Environment variables configured in Vercel
- [ ] Prisma migrations run on production database
- [ ] Build and deploy successful
- [ ] All functionality tested in production
- [ ] Database connection verified

## 📊 Success Criteria

The project is complete when:

- ✅ All pages render correctly and are responsive
- ✅ Users can create, edit, and delete landing pages (max 250)
- ✅ Users can add, edit, reorder, and delete sections (max 25 per landing page)
- ✅ All form validations work properly with limits enforced
- ✅ Up/down reordering functionality works smoothly (universal desktop/mobile)
- ✅ Search and filtering work correctly
- ✅ TXT export functionality works for landing pages
- ✅ All confirmation modals appear for destructive actions
- ✅ Toast notifications work with react-hot-toast
- ✅ Modern simple card design with rounded borders implemented
- ✅ Data persists correctly in Neon PostgreSQL
- ✅ Application deploys successfully to Vercel
- ✅ All documentation files are complete and accurate

## 🎯 Final Notes

This project should demonstrate modern full-stack development practices using the T3 Stack with:

- **Type-safe APIs** with tRPC
- **Database operations** with Prisma ORM
- **Form handling** with React Hook Form + Zod validation
- **State management** with Zustand
- **Responsive UI** with Tailwind CSS (modern simple design, rounded borders)
- **Section reordering** with up/down buttons (universal desktop/mobile)
- **Toast notifications** with react-hot-toast
- **TXT export functionality** for landing pages
- **Data limits enforcement** (250 landing pages, 25 sections)
- **Production deployment** on Vercel + Neon

The resulting application should be a polished, professional internal tool that teams can use to collaboratively create and manage landing page content efficiently.
