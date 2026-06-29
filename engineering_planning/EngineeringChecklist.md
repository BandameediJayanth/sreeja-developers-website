# Engineering Quality Checklist – Sreeja Developers and Constructions

**Role:** Engineering Manager & Scrum Master  
**Project:** Sreeja Highway City Web Platform (MVP)  
**Document:** EngineeringChecklist.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. Pre-Development Setup Checklist
*   [ ] Initialize Git repository, configure branching rules, and set up `.gitignore` settings.
*   [ ] Configure TypeScript in strict mode inside `tsconfig.json`.
*   [ ] Set up ESLint and Prettier rules to enforce consistent styling configurations.
*   [ ] Map design system color and spacing tokens to custom CSS variables.
*   [ ] Configure local environment files (`.env.local`) for Supabase credentials.

---

## 2. Component Code Quality Standards
*   [ ] Every component must map to a unique index ID (e.g., `CMP-004 Button`) from the inventory.
*   [ ] Use functional components with explicit TypeScript prop declarations.
*   [ ] Wrap dynamic component classes inside the `cn` class merge utility.
*   [ ] Implement native browser lazy loading (`loading="lazy"`) for images below the first screen fold.
*   [ ] Verify color contrast ratios (minimum `4.5:1` for standard text) for all UI components.

---

## 3. Staging Verification Checklist
*   [ ] Check layouts on Chrome, Safari, and Firefox browsers.
*   [ ] Verify mobile layouts across various screen sizes (360px to 414px viewports).
*   [ ] Verify keyboard navigation (tab orders, focus states, Escape key dismissals).
*   [ ] Check that form validation rules catch input errors before submission.
*   [ ] Verify form submission data is logged correctly inside the Supabase database.
*   [ ] Check that email notifications trigger correctly when a new lead is captured.

---

## 4. Performance & SEO Validation Checklist
*   [ ] Run Google Lighthouse audits to confirm performance targets (score `> 95` on mobile).
*   [ ] Convert images to WebP/AVIF formats and verify dimensions are set to prevent layout shifts.
*   [ ] Preload critical fonts and set the `font-display: swap` CSS property.
*   [ ] Add Dynamic Open Graph and Twitter card meta tags to all layout templates.
*   [ ] Validate schema.org structured JSON-LD data packages.

---

## 5. Pre-Launch Checklist
*   [ ] Build the production bundle cleanly without compile warnings.
*   [ ] Point the custom domain name to Vercel, verifying active SSL certificates.
*   [ ] Set up GA4 analytics tracking scripts.
*   [ ] Verify the sitemap (`sitemap.xml`) and search robot rules (`robots.txt`) generate correctly.
*   [ ] Confirm the footer shows active RERA numbers (TSRERA/P02400039281) and legal disclaimers.
