import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear-white":
          "linear-gradient(90deg, transparent, rgba(255 255 255/0.25), transparent,transparent)",
        "gradient-linear-black":
          "linear-gradient(90deg, transparent, rgba(0 0 0/0.2), transparent,transparent)",
      },
      colors: {
        "green-open": "#93f859",
      },
    },
  },
  plugins: [],
};
export default config;
