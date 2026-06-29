# Critical Path Analysis – Sreeja Developers and Constructions

**Role:** Engineering Manager & Scrum Master  
**Project:** Sreeja Highway City Web Platform (MVP)  
**Document:** CriticalPath.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. Defining the Critical Path

The Critical Path represents the sequence of dependent tasks that directly determine the minimum timeline to launch the V1 MVP. Delays on this path will directly push back the target release date.

```
[TSK-002: Next.js Setup] ──► [TSK-017: Container Component] ──► [TSK-086: Form Interface]
                                                                      │
[TSK-136: Release] ◄── [TSK-126: QA Testing] ◄── [TSK-102: API Setup] ◄───────┘
```

---

## 2. Critical Path Sequence & Task Details

### Step 1: Environment & Boilerplate (Duration: 5 hours)
*   *TSK-001 (Git Setup)* and *TSK-002 (Next.js Setup)* are the initial blocks. They must compile cleanly on developer machines before any styling or code is written.

### Step 2: Global Layout & Containers (Duration: 6 hours)
*   *TSK-017 (Container)* defines how pages center and scale content. Layout development cannot start without this component.

### Step 3: Contact Form Interface (Duration: 6 hours)
*   *TSK-086 (Form Interface)* must be complete before backend integration. Form field names must be defined so the backend API knows what data schema to expect.

### Step 4: Supabase Database Schema (Duration: 4 hours)
*   *TSK-101 (Supabase Setup)* must be configured before building API endpoints. PostgreSQL tables must exist to store form data.

### Step 5: Backend API Endpoint (Duration: 6 hours)
*   *TSK-102 (FastAPI)* receives form submissions, validates inputs, and writes data to Supabase. This endpoint must be live before testing can start.

### Step 6: User Journey Integration Testing (Duration: 6 hours)
*   *TSK-126 (Integration QA)* tests the end-to-end user flow: loading pages, entering form data, submitting, writing to the database, and sending email alerts.

### Step 7: Vercel Production Release (Duration: 4 hours)
*   *TSK-136 (Vercel Release)* is the final step: deploying build outputs, pointing custom domains, verifying active SSL checks, and launching the site live.

---

## 3. Acceleration & Risk Mitigation Strategies

*   **Parallel Development:** UI components (Navbar, footer) and informational pages (About, FAQs) can be developed in parallel while the core critical path tasks are executed.
*   **Early Database Mocking:** Developers can mock API endpoints to test form submissions before the backend and database are fully deployed.
*   **Continuous CI/CD Testing:** Configure Vercel preview environments early. Build checks should run on every pull request to catch syntax issues early and keep development moving smoothly.
