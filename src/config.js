import firebase from "firebase";

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
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
