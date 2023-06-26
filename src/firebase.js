import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnHJbnZcH0lN4LcG8ShgArcbVqil9_6Ko",
  authDomain: "linkedin-clone-react-app1.firebaseapp.com",
  projectId: "linkedin-clone-react-app1",
  storageBucket: "linkedin-clone-react-app1.appspot.com",
  messagingSenderId: "18397862882",
  appId: "1:18397862882:web:be6fbffa24b2b901b1b7bb"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();

export {auth, provider, storage};
export default db;