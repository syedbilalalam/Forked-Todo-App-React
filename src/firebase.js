/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTaUqgwj2s59AdjclVkEKkkiq1GvccoqY",
  authDomain: "todo-app-react-d140b.firebaseapp.com",
  projectId: "todo-app-react-d140b",
  storageBucket: "todo-app-react-d140b.appspot.com",
  messagingSenderId: "211644480584",
  appId: "1:211644480584:web:15388103cb7ced37ed6c7d",
  measurementId: "G-ZXQ5YHVP4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app)