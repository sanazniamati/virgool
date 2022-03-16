// styles
import "../styles/globals.css";

// library
import Head from "next/head";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>جایی برای نوشتن</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon " href="/favicon.png" />
        <meta
          name="description"
          content="در ویرگول همه می‌تونن بنویسن. ویرگول یک شبکه اجتماعی برای خواندن و نوشتن متن و محتوای فارسی است"
        ></meta>
      </Head>
    </>
  );
}

export default MyApp;
