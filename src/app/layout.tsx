import type { Metadata } from "next";

import { AppShell } from "@/components/layout/AppShell";
import { Providers } from "@/providers/providers";
import { cinzel, outfit } from "@/lib/fonts";
import { defaultMetadata } from "@/app/metadata";

import "@/styles/main.css";
import "@/styles/variables.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${cinzel.variable} ${outfit.variable} bg-[var(--color-background)] text-[var(--color-text-primary)]`}>
				<Providers>
					<AppShell>{children}</AppShell>
				</Providers>
			</body>
		</html>
	);
}
