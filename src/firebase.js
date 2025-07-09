import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
 // or wherever your firebase config is


const firebaseConfig = {
  apiKey: "AIzaSyDoTFQROyMkCJwhshWGibgCwRSZcUaZEnM",
  authDomain: "portfolio-c2dd4.firebaseapp.com",
  projectId: "portfolio-c2dd4",
  storageBucket: "portfolio-c2dd4.firebasestorage.app",
  messagingSenderId: "662391806907",
  appId: "1:662391806907:web:c7dbb76c5b7132b9a5829e",
  measurementId: "G-MGMR21ZBC1",
 databaseURL:"https://portfolio-c2dd4-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);