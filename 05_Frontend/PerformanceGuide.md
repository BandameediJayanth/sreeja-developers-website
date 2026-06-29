# Performance Optimization Guide – Sreeja Developers and Constructions

**Role:** Principal Frontend Architect  
**Project:** Sreeja Highway City MVP  
**Document:** PerformanceGuide.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. Core Web Vitals Targets

Every page must meet the following performance targets:
*   **Largest Contentful Paint (LCP):** `< 1.8s` (Optimized through WebP conversion and preloading critical images).
*   **Interaction to Next Paint (INP):** `< 150ms` (Optimized by avoiding heavy JavaScript executions on main threads).
*   **Cumulative Layout Shift (CLS):** `< 0.05` (Optimized by setting explicit width and height attributes on all image containers).

---

## 2. Media Optimization Rules

*   **Image Formats:** Convert all static images to WebP or AVIF format. Compression quality is capped at `80%` to keep file sizes under `200KB` without losing visual detail.
*   **The next/image Component:** Always use the Next.js `Image` component. It automatically resizes and optimizes image files based on the user's screen size.
*   **Video Optimization:** Compress site drone clips to WebM format with H.264 MP4 fallbacks. Videos must be muted, loop automatically, play inline, and stay under `2MB`.
*   **Lazy Loading:** Apply lazy loading (`loading="lazy"`) to all off-screen images. The main hero banner image must bypass lazy loading (`priority` attribute enabled) to optimize Largest Contentful Paint (LCP) speeds.

---

## 3. Code Optimization & Bundle Splitting

*   **Dynamic Imports:** Use dynamic imports (`next/dynamic`) to defer loading of interactive overlays (like image lightboxes or contact forms) until triggered by the user.
*   **Prefetching:** Next.js automatically prefetches linked pages that are visible in the viewport, ensuring fast navigation transitions.
*   **Memoization:** Apply React's `memo`, `useMemo`, and `useCallback` hooks on complex components (such as interactive filters or price estimators) to prevent unnecessary re-renders.
*   **Caching Strategy:** Cache static assets (images, documents, logos) on Vercel's Edge CDN with a `max-age` of one year to minimize repeat server requests.
