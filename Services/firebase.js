import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6UK5_nEOXj07Ve15Y9vED-5yMOhS_xrQ",
    authDomain: "e-commerce-4e424.firebaseapp.com",
    projectId: "e-commerce-4e424",
    storageBucket: "e-commerce-4e424.appspot.com",
    messagingSenderId: "686203979123",
    appId: "1:686203979123:web:9a8a56452ae989c3c53106"
};


const fireapp = initializeApp(firebaseConfig);
const firebase = getFirestore(fireapp);
const auth = getAuth(fireapp);

export { auth, firebase };