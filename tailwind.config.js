/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003087',
          dark: '#001f5c',
          light: '#0044b8',
        },
        accent: {
          DEFAULT: '#e8a000',
          dark: '#c47f00',
          light: '#ffb800',
        },
        neutral: {
          dark: '#1a1a2e',
          mid: '#2d3748',
          light: '#f7f8fc',
        }
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
