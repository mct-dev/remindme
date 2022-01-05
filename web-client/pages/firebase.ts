import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0E9XQx4LXZ2eol_ef5wBeXo2SVWznpRA",
  authDomain: "remind-me-337215.firebaseapp.com",
  projectId: "remind-me-337215",
  storageBucket: "remind-me-337215.appspot.com",
  messagingSenderId: "663094050824",
  appId: "1:663094050824:web:6096694417fefc8e6351bd",
  measurementId: "G-809CSEMWRB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();