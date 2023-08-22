import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  id: string;
  status: "scheduled" | "created" | "canceled" | "checked";
  creationDate: Date | string;
  dueDate: Date | string;
  description: string;
  isChecked: boolean;
}

const initialState: TodoState[] = [
  {
    id: "",
    status: "created",
    creationDate: "",
    dueDate: "",
    description: "",
    isChecked: false,
  },
];

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string } & Partial<TodoState>>
    ) => {
      const todoIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (todoIndex !== -1)
        state[todoIndex] = { ...state[todoIndex], ...action.payload };
    },
  },
});

export const { addTodo, updateTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
