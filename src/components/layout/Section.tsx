/**
 * @id CMP-046
 * @name Section
 * @purpose Structural container that enforces uniform vertical margins between page blocks.
 * @a11y Meets WCAG AA targets.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "none";
}

const spacingClasses = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-20", // py-20 is 80px spacing defined in design tokens
  none: "py-0",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(
  { className, spacing = "lg", ...props },
  ref,
) {
  return (
    <section
      ref={ref}
      className={cn(spacingClasses[spacing], className)}
      {...props}
    />
  );
});
