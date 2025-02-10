import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6366f1",
        "primary-foreground": "#ffffff",
        destructive: "#dc2626",
        "destructive-foreground": "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
