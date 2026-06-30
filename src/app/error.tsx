"use client";

import * as React from "react";

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
	React.useEffect(() => {
		console.error("Unhandled route error:", error);
	}, [error]);

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-[var(--color-background)]">
			<h1 className="font-heading text-4xl font-bold text-[var(--color-danger)] mb-4 tracking-wider">
				SOMETHING WENT WRONG
			</h1>
			<p className="font-body text-lg text-[var(--color-text-secondary)] max-w-xl mb-6">
				An unexpected error occurred. Please try reloading the page.
			</p>
			<button
				onClick={reset}
				className="px-6 py-3 rounded-md bg-[var(--color-accent)] text-[var(--color-background)] font-medium transition duration-200 hover:bg-[color-mix(in_srgb,var(--color-accent)_85%,white)]"
			>
				Try Again
			</button>
		</main>
	);
}
