# Frontend Architecture Specification – Sreeja Developers and Constructions

**Role:** Principal Frontend Architect  
**Project:** Sreeja Highway City Web Platform (MVP)  
**Document:** FrontendArchitecture.md  
**Status:** Approved for Implementation (Single Source of Truth)  
**Version:** 1.0  

---

## 1. Overall Architectural Framework

The application is built on **Next.js 15 (App Router)** and **React 19**, using a hybrid server/client model to prioritize performance and search engine indexation.

```
                         [ Vercel Edge Network ]
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼ (Static & Dynamic Requests)                   ▼ (Static Assets & Media)
   [ Next.js 15 App Router ]                        [ Cloudflare CDN Edge ]
            │
    ┌───────┴───────────────────────┐
    ▼ (Server Components)           ▼ (Client Components)
[ React Server Components (RSC) ]   [ React Client Components (RCC) ]
(SSG / ISR / SSR Pages)             (Interactive Forms & Maps)
    │                               │
    ▼                               ▼
[ Supabase Backend Service ]     [ FastAPI API endpoints ]
(Project Metadata & Details)    (Form processing & alerts)
```

---

## 2. Rendering & Routing Strategy

*   **App Router Structure:** Uses file-based routing inside the `src/app/` folder. Private files are prefixed with underscores to separate routing paths from internal helper configurations.
*   **Static Rendering (SSG & ISR):** Static pages (About, FAQs, Privacy Policies) are compiled into static HTML. Dynamic details pages use Incremental Static Regeneration (ISR) to cache layout views on edge CDNs.
*   **Dynamic Client Rendering (CSR):** Interactive sections (lead forms, gallery overlays) run on client machines using React's dynamic component loading.

---

## 3. Layout & Navigation Architecture

*   **Root Layout (`src/app/layout.tsx`):** Standardizes page wrappers by loading global style sheets, preloading web fonts, and configuring default HTML structure tags.
*   **Page Layout (`src/components/layout/PageLayout.tsx`):** Integrates global components like the Navigation Header, page containers, and the corporate footer.
*   **Nested Layouts:** Used to apply unique tracking scripts or layouts to specific pages (e.g., project details sub-paths).

---

## 4. Data Fetching & Caching Strategy

*   **RSC Fetching:** Server components query Supabase databases directly during build compilation, bypassing external network calls.
*   **Client Fetching:** Client components send form actions directly to FastAPI server endpoints.
*   **Static Data Caching:** Dynamic data checks are cached on Next.js servers, using cache invalidation schedules to fetch updates without impacting load times.

---

## 5. Error & Loading Boundaries (Suspense Strategy)

*   **Error Boundaries (`error.tsx`):** Every main page route includes a local error boundary to catch runtime exceptions and render fallback states.
*   **Loading Boundaries (`loading.tsx`):** Uses custom skeleton loaders to display placeholders while page content is rendering.
*   **Suspense Strategy:** Interactive or slow-loading features (like project maps) are wrapped in React `Suspense` containers to prevent them from blocking initial page loads.

---

## 6. Code & Asset Loading Optimization

*   **Code Splitting:** Dynamic imports are used to defer loading of interactive overlays (like image lightboxes or contact forms) until triggered by the user.
*   **Asset Optimization:**
    *   *Images:* Use the `next/image` component to automatically resize, compress, and serve images in WebP format.
    *   *Fonts:* Configure local web fonts (`next/font/google`) to load alongside critical layout files, using font-display swaps to prevent layout shifts.

---

## 7. Security Configurations

*   **Content Security Policy (CSP):** Implements CSP header rules to prevent unauthorized scripts from executing on our pages.
*   **Environment Variables:** Server-side configurations (API tokens, Supabase keys) are stored in private environment files and are never exposed to client browsers.

---

## 8. Accessibility & Performance Strategy

*   **Accessibility (A11y):** Ensures semantic HTML structures, high color contrast ratios, screen reader compatibility, and full keyboard navigation tab-orders across all pages.
*   **Performance Benchmarks:**
    *   *Largest Contentful Paint (LCP):* `< 1.8s`
    *   *Interaction to Next Paint (INP):* `< 150ms`
    *   *Cumulative Layout Shift (CLS):* `< 0.05`
