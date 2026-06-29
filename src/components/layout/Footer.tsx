import * as React from "react";

import { cn } from "@/lib/utils";

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export const Footer = React.forwardRef<HTMLElement, FooterProps>(function Footer(
  { className, ...props },
  ref,
) {
  return (
    <footer ref={ref} className={cn("border-t border-[var(--color-border)]", className)} {...props} />
  );
});
