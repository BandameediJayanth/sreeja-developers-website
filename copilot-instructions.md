# Copilot Instructions - SREEJA DEVELOPERS AND CONSTRUCTIONS

This file is the single source of truth for GitHub Copilot in this repository. Follow it before writing or changing any code.

## 1. Project Overview

### Purpose of the Website
Build a premium, trust-first digital experience for SREEJA Developers and Constructions that showcases land development projects, verifies credibility, and converts qualified visitors into leads.

### Business Goals
- Generate high-quality leads from local and NRI buyers.
- Establish trust through legal transparency, compliance references, and project proof.
- Present the company as a premium, reliable developer in Telangana.
- Improve search visibility for corridor, plots, and project-intent queries.

### Target Audience
- Local plot buyers and family buyers in Telangana.
- NRI investors seeking verified land opportunities.
- High-intent visitors comparing gated layouts and highway-facing plots.

### MVP Objective
Deliver a fast, mobile-first, SEO-ready website with a polished brand presence, clear project discovery, and simple lead capture flows.

### Future Roadmap
Deferred features belong to Phase 2 and beyond. Examples include interactive plot maps, plot reservation, CRM automation, Twilio/OTP flows, payment gateways, gated legal vaults, NRI portal features, and AI chatbots.

## 2. Technology Stack

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React

### Backend
- FastAPI
- SQLAlchemy
- Pydantic

### Database
- Supabase PostgreSQL

### Storage
- Supabase Storage

### Deployment
- Vercel for the frontend
- Railway or Render for the backend

## 3. Repository Structure

Use the canonical `src/app` architecture. Do not create or maintain a competing root-level `app/` structure.

### Canonical Root Layout
- `src/app` - App Router pages, layouts, loading, error, and not-found routes.
- `src/components` - Shared reusable UI components.
- `src/features` - Page- or domain-specific feature components.
- `src/hooks` - Custom React hooks.
- `src/lib` - Library helpers and client wrappers.
- `src/providers` - React providers and context layers.
- `src/styles` - Global CSS, design tokens, and base styling.
- `src/types` - Shared TypeScript types and interfaces.
- `src/utils` - Pure utility helpers.
- `src/services` - Client-side service wrappers and API adapters.
- `src/config` - Site and environment configuration.
- `src/constants` - Immutable application constants.
- `public` - Static assets served directly by Next.js.
- `business_assets` - Canonical media and business content source of truth.
- `backend` - FastAPI backend workspace.
- `13_Project_Management` - Backlog and future-phase planning.

### Purpose of Major Directories
- `src/app`: Route entry points, layouts, metadata, and route-level boundaries.
- `src/components`: Shared atoms, molecules, layout primitives, and feedback components.
- `src/features`: Feature-specific building blocks for pages such as home, projects, about, and FAQs.
- `src/hooks`: Reusable client hooks for scroll, storage, and local behavior.
- `src/lib`: Third-party integrations, helper utilities, and low-level shared code.
- `src/providers`: Global context providers such as theme or app state providers.
- `src/styles`: Global stylesheet entry points and CSS variables.
- `src/types`: Shared TypeScript models and DTOs.
- `src/utils`: Pure functions and formatting helpers.
- `src/services`: Client wrappers for API requests and external services.
- `src/config`: App-level environment and site configuration.
- `src/constants`: Static business values and reusable constants.
- `backend`: FastAPI application structure, models, schemas, and services.
- `business_assets`: Project media, branding, legal documents, and company data.
- `13_Project_Management`: MVP backlog, future roadmap, and planning artifacts.

## 4. Coding Standards

- Use strict TypeScript.
- Prefer functional components only.
- Use Server Components by default.
- Use Client Components only when interactivity requires them.
- Do not duplicate code or duplicate business logic.
- Do not hardcode business data in components.
- Prefer reusable components and shared helpers.
- Design accessibility first.
- Design SEO first.
- Design performance first.

## 5. Design Rules

Follow the approved Design System.

### Colors
- Primary background: Obsidian Charcoal.
- Accent and CTA color: Telangana Gold.
- Trust/support color: Haritha Green.
- Light text: Clear Ivory.

### Typography
- Headings: Cinzel.
- Body and interface text: Outfit.
- Use a clear hierarchy with strong contrast and readable line heights.

### Spacing
- Use the documented spacing tokens.
- Prefer consistent section spacing, generous whitespace, and mobile-safe padding.

### Motion
- Keep motion subtle and fast.
- Use transform and opacity-based animations.
- Respect reduced-motion preferences.

### Component Philosophy
- Components should be composable, reusable, and minimal.
- Keep visual styling consistent across layouts.
- Use components to express semantics and intent, not decoration.

### Responsive Rules
- Design mobile-first.
- Scale up cleanly to tablet, laptop, desktop, and ultra-wide screens.
- Preserve touch target size and readable hierarchy on small screens.

### Dark/Light Mode Rules
- Default showcase pages should use the dark premium theme.
- Policy and legal pages may use light mode where readability is more appropriate.
- Theme values must come from CSS variables and the design token system.

## 6. Component Rules

### Naming Conventions
- Use PascalCase for component files and component names.
- Use kebab-case for asset files.
- Use `use` prefix for hooks.
- Use descriptive names that reflect the component role.

### File Naming
- Keep component file names aligned with component names.
- Place shared UI in `src/components`.
- Place page-specific structures in `src/features`.

### Import Conventions
- Use `@/` path aliases.
- Group imports by core, third-party, internal, and types/constants.
- Prefer named exports for reusable UI code.

### Props
- Define explicit prop interfaces.
- Keep props narrow and intentional.
- Avoid passing large unstructured objects unless the design system requires it.

### Variants
- Use variants for controlled style differences, not for unrelated behavior.
- Keep variant systems consistent across buttons, badges, cards, and similar components.

### Composition
- Prefer composition over duplication.
- Build complex views from smaller reusable parts.
- Keep layout primitives separate from content-specific features.

### Documentation
- Components should be easy to trace back to the component inventory.
- Do not invent new component IDs or undocumented patterns.

## 7. Styling Rules

- Use Tailwind CSS for utility styling.
- Use CSS variables for theme and token values.
- Avoid inline styles unless there is no reasonable alternative.
- Build reusable utility classes for repeated patterns.
- Keep styles responsive-first and mobile-first.
- Do not introduce duplicate styling systems.

## 8. State Management

### Server State
Use for project metadata, company content, and other data fetched from the backend or CMS layer.

### Client State
Use for short-lived UI states such as modals, drawers, hover-driven panels, filters, and local theme toggles.

### Form State
Use for submission flows, validation, dirty state, and lead capture forms.

### Theme State
Use for dark/light mode selection and persistence of user preference.

### When to Use Each
- Use server state for content that should be fetched, cached, or revalidated.
- Use client state for interactive UI concerns.
- Use form state for validated user input.
- Use theme state for appearance and user preference.

## 9. Data Fetching Rules

### SSR
Use for content that should be rendered with request-time data when necessary.

### SSG
Use for stable content that rarely changes and should be maximally fast.

### ISR
Use for content that changes occasionally, such as projects, while preserving static performance.

### CSR
Use only for interactive UI, form handling, or user-specific client behavior.

### Usage Guidance
- Prefer static rendering for marketing, policy, and trust pages.
- Prefer ISR for project directories and details when data updates are periodic.
- Prefer CSR only for interactive parts that must run in the browser.

## 10. Accessibility Standards

- Meet WCAG AA expectations.
- Ensure keyboard navigation works across all interactive surfaces.
- Use ARIA only where semantics alone are insufficient.
- Maintain required contrast ratios.
- Respect reduced-motion preferences.
- Manage focus correctly in modals, drawers, menus, and route changes.

## 11. Performance Standards

- Track and protect Core Web Vitals.
- Optimize images before shipping them.
- Lazy load offscreen assets.
- Use dynamic imports for heavy interactive modules.
- Split bundles by route and feature where possible.
- Cache static assets appropriately.
- Memoize only when there is a real performance need.

## 12. Git Workflow

### Branch Naming
- Use a clear feature branch format such as `feature/<task>-<description>`.
- Use fix, chore, or refactor branch names when the work type is different.

### Commit Message Format
- Use concise conventional commits.
- Keep the subject specific and scoped.
- Examples: `feat(home): add hero structure`, `fix(config): update tsconfig paths`.

### Pull Request Checklist
- Requirements are matched to the approved docs.
- The change stays within MVP scope.
- Accessibility is reviewed.
- Responsive behavior is checked.
- Performance impact is considered.
- No unrelated files were modified.

### Definition of Done
- The implementation matches the approved documentation.
- The change is tested.
- The change is reviewed.
- The change is committed only after validation.

## 13. Engineering Workflow

Every implementation must follow:

Task
↓
Implement
↓
Test
↓
Review
↓
Commit

Never skip steps.

## 14. Copilot Behavior

Whenever implementing code:

1. Read existing project documentation first.
2. Follow the Design System.
3. Follow the Component Library.
4. Never invent architecture.
5. Never contradict project documentation.
6. Ask for clarification if requirements conflict.
7. Never implement future V2 features unless explicitly requested.

## 15. Things Never To Do

- Do not hardcode project information.
- Do not create duplicate components.
- Do not bypass accessibility.
- Do not ignore responsive layouts.
- Do not use placeholder production data without clearly marking it.
- Do not generate unnecessary abstraction.
- Do not modify unrelated files.
- Do not introduce undocumented architectural patterns.
- Do not implement V2 features during MVP work.
