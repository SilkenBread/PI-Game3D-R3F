"use-strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACGo2Z0zm9JOQKrkZ_snpuBM61VLOzYIE",
  authDomain: "hoze3d.firebaseapp.com",
  projectId: "hoze3d",
  storageBucket: "hoze3d.appspot.com",
  messagingSenderId: "490886671761",
  appId: "1:490886671761:web:404eeca6365a9061ddbe30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const db = getFirestore(app);

export { auth };