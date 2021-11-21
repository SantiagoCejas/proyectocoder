import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBaWULgX6emvPBLw5ujrmRUwn4DYGeZAR4",
  authDomain: "react-coderhouse-santiagocejas.firebaseapp.com",
  projectId: "react-coderhouse-santiagocejas",
  storageBucket: "react-coderhouse-santiagocejas.appspot.com",
  messagingSenderId: "420576428481",
  appId: "1:420576428481:web:a2108e03fba8be76796f40"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
