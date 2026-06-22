import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(109, 53, 27)",
        "primary-light": "rgb(235, 215, 203)",
        secondary: "rgb(181, 211, 63)",
        "secondary-dark": "rgb(1, 135, 134)",
        accent: "rgb(236, 241, 247)",
        surface: "rgb(255, 255, 255)",
      },
      fontFamily: {
        harmonia: ["HarmoniaSans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "390px",
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
