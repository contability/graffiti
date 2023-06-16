// firebase에서 service worker로 firebase-messaging-sw.js 파일을 읽어들이기 때문에 이름 및 확장자 정확하게 해야함
// service worker에서 이렇게 import 할 수 있음.
// 중간에 버전이랑 _app에서 정의해둔 firebase 버전이랑 똑같아야 함
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js"
);

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
firebase.initializeApp(firebaseConfig);
// app messaging
const messaging = firebase.messaging();

// service work가 install되면 동작
self.addEventListener("install", function (e) {
  console.log("fcm sw install..");
  self.skipWaiting();
});

//
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
  // event.waitUntil() 메서드는 이벤트 디스패처에 작업이 진행 중임을 알린다.  또한 해당 작업이 성공했는지 여부를 감지하는 데에도 사용할 수 있다. 서비스 워커에서 waitUntil()은 브라우저에 약속이 확정될 때까지 작업이 진행 중임을 알리고, 해당 작업이 완료되기를 원하는 경우 서비스 워커를 종료하지 않아야 한다.
  // ServiceWorkerRegistration: showNotification() method: ServiceWorkerRegistration 인터페이스의 showNotification() 메서드는 활성 서비스 워커에 대한 알림을 생성한다.
  event.waitUntil(self.registration.showNotification(title, options));
});

// 띄운 알림창을 클릭했을 때 처리할 내용
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
});

// 백그라운드 상태일 때 받은 푸시 데이터를 처리해 알림으로 띄우는 내용
messaging.onBackgroundMessage((payload) => {
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
