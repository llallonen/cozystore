import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b8fcae",
          secondary: "#99ed90",
          accent: "#78caed",
          neutral: "#1a262d",
          "base-100": "#2d3467",
          "base-200": "#505884",
          info: "#76c5ea",
          success: "#21e4ac",
          warning: "#e7a727",
          error: "#fb6565",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
