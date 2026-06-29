export interface SpinnerProps {
  label?: string;
}

export const Spinner = ({ label = "Loading" }: SpinnerProps) => {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)]" aria-live="polite">
      <span
        className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]"
        aria-hidden="true"
      />
      <span>{label}</span>
    </span>
  );
};
