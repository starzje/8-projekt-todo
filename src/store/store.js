import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import formReducer from "./form/formSlice";
import todosReducer from "./todos/todosSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
    todos: todosReducer,
  },
});
