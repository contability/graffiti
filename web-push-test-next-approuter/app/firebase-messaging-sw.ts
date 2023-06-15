"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/** 웹 사용자 인증 정보 구성 */
const firebaseConfig = {
  apiKey: "AIzaSyCgwAZP98hJb2btKgDlWiY0WgDXyJo8Rdg",
  authDomain: "web-push-test-1e141.firebaseapp.com",
  projectId: "web-push-test-1e141",
  storageBucket: "web-push-test-1e141.appspot.com",
  messagingSenderId: "503859170852",
  appId: "1:503859170852:web:470d4802aedb3b066a92b1",
  measurementId: "G-0HGWN5RBQ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const ga = getAnalytics(app);

const requestPermission = async () => {
  console.log("권한 요청 중...");

  const permission = await Notification.requestPermission();
  if (permission === "denied") {
    console.log("알림 권한 허용 안됨");
    return;
  }

  console.log("알림 권한 허용 됨");

  const token = await getToken(messaging, {
    vapidKey:
      "BM28m2BRj3SRkGiF5MGNmIAANxX-n6Q9PokxLHAE-SaNIal7prtZ7CUhu-hR1ZsxFTZVE4GRYuTyW13yzAYM7vk",
  });

  if (token) console.log("token:", token);
  else console.log("can not get Tokne");

  onMessage(messaging, (payload) => {
    console.log("메시지가 도착했습니다.", payload);
  });
};

requestPermission();
