import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Zuno Brand Colors
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',  // PRIMARY ACCENT
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        brand: {
          bg: '#F4F9F9',
          card: '#FFFFFF',
          border: '#C5E0DE',
          text: '#1A1A2E',
          muted: '#AAAACC',
          'muted-dark': '#8888AA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'button': '14px',
        'chip': '20px',
        'phone': '44px',
      },
      boxShadow: {
        'card': '0 2px 16px rgba(13, 148, 136, 0.08)',
        'card-hover': '0 8px 32px rgba(13, 148, 136, 0.12)',
        'nav': '0 -4px 20px rgba(13, 148, 136, 0.08)',
        'float': '0 8px 32px rgba(13, 148, 136, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
