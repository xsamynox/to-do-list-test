import { CardStatus } from "./enums";

export interface Todo {
  id: string;
  status:
    | CardStatus.Created
    | CardStatus.Schedule
    | CardStatus.Checked
    | CardStatus.Canceled;
  creationDate: Date;
  dueDate: Date | string;
  description: string;
  isChecked: boolean;
}
