import * as React from "react";

import { cn } from "@/lib/utils";

export type SectionProps = React.HTMLAttributes<HTMLElement>;

export const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(
  { className, ...props },
  ref,
) {
  return <section ref={ref} className={cn("py-12 md:py-16", className)} {...props} />;
});
