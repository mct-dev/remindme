import { Timestamp } from "firebase/firestore";

export interface Link {
  id: string
  value: string
  category: string;
  remindDatetime: Timestamp;
  recurrence: string;
}
