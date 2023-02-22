import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/ToDo-feature";

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
