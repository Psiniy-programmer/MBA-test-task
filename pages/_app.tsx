import type {AppProps} from 'next/app';
import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/globals.scss';
import '../styles/colors.css';

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
