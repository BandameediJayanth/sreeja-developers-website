/**
 * @id CMP-006
 * @name Drawer
 * @purpose Slide-in drawer container for mobile navigation or quick menus.
 * @a11y Meets WCAG AA targets, locks body scrolling, supports Escape closing trigger.
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
  { isOpen, onClose, title, className, children, ...props },
  ref,
) {
  React.useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300 ease-out",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <button
        type="button"
        aria-label="Close drawer overlay"
        className="absolute inset-0 bg-[var(--color-overlay)]"
        onClick={onClose}
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "absolute right-0 top-0 h-full w-full max-w-sm border-l border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
});
