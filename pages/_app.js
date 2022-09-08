import React from "react";
import Head from "next/head";
import GlobalStyle from "../src/globalstyle";
function MyApp({ Component, pageProps }) {
  return(<>
    <GlobalStyle />
    <Head>
      <meta
        name="viewport"
        content="initial-scale=1,width=device-width,viewport-fit=cover,maximum-scale=1.0,user-scalable=no"
      />
    </Head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap" rel="stylesheet"></link>
    <Component {...pageProps} />
  </>)
  
}
export default MyApp;
