# GitHub Instructions for AI Contributors

This document provides guidelines for AI contributors working on the LandingPageMaker project.

## 📋 **Project Overview**

**LandingPageMaker** is a T3 Stack application for managing landing page content with:
- Modern UI with rounded borders, no animations
- Section management with up/down reordering
- TXT export functionality
- Strict limits enforcement (250 landing pages, 25 sections)
- External image URLs only (no file uploads)

## 🏗️ **Architecture Guidelines**

### **Tech Stack Compliance**
- **Frontend**: Next.js 15 App Router, TypeScript, Tailwind CSS 4.0
- **Backend**: tRPC 11.0, Prisma 6.5, Neon PostgreSQL
- **UI**: @headlessui/react, react-hot-toast
- **Forms**: react-hook-form, @hookform/resolvers, Zod validation
- **State**: Zustand for client state, tRPC for server state

### **Code Style Conventions**

#### **File Naming**
- React components: `PascalCase.tsx` (e.g., `SectionCard.tsx`)
- Utilities/hooks: `camelCase.ts` (e.g., `useLandingPageStore.ts`)
- Pages: `page.tsx` (Next.js App Router convention)
- API routes: `camelCase.ts` (e.g., `landingpage.ts`)

#### **Component Structure**
```typescript
// 1. Imports (React first, then third-party, then local)
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/Button";

// 2. Interfaces
interface ComponentProps {
  // Props definition
}

// 3. Component implementation
export function ComponentName({ prop }: ComponentProps) {
  // Component logic
}

// 4. Export (named export preferred)
export { ComponentName };
```

#### **TypeScript Standards**
- Use `interface` for object types, `type` for unions/primitives
- Import types with `import type { Type } from "module"`
- Define proper return types for functions
- Use Zod schemas for validation

## 🎨 **Design System Rules**

### **UI Components**
- **Buttons**: Rounded borders (`rounded-lg`), variants (primary, secondary, danger, ghost)
- **Cards**: Simple with `border border-gray-200 rounded-lg`
- **Inputs**: Consistent padding `px-3 py-2`, focus states with blue
- **No animations**: Avoid transitions, transforms, or motion effects
- **Responsive**: Mobile-first approach with Tailwind breakpoints

### **Color Palette**
- **Primary**: Blue (blue-600, blue-700)
- **Secondary**: Gray (gray-200, gray-300)
- **Danger**: Red (red-600, red-700)
- **Text**: Gray scale (gray-900, gray-700, gray-500)
- **Background**: gray-50 for pages, white for cards

## 📊 **Data Management Rules**

### **Limits Enforcement**
```typescript
// Always enforce these limits
const MAX_LANDING_PAGES = 250;
const MAX_SECTIONS_PER_PAGE = 25;
const MAX_BUTTONS_PER_SECTION = 3;
const MAX_IMAGES_PER_SECTION = 8;
```

### **Database Operations**
- Use Prisma client via tRPC context: `ctx.db`
- Always include proper error handling with `TRPCError`
- Use transactions for related operations
- Implement cascade deletes in schema

### **Form Validation**
- Use Zod schemas from `@/lib/validations`
- Validate on both client and server
- Show user-friendly error messages
- Enforce character limits where specified

## 🔧 **Development Workflow**

### **Adding New Features**

1. **Schema Changes**
   ```bash
   # Update prisma/schema.prisma
   npx prisma migrate dev --name feature_name
   npx prisma generate
   ```

2. **API Development**
   - Add tRPC procedures in `src/server/api/routers/`
   - Export from `src/server/api/root.ts`
   - Follow existing error handling patterns

3. **UI Components**
   - Create in appropriate folder (`ui/` for reusable, root for business logic)
   - Follow design system guidelines
   - Include proper TypeScript types

4. **Integration**
   - Use tRPC hooks: `api.landingPage.getAll.useQuery()`
   - Handle loading/error states
   - Show toast notifications for user feedback

### **Testing Changes**
```bash
# Start development server
npm run dev

# Check for type errors
npm run typecheck

# Run linting
npm run lint

# Format code
npm run format:write
```

## 📝 **Code Patterns**

### **tRPC Procedure Pattern**
```typescript
procedureName: publicProcedure
  .input(zodSchema)
  .mutation/query(async ({ ctx, input }) => {
    // Validation and business logic
    // Use ctx.db for database operations
    // Throw TRPCError for errors
    return result;
  })
```

### **React Component Pattern**
```typescript
export function ComponentName({ prop }: Props) {
  // 1. State hooks
  const [state, setState] = useState();
  
  // 2. tRPC hooks
  const { data } = api.router.procedure.useQuery();
  const mutation = api.router.procedure.useMutation({
    onSuccess: () => toast.success("Success!"),
    onError: (error) => toast.error(error.message),
  });
  
  // 3. Event handlers
  const handleClick = () => {
    // Logic here
  };
  
  // 4. Render
  return (
    // JSX here
  );
}
```

### **Form Handling Pattern**
```typescript
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormType>({
  resolver: zodResolver(schema),
});

const onSubmit = (data: FormType) => {
  mutation.mutate(data);
};
```

## 🚫 **Common Mistakes to Avoid**

1. **Don't add animations** - The spec explicitly requires no animations
2. **Don't exceed limits** - Always check and enforce the specified limits
3. **Don't use drag-and-drop** - Use up/down buttons for reordering
4. **Don't implement file uploads** - Only external URLs for images
5. **Don't skip error handling** - Always handle errors gracefully
6. **Don't forget responsive design** - Test on mobile devices
7. **Don't hardcode strings** - Use proper validation schemas

## 📋 **CHANGES.md Update Protocol**

When making changes, update the `CHANGES.md` file:

```markdown
## [Date] - Feature/Fix Name

### Added
- New feature description

### Changed
- Modified functionality description

### Fixed
- Bug fix description

### Technical Details
- Implementation notes
- Database changes
- API changes
```

## 🚀 **Deployment Checklist**

Before deploying changes:

- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Responsive design tested
- [ ] Database migrations work correctly
- [ ] Environment variables documented
- [ ] Error handling implemented
- [ ] Toast notifications working
- [ ] Limits enforcement verified
- [ ] README.md updated if needed
- [ ] CHANGES.md updated

## 🎯 **Quality Standards**

### **Code Quality**
- TypeScript strict mode compliance
- Proper error boundaries
- Consistent component patterns
- Clean, readable code structure

### **User Experience**
- Fast loading times
- Clear error messages
- Intuitive navigation
- Responsive design
- Accessibility considerations

### **Data Integrity**
- Proper validation on all inputs
- Database constraints enforced
- Error recovery mechanisms
- Data export accuracy

---

## 📞 **Support & Questions**

For questions about the codebase or implementation details:

1. Check existing code patterns first
2. Review the original `InitialPrompt.md` for specifications
3. Follow the established conventions in this document
4. Test thoroughly before submitting changes

**Remember**: This project prioritizes functionality over aesthetics, with a focus on clean, simple design and reliable data management.