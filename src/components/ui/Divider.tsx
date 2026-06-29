import { cn } from "@/lib/utils";

export interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => {
  return <hr aria-hidden="true" className={cn("border-0 border-t border-[var(--color-border)]", className)} />;
};
