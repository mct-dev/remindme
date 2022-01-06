import { Timestamp } from "firebase/firestore";

export interface Link {
  value: string
  category: string;
  remindDatetime: Timestamp;
  recurrence: string;
}
