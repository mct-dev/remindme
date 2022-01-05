import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "../models/Link";

export const addLink = async (link: Link) => {
  try {
    const docRef = await addDoc(collection(db, "links"), link);
    console.log("Link document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding link document: ", e);
  }
};
