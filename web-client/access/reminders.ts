import { doc, setDoc } from "firebase/firestore";
import { useMutation } from "react-query";
import { db } from "./firebase";
import { Reminder } from "./models/Reminder";

const collectionName = "reminders";

const upsertReminder = async (data: Reminder) => {
  const {
    email,
    link: { id, recurrence, ...linkData },
  } = data;

  try {
    await setDoc(doc(db, collectionName, email, recurrence, id), linkData, {
      merge: true,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useUpsertReminderMutation = () =>
  useMutation<void, Error, Reminder>(upsertReminder);
