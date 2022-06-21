import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF-DB6437UBTQEb9M0cyT3Hv3AO9s02MQ",
  authDomain: "fir-sample-65b76.firebaseapp.com",
  projectId: "fir-sample-65b76",
  storageBucket: "fir-sample-65b76.appspot.com",
  messagingSenderId: "853658636364",
  appId: "1:853658636364:web:bc7a0b61b99201ee1da4e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);