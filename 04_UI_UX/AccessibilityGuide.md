# Accessibility Specification Guide – Sreeja Developers and Constructions

**Role:** Principal Design Systems Architect  
**Project:** Sreeja Highway City MVP  
**Document:** AccessibilityGuide.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. Regulatory Target: WCAG 2.1 Level AA Compliance

All page layouts, forms, interactive components, and visual assets must meet the **WCAG 2.1 Level AA** standards.

---

## 2. Keyboard Navigation Requirements

All interactive elements must be fully navigable using only the keyboard:

*   **Tab Order:** Focus must follow the logical reading order (top-to-bottom, left-to-right).
*   **Focus Ring Indicator:** Focusable elements must display a clear focus outline (`2px solid #D4AF37` offset by `2px`). Do not hide outline styles without providing an equivalent focus style.
*   **Skip Link Navigation:** Provide a skip-to-content link (`#main-content`) at the top of the page, hidden until focused by keyboard tabbing.
*   **Popup Overlays & Drawers:**
    *   Pressing Escape must close open modal popups or menu drawers.
    *   Focus must remain trapped within the active modal until it is closed. Return focus to the trigger element once the overlay is dismissed.

---

## 3. ARIA Specifications

Use ARIA attributes to describe interactive component states for assistive technologies:

*   **Mobile Hamburg Menu Burger Toggle:** `aria-expanded="true/false"`, `aria-controls="mobile-drawer-id"`.
*   **FAQ Accordion Headers:** `aria-expanded="true/false"`, `aria-controls="faq-content-id"`.
*   **Modal Popups:** Wrap popup contents inside wrappers marked with `role="dialog"` and `aria-modal="true"`.
*   **Decorative Images & Icons:** Elements like decorative background shapes or icons must use `aria-hidden="true"` to prevent screen readers from announcing them.

---

## 4. Visual Contrast Guidelines

*   **Text elements:** Ensure text has a contrast ratio of at least **4.5:1** against its background (or **3:1** for text larger than 18pt).
*   **Interactive components:** Button borders, focus states, and input field outlines must have a contrast ratio of at least **3:1** against the background.
*   **Data indicators:** Never rely solely on color to convey information (e.g., denote required form fields with asterisk text indicators alongside red highlight borders).

---

## 5. Screen Reader Optimization

*   **Alternative Text:** Every image must include descriptive alt text:
    *   *Bad Alt:* `Image of road`
    *   *Good Alt:* `Completed 60-foot wide blacktop road at Sreeja Highway City layout entrance`
*   **Form Field Labels:** Inputs must be paired with visible label tags. Do not rely solely on placeholder text.
*   **Live Regions for Errors:** Apply dynamic live regions (`aria-live="assertive"`) to form error containers so validation alerts are immediately announced to screen readers.

---

## 6. Touch Targets for Mobile Viewports

To ensure usability on mobile devices, all interactive elements must meet size requirements:
*   **Minimum Target Size:** Buttons, link toggles, and form checkboxes must have a minimum touch target size of **48px by 48px**.
*   **Gutters:** Ensure a minimum of **8px** of space between adjacent touch targets to prevent accidental taps.
