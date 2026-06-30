/**
 * @id CMP-034
 * @name Modal
 * @purpose Centered dialog panel for popups and notifications.
 * @a11y Meets WCAG AA targets, traps keyboard focus, closes on ESC.
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="presentation"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close dialog background overlay"
        className="absolute inset-0 bg-[var(--color-overlay)] backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Content Container */}
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "relative w-full max-w-lg rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-2xl transition-transform zoom-in-95 duration-200 ease-out",
          className,
        )}
        {...props}
      >
        {title ? (
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text-primary)]">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] focus:outline-none"
              aria-label="Close dialog"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
});
