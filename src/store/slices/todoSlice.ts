import { Todo } from "@/types/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchTodos,
  addNewTodo,
  deleteTodo,
  updateTodo,
} from "../thunks/todosThunks";
import { TodoState } from "@/types/types";

const initialState: TodoState = { todos: [] };

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch To do list
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })

      // Add a new to do
      .addCase(addNewTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      })
      // Remove one to do
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => {
          return todo.id !== action.payload;
        });
      })
      // Update one to do
      .addCase(updateTodo.fulfilled, (state, action) => {
        if (action.payload) {
          const { id, ...updatedTodo } = action.payload;
          const todoIndex = state.todos.findIndex((todo) => todo.id === id);
          if (todoIndex !== -1) {
            state.todos[todoIndex] = {
              ...state.todos[todoIndex],
              ...updatedTodo,
            };
          }
        }
      });
  },
});

export const {} = toDoSlice.actions;

export default toDoSlice.reducer;
