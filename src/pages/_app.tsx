import type { AppProps } from "next/app";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/style.css";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <Container>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </Container>
);

export default CustomApp;
