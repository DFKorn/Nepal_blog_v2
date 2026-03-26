import { RootState } from "../store";

// get all subreddits
export const selectAllSubreddits = (state: RootState) =>
  state.subreddits.subreddits;

// get current selected ID
export const selectSelectedID = (state: RootState) =>
  state.subreddits.selectedSubredditID;

// get current selected subreddit
export const selectActiveSubreddit = (state: RootState) => {
  const list = selectAllSubreddits(state);
  const id = selectSelectedID(state);
  return list.find((s) => s.id === id) || list[0];
};
