import { createSlice } from "@reduxjs/toolkit";

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
