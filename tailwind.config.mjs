
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2CCB99',
        secondary: '#01100C',
        'greenish-gray': '#2E3937',
         greenish: 'rgb(1, 16, 12)',
      },
      fontFamily: {
        primary: ['"Bebas Neue"', 'sans-serif'],
        secondary: ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        '5xl-1': '50px',
        '8xl-1': '110px',
      },
       borderRadius: {
        xs: '0.125rem',
      },
       zIndex: {
        35: '35', 
      },
    },
  },
  plugins: [],
}

