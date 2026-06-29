# Rendering Strategy Specification – Sreeja Developers and Constructions

**Role:** Principal Frontend Architect  
**Project:** Sreeja Highway City MVP  
**Document:** RenderingStrategy.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. Route Rendering Matrix

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              ROUTE RENDERING MATRIX                                    │
├─────────────────────────┬──────────────┬───────────────────────────────────────────────┤
│ Route Path              │ Strategy     │ Architectural Rationale                       │
├─────────────────────────┼──────────────┼───────────────────────────────────────────────┤
│ /                       │ SSG          │ Compiled static HTML to optimize page load    │
│                         │              │ speeds and improve SEO rankings.              │
│ /about-us               │ SSG          │ Static content with no dynamic data, built    │
│                         │              │ during compile time to save server resources. │
│ /projects               │ ISR (24h)    │ Static catalog grid. Revalidates daily to     │
│                         │              │ catch new project additions automatically.    │
│ /projects/[slug]        │ ISR (24h)    │ Details pages are cached on edge networks.    │
│                         │              │ Updates daily to sync statuses and pricing.   │
│ /gallery                │ SSG          │ Image portfolio compiled during build time to │
│                         │              │ ensure fast page loads.                       │
│ /contact                │ CSR / SSG    │ Page layout compiles statically, while form   │
│                         │              │ validations run dynamically on the client.    │
│ /faqs                   │ SSG          │ Flat accordion structures compiled during     │
│                         │              │ build time for fast client interactions.      │
│ /privacy-policy         │ SSG          │ Legal terms compiled statically to minimize   │
│                         │              │ server overhead.                              │
│ /terms-conditions       │ SSG          │ Standard terms compiled statically to         │
│                         │              │ minimize server overhead.                     │
└─────────────────────────┴──────────────┴───────────────────────────────────────────────┘
```

---

## 2. Rendering Strategy Definitions

*   **Static Site Generation (SSG):** Pages are compiled into static HTML files during build time. These files are hosted directly on CDN edge servers, providing instant load times for users.
*   **Incremental Static Regeneration (ISR):** Next.js caches static pages but checks for database updates on a set schedule (e.g., every 24 hours). This allows the site to update dynamically without rebuilding the entire application.
*   **Client-Side Rendering (CSR):** Interactive features (such as form field validations, image lightboxes, and dropdown selections) execute dynamically in the user's browser using React client components.
