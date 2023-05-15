import { createTheme } from '@nextui-org/react';

export const customTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#000',
      foreground: 'white',
      text: '#fff',
      // you can also create your own color
      // primary: '#1A9BD7',
      // primary: '#4B89E7',
      // secondary: '#EE7171 ',
      // warning: '#DABA10 ',
      // tertiary: '#A771EE ',
      // ...  more colors
    },
    space: {},
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Outfit', sans-serif;",
    },
    breakpoints: {
      xs: '650px',
      sm: '960px',
      md: '1280px',
      lg: '1600px',
      // we have to look after finish development
      // lg: '1400px',

      xl: '1720px',
    },
  },
});

// font-family: 'Outfit', sans-serif;
