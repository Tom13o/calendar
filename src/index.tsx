// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmh941_88c15H_21Cmbe0su442x0-7Aec",
  authDomain: "calendar2076.firebaseapp.com",
  projectId: "calendar2076",
  storageBucket: "calendar2076.appspot.com",
  messagingSenderId: "187067028648",
  appId: "1:187067028648:web:6bf774a50cbd1db8f5de9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { app, db };

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
