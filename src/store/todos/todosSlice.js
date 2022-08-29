import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodo } from "../../helpers/apiCalls";

export const addTodo = createAsyncThunk("todos/addTodo", fetchTodo);
export const getMyTodos = createAsyncThunk("todos/getMyTodos", fetchTodo);

const initialState = {
  myTodos: [],
  todos: [],
  feedback: {},
  error: "",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state) => {
        state.error = "proccessing creating new todo";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        if (action.payload.err) {
          state.error = action.payload.err;
        } else {
          state.feedback = action.payload;
          state.myTodos.push(action.payload.todo);
          state.error = "";
        }
      })
      .addCase(addTodo.rejected, (state) => {
        state.error = "Something went wrong. Try again later.";
      })
      .addCase(getMyTodos.pending, (state) => {
        state.error = "proccessing fetching of my todos";
      })
      .addCase(getMyTodos.fulfilled, (state, action) => {
        if (action.payload.err) {
          state.error = action.payload.err;
        } else {
          state.myTodos = action.payload.todos;
          state.error = "";
        }
      })
      .addCase(getMyTodos.rejected, (state) => {
        state.error = "Something went wrong. Try again later.";
      });
  },
});

export default todosSlice.reducer;
