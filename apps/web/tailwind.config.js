/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A243D', // Deep, authoritative, yet calm navy
          blue: '#1570EF', // Vibrant, modern tech blue indicating speed and action
          light: '#EFF8FF', // Soft, calming blue-tinted white for backgrounds
          coral: '#FF475A', // Softer, calming red for SOS
        }
      },
      animation: {
        'slow-ping': 'slow-ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'modal-up': 'modal-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.3s ease-out forwards',
      },
      keyframes: {
        'slow-ping': {
          '75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        'modal-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
