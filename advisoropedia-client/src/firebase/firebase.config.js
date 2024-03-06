// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCdXG6hLZ27XRHbjrmBalrUXOh1eq4vHdI",
   authDomain: "dev-demo-projects.firebaseapp.com",
   projectId: "dev-demo-projects",
   storageBucket: "dev-demo-projects.appspot.com",
   messagingSenderId: "119164681746",
   appId: "1:119164681746:web:fccea929b15f37a05922cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;