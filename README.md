# LandingPagesMaker

A web-based internal tool designed to collect and organize textual and media content from coworkers for landing page creation.

## 🎯 Project Purpose

LandingPagesMaker is an internal tool that allows teams to collaboratively create and manage landing page content. It provides a structured way to collect text, descriptions, buttons, and media assets that can be used to build professional landing pages.

## 🛠 Tech Stack

| Tool/Library | Purpose |
|--------------|---------|
| React (Vite) | Frontend UI framework |
| TypeScript | Type safety and better developer experience |
| TailwindCSS | CSS utility-first styling |
| Zustand | Global state management |
| Firebase Firestore | Realtime cloud database (NoSQL) |
| dnd-kit | Drag-and-drop for reordering sections |
| uuid | Generate unique IDs |
| react-router-dom | Client-side routing |
| @headlessui/react | Accessible modal/dialog UI |
| React Hook Form | Form management |

## 📁 Project Structure

```
src/
├── components/
│   ├── SectionCard.tsx         # Draggable section display card
│   ├── LandingPageCard.tsx     # Landing page preview card
│   ├── SectionEditor.tsx       # Modal for adding/editing sections
│   ├── ConfirmModal.tsx        # Confirmation dialog component
│   ├── SearchBar.tsx           # Search input component
│   └── Button.tsx              # Reusable button component
│
├── pages/
│   ├── HomePage.tsx            # Main navigation page
│   ├── AddLandingPage.tsx      # Create new landing page
│   ├── EditLandingPageList.tsx # List all existing landing pages
│   ├── EditLandingPageDetail.tsx # Edit specific landing page
│   └── NotFound.tsx            # 404 error page
│
├── store/
│   └── useLandingPageStore.ts  # Zustand state management
│
├── services/
│   └── firebase.ts             # Firebase configuration and API
│
├── types/
│   └── index.ts                # TypeScript type definitions
│
├── App.tsx                     # Main app component with routing
└── main.tsx                    # App entry point
```

## 🗃️ Data Structure

### LandingPage
```typescript
interface LandingPage {
  id: string;
  url: string;
  description: string;
  updatedAt: number;
  sections: Section[];
}
```

### Section
```typescript
interface Section {
  id: string;
  name: string;
  intro?: string;          // ~80 characters
  title?: string;          // ~80 characters
  subtitle?: string;       // ~160 characters
  description?: string;    // No length limit
  buttons?: Button[];      // Max 3 buttons
  images?: string[];       // Max 8 image URLs
}
```

### Button
```typescript
interface Button {
  label: string;
  linkType: 'url' | 'scroll';
  value: string;
}
```

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase project with Firestore enabled

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/gae4it/landingpagemaker.git
   cd landingpagemaker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   - Enable Firestore Database
   - Get your Firebase configuration object
   - Update `src/services/firebase.ts` with your Firebase config:
   
   ```typescript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project-id.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project-id.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

4. **Set up Firestore Security Rules**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true; // Open access for internal tool
       }
     }
   }
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open the application**
   - Navigate to `http://localhost:5173`
   - The app should load with the home page

## 🌐 Application Pages

### / - Home Page
- Contains two main buttons:
  - `+ Add New Landing Page` - Directly opens page to create new landing page
  - `✏️ Edit Existing Landing Page` - Opens list of existing landing pages

### /add - Add New Landing Page
- Editable fields for landing page URL and description
- `+ Add Section` button to create new sections
- Horizontal draggable cards for existing sections using dnd-kit
- Each section card shows section name with edit and delete buttons

### /edit - Edit Existing Landing Pages
- Search field to filter landing pages by name
- List of saved landing pages ordered by last edited date (descending)
- Each landing page card displays URL, description, edit and delete buttons

### /edit/:id - Edit Landing Page Details
- Editable landing page URL and description
- `+ Add Section` button to add new sections
- Horizontal list of section cards with drag-and-drop reordering
- Section editor modal for adding/editing section content

## 🎨 Features

### Section Management
- **Drag and Drop**: Reorder sections using dnd-kit
- **Rich Content**: Support for intro, title, subtitle, description, buttons, and images
- **Button Configuration**: Up to 3 buttons per section with URL or scroll targets
- **Image Support**: Up to 8 image URLs per section
- **Form Validation**: Required section names with optional fields

### User Experience
- **Responsive Design**: Works on desktop and mobile devices
- **Confirmation Dialogs**: Safe deletion with confirmation popups
- **Real-time Updates**: Changes saved immediately to Firestore
- **Search Functionality**: Filter landing pages by URL or description
- **Loading States**: Visual feedback during data operations

### Technical Features
- **Type Safety**: Full TypeScript coverage
- **State Management**: Centralized state with Zustand
- **Error Handling**: Comprehensive error states and user feedback
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized rendering and data fetching

## 🔧 Firebase Setup Instructions

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Click "Add project" and follow the setup wizard
   - Choose a project name (e.g., "landingpagemaker")

2. **Enable Firestore**
   - In your Firebase project, go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" for development
   - Select a region close to your users

3. **Get Configuration**
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - Click on the web app icon (</>)
   - Register your app with a nickname
   - Copy the Firebase configuration object

4. **Update Configuration**
   - Replace the config object in `src/services/firebase.ts`
   - Ensure all fields are correctly filled

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Firebase Hosting (Optional)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Deploy to Vercel/Netlify
- Connect your GitHub repository
- Set build command: `npm run build`
- Set output directory: `dist`
- Deploy automatically on push to main branch

## 🤝 Contributing

This project follows AI-friendly development practices:

1. **Code Comments**: All comments must be in English
2. **Naming Conventions**: Use descriptive, camelCase variable names
3. **File Organization**: Follow the established folder structure
4. **Type Safety**: Always use TypeScript types
5. **Documentation**: Update README.md and CHANGES.md for any modifications

## 📋 Development Guidelines

- All interface text must be in English
- No user authentication required (open access)
- Prioritize functionality over aesthetics
- Use TailwindCSS utility classes for styling
- Follow React best practices and hooks
- Implement proper error handling
- Test on multiple screen sizes

## 🐛 Troubleshooting

### Common Issues

**Firebase Connection Issues**
- Verify your Firebase configuration is correct
- Check that Firestore is enabled in your Firebase project
- Ensure your security rules allow read/write access

**Build Errors**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors in the terminal
- Verify all imports are correct

**Styling Issues**
- Ensure TailwindCSS is properly configured
- Check that `@tailwind` directives are in `src/index.css`
- Verify `tailwind.config.js` content paths are correct

## 📝 License

This is an internal tool for organizational use. Not licensed for external distribution.

---

**LandingPagesMaker** - Streamlining content collection for better landing pages.
