import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: {
          base: "var(--color-surface-base)",
          hover: "var(--color-surface-hover)",
        },
        border: "var(--color-border)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
        accent: "var(--color-accent)",
        success: "var(--color-success)",
        danger: "var(--color-danger)",
        info: "var(--color-info)",
      },
      fontFamily: {
        heading: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
