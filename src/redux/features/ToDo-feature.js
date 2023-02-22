import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 1000,
        text: action.payload.text,
        completed: false,
      };
      state.todos.push(todo);
      state.count += 1;
    },

    deleteTodo: (state, action) => {
      state.todos.splice(action.payload.start, action.payload.end);
    },

    completedTodo: (state, action) => {
      const newTodo = [...state.todos];
      newTodo[action.payload.indexValue].completed =
        !newTodo[action.payload.indexValue].completed;
      state.todos = newTodo;
    },

    clearCompleted: (state) => {
      const newTodo = state.todos.filter((item) => {
        return item.completed === false;
      });
      state.todos = newTodo;
    },
  },
});

export const { addTodo, deleteTodo, completedTodo, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
