# Frontend Coding Standards – Sreeja Developers and Constructions

**Role:** Principal Frontend Architect  
**Project:** Sreeja Highway City MVP  
**Document:** CodingStandards.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. Naming Conventions

*   **Components & Folders:** PascalCase (e.g., `ProjectCard.tsx`).
*   **Hooks & Hooks Files:** camelCase prefixed with `use` (e.g., `useScrollPosition.ts`).
*   **Types & Interfaces:** PascalCase ending with `Props` or `Type` (e.g., `interface ButtonProps`).
*   **Assets & Media Files:** lowercase kebab-case (e.g., `sreeja-highway-city-hero.jpg`).

---

## 2. Code Structure & Import Conventions

*   **Imports Order:** Group imports by category, separated by empty lines:
    1.  React/Next.js core modules.
    2.  Third-party packages (shadcn, lucide-react).
    3.  Internal components, utilities, and helper hooks.
    4.  Types, constant variables, and local asset paths.
*   **Path Aliasing:** Always use `@/` path mappings (e.g., `import { Button } from '@/components/ui/Button'`).
*   **Exports:** Use named exports rather than default exports for all UI components. This helps prevent naming conflicts and keeps the codebase organized.

---

## 3. TypeScript Rules

*   **Strict Mode:** Enforce strict type checking in `tsconfig.json`. Avoid using the `any` type keyword.
*   **Props Typing:** Explicitly define React children elements and component properties inside interfaces.

---

## 4. Git & Branching Standards

*   **Branching Strategy:** Use the GitFlow branch model:
    *   `main`: Production-ready release branch.
    *   `develop`: Integration branch for active features.
    *   `feature/{task-id}-{description}`: Work branch for individual tasks (e.g., `feature/tsk-086-contact-form`).
*   **Commit Message Convention:** Follow conventional commit structures:
    *   `feat(scope): TSK-XXX commit message` (new feature additions).
    *   `fix(scope): TSK-XXX bug corrections`.
    *   `chore(scope): updates to build steps or packages`.
