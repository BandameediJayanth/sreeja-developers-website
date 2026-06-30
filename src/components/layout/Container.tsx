/**
 * @id CMP-001
 * @name Container
 * @purpose Standardize layout alignments across screen resolutions.
 * @a11y Meets WCAG AA targets.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const containerSizes: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-[600px]",
  md: "max-w-[720px]",
  lg: "max-w-[960px]",
  xl: "max-w-[1200px]",
  "2xl": "max-w-[1360px]",
  full: "max-w-none",
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { className, size = "xl", ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        containerSizes[size],
        className,
      )}
      {...props}
    />
  );
});
