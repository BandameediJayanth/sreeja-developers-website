import * as React from "react";
import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-[var(--color-background)]">
			<h1 className="font-heading text-4xl md:text-6xl font-bold text-[var(--color-accent)] mb-4 tracking-wider">
				404 - PAGE NOT FOUND
			</h1>
			<p className="font-body text-lg text-[var(--color-text-secondary)] max-w-xl mb-6">
				The page you are looking for does not exist or has been moved.
			</p>
			<Link
				href="/"
				className="px-6 py-3 rounded-md bg-[var(--color-accent)] text-[var(--color-background)] font-medium transition duration-200 hover:bg-[color-mix(in_srgb,var(--color-accent)_85%,white)]"
			>
				Back to Home
			</Link>
		</main>
	);
}
