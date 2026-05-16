/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './**/*.html', '!./node_modules/**'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Rubik', 'system-ui', 'sans-serif'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2563EB',
        'primary-dark': '#1D4ED8',
        secondary: '#3B82F6',
        accent: '#059669',
        'accent-dark': '#047857',
        surface: '#F8FAFC',
        muted: '#F1F5FD',
        border: '#E4ECFC',
        foreground: '#0F172A',
      },
    },
  },
  plugins: [],
};
