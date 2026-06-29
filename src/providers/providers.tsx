"use client";

import * as React from "react";

import { ThemeProvider } from "@/providers/theme";

export interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
