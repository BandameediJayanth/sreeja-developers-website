/**
 * @id CMP-020
 * @name Select
 * @purpose Dropdown selector component for options.
 * @a11y Meets WCAG AA targets, supports full keyboard navigation and labeling.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, label, error, id, options, ...props },
  ref,
) {
  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={id} className="block text-sm font-medium text-[var(--color-text-primary)]">
          {label}
        </label>
      ) : null}
      <div className="relative">
        <select
          ref={ref}
          id={id}
          className={cn(
            "flex h-12 w-full appearance-none rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 pr-10 text-sm text-[var(--color-text-primary)] shadow-sm transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-[var(--color-danger)]" : "",
            className,
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[var(--color-surface-base)] text-[var(--color-text-primary)]"
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-[var(--color-text-secondary)]">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {error ? (
        <p id={`${id}-error`} className="text-sm text-[var(--color-danger)]" aria-live="polite">
          {error}
        </p>
      ) : null}
    </div>
  );
});
