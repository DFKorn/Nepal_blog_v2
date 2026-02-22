import { configureStore } from "@reduxjs/toolkit";
import subberdditsReducer from "./subreddits/subredditsSlice";

export const store = configureStore({
  reducer: {
    subreddits: subberdditsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
