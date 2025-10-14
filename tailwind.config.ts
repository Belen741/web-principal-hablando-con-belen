import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        classroom: {
          background: '#f5f7fb',
          accent: '#1c4ed8',
          muted: '#64748b',
        },
      },
    },
  },
  plugins: [],
};

export default config;
