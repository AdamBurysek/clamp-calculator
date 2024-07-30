/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'content': '1120px',
      },
      height: {
        'navbar': '64px',
      },
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
      fontSize: {
        'heading1': 'clamp(1.375rem, 1.0713rem + 1.5186vw, 2.438rem)',
        'heading2': 'clamp(1.25rem, 1.0534rem + 0.9829vw, 1.938rem)',
        'heading3': 'clamp(1.188rem, 1.0811rem + 0.5343vw, 1.562rem)',
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
      transitionProperty: {
        'max-height': 'max-height',
      }
    },
  },
  plugins: [],
}

