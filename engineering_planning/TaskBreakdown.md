# Engineering Task Breakdown – Sreeja Developers and Constructions

**Role:** Engineering Manager & Scrum Master  
**Project:** Sreeja Highway City Web Platform (MVP)  
**Document:** TaskBreakdown.md  
**Status:** Approved for Execution  
**Version:** 1.0  

---

## Milestone 0: Project Setup (TSK-001 to TSK-015)

### TSK-001: Initialize Git Repository
*   **Epic:** Project Setup | **Feature:** Version Control Setup
*   **Description:** Initialize a Git repository, configure `.gitignore` for Next.js, and establish branch protection rules (main, develop).
*   **Priority:** Critical | **Dependencies:** None | **Estimated Hours:** 2
*   **Acceptance Criteria:** Main and develop branches exist, and direct commits to main are blocked.
*   **Files Affected:** `.gitignore`, `.github/workflows/`
*   **Related Pages:** None | **Related Components:** None
*   **Definition of Done:** Repository is pushed to remote, and basic configuration checks are verified.
*   **Testing Requirements:** Run standard checkout and branching tests on developer terminals.

### TSK-002: Next.js Boilerplate Installation
*   **Epic:** Project Setup | **Feature:** Framework Setup
*   **Description:** Install Next.js version 14+ with TypeScript, Tailwind CSS, and standard configurations.
*   **Priority:** Critical | **Dependencies:** TSK-001 | **Estimated Hours:** 3
*   **Acceptance Criteria:** Next.js application compiles cleanly and runs locally.
*   **Files Affected:** `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.mjs`
*   **Definition of Done:** Project builds without TypeScript errors using standard checks.
*   **Testing Requirements:** Execute development build checks using dev servers.

### TSK-003: Configure Tailwind CSS & Color Tokens
*   **Epic:** Project Setup | **Feature:** Design System Tokens
*   **Description:** Map Sreeja design tokens (Obsidian Charcoal, Telangana Gold) to Tailwind color configurations.
*   **Priority:** High | **Dependencies:** TSK-002 | **Estimated Hours:** 2
*   **Files Affected:** `tailwind.config.ts`, `src/styles/variables.css`
*   **Definition of Done:** Custom brand classes resolve correctly during local compilation checks.

---

## Milestone 1: Foundation (TSK-016 to TSK-030)

### TSK-016: Global Theme Provider Setup
*   **Epic:** Foundation | **Feature:** Theme Management
*   **Description:** Create ThemeProvider to manage dark/light modes.
*   **Priority:** High | **Dependencies:** TSK-003 | **Estimated Hours:** 3
*   **Files Affected:** `src/providers/ThemeProvider.tsx`
*   **Definition of Done:** Page themes toggle cleanly without layout flashes.

### TSK-017: Core Layout Component (CMP-040)
*   **Epic:** Foundation | **Feature:** Page Container
*   **Description:** Build the Base Container component to enforce responsive horizontal grid safe-areas.
*   **Priority:** High | **Dependencies:** TSK-002 | **Estimated Hours:** 3
*   **Files Affected:** `src/components/layout/Container.tsx`
*   **Related Components:** CMP-040 Container
*   **Definition of Done:** Components render centered margins on desktop viewports.

---

## Milestone 2: Homepage (TSK-031 to TSK-050)

### TSK-031: Homepage Hero Section (CMP-003)
*   **Epic:** Homepage | **Feature:** Visual Hero
*   **Description:** Build the homepage hero section featuring H1 headings, background video, and primary action CTAs.
*   **Priority:** High | **Dependencies:** TSK-017 | **Estimated Hours:** 6
*   **Files Affected:** `src/features/home/Hero.tsx`
*   **Related Components:** CMP-003 Hero, CMP-004 Button
*   **Related Pages:** Homepage (`/`)
*   **Definition of Done:** Text displays with high contrast over background video overlays.
*   **Testing Requirements:** Confirm responsive scaling on mobile screen simulations.

### TSK-032: Featured Projects Section
*   **Epic:** Homepage | **Feature:** Ventures Showcase
*   **Description:** Render active venture layout cards inside the featured project list grid.
*   **Priority:** High | **Dependencies:** TSK-031 | **Estimated Hours:** 5
*   **Files Affected:** `src/features/home/FeaturedProjects.tsx`
*   **Related Components:** CMP-006 Project Card
*   **Related Pages:** Homepage (`/`)
*   **Definition of Done:** Cards render details cleanly and navigate users to project details page on tap.

---

## Milestone 3: Projects (TSK-051 to TSK-070)

### TSK-051: Standardized Project Details Layout (CMP-010)
*   **Epic:** Projects | **Feature:** Reusable Template
*   **Description:** Implement the reusable details template structure.
*   **Priority:** High | **Dependencies:** TSK-017 | **Estimated Hours:** 8
*   **Files Affected:** `src/features/projects/ProjectDetails.tsx`
*   **Related Components:** CMP-010 ProjectDetails
*   **Related Pages:** Project Details (`/projects/{slug}`)
*   **Definition of Done:** Dynamic content updates correctly based on path routing inputs.

---

## Milestone 4: Gallery (TSK-071 to TSK-085)

### TSK-071: Media Gallery Grid (CMP-013)
*   **Epic:** Gallery | **Feature:** Project Portfolio
*   **Description:** Render site development pictures in a responsive grid.
*   **Priority:** Medium | **Dependencies:** TSK-017 | **Estimated Hours:** 5
*   **Files Affected:** `src/features/projects/GalleryGrid.tsx`
*   **Related Components:** CMP-013 GalleryGrid
*   **Related Pages:** Gallery (`/gallery`)
*   **Definition of Done:** Images display with correct proportions and support responsive scaling.

---

## Milestone 5: Contact (TSK-086 to TSK-100)

### TSK-086: Site Visit Form Interface (CMP-017)
*   **Epic:** Contact | **Feature:** Lead Form
*   **Description:** Set up input fields and selectors to capture site visit bookings.
*   **Priority:** High | **Dependencies:** TSK-017 | **Estimated Hours:** 6
*   **Files Affected:** `src/components/ui/Form.tsx`
*   **Related Components:** CMP-017 BaseForm, CMP-018 TextInput
*   **Related Pages:** Contact Page (`/contact`)
*   **Definition of Done:** Forms process client-side validation rules correctly.

---

## Milestone 6: Backend & Supabase (TSK-101 to TSK-115)

### TSK-101: Supabase Database Schema
*   **Epic:** Backend | **Feature:** Database Setup
*   **Description:** Configure PostgreSQL tables to store incoming lead submissions.
*   **Priority:** Critical | **Dependencies:** None | **Estimated Hours:** 4
*   **Files Affected:** `supabase/migrations/`
*   **Definition of Done:** Table configurations deployed to Supabase instance.

### TSK-102: FastAPI Form Handling Server
*   **Epic:** Backend | **Feature:** API Endpoint
*   **Description:** Develop FastAPI endpoints to process form validation and database logging.
*   **Priority:** High | **Dependencies:** TSK-101 | **Estimated Hours:** 6
*   **Files Affected:** `backend/main.py`
*   **Definition of Done:** API endpoints accept form submissions and write updates to Supabase PostgreSQL.

---

## Milestone 7: SEO & Indexation (TSK-116 to TSK-125)

### TSK-116: Dynamic Metadata Configuration
*   **Epic:** SEO | **Feature:** Page Tags
*   **Description:** Implement dynamic title and meta description tags across pages.
*   **Priority:** High | **Dependencies:** TSK-002 | **Estimated Hours:** 3
*   **Files Affected:** `src/layouts/PageLayout.tsx`
*   **Definition of Done:** Correct metadata tags render in page source outputs.

---

## Milestone 8: Testing & Quality Assurance (TSK-126 to TSK-135)

### TSK-126: Core User Journey Testing
*   **Epic:** Quality Assurance | **Feature:** Integration Tests
*   **Description:** Verify form submissions and page navigation paths.
*   **Priority:** High | **Dependencies:** Milestone 5, Milestone 6 | **Estimated Hours:** 6
*   **Definition of Done:** Test scripts compile and execute successfully.

---

## Milestone 9: Deployment (TSK-136 to TSK-145)

### TSK-136: Vercel Production Release
*   **Epic:** Deployment | **Feature:** Release Release
*   **Description:** Deploy the Next.js application to Vercel production environments.
*   **Priority:** Critical | **Dependencies:** Milestone 0 to Milestone 8 | **Estimated Hours:** 4
*   **Definition of Done:** Live website resolves on custom domain with active SSL validation.

---

## Milestone 10: Future Version 2 (TSK-146+)

### TSK-146: Interactive SVG Plot Map Integration
*   **Epic:** Future Scope | **Feature:** Interactive Mapping
*   **Description:** Map layout vector graphics to show real-time plot availability.
*   **Priority:** Low (Deferred) | **Dependencies:** V2 Rollout | **Estimated Hours:** 24
*   **Files Affected:** `src/features/projects/PlotMap.tsx`
*   **Related Components:** CMP-010 ProjectDetails
*   **Definition of Done:** Plot vectors update color-coded statuses based on DB availability inputs.
