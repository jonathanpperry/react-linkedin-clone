import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-HVWyOmRxY5qnSpBaZX-nGe0bnIFv2ME",
  authDomain: "linkedin-clone-570e6.firebaseapp.com",
  projectId: "linkedin-clone-570e6",
  storageBucket: "linkedin-clone-570e6.appspot.com",
  messagingSenderId: "852128806247",
  appId: "1:852128806247:web:f956a1c72585c7d107abc2",
  measurementId: "G-8MYVBG6FBP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
