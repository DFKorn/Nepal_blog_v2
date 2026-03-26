import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { subredditsList } from "../../api/reddit";
import { Subreddit } from "@/types";

interface SubredditsState {
  subreddits: Subreddit[];
  selectedSubredditID: string;
}

const STORAGE_KEY = "selected_subreddit_id";

const initialState: SubredditsState = {
  subreddits: subredditsList,
  selectedSubredditID:
    sessionStorage.getItem(STORAGE_KEY) || subredditsList[0].id,
};

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {
    setSelectedSubreddit: (state, action: PayloadAction<string>) => {
      state.selectedSubredditID = action.payload;
    },
  },
});

export const { setSelectedSubreddit } = subredditsSlice.actions;
export default subredditsSlice.reducer;
