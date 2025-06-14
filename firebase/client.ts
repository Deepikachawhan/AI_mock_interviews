// Import the functions you need from the SDKs you need
 import { getApp, getApps, initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
 import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfYDmxRWDDRBlqcuxh3lMrXBUw6DUmDBM",
    authDomain: "prepwise-6df09.firebaseapp.com",
    projectId: "prepwise-6df09",
    storageBucket: "prepwise-6df09.firebasestorage.app",
    messagingSenderId: "296163309778",
    appId: "1:296163309778:web:7939bb19b12780dc90150b",
    measurementId: "G-0ENQ587V5C"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);