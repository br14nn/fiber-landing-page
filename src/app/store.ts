import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbar-slice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
