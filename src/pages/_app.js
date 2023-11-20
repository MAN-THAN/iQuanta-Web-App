import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'



const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  black: {
    900: "#171717",
    800: "#16222C",
    700: "#2C2C2C"
  },
  grey: {
    900: "#455564",
    800: "#636363",
    700: "#8D96A5",
    600: "#979797",
  },
  background: {
    600: '#F1F2F3',
    500: "#F1F2F6",
    400: "#FFFFFF"
  },
  button: {
    900: '#171717',
  }
}




const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

export const theme = extendTheme({ colors, breakpoints });

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}