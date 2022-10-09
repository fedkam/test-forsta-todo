import { createSlice } from "@reduxjs/toolkit";

export interface HomeState {
  id: string;
  text: string;
  done: boolean;
}

const initialTodos: HomeState[] = [
  { id: new Date().toISOString() + "milk", text: "Buy milk", done: true },
  { id: new Date().toISOString() + "bread", text: "Buy bread", done: false }
];

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: initialTodos
  },
  reducers: {
    createTodo(state, action) {
      state.todos.unshift({
        id: new Date().toISOString(),
        text: action.payload.text,
        done: false
      });
    },
    editTodo(state, action) {
      const editingTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (action.payload.text === "") {
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload.id
        );
      } else {
        editingTodo.text = action.payload.text;
      }
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleCompleteTodo(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.done = !toggledTodo.done;
    }
  }
});

export const {
  createTodo,
  editTodo,
  deleteTodo,
  toggleCompleteTodo
} = todoSlice.actions;

export default todoSlice.reducer;
