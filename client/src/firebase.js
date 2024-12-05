import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homeblocs-b78fb.firebaseapp.com",
  projectId: "homeblocs-b78fb",
  storageBucket: "homeblocs-b78fb.firebasestorage.app",
  messagingSenderId: "273055572460",
  appId: "1:273055572460:web:8229485fd763484899a0c9"
};

export const app = initializeApp(firebaseConfig);