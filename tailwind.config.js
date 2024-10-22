/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      padding: {
        '104': '26rem',
      },
      backgroundColor:
        {
          lightGray: '#f5f5f5',
          darkBlue: '#192733',
        },
      fontSize: {
        'normal': '14px'
      },
      width: {
        '23': '5.75rem'
      },
      height: {
        '23': '5.75rem'
      }
    }
  },
  plugins: [],
}
