// /pages/_app.tsx

import Head from 'next/head';
import * as gtag from '../../lib/gtag';
import { AppProps } from 'next/app';
import '../../styles/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* 추적 코드 삽입 */}
        <script
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
      <Component {...pageProps} />
    </>
  );
};

export default App;
