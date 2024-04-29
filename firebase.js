// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9PRVrLK1W8F50ikCYKXuI6xydrNjhJ0c",
  authDomain: "enigma-fd4da.firebaseapp.com",
  projectId: "enigma-fd4da",
  storageBucket: "enigma-fd4da.appspot.com",
  messagingSenderId: "164910130773",
  appId: "1:164910130773:web:9d2549e9e40e53718116dc",
  measurementId: "G-EZB1VC6R4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);