import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  passwordRepeat: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    change: (state, action) => {
      state[action.payload.stateName] = action.payload.value;
    },
    resetAll: (state) => {
      for (const item in state) {
        state[item] = "";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { change, resetAll } = formSlice.actions;

export default formSlice.reducer;
