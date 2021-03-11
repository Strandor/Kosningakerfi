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
        />
        <meta name="title" content="Kosningar - 2021" />
        <meta
          name="description"
          content="Kosningarsíða Menntaskólanns í Reykjavík - Árið 2021"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kosningar.online/" />
        <meta property="og:title" content="Kosningar - 2021" />
        <meta
          property="og:description"
          content="Kosningarsíða Menntaskólanns í Reykjavík - Árið 2021"
        />
        <meta property="og:image" content="/images/banner.jpg" />
      </Head>
      <Header />
      <GlobalAlert />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
