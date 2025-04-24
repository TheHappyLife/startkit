import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#60D591", // example | use: text-primary, border-primary, bg-primary...
        },
        secondary: {
          DEFAULT: "#01FFFF", // example | use: text-secondary, border-secondary, bg-secondary...
        },
        ui: {
          text: {
            white: "#fff",
            increase: "#60D591",
            B1B1B1: "#B1B1B1",
          },
          border: {
            "white-16": "rgba(255, 255, 255, 0.16)",
            "white-24": "rgba(255, 255, 255, 0.24)",
          },
          background: {
            white: "#fff",
            "white-24": "rgba(255, 255, 255, 0.24)",
            "white-16": "rgba(255, 255, 255, 0.16)",
            "black-24": "rgba(0, 0, 0, 0.24)",
            222: "#222",
          },
        },
      },
      fontSize: {
        "10": "0.625rem",
        "11": "0.6875rem",
        "12": "0.75rem",
        "13": "0,8125rem",
        "14": "0.875rem",
        "16": "1rem",
        "17": "1.0625rem",
        "18": "1.125rem",
        "19": "1.1875rem",
        "20": "1.25rem",
        "24": "1.5rem",
        "32": "2rem",
      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      lineHeight: {
        100: "100%",
        120: "120%",
        140: "140%",
        150: "150%",
        160: "160%",
      },
      fontFamily: {
        primary: ["SF Pro Display", "sans-serif"], // example | use: font-primary
        secondary: ["Clash Display", "sans-serif"], // example | use: font-secondary
      },
      borderRadius: {
        12: "0.75rem",
        16: "1rem",
        24: "1.5rem",
      },
      padding: {
        "bottom-page": "3rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".border-primary-solid": { border: "1px solid #f00" }, // Red | use: border-primary-solid
        ".border-secondary-solid": { border: "1px solid #0f0" }, // Green | use: border-secondary-solid
        ".border-tertiary-solid": { border: "1px solid #00f" }, // Blue | use: border-tertiary-solid
      });
    },
  ],
} satisfies Config;
