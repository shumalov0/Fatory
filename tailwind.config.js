/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            "whiteColor":"#F0F0F0",
            "blackColor":'#2A2A2A',
            "grayColor": '#D8D8D880'
        
        },
        fontFamily:{
          'int':["Inter"]
        }

    },
  },
  plugins: [],
}

