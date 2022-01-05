import { initializeApp } from "firebase/app";
import {
  Analytics,
  getAnalytics,
  isSupported as isAnalyticsSupported,
} from "firebase/analytics";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { isDevelopment } from "../common/environment";

const firebaseConfig = {
  apiKey: "AIzaSyB0E9XQx4LXZ2eol_ef5wBeXo2SVWznpRA",
  authDomain: "remind-me-337215.firebaseapp.com",
  projectId: "remind-me-337215",
  storageBucket: "remind-me-337215.appspot.com",
  messagingSenderId: "663094050824",
  appId: "1:663094050824:web:6096694417fefc8e6351bd",
  measurementId: "G-809CSEMWRB",
};

const app = initializeApp(firebaseConfig);
let analytics: Analytics | undefined;

isAnalyticsSupported().then((isSupported) => {
  if (isSupported) {
    analytics = getAnalytics(app);
  }
});

const db = getFirestore();

if (isDevelopment) {
  connectFirestoreEmulator(db, "localhost", 8080);
}

export { db, analytics };
