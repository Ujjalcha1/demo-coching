import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "Manrope", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        navy: "#071A3D",
        royal: "#1D4ED8",
        cyanSoft: "#A7F3FF",
        sunshine: "#FBBF24",
        ember: "#F97316"
      },
      boxShadow: {
        glow: "0 0 60px rgba(29, 78, 216, 0.22)",
        gold: "0 16px 48px rgba(251, 191, 36, 0.22)"
      },
      backgroundImage: {
        "academic-grid":
          "linear-gradient(rgba(29,78,216,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: [animate]
};

export default config;
