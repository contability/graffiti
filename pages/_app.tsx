import { AppProps } from 'next/app';
import 'styles/global.css';

const app = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default app;
