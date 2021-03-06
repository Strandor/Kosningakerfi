import React from "react";
import { Provider } from "react-redux";
import { Layout } from "../components/layout";
import { store } from "../redux";
import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
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
