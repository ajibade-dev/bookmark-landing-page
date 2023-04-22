module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px'
    },
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 9%, 60%)',
        veryDarkBlue: 'hsl(220, 31%, 20%)',
      },
      fontFamily : {
        sans: ['Rubik', 'sans-serif'],
      },
      backgroundImage: () => ({
        dots: "url('../bookmark/images/bg-dots.svg')",
      })
    },
  },
  plugins: [],
}
