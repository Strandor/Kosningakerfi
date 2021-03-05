import React from "react";
import { Provider } from "react-redux";
import { Layout } from "../components/layout";
import { store } from "../redux";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Kosningakerfi</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
