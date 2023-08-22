import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../store/slices/to-do-slice";

export const store = configureStore({
  reducer: {
    todo: toDoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
