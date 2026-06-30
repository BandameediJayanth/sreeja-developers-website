/**
 * @id CMP-023
 * @name Card
 * @purpose Content grouping panel with distinct header, body, and footer spaces.
 * @a11y Meets WCAG AA targets.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] shadow-sm overflow-hidden",
        className,
      )}
      {...props}
    />
  );
});

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(function CardHeader(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn("p-6 pb-4 flex flex-col space-y-1.5", className)}
      {...props}
    />
  );
});

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(function CardContent(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn("p-6 pt-0 font-body text-base text-[var(--color-text-secondary)]", className)}
      {...props}
    />
  );
});

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(function CardFooter(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn("p-6 pt-0 flex items-center border-t border-[var(--color-border)]/50 mt-4", className)}
      {...props}
    />
  );
});
