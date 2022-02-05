import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDLTWwhrH0pCJjrl3bWJMDWce_LMzCvNpA",
    authDomain: "ecommerce-coder-lazarte.firebaseapp.com",
    projectId: "ecommerce-coder-lazarte",
    storageBucket: "ecommerce-coder-lazarte.appspot.com",
    messagingSenderId: "1080512792765",
    appId: "1:1080512792765:web:65d708845df12425b3cfd4"
});

export function getFirestoreApp(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app);
}
