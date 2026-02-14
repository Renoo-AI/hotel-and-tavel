import type { Config } from "tailwindcss";

const config: Config = {
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
        luxury: {
          champagne: "#E5D5B0",
          anthracite: "#2E2E2E",
          offwhite: "#FAF9F6",
          gold: "#C5A059",
          muted: "#8E8E8E",
          dark: "#1A1A1A",
          cream: "#F5F2ED",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'cinematic': '0 10px 50px -10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(at 0% 0%, hsla(38, 30%, 80%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(30, 15%, 70%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(20, 10%, 60%, 1) 0, transparent 50%)',
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
};
export default config;
