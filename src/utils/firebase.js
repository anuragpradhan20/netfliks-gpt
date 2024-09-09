// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGiZga86lOP42GoCr-GGJj8QyrCjYSjbk",
  authDomain: "netfliks-gpt-bdd2f.firebaseapp.com",
  projectId: "netfliks-gpt-bdd2f",
  storageBucket: "netfliks-gpt-bdd2f.appspot.com",
  messagingSenderId: "486061914149",
  appId: "1:486061914149:web:b15c80f79879e485d967cc",
  measurementId: "G-Z460NPW3NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();