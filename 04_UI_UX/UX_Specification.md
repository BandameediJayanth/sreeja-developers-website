# UX Specification – Sreeja Developers and Constructions (Version 1 MVP)

**Role:** Lead UX Architect  
**Project:** Sreeja Highway City Web Platform (MVP)  
**Status:** Under Review  
**Version:** 1.0  
**Target:** Development-Ready Frontend Guide

---

## 1. UX Foundation & Interaction Rules

### 1.1 Responsive Breakpoints
To ensure a consistent layout across different screen sizes, the grid system is built around the following viewport widths:
*   **Mobile (Portrait/Landscape):** `< 640px` (Target canvas: 360px - 414px)
*   **Tablet (Portrait/Landscape):** `640px` to `1023px` (Target canvas: 768px - 1024px)
*   **Desktop:** `1024px` to `1279px` (Target canvas: 1280px)
*   **Large Desktop:** `>= 1280px` (Target canvas: 1440px - 1920px)

### 1.2 Spacing System (4px Grid Baseline)
All layout paddings, margins, and gaps are mapped to an 8-increment design token system based on a 4px grid. This ensures clean alignments and spacing:
*   **Space-3xs (4px):** Border radius, tight label offsets.
*   **Space-2xs (8px):** Tag padding, inline badge spacing, icon labels.
*   **Space-xs (12px):** Card margins, small layout gaps, button inner text padding.
*   **Space-sm (16px):** Small section item gaps, standard list margins, inner card padding.
*   **Space-md (24px):** Form input columns, container spacing, item grid gaps.
*   **Space-lg (32px):** Standard card padding, column divisions.
*   **Space-xl (48px):** Section block padding, hero bottom margins.
*   **Space-2xl (80px):** Desktop page-section spacing, vertical margins.
*   **Space-3xl (120px):** Large hero sections, header-offset margins.

### 1.3 Global Interaction Rules
*   **Tactile Response Time:** Interactive elements must respond visually to click/tap events within **100ms**.
*   **Transitions:** Default hover and focus transitions are set to **200ms ease-out** for clean, responsive interactions.
*   **Focus Ring Indicator:** Focusable components use a consistent focus indicator (`2px solid #D4AF37` offset by `2px`) to ensure accessibility for keyboard navigation.
*   **Disabled States:** Inactive elements use 50% opacity, have background fills removed, and show a `not-allowed` cursor.

---

## 2. Global Component Specifications

### 2.1 Navigation Header (Desktop / Mobile Drawer)
*   **Layout & Alignment:**
    *   *Desktop:* Horizontal row. Left-aligned gold logo, center-aligned navigation links, right-aligned primary CTA (`Book Site Visit`) and secondary telephone click-to-dial.
    *   *Tablet:* Left-aligned logo, right-aligned primary CTA and a burger icon to open the mobile drawer.
    *   *Mobile:* Left-aligned logo, right-aligned hamburger icon. Tap triggers a slide-in drawer covering the full viewport height.
*   **Interactions:**
    *   *Scroll Effect:* The header transitions from fully transparent to an Obsidian Charcoal background (`#0E1013` at 90% opacity) with a subtle blur effect once the user scrolls 50px from the top.
    *   *Mobile Drawer:* Slides in from the right edge with a 300ms transition. An overlay locks background scrolling when active.

### 2.2 Global Footer
*   **Layout & Alignment:**
    *   *Desktop:* 4-column layout: Column 1 (Company Bio & RERA disclaimer), Column 2 (Quick Sitemap Links), Column 3 (Contact Info & Hours), Column 4 (Project Quick Access links).
    *   *Tablet/Mobile:* Stacked single-column layout, with links organized in clean rows.
*   **Accessibility:**
    *   Clear labels for social links.
    *   High-contrast text pairings to ensure readability on mobile screens.

### 2.3 Global Image Standards
*   **Aspect Ratios:**
    *   *Hero Banners:* `16:9` (Desktop/Tablet), `4:3` (Mobile) to optimize screen space.
    *   *Project Cards:* `3:2` for clean layout sizing.
    *   *Gallery Grid:* Grid mix of `3:2` landscape images and `1:1` square site closeups.
*   **Responsive & Performance Behavior:**
    *   Use browser-level responsive image tags (`srcset`) to serve smaller sizes on mobile devices.
    *   Apply custom width and height attributes to prevent layout shifts.
    *   *Lazy Loading:* Enable native browser lazy loading (`loading="lazy"`) for off-screen images. Show a low-resolution blur placeholder while loading.

### 2.4 Buttons & CTA States
*   **Primary CTA (Telangana Gold Fills):**
    *   *Base:* Solid Gold (`#D4AF37`), Dark text.
    *   *Hover:* Scale effect (1.02x zoom) with background transition to a lighter gold tint.
    *   *Focus:* Visible focus border.
    *   *Disabled:* Slate-gray background, opacity set to 50%.
*   **Secondary CTA (Outline/Ghost):**
    *   *Base:* Border in gold, transparent background, text in Ivory White.
    *   *Hover:* Background transitions to dark gold with white text.
    *   *Focus:* Same focus ring indicators.

---

## 3. Page-by-Page UX Specifications

---

### PAGE 1: HOME PAGE (`/`)

*   **Page Goal:** Establish corporate trust and generate qualified leads by guiding users to active project listings.
*   **Target User:** Local wealth multipliers and home-seeking families.
*   **User Journey:**
    *   Landing on homepage $\rightarrow$ Reviews credibility badges $\rightarrow$ Evaluates featured layouts $\rightarrow$ Confirms connectivity benefits $\rightarrow$ Submits callback contact form.
*   **Layout Structure & Section Order:**
    1.  Hero Section
    2.  Featured Projects (Grid of Active ventures)
    3.  Why Choose Sreeja (Credibility factors)
    4.  Investment Benefits (Telangana appreciation trends)
    5.  Gallery Preview
    6.  Testimonials
    7.  FAQ Accordion
    8.  Contact Section
    9.  Footer

#### Detailed Section Breakdown

##### 1. Hero Section
*   **Purpose:** Establish a premium first impression and direct users to key action items.
*   **Content:** Dynamic background media showing highway connectivity, headline, subheadline, and credibility badges.
*   **CTAs:** Primary: `Book Site Visit` (leads to page contact form); Secondary: `Download Corporate Overview` (modal trigger).
*   **Visual Hierarchy:** Large H1 heading dominates the viewport, followed by supporting text and secondary badges grouped together at the bottom.

##### 2. Featured Projects Section
*   **Purpose:** Showcase our active ventures to match user search intents.
*   **Content:** Visual cards representing: Sreeja Highway City and Sreeja Haritha Sandalwood County, showing configuration options, locations, and pricing indicators.
*   **CTAs:** Primary card click navigates directly to the corresponding project details page.
*   **Visual Hierarchy:** Clean project cards arranged side-by-side on desktop, or stacked vertically on mobile screens.

##### 3. Why Choose Sreeja Section
*   **Purpose:** Address potential trust issues regarding land titles and development.
*   **Content:** Icon-based grid highlighting legal compliance, road engineering quality, and corporate legacy.
*   **CTAs:** Secondary link: `Explore Our Story` (leads to About page).
*   **Visual Hierarchy:** Centered header text, with copy organized in clear columns below.

##### 4. Investment Benefits Section
*   **Purpose:** Highlight the value of investing in high-appreciation highway corridors.
*   **Content:** Text and clean layout metrics comparing municipal highway frontage benefits with standard interior developments.
*   **CTAs:** Primary link: `Consult with Investment Desk` (scrolls down to Contact Form).
*   **Visual Hierarchy:** Two-column layout: key performance graphs on one side, with explanatory text blocks on the other.

##### 5. Gallery Preview Section
*   **Purpose:** Provide visual verification of actual site development.
*   **Content:** Grid of 4 high-res photos showing roads, utility progress, and site entrances.
*   **CTAs:** Secondary button: `View Full Gallery` (navigates to `/gallery`).
*   **Visual Hierarchy:** Structured image block layout, with the action button centered at the bottom.

##### 6. Testimonials Section
*   **Purpose:** Build social proof using actual customer experiences.
*   **Content:** Slider displaying actual customer reviews, locations, and project associations.
*   **CTAs:** None.
*   **Visual Hierarchy:** Centered quote layout, with navigation arrows for sliding cards.

##### 7. FAQ Section
*   **Purpose:** Answer common user questions before they reach out.
*   **Content:** 4 core FAQs covering titles, RERA registrations, and bank loan approvals.
*   **CTAs:** Link: `Read All FAQs` (navigates to `/faqs`).
*   **Visual Hierarchy:** Clean accordion list that expands inline when clicked.

##### 8. Contact Section
*   **Purpose:** Capture lead data from interested users.
*   **Content:** Contact form, office phone links, and address details.
*   **CTAs:** Form submission CTA: `Book My Site Visit`.
*   **Visual Hierarchy:** Two-column split layout: form on the left, address and call details on the right.

#### Form Specification: Site Visit Booking Form
*   **Fields:**
    *   *Full Name:* Text field, required.
    *   *Mobile Number:* Number field with dynamic country code selection dropdown, required.
    *   *Email Address:* Email format validation field, optional.
    *   *Site Pick-up Required:* Radio group selection: "Yes, pick me up", "No, I will drive down".
*   **Validation Rules:**
    *   Field validation is triggered once the user leaves the input field.
    *   Mobile number requires exactly 10 digits for Indian codes, or matching country formats.
*   **Success State:** The form area fades to show a success icon and message: *"Site Visit Requested. A relationship manager will contact you within 15 minutes."*
*   **Error State:** Displays validation alerts below the fields, with a red border around the input. A general notice is displayed if connection issues occur.

#### Page-Level Behaviors
*   **Micro Interactions:** Header transitions smoothly, buttons show scale zoom effects, and FAQs expand with smooth slide animations.
*   **Accessibility Requirements:** Accessible labels for form elements, full keyboard navigation compatibility, and high contrast options.
*   **Performance Considerations:** Native lazy loading for off-screen images, and optimized video embeds.
*   **SEO Considerations:** Target keywords are integrated into H1, H2 tags, and metadata elements.

---

### PAGE 2: ABOUT US (`/about-us`)

*   **Page Goal:** Establish corporate trust by showcasing promoter track records and values.
*   **Target User:** Remote investors and family buyers.
*   **User Journey:**
    *   Visits homepage $\rightarrow$ Navigates to About page $\rightarrow$ Reviews experience history and corporate values $\rightarrow$ Confirms historical project delivery proofs.
*   **Layout Structure & Section Order:**
    1.  Hero Header
    2.  Company Introduction (Detailed text narrative)
    3.  Vision & Mission
    4.  Experience & Pillars (Infographic timeline indicators)
    5.  Core Values (Icon grid)
    6.  Completed Projects Showcase (Historical execution proofs)
    7.  Footer

#### Detailed Section Breakdown

##### 1. Hero Header
*   **Purpose:** Set the tone for the company profile.
*   **Content:** Text overlaying a high-res image of the main corporate office.
*   **CTAs:** None.
*   **Visual Hierarchy:** Centered title text layout.

##### 2. Company Introduction
*   **Purpose:** Provide context on the history of the company.
*   **Content:** Two columns of structured text highlighting our two decades of experience.
*   **CTAs:** None.

##### 3. Vision & Mission
*   **Purpose:** Align user expectations with our long-term company standards.
*   **Content:** Dynamic text blocks showing the corporate vision and mission side-by-side.
*   **CTAs:** None.
*   **Visual Hierarchy:** Symmetrical cards with high contrast text.

##### 4. Completed Projects Showcase
*   **Purpose:** Provide physical proof of our historical delivery track record.
*   **Content:** Details of the **Inamguda Layout**, featuring layout plans and delivery statistics.
*   **CTAs:** Secondary button: `Request Historical Documentation` (navigates to contact page).
*   **Visual Hierarchy:** Featured layout map on one side, with delivery details on the other.

#### Page-Level Behaviors
*   **Micro Interactions:** Value cards use subtle hover elevation shifts to guide focus.
*   **Accessibility Requirements:** High color contrast text elements and readable typography sizes for all users.
*   **SEO Considerations:** Target keywords included in heading structures (`about Sreeja Developers`, `real estate track record Hyderabad`).

---

### PAGE 3: PROJECTS INDEX PAGE (`/projects`)

*   **Page Goal:** Display all active, upcoming, and completed projects cleanly to match user search intents.
*   **Target User:** Active investors and property searchers.
*   **User Journey:**
    *   Lands on Projects page $\rightarrow$ Filters by category $\rightarrow$ Identifies matching layouts $\rightarrow$ Clicks to explore details.
*   **Layout Structure & Section Order:**
    1.  Hero Header
    2.  Project Filter Bar (Horizontal toggle)
    3.  Active Gated Layouts Grid
    4.  Farmlands Segment Focus
    5.  Completed Ventures Archive Grid
    6.  Footer

#### Detailed Section Breakdown

##### 1. Project Filter Bar
*   **Purpose:** Let users quickly find the types of projects they are interested in.
*   **Content:** Interactive tabs: Gated Communities, Farmlands, Commercial Frontage, Completed Projects.
*   **CTAs:** Interactive filters update grid states when clicked.
*   **Visual Hierarchy:** Flat row on desktop, sliding carousel bar on mobile screens.

##### 2. Projects Grid
*   **Purpose:** Showcase active developments clearly.
*   **Content:** Grid cards for Sreeja Highway City, Sreeja Haritha Sandalwood County, Karthik Homes, and Sai Enclave.
*   **CTAs:** Card buttons: `Explore Layout` (navigates to details page); Secondary: `Get Price List` (modal form trigger).
*   **Visual Hierarchy:** Clean grid layout. Status badges (e.g., *Active*, *Sold Out*) are displayed in the upper-right corner.

#### Page-Level Behaviors
*   **Loading States:** Grid items use skeletal loading screens while project content is rendered.
*   **Empty States:** If no items match selected filter combinations, displays: *"No matching ventures found. View our active list."* along with a reset button.
*   **SEO Considerations:** High-priority keyword anchors (`gated community projects Hyderabad`, `buy open plots Telangana`).

---

### PAGE 4: PROJECT DETAILS TEMPLATE PAGE (`/projects/{project-slug}`)

*   **Page Goal:** Provide detailed project information and capture user inquiries.
*   **Target User:** Prospective plot buyers and investors.
*   **User Journey:**
    *   Arrives at details page $\rightarrow$ Reviews RERA compliance info $\rightarrow$ Explores amenities $\rightarrow$ Downloads layout PDF $\rightarrow$ Books site visit.
*   **Layout Structure & Section Order:**
    1.  Project Hero Section
    2.  Overview & Venture Specs
    3.  Media Gallery (Site development photos)
    4.  Amenities Checklist (Grid)
    5.  Location & Connectivity Map
    6.  Brochure Download Banner
    7.  Contact Form Section
    8.  Footer

#### Detailed Section Breakdown

##### 1. Project Hero Section
*   **Purpose:** Establish immediate project identity.
*   **Content:** High-res layout rendering, title, RERA numbers, and basic location details.
*   **CTAs:** Primary: `Download Brochure` (modal form trigger); Secondary: `Book Site Visit`.
*   **Visual Hierarchy:** Large heading structure, with RERA compliance details prominently displayed.

##### 2. Overview & Venture Specs
*   **Purpose:** Provide structured data regarding plot availability and approvals.
*   **Content:** Symmetrical layout details listing total acreage, plot sizes, road widths, and zoning approvals.
*   **CTAs:** None.

##### 3. Location & Connectivity Map
*   **Purpose:** Verify commute and location details.
*   **Content:** Static map screenshot with pins linking to Google Maps, paired with driving metrics to key destinations.
*   **CTAs:** Secondary: `Open in Google Maps` (opens in new tab).

##### 4. Brochure Download Banner
*   **Purpose:** Convert interested readers into leads.
*   **Content:** Simple form to unlock the brochure download link.
*   **CTAs:** Primary form button: `Get Brochure PDF`.

#### Form Specification: Brochure Download Form
*   **Fields:**
    *   *Full Name:* Text field, required.
    *   *Mobile Number:* Number input field, required.
*   **Validation Rules:** Checks input lengths and patterns.
*   **Success State:** Form disappears and renders download link: `[Download Project Brochure PDF]`.

---

### PAGE 5: GALLERY PAGE (`/gallery`)

*   **Page Goal:** Show actual development progress to build buyer confidence.
*   **Target User:** Local and remote investors.
*   **User Journey:**
    *   Arrives at Gallery $\rightarrow$ Filters by project $\rightarrow$ Views site development images.
*   **Layout Structure & Section Order:**
    1.  Header Title
    2.  Project Media Filter
    3.  Gallery Grid
    4.  Footer

#### Detailed Section Breakdown

##### 1. Gallery Grid
*   **Purpose:** Show actual site development progress.
*   **Content:** Grid of high-res images showing road construction, water tank installations, and site work.
*   **CTAs:** Tap image to open full-screen lightbox view.
*   **Visual Hierarchy:** Clean grid layout, with options to filter content by project.

---

### PAGE 6: CONTACT PAGE (`/contact`)

*   **Page Goal:** Centralize contact details and form submissions.
*   **Target User:** All prospective buyers looking to schedule visits.
*   **User Journey:**
    *   Lands on Contact page $\rightarrow$ Identifies phone/WhatsApp options or fills booking form.
*   **Layout Structure & Section Order:**
    1.  Hero Header
    2.  Contact Information Row
    3.  Google Maps Embed Block
    4.  Book Site Visit Form Section
    5.  Footer

#### Detailed Section Breakdown

##### 1. Contact Info & Office Locations
*   **Purpose:** Display physical location details and direct contact channels.
*   **Content:** Address details, direct sales hotline, WhatsApp link, and business hours.
*   **CTAs:** Primary buttons: `Call Sales Hotline`, `WhatsApp Chat`.

##### 2. Google Maps Embed
*   **Purpose:** Help users navigate to our corporate office.
*   **Content:** Interactive Google Maps frame showing our Gachibowli location.
*   **CTAs:** Direct button link: `Get Driving Directions`.

---

### PAGE 7: FAQs PAGE (`/faqs`)

*   **Page Goal:** Address user concerns regarding legal documents, titles, and approvals.
*   **Target User:** All prospective buyers.
*   **Layout Structure & Section Order:**
    1.  Hero Header
    2.  FAQ Category Toggle
    3.  FAQ Accordion List
    4.  Footer

#### Detailed Section Breakdown

##### 1. FAQ Accordion List
*   **Purpose:** Group common questions into easy-to-read categories.
*   **Content:** Detailed explanations of legal link documents, municipal zone approvals, and registration processes.
*   **CTAs:** Collapsible layout elements.

---

### PAGES 8 & 9: PRIVACY POLICY & TERMS PAGE (`/privacy-policy`, `/terms-conditions`)

*   **Page Goal:** Display standard regulatory compliance notices.
*   **Layout Structure & Section Order:**
    1.  Clean text document layout.
    2.  Footer.

---

## 4. Master Specification Tables

### 4.1 Global Form Validation Framework

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              FORM VALIDATION STANDARDS                                 │
├───────────────┬─────────────────────────────┬──────────────────────────────────────────┤
│ Field Type    │ Trigger Validation Rule     │ UI Error Response                        │
├───────────────┼─────────────────────────────┼──────────────────────────────────────────┤
│ Full Name     │ Min 3 letters, no symbols   │ Red border, display "Name required"      │
│ Mobile Number │ Country selector + 10 digits│ Red border, display "Valid number req."  │
│ Email Address │ Standard pattern check      │ Red border, display "Enter valid email"  │
│ Pick-up Select│ Must choose one option      │ Show notification above form submission  │
└───────────────┴─────────────────────────────┴──────────────────────────────────────────┘
```

### 4.2 Button States Specification Table

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                               BUTTON STATE SPECIFICATIONS                              │
├─────────────────┬───────────────────────┬───────────────────────┬──────────────────────┤
│ Button Type     │ Hover Effect          │ Focus Effect          │ Disabled State       │
├─────────────────┼───────────────────────┼───────────────────────┼──────────────────────┤
│ Primary Solid   │ Scale zoom (1.02x),   │ Outline ring border   │ Opacity 50%, gray    │
│                 │ background transition │                       │ background, no click │
│ Secondary Ghost │ Accent color fill,    │ Outline ring border   │ Opacity 50%, gray    │
│                 │ border highlights     │                       │ border, no click     │
│ Icon Action     │ Subtle highlight overlay│ Visible focus indicator│ Opacity 50%, hidden  │
└─────────────────┴───────────────────────┴───────────────────────┴──────────────────────┘
```

---

## 5. Development Staging Checklist

*   **Responsive verification:** Confirm layout layouts match targeting across mobile, tablet, and desktop viewports.
*   **Accessibility checks:** Verify high-contrast color choices, form labels, and focus indicators for screen readers.
*   **Performance metrics:** Optimize asset assets, lazy load off-screen content, and aim for mobile page loads under 1.8s.
