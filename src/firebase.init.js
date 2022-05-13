// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1CfoJwkwZoCQtDWTEKA6w1FFfUYhfFfQ",
  authDomain: "react-route-online-tutor-pro.firebaseapp.com",
  projectId: "react-route-online-tutor-pro",
  storageBucket: "react-route-online-tutor-pro.appspot.com",
  messagingSenderId: "824455089178",
  appId: "1:824455089178:web:0a1443ac04cf57ab2655a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;