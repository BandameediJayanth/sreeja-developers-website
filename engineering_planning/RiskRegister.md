# Risk Register – Sreeja Developers and Constructions

**Role:** Engineering Manager & Scrum Master  
**Project:** Sreeja Highway City Web Platform (MVP)  
**Document:** RiskRegister.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## Project Risk Matrix & Mitigations

| Risk ID | Description | Impact | Probability | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **RSK-001** | **Heavy media assets causing slow mobile loading times.** High-res drone and gallery photos could delay page load speeds. | High | High | Convert all images to WebP/AVIF formats, apply compression (max 200KB per image), implement native lazy loading, and host assets on Vercel's global CDN. |
| **RSK-002** | **Supabase database connection failures.** Database offline could prevent lead capture during traffic spikes. | Critical | Low | Implement client-side fallback storage (`localStorage`) to save form submissions, automatically retrying once the network connection is restored. |
| **RSK-003** | **Spam lead submissions.** Public forms could attract bot submissions, overloading our sales team. | Medium | High | Integrate Cloudflare Turnstile verification on all forms, use hidden form fields (honeypots), and apply server-side input validation. |
| **RSK-004** | **Changes to RERA compliance regulations.** New legal guidelines could require fast updates to disclaimers. | High | Low | Design disclaimer blocks, footer text, and project details to update dynamically from our metadata database. |
| **RSK-005** | **Delays on Critical Path tasks.** Backend API or database setup delays could push back the launch date. | High | Medium | Set up mock API endpoints early so frontend developers can test form submissions before the backend is fully deployed. |
