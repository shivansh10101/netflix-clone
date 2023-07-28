// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlFcL6hM5Ba-CPp9BSvF44Yo4gP3oFL7w",
  authDomain: "react-netflix-clone-d4861.firebaseapp.com",
  projectId: "react-netflix-clone-d4861",
  storageBucket: "react-netflix-clone-d4861.appspot.com",
  messagingSenderId: "957638457462",
  appId: "1:957638457462:web:70eefb6b290003d4474757",
  measurementId: "G-TX3N7CDCX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);