import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { setSelectedSubreddit } from "./subreddits/subredditsSlice";

export const listenerMiddleware = createListenerMiddleware();

// startListening позволяет нам "слушать" определенные действия и выполнять побочные эффекты, когда эти действия происходят
listenerMiddleware.startListening({
  actionCreator: setSelectedSubreddit, // Следим конкретно за этим экшеном
  effect: async (action) => {
    // action.payload в данном случае — это наш новый ID
    sessionStorage.setItem("selected_subreddit_id", action.payload);

    console.log("ID сохранен в sessionStorage:", action.payload);
  },
});
