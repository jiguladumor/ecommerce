// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDCnTXDzQpygs1hdEbQ5QMcGK8IlhPTdA",
  authDomain: "ecemmerce-7288f.firebaseapp.com",
  projectId: "ecemmerce-7288f",
  storageBucket: "ecemmerce-7288f.appspot.com",
  messagingSenderId: "901526355097",
  appId: "1:901526355097:web:0dc57a938d61b5012c4c08",
  measurementId: "G-WP7QTKCEMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);