/**
 * @id CMP-047
 * @name Divider
 * @purpose Structural line separation for layout sections.
 * @a11y Uses semantic <hr> tag for horizontal separation and proper ARIA role for vertical separator.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  orientation?: "horizontal" | "vertical";
}

export const Divider = React.forwardRef<HTMLElement, DividerProps>(function Divider(
  { orientation = "horizontal", className, ...props },
  ref,
) {
  if (orientation === "vertical") {
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        role="separator"
        aria-orientation="vertical"
        className={cn("w-[1px] self-stretch bg-[var(--color-border)]", className)}
        {...props}
      />
    );
  }

  return (
    <hr
      ref={ref as React.Ref<HTMLHRElement>}
      className={cn("w-full border-0 border-t border-[var(--color-border)]", className)}
      {...props}
    />
  );
});
