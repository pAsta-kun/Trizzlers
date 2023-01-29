// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlFVI_lGkjjPJ6lbLJ9t8yhOLkX8_ksH0",
  authDomain: "twizzlerreal.firebaseapp.com",
  databaseURL: "https://twizzlerreal-default-rtdb.firebaseio.com",
  projectId: "twizzlerreal",
  storageBucket: "twizzlerreal.appspot.com",
  messagingSenderId: "139487492381",
  appId: "1:139487492381:web:16637bdb5836ed3f1549f4",
  measurementId: "G-PY6W7FHJ4P"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

