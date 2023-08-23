import { TodoState } from "@/types/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchTodos, addNewTodo } from "../thunks/todosThunks";

const initialState: TodoState[] = [];

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
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
    builder
      // Fetch To do list
      .addCase(fetchTodos.fulfilled, (state, action) => {
        action.payload.forEach((todo) => {
          if (state.every((x) => x.id !== todo.id)) {
            state.push(todo);
          }
        });
      })

      // Add a new to do
      .addCase(
        addNewTodo.fulfilled,
        (state, action: PayloadAction<TodoState>) => {
          state.push(action.payload);
        }
      );
  },
});

export const { updateTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
