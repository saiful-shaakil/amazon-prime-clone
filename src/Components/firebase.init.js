import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfQP55tAQf9uSZeRSU9qTa4NcN2seQFzg",
  authDomain: "emajohn-prime-clone.firebaseapp.com",
  projectId: "emajohn-prime-clone",
  storageBucket: "emajohn-prime-clone.appspot.com",
  messagingSenderId: "889660032787",
  appId: "1:889660032787:web:0cc4b5f66dfb35be53bce6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
