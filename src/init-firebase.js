// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0thW2KPlZMb0wq8oU76lZjP-5xHYTqrM",
  authDomain: "test-app-1cdfb.firebaseapp.com",
  projectId: "test-app-1cdfb",
  storageBucket: "test-app-1cdfb.appspot.com",
  messagingSenderId: "809123439183",
  appId: "1:809123439183:web:f4753e7d18313d7211c03a",
  measurementId: "G-H0C4KB5N5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);