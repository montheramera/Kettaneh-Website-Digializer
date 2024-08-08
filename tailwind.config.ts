import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#BB4A52",
      white: "#FFFFFF",
      heading: "#101828",
      paragraph: "#475467",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
        inter: ["Inter", "sans-serif"], // Optional: if you want to use it with Tailwind classes
      },
    },
    variants: {
      extend: {
        borderOpacity: ['responsive', 'hover', 'focus'],
      },
    },
  },
  plugins: [],
};
export default config;
