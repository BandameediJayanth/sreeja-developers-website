import * as React from "react";

import { cn } from "@/lib/utils";

export interface FloatingWhatsAppButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  phoneNumber: string;
}

export const FloatingWhatsAppButton = React.forwardRef<HTMLAnchorElement, FloatingWhatsAppButtonProps>(
  function FloatingWhatsAppButton({ phoneNumber, className, ...props }, ref) {
    const href = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;

    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact sales on WhatsApp"
        className={cn(
          "inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-background)] shadow-lg transition duration-200 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]",
          className,
        )}
        {...props}
      >
        <span aria-hidden="true">WA</span>
      </a>
    );
  },
);
