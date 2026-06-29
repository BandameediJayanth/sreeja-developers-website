import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sreejadevelopers.com";

export const defaultMetadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Sreeja Developers and Constructions",
		template: "%s | Sreeja Developers and Constructions",
	},
	description:
		"Premium highway-facing residential and commercial land developments by Sreeja Developers and Constructions.",
	applicationName: "Sreeja Developers and Constructions",
	openGraph: {
		type: "website",
		siteName: "Sreeja Developers and Constructions",
		url: siteUrl,
		title: "Sreeja Developers and Constructions",
		description:
			"Premium highway-facing residential and commercial land developments by Sreeja Developers and Constructions.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sreeja Developers and Constructions",
		description:
			"Premium highway-facing residential and commercial land developments by Sreeja Developers and Constructions.",
	},
};

export function createPageMetadata(title: string, description?: string): Metadata {
	return {
		title,
		description: description ?? defaultMetadata.description,
	};
}
