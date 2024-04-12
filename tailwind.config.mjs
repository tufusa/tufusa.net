/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        main: '#FF67A5',
        back: '#121222',
      },
      height: {
        screen: [
          '100vh', '100dvh'
        ]
      },
      minHeight: {
        screen: [
          '100vh', '100dvh'
        ]
      },
      maxHeight: {
        screen: [
          '100vh', '100dvh'
        ]
      },
      fontFamily: {
        sans: [
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
      },
    },
  },
  plugins: [],
};
