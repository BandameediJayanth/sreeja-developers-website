# Frontend Security Guide – Sreeja Developers and Constructions

**Role:** Principal Frontend Architect  
**Project:** Sreeja Highway City MVP  
**Document:** SecurityGuide.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. Cross-Site Scripting (XSS) Prevention

*   **HTML Escaping:** Next.js automatically escapes values rendered in layouts. Never use `dangerouslySetInnerHTML` unless rendering static text that has been sanitized.
*   **Sanitization:** User input is sanitized before rendering or submitting to backend API endpoints, stripping out potentially malicious code characters.

---

## 2. Content Security Policy (CSP)

Implement strict CSP headers via Next.js middleware configurations to restrict script execution and style origins:

```ini
default-src 'self';
script-src 'self' 'unsafe-eval' https://challenges.cloudflare.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
img-src 'self' data: https://images.unsplash.com https://supabase.co;
frame-src 'self' https://challenges.cloudflare.com https://www.google.com/maps;
connect-src 'self' https://api.sreejadevelopers.com https://supabase.co;
```

---

## 3. Form Validation & Data Sanitization

*   **Zod Schema Validation:** All form inputs must match Zod schemas before being sent to the backend. This prevents invalid payload layouts from causing server errors.
*   **Rate Limiting Strategy:** Apply IP-based rate limiting on contact form endpoints (e.g., limit submissions to a maximum of 5 requests per 10 minutes) to prevent form abuse.
*   **Environment Variables:** Store private credentials (API keys, Supabase credentials) in environment files on the server. They are never exposed to client browsers.
