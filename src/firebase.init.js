// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvMutxLsJ-t1i7DNPlwOB2auyy2B0YSvg",
  authDomain: "assignment-12-7379d.firebaseapp.com",
  projectId: "assignment-12-7379d",
  storageBucket: "assignment-12-7379d.appspot.com",
  messagingSenderId: "349301875081",
  appId: "1:349301875081:web:c5cf9454ba33dde0a1c158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
export default auth;