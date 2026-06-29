# Design Tokens Specification – Sreeja Developers and Constructions

**Role:** Principal Design Systems Architect  
**Project:** Sreeja Highway City MVP  
**Document:** DesignTokens.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. Color System

The colors are mapped to CSS custom variables, supporting a primary **Dark Theme** for the showcase site and a secondary **Light Theme** for documents and policies.

```
       ┌─────────────────────────────────────────────────────────┐
       │                 COLOR SYSTEM PALETTE                    │
       ├─────────────────┬───────────────────────┬───────────────┤
       │ Color Name      │ Hex Code / Value      │ UI Application│
       ├─────────────────┼───────────────────────┼───────────────┤
       │ Obsidian Dark   │ #0E1013               │ Base Canvas   │
       │ Telangana Gold  │ #D4AF37               │ Accent / CTAs │
       │ Haritha Green   │ #1E4620               │ Trust / Badges│
       │ Clear Ivory     │ #FBFBFC               │ Paper Text    │
       └─────────────────┴───────────────────────┴───────────────┘
```

### 1.1 Core Palette
*   **Primary (Obsidian Charcoal):** `#0E1013` (HSL: `216, 15%, 6%`)
*   **Secondary (Telangana Gold):** `#D4AF37` (HSL: `46, 65%, 52%`)
*   **Accent (Warm Gold Light):** `#F3E5AB` (HSL: `48, 79%, 81%`)
*   **Natural Base (Haritha Green):** `#1E4620` (HSL: `123, 40%, 19%`)

### 1.2 Interactive & Status Colors
*   **Success (Haritha Light):** `#2E7D32` (HSL: `122, 45%, 34%`)
*   **Warning (Gold Darken):** `#F57C00` (HSL: `30, 100%, 48%`)
*   **Danger (Terracotta Soil Red):** `#C62828` (HSL: `0, 65%, 46%`)
*   **Info (Sky Blue Accent):** `#1565C0` (HSL: `212, 80%, 41%`)

### 1.3 Neutral Gray Scale
*   **Gray-50:** `#FAFAFA` (Text in dark modes)
*   **Gray-100:** `#F5F5F5`
*   **Gray-200:** `#EEEEEE`
*   **Gray-300:** `#E0E0E0`
*   **Gray-400:** `#BDBDBD`
*   **Gray-500:** `#9E9E9E` (Muted labels)
*   **Gray-600:** `#757575`
*   **Gray-700:** `#616161`
*   **Gray-800:** `#424242` (Surface backgrounds)
*   **Gray-900:** `#212121` (Card details)

### 1.4 Theme Configurations

#### Dark Mode Base Tokens (Showcase & Gated Layout Pages)
*   `--color-background`: `#0E1013`
*   `--color-surface-base`: `#14171C`
*   `--color-surface-hover`: `#1F242B`
*   `--color-border`: `#2A303A`
*   `--color-text-primary`: `#FBFBFC`
*   `--color-text-secondary`: `#9E9E9E`
*   `--color-overlay`: `rgba(14, 16, 19, 0.85)`

#### Light Mode Base Tokens (Policy, Terms, & Document Layout Pages)
*   `--color-background`: `#FBFBFC`
*   `--color-surface-base`: `#FFFFFF`
*   `--color-surface-hover`: `#F5F5F5`
*   `--color-border`: `#E0E0E0`
*   `--color-text-primary`: `#0E1013`
*   `--color-text-secondary`: `#616161`
*   `--color-overlay`: `rgba(251, 251, 252, 0.9)`

### 1.5 Contrast Requirements (WCAG 2.1 AA)
*   All active text and key user interface icons must maintain a minimum contrast ratio of **4.5:1** against their background.
*   Gold body text elements use an accent background overlay (`#0E1013` with `#D4AF37`) to meet the contrast targets.

---

## 2. Typography System

### 2.1 Typography Families
*   **Heading Family (Serif):** `Cinzel`, Georgia, serif (letter-spacing: `0.08em` by default for premium branding).
*   **Body & Interface Copy:** `Outfit`, sans-serif (modern geometric design that remains highly readable at small sizes on mobile screens).

### 2.2 Heading & Type Scale

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              TYPOGRAPHY HIERARCHY                                      │
├─────────────────┬───────────┬──────────────┬──────────────┬────────────────────────────┤
│ Token Name      │ Size (px) │ Line Height  │ Weight       │ Usage Context              │
├─────────────────┼───────────┼──────────────┼──────────────┼────────────────────────────┤
│ Display H1      │ 40px      │ 1.2          │ Bold         │ Hero H1 (Mobile sizes)     │
│ Display H1 (DT) │ 64px      │ 1.1          │ Bold         │ Hero H1 (Desktop sizes)    │
│ Page Heading H2 │ 32px      │ 1.25         │ Semi-Bold    │ Section Headers            │
│ Page Heading H3 │ 24px      │ 1.3          │ Semi-Bold    │ Project title cards        │
│ Card Title H4   │ 20px      │ 1.4          │ Medium       │ Component blocks           │
│ Body Default    │ 16px      │ 1.6          │ Regular      │ Main body text             │
│ Caption Text    │ 12px      │ 1.5          │ Regular      │ Form tags, image credits   │
└─────────────────┴───────────┴──────────────┴──────────────┴────────────────────────────┘
```

---

## 3. Spacing System (8-Point Grid Baseline)

Layout paddings, margins, and gaps are mapped to an 8-increment design token system based on a 4px grid. This ensures clean alignments and spacing:

*   **`--spacing-1` (4px):** Tight label offsets, minor border adjustments.
*   **`--spacing-2` (8px):** Inline badge spacing, tag padding.
*   **`--spacing-3` (12px):** Small gaps between elements, button text paddings.
*   **`--spacing-4` (16px):** Outer margins for mobile views, small layout gaps, card padding.
*   **`--spacing-6` (24px):** Grid gutters, container paddings, form column gaps.
*   **`--spacing-8` (32px):** Standard card padding, desktop layout gaps.
*   **`--spacing-12` (48px):** Core section vertical paddings.
*   **`--spacing-16` (64px):** Medium section separators.
*   **`--spacing-20` (80px):** Primary vertical spacers between homepage blocks.
*   **`--spacing-24` (96px):** Spacing for large hero sections.
*   **`--spacing-30` (120px):** Maximum vertical space offsets.

---

## 4. Radius Tokens

*   **`--radius-none` (0px):** Flat corners, used for browser-wide layouts and header banners.
*   **`--radius-sm` (4px):** Input fields, checkbox frames, dropdown lists.
*   **`--radius-md` (8px):** Standard CTA buttons, badge tags.
*   **`--radius-lg` (12px):** Project cards, form blocks, popups.
*   **`--radius-full` (9999px):** Circular buttons, status chips.

---

## 5. Shadow Tokens

*   **`--shadow-sm` (Small):** `0 1px 2px rgba(14, 16, 19, 0.05)` (small buttons).
*   **`--shadow-md` (Medium):** `0 4px 6px -1px rgba(14, 16, 19, 0.1), 0 2px 4px -1px rgba(14, 16, 19, 0.06)` (project cards).
*   **`--shadow-lg` (Large):** `0 10px 15px -3px rgba(14, 16, 19, 0.1), 0 4px 6px -2px rgba(14, 16, 19, 0.05)` (collapsible accordions).
*   **`--shadow-floating` (Nav):** `0 20px 25px -5px rgba(14, 16, 19, 0.15)` (fixed headers, WhatsApp action buttons).
*   **`--shadow-modal` (Modal):** `0 25px 50px -12px rgba(0, 0, 0, 0.5)` (central layout popups).

---

## 6. Border Tokens

*   **`--border-thin` (1px):** Border dividers, inline cards.
*   **`--border-medium` (2px):** Input field active focus rings.
*   **`--border-thick` (4px):** Layout selections.
*   **`--border-style-default`:** `solid`

---

## 7. Motion & Animation Tokens

These motion tokens are configured to align visual feedback with smooth performance across all viewports.

### 7.1 Timings & Durations
*   **`--motion-duration-fast` (100ms):** Simple button state updates, link color transitions.
*   **`--motion-duration-normal` (200ms):** Navigation hover cues, chip transitions.
*   **`--motion-duration-slow` (300ms):** Mobile menu drawer slides, large layout transitions.
*   **`--motion-duration-expand` (500ms):** FAQ accordion shifts, progress bar fills.

### 7.2 Animation Curves (Easing Functions)
*   **`--motion-ease-out`:** `cubic-bezier(0.16, 1, 0.3, 1)` (standard transitions).
*   **`--motion-ease-in-out`:** `cubic-bezier(0.87, 0, 0.13, 1)` (modal transitions).

### 7.3 Accessibility & Reduced Motion
*   When a user has `prefers-reduced-motion: reduce` configured in their browser settings:
    *   Set all transition timings to `0s` and disable slide/fade-in animations. Only allow instant state shifts to ensure a comfortable user experience.
