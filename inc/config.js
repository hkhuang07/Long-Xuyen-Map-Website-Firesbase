import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "<MY-API-KEY>",
  authDomain: "angiang-map.firebaseapp.com",
  projectId: "angiang-map",
  storageBucket: "angiang-map.firebasestorage.app",
  messagingSenderId: "32261547754",
  appId: "1:32261547754:web:309cb3dcde7cc1faf21993",
  measurementId: "G-58QHVC3912"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
