import { Todo } from "@/types/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
