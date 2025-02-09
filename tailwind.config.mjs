/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        main: '#FF67A5',
        back: '#121222',
      },
      width: {
        screen: ['100vw', '100dvw'],
      },
      height: {
        screen: ['100vh', '100dvh'],
      },
      minWidth: {
        screen: ['100vw', '100dvw'],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      maxWidth: {
        screen: ['100vw', '100dvw'],
      },
      maxHeight: {
        screen: ['100vh', '100dvh'],
      },
      fontFamily: {
        sans: [
          'Route159',
          '"Noto Sans JP"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        'poiret-one': ['"Poiret One"', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        'shippori-mincho': ['"Shippori Mincho"', 'sans-serif'],
      },
      animation: {
        roll: 'roll linear infinite',
      },
      keyframes: {
        roll: {
          '0%': { translate: '100%' },
          '100%': { translate: '-100%' },
        },
      },
    },
  },
  plugins: [],
};
