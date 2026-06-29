# Component Inventory Specification – Sreeja Developers and Constructions

**Role:** Principal Design Systems Architect  
**Project:** Sreeja Highway City Web Platform (MVP)  
**Document:** ComponentInventory.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## Component Index (CMP-001 to CMP-043)

### CMP-001 Navbar
*   **Purpose:** Provide global navigation paths, corporate branding, and primary CTA access.
*   **Usage Rules:** Sticky positioning at the top of the viewport. Must overlay header background sections.
*   **Variants:** Standard Dark theme overlay; transparent base (transitions to solid on scroll).
*   **States:** Default (transparent), Scrolled (Obsidian Charcoal background with blur), Mobile open (drawer active).
*   **Accessibility:** ARIA attributes for logo link and mobile button, keyboard trap active when mobile menu is open.
*   **Responsive Behavior:** 
    *   *Desktop/Laptop:* Horizontal menu list.
    *   *Tablet/Mobile:* Collapses to a hamburger toggle menu.
*   **Spacing & Sizing:** Height `72px` (desktop), `64px` (mobile). Outer margins `--spacing-4` (mobile), container centered (desktop).
*   **Interaction Rules:** Link hover displays a gold line indicator below text.
*   **Visual Hierarchy:** Logo is primary focus, followed by navigation links, with the call CTA in the top right.
*   **Required Props:** None.
*   **Optional Props:** activeLink (string).

---

### CMP-002 Footer
*   **Purpose:** Display structural site directories, addresses, compliance notices, and RERA registration details.
*   **Usage Rules:** Positioned at the bottom of all pages.
*   **Variants:** Standard Dark theme only.
*   **States:** Default.
*   **Accessibility:** Group links in list containers with clear category labels.
*   **Responsive Behavior:** Stacked columns (mobile) to multi-column grid layout (desktop).
*   **Spacing & Sizing:** Vertical padding `--spacing-12`. Gutters `--spacing-6` for columns.
*   **Required Props:** None.
*   **Optional Props:** currentYear (number).

---

### CMP-003 Hero
*   **Purpose:** Establish immediate project identity and direct users to key action items.
*   **Usage Rules:** Used as the first section on pages. Cannot have other content above it.
*   **Variants:** Image hero background; Video background loop.
*   **States:** Loading background; active state.
*   **Accessibility:** High contrast overlays to ensure H1 readability against background images.
*   **Responsive Behavior:** Flex column (mobile) to two-column split layout (desktop).
*   **Spacing & Sizing:** Min-height `70vh` (mobile), `85vh` (desktop). Inner padding `--spacing-12`.
*   **Required Props:** title (string), subtitle (string).
*   **Optional Props:** bgVideoUrl (string), bgImageUrl (string).

---

### CMP-004 Button
*   **Purpose:** Handle user actions, submissions, and page links.
*   **Usage Rules:** Never mix styling variants within the same element group.
*   **Variants:** Primary (Gold fill), Secondary (Gold border outline), Link (Text line).
*   **States:** Default, Hover, Focus, Active, Disabled.
*   **Accessibility:** Keyboard focus ring active, ARIA roles for custom elements.
*   **Responsive Behavior:** Full width on mobile views, inline block on desktop screens.
*   **Spacing & Sizing:** Padding `12px 24px` (desktop), `16px 24px` (mobile for touch targets).
*   **Required Props:** label (string), onClick (function).
*   **Optional Props:** type (primary | secondary), disabled (boolean), icon (element).

---

### CMP-005 Card (Base Card)
*   **Purpose:** Group content into clean visual containers.
*   **Usage Rules:** Use to organize text elements and images.
*   **Variants:** Default Dark border; Paper Light.
*   **States:** Default, Hover elevation.
*   **Required Props:** children (node).
| **CMP-001** | Navbar | `src/components/layout/Navbar.tsx` |

---

### CMP-006 Project Card
| **CMP-002** | Footer | `src/components/layout/Footer.tsx` |
*   **Usage Rules:** Displayed in the featured projects list.
*   **Variants:** Showcase card (expanded detail); minimal listing card.
*   **States:** Default, Hover (image scale zoom).
*   **Responsive Behavior:** Stacks layout sections to fit mobile screens.
| **CMP-003** | Hero | `src/features/home/Hero.tsx` |
*   **Required Props:** title (string), location (string), approvalStatus (string), slug (string).
*   **Optional Props:** priceStart (string), imageUrl (string).

---
| **CMP-004** | Button | `src/components/ui/Button.tsx` |
### CMP-007 Gallery
*   **Purpose:** Display project progress images in a structured layout.
*   **Usage Rules:** Used inside site gallery pages.
*   **Variants:** Grid layout; slideshow carousel.
| **CMP-005** | Card (Base Card) | `src/components/ui/Card.tsx` |
*   **Required Props:** images (array).

---

| **CMP-006** | Project Card | `src/features/projects/ProjectCard.tsx` |
*   **Purpose:** Let users swipe through a slider of images.
*   **Usage Rules:** Use on mobile screens where space is limited.
*   **Variants:** Drag-scrollable container; indicator slider.
*   **Required Props:** items (array).
| **CMP-007** | Gallery | `src/features/projects/GalleryGrid.tsx` |
---

### CMP-009 Lightbox
*   **Purpose:** View images in full screen.
| **CMP-008** | Carousel | `src/components/ui/Carousel.tsx` |
*   **States:** Fade-in, Open overlay.
*   **Required Props:** imageUrl (string), onClose (function).

---
| **CMP-009** | Lightbox | `src/components/ui/Lightbox.tsx` |
### CMP-010 Accordion
*   **Purpose:** Organizes content into expandable sections.
*   **Usage Rules:** Use to collapse large blocks of text.
*   **Variants:** Standard bordered list.
| **CMP-010** | Accordion | `src/components/ui/Accordion.tsx` |
*   **Accessibility:** Uses standard collapsible controls and links.
*   **Required Props:** items (array of header/content pairs).

| **CMP-011** | FAQ Card | `src/features/faq/FAQCard.tsx` |

### CMP-011 FAQ Card
*   **Purpose:** Answer common user questions.
*   **Usage Rules:** Group cards inside Accordion containers.
| **CMP-012** | Form | `src/components/ui/Form.tsx` |

---

### CMP-012 Form
| **CMP-013** | Input | `src/components/ui/Input.tsx` |
*   **Usage Rules:** Add a clear submit button at the bottom of the form.
*   **Variants:** Vertical block form layout.
*   **States:** Idle, Submitting, Success overlay, Error warning.
| **CMP-014** | Textarea | `src/components/ui/Textarea.tsx` |

---

| **CMP-015** | Dropdown | `src/components/ui/Dropdown.tsx` |
*   **Purpose:** Capture user text data.
*   **Usage Rules:** Ensure form fields are labeled clearly.
*   **Variants:** Standard Input; Numeric input.
| **CMP-016** | Checkbox | `src/components/ui/Checkbox.tsx` |
| **CMP-017** | Radio Button | `src/components/ui/RadioButton.tsx` |
*   **Optional Props:** error (string), placeholder (string), required (boolean).

---
| **CMP-018** | Badge | `src/components/ui/Badge.tsx` |
### CMP-014 Textarea
*   **Purpose:** Capture long-form comments.
*   **Usage Rules:** Use for additional details on booking forms.
| **CMP-019** | Chip | `src/components/ui/Chip.tsx` |
*   **Required Props:** id (string), label (string).

---
| **CMP-020** | Modal | `src/components/ui/Modal.tsx` |
### CMP-015 Dropdown (Select Menu)
*   **Purpose:** Let users select an option from a list.
*   **Usage Rules:** Used for select selectors (e.g., country code, investment goals).
| **CMP-021** | Drawer | `src/components/layout/Drawer.tsx` |
*   **Required Props:** options (array), onSelect (function).

---
| **CMP-022** | Toast | `src/components/feedback/Toast.tsx` |
### CMP-016 Checkbox & CMP-017 Radio Button
*   **Purpose:** Toggle preferences or select unique options.
*   **Usage Rules:** Group options inside logical fieldsets.
| **CMP-023** | Alert | `src/components/feedback/Alert.tsx` |

---

| **CMP-024** | Statistics Counter | `src/components/ui/Statistics.tsx` |
*   **Purpose:** Tag metadata (e.g., project categories, RERA statuses).
*   **Usage Rules:** Displayed near headers or layout details.
*   **Required Props:** label (string).
| **CMP-025** | Timeline | `src/features/about/Timeline.tsx` |
---

### CMP-019 Chip
| **CMP-026** | Testimonial Card | `src/features/home/TestimonialCard.tsx` |
*   **Variants:** Active, Inactive toggles.
*   **Required Props:** label (string), isSelected (boolean).

| **CMP-027** | Google Maps Section | `src/components/ui/GoogleMap.tsx` |

### CMP-020 Modal
*   **Purpose:** Focus user attention on a single task (e.g., lead forms).
| **CMP-028** | Breadcrumb | `src/components/ui/Breadcrumb.tsx` |
*   **Variants:** Centered form overlay; document view.
*   **States:** Open, Closing transition.
*   **Accessibility:** Focus is locked within the modal, pressing Escape closes the modal.
| **CMP-029** | Pagination | `src/components/ui/Pagination.tsx` |

---

| **CMP-030** | Floating WhatsApp | `src/components/ui/FloatingWhatsApp.tsx` |
*   **Purpose:** Host the mobile navigation menu.
*   **Usage Rules:** Slides in from screen edges.
*   **Variants:** Right-side slide.
| **CMP-031** | Direct Call Button | `src/components/ui/CallButton.tsx` |
*   **Required Props:** isOpen (boolean), onClose (function), children (node).

---
| **CMP-032** | Loader | `src/components/feedback/Loader.tsx` |
### CMP-022 Toast
*   **Purpose:** Show temporary status updates (e.g., "Brochure download started").
*   **Usage Rules:** Floats briefly near screen edges.
| **CMP-033** | Skeleton | `src/components/feedback/Skeleton.tsx` |
*   **Required Props:** message (string).

| **CMP-034** | Empty State | `src/components/feedback/EmptyState.tsx` |

### CMP-023 Alert
| **CMP-035** | Error State | `src/components/feedback/ErrorState.tsx` |
*   **Usage Rules:** Positions below the header navigation banner.
*   **Required Props:** title (string), description (string).
| **CMP-036** | 404 Layout | `src/app/not-found.tsx` |
---

| **CMP-037** | Search Bar | `src/components/ui/SearchBar.tsx` |
*   **Purpose:** Highlight key corporate performance metrics (e.g., years of experience).
*   **Usage Rules:** Grouped in lists of 3 or 4 metrics.
| **CMP-038** | Project Filter | `src/features/projects/ProjectFilter.tsx` |
*   **Required Props:** number (string), label (string).

| **CMP-039** | Section Header | `src/components/ui/SectionHeader.tsx` |

### CMP-025 Timeline
*   **Purpose:** Display corporate milestones.
| **CMP-040** | Container | `src/components/layout/Container.tsx` |
*   **Variants:** Alternating split layout (desktop); left-aligned list (mobile).
*   **Required Props:** items (array).

| **CMP-041** | Grid System | `src/components/layout/Grid.tsx` |

### CMP-026 Testimonial Card
| **CMP-042** | Icon Component | `src/components/ui/Icon.tsx` |
*   **Usage Rules:** Wrap customer quotes inside testimonial sections.
*   **Variants:** Text card; visual profile card.
| **CMP-043** | Video Player Loop | `src/components/ui/VideoPlayer.tsx` |
*   **Required Props:** quote (string), author (string).
*   **Optional Props:** designation (string), profileImageUrl (string).

---

### CMP-027 Google Maps Section
*   **Purpose:** Pin corporate or project locations.
*   **Usage Rules:** Embed Google Maps frame.
*   **Required Props:** embedUrl (string).

---

### CMP-028 Breadcrumb
*   **Purpose:** Show the user's path in the site hierarchy.
*   **Usage Rules:** Displayed below the main navigation.
*   **Required Props:** paths (array).

---

### CMP-029 Pagination
*   **Purpose:** Let users navigate between multiple pages of listings.
*   **Usage Rules:** Used on index grids.
*   **Required Props:** currentPage (number), totalPages (number).

---

### CMP-030 Floating WhatsApp
*   **Purpose:** Direct user support queries.
*   **Usage Rules:** Stays in the bottom-right corner of the viewport.
*   **Variants:** Icon logo.
*   **States:** Floating default; hover zoom.
*   **Accessibility:** ARIA label: "Contact Sales Desk on WhatsApp".
*   **Spacing & Sizing:** Positioned `24px` from bottom, `24px` from right. Diameter `56px`.
*   **Required Props:** phoneNumber (string).
*   **Optional Props:** customText (string).

---

### CMP-031 Call Button
*   **Purpose:** Connect phone queries quickly.
*   **Usage Rules:** Used in section CTAs and header components.
*   **Variants:** Text call button; icon call button.
*   **States:** Standard button states.
*   **Required Props:** phoneNumber (string).

---

### CMP-032 Loader (Spinner)
*   **Purpose:** Indicate loading states.
*   **Usage Rules:** Render placeholders while page data is loading.
*   **Required Props:** None.

---

### CMP-033 Skeleton
*   **Purpose:** Placeholders for content blocks.
*   **Variants:** Card Skeletons; Title Skeletons.
*   **Required Props:** variant (string).

---

### CMP-034 Empty State
*   **Purpose:** Inform users when search results are empty.
*   **Required Props:** message (string).

---

### CMP-035 Error State
*   **Purpose:** Display execution failures.
*   **Required Props:** message (string).

---

### CMP-036 404 Layout
*   **Purpose:** Standalone layout for missing URLs.
*   **Required Props:** None.

---

### CMP-037 Search Bar
*   **Purpose:** Dynamic keyword text input.
*   **Required Props:** onSearch (function).

---

### CMP-038 Project Filter
*   **Purpose:** Toggle listings layout configurations.
*   **Required Props:** onFilterChange (function).

---

### CMP-039 Section Header
*   **Purpose:** Title page sections consistently.
*   **Required Props:** title (string).

---

### CMP-040 Container
*   **Purpose:** Standardize layout alignments.
*   **Usage Rules:** Used to wrap page sections.
*   **Variants:** Centered container; full-bleed.
*   **Required Props:** children (node).
*   **Optional Props:** clean (boolean).

---

### CMP-041 Grid
*   **Purpose:** Align elements to responsive layout grids.
*   **Usage Rules:** Wrap modular project cards.
*   **Variants:** 1-column (mobile), 2-column (tablet), 3-column (laptop), 4-column (desktop).
*   **Required Props:** children (node), cols (number).
*   **Optional Props:** gap (spacing token).

---

### CMP-042 Icons
*   **Purpose:** Embed vector graphics components.
*   **Required Props:** name (string).

---

### CMP-043 Video Player Loop
*   **Purpose:** Auto-playing, muted background loops.
*   **Required Props:** src (string).
