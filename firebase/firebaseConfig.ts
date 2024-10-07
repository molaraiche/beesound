import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByHfiiunAAAkwBUEyeIyj7Ge_-Fn5veZA",
  authDomain: "beesound-88a12.firebaseapp.com",
  projectId: "beesound-88a12",
  storageBucket: "beesound-88a12.appspot.com",
  messagingSenderId: "155442863875",
  appId: "1:155442863875:web:7d72b532d83da3ca58d336",
  measurementId: "G-4CP0CN7EFY",
};

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);