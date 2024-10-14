// Week 8 database - I know I've made 2 database access areas but I'm following the studio
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVjuCETAHYQak1_FXcPlr-1tPtPzi57ZY",
    authDomain: "week7-kevin.firebaseapp.com",
    projectId: "week7-kevin",
    storageBucket: "week7-kevin.appspot.com",
    messagingSenderId: "49386747393",
    appId: "1:49386747393:web:846d968fcd1368e852f200"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;