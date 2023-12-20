import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/store";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/react";
import { TbRuler2 } from "react-icons/tb";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, 
      cacheTime: 900000, // 15 minutes before cache is emptied
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      notifyOnChangeProps: "tracked",
      // retry: false,
      // onError: queryErrorHandler,
    },
  },
});

const theme = extendTheme({
  colors: {
    brand: {
      900: "#5146D6",
      800: "#F4F3FE",
      700: "#FFFFFF",
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
    sm: "20em",
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

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <SessionProvider session={pageProps.session}>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </SessionProvider>
        </PersistGate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}
