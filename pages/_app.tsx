import Head from 'next/head'
import type {AppProps} from 'next/app';
import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/globals.scss';
import '../styles/colors.css';

function MyApp({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <title>Moscow business academy</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
