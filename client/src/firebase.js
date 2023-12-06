// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3e2d0.firebaseapp.com",
  projectId: "mern-estate-3e2d0",
  storageBucket: "mern-estate-3e2d0.appspot.com",
  messagingSenderId: "581587306350",
  appId: "1:581587306350:web:173f2cabb76a45053ee37f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

