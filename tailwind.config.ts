import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        base: '200ms',
      },
    },
  },
  plugins: [],
} satisfies Config;
