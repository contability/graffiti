import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";
import { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";

const firebaseConfig = {
  apiKey: "AIzaSyDrTqyJzq-zH1OHiudJxyZ3XL5qzWTvtNs",
  authDomain: "test-ffe9f.firebaseapp.com",
  projectId: "test-ffe9f",
  storageBucket: "test-ffe9f.appspot.com",
  messagingSenderId: "779917190273",
  appId: "1:779917190273:web:8e5d92b834b9489d1c9980",
  measurementId: "G-VGVBP0DYTE",
};

function MyApp({ Component, pageProps }: AppProps) {
  // firebase messaging은 클라이언트 측에서 동작하므로 서버 측에서 사용하려고 하면 에러가 난다. (navigator is not defined)
  // SSR과 CSR을 구분하기 위해 useEffect와 같은 클라이언트 사이드 라이프사이클 훅을 사용한다.
  useEffect(() => {
    // firebase app 초기화
    const app = initializeApp(firebaseConfig);
    // firebase messaging
    const messaging = getMessaging(app);
    const ga = getAnalytics(app);

    const requestPermission = async () => {
      console.log("권한 요청 중...");

      // web browser 알림 권한 요청. granted: 권한 허용, denied: 권한 허용 안됨
      const permission = await Notification.requestPermission();
      if (permission === "denied") {
        console.log("알림 권한 허용 안됨");
        return;
      }
      console.log("알림 권한 허용 됨");

      // getToken(), vapidKey는 firebase 프로젝트 설정에서 발급 받은 key이다.
      // return 으로 받는 token은 메시지를 발송하는 쪽에서 사용하게 된다.
      const token = await getToken(messaging, {
        vapidKey:
          "BPSev7W1HrRvNqkRNw94AgA0Iyr3gJXa5KiLBWIm-2b3CShvl_uO0kgroea8F4XyCwRedP0Rssdvendc4FwX5Qs",
      });

      if (token) console.log("token:", token);
      else console.log("can not get Token");

      // 메시지 수신 시 onMessage가 실행된다.
      onMessage(messaging, (payload) => {
        console.log("메시지가 도착했습니다.", payload);

        const { title, body } = payload.notification;
        console.log(body);

        const options = {
          body,
        };
      });
    };

    requestPermission();
  }, []);

  return (
    <>
      <Head>
        <script src="/firebase-messaging-sw.js" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
