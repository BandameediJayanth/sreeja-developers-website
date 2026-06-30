/**
 * @id CMP-044
 * @name Caption
 * @purpose Small caption or tag descriptor text.
 * @a11y Meets WCAG AA targets.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export type CaptionProps = React.HTMLAttributes<HTMLSpanElement>;

export const Caption = React.forwardRef<HTMLSpanElement, CaptionProps>(function Caption(
  { className, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn(
        "font-body text-xs leading-normal text-[var(--color-text-secondary)] tracking-normal",
        className,
      )}
      {...props}
    />
  );
});
