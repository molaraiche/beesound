// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByHfiiunAAAkwBUEyeIyj7Ge_-Fn5veZA",
  authDomain: "beesound-88a12.firebaseapp.com",
  projectId: "beesound-88a12",
  storageBucket: "beesound-88a12.appspot.com",
  messagingSenderId: "155442863875",
  appId: "1:155442863875:web:7d72b532d83da3ca58d336",
  measurementId: "G-4CP0CN7EFY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
