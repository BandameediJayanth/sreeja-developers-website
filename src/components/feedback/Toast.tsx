/**
 * @id CMP-031
 * @name Toast
 * @purpose Toast alert message for system notifications.
 * @a11y Uses proper roles and polite announcements.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "danger" | "info" | "warning";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  description?: string;
  type?: ToastType;
  onClose?: () => void;
}

const typeStyles: Record<ToastType, { border: string; bg: string; iconColor: string; icon: string }> = {
  success: {
    border: "border-[var(--color-success)]",
    bg: "bg-[color-mix(in_srgb,var(--color-success)_10%,var(--color-surface-base))]",
    iconColor: "text-[var(--color-success)]",
    icon: "M5 13l4 4L19 7",
  },
  danger: {
    border: "border-[var(--color-danger)]",
    bg: "bg-[color-mix(in_srgb,var(--color-danger)_10%,var(--color-surface-base))]",
    iconColor: "text-[var(--color-danger)]",
    icon: "M6 18L18 6M6 6l12 12",
  },
  warning: {
    border: "border-[var(--color-accent)]",
    bg: "bg-[color-mix(in_srgb,var(--color-accent)_10%,var(--color-surface-base))]",
    iconColor: "text-[var(--color-accent)]",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  },
  info: {
    border: "border-[var(--color-info)]",
    bg: "bg-[color-mix(in_srgb,var(--color-info)_10%,var(--color-surface-base))]",
    iconColor: "text-[var(--color-info)]",
    icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
};

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(function Toast(
  { message, description, type = "info", onClose, className, ...props },
  ref,
) {
  const styles = typeStyles[type];

  return (
    <div
      ref={ref}
      role="alert"
      aria-live="assertive"
      className={cn(
        "flex max-w-md w-full items-start gap-4 rounded-lg border p-4 shadow-lg backdrop-blur-md transition-all duration-300 ease-out",
        styles.border,
        styles.bg,
        className,
      )}
      {...props}
    >
      <div className={cn("flex-shrink-0 pt-0.5", styles.iconColor)}>
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
            d={styles.icon}
          />
        </svg>
      </div>
      <div className="flex-1 space-y-1">
        <p className="font-body text-sm font-semibold text-[var(--color-text-primary)]">
          {message}
        </p>
        {description ? (
          <p className="font-body text-xs text-[var(--color-text-secondary)]">
            {description}
          </p>
        ) : null}
      </div>
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="flex-shrink-0 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] focus:outline-none"
          aria-label="Close alert"
        >
          <svg
            className="h-4 w-4"
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
      ) : null}
    </div>
  );
});
