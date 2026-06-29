import * as React from "react";

export interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  return <div className="min-h-dvh bg-[var(--color-background)] text-[var(--color-text-primary)]">{children}</div>;
};
