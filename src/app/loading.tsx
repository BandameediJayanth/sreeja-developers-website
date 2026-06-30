import * as React from "react";

export default function Loading() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-8 bg-[var(--color-background)]">
			<div className="w-12 h-12 border-4 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin mb-4" />
			<p className="font-body text-lg text-[var(--color-text-secondary)]">Loading...</p>
		</main>
	);
}
