/**
 * @id CMP-028
 * @name Paragraph
 * @purpose Body text formatting.
 * @a11y Meets WCAG AA targets.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(function Paragraph(
  { className, ...props },
  ref,
) {
  return (
    <p
      ref={ref}
      className={cn(
        "font-body text-base leading-relaxed text-[var(--color-text-secondary)]",
        className,
      )}
      {...props}
    />
  );
});
