import App, { AppContext, AppProps } from 'next/app';
import Header from '../components/Header';
import axios from '../lib/api';
import { meAPI } from '../lib/api/auth';
import { cookieStringToObject } from '../lib/utlis';
import { wrapper } from '../store';
import { userActions } from '../store/user';
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

// store 제공
// wrapper로 App을 컴포넌트를 감싸준다.
// 브라우저의 redux 상태 동기화는 물론 Provider store 까지 알아서 주입해줌.
export default wrapper.withRedux(app);

app.getInitialProps = async (context: AppContext) => {
  const appInitialProps = await App.getInitialProps(context);
  console.log(Object.keys(context)); // ctx, Component, ...

  const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie);
  console.log('cookie object is : ', cookieObject);

  const { store } = context.ctx; // ctx는 프론트 서버가 실행 하면서 next가 context를 전달해 줌
  const { isLogged } = store.getState().user; // redux의 store에서 state를 getState를 통해 꺼내온다

  try {
    if (isLogged && cookieObject.access_token) {
      // access_token 값을 api 요청 헤더에 함께 보내기 위해 axios 헤더 쿠키에 access_token 값 저장
      axios.defaults.headers.cookie = cookieObject.access_token;
      const { data } = await meAPI();

      console.log('data log at app componenets : ', data);
      store.dispatch(userActions.setLoggedUser({ ...data, isLogged }));
    }
  } catch (error) {
    console.error(error);
  }

  return { ...appInitialProps };
};
