import * as React from "react";

export default function GalleryPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
			<h1 className="font-heading text-4xl font-bold text-[var(--color-accent)] mb-4 tracking-wider">
				PROJECT GALLERY
			</h1>
			<p className="font-body text-lg text-[var(--color-text-secondary)] max-w-xl">
				Explore layout development views and site maps.
			</p>
		</main>
	);
}
