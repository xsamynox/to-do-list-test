import { TodoState } from "@/types/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchTodos } from "../thunks/todosThunks";
import { CardStatus } from "@/types/enums";

const initialState: TodoState[] = [
  {
    id: "",
    status: CardStatus.Created,
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
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      action.payload.forEach((todo) => {
        state.push(todo);
      });
    });
  },
});

export const { addTodo, updateTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
