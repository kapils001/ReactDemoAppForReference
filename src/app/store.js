import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import themeReducer from "./features/themes/ThemeSlice";
import authReducer from "./features/authentication/authenticationSlice";

export const store = configureStore({
  reducer: {
    // it is an object to map alll the reducers to
    counter: counterReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});
