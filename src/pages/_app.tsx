import type { AppProps } from "next/app";
import { MainContainer, globalStyles } from "../styles/global";
import Navbar from "../components/navbar";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

globalStyles();

export const metadata = {
  title: "Portfolio | Diego Baena",
  description: "Software Developer",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>{metadata.title}</title>
        </Head>
        <MainContainer>
          <Navbar />
          <Component {...pageProps} />
        </MainContainer>
      </ChakraProvider>
    </>
  );
}
