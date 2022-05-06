// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAldKkqf3hxNp2wIjJhTrwM2IJ-vJIXHE0",
  authDomain: "sports-gear-6d1f5.firebaseapp.com",
  projectId: "sports-gear-6d1f5",
  storageBucket: "sports-gear-6d1f5.appspot.com",
  messagingSenderId: "707212113465",
  appId: "1:707212113465:web:72943a768553c54aaaffe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;