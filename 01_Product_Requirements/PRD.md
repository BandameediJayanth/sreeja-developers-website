# Product Requirements Document (PRD)

## Project Name: Sreeja Highway City – Digital Experience Platform
**Role:** Chief Product Officer (CPO) & Chief Technology Officer (CTO)  
**Company:** Sreeja Developers and Constructions  
**Date:** June 29, 2026  
**Status:** Under Review / Revision 2.0  
**Version:** 2.0 (MVP Focused)

---

## 1. Executive Summary & Product Vision

### 1.1 Document Purpose
This revised Product Requirements Document (PRD) defines the finalized scope, information architecture, functional specifications, and technical milestones for the **Sreeja Developers and Constructions Digital Platform**. The goal is to establish a streamlined, professional, and production-ready Minimum Viable Product (MVP) that focuses on one objective: **Generate trust and qualified leads.**

### 1.2 Product Vision
To build an authoritative, high-performance web experience that showcases high-value residential and commercial land developments in Telangana. By combining clean aesthetics, transparent legal references, and clear points of contact, the platform will establish Sreeja Developers and Constructions as the gold standard of trust (*Mana Nammakam*) for both local and remote buyers. 

This version (V1) focuses on showcasing our active projects and capturing high-intent leads, deferring complex interactive tools (interactive mapping, online booking, financial calculators) to Version 2.

---

## 2. Business Goals

### 2.1 Quantitative Goals (MVP Horizon)
*   **Visitor-to-Lead Conversion Rate:** Target **1.8% to 2.2%** from search and social traffic.
*   **Core Web Vitals Pass Rate:** Achieve 100% "Good" scores on Google Search Console, with a Largest Contentful Paint (LCP) under **1.8 seconds** on mobile devices.
*   **Form Submission Success Rate:** Ensure **> 98%** completion for visitors who initiate the "Book Site Visit" form.
*   **Organic Keyword Indexation:** Establish top-page rankings for key corridor queries (`highway facing plots Telangana`, `open plots near Hyderabad`) within 90 days of launch.

### 2.2 Qualitative Goals
*   **Establish Unshakable Trust (*Mana Nammakam*):** Highlight regulatory compliance (TSRERA/P02400039281), clear title summaries, and corporate legacy.
*   **Frictionless User Journey:** Enable prospective buyers to review active layouts, understand key connectivity points, and initiate contact within 2 clicks.
*   **Premium Brand Image:** Project luxury and security through high-quality typography (Cinzel & Outfit), a dark base color palette (Obsidian Charcoal, Telangana Gold), and subtle micro-animations.

---

## 3. User Personas

The platform MVP is designed to address the core requirements of three primary segments:

### 3.1 Persona 1: The Remote Investor (US/UK/Gulf NRI)
*   **Name:** Rajesh Kurapati (42 years)
*   **Location:** Santa Clara, California, USA (with a secondary segment in Dubai, UAE)
*   **Occupation:** Principal Cloud Architect / Tech Professional
*   **Needs & Motivations:** Wants to invest surplus income in appreciating Telangana land. Requires clear, verifiable documentation.
*   **Pain Points:** Time-zone differences and lack of physical presence to verify progress or legal title authenticity.
*   **V1 MVP Solution:** Direct access to project brochures, transparent RERA/HMDA registration displays, and simple WhatsApp/Call channels to coordinate remote discussions.

### 3.2 Persona 2: The Gated Villa Builder (The End-User)
*   **Name:** Srinivas & Sreeja Rao (38 & 36 years)
*   **Location:** Gachibowli, Hyderabad, India
*   **Needs & Motivations:** Living in high-rise apartments; wants to build a custom luxury villa in a secure community near major IT corridors.
*   **Pain Points:** Worried about infrastructure quality (roads, water, sewerage) and hidden developmental charges.
*   **V1 MVP Solution:** Clear breakdown of gated community amenities (BT roads, underground utilities) and a prominent CTA to book a physical site visit.

### 3.3 Persona 3: The Land Investor (The Local Multiplier)
*   **Name:** Laxman Gowd (51 years)
*   **Location:** Karimnagar, Telangana
*   **Occupation:** Business Owner / Real Estate Investor
*   **Needs & Motivations:** Seeks pre-launch and early-stage plots to capture capital appreciation. Relies on fast, direct communication.
*   **Pain Points:** Slow developer response times and clunky mobile websites that load slowly on 4G networks.
*   **V1 MVP Solution:** A fast mobile interface showing layout plans, a list of active ventures, and instant "Call Now" or "WhatsApp" CTAs.

---

## 4. User Journey Map

```mermaid
journey
    title MVP Trust-to-Lead Journey
    section Discovery
      User visits website via Search/Social: 5: User
      Page loads instantly (<1.8s LCP) on mobile: 5: User
    section Consideration
      Reviews high-quality project drone stills and details: 4: User
      Reads founder values & experience on About page: 4: User
    section Trust Building
      Sees RERA & municipal approvals clearly displayed: 5: User
      Downloads project brochure to share with family: 4: User
    section Conversion
      Decides to book site visit or call sales helpline: 5: User
      Form submitted; data synced to database: 5: User
```

---

## 5. Information Architecture & Sitemap

The V1 MVP layout utilizes a simplified, flat architecture to prioritize load speeds and reduce navigation friction:

```
Main Domain (https://sreejadevelopers.com)
│
├── / (Home Page)
│
├── /about-us/ (Corporate profile & leadership principles)
│
├── /projects/ (All Ventures Index Directory)
│   └── /projects/{project-slug} (Standardized details page for each active venture)
│
├── /gallery/ (High-resolution media & progress portfolio)
│
├── /contact/ (Contact options, location directory & booking form)
│
├── /faqs/ (Answers regarding titles, approvals & purchase processes)
│
├── /privacy-policy/ (Compliance terms for personal data)
│
└── /terms-conditions/ (Standard guidelines for site visits & bookings)
```

---

## 6. Page-by-Page Requirements

### 6.1 Home Page (`/`)
The homepage is designed to guide visitors from initial interest to key project details, establishing trust along the way:
1.  **Hero Section:** 
    *   Premium high-resolution background image or compressed video loop showing the entrance arch and highway connectivity.
    *   H1: *"Bhoomi – Mana Nammakam. Own the Frontline of Telangana's Economic Future."*
    *   Subhead: *"Premium highway-facing residential and commercial open plots developed with complete legal security."*
    *   Primary CTAs: `[Book Site Visit]` and `[Download Brochure]`.
    *   Trust Badges: Icons for HMDA, DTCP, and TSRERA.
2.  **Featured Projects:**
    *   Highlight cards for active projects (e.g., Sreeja Highway City, Sreeja Haritha Sandalwood County).
    *   Each card features a high-res image, key details (Location, Approval Status), and a direct link to the details page.
3.  **Why Choose Sreeja:**
    *   Highlights our commitment to legal transparency, clear titles, premium gated infrastructure, and customer service.
4.  **Investment Benefits:**
    *   Details the advantages of highway-facing plots, capital appreciation trends in Telangana corridors, and the security of gated community layouts.
5.  **Gallery Preview:**
    *   A grid of high-quality actual photographs showing completed roads, plantation works, and site entrances.
    *   CTA to view the full Gallery.
6.  **Testimonials:**
    *   Written quotes and video links from local and NRI buyers sharing their experiences.
7.  **FAQ Preview:**
    *   A clean accordion displaying 3 to 4 frequently asked questions about RERA, approvals, and titles.
8.  **Contact Section:**
    *   A contact form for booking site visits, paired with direct contact details (phone, WhatsApp, and office address).
9.  **Footer:**
    *   TSRERA registration disclaimers, physical address, direct phone links, and compliance pages.

---

### 6.2 About Page (`/about-us`)
This page is focused on establishing corporate credibility and trust:
1.  **Company Introduction:** The story of Sreeja Developers and Constructions, highlighting our growth and focus on transparent transactions.
2.  **Vision:** To become the most trusted regional leader in land development across Telangana, converting highway corridors into premium commercial and residential hubs.
3.  **Mission:** To deliver premium, legally clear land investments along Telangana’s fastest-growing corridors, enabling families to build long-term wealth.
4.  **Experience:** Detailing our two decades of experience in land development and construction.
5.  **Core Values:**
    *   *Mana Nammakam (Our Trust):* Complete legal transparency, active RERA approvals, and clear titles.
    *   *Bhoomi & Legacy:* Developing gated open plots that families can pass down through generations.
    *   *Infrastructure Quality:* Delivering wide roads, secure boundaries, and utilities.

---

### 6.3 Projects List Page (`/projects`)
A clean index directory showcasing all active, upcoming, and completed ventures:
*   Visual cards for each venture categorized by status (e.g., Active Gated Community, Active Farmlands, Completed Projects).
*   Each card displays: Project Title, Location, Approvals, Status Tag, and a link to the project details page.
*   *Historical Proof:* Puts completed projects (e.g., Inamguda Layout) on display to build trust.

---

### 6.4 Project Details Page (Reusable Template)
Every project utilizes the exact same layout template. This approach ensures ease of maintenance and consistency:
1.  **Hero Section:** 
    *   High-resolution banner of the project entry or layout.
    *   Project name, location, and approval badges (RERA number displayed prominently).
    *   Primary CTAs: `[Download Brochure]` and `[Book Site Visit]`.
2.  **Overview:**
    *   Detailed description of the project, highlighting its strategic value.
    *   A specifications table: Total Acreage, Plot Sizes, Road Frontage, Approval Status, and Availability.
3.  **Gallery:**
    *   Actual site photographs showing infrastructure progress (roads, utilities, landscaping).
4.  **Amenities:**
    *   Icon-based grid showcasing gated community features (e.g., 60ft/40ft BT roads, underground power ducts, overhead water tank, children's park).
5.  **Location:**
    *   Key connectivity metrics (minutes to airport, highway exit, nearest IT cluster).
    *   Static map screenshot linked to Google Maps.
6.  **Brochure Download:**
    *   A simple lead capture form to unlock the downloadable PDF brochure.
7.  **Contact:**
    *   Direct contact details for the project coordinator (Phone, WhatsApp) and a site visit request form.

---

### 6.5 Gallery Page (`/gallery`)
*   A clean grid layout displaying high-resolution images of completed works, current site progress, and promoter photos.
*   Includes filter tags for projects to organize the media library.

---

### 6.6 Contact Page (`/contact`)
*   **Direct Channels:** Clickable phone numbers (`Call Now`) and direct WhatsApp triggers.
*   **Office Address:** HQ office details (Cyber Heights, Gachibowli, Hyderabad).
*   **Business Hours:** Operational timing listings.
*   **Google Maps Embed:** An interactive map showing the location of the HQ office.
*   **Book Site Visit Form:** A single-page form to collect contact details and set up chauffeur-driven site pickups.

---

### 6.7 FAQs Page (`/faqs`)
*   An categorized accordion detailing:
    *   *Legal Questions:* How titles are checked, link documents verification, NALA status, and RERA guidelines.
    *   *Financial Questions:* Bank loan availability, plot loan percentages, and payment schedules.
    *   *Infrastructure Questions:* Roads, drainage, and utility handovers.

---

### 6.8 Privacy Policy & Terms & Conditions Pages (`/privacy-policy`, `/terms-conditions`)
*   Standard compliance content detailing data protection under India's DPDPA 2023, data capture, and terms for bookings and site visits.

---

## 7. The Core CTA System

To maximize conversion rate optimization (CRO) and minimize user friction, all calls-to-action are standardized around four primary actions. All other CTAs are styled as secondary links:

| Action ID | CTA Label | Action Type | V1 Target Output |
| :--- | :--- | :--- | :--- |
| **CTA-1** | `Call Now` | Direct Phone Dial | Triggers standard telephone app dialer to primary helpline |
| **CTA-2** | `WhatsApp` | Direct Chat Link | Launches WhatsApp web/app with pre-filled message |
| **CTA-3** | `Download Brochure` | Form Capture to Download | Opens a simple lead capture modal to download the project brochure |
| **CTA-4** | `Book Site Visit` | Form Submit for Consultation | Navigates to the contact page form or opens a quick booking modal |

---

## 8. Version 2 Roadmap

All deferred features are tracked in [13_Project_Management/Future_Backlog.md](../13_Project_Management/Future_Backlog.md). This MVP document intentionally contains only launch-critical scope.

---

## 9. Technical Stack

To ensure security, scalability, and fast loading speeds, we will implement the following enterprise-grade architecture:

```
                  [ Client Web Interface ]
                             │
                             ▼ (Next.js / TypeScript / Framer Motion)
                       [ Vercel CDN ]
                             │
            ┌────────────────┴────────────────┐
            ▼                                 ▼
      [ FastAPI Backend ]            [ Supabase Platform ]
      (Contact Form Handling)        (Database & Storage Buckets)
            │                                 │
            ▼                                 ▼
    [ SMTP Email Relay ]             [ PostgreSQL Schema ]
    (Sales Notifications)            (Projects Metadata & Leads)
```

*   **Frontend Framework:** Next.js with TypeScript. This setup allows for Static Site Generation (SSG) to build fast static pages (Home, About, FAQs) and client-side rendering for project pages.
*   **Styling & UI Components:** Tailwind CSS for styling, paired with shadcn/ui for consistent interactive components (accordions, buttons, forms).
*   **Animations:** Framer Motion for scroll animations and menu transitions.
*   **Backend Server:** FastAPI (Python). This handles contact submissions, brochure downloads, and email routing.
*   **Database:** Supabase PostgreSQL. This serves as our secure database for storing project metadata, user leads, and contact data.
*   **Storage Solution:** Supabase Storage. A secure repository for project brochures, layout PDFs, and high-resolution images.
*   **Hosting Platform:** Vercel. Global Edge Network CDN hosting to ensure fast load times for regional and remote users.

---

## 10. Development Milestones

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            DEVELOPMENT PIPELINE                             │
├───────────────┬──────────────────────────────────┬──────────────────────────┤
│ Phase ID      │ Milestone Focus                  │ Core Deliverables        │
├───────────────┼──────────────────────────────────┼──────────────────────────┤
│ Milestone 0   │ Project Setup                    │ Repo setup, Tailwind CI, │
│               │                                  │ design system, Vercel CI │
│ Milestone 1   │ Frontend Implementation          │ Core pages, details page │
│               │                                  │ template, visual layouts │
│ Milestone 2   │ Backend & Supabase Integration   │ FastAPI, Postgres leads, │
│               │                                  │ email alert relays       │
│ Milestone 3   │ Performance & SEO Optimization   │ Lighthouse audits,       │
│               │                                  │ schema.org, analytics    │
│ Milestone 4   │ Headless CMS Setup (Phase 2 Prep)│ Supabase/CMS schema mapping│
│ Milestone 5   │ Enterprise CRM Integrations      │ Webhooks for Zoho/Hubspot│
│ Milestone 6   │ Advanced Roadmap Rollout         │ SVG mapping, payment gate│
└───────────────┴──────────────────────────────────┴──────────────────────────┘
```

### 10.1 Milestone 0: Project Setup
*   Initialize Git repository.
*   Configure Next.js with TypeScript and Tailwind CSS.
*   Install and configure shadcn/ui components.
*   Establish the global design tokens (Obsidian Charcoal `#0E1013`, Telangana Gold `#D4AF37`, Haritha Green `#1E4620`, Clear Ivory `#FBFBFC`).
*   Deploy a staging environment on Vercel.

### 10.2 Milestone 1: Frontend Implementation
*   Develop the Homepage, About page, Projects index, Gallery page, Contact page, and FAQ page.
*   Implement the standardized Project Details Page Template.
*   Integrate Framer Motion animations.
*   Deliver the core layouts, headers, and footers.
*   Verify cross-browser and mobile responsiveness.

### 10.3 Milestone 2: Backend & Supabase Integration
*   Develop the FastAPI application to process contact forms and brochure requests.
*   Set up Supabase PostgreSQL tables to capture and organize leads.
*   Configure Supabase Storage buckets for hosting layouts and marketing brochures.
*   Set up email notifications to alert sales managers when new leads are captured.

### 10.4 Milestone 3: Performance, SEO & Analytics
*   Optimize images (WebP conversion and sizing configurations).
*   Add dynamic Open Graph meta tags to all project pages.
*   Integrate JSON-LD schema markup (`RealEstateListing`, `AboutPage`, `FAQPage`).
*   Configure analytics tracking scripts (GA4) and verify search indexation setups.
*   Conduct Lighthouse audits to confirm performance targets (LCP < 1.8s, mobile score > 95).

### 10.5 Milestone 4: CMS Integration (Preparation for Future Updates)
*   Define the database schema in Supabase to allow marketing teams to manage content.
*   Connect project pages to dynamically pull data (descriptions, pricing indicators, and statuses) from Supabase.

### 10.6 Milestone 5: Enterprise CRM Integration (V2 Phase)
*   Develop secure webhooks to sync leads from Supabase directly to Zoho CRM.
*   Configure backup lead queues in Supabase to handle potential CRM downtime.

### 10.7 Milestone 6: Advanced Roadmap Rollout (V2 Phase)
*   Develop interactive SVG master plans showing real-time plot availability.
*   Integrate the online booking token payment gateway.
*   Configure OTP SMS verification and the NRI video scheduler.

---

## 11. Risks & Mitigation Strategies

| Risk Identified | Impact | Probability | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **Heavy media assets affecting load speed** | High | High | Convert images to WebP/AVIF formats, implement lazy loading, and host assets on Vercel's global CDN. |
| **Changes in TSRERA/municipal guidelines** | High | Low | Design all disclaimer blocks, footer text, and project details to update dynamically from our metadata database. |
| **Form submission failures** | Critical | Low | Implement a local storage fallback system that saves form inputs in the client's browser if the backend connection is lost, retrying the submission when online. |
| **Spam lead submissions** | Medium | Medium | Integrate Cloudflare Turnstile verification and implement server-side validation to filter out duplicate inputs. |

---

## 12. Success Metrics (KPIs)

To evaluate the success of the platform post-release, the following KPIs will be monitored weekly:

1.  **Lead Capture Rate:** Total form submissions divided by unique visitors (Target: **> 2.0%**).
2.  **Brochure Download Rate:** Unique downloads per project details page view (Target: **> 12%**).
3.  **Lighthouse Performance Score:** Performance validation on mobile devices (Target: **> 95**).
4.  **Site Visit Inbound Rate:** Percentage of leads opting for a chauffeur-driven site visit (Target: **> 20%**).
5.  **Average Response Time:** Time elapsed between a form submission and our team's outbound sales response (Target: **< 15 minutes** during business hours).
