// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD999S8c-FrQvG6_8prLoRpMPDFSCJoxMM",
    authDomain: "weeding-photographer-669b5.firebaseapp.com",
    projectId: "weeding-photographer-669b5",
    storageBucket: "weeding-photographer-669b5.appspot.com",
    messagingSenderId: "904808953295",
    appId: "1:904808953295:web:c8bf6a0cec115b46eb4eba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;