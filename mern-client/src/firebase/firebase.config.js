// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd3yQ-2HqM6deF4MjbrB-6ValP941MZ_w",
  authDomain: "mern-book-inventory-d6132.firebaseapp.com",
  projectId: "mern-book-inventory-d6132",
  storageBucket: "mern-book-inventory-d6132.appspot.com",
  messagingSenderId: "462872586821",
  appId: "1:462872586821:web:55a516cfd83d9ee99fd12c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;