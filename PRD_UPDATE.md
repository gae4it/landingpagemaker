# PRD Update - Add to section 4. Tech Stack

After the line:
```
*   **Style**: Tailwind CSS. No custom `.css` files or `styled-components`.
```

Add:
```
*   **UI Components**: shadcn/ui - All UI components must use shadcn/ui library for consistent design and accessibility.
*   **Theme**: Dark theme only. The entire application uses a dark color scheme.
```

---

# AI_WORKFLOW Update - Add to General Guidelines

After the line about Tailwind CSS v4, add:
```
- **Always use shadcn/ui components** for all UI elements (buttons, dropdowns, cards, navigation, etc.). Never create custom components when a shadcn/ui equivalent exists.
- **Dark theme only**: The entire application uses a dark color scheme. All components and pages must be styled for dark mode.
```
