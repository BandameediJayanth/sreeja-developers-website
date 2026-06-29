# Migration Report — Business Assets Reorganization

**Generated:** 2026-06-28  
**Phase:** 1 (Planning) — **NO FILES HAVE BEEN MOVED**  
**Backup:** `incoming/_backup-manifest-2026-06-28.json` (SHA256 of all 17 legacy files)

---

## Approval Required

Review every row below. Reply **"Proceed with Phase 2"** to execute file moves and renames. Until then, all originals remain in legacy locations.

---

## Summary

| Metric | Value |
|--------|-------|
| Files to migrate | 17 |
| Files to rename | 17 (100%) |
| Legacy folders to remove (after migration) | 5 |
| New project scaffolds created | 6 |
| Asset metadata JSON created | 17 |
| Unresolved review items | 4 |

---

## Migration Map

### 1. Corporate Branding

| # | Old Path | ↓ New Path | ↓ New Filename | Reason |
|---|----------|------------|----------------|--------|
| 1 | `business_assets/Sreeja Logo.pdf` | `business_assets/branding/originals/` | `sreeja-developers-logo-primary.pdf` | Corporate logo; belongs in branding, not project root |

**Metadata:** `branding/metadata/sreeja-developers-logo-primary.json`

---

### 2. Sreeja Highway City (Active — Flagship)

| # | Old Path | ↓ New Path | ↓ New Filename | Reason |
|---|----------|------------|----------------|--------|
| 2 | `Highway city assets/SREEJA HIGHWAY CITY.pdf` | `active_projects/sreeja-highway-city/brochures/originals/` | `sreeja-highway-city-brochure.pdf` | Marketing brochure; kebab-case naming |
| 3 | `Highway city assets/SREEJA HIGHWAY CITY LAYOUT.pdf` | `active_projects/sreeja-highway-city/layouts/originals/` | `sreeja-highway-city-layout.pdf` | Master layout PDF separated from brochure |
| 4 | `Highway city assets/WhatsApp Image 2026-06-29 at 7.41.54 AM.jpeg` | `active_projects/sreeja-highway-city/images/originals/` | `sreeja-highway-city-hero.jpg` | Composite promo banner → hero asset |
| 5 | `Highway city assets/WhatsApp Video 2026-06-29 at 6.56.31 AM.mp4` | `active_projects/sreeja-highway-city/videos/originals/` | `sreeja-highway-city-drone-01.mp4` | Drone footage; numbered video convention |

**Metadata:** `active_projects/sreeja-highway-city/metadata/assets/*.json` (4 files)  
**Legacy folder removed:** `Highway city assets/`

---

### 3. Farmland Project (Active — Name TBD)

| # | Old Path | ↓ New Path | ↓ New Filename | Reason |
|---|----------|------------|----------------|--------|
| 6 | `Farmland assets/Updated Brochure.pdf` | `active_projects/farmland/brochures/originals/` | `farmland-brochure.pdf` | Vague name → project-scoped brochure |
| 7 | `Farmland assets/WhatsApp Image 2026-06-29 at 12.41.00 PM.jpeg` | `active_projects/farmland/images/originals/` | `farmland-gallery-01.jpg` | Site photo; paired gallery sequence |
| 8 | `Farmland assets/WhatsApp Image 2026-06-29 at 12.41.01 PM.jpeg` | `active_projects/farmland/images/originals/` | `farmland-gallery-02.jpg` | Same site visit as gallery-01 |

**Metadata:** `active_projects/farmland/metadata/assets/*.json` (3 files)  
**Legacy folder removed:** `Farmland assets/`  
**⚠ Review:** Slug `farmland` is placeholder until official name confirmed. Brochure is 26.75 MB — compress copy to `generated/` after migration.

---

### 4. Karthik Homes Phase-III (Active)

| # | Old Path | ↓ New Path | ↓ New Filename | Reason |
|---|----------|------------|----------------|--------|
| 9 | `karthik homes assets/Layout.pdf` | `active_projects/karthik-homes-phase-3/layouts/originals/` | `karthik-homes-phase-3-layout.pdf` | Generic Layout.pdf → project-scoped |
| 10 | `karthik homes assets/WhatsApp Image 2026-06-29 at 1.16.10 PM.jpeg` | `active_projects/karthik-homes-phase-3/images/originals/` | `karthik-homes-phase-3-layout-scan-01.jpg` | Photo of printed layout; complements PDF |

**Metadata:** `active_projects/karthik-homes-phase-3/metadata/assets/*.json` (2 files)  
**Legacy folder removed:** `karthik homes assets/`

---

### 5. Sai Enclave (Active)

| # | Old Path | ↓ New Path | ↓ New Filename | Reason |
|---|----------|------------|----------------|--------|
| 11 | `sai enclave assets/WhatsApp Image 2026-06-29 at 1.06.10 PM.jpeg` | `active_projects/sai-enclave/layouts/originals/` | `sai-enclave-layout-branded-01.jpg` | Branded Sai Enclave layout plan |
| 12 | `sai enclave assets/WhatsApp Image 2026-06-29 at 12.59.24 PM.jpeg` | `active_projects/sai-enclave/layouts/originals/` | `sai-enclave-layout-survey-01.jpg` | Batasingaram survey layout (association TBD) |
| 13 | `sai enclave assets/WhatsApp Image 2026-06-29 at 1.14.54 PM.jpeg` | `active_projects/sai-enclave/images/originals/` | `sai-enclave-gallery-01.jpg` | Internal road site photo |

**Metadata:** `active_projects/sai-enclave/metadata/assets/*.json` (3 files)  
**Legacy folder removed:** `sai enclave assets/`  
**⚠ Review:** Confirm survey layout belongs to same project before website publish.

---

### 6. Sri Lakshmi Enclave (Active)

| # | Old Path | ↓ New Path | ↓ New Filename | Reason |
|---|----------|------------|----------------|--------|
| 14 | `majeedpur site assets/Majeedpur site .jpeg` | `active_projects/sri-lakshmi-enclave/layouts/originals/` | `sri-lakshmi-enclave-layout-01.jpg` | Actual content is Sri Lakshmi Enclave layout; fixes mislabeled folder + trailing space |

**Metadata:** `active_projects/sri-lakshmi-enclave/metadata/assets/sri-lakshmi-enclave-layout-01.json`  
**Legacy folder removed:** `majeedpur site assets/` (after items 14–16 migrated)

---

### 7. Shared / Unassigned Assets

| # | Old Path | ↓ New Path | ↓ New Filename | Reason |
|---|----------|------------|----------------|--------|
| 15 | `majeedpur site assets/majeedpur site.png` | `shared_assets/stock/` | `shared-generic-tree-lined-road-01.png` | Generic road photo — not Majeedpur/Sri Lakshmi content |
| 16 | `majeedpur site assets/sreegandham trees.png` | `shared_assets/stock/` | `shared-sreegandham-tree-plantation-01.png` | Project association unconfirmed; held pending review |

**Metadata:** `shared_assets/metadata/*.json` (2 files)  
**⚠ Review:** Stakeholder must assign items 15–16 to a project or approve as stock.

---

### 8. Inamguda Layout (Completed)

| # | Old Path | ↓ New Path | ↓ New Filename | Reason |
|---|----------|------------|----------------|--------|
| 17 | `business_assets/Inamguda past layout.jpeg` | `completed_projects/inamguda-layout/layouts/originals/` | `inamguda-layout-01.jpg` | Historical completed project; lifecycle folder not archive |

**Metadata:** `completed_projects/inamguda-layout/metadata/assets/inamguda-layout-01.json`

---

## Post-Migration Cleanup

After Phase 2, these legacy paths will be **empty and removed**:

```
business_assets/Farmland assets/
business_assets/Highway city assets/
business_assets/karthik homes assets/
business_assets/majeedpur site assets/
business_assets/sai enclave assets/
```

Root orphans (`Sreeja Logo.pdf`, `Inamguda past layout.jpeg`) will no longer exist at root.

---

## Asset Metadata Generated

Every media file has a companion JSON with:

`title` · `description` · `altText` · `caption` · `seoFilename` · `category` · `copyright` · `orientation` · `resolution` · `dateAdded` · `legacyPath` · `status`

All currently marked `"status": "pending_migration"`. After Phase 2, update to `"active"`.

---

## Phase 2 Execution Plan (After Approval)

1. Verify backup manifest checksums
2. Copy (not move first) each file to new path with new name
3. Verify copy integrity (SHA256 match)
4. Delete legacy copy only after verification
5. Update all metadata `status` → `active`
6. Remove empty legacy folders
7. Regenerate manifest as `incoming/_post-migration-manifest-2026-06-28.json`

---

## Items Requiring Stakeholder Decision Before Phase 2

| ID | Question | Default if no answer |
|----|----------|---------------------|
| R1 | Farmland official project name? | Keep slug `farmland` |
| R2 | Assign `shared-sreegandham-tree-plantation-01.png` to which project? | Keep in `shared_assets/stock/` |
| R3 | Is `sai-enclave-layout-survey-01.jpg` same venture as branded layout? | Keep both in sai-enclave |
| R4 | Publish `inamguda-layout` on website? | Internal/completed only |

---

**Awaiting your approval to proceed with Phase 2 file migration.**
