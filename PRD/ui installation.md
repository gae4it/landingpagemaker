# PRD: shadcn/ui Installation & Component Sections Database

**Date**: December 29, 2025  
**Project**: Landing Page Maker → shadcn/ui Sections Database  
**Goal**: Build a complete library of **reusable page sections** (Hero, Pricing, Teams, Forms, etc.) using shadcn/ui with Vega theme, Lucide icons, Inter font, Neutral colors, and Base UI.

---

## Installation Parameters

```bash
npx shadcn@latest create --preset "https://ui.shadcn.com/init?base=base&style=vega&baseColor=neutral&theme=neutral&iconLibrary=lucide&font=inter&menuAccent=subtle&menuColor=default&radius=default&template=next" --template next
```

**Theme Configuration**:
- **Style**: Vega
- **Base**: Base UI
- **Base Color**: Neutral
- **Theme**: Neutral
- **Icon Library**: Lucide
- **Font**: Inter
- **Template**: Next.js

---

## Project Architecture

**Library Type**: Sections Database (Full-page/section components, not individual UI elements)  
**Framework**: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4  
**Component Organization**:
- Path aliases: `@/components`, `@/ui`, `@/lib`, `@/utils`
- All sections in `src/app/blocks/blocks-[category]/page.tsx`
- Each category showcases 3-10 section variants with **Copy Code** button
- No descriptions, pure visual showcase

---

## 20 Categories & Section Variants

### ✅ COMPLETED

*(To be marked as completed when all variants for a category are implemented)*

### ⏳ IN PROGRESS / TODO

#### 1. **Hero** - Landing page hero sections
- [ ] Hero with large heading + subtitle + CTA (centered)
- [ ] Hero with background image + overlay
- [ ] Hero with split layout (text left, image right)
- [ ] Hero with gradient background
- [ ] Hero with animated elements (text reveal, fade-in)
- [ ] Hero with video background
- [ ] Hero with features grid below (Hero + Features combined)

#### 2. **Call to Action** - Conversion-focused CTA sections
- [ ] CTA bar (full width, sticky)
- [ ] CTA cards with icons (grid layout)
- [ ] CTA with testimonial + button
- [ ] CTA with countdown timer
- [ ] Split CTA (text vs form)
- [ ] CTA with newsletter signup

#### 3. **Pricing** - Pricing tables & plans
- [ ] Pricing cards (3 tiers: Basic/Pro/Enterprise)
- [ ] Pricing with feature comparison
- [ ] Pricing toggle (Monthly/Yearly)
- [ ] Pricing with FAQ below
- [ ] Pricing with popular badge (highlight Pro tier)
- [ ] Pricing with custom features list per tier

#### 4. **Teams** - Team member showcases
- [ ] Team grid (4-6 members with photo + name + role)
- [ ] Team carousel (swipeable cards)
- [ ] Team with social links
- [ ] Team with bio modal/expandable
- [ ] Team two-column layout (photo left, info right)
- [ ] Team with hover effects (reveal social/bio)
- [ ] Team spotlight (leadership highlight)
- [ ] Team with role filters

#### 5. **Testimonials** - Customer testimonials & reviews
- [ ] Testimonial grid (3-4 cards with quote + author)
- [ ] Testimonial carousel (single/centered)
- [ ] Testimonial with rating stars
- [ ] Testimonial with company logos
- [ ] Testimonial video/media
- [ ] Testimonial featured + grid (1 large + 4 small)
- [ ] Testimonials with verified badges
- [ ] Testimonials with two-column split

#### 6. **Forms** - Beautiful form sections
- [ ] Contact form (email, name, message)
- [ ] Newsletter signup (email + button)
- [ ] Multi-step form (wizard)
- [ ] Form with validation feedback
- [ ] Embedded Stripe/Payment form
- [ ] Form with file upload
- [ ] Form with select/dropdown fields
- [ ] Form with checkbox/radio options

#### 7. **Pricing** (Already listed, confirm structure)
- [ ] See Pricing section above

#### 8. **Features & Services** - Feature showcase sections
- [ ] Features grid (3-4 columns, icon + text)
- [ ] Features with tabs (switch between categories)
- [ ] Features with hover reveal
- [ ] Features timeline (vertical, chronological)
- [ ] Features comparison table
- [ ] Features with image carousel
- [ ] Features with animated icons
- [ ] Feature steps (numbered workflow)

#### 9. **Footer** - Professional footer designs
- [ ] Footer with links grid + copyright
- [ ] Footer with newsletter signup
- [ ] Footer with social icons
- [ ] Footer with company info + links
- [ ] Footer with logo + columns layout
- [ ] Footer dark variant
- [ ] Footer with back-to-top button
- [ ] Footer with language switcher

#### 10. **Headers** - Eye-catching header sections
- [ ] Header/Navigation bar (sticky)
- [ ] Header with mega menu
- [ ] Header with dark/light toggle
- [ ] Header with search bar
- [ ] Header with auth buttons (Login/Signup)
- [ ] Header with breadcrumb
- [ ] Header with announcement bar
- [ ] Transparent header over hero

#### 11. **Contact** - Contact form & information sections
- [ ] Contact form + info layout (2 columns)
- [ ] Contact with map integration
- [ ] Contact with office locations
- [ ] Contact info cards (phone, email, address)
- [ ] Contact form with calendar booking
- [ ] Contact with live chat widget
- [ ] Support channels matrix (email/phone/chat)
- [ ] Contact form with file attachments

#### 12. **Content** - Rich content sections
- [ ] Content with large text + image
- [ ] Content with alternating layout (left/right/left)
- [ ] Content with numbered list + image
- [ ] Content with sidebar (main + sidebar)
- [ ] Content with quote block
- [ ] Content with code block showcase
- [ ] Content with stats highlight
- [ ] Content with gallery grid

#### 13. **Columns** - Multi-column layouts
- [ ] 2-column layout (50/50)
- [ ] 3-column equal layout
- [ ] 4-column grid
- [ ] Unequal columns (1/3 + 2/3)
- [ ] Masonry layout
- [ ] Responsive column grid (auto-fit)
- [ ] Columns with cards
- [ ] Columns with separators

#### 14. **Counter** - Animated statistics
- [ ] Counter cards (4 metrics with numbers)
- [ ] Counter with animated number tween
- [ ] Counter with progress bars
- [ ] Counter with icons + labels
- [ ] Counter with timeline
- [ ] Counter stats in grid
- [ ] Counters with trend indicators (up/down)
- [ ] KPI counters with highlights

#### 15. **Dividers** - Section dividers
- [ ] Simple line divider
- [ ] Divider with text/label
- [ ] Divider with icons
- [ ] Wavy divider
- [ ] Gradient divider
- [ ] Dotted divider
- [ ] Curved divider
- [ ] Shadow divider

#### 16. **Social** - Social media integrations
- [ ] Social icons grid (links)
- [ ] Social proof widget (followers count)
- [ ] Social feed grid (Instagram-style)
- [ ] Social share buttons
- [ ] Social follow buttons
- [ ] Social embed (tweet/post)
- [ ] Social feed carousel
- [ ] Link-in-bio grid

#### 17. **Partner** - Partner/logo showcases
- [ ] Partner logos grid (2-4 rows)
- [ ] Partner logos carousel (scrolling)
- [ ] Partner with info cards
- [ ] Partner testimonials
- [ ] Partner with badges/certifications
- [ ] Partner integration list
- [ ] Partner case studies
- [ ] Partner grid with tier groups

#### 18. **Post** - Blog post & article layouts
- [ ] Blog post hero (featured image + title)
- [ ] Blog post with metadata (author, date, read time)
- [ ] Blog post grid (latest posts)
- [ ] Blog post with sidebar (related posts)
- [ ] Blog post card (preview)
- [ ] Blog post with table of contents
- [ ] Post list with tag filters
- [ ] Masonry post grid

#### 19. **Shop** - E-commerce product displays
- [ ] Product grid (4-6 cards with image, name, price)
- [ ] Product showcase (featured + thumbnails)
- [ ] Product with quick view modal
- [ ] Product with reviews/rating
- [ ] Product with add-to-cart button
- [ ] Product category filter
- [ ] Product comparison table
- [ ] Product carousel

#### 20. **Interactions** - Interactive UI elements
- [ ] Accordion (expandable sections)
- [ ] Tabs (switch between content)
- [ ] Modals/Dialogs
- [ ] Tooltips
- [ ] Popovers
- [ ] Dropdowns
- [ ] Collapsible sections
- [ ] Loading states/skeletons

#### 21. **UI** - Essential shadcn/ui components showcase
- [ ] Button variants (primary, secondary, ghost, outline)
- [ ] Badge variants (default, secondary, destructive)
- [ ] Card layouts
- [ ] Alert/Toast notifications
- [ ] Checkbox variants
- [ ] Radio button variants
- [ ] Input field variants
- [ ] Textarea
- [ ] Select dropdown
- [ ] Switch toggle
- [ ] Slider
- [ ] Progress bar
- [ ] Skeleton loader
- [ ] Avatar with fallback
- [ ] Breadcrumb navigation

---

## Implementation Checklist

### Phase 1: Setup
- [x] Update `tsconfig.json` - Add `@/*` path alias → `./src/*`
- [x] Update `components.json` - Change paths from `~/` to `@/`
- [x] Run shadcn CLI install with Vega parameters
- [x] Verify shadcn components created in `src/components/ui/`
- [x] Test that imports work correctly
- [x] Update all existing files to use `@/` import paths

### Phase 2: Categories (One at a time, minimum 7 variants each)
- [x] **Hero** - Built 7 section variants (Centered, Image, Gradient, Features, Split, Minimal, Media)
- [x] **Call to Action** - Built 6 section variants (Banner, Cards Grid, Newsletter, Split Form, Gradient, Minimal)
- [x] **Pricing** - Built 6 section variants (3-Tier, Toggle, Comparison, Single, Highlights, Minimal)
- [x] **Teams** - Built 8 section variants (Grid, Cards Hover, Social Links, Two-Column, Bio Expandable, Hover Reveal, Spotlight, Role Filters)
- [x] **Testimonials** - Built 8 section variants (Grid, Carousel, Rating Stars, Company Logos, Video/Media, Featured+Grid, Verified Badges, Two-Column Split)
- [x] **Forms** - Built 8 section variants (Contact, Newsletter, Multi-Step, Validation, Payment, File Upload, Select/Dropdown, Checkbox/Radio)
- [x] **Features & Services** - Built 8 section variants (Grid Icons, Tabs, Hover Reveal, Timeline, Comparison Table, Image Carousel, Animated Icons, Numbered Steps)
- [x] **Footer** - Built 8 section variants (Links Grid+Copyright, Newsletter Focus, Social Icons, Company Info+Contact, Logo+Columns, Dark Minimal, Back-to-Top, Language Switcher)
- [x] **Headers** - Built 8 section variants (Sticky Navigation Bar, Mega Menu, Dark/Light Toggle, Search Bar, Auth Buttons, Breadcrumb Navigation, Announcement Bar, Transparent Over Hero)
- [x] **Contact** - Built 8 section variants (Contact Form + Info 2Col, Contact with Map, Office Locations, Contact Info Cards, Contact + Calendar Booking, Live Chat Widget, Support Channels Matrix, Form with File Attachments)
- [x] **Content** - Built 8 section variants (Text + Image Left, Text + Image Right, Full Width Content, Blockquote, Multi Column Text, Callout Box, Text with Highlight, Side by Side Content)
- [x] **Columns** - Built 8 section variants (2 Columns Equal, 3 Columns Equal, 4 Columns Grid, Sidebar + Main, Uneven 1:2, Overlapping, Masonry, Auto Responsive)
- [x] **Counter** - Built 8 section variants (4 Column Counters, Counters with Background, with Descriptions, with Indicators, Large Prominent, with Large Icons, Timeline Style, Compact)
- [x] **Dividers** - Built 8 section variants (Simple Horizontal Line, Dotted Line, Dashed Line, Icon-Centered, Text-Centered, Gradient, Thick with Spacing, Animated)
- [x] **Social** - Built 8 section variants (Share Buttons, Follow Button States, Social Feed Grid, Social Proof Numbers, Social Reviews/Testimonials, Influencer Showcase, Social Stats, Social CTA)
- [x] **Partner** - Built 8 section variants (Partner Logos Grid, Partner Testimonials, Partner Tiers, Partner Benefits, Partner Comparison, Featured Partners, Partner Network, Partner CTA)
- [x] **Post** - Built 8 section variants (Blog Card Grid, Featured Post, Post Grid with Metadata, Post with Excerpt, Post Timeline, Post Carousel, Post Categories, Post Subscription)
- [x] **Shop** - Built 8 section variants (Product Grid, Product Card with Review Stars, Product with Quick View, Product Filter Section, Cart Preview, Product Testimonials, Upsell Section, Featured Products)
- [x] **Interactions** - Built 8 section variants (Accordion, Tabs, Toggle, Collapsible Sections, Expandable Cards, Modal Dialog, Tooltip, Popover)
- [x] **UI** - Built 15 component variants (Button Solid, Button Outline, Button Ghost, Button Loading, Form Input, Form Select, Form Textarea, Form Checkbox, Form Radio, Badge, Pills, Card, Alert, Progress Bar, Loader/Spinner)

### Phase 3: Finalization
- [ ] Test copy-to-clipboard on all sections
- [ ] Verify responsive design (mobile/tablet/desktop)
- [ ] Test dark mode consistency
- [ ] Verify all interactive sections work (accordion, tabs, etc.)
- [ ] Update main navigation highlighting (active category)

---

## Technical Notes

**Framework & Tools**:
- Next.js 16.1.1 with App Router
- React 19.2.3
- TypeScript (strict mode)
- Tailwind CSS 4.1.18
- shadcn/ui (Vega preset)
- Lucide React for icons
- Inter font from Google Fonts

**Component Structure**:
```
src/app/blocks/blocks-[category]/page.tsx
├── "use client" directive
├── Navigation component
├── Hero section with category title
├── Grid/Container with section variants
│   ├── Variant 1
│   │   ├── Preview/Demo
│   │   └── Copy Code Button
│   ├── Variant 2
│   │   ├── Preview/Demo
│   │   └── Copy Code Button
│   └── ...
└── Footer component
```

**Copy Code Implementation**:
- Use `useRef()` to reference HTML container
- Extract HTML on click
- Copy to clipboard with `navigator.clipboard.writeText()`
- Show toast notification via `useCopyNotification` hook

**Styling**:
- All sections use Tailwind CSS 4 with Vega theme variables
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Dark mode support (already enabled in root layout)
- Neutral color palette with accent colors from shadcn/ui

**Asset Guidelines**:
- Use placeholder images from [picsum.photos](https://picsum.photos), [unsplash.com](https://unsplash.com), or [placeholder.com](https://placeholder.com)
- Use Lucide icons for all icon needs
- No external CSS files - all styling via Tailwind inline classes

---

## Current Progress

| Category | Status | Notes |
|----------|--------|-------|
| Hero | ✅ DONE | 7 variants: Centered, Image, Gradient, Features, Split, Minimal, Media |
| Call to Action | ✅ DONE | 6 variants: Banner, Cards Grid, Newsletter, Split Form, Gradient, Minimal |
| Pricing | ✅ DONE | 6 variants: 3-Tier, Toggle, Comparison, Single, Highlights, Minimal |
| Teams | ✅ DONE | 8 variants: Grid, Cards Hover, Social Links, Two-Column, Bio Expandable, Hover Reveal, Spotlight, Role Filters |
| Testimonials | ✅ DONE | 8 variants: Grid, Carousel, Rating Stars, Company Logos, Video/Media, Featured+Grid, Verified Badges, Two-Column Split |
| Forms | ✅ DONE | 8 variants: Contact, Newsletter, Multi-Step, Validation, Payment, File Upload, Select/Dropdown, Checkbox/Radio |
| Features & Services | ✅ DONE | 8 variants: Grid Icons, Tabs, Hover Reveal, Timeline, Comparison Table, Image Carousel, Animated Icons, Numbered Steps |
| Footer | ✅ DONE | 8 variants: Links Grid+Copyright, Newsletter Focus, Social Icons, Company Info+Contact, Logo+Columns, Dark Minimal, Back-to-Top, Language Switcher |
| Headers | ✅ DONE | 8 variants: Sticky Navigation Bar, Mega Menu, Dark/Light Toggle, Search Bar, Auth Buttons, Breadcrumb Navigation, Announcement Bar, Transparent Over Hero |
| Contact | ✅ DONE | 8 variants: Contact Form + Info 2Col, Contact with Map, Office Locations, Contact Info Cards, Contact + Calendar Booking, Live Chat Widget, Support Channels Matrix, Form with File Attachments |
| Content | ✅ DONE | 8 variants: Text + Image Left, Text + Image Right, Full Width Content, Blockquote, Multi Column Text, Callout Box, Text with Highlight, Side by Side Content |
| Columns | ✅ DONE | 8 variants: 2 Columns Equal, 3 Columns Equal, 4 Columns Grid, Sidebar + Main, Uneven 1:2, Overlapping, Masonry, Auto Responsive |
| Counter | ✅ DONE | 8 variants: 4 Column Counters, Counters with Background, with Descriptions, with Indicators, Large Prominent, with Large Icons, Timeline Style, Compact |
| Dividers | ✅ DONE | 8 variants: Simple Horizontal Line, Dotted Line, Dashed Line, Icon-Centered, Text-Centered, Gradient, Thick with Spacing, Animated |
| Social | ✅ DONE | 8 variants: Share Buttons, Follow Button States, Social Feed Grid, Social Proof Numbers, Social Reviews/Testimonials, Influencer Showcase, Social Stats, Social CTA |
| Partner | ✅ DONE | 8 variants: Partner Logos Grid, Partner Testimonials, Partner Tiers, Partner Benefits, Partner Comparison, Featured Partners, Partner Network, Partner CTA |
| Post | ✅ DONE | 8 variants: Blog Card Grid, Featured Post, Post Grid with Metadata, Post with Excerpt, Post Timeline, Post Carousel, Post Categories, Post Subscription |
| Shop | ✅ DONE | 8 variants: Product Grid, Product Card with Review Stars, Product with Quick View, Product Filter Section, Cart Preview, Product Testimonials, Upsell Section, Featured Products |
| Interactions | ✅ DONE | 8 variants: Accordion, Tabs, Toggle, Collapsible Sections, Expandable Cards, Modal Dialog, Tooltip, Popover |
| UI | ✅ DONE | 15 variants: Button Solid, Button Outline, Button Ghost, Button Loading, Form Input, Form Select, Form Textarea, Form Checkbox, Form Radio, Badge, Pills, Card, Alert, Progress Bar, Loader/Spinner |

---

## Commands to Execute

```bash
# 1. Update path aliases (manual - see step 2)

# 2. Run shadcn install
npx shadcn@latest create --preset "https://ui.shadcn.com/init?base=base&style=vega&baseColor=neutral&theme=neutral&iconLibrary=lucide&font=inter&menuAccent=subtle&menuColor=default&radius=default&template=next" --template next

# 3. Navigate to project and verify
cd c:\DEV\landingpagemaker
npm list @shadcn/ui

# 4. Start dev server to test
npm run dev
```

---

## Next Steps

1. ✅ Create this PRD file
2. Update path aliases in `tsconfig.json` and `components.json`
3. Execute shadcn CLI install
4. Build **Hero** category with 7 section variants
5. Continue with other categories one by one
