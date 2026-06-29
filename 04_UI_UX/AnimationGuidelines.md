# Animation Guidelines – Sreeja Developers and Constructions

**Role:** Principal Design Systems Architect  
**Project:** Sreeja Highway City MVP  
**Document:** AnimationGuidelines.md  
**Status:** Approved for Implementation  
**Version:** 1.0  

---

## 1. Core Animation Philosophy

Animations are designed to be subtle and fast, serving as visual feedback to improve the user experience rather than just decorative elements. Every animation must:
*   Use hardware-accelerated CSS properties (`transform`, `opacity`).
*   Complete quickly to prevent user interaction delays.
*   Support browser reduced-motion preferences (`prefers-reduced-motion`).

---

## 2. Motion Timings & Curves

All animations use the tokens defined in `DesignTokens.md`:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            MOTION CURVES & TIMINGS                          │
├─────────────────┬──────────┬─────────────────────────┬──────────────────────┤
│ Token Name      │ Duration │ Easing Cubic-Bezier     │ Application Context  │
├─────────────────┼──────────┼─────────────────────────┼──────────────────────┤
│ fast            │ 100ms    │ cubic-bezier(0.16, 1,   │ Button fills, link   │
│                 │          │ 0.3, 1) [ease-out]      │ states hover         │
│ normal          │ 200ms    │ cubic-bezier(0.16, 1,   │ Page transitions,    │
│                 │          │ 0.3, 1) [ease-out]      │ navigation changes   │
│ slow            │ 300ms    │ cubic-bezier(0.87, 0,   │ Drawer slide-ins,    │
│                 │          │ 0.13, 1) [ease-in-out]  │ modal popups         │
│ expand          │ 500ms    │ cubic-bezier(0.87, 0,   │ Accordion expansions,│
│                 │          │ 0.13, 1) [ease-in-out]  │ timeline reveals     │
└─────────────────┴──────────┴─────────────────────────┴──────────────────────┘
```

---

## 3. Component Animation Standards

### 3.1 Button Interactive Feedback
*   **Scale Zoom:** Mouse hover zooms the primary button slightly (`scale: 1.02`).
*   **Color Fades:** Gold backgrounds transition smoothly to a lighter gold tint.
*   **Disabled click:** Block transition triggers and reset mouse cursors for disabled states.

### 3.2 Navigation Header Scroll Actions
*   As the user scrolls past `50px` from the top, the navigation background transitions from transparent to Obsidian Charcoal over `200ms`.

### 3.3 Project Cards Hover Effect
*   **Image Zoom:** Mouse hover scales the card's background image slightly (`scale: 1.05`) over a `300ms` transition.
*   **Card elevation:** Elevate card container shadow slightly.

### 3.4 FAQ Accordion Collapse
*   Expanding questions slides open the content block over `500ms`, while smoothly rotating the indicator icon 180 degrees.

### 3.5 Modal and Mobile Menu Drawer Overlays
*   **Central Modal:** Fades in the background overlay while scaling the container up from `95%` size over `300ms`.
*   **Drawer slide-in:** The drawer slides in from the right edge with a `300ms` ease-out transition.

---

## 4. Reduced Motion Policies

To ensure accessibility for all users, apply the following rule:
*   When `prefers-reduced-motion: reduce` is detected, set all transition timings to `0s` and disable slide/fade-in animations. Only allow instant state shifts to ensure a comfortable user experience.
