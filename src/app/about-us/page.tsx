import * as React from "react";

export default function AboutUsPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
			<h1 className="font-heading text-4xl font-bold text-[var(--color-accent)] mb-4 tracking-wider">
				ABOUT US
			</h1>
			<p className="font-body text-lg text-[var(--color-text-secondary)] max-w-xl">
				Learn more about Sreeja Developers and Constructions.
			</p>
		</main>
	);
}
