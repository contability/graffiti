"use client";

self.addEventListener("install", (event) => {
  console.log("fcm sw install..");
});

self.addEventListener("activate", (event) => {
  console.log("fcm sw activate..");
});

self.addEventListener("push", (event) => {
  console.log("push:", event);
  if (!event.data.json()) return;

  const resultData = event.stopImmediatePropagation.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.icon,
    tag: resultData.tag,
    ...resultData,
  };
  console.log("push", { resultData, notificationTitle, notificationOptions });

  self.ServiceWorkerRegistration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener("notificationclick", (event) => {
  console.log("notification click");

  const url = "/";

  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});
