import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const OnBordingLayout = ({ children }) => {
  const theme = extendTheme({
    colors: {
      brand: {
        900: "#5146D6",
        800: "#F4F3FE",
      },
      white: {
        900: "#FFFFFF",
        800: "#FFFFF0",
      },
      black: {
        900: "#171717",
        800: "#16222C",
        700: "#2C2C2C",
      },
      grey: {
        930: "#757575",
        900: "#455564",
        800: "#636363",
        700: "#8D96A5",
        600: "#979797",
      },

      button: {
        900: "#171717",
      },
    },
    fontSize: {
      sm: "16px",
      md: "18px",
    },
    breakpoints: {
      base: "0em",
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "80em",
      "2xl": "96em",
    },
    styles: {
      global: {
        "--custom-border-radius": "8px",
        "--custom-box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Box overflow="hidden">{children}</Box>
    </ChakraProvider>
  );
};

export default OnBordingLayout;
