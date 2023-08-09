import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKa3zIBRSyGAJcJxoVttzkecDC6Gp34cY",
  authDomain: "interstore-5e646.firebaseapp.com",
  databaseURL:
    "https://interstore-5e646-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "interstore-5e646",
  storageBucket: "interstore-5e646.appspot.com",
  messagingSenderId: "190330749430",
  appId: "1:190330749430:web:5fc6a12d5736d3102f47d7",
  measurementId: "G-PHDD1G5HJ8",
};

export const app = initializeApp(firebaseConfig);
