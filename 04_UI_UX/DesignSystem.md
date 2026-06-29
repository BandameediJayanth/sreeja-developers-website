# Enterprise Design System – Sreeja Developers and Constructions

**Role:** Principal Design Systems Architect  
**Project:** Sreeja Highway City Web Platform (MVP)  
**Document:** DesignSystem.md  
**Status:** Approved for Implementation (Single Source of Truth)  
**Version:** 1.0  

---

## 1. Design Philosophy

To elevate Sreeja Developers and Constructions to a premium level, the design system combines **architectural structure** with **regional Telugu heritage**. This design system is built to convey trust, high performance, and luxury. It uses a mobile-first approach, ensuring that performance is prioritized without sacrificing visual quality.

```
       ┌─────────────────────────────────────────────────────────┐
       │                 THE STRATEGIC PILLARS                   │
       ├────────────────────────────┬────────────────────────────┤
       │         AESTHETIC          │         FUNCTIONAL         │
       ├────────────────────────────┼────────────────────────────┤
       │ - Obsidian Charcoal (Soil) │ - Mobile First Execution   │
       │ - Telangana Gold (Growth)  │ - Light-Speed Load Times   │
       │ - High-Contrast Serif Type │ - Structured Info Layouts  │
       │ - Smooth Scroll Motions    │ - Clear Actionable Leads   │
       └────────────────────────────┴────────────────────────────┘
```

### 1.1 Brand Personality
Sreeja represents the **Trusted Advisor**—a professional developer that respects regional customs while maintaining high legal and structural standards. We avoid flashy marketing gimmicks, focusing instead on transparency and reliability.

*   **Authoritative:** Professional layout architecture and legal compliance.
*   **Warm & Honest:** Dedicated customer support, particularly for NRI families looking to connect back with their roots.
*   **Premium Quality:** High-quality gated community infrastructure (underground utilities, concrete roads).
*   **Simple & Focused:** Minimal, clear interface designs that get straight to the point.

### 1.2 Emotional Goals
*   **Security (*Mana Nammakam*):** Users must immediately feel their investment is safe, supported by clear RERA and layout approvals.
*   **Aspiration:** Showcasing the opportunity to own premium, high-value land along major growing highways.
*   **Calmness & Clarity:** Clean layouts with plenty of whitespace, removing the clutter often found on real estate portals.
*   **Cultural Pride:** Using imagery and language that reflects the value of land (*Bhoomi*) in Telugu heritage.

### 1.3 Visual Principles
*   **Premium Materials:** Use dark, high-contrast Obsidian backgrounds paired with warm Gold accents.
*   **Clean Grids:** Align elements to structured layout lines to convey engineering precision.
*   **Spacious Layouts:** Keep clear gutters and margins to allow the content to breathe.
*   **Aspirational Imagery:** Showcase high-quality, actual drone photography during golden hours to highlight the property's value.

### 1.4 Design Principles
*   **Performance First:** Every layout decision must support fast page load speeds on mobile networks.
*   **Cohesive Patterns:** Maintain consistent button, typography, and card designs across all pages.
*   **Content is King:** Prioritize direct, high-contrast text and layout maps over decorative elements.
*   **Scale Ready:** Design components dynamically to easily accommodate new projects in the future.

### 1.5 UX Principles
*   **Mobile-First Approach:** Design layouts for mobile screens first, expanding columns and gutters for desktop screens.
*   **Two-Tap Navigation:** Ensure users can access key project summaries or direct contact details within two taps.
*   **Contextual Assistance:** Group helpful FAQs, map directions, and download actions directly within the sections where users might need them.
*   **Accessible by Default:** Meet WCAG AA guidelines for color contrast, readable text sizes, and keyboard navigation.

---

## 2. Responsive System

The responsive system is built to scale layouts smoothly from small mobile screens to large desktop viewports.

### 2.1 Viewport Breakpoints
*   **Mobile (Portrait/Landscape):** `< 640px` (Target canvas: 360px - 414px)
*   **Tablet (Portrait/Landscape):** `640px` to `1023px` (Target canvas: 768px - 960px)
*   **Laptop (Desktop Small):** `1024px` to `1279px` (Target canvas: 1024px - 1200px)
*   **Desktop:** `1280px` to `1439px` (Target canvas: 1280px - 1400px)
*   **Ultra-wide (Desktop Large):** `>= 1440px` (Target canvas: 1440px - 1920px)

### 2.2 Container Widths
*   **Mobile:** Full width (`100%`) with `16px` outer margins.
*   **Tablet:** Max width `600px` (Portrait) or `720px` (Landscape) with `24px` outer margins.
*   **Laptop:** Max width `960px` with centered alignments.
*   **Desktop:** Max width `1200px` with centered alignments.
*   **Ultra-wide:** Max width `1360px` with centered alignments.

### 2.3 Grid Layout Configurations
*   **Mobile:** 4-column layout, `16px` gutters, `16px` outer margins.
*   **Tablet:** 8-column layout, `20px` gutters, `24px` outer margins.
*   **Laptop:** 12-column layout, `24px` gutters, auto outer margins.
*   **Desktop:** 12-column layout, `24px` gutters, auto outer margins.
*   **Ultra-wide:** 12-column layout, `32px` gutters, auto outer margins.

### 2.4 Safe Areas & Visual Spacing
*   Add a minimum `16px` padding offset at the top and bottom of mobile screens to prevent elements from clipping on device edges.
*   Maintain a default `80px` vertical margin between homepage sections to create a clean visual flow on desktop viewports.

---

## 3. Iconography Guidelines

To maintain visual consistency, all icons follow a unified aesthetic style:

*   **Style:** Minimal outline / linear style. Avoid complex colored fills or skeumorphic details.
*   **Stroke Width:** Configured at a consistent `2px` vector weight, adapting to `1.5px` when displayed inside smaller components.
*   **Stroke Terminals:** Round cap and join rules (`stroke-linecap="round"` `stroke-linejoin="round"`) to soften vector edges.
*   **Standard Sizing Tokens:**
    *   *Small (Input Icons, Inline Indicators):* `16px` by `16px`
    *   *Medium (Standard Buttons, Navigation):* `24px` by `24px`
    *   *Large (Service Blocks, Feature Cards):* `36px` by `36px`
*   **Usage Rules:** Use icons strictly to support text labels. Never present standalone icons without accompanying tooltip descriptions or ARIA labels.
*   **Accessibility:** Add `aria-hidden="true"` to decorative icons. For interactive buttons that only show an icon, use an explicit `aria-label` (e.g., `<button aria-label="Call Helpline">`).

---

## 4. Imagery Guidelines

High-quality images are crucial to convey premium luxury and build trust with buyers:

*   **Hero Images:** Show actual landscape photography shot during golden hours, featuring clear views of layout roads and main entrances.
*   **Gallery Progress Images:** Show actual construction progress (blacktop roads, boundary walls, water utilities) with high color contrast.
*   **Drone Video/Stills:** Show the project's proximity to the national highway, overlaying clean gold borders to mark the layout limits.
*   **Map screenshots:** Show clear landmarks, exits, and road connections using a customized dark-theme overlay.
*   **Aspect Ratios & Cropping:**
    *   *Landscape Banners:* `16:9` (desktop) or `4:3` (mobile). Crop from the center to keep key subjects visible.
    *   *Standard Cards:* `3:2` to maintain uniform layout shapes.
    *   *Symmetrical Closeups:* `1:1` square crops.
*   **Compression & Formats:** Convert all static images to WebP or AVIF format. Compression quality is capped at `80%` to keep file sizes under `200KB` without losing visual detail.
*   **Responsive Rules:** Use responsive image tags (`srcset` and `sizes`) to serve appropriately sized images to mobile and desktop screens.
*   **Lazy Loading Rules:** Apply lazy loading (`loading="lazy"`) to all off-screen images. Show a low-resolution blur placeholder while loading.
*   **Priority Images:** The main hero banner image on the homepage and project pages must bypass lazy loading (`priority` attribute enabled) to optimize Largest Contentful Paint (LCP) speeds.

---

## 5. Performance Guidelines

Performance is a key factor in keeping users engaged and improving SEO rankings:

*   **Image Optimization:** Serve images in WebP/AVIF formats, apply explicit dimensions to prevent layout shifts, and cache files on CDN edge networks.
*   **Video Optimization:** Compress site drone clips to WebM format with H.264 MP4 fallbacks. Videos must be muted, loop automatically, play inline, and stay under `2MB`.
*   **Lazy Loading:** Apply lazy loading to all components and media assets below the first screen fold.
*   **Code Splitting:** Next.js automatically splits code by page. Dynamic components (like modals or filter panels) should be lazy-loaded only when triggered by the user.
*   **Fonts:** Preload local Google Fonts (Cinzel, Outfit) using the `@next/font` package. Set `font-display: swap` to prevent text layout flashes.
*   **Caching Strategy:** Cache static assets (images, documents, logos) on Vercel's Edge CDN with a `max-age` of one year.
*   **Critical Rendering Path:** Inline critical CSS rules inside the initial document head. Defer loading of analytics scripts until the page has finished rendering.
*   **Core Web Vitals Thresholds:**
    *   *Largest Contentful Paint (LCP):* `< 1.8s`
    *   *Interaction to Next Paint (INP):* `< 150ms`
    *   *Cumulative Layout Shift (CLS):* `< 0.05`

---

## 6. File Organization

The frontend codebase is organized into structured, feature-based directories to keep files modular and maintainable:

```
src/
├── assets/                    # Static brand files (Logos, Icons, Fallback images)
│   ├── branding/              # Brand logos (Primary, Dark, White, Favicon)
│   └── stock/                 # Shared generic images (Tree lines, Land textures)
│
├── styles/                    # Global styling definitions
│   ├── main.css               # Core styling structure
│   └── variables.css          # CSS custom properties for Design Tokens
│
├── types/                     # Shared TypeScript type definitions
│   ├── project.ts             # Project details schemas
│   └── forms.ts               # Form submission types
│
├── lib/                       # Third-party configurations
│   ├── supabase.ts            # Client setup for Supabase (frontend only)
│   └── utils.ts               # Shared helper utilities (e.g., CN class merges)
│
├── utils/                     # Utility helpers
│   ├── formatters.ts          # Price, area, and text formatting functions
│   └── validation.ts          # Client-side form validation helpers
│
├── providers/                 # React Context Providers
│   └── ThemeProvider.tsx      # Handles color mode configurations
│
├── hooks/                     # Custom React Hooks
│   ├── useLocalStorage.ts     # Offline form fallback helpers
│   └── useScrollPosition.ts   # Navigation background transitions hook
│
├── components/layout/         # General page container templates
│   ├── PageLayout.tsx         # Standard layout with Header and Footer
│   └── CleanLayout.tsx        # Minimal layout for policies or legal documents
│
├── components/                # Modular UI Components (Inventory CMP-001 to CMP-043)
│   ├── ui/                    # Base components (Buttons, Inputs, Badges)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Badge.tsx
│   │
│   ├── feedback/              # Indicators and overlay elements
│   │   ├── Alert.tsx
│   │   ├── Loader.tsx
│   │   └── Skeleton.tsx
│   │
│   └── layout/                # Base layout grids and structural blocks
│       ├── Grid.tsx
│       └── Container.tsx
│
└── features/                  # Business logic pages and sections
    ├── home/                  # Homepage-specific components
    │   ├── Hero.tsx
    │   └── FeaturedProjects.tsx
    │
    ├── about/                 # About page components
    │   └── ExperienceTimeline.tsx
    │
    └── projects/              # Projects index and details components
        ├── ProjectCard.tsx
        └── ProjectAmenities.tsx
```
