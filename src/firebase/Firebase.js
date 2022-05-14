// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrwVXcfNgQDmUqs0ZUoKCsL7eL_enahKg",
  authDomain: "workshop-ec4fe.firebaseapp.com",
  projectId: "workshop-ec4fe",
  storageBucket: "workshop-ec4fe.appspot.com",
  messagingSenderId: "836964541230",
  appId: "1:836964541230:web:d75a4b9d604da0deabd0bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const DB = getFirestore();
const facebook = new FacebookAuthProvider();

export { app, google, DB, facebook}