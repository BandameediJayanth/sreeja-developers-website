# Next.js Folder Structure – Sreeja Developers and Constructions

**Role:** Principal Frontend Architect  
**Project:** Sreeja Highway City MVP  
**Document:** FolderStructure.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. Directory Tree Map

The application structure is organized into modular folders to separate styling tokens, client hooks, types, business assets, and routing files:

```
sreeja-developers-frontend/
├── src/
│   ├── app/                   # Canonical Next.js App Router
│   ├── components/            # Shared modular UI components
│   ├── features/              # Domain-specific components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Third-party and local library wrappers
│   ├── providers/             # React context providers
│   ├── styles/                # Global CSS and design tokens
│   ├── types/                 # Shared TypeScript types
│   ├── utils/                 # Shared utility helpers
│   ├── services/              # Client service wrappers
│   ├── config/                # Environment and site configuration
│   └── constants/             # Immutable site constants
│
├── public/                    # Static assets
└── business_assets/           # Master DAM copy directory
```
