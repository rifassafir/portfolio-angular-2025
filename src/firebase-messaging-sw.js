importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAbDe5oxw8JXKbtIFdNQCE2S3pGaeQggGY",
  authDomain: "saf-app-824a4.firebaseapp.com",
  projectId: "saf-app-824a4",
  storageBucket: "saf-app-824a4.firebasestorage.app",
  messagingSenderId: "768146065392",
  appId: "1:768146065392:web:d4f33730b577e77b4bff35",

});
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '../src/assets/images/idea.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
