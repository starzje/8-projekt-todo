import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../helpers/apiCalls";

export const register = createAsyncThunk("user/register", postData);

const initialState = {
  username: "",
  token: "",
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    fail: (state, action) => {
      state.error = action.payload.error;
    },
    logout: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.error = "proccessing registration";
      })
      .addCase(register.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.error = action.payload.error;
        } else {
          state.username = action.payload.username;
          state.token = action.payload.token;
          state.error = "";
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

/*
const login = userSlice.actions.login;
const fail = userSlice.actions.fail;
const logout = userSlice.actions.logout;

export {login, fail, logout};
*/

// Action creators are generated for each case reducer function
export const { login, fail, logout } = userSlice.actions;

export default userSlice.reducer;
