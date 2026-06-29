# Prompt Library

**Last Updated:** 2026-06-28  
**Purpose:** Reusable AI prompts for content, assets, and development

---

## Asset Metadata Generation

```
Given the file at {path}, generate asset metadata JSON with:
title, description, altText, caption, seoFilename, category,
copyright, orientation, resolution, dateAdded.
Project: {project-slug}. Category: {hero|gallery|drone|layout|brochure}.
Follow business_assets/templates/schemas/asset-metadata.schema.json.
Do not guess location data — use null for unknown fields.
```

---

## Project README Update

```
Read {project}/metadata/project.json and list files in originals folders.
Update {project}/README.md sections: Current Assets, Missing Assets,
Pending Items, Future Tasks, Last Updated. Do not guess missing items.
```

---

## SEO Meta from project.json

```
Read business_assets/active_projects/{slug}/metadata/project.json.
Write metaTitle (≤60 chars), metaDescription (≤155 chars),
and 5 keywords. Tone: premium, trustworthy, Telangana real estate.
Include RERA number if available.
```

---

## Social Post from Asset

```
Using metadata from {asset-json-path}, write:
1. Instagram caption (150 words, 5 hashtags)
2. WhatsApp broadcast message (80 words)
3. YouTube video description (200 words)
Tone: Mana Nammakam. No discount language.
```

---

## Image Optimization Spec

```
For {original-path}, generate copies in generated/:
- WebP at 800w, 1600w
- AVIF at 800w, 1600w
- JPEG fallback at 1600w q85
- Thumbnail 400w
- OpenGraph 1200x630
Never overwrite originals.
```

---

## Plot Map SVG Trace

```
From layout PDF at {path}, identify plot boundaries.
Output SVG with each plot as <path id="plot-{number}">
data-facing, data-area, data-status attributes.
Do not invent plot data not visible in source.
```

---

## NRI Legal Guide Section

```
Write a section on {topic: FEMA|POA|NRE-NRO|repatriation}
for Telangana open-plot buyers. 300 words. Professional tone.
Mark anything requiring legal review with [LEGAL REVIEW].
Source: company_knowledge only — do not invent regulations.
```

---

## Website Component from project.json

```
Read business_assets/company/*.json and
active_projects/{slug}/metadata/project.json.
Generate a React component that reads paths dynamically.
No hardcoded phone numbers or RERA strings.
```

---

## Migration Validation

```
Compare incoming/_backup-manifest-2026-06-28.json
with post-migration file list. Report any SHA256 mismatches,
missing files, or orphaned legacy paths.
```

---

## Rules for All Prompts

1. Read from `business_assets/` — never hardcode paths
2. Use placeholders for unknown business data
3. Append new items to `TODO.md` when gaps found
4. Never overwrite `originals/`
