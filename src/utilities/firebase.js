// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCNFmVO9U7L709FIQYjqfTwNLG3FbOtHDg",
  
    authDomain: "expenses-7b0d0.firebaseapp.com",
  
    projectId: "expenses-7b0d0",
  
    storageBucket: "expenses-7b0d0.appspot.com",
  
    messagingSenderId: "557246828664",
  
    appId: "1:557246828664:web:1ddfe027b08953323c9d8d"
  
  };

export const app = firebase.initializeApp(firebaseConfig);
export default firebase


  
