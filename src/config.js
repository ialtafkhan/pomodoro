import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDm3mhbDvoKFfCpcMkCbq-1BpD7E9Wv5XI",
    authDomain: "pomodorotimer-e5096.firebaseapp.com",
    projectId: "pomodorotimer-e5096",
    storageBucket: "pomodorotimer-e5096.appspot.com",
    messagingSenderId: "167541650007",
    appId: "1:167541650007:web:23946e9f401c8f1846e912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db