import { Cinzel, Outfit } from "next/font/google";

export const cinzel = Cinzel({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-cinzel",
	weight: ["400", "500", "600", "700"],
});

export const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
	weight: ["300", "400", "500", "600", "700"],
});
