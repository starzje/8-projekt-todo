import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodo } from "../../helpers/apiCalls";

export const addTodo = createAsyncThunk("todos/addTodo", fetchTodo);
export const getTodos = createAsyncThunk("todos/getTodos", fetchTodo);
export const changeMyTodo = createAsyncThunk("todos/changeMyTodo", fetchTodo);
export const deleteMyTodo = createAsyncThunk("todos/deleteMyTodo", fetchTodo);

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
        if (action.payload.err || action.payload.error) {
          state.error = action.payload.err || action.payload.error;
        } else {
          state.feedback = action.payload;
          state.myTodos.push(action.payload.todo);
          state.error = "";
        }
      })
      .addCase(addTodo.rejected, (state) => {
        state.error = "Something went wrong. Try again later.";
      })
      .addCase(getTodos.pending, (state) => {
        state.error = "proccessing fetching of my todos";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        if (action.payload.err || action.payload.error) {
          state.error = action.payload.err || action.payload.error;
        } else if (action.payload.all) {
          state.todos = action.payload.todos;
          state.error = "";
        } else {
          state.myTodos = action.payload.todos;
          state.error = "";
        }
      })
      .addCase(getTodos.rejected, (state) => {
        state.error = "Something went wrong. Try again later.";
      })
      .addCase(changeMyTodo.pending, (state) => {
        state.error = "proccessing changing of todo";
      })
      .addCase(changeMyTodo.fulfilled, (state, action) => {
        if (action.payload.err || action.payload.error) {
          state.error = action.payload.err || action.payload.error;
        } else {
          let index = state.myTodos.findIndex(
            (item) => item._id === action.payload.todo._id
          );
          state.myTodos[index] = action.payload.todo;
          state.error = "";
        }
      })
      .addCase(changeMyTodo.rejected, (state) => {
        state.error = "Something went wrong. Try again later.";
      })
      .addCase(deleteMyTodo.pending, (state) => {
        state.error = "proccessing deleting of my todo";
      })
      .addCase(deleteMyTodo.fulfilled, (state, action) => {
        if (action.payload.err || action.payload.error) {
          state.error = action.payload.err || action.payload.error;
        } else {
          let index = state.myTodos.findIndex(
            (item) => item._id === action.payload.deletionID
          );
          state.myTodos.splice(index, 1);
          state.error = "";
        }
      })
      .addCase(deleteMyTodo.rejected, (state) => {
        state.error = "Something went wrong. Try again later.";
      });
  },
});

export default todosSlice.reducer;
