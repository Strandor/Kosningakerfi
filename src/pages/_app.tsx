import React from "react";
import { Provider } from "react-redux";
import { Layout } from "../components/layout";
import { AppState, store, StoreState } from "../redux";
import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { GlobalAlert } from "../components/";
import { connect } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Kosningakerfi</title>
      </Head>
      <GlobalAlert />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
