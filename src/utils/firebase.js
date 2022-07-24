import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyAoaBEwEM3_s3eclibS6rtSn7S8C0zEJOc",
    authDomain: "hazal-gilles.firebaseapp.com",
    projectId: "hazal-gilles",
    storageBucket: "hazal-gilles.appspot.com",
    messagingSenderId: "940752016677",
    appId: "1:940752016677:web:98a23dcd853f5ce25a36cc",
    measurementId: "G-ZBCY44JZVC"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore();


export default db;