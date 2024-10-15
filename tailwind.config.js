/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        DeepRed: '#ff0004',
        DeepBlue: '#3f28f2',
        White: '#ffffff',
        Black: '#000000'
      },
      fontSize: {
        sm: '1.25rem',
        base: '2rem',
        lg: '3rem',
        xl: '6rem',
        '2xl': '8rem'
      },
      fontFamily: {
        calistoga: 'Calistoga'
      },
      borderRadius: {
        'rounded-0': '0rem',
        'rounded-1': '0.15625rem',
        'rounded-2': '0.3125rem',
        'rounded-3': '0.46875rem',
        'rounded-4': '0.625rem',
        'rounded-5': '0.78125rem',
        'rounded-6': '0.9375rem',
        'rounded-7': '1.41357421875rem',
        'rounded-8': '1.5625rem',
        'rounded-9': '2.54443359375rem',
        'rounded-10': '31.21875rem'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
