# Action Plan: CopyButtonsAdvanced

## Goal
Add three copy buttons for every library block: Copy HTML, Copy React, and Copy Vue.

The buttons must be right-aligned, pill-shaped, visually distinct by framework, accessible, and backed by a copy system that produces reliable snippets.

## Current State
- HTML copy is already working well.
- Vue copy is already working well because the current output is compatible with template-style markup.
- The current implementation copies `outerHTML` from the rendered DOM.
- This approach is acceptable for HTML and usable for Vue in the current state.
- This approach is not reliable for React JSX, because rendered DOM is not equivalent to author-level JSX source.

## Product Requirements
- Show 3 buttons per block: HTML, React, Vue.
- Position them on the right with a layout equivalent to `flex justify-end items-center gap-2`.
- Use pill styling with rounded corners, horizontal padding, icon first, label second.
- Use framework-specific colors:
   - HTML: white background, gray border, dark text.
   - React: React blue.
   - Vue: Vue green.
- Show per-button copy feedback such as `Copied!`.
- Include accessibility support: `aria-label`, visible focus state, keyboard support.

## Core Technical Decision
Do not attempt to generate React JSX directly from `outerHTML`.

Instead, split the copy system into two strategies:
- HTML and Vue can continue to use DOM-derived markup in the short term.
- React must copy from a source-controlled JSX snippet, not from rendered HTML.

This is the key design choice for the feature.

## Why DOM-to-JSX Is the Wrong Approach
Converting rendered HTML back into good JSX is fragile and will quickly break quality expectations.

Main problems:
- `class` must become `className`.
- HTML attributes such as `for`, `tabindex`, and SVG attributes need React-specific naming.
- Boolean and empty attributes do not map cleanly.
- Event handlers are lost in rendered HTML.
- Conditional rendering, arrays, loops, and component composition disappear after render.
- Imported icons and custom components are flattened into plain markup, so the copied result is no longer representative of the real React implementation.

An automatic converter may create syntactically valid JSX sometimes, but it will not produce maintainable snippets consistently.

## Recommended Snippet Architecture
Each block should eventually expose a snippet descriptor with three explicit outputs.

Example conceptual shape:

```ts
type SnippetTarget = "html" | "react" | "vue";

type BlockSnippets = {
   html: string | (() => string);
   react: string;
   vue: string | (() => string);
};
```

Recommended direction:
- Keep the rendered preview for the live page.
- Keep snippet content separate from the preview DOM.
- Copy buttons should call a single copy handler with a target: `html`, `react`, or `vue`.
- The handler resolves the correct snippet source and writes that string to the clipboard.

This gives us stable and framework-specific outputs without relying on reverse transformation.

## Implementation Strategy Per Snippet Type

### 1. HTML Snippet
Implementation approach:
- Continue using the existing DOM copy behavior for the first iteration because it is already working.
- Normalize output before copying when useful:
   - trim leading and trailing whitespace;
   - preserve readable indentation if post-processing is introduced later;
   - optionally remove runtime-only attributes if they appear.

Medium-term improvement:
- Move HTML snippets to explicit source strings as well, so all frameworks share the same registry pattern.

Why this is safe now:
- HTML users expect deployable markup.
- The current `outerHTML` flow already satisfies that expectation.

### 2. Vue Snippet
Implementation approach:
- Keep Vue active with the same content as HTML for now, since the current blocks work well as template markup.
- If needed, wrap the copied snippet in a minimal Vue Single File Component format later:

```vue
<template>
   <!-- block markup -->
</template>
```

Future enhancement path:
- Introduce Vue-specific snippets only for blocks that need directives such as `v-if`, `v-for`, `:class`, or `@click`.
- Until then, keeping Vue separate at the UI level is still correct because it preserves the product model and allows future specialization without redesigning the feature.

### 3. React Snippet
Implementation approach:
- Do not derive React from the DOM.
- Store a dedicated JSX snippet per block.
- Copy that JSX snippet directly when the React pill is pressed.

Recommended smart idea:
- Introduce a block-level snippet registry where every showcased section can optionally declare `react`, `html`, and `vue` sources.
- For React, the registry value should be hand-authored JSX that mirrors the preview structure.
- For HTML and Vue, the registry can initially fall back to DOM copy if explicit strings are missing.

This gives us a practical rollout path:
- HTML and Vue stay fully functional immediately.
- React becomes accurate block by block instead of relying on a brittle global converter.

## Practical React Rollout Plan

### Phase 1: Ship the UI and Infrastructure
- Add the three pill buttons.
- Replace the single copy action with a target-based copy API.
- Keep HTML and Vue powered by existing DOM copy.
- Mark React as powered by explicit snippets.

### Phase 2: Add React Snippets Block by Block
For each block section:
- create a stable snippet string that represents the JSX version;
- keep imports minimal and predictable;
- prefer plain semantic JSX over app-specific abstractions when possible;
- include `className` and React-safe attributes only.

Example structure:

```ts
const block1Snippets = {
   react: `<section className="relative bg-neutral-900 py-12">...</section>`,
};
```

### Phase 3: Improve Reuse
Once several blocks are migrated:
- extract shared snippet helpers;
- consider colocating snippet definitions next to each block;
- consider a typed helper such as `defineBlockSnippets()` to enforce completeness.

## UX and Component Design

### Copy Pills
Each pill should include:
- framework icon;
- text label;
- framework color treatment;
- hover state;
- focus-visible ring;
- copied state or temporary label feedback.

Suggested layout:
- place the pills below or inside the section header area;
- align them to the right;
- use consistent sizing across all block categories.

### Copy Feedback
Preferred behavior:
- feedback should be scoped to the clicked target, not global only;
- example: only the React pill temporarily changes to `Copied!`;
- a global toast can still exist, but the per-button state is clearer.

## Accessibility Requirements
- Each button must have a specific `aria-label`, for example `Copy React snippet`.
- Buttons must be reachable by keyboard.
- Focus styling must be clearly visible against all button colors.
- Icon-only meaning must never be relied on without visible text.

## Proposed Technical Structure

### Copy Button API
Create a reusable API similar to:

```ts
type CopyTarget = "html" | "react" | "vue";

function handleCopy(target: CopyTarget, options: CopyOptions): void
```

Responsibilities:
- resolve the correct snippet;
- copy to clipboard;
- trigger target-specific feedback;
- expose a fallback path for HTML and Vue.

### Snippet Resolution Rules
Recommended logic:
1. If an explicit snippet exists for the requested target, use it.
2. If target is `html`, fallback to `ref.current.outerHTML`.
3. If target is `vue`, fallback to the HTML snippet.
4. If target is `react` and no explicit snippet exists, do not fake conversion.
5. Show a controlled fallback message or temporarily disable the React pill until that block has a curated JSX snippet.

This is preferable to copying invalid or misleading React code.

## Testing Plan
- Verify visual alignment of the three pills across desktop and mobile.
- Verify clipboard output for HTML, React, and Vue separately.
- Verify copied React snippets are valid JSX and use `className` correctly.
- Verify Vue output remains usable in template context.
- Verify keyboard navigation and focus visibility.
- Verify copied feedback is shown for the correct button.

## Documentation Updates
- Update the README or block authoring guide with instructions on how to define a React snippet.
- Document the fallback rules for HTML, Vue, and React.
- Document that React snippets are source-driven by design.

## Risks and Mitigations

### Risk: React snippets become expensive to maintain
Mitigation:
- keep snippets close to the block source;
- use small, explicit strings;
- add them progressively only to blocks that are ready.

### Risk: HTML and preview diverge over time
Mitigation:
- migrate HTML toward explicit source strings after the UI rollout;
- keep the snippet registry close to the rendered block implementation.

### Risk: Users expect automatic React conversion for every block
Mitigation:
- be explicit in the product behavior;
- only enable React copy where the snippet is curated and trustworthy.

## Deliverables
- Reusable pill-style copy buttons for HTML, React, and Vue.
- Target-based clipboard logic.
- Reliable HTML and Vue copy flow.
- Curated React JSX copy flow based on explicit snippets.
- Updated documentation explaining authoring and fallback rules.
