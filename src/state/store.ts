import { configureStore } from "@reduxjs/toolkit";
import subberdditsReducer from "./subreddits/subredditsSlice";
import { listenerMiddleware } from "./listenerMiddleware";

export const store = configureStore({
  reducer: {
    subreddits: subberdditsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware), // add Listener (prepend, to ensure it runs before other middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
