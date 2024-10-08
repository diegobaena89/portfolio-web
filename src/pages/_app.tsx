import type { AppProps } from "next/app";
import { MainContainer, globalStyles } from "../styles/global";
import Navbar from "../components/navbar";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { PortfolioProvider } from "../context/PortfolioContext";

globalStyles();

export const metadata = {
  title: "Portfolio | Diego Baena",
  description: "Software Developer",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <PortfolioProvider>
          <Head>
            <title>{metadata.title}</title>
          </Head>
          <MainContainer>
            <Navbar />
            <Component {...pageProps} />
          </MainContainer>
        </PortfolioProvider>
      </ChakraProvider>
    </>
  );
}
