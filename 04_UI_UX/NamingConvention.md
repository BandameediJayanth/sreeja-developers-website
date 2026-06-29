# Naming Convention Guide – Sreeja Developers and Constructions

**Role:** Principal Design Systems Architect  
**Project:** Sreeja Highway City MVP  
**Document:** NamingConvention.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. Component File Naming Conventions

All UI components are stored in the `src/components` directory and use the **PascalCase** naming convention:
*   *Path Example:* `src/components/ui/Button.tsx`
*   *Path Example:* `src/components/feedback/Alert.tsx`

Every component must export a single React component that matches the filename.

---

## 2. Directory & Structure Names

All directory names in `src/` use **kebab-case** to maintain URL consistency across systems:
*   *Correct:* `src/features/projects/`
*   *Incorrect:* `src/features/ProjectsList/`
*   *Correct:* `src/hooks/`
*   *Correct:* `src/providers/`

---

## 3. Style Naming Conventions (CSS / Tailwind CSS)

To prevent visual regressions and layout issues, we enforce a strict styling class structure:
*   **Tailwind CSS Prefixing:** Always group structural properties (flex, grids, margins) before decorative styles (colors, border outlines) in component code.
*   **Dynamic Class merges:** Use the `cn` utility to merge styles, ensuring that props compile correctly:
    *   *Utility setup:* `cn(baseStyles, isActive && activeStyles, customClasses)`
*   **Custom CSS Classes:** Standard classes in `styles/main.css` use lowercase **kebab-case** with a brand prefix:
    *   *Correct:* `.sreeja-text-accent`
    *   *Correct:* `.sreeja-card-gradient`

---

## 4. Asset File Naming Conventions (Images, Documents, Icons)

All media files must use lowercase **kebab-case** and follow a structured classification scheme to prevent duplicate assets:

### 4.1 Corporate Branding Assets
*   `{brand-identifier}-{variant}-{color-mode}.{ext}`
*   *Example:* `sreeja-developers-logo-primary.pdf`
*   *Example:* `sreeja-logo-crest-white.svg`

### 4.2 Project-Specific Assets
*   `{project-slug}-{category}-{index}.{ext}`
*   *Example:* `sreeja-highway-city-hero.jpg`
*   *Example:* `sreeja-highway-city-drone-01.mp4`
*   *Example:* `sreeja-highway-city-brochure.pdf`
*   *Example:* `sreeja-haritha-sandalwood-county-gallery-02.jpg`

---

## 5. Enterprise Component Mapping Code (Inventory Identifiers)

In documentation, design layouts, and file comments, refer to components using their **CMP-XXX** index identifiers:

| Component ID | Component Name | Directory Location |
| :--- | :--- | :--- |
| **CMP-001** | Navbar | `src/components/layout/Navbar.tsx` |
| **CMP-002** | Footer | `src/components/layout/Footer.tsx` |
| **CMP-003** | Hero | `src/features/home/Hero.tsx` |
| **CMP-004** | Button | `src/components/ui/Button.tsx` |
| **CMP-005** | Card (Base Card) | `src/components/ui/Card.tsx` |
| **CMP-006** | Project Card | `src/features/projects/ProjectCard.tsx` |
| **CMP-007** | Gallery | `src/features/projects/GalleryGrid.tsx` |
| **CMP-008** | Carousel | `src/components/ui/Carousel.tsx` |
| **CMP-009** | Lightbox | `src/components/ui/Lightbox.tsx` |
| **CMP-010** | Accordion | `src/components/ui/Accordion.tsx` |
| **CMP-011** | FAQ Card | `src/features/faq/FAQCard.tsx` |
| **CMP-012** | Form | `src/components/ui/Form.tsx` |
| **CMP-013** | Input | `src/components/ui/Input.tsx` |
| **CMP-014** | Textarea | `src/components/ui/Textarea.tsx` |
| **CMP-015** | Dropdown | `src/components/ui/Dropdown.tsx` |
| **CMP-016** | Checkbox | `src/components/ui/Checkbox.tsx` |
| **CMP-017** | Radio Button | `src/components/ui/RadioButton.tsx` |
| **CMP-018** | Badge | `src/components/ui/Badge.tsx` |
| **CMP-019** | Chip | `src/components/ui/Chip.tsx` |
| **CMP-020** | Modal | `src/components/ui/Modal.tsx` |
| **CMP-021** | Drawer | `src/components/layout/Drawer.tsx` |
| **CMP-022** | Toast | `src/components/feedback/Toast.tsx` |
| **CMP-023** | Alert | `src/components/feedback/Alert.tsx` |
| **CMP-024** | Statistics Counter | `src/components/ui/Statistics.tsx` |
| **CMP-025** | Timeline | `src/features/about/Timeline.tsx` |
| **CMP-026** | Testimonial Card | `src/features/home/TestimonialCard.tsx` |
| **CMP-027** | Google Maps Section | `src/components/ui/GoogleMap.tsx` |
| **CMP-028** | Breadcrumb | `src/components/ui/Breadcrumb.tsx` |
| **CMP-029** | Pagination | `src/components/ui/Pagination.tsx` |
| **CMP-030** | Floating WhatsApp | `src/components/ui/FloatingWhatsApp.tsx` |
| **CMP-031** | Direct Call Button | `src/components/ui/CallButton.tsx` |
| **CMP-032** | Loader | `src/components/feedback/Loader.tsx` |
| **CMP-033** | Skeleton | `src/components/feedback/Skeleton.tsx` |
| **CMP-034** | Empty State | `src/components/feedback/EmptyState.tsx` |
| **CMP-035** | Error State | `src/components/feedback/ErrorState.tsx` |
| **CMP-036** | 404 Layout | `src/app/not-found.tsx` |
| **CMP-037** | Search Bar | `src/components/ui/SearchBar.tsx` |
| **CMP-038** | Project Filter | `src/features/projects/ProjectFilter.tsx` |
| **CMP-039** | Section Header | `src/components/ui/SectionHeader.tsx` |
| **CMP-040** | Container | `src/components/layout/Container.tsx` |
| **CMP-041** | Grid System | `src/components/layout/Grid.tsx` |
| **CMP-042** | Icon Component | `src/components/ui/Icon.tsx` |
| **CMP-043** | Video Player Loop | `src/components/ui/VideoPlayer.tsx` |
