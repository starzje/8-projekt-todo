import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postAuth } from "../../helpers/apiCalls";

export const register = createAsyncThunk("user/register", postAuth);
export const login = createAsyncThunk("user/login", postAuth);

const initialState = {
  username: "",
  token: "",
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.username = initialState.username;
      state.token = initialState.token;
      state.error = initialState.error;
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
        state.error = "Something went wrong. Try again later.";
      })
      .addCase(login.pending, (state, action) => {
        state.error = "proccessing login";
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.error = action.payload.error;
        } else {
          state.username = action.payload.username;
          state.token = action.payload.token;
          state.error = "";
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.error = "Something went wrong. Try again later.";
      });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
