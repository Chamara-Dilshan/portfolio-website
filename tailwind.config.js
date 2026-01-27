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
          50: '#e8f2f7',
          100: '#d1e4ef',
          200: '#a3c9df',
          300: '#75aecf',
          400: '#4793bf',
          500: '#1E4F7A', // Brand primary
          600: '#193f62',
          700: '#142f49',
          800: '#0f2031',
          900: '#0a1018',
        },
        secondary: {
          50: '#e7e8e9',
          100: '#cfd1d3',
          200: '#9fa3a7',
          300: '#6f757b',
          400: '#3f474f',
          500: '#111827', // Brand secondary
          600: '#0e131f',
          700: '#0a0e17',
          800: '#070a10',
          900: '#030508',
        },
        accent: {
          50: '#e9f8fe',
          100: '#d3f1fd',
          200: '#a7e3fb',
          300: '#7bd5f9',
          400: '#4fc7f7',
          500: '#38BDF8', // Brand accent
          600: '#2d97c6',
          700: '#227195',
          800: '#164c63',
          900: '#0b2632',
        },
        neutral: {
          50: '#F8FAFC', // Brand neutral light
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Clash Display"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
