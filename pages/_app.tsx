import App, { AppContext, AppProps } from 'next/app';

const app = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

app.getInitialProps = async (context: AppContext) => {
  return await App.getInitialProps(context);
};

export default app;
