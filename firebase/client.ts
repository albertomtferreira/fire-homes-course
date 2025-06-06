//CLIENT CONFIGURATIONS FOR FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdSsqDbS0PSxmOWrwJh-mIBUuWOiHDRHE",
  authDomain: "fire-homes-course-7a4af.firebaseapp.com",
  projectId: "fire-homes-course-7a4af",
  storageBucket: "fire-homes-course-7a4af.firebasestorage.app",
  messagingSenderId: "266378869667",
  appId: "1:266378869667:web:5ea5c2aaef02313fa73816",
  measurementId: "G-LYW6JHRQTZ"
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth
let storage: FirebaseStorage

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app)
  storage = getStorage(app)

} else {
  const app = currentApps[0]
  auth = getAuth(app)
  storage = getStorage(app)

}

export { auth, storage }
