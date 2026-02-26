import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#b9e2b9',
          300: '#8ccc8c',
          400: '#5cb05c',
          500: '#3d923d',
          600: '#2d7a2d',
          700: '#236023',
          800: '#1d4d1d',
          900: '#173d17',
        },
        earth: {
          50: '#fdf8f0',
          100: '#faebd7',
          200: '#f5d5aa',
          300: '#edb974',
          400: '#e09944',
          500: '#d4801f',
          600: '#b86518',
          700: '#924e16',
          800: '#773f17',
          900: '#613417',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
