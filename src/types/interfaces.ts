import { CardStatus } from "./enums";

export interface Todo {
  id: string;
  status:
    | CardStatus.Created
    | CardStatus.Scheduled
    | CardStatus.Checked
    | CardStatus.AlmostDueDate
    | CardStatus.Canceled;
  creationDate: Date;
  dueDate: Date | string;
  description: string;
  isChecked: boolean;
}
