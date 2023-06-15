/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind 사용할 경로 지정
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Noto Sans KR', 'Montserrat', 'sans-serif'],
        // noto: ['Noto Sans KR', 'sans-serif'],
        // mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        danger: "#e12343",
        primary: "#17a37f",
        white: "#FFF",
      },
    },
    // spacing: {
    //   sm: '8px',
    //   md: '12px',
    //   lg: '16px',
    //   xl: '24px',
    // },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
