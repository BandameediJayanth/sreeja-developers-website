import { cn } from "@/lib/utils";

export interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return <div aria-hidden="true" className={cn("animate-pulse rounded-md bg-white/8", className)} />;
};
