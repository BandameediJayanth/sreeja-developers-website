import * as React from "react";

interface ProjectDetailsPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
	const { slug } = await params;

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
			<h1 className="font-heading text-4xl font-bold text-[var(--color-accent)] mb-4 tracking-wider uppercase">
				Project Details: {slug}
			</h1>
			<p className="font-body text-lg text-[var(--color-text-secondary)] max-w-xl">
				Explore detailed specifications, legal approvals, layout plans, and pricing for this venture.
			</p>
		</main>
	);
}
