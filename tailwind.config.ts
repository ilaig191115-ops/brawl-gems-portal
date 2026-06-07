import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Original palette inspired by Brawl Stars vibes (not game assets)
        brawl: {
          purple: "#7b2ff7",
          violet: "#9d4edd",
          blue: "#2d9cdb",
          yellow: "#ffd23f",
          gold: "#f7b500",
          dark: "#1a1030",
          darker: "#120b22",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
