// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBoFWA7NHjs3YeLVnHbn21vLlOqcefmw7s",
  authDomain: "ecommerce-1a873.firebaseapp.com",
  projectId: "ecommerce-1a873",
  storageBucket: "ecommerce-1a873.appspot.com",
  messagingSenderId: "525361658505",
  appId: "1:525361658505:web:f7a6cc240e72b6abec6458",
  measurementId: "G-LVF1NS4JSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);