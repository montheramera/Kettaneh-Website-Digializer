import type { Config } from "tailwindcss";
const colorClasses = [
  "#BB4A52",
  "#B2DDFF",
  "#5389B9",
  "#F9DBAF",
  "#E7C460",
  "#6ba18f",
  "#CA3F4F",
  "#66cadb",
  "#408abd",
  "#f58a65",
  "#70c7af",
  "#000000",
];
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [...colorClasses.map((color) => `bg-[${color}]`)],
  theme: {
    colors: {
      primary: "#BB4A52",
      white: "#FFFFFF",
      heading: "#101828",
      paragraph: "#475467",
      skeleton: "#999999",
    },
    extend: {
      borderOpacity: {
        "10": "0.1",
        "20": "0.2",
        "30": "0.3",
        "40": "0.4",
        "50": "0.5",
        "60": "0.6",
        "70": "0.7",
        "80": "0.8",
        "90": "0.9",
      },
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
        inter: ["Inter", "sans-serif"], // Optional: if you want to use it with Tailwind classes
      },
      keyframes: {
        fadeInStep: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        widthExpand: {
          "0%": { maxWidth: "100px" },
          "100%": { maxWidth: "850px" },
        },
        // Banner animations
        "banner-fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "banner-overlay-fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "0.6",
          },
        },
        "banner-shimmer": {
          "0%": {
            transform: "translateX(-100%) skewX(-12deg)",
          },
          "100%": {
            transform: "translateX(200%) skewX(-12deg)",
          },
        },
        "floating-gentle": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
        "subtle-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.01)",
          },
        },
        // Terms section animations
        "slide-in-right": {
          from: {
            opacity: "0",
            transform: "translateX(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "float-and-glow": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "25%": {
            transform: "translateY(-8px) rotate(2deg)",
          },
          "50%": {
            transform: "translateY(-5px) rotate(0deg)",
          },
          "75%": {
            transform: "translateY(-8px) rotate(-2deg)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.2",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.1)",
          },
        },
        "highlight-text": {
          "0%": {
            backgroundPosition: "-100% 0",
          },
          "100%": {
            backgroundPosition: "100% 0",
          },
        },
        "pulse-dot": {
          "0%, 100%": {
            opacity: "0.7",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
          },
        },
        "highlight-final": {
          "0%, 50%": {
            backgroundColor: "transparent",
          },
          "100%": {
            backgroundColor: "rgba(252, 211, 77, 0.1)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },
      animation: {
        fadeInStep: "fadeInStep 0s ease-in-out",
        widthExpand: "widthExpand 5s ease-in-out",
        // Banner animations
        "fade-in": "banner-fade-in 1.2s ease-out forwards",
        "overlay-fade-in": "banner-overlay-fade-in 2s ease-out 0.8s forwards",
        shimmer: "banner-shimmer 4s ease-in-out infinite",
        "floating-gentle": "floating-gentle 4s ease-in-out infinite",
        "subtle-pulse": "subtle-pulse 6s ease-in-out infinite",
        // Terms section animations
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        "float-and-glow": "float-and-glow 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "highlight-final": "highlight-final 1s ease-in-out forwards",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
    variants: {
      extend: {
        borderOpacity: ["responsive", "hover", "focus"],
      },
    },
  },
  plugins: [],
};
export default config;
