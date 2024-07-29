/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      animation: {
        'spin-slow-one': 'spin 3s linear 1',
        'ping-slow-one': 'ping 3s linear 1',
        'bounce-slow-one': 'bounce 3s linear 1',
        'pulse-slow-one': 'pulse 3s linear 1',
      }
    },
  },
  plugins: [],
}