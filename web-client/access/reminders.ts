import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Reminder } from "./models/Reminder";

const collectionName = "reminders"
const subCollectionName = "links"

/**
 * TODO: link value below doesn't work as key in firestore
 */

export const upsertReminder = async (data: Reminder) => {
  const { email, link: { value, ...linkData } } = data;

  try {
    await setDoc(doc(db, collectionName, email, subCollectionName, value), linkData, { merge: true });
  } catch (e) {
    console.error("Error adding reminder document: ", e);
  }
};
