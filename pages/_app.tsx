import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../components/HTMLRenderer/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
