// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzmMKkR4zsGM6bZx1z8vlxwtLXa_XciK0",
  authDomain: "calendarapp2076.firebaseapp.com",
  projectId: "calendarapp2076",
  storageBucket: "calendarapp2076.appspot.com",
  messagingSenderId: "367370261468",
  appId: "1:367370261468:web:efd0197251334c1c33b519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
export { app }; // , db };

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
