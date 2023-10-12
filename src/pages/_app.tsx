import type { AppProps } from "next/app";
import { MainContainer, globalStyles } from "../styles/global";
import Navbar from "../components/navbar";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainContainer>
        <Navbar />
        <Component {...pageProps} />
      </MainContainer>
    </>
  );
}
