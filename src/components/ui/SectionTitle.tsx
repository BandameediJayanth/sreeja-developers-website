/**
 * @id CMP-045
 * @name SectionTitle
 * @purpose Standardized title header for sections, displaying a gold subtitle above the main Cinzel title.
 * @a11y Meets WCAG AA targets.
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "./Heading";

export interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export const SectionTitle = React.forwardRef<HTMLDivElement, SectionTitleProps>(function SectionTitle(
  { title, subtitle, align = "left", className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col mb-8 md:mb-12",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className,
      )}
      {...props}
    >
      {subtitle && (
        <span className="font-body text-xs md:text-sm font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase mb-2">
          {subtitle}
        </span>
      )}
      <Heading
        level={2}
        className="font-heading text-2xl md:text-4xl font-bold tracking-[0.08em] text-[var(--color-text-primary)]"
      >
        {title}
      </Heading>
    </div>
  );
});
