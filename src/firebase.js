// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmoHrcfFWezSRjZBTc1k-kONz-JPcGCH8",
  authDomain: "messenger-clone-66cd5.firebaseapp.com",
  projectId: "messenger-clone-66cd5",
  storageBucket: "messenger-clone-66cd5.appspot.com",
  messagingSenderId: "340182783433",
  appId: "1:340182783433:web:d440eb0fc1df9626a18418",
  measurementId: "G-X4E2DQWZBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
