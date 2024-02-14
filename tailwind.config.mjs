import { screens, fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          xs: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "7.375rem",
        },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFF",
        slate: "#031110",
        amber: "#F9AA3B",
        stone: "#F5F5F5",
        red: "#D20F0F",
        black: "#000",
        warm: {
          light: "#FB8638",
          DEFAULT: "#FF6600",
          dark: "CD5200",
        },
        gray: {
          DEFAULT: "#858585",
          50: "#F7F7F7",
          100: "#EBEBEB",
          200: "#E3E3E3",
          300: "#CCCCCC",
          400: "#C8C8C8",
          500: "#ADADAD",
          600: "#858585",
          700: "#666666",
          800: "#515151",
          900: "#434343",
        },
        orange: {
          DEFAULT: "#F9A134",
          50: "#fcfaf7",
          100: "#fcf7f0",
          200: "#FEF6EB",
          300: "#FDE3C4",
          400: "#FBC888",
          500: "#FAB561",
          600: "#F9A134",
          700: "#F89012",
          800: "#DA7B07",
          900: "#9E5905",
        },
        teal: {
          DEFAULT: "#3FDDD3",
          50: "#F8FDFD",
          100: "#EEFCFB",
          200: "#CCF5F2",
          300: "#98EBE6",
          400: "#65E2D9",
          500: "#3FDDD3",
          600: "#24BCB2",
          700: "#1D9A92",
          800: "#105651",
          900: "#062221",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", ...fontFamily.sans],
      },
      screens: {
        xs: "375px",
        ...screens,
      },
    },
  },
  plugins: [],
};
