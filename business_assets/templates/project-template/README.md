# Project Template

Copy this folder to `active_projects/`, `upcoming_projects/`, or `completed_projects/` and rename to your project slug (kebab-case).

## Standard Structure

```
{project-slug}/
├── metadata/
│   ├── project.json          ← Single source of truth for website/CMS
│   └── assets/               ← One JSON per media file
├── images/originals/         ← Source photos only
├── videos/originals/         ← Source videos only
├── brochures/originals/      ← Source PDF brochures
├── layouts/originals/        ← Source layout PDFs/scans
├── approvals/                ← RERA, HMDA, DTCP certificates
├── documents/                ← Link docs, title reports, legal packs
├── social_media/             ← Export-ready social creatives (manual)
├── generated/                ← Optimized copies ONLY (never overwrite originals)
└── README.md
```

## Rules

1. **Never overwrite originals.** All web optimization goes to `generated/`.
2. **Never use WhatsApp filenames.** Use `{project-slug}-{category}-{nn}.{ext}`.
3. **Every media file** gets a companion JSON in `metadata/assets/`.
4. **Update `project.json`** when assets or status change.
5. **Move between status folders** when project lifecycle changes (upcoming → active → completed).

## Naming Examples

| Type | Example |
|------|---------|
| Hero | `sreeja-highway-city-hero.jpg` |
| Drone | `sreeja-highway-city-drone-01.mp4` |
| Gallery | `sreeja-highway-city-gallery-03.jpg` |
| Layout | `sreeja-highway-city-layout.pdf` |
| Brochure | `sreeja-highway-city-brochure.pdf` |

## CMS Import

This structure maps 1:1 to Sanity documents, Supabase Storage buckets, AWS S3 prefixes, and Cloudinary folders without restructuring.

## Last Updated

2026-06-28
