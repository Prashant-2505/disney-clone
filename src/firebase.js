// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDAXyIX3-DYJ4zr9WxJorxKkUpruaTZpSU",
  authDomain: "disneyplus-clone-7de72.firebaseapp.com",
  projectId: "disneyplus-clone-7de72",
  storageBucket: "disneyplus-clone-7de72.appspot.com",
  messagingSenderId: "253594694207",
  appId: "1:253594694207:web:33e2106a23367942b0fe8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export{auth,provider}