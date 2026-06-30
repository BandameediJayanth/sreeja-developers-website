/**
 * @id CMP-027
 * @name Heading
 * @purpose Standard page and section headers.
 * @a11y Meets WCAG AA targets.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const headingSizes: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
  1: "text-4xl md:text-6xl font-bold tracking-[0.08em] leading-tight",
  2: "text-3xl md:text-[32px] font-semibold tracking-[0.08em] leading-snug",
  3: "text-2xl font-semibold tracking-[0.08em] leading-snug",
  4: "text-xl font-medium tracking-[0.08em] leading-normal",
  5: "text-lg font-medium tracking-[0.08em] leading-normal",
  6: "text-base font-medium tracking-[0.08em] leading-normal",
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { level = 2, className, ...props },
  ref,
) {
  return React.createElement(
    `h${level}`,
    {
      ref,
      className: cn(
        "font-heading text-[var(--color-text-primary)]",
        headingSizes[level],
        className,
      ),
      ...props,
    }
  );
});
