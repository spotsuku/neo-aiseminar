/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f6f9fc',
          soft: '#eef3f9',
          card: '#ffffff',
        },
        ink: {
          DEFAULT: '#0b1c3a',
          soft: '#142a4d',
          mute: '#1f3e6a',
        },
        text: {
          primary: '#0b1c3a',
          secondary: '#475a78',
          muted: '#8896ad',
          onink: '#f6f9fc',
          'onink-mute': '#93a7c4',
        },
        // Kept under the historical "vermilion" name so existing
        // accent references read the same; actual value is a blue.
        vermilion: {
          DEFAULT: '#1d8fd1',
          dark: '#146aa0',
        },
        bluebright: '#4fb3e6',
        bluepale: '#e3f1fb',
        gold: '#ffb547',
      },
      fontFamily: {
        jp: ['"Noto Sans JP"', '"Hiragino Sans"', '"Yu Gothic"', 'sans-serif'],
        mincho: ['"Shippori Mincho B1"', '"Yu Mincho"', '"Hiragino Mincho ProN"', 'serif'],
        en: ['Inter', 'system-ui', 'sans-serif'],
        'en-serif': ['"Cormorant Garamond"', '"Shippori Mincho B1"', 'serif'],
      },
      maxWidth: {
        wrap: '1180px',
      },
    },
  },
  plugins: [],
};
