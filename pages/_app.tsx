import App, { AppContext, AppProps } from 'next/app';
import Header from '../components/Header';
import { cookieStringToObject } from '../lib/utlis';
import { wrapper } from '../store';
import GlobalStyle from '../styles/GlobalStyle';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
};

app.getInitialProps = async (context: AppContext) => {
  const appInitialProps = await App.getInitialProps(context);
  const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie);
  console.log('cookie object is : ', cookieObject);

  return { ...appInitialProps };
};

// store 제공
// wrapper로 App을 컴포넌트를 감싸준다.
// 브라우저의 redux 상태 동기화는 물론 Provider store 까지 알아서 주입해줌.
export default wrapper.withRedux(app);
