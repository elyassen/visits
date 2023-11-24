// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU_MzwWFVhtxdMhqCChEw6jxEmbxYLW_A",
  authDomain: "visitcounter-b69a9.firebaseapp.com",
  projectId: "visitcounter-b69a9",
  storageBucket: "visitcounter-b69a9.appspot.com",
  messagingSenderId: "662730542572",
  appId: "1:662730542572:web:acd25ab32edba1bca244c9",
  measurementId: "G-LRY4BEKYZT",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
