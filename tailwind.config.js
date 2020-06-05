module.exports = {
  purge: ['./src/**/*.html'],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1220px',
      // => @media (min-width: 1220px) { ... }
    },
    letterSpacing: {
      wider: '.1em',
      widest: '.2em',
    },
    minHeight: {
      lg: '470px',
      lx: '550px',
    },
    fontFamily: {
      display: ['Raleway'],
      body: ['Roboto'],
    },
  },
  plugins: [],
  corePlugins: {
    backgroundAttachment: true,
  },
};
