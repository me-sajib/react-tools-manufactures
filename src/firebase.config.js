// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyRzHrdWXtPfdbW3Vrbym9xxcwUNwIS6o",
  authDomain: "menufacture-ec58d.firebaseapp.com",
  projectId: "menufacture-ec58d",
  storageBucket: "menufacture-ec58d.appspot.com",
  messagingSenderId: "518845231463",
  appId: "1:518845231463:web:8a5787165d8c087d71ffc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
