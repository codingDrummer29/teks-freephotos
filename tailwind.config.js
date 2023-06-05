/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: {
        min: "640px",
        // max: "767px"
      },
      md: {
        min: "768px",
        // max: "1023px"
      },
      lg: {
        min: "1024px",
        // max: "1279px"
      },
      xl: {
        min: "1280px",
        // max: "1365px"
      },
      "1.5xl": {
        min: "1366px",
        // max: "1535px"
      },
      "2xl": { min: "1536px" },
    },
    extend: {
      colors: {
        offwhite: "#F0F0F0",
        primary: "#4B4B4B",
        border: "#C6C6C6",
        card_bg: "#D9D9D9",
        card_hr: "#E8E8E8",
      },
      height: {
        nav_minus_screen: "calc(100vh - 56px)",
        card_img: 136,
        card: 236,
      },
      minHeight: {
        nav_minus_screen: "calc(100vh - 56px)",
      },
      width: {
        card_img: 136,
        card: 169,
      },
      aspectRatio: {
        potrait: "0.7794",
      },
    },
  },
  plugins: [],
};
