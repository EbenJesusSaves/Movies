// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrelzlbLDE3bINri5-wJRsEWD0Mm-os-A",
  authDomain: "mega-movie-app.firebaseapp.com",
  projectId: "mega-movie-app",
  storageBucket: "mega-movie-app.appspot.com",
  messagingSenderId: "15870671165",
  appId: "1:15870671165:web:b74e8e56f0615566792d54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
