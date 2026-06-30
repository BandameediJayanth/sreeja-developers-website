/**
 * @id CMP-004
 * @name Button
 * @purpose General action button supporting primary/secondary theme variants.
 * @a11y Meets WCAG AA targets, requires explicit aria-label if text is omitted.
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-background)] hover:bg-[color-mix(in_srgb,var(--color-accent)_85%,white)]",
  secondary:
    "border border-[var(--color-accent)] bg-transparent text-[var(--color-text-primary)] hover:bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)]",
  ghost: "bg-transparent text-[var(--color-text-primary)] hover:bg-white/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm rounded-md",
  md: "h-12 px-5 text-sm rounded-md",
  lg: "h-14 px-6 text-base rounded-md",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", isLoading = false, disabled, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
      {isLoading ? <span className="sr-only">Loading</span> : null}
    </button>
  );
});
