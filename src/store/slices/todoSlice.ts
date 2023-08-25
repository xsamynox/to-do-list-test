import { orderStatus, setTodoStatus } from "@/helpers/helpers";
import { CardStatus } from "@/types/enums";
import { Todo } from "@/types/interfaces";
import { TodoState } from "@/types/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  addNewTodo,
  deleteTodo,
  fetchTodos,
  searchTodo,
  updateTodo,
} from "../thunks/todosThunks";

const initialState: TodoState = { todos: [] };

export const statusPriority: Record<CardStatus, number> = {
  checked: 0,
  created: 1,
  scheduled: 2,
  almostDueDate: 3,
  canceled: 4,
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
      orderStatus(state.todos);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch To do list
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = orderStatus(action.payload.map(setTodoStatus));
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
            state.todos[todoIndex] = setTodoStatus({
              ...state.todos[todoIndex],
              ...updatedTodo,
            });
          }
        }
        state.todos = orderStatus(state.todos);
      })
      .addCase(searchTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  },
});

export const { sortByCreationDate, sortByDueDate, sortByStatus } =
  toDoSlice.actions;

export default toDoSlice.reducer;
