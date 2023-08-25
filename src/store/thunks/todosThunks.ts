import { Todo } from "@/types/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import debounce from "lodash/debounce";

export const todoApi = axios.create({ baseURL: "http://localhost:3001" });

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await todoApi.get<Todo[]>("/todos");
  return response.data;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo: Todo) => {
    const response = await todoApi.post<Todo>("/todos", newTodo);
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string) => {
    await todoApi.delete(`/todos/${id}`);
    return id;
  }
);

const debouncedPatch = debounce(
  async (payload: { id: string } & Partial<Todo>) => {
    const { id, ...updatedTodo } = payload;

    return todoApi.patch<Todo>(`/todos/${id}`, updatedTodo);
  },
  500
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (payload: { id: string } & Partial<Todo>) => {
    debouncedPatch(payload);
    return payload;
  }
);
