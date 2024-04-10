// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWg2YFsIhgwBnZw9VvogYUcVHA28g_R48",
  authDomain: "dragoan-news-react.firebaseapp.com",
  projectId: "dragoan-news-react",
  storageBucket: "dragoan-news-react.appspot.com",
  messagingSenderId: "12316184903",
  appId: "1:12316184903:web:3a997249f31e899d2c7c62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
export default app;