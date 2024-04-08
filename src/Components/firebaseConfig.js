// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import  'firebase/compat/auth';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const auth = getAuth();
const firebaseConfig = {
  apiKey: "AIzaSyDNoveqROxwkBnY2slAwvGPlKyXuP4teLA",
  authDomain: "login-and-registration-3bebb.firebaseapp.com",
  projectId: "login-and-registration-3bebb",
  storageBucket: "login-and-registration-3bebb.appspot.com",
  messagingSenderId: "939230908952",
  appId: "1:939230908952:web:db8c989f78272b837ba96d",
  measurementId: "G-PG4W63YW16"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app