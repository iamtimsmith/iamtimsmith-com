import Head from "next/head";
import Script from "next/script";
import global from "../../content/global/index.json";
import "../styles/style.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const CustomApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href={global.header.favicon} />
    </Head>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
    </Script>
    <Component {...pageProps} />
  </>
);

export default CustomApp;
