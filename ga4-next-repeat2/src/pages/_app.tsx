import Head from 'next/head';
import * as gtag from '../../lib/gtag';
import { AppProps } from 'next/app';
import '../../styles/tailwind.css';
import Script from 'next/script';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* 추적 코드 삽입 */}
        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
