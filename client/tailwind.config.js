/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F19',
          card: '#111827',
          cardLight: '#1F2937',
          cyan: '#06B6D4',
          ice: '#38BDF8',
          blue: '#2563EB',
          red: '#EF4444',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
