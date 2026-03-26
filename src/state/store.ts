import { configureStore } from "@reduxjs/toolkit";
import subberdditsReducer from "./subreddits/subredditsSlice";
import { listenerMiddleware } from "./listenerMiddleware";
import { redditApi } from "./posts/redditApiSlice";

export const store = configureStore({
  reducer: {
    subreddits: subberdditsReducer,
    [redditApi.reducerPath]: redditApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(redditApi.middleware)
      .prepend(listenerMiddleware.middleware), // add Listener (prepend, to ensure it runs before other middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
