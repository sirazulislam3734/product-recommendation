// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Rgzq_vT1B_LAlQbGcgIWzRTO3My6cvQ",
  authDomain: "product-recommendation-93228.firebaseapp.com",
  projectId: "product-recommendation-93228",
  storageBucket: "product-recommendation-93228.firebasestorage.app",
  messagingSenderId: "114896613683",
  appId: "1:114896613683:web:3ae044912e3ae89919ce46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};