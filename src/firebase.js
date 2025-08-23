
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoTFQROyMkCJwhshWGibgCwRSZcUaZEnM",
  authDomain: "portfolio-c2dd4.firebaseapp.com",
  projectId: "portfolio-c2dd4",
  storageBucket: "portfolio-c2dd4.firebasestorage.app",
  messagingSenderId: "662391806907",
  appId: "1:662391806907:web:c7dbb76c5b7132b9a5829e",
  measurementId: "G-MGMR21ZBC1",
  databaseURL: "https://portfolio-c2dd4-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Database instance
export const database = getDatabase(app);

// Auth instance
export const auth = getAuth(app);

// Sign in anonymously (so rules can check auth != null)
signInAnonymously(auth).catch((error) => {
  console.error("Auth error:", error);
});

