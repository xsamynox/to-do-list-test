import { TodoState } from "@/types/types";
import { CardStatus } from "@/types/enums";

export function generateId() {
  const timestamp = Date.now().toString(36);
  const randomValue = Math.random().toString(36).substring(2, 5); // Genera un valor aleatorio y toma solo algunos caracteres

  return timestamp + randomValue;
}

export const setTodoStatus = (todo: TodoState["todos"][number]) => {
  if (!todo.dueDate) {
    todo.status = CardStatus.Created;
    return todo;
  }

  const currentDatetime = new Date().getTime();
  const dueDatetime = new Date(todo.dueDate).getTime();

  let status = CardStatus.Schedule;

  if (todo.isChecked) status = CardStatus.Checked;
  else if (currentDatetime > dueDatetime) status = CardStatus.Canceled;

  todo.status = status;

  return todo;
};
