import * as React from "react";

import { cn } from "@/lib/utils";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(function Paragraph(
  { className, ...props },
  ref,
) {
  return <p ref={ref} className={cn("leading-7 text-[var(--color-text-secondary)]", className)} {...props} />;
});
