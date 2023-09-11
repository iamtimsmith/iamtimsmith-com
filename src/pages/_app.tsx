import Head from "next/head";
import global from "../../content/global/index.json";
import "../styles/style.css";

const CustomApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href={global.header.favicon} />
    </Head>
    <Component {...pageProps} />
  </>
);

export default CustomApp;
