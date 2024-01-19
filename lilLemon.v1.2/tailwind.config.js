/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "LLyellow":"#F4CE14",
        "LLyellowAlt":"#E9C92F",
        "LLyellowSel":"#E2CA52",
        "LLGreen":"#495E57",
        "LLGreenAlt":"#70877F",
        "menuPill":"edeFee",
        "LLwhite" : "#EDEFEE"
      },
      fontFamily : {
        sans : ["Karla"],
        serif: ["Markazi Text"]
      },
      fontSize : {
        "LLH1" : "4rem",
        "LLH2" : "2.5rem",
        "LLH3" : "2.25rem",
        "LLH4" : "1.5rem",
        "LLH5" : "1.25rem",
        "LLH6" : "1.125rem",
        "LLH7" : "1rem",
        "LLH8" : "0.75rem",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

