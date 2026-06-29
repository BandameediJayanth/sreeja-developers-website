"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type NavbarProps = React.HTMLAttributes<HTMLElement>;

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(function Navbar(
  { className, ...props },
  ref,
) {
  return (
    <header
      ref={ref}
      className={cn(
        "sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_88%,transparent)] backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
});
