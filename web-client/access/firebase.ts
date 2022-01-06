import { initializeApp } from "firebase/app";
import {
  Analytics,
  getAnalytics,
  isSupported as isAnalyticsSupported,
} from "firebase/analytics";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { isDevelopment } from "../common/environment";
import { firebaseConfig } from "../config/firebase";

let analytics: Analytics | undefined;

const app = initializeApp(firebaseConfig);

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
