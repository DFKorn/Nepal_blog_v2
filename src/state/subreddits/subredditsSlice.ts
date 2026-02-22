import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { subredditsList } from "../../api/reddit";

interface Subreddit {
  title: string;
  id: string;
  url: string;
  color: string;
  iconURL: string;
  softName: string;
}

interface SubredditsState {
  subreddits: Subreddit[];
  selectedSubredditID: string;
}

const initialState: SubredditsState = {
  subreddits: subredditsList,
  selectedSubredditID: subredditsList[0].id,
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
