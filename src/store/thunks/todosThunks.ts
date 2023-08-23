import { TodoState } from "@/types/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const todoApi = axios.create({ baseURL: "http://localhost:3001" });

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await todoApi.get<TodoState[]>("/todos");
  return response.data;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo: TodoState) => {
    const response = await todoApi.post<TodoState>("/todos", newTodo);
    return response.data;
  }
);
