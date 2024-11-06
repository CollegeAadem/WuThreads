// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5Psy2fEeJd-7-4L_UDkAk349fH57g6jc",
  authDomain: "wuthreadstest.firebaseapp.com",
  projectId: "wuthreadstest",
  storageBucket: "wuthreadstest.firebasestorage.app",
  messagingSenderId: "851967446421",
  appId: "1:851967446421:web:ac9210465577f5c6677a9c",
  measurementId: "G-SF51QNKT5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics, firebaseConfig };