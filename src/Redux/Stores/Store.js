import { configureStore } from "@reduxjs/toolkit";
import { MovieReducer } from "../Reducers/MovieReducer";

export const Store = configureStore({
  reducer: MovieReducer,
  devTools: true
});
