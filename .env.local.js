// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChmy80-Ia0VasFHoaoBUBvzCkW-1TVB0Q",
  authDomain: "login-21c5f.firebaseapp.com",
  projectId: "login-21c5f",
  storageBucket: "login-21c5f.appspot.com",
  messagingSenderId: "851743215673",
  appId: "1:851743215673:web:605af40bfb627a2d343de8",
  measurementId: "G-4F21C9MQDL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
