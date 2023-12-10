import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-70942.firebaseapp.com",
  projectId: "mern-auth-70942",
  storageBucket: "mern-auth-70942.appspot.com",
  messagingSenderId: "1054019103059",
  appId: "1:1054019103059:web:913a64bc118986f925d9a6"
};


export const app = initializeApp(firebaseConfig);