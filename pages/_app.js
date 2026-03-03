import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TumiLabs | Solana Venture Studio</title>
        <meta name="description" content="TumiLabs is a Solana-focused venture studio building the next generation of Web3 products. Smart contracts, dApps, DeFi, and AI-powered solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
