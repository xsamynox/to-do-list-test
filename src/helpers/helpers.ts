import { statusPriority } from "@/store/slices/todoSlice";
import { CardStatus } from "@/types/enums";
import { TodoState } from "@/types/types";

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
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const timeDifference = dueDatetime - currentDatetime;

  let status = CardStatus.Scheduled;

  if (todo.isChecked) status = CardStatus.Checked;
  else if (currentDatetime > dueDatetime) status = CardStatus.Canceled;
  else if (timeDifference <= oneDayInMilliseconds)
    status = CardStatus.AlmostDueDate;

  todo.status = status;

  return todo;
};

export const orderStatus = (todos: TodoState["todos"]) => {
  return todos.sort((a, b) => {
    const aDueDate = new Date(a.dueDate).getTime();
    const bDueDate = new Date(b.dueDate).getTime();
    aDueDate - bDueDate;
    return statusPriority[b.status] - statusPriority[a.status];
  });
};
