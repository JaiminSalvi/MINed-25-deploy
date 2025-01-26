import "../styles/globals.css";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import NextNProgress from "nextjs-progressbar";
import { Box } from "@chakra-ui/react";
import CountDownTimer from "../components/Timer";

const theme = extendTheme({
  colors: {
    brand: {
      50: '#ffffff',
      900: '#1a202c', // Dark background color
    },
  },
  // config: {
  //   initialColorMode: 'dark',
  // },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});
// export default theme;
export default function App({ Component, pageProps }) {
  const dateTimeForHackathon = new Date("02/29/2024 09:00:00").getTime();

  return (
    <ChakraProvider theme={theme}>
      <NextNProgress />
      <Fonts />
      <Box bg="#000" color="white" minHeight="100vh"> 
      {/* <Text align="center" py="4" bgColor="blue.200">
        <b>Hackathon ended!! Go to events page to see the winner's list</b>
      </Text> */}
      <Component {...pageProps} />
     {/*  <CountDownTimer targetDate={dateTimeForHackathon} /> */}
      </Box>
    </ChakraProvider>
  );
}
