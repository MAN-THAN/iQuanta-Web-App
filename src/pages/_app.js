import '@/styles/global.css'
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "@/store";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { extendTheme } from "@chakra-ui/react";

const queryClient = new QueryClient();

export const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    black: {
      900: "#171717",
      800: "#16222C",
      700: "#2C2C2C",
    },
    grey: {
      900: "#455564",
      800: "#636363",
      700: "#8D96A5",
      600: "#979797",
    },
   
    button: {
      900: "#171717",
    },
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
      // Declare your custom variables here
      "--custom-border-radius": "8px",
      "--custom-box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  },
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
