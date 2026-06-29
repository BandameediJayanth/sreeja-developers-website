"use client";

import * as React from "react";

export type ThemeMode = "dark" | "light";

export interface ThemeContextValue {
	theme: ThemeMode;
	setTheme: (theme: ThemeMode) => void;
	toggleTheme: () => void;
}

const THEME_STORAGE_KEY = "sreeja-theme";

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function getPreferredTheme(): ThemeMode {
	if (typeof window === "undefined") return "dark";

	const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
	if (storedTheme === "dark" || storedTheme === "light") return storedTheme;

	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: ThemeMode) {
	if (typeof document === "undefined") return;

	document.documentElement.dataset.theme = theme;
}

export interface ThemeProviderProps {
	children: React.ReactNode;
	initialTheme?: ThemeMode;
}

export function ThemeProvider({ children, initialTheme }: ThemeProviderProps) {
	const [theme, setThemeState] = React.useState<ThemeMode>(initialTheme ?? "dark");

	React.useEffect(() => {
		const nextTheme = initialTheme ?? getPreferredTheme();
		setThemeState(nextTheme);
	}, [initialTheme]);

	React.useEffect(() => {
		applyTheme(theme);
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	}, [theme]);

	const value = React.useMemo<ThemeContextValue>(
		() => ({
			theme,
			setTheme: setThemeState,
			toggleTheme: () => setThemeState((currentTheme) => (currentTheme === "dark" ? "light" : "dark")),
		}),
		[theme],
	);

	return React.createElement(ThemeContext.Provider, { value }, children);
}

export function useTheme() {
	const context = React.useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
}
