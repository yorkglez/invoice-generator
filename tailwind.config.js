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
        'normal': '14px',
        'sm': '12px'
      },
      width: {
        '23': '5.75rem'
      },
      height: {
        '23': '5.75rem'
      }
    },
    screens: {
      'sm': '320px',  // Small screens
      'md': '768px',  // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra large screens
      '2xl': '1536px', // 2x Extra large screens
    }
  },
  plugins: [],
}
