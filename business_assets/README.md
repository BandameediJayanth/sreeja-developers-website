# Business Assets — Enterprise DAM Structure

**Company:** Sreeja Developers and Constructions  
**Last Updated:** 2026-06-28  
**Status:** Phase 0 + Phase 1 complete — **no files moved yet**

---

## Purpose

This folder is the **single source of truth** for all company media, project data, and website-ready content. The website reads dynamically from here — no hardcoded asset paths in code.

---

## Top-Level Structure

```
business_assets/
├── active_projects/       ← Live ventures (website-visible)
├── upcoming_projects/     ← Pre-launch ventures
├── completed_projects/    ← Sold-out / historical (lifecycle, not archive/)
├── branding/              ← Corporate logos and brand assets
├── office/                ← Office photos, floor plans
├── company/               ← JSON business data (powers website)
├── shared_assets/         ← Stock/generic/unassigned media
├── templates/             ← Project template + JSON schemas
├── incoming/              ← Raw drops (WhatsApp, email) before processing
├── migration-report.md    ← Phase 2 move plan (awaiting approval)
└── README.md
```

---

## Project Standard Structure

Every project in `active_projects/`, `upcoming_projects/`, or `completed_projects/` follows:

```
{project-slug}/
├── metadata/
│   ├── project.json           ← Website/CMS single source of truth
│   └── assets/                ← One JSON per media file
├── images/originals/
├── videos/originals/
├── brochures/originals/
├── layouts/originals/
├── approvals/
├── documents/
├── social_media/
├── generated/                 ← Optimized copies ONLY
└── README.md
```

**Rules:**
- Never overwrite `originals/`
- Never use WhatsApp filenames
- All optimization → `generated/`
- Move projects between status folders as lifecycle changes

---

## Naming Convention

`{project-slug}-{category}-{nn}.{ext}` in kebab-case

| Category | Example |
|----------|---------|
| Hero | `sreeja-highway-city-hero.jpg` |
| Drone | `sreeja-highway-city-drone-01.mp4` |
| Gallery | `sreeja-highway-city-gallery-03.jpg` |
| Layout | `sreeja-highway-city-layout.pdf` |
| Brochure | `sreeja-highway-city-brochure.pdf` |

---

## Company Data (`company/`)

| File | Powers |
|------|--------|
| `company.json` | About page, footer, schema.org |
| `office.json` | Contact page map embed |
| `contacts.json` | Phone, email, WhatsApp CTAs |
| `social-links.json` | Footer social icons |
| `branding.json` | Design tokens, logo paths |
| `business-hours.json` | Contact / callback scheduling |

---

## CMS Import Compatibility

Folder layout maps 1:1 to:

| Platform | Mapping |
|----------|---------|
| **Sanity** | `project.json` → document; `metadata/assets/` → media refs |
| **Supabase Storage** | `{statusFolder}/{slug}/` → bucket prefix |
| **AWS S3** | Same prefix structure |
| **Cloudinary** | `{slug}/images/originals/` → folder |

---

## Lifecycle

```
upcoming_projects/  →  active_projects/  →  completed_projects/
```

No generic `archive/` folder. Projects move naturally between status folders.

---

## Current Phase

| Phase | Status |
|-------|--------|
| Phase 0 — Backup manifest | ✅ `incoming/_backup-manifest-2026-06-28.json` |
| Phase 1 — Scaffold + metadata | ✅ Complete |
| Phase 2 — File migration | ⏸ **Awaiting approval** — see `migration-report.md` |

---

## Related

- `../company_knowledge/` — Strategy, copy, personas (non-media)
- `../TODO.md` — Missing business details requiring stakeholder input
- `../01_Product_Requirements/PRD.md` — Website feature requirements
