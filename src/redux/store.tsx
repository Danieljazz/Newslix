import { configureStore } from "@reduxjs/toolkit";
import newsOptionReducer from "./newsOptionSlice";

export const store = configureStore({
  reducer: {
    newsView: newsOptionReducer,
  },
});
