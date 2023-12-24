module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    // Add any other files you want to include for purging unused CSS classes
  ],
  // Set to 'media' or 'class' if you want dark mode to be controlled by CSS or class attributes
  theme: {
    extend: {
      // Extend or override the default theme here
      // Example: You can add custom colors, fonts, or breakpoints
      screens: {
        'xsm':'500px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px',
        '3xl': '1500px',
        '4xl': '1600px',
        '5xl': '1700px',
      },
      colors: {
        'primary': '#FF5733',
        'nav':'#F2A53E'
      },
      fontFamily: {
        'custom': ['CustomFont', 'sans','Roboto'],
      },
      borderWidth:{
        '1':'1px',
        'n':'2px'
      },
      width:{
        '1':'4px',
        'n':'2px'
      },
      height:{
        'n':'1px',
        'hmax':'31rem'
      }
    },
  },
  variants: {
    extend: {
      // Add or modify variants for existing utility classes
      // Example: Add a hover variant for the 'bg' utility
      backgroundColor: ['hover'],
    },
  }
}
