import React from "react";
import { Provider } from "react-redux";
import { Layout } from "../components/layout";
import { AppState, store, StoreState } from "../redux";
import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { GlobalAlert, Header } from "../components/";
import { connect } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Kosningar</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <Header />
      <GlobalAlert />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
