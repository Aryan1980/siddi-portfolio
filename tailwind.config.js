/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070707',
        surface: '#0f0f0f',
        'surface-hover': '#171717',
        border: '#1f1f1f',
        'border-light': '#2c2c2c',
        muted: '#8e8e93',
        'muted-dark': '#48484a',
        accent: '#e5e5e5',
      },
      fontFamily: {
        sans: ['"OCR-A"', '"OCR A Extended"', '"OCRA"', 'monospace'],
        mono: ['"OCR-A"', '"OCR A Extended"', '"OCRA"', 'monospace'],
        display: ['"OCR-A"', '"OCR A Extended"', '"OCRA"', 'monospace'],
        ocra: ['"OCR-A"', '"OCR A Extended"', '"OCRA"', 'monospace'],
      },
      letterSpacing: {
        'cinema': '0.2em',
        'tighter-condensed': '-0.04em',
      },
      aspectRatio: {
        'cinema': '16 / 9',
        'ultrawide': '2.39 / 1',
      },
    },
  },
  plugins: [],
}
