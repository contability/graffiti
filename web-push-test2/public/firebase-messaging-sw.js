// firebase에서 service worker로 firebase-messaging-sw.js 파일을 읽어들이기 때문에 이름 및 확장자 정확하게 해야함
import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging";

const firebaseConfig = {
  // Firebase 구성 정보
  apiKey: "AIzaSyDrTqyJzq-zH1OHiudJxyZ3XL5qzWTvtNs",
  authDomain: "test-ffe9f.firebaseapp.com",
  projectId: "test-ffe9f",
  storageBucket: "test-ffe9f.appspot.com",
  messagingSenderId: "779917190273",
  appId: "1:779917190273:web:8e5d92b834b9489d1c9980",
  measurementId: "G-VGVBP0DYTE",
};

// app 초기화
const app = initializeApp(firebaseConfig);
// app messaging
const messaging = getMessaging(app);

// service work가 install되면 동작
self.addEventListener("install", function (e) {
  console.log("fcm sw install..");
  self.skipWaiting();
});

// service worker로 활성화 되면 동작
self.addEventListener("activate", function (e) {
  console.log("fcm sw activate..");
});

// 포그라운드 상태일 때 받은 푸시 데이터를 처리해 알림으로 띄우는 내용
self.addEventListener("push", (event) => {
  const payload = event.data.json();
  const { title, body, icon } = payload.notification;
  const options = {
    body,
    icon: icon ? icon : "push event",
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// 띄운 알림창을 클릭했을 때 처리할 내용
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const { title, body, icon } = event.notification;
  console.log("title:", title);
  console.log("body:", body);
  console.log("icon:", icon);
});

// 백그라운드 상태일 때 받은 푸시 데이터를 처리해 알림으로 띄우는 내용
onBackgroundMessage(messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const { title, body, icon } = payload.notification;
  // Customize notification here
  const notificationOptions = {
    body: body,
    icon: icon ? icon : "/firebase-logo.png",
  };

  self.registration.showNotification(title, notificationOptions);
});
