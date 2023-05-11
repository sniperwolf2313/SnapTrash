// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt7kxDqhIempNWyDfTH07tnmKUIShstAE",
  authDomain: "snaptrash-9ee8c.firebaseapp.com",
  projectId: "snaptrash-9ee8c",
  storageBucket: "snaptrash-9ee8c.appspot.com",
  messagingSenderId: "703383371859",
  appId: "1:703383371859:web:c7a79029330ca83b6906a6",
  measurementId: "G-8VWRB3H05D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);