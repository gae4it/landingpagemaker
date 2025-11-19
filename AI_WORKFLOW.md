# AI Project Work Instructions

## General Guidelines
- All comments and documentation must be written in English.
- The PRD (Product Requirements Document) is located in `PRD.md` and contains all project requirements and vision.
- The project must always be kept up to date with the latest package versions, including Tailwind CSS v4.
- After migrating all `index.html` files from `Tailwind2Blocks`, update Tailwind classes to version 4 if any obsolete classes are found.

## UI Components
- **Always use shadcn/ui components** for all UI elements (buttons, dropdowns, cards, navigation, etc.).
- Never create custom components when a shadcn/ui equivalent exists.
- All shadcn/ui components are located in `src/components/ui/`.

## Theme
- **Dark theme only**: The entire application uses a dark color scheme.
- All components and pages must be styled for dark mode using shadcn/ui theme tokens (bg-background, text-foreground, border-border, etc.).
- Never use light theme colors (bg-white, text-gray-900, etc.).

## Linting and Formatting
- `npm run check` must run both linting and prettier checks.
- `npm run fix` must run both linting and prettier auto-fixes.

## Migration Notes
- After migrating all `index.html` files from `Tailwind2Blocks`, review and update Tailwind classes to ensure compatibility with Tailwind CSS v4.

## Communication
- Always provide clear, concise, and actionable updates.
- Confirm every major step and request user feedback if requirements are unclear.

## User Preferences
- All code, comments, and documentation must be in English.
- PRD and technical documentation must be kept up to date with every major change.

---
This file is for the AI assistant (GitHub Copilot) and contains the working rules and user preferences for the project.
