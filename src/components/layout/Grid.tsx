import * as React from "react";

import { cn } from "@/lib/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "sm" | "md" | "lg";
}

const colsMap: Record<NonNullable<GridProps["cols"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
  6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  12: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};

const gapMap: Record<NonNullable<GridProps["gap"]>, string> = {
  sm: "gap-3",
  md: "gap-6",
  lg: "gap-8",
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(function Grid(
  { className, cols = 12, gap = "md", ...props },
  ref,
) {
  return <div ref={ref} className={cn("grid", colsMap[cols], gapMap[gap], className)} {...props} />;
});
