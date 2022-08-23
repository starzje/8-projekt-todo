import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodo } from "../../helpers/apiCalls";

export const addTodo = createAsyncThunk("todos/addTodo", fetchTodo);

const initialState = {
  myTodos: {},
  todos: {},
  feedback: {},
  error: "",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state, action) => {
        state.error = "proccessing creating new todo";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.error = action.payload.error;
        } else {
          state.feedback = action.payload;
          state.error = "";
        }
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = "Something went wrong. Try again later.";
      });
  },
});

export default todosSlice.reducer;
