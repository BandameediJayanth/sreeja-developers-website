# State Management Specification – Sreeja Developers and Constructions

**Role:** Principal Frontend Architect  
**Project:** Sreeja Highway City MVP  
**Document:** StateManagement.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. State Management Architecture

To prioritize load speeds and performance, state is organized by scope. We avoid complex global state solutions, relying instead on Next.js server caching and standard React hook states:

```
                  [ State Architecture ]
                            │
         ┌──────────────────┼──────────────────┐
         ▼                  ▼                  ▼
  [ Server State ]    [ Client State ]   [ Form State ]
  (Database cached    (Theme toggles &   (React Hook Form
   via Next.js)       lightbox overlays)  with Zod schema)
```

---

## 2. State Scope Definitions

### 2.1 Server State
*   **Definition:** Immutable project layouts, metadata listings, and active configuration details fetched from Supabase.
*   **Management:** Handled via Next.js Server Components. Pages fetch data during compilation, caching the output directly.
*   **Caching & Invalidation:** Project details are revalidated on a schedule (Incremental Static Regeneration - ISR) to fetch updates without impacting load times.

### 2.2 Client State
*   **Definition:** Temporary UI states (active navigation selections, open modals, mobile drawer toggles).
*   **Management:** Standard React states (`useState`, `useContext`) localized to the components that need them.

### 2.3 Form State
*   **Definition:** Input fields, validation checks, and submission statuses.
*   **Management:** Managed using `React Hook Form` for performance, paired with `Zod` for client-side data schema validation.
*   **Offline Fallback:** Validated form inputs are temporarily saved to the browser's `localStorage` in case of network issues, retrying the submission once online.

### 2.4 Theme State
*   **Definition:** Toggling between dark and light themes (primarily dark mode for showcase pages).
*   **Management:** A custom `ThemeProvider` that reads theme preferences from the browser and applies matching style variables.
