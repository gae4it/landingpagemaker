# GitHub AI Instructions

This document provides specific guidance for AI coding agents and contributors working on the LandingPagesMaker project.

## 🎯 Project Overview

LandingPagesMaker is a React + TypeScript web application for internal content management. It uses Firebase Firestore for data storage and provides a drag-and-drop interface for organizing landing page sections.

## 📋 Key Configuration Requirements

### Firebase Setup (Critical)
Before the application can function, you must:

1. **Update Firebase Configuration**
   - Edit `src/services/firebase.ts`
   - Replace placeholder values with actual Firebase project credentials:
   ```typescript
   const firebaseConfig = {
     apiKey: "your-actual-api-key",
     authDomain: "your-project-id.firebaseapp.com", 
     projectId: "your-actual-project-id",
     storageBucket: "your-project-id.appspot.com",
     messagingSenderId: "your-actual-sender-id",
     appId: "your-actual-app-id"
   };
   ```

2. **Set Firestore Security Rules**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```

## 🏗️ Architecture Guidelines

### File Structure Rules
- **Components**: `src/components/` - Reusable UI components
- **Pages**: `src/pages/` - Route-level components  
- **Types**: `src/types/index.ts` - All TypeScript interfaces
- **Store**: `src/store/` - Zustand state management
- **Services**: `src/services/` - External API integrations

### Naming Conventions
- **Files**: PascalCase for components (`ButtonComponent.tsx`)
- **Variables**: camelCase (`landingPageData`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_IMAGES_PER_SECTION`)
- **Types**: PascalCase interfaces (`LandingPage`, `Section`)

### Component Standards
```typescript
// Always use TypeScript interfaces for props
interface ComponentProps {
  required: string;
  optional?: number;
}

// Export components as named exports
export const ComponentName: React.FC<ComponentProps> = ({ required, optional }) => {
  return <div>{/* component content */}</div>;
};
```

## 🔄 State Management Rules

### Zustand Store Usage
- All data operations go through `useLandingPageStore`
- Never directly modify Firebase from components
- Use store actions for all CRUD operations:
  ```typescript
  const { createLandingPage, updateSection, deleteSection } = useLandingPageStore();
  ```

### State Structure
```typescript
// Current store state includes:
- landingPages: LandingPage[]     // All landing pages
- currentLandingPage: LandingPage | null  // Currently editing
- isLoading: boolean              // Loading state
- error: string | null            // Error messages
```

## 🎨 Styling Guidelines

### TailwindCSS Rules
- **Only use TailwindCSS classes** - No custom CSS
- **Responsive design**: Use `sm:`, `md:`, `lg:` prefixes
- **Common patterns**:
  ```typescript
  // Buttons
  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  
  // Cards  
  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
  
  // Forms
  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
  ```

### Component Variants
```typescript
// Use variant props for component styles
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}
```

## 📝 Development Workflow

### Before Making Changes
1. **Read Documentation**: Review README.md and this file
2. **Check Status**: Look at CHANGES.md for current tasks
3. **Test Setup**: Ensure Firebase is configured and working
4. **Run Locally**: `npm run dev` and verify app loads

### Making Changes
1. **Update CHANGES.md**: Log what you're working on
2. **Follow Types**: Use existing TypeScript interfaces
3. **Test Features**: Verify all functionality works
4. **Update Docs**: Modify README.md if needed

### Code Quality Checklist
- [ ] All new code has TypeScript types
- [ ] Components use proper prop interfaces
- [ ] Error handling is implemented
- [ ] Loading states are handled
- [ ] Responsive design works
- [ ] No console errors in browser
- [ ] Firebase operations work correctly

## 🔧 Common Tasks

### Adding New Section Fields
1. Update `Section` interface in `src/types/index.ts`
2. Modify `SectionEditor.tsx` component to include new fields
3. Update `SectionCard.tsx` to display new data
4. Test form validation and data persistence

### Adding New Page Routes
1. Create component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in existing components
4. Test routing and back buttons

### Modifying Firebase Schema
1. Update TypeScript interfaces first
2. Modify store actions for data operations
3. Test with existing data (ensure backward compatibility)
4. Update documentation

## 🚨 Critical Requirements

### Must Follow Rules
- **English Only**: All code, comments, and UI text in English
- **No Authentication**: App must remain publicly accessible
- **TypeScript**: Never use `any` type, always define proper interfaces
- **Error Handling**: Implement try-catch for all Firebase operations
- **Confirmation Dialogs**: Use for all destructive actions (delete)

### Database Rules
- **Collection**: Always use `landingPages` collection
- **IDs**: Use auto-generated Firestore document IDs
- **Timestamps**: Store as `number` (milliseconds since epoch)
- **Validation**: Validate required fields before saving

### Performance Guidelines
- **Loading States**: Show spinners for async operations
- **Error Boundaries**: Handle component errors gracefully
- **Optimistic Updates**: Update UI before Firebase confirmation
- **Debounced Search**: Prevent excessive API calls

## 📦 Dependencies Management

### Core Dependencies (Do Not Remove)
```json
{
  "react": "^18.x",
  "react-router-dom": "^6.x", 
  "firebase": "^10.x",
  "zustand": "^4.x",
  "tailwindcss": "^3.x",
  "@dnd-kit/core": "^6.x",
  "react-hook-form": "^7.x",
  "@headlessui/react": "^1.x"
}
```

### Adding New Dependencies
1. Check if functionality exists in current stack
2. Prefer lightweight, well-maintained packages
3. Update README.md with new dependency purpose
4. Test bundle size impact

## 🐛 Troubleshooting

### Firebase Issues
- Verify config object has real values (not placeholders)
- Check Firestore security rules allow read/write
- Ensure Firestore is enabled in Firebase console
- Test network connectivity to Firebase

### Build Issues  
- Run `npm install` to ensure dependencies
- Check for TypeScript errors: `npm run type-check`
- Verify all imports resolve correctly
- Clear `node_modules` and reinstall if needed

### Styling Issues
- Ensure TailwindCSS is in `src/index.css`
- Check `tailwind.config.js` content paths
- Verify PostCSS configuration
- Test in different browsers

## 📞 Support Resources

- **Firebase Documentation**: https://firebase.google.com/docs
- **React Documentation**: https://react.dev
- **TailwindCSS**: https://tailwindcss.com/docs
- **Zustand**: https://github.com/pmndrs/zustand
- **dnd-kit**: https://dndkit.com/

## 📋 Deployment Checklist

### Production Readiness
- [ ] Firebase configuration updated with production credentials
- [ ] Environment variables configured
- [ ] Error tracking implemented
- [ ] Performance monitoring enabled
- [ ] Security rules properly configured
- [ ] Domain and SSL certificate configured
- [ ] Build optimization verified (`npm run build`)

---

**Last Updated**: 2025-09-16  
**Project Version**: 1.0.0  
**Maintainer**: AI Assistant