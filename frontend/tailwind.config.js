const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
        'brand-blue':'#eaecf0'
      },
      margin: {
        '36': '3.6rem',
       }
    }
    
  },
 
}
