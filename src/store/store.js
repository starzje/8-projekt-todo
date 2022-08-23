import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import formSlice from "./form/formSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    form: formSlice,
  },
});
