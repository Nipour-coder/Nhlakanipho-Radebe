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
        // Cyberpunk / embedded hardware palette
        charcoal: "#0B0F19",
        "charcoal-soft": "#101626",
        neon: {
          DEFAULT: "#00F0FF",
          soft: "#22D3EE",
          deep: "#0891B2",
        },
        emerald: {
          DEFAULT: "#10B981",
          deep: "#059669",
        },
        ink: "#E5E7EB",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: [
          "var(--font-jetbrains)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,240,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.07) 1px, transparent 1px)",
        "circuit-pattern":
          "radial-gradient(circle at 20% 20%, rgba(0,240,255,0.08), transparent 40%), radial-gradient(circle at 80% 30%, rgba(16,185,129,0.08), transparent 45%)",
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(0,240,255,0.35), 0 0 24px rgba(0,240,255,0.18)",
        "neon-emerald":
          "0 0 0 1px rgba(16,185,129,0.35), 0 0 24px rgba(16,185,129,0.18)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "blink": "blink 1.1s steps(2, start) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
