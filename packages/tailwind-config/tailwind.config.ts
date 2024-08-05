import type { Config } from 'tailwindcss';

// packages/tailwind-config/tailwind.config.js

// We want each package to be responsible for its own content.
const sharedConfig: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      colors: {
        'brand-blue': '#2563EB', // Your primary brand color
        'brand-cyan': '#00FFFF',
        'brand-green': '#39FF14',
        'brand-gray': '#333333',
        'brand-smoke': '#F5F5F5',
      },
    },
  },
  plugins: [],
};
export default sharedConfig;