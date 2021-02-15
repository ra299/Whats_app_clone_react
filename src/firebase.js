
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCg8MJjqJMtccuGj6utSEt98yZZW6iVAmE",
  authDomain: "whats-app-clone-b2d91.firebaseapp.com",
  databaseURL: "https://whats-app-clone-b2d91.firebaseio.com",
  projectId: "whats-app-clone-b2d91",
  storageBucket: "whats-app-clone-b2d91.appspot.com",
  messagingSenderId: "182287545894",
  appId: "1:182287545894:web:7ddfbce22c5ccc7b98d8e7",
  measurementId: "G-QMN4MBX7EB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export  { auth, provider};
export default db;
