import { space } from 'postcss/lib/list';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
      },
      spacing : {
        '-3px' : '-10px'
      },
      translate : {
        '-50%' : '-50%'
      },
      dropShadow : {
        blueShadow : "0 5px 8px rgb(52, 97, 235)",
        whiteshadow : "0 5px 8px rgb(255, 255, 255)",
        lightBlue : "0px 0px 1px rgb(52, 97, 235)",

      },
      fontFamily : {
        inder : ["Inder", 'sans-serif'],
        inknut_antiqua : ["Inknut Antiqua", "serif"],
        poppins : ["Poppins", "sans-serif"],
        readex_pro : ["Readex Pro", "sans-serif"],
        inter:["Inter", "sans-serif"]

      },
      boxShadow : {
        lightR : ["1px 1px 1px 1px rgba(0,0,0,0.75)"],
        lightL : ["-1px 1px 1px 1px rgba(0,0,0,0.75)"],
        whiteshadow : "0 0 3px 0 rgb(255, 255, 255)"
      },
      animation :  {
        upToDown : "upToDown 1s ease forwards  ",
        leftToRight : "ltr 1s ease"
      },
      keyframes : {
        upToDown : {
          '0%' : {transform : 'translateY(-25%)',opacity : '0'},
          '100%' : {transform : 'translateY(0%)',opacity : '1 '}
        }
      }
      
    },
  },
  plugins: [],
}