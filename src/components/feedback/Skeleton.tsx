/**
 * @id CMP-033
 * @name Skeleton
 * @purpose Placeholder loader block for content loading.
 * @a11y Marked aria-hidden="true".
 */

import { cn } from "@/lib/utils";

export interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-md bg-[var(--color-surface-hover)]", className)}
    />
  );
};
