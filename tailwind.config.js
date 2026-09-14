/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#0F1115',
          subtle: '#F8F9FA',
          border: '#E5E7EB',
          textMuted: '#4B5563',
        },
      },
    },
  },
  plugins: [],
}