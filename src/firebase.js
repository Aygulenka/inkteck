// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYso008-wITFG0qGzRD7ci7GIt66hXpR8",
  authDomain: "learnboard-6ec18.firebaseapp.com",
  projectId: "learnboard-6ec18",
  storageBucket: "learnboard-6ec18.appspot.com",
  messagingSenderId: "172173898844",
  appId: "1:172173898844:web:eb93f625e3440ab8afe299",
  measurementId: "G-VGH94GJNM0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
const db = getFirestore(app)
export { db } 

