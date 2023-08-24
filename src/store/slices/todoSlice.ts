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
import { CardStatus } from "@/types/enums";

const initialState: TodoState = { todos: [] };

export const statusPriority: Record<CardStatus, number> = {
  checked: 0,
  created: 1,
  scheduled: 2,
  canceled: 3,
};

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    sortByCreationDate: (state) => {
      state.todos.sort(
        (a, b) =>
          new Date(a.creationDate).getTime() -
          new Date(b.creationDate).getTime()
      );
    },
    sortByDueDate: (state) => {
      state.todos.sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
    },
    sortByStatus: (state) => {
      state.todos.sort((a, b) => {
        const aDueDate = new Date(a.dueDate).getTime();
        const bDueDate = new Date(b.dueDate).getTime();
        aDueDate - bDueDate;
        return statusPriority[b.status] - statusPriority[a.status];
      });
    },
  },
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

export const { sortByCreationDate, sortByDueDate, sortByStatus } =
  toDoSlice.actions;

export default toDoSlice.reducer;
