# Product Requirements Document (PRD): LandingPageMaker

- **Author**: GaeMaz
- **Creation Date**: 2025-11-19
- **Version**: 1.0

## 1. Vision and Goals

### 1.1. Product Name
LandingPageMaker

### 1.2. Vision
Create a modern, fast, open-source web application that serves as a library for UI components (blocks) built with **HTML and Tailwind CSS**. The goal is to accelerate development for developers by providing ready-to-copy-and-paste code blocks without the need for custom CSS.

### 1.3. Problem
Developers, especially when prototyping or building landing pages, waste time recreating common UI components (hero, galleries, forms, footers, etc.) from scratch. Existing libraries can be heavy, require many dependencies, or are not purely based on Tailwind CSS.

### 1.4. Solution
A web app built with the T3 stack (`create-t3-app`) offering a collection of navigable, previewable, and easily copyable UI blocks. Each block is a standalone HTML `<section>`, styled exclusively with Tailwind CSS classes.

### 1.5. Target Users
*   **Frontend and Full-Stack Web Developers**: looking to speed up interface creation.
*   **Designers who code**: need a visual and functional starting point.
*   **Students and Freelancers**: need quick resources for their projects.

## 2. Functional Requirements

### 2.1. Application Structure
The application will consist of the following main pages:

#### Initial Implementation Note
First, create all pages and categories with a top menu containing:
- Home button
- Blocks button (with a large dropdown to accommodate all subcategories)
- About button

Each page (Home, About, and all category pages) will initially contain only:
- Navigation bar (menu)
- Hero section
- Footer

The content from Tailwind2Blocks (all ready-made sections) will be added later.

#### Shared Layout
All `blocks` pages must have a shared top menu, a header, and a footer component.
The header/banner text for each blocks page must dynamically reflect the category name.


#### a) Home Page (`/`)
*   **Purpose**: Introduce the app, its value, and guide users to the blocks.
*   **Content**:
    *   **Hero Section**: Product presentation for LandingPageMaker. Example: "Find ready-made Tailwind sections to build your landing pages!"
    *   **Featured Blocks**: A selection of 3-4 popular or visually appealing blocks to preview quality.
    *   **Category List**: A visual list of available block categories (e.g., Hero, Footer, Team...).
    *   **Technical Explanation**: Brief section specifying that blocks use only HTML and Tailwind CSS and are built on a modern stack (T3 App).

#### b) Blocks Page (`/blocks`)
*   **Purpose**: Serve as the main directory for all block categories.
*   **Content**:
    *   Clear title (e.g., "All Block Categories").
    *   Grid of "cards", each representing a category.
    *   Each category card should show:
        *   Category name (e.g., "Hero Sections").
        *   Icon or representative image.
        *   Counter indicating how many blocks are in that category.
    *   Clicking a card redirects to that specific category page (e.g., `/blocks/hero`).

#### c) Category Pages (`/blocks/[category]`)
*   **Purpose**: Display all available blocks for a specific category.
*   **Content**:
    *   Title identifying the category (e.g., "Hero Sections").
    *   Vertical list of blocks. Each block should be rendered as follows:
        1.  **Top Banner**: A `flexbox` `div` containing:
            *   **Left**: `<h4>` with the block's descriptive title (e.g., "Hero with right image and form").
            *   **Right**: "Copy" icon with accompanying text (e.g., "Copy Code").
        2.  **Block Preview**: The UI component visually rendered inside an `iframe` or `div` to isolate it from the rest of the page.
        3.  **Copy Logic**: Clicking the "Copy" icon triggers a JavaScript script to copy the entire HTML code of the corresponding `<section>` to the user's clipboard. On success, show visual feedback (e.g., icon changes to "Copied!" for 2 seconds).

#### d) About Page (`/about`)
*   **Purpose**: Provide information about the project.
*   **Content**:
    *   Simple and concise information about the passion for web design and marketing.
    *   Information about the technology stack used (`T3 App`).
    *   Credits (e.g., to you, `GaeMaz`, and `Tailwind2Blocks` or other sources of inspiration).
    *   Link to the project's GitHub repository.

### 2.2. Block Management
*   Blocks will be individual `.tsx` or `.jsx` files saved in the repository, likely in a folder like `src/components/blocks/[category]/[block-name].tsx`.
*   Each file will export the React component and a string containing the pure HTML code to copy. This avoids parsing JSX at runtime and ensures the copied code is clean.

## 3. Non-Functional Requirements

### 3.1. Performance
*   The app must be fast. Use Next.js Static Site Generation (SSG) for block pages, as the content is static.
*   Images used in sample blocks must be optimized (e.g., `.webp` format, lazy loading).

### 3.2. Usability
*   Copy action must be immediate and reliable.
*   Interface must be clean, minimal, and focused on content (the blocks).
*   The app must be fully responsive (mobile, tablet, desktop).

### 3.3. Maintainability
*   Code structure must make it easy to add new blocks and categories in the future.

## 4. Tech Stack

*   **Framework**: Next.js (via `create-t3-app`).
*   **Language**: TypeScript.
*   **Style**: Tailwind CSS. No custom `.css` files or `styled-components`.
*   **Deployment**: Vercel (recommended for Next.js).
*   **Components**: React.
*   **API/Data**: No database needed initially. Block data will come directly from the project filesystem.

## 5. Initial Block Categories (v1.0)

The initial block categories, based on the folders in Tailwind2Blocks, will be:

- call-to-action-blocks
- columns
- contact-blocks
- content-blocks
- counter-blocks
- dividers
- features-e-services-blocks
- footer-blocks
- forms-blocks
- headers
- hero-blocks
- interactions
- partner-blocks
- post-blocks
- pricing-blocks
- shop-blocks
- social-blocks
- teams-blocks
- testimonials-blocks
- ui-blocks

## 6. Future Roadmap (Post-Launch)
*   **Dark/Light Theme**: A selector to switch the app's interface theme.
*   **Responsive Preview**: Add buttons (Mobile/Tablet/Desktop) above each block to preview at different resolutions.
*   **Search**: A search bar to find blocks by keyword.
*   **User Authentication (optional)**: To save favorite blocks.

---