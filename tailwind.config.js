/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-background': 'var(--color-background)',
        'c-text': 'var(--color-text)',
        'c-primary': 'var(--color-primary)',
        'c-secondary': 'var(--color-secondary)',
        'c-purple': 'var(--color-purple)',
        'c-open-navbar': 'var(--color-open-navbar)',
        'c-grey-rgb': 'rgb(var(--color-grey-rgb))',
        'c-grey-one': 'var(--color-grey-one)',
        'c-grey-two': 'var(--color-grey-two)',
        'c-grey-three': 'var(--color-grey-three)',
        'c-grey-four': 'var(--color-grey-four)',
        'c-grey-five': 'var(--color-grey-five)',
        'c-grey-six': 'var(--color-grey-six)',
        'c-grey-seven': 'var(--color-grey-seven)',
        'c-grey-eight': 'var(--color-grey-eight)',
        'c-grey-nine': 'var(--color-grey-nine)',
        'c-grey-ten': 'var(--color-grey-ten)',
      },
      fontFamily: {
        sans: [
          'Helvetica Neue',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

