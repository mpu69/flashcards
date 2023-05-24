import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2EpscPLdaIhwtIY3mkGfwtmkkLM9VEbs",
  authDomain: "flashcards-d9714.firebaseapp.com",
  projectId: "flashcards-d9714",
  storageBucket: "flashcards-d9714.appspot.com",
  messagingSenderId: "289444634290",
  appId: "1:289444634290:web:dc10cc559fc73ec8bc33ab",
  measurementId: "G-L6ZR8P56VP",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
