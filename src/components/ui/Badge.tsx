/**
 * @id CMP-029
 * @name Badge
 * @purpose Small status tags for highlights or disclosures (e.g., "RERA Approved").
 * @a11y Meets WCAG AA targets.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "accent" | "success" | "danger" | "info";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  accent: "border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)]",
  success: "border-[var(--color-success)] bg-[color-mix(in_srgb,var(--color-success)_12%,transparent)]",
  danger: "border-[var(--color-danger)] bg-[color-mix(in_srgb,var(--color-danger)_12%,transparent)]",
  info: "border-[var(--color-info)] bg-[color-mix(in_srgb,var(--color-info)_12%,transparent)]",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, variant = "accent", ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-[var(--color-text-primary)]",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
});
