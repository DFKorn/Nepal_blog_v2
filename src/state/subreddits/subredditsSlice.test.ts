import subredditsReducer, { setSelectedSubreddit } from "./subredditsSlice";
import { subredditsList } from "../../api/reddit";
import { describe, expect, it } from "vitest";

describe("subredditsSlice", () => {
  describe("setSelectedSubreddit", () => {
    it("should set the selected subreddit ID", () => {
      const initialState = {
        subreddits: subredditsList,
        selectedSubredditID: subredditsList[0].id,
      };

      const newSubredditId = "worldnews";
      const state = subredditsReducer(
        initialState,
        setSelectedSubreddit(newSubredditId),
      );

      expect(state.selectedSubredditID).toBe(newSubredditId);
    });

    it("should update selectedSubredditID to a different subreddit", () => {
      const initialState = {
        subreddits: subredditsList,
        selectedSubredditID: "programming",
      };

      const newSubredditId = "technology";
      const state = subredditsReducer(
        initialState,
        setSelectedSubreddit(newSubredditId),
      );

      expect(state.selectedSubredditID).toBe(newSubredditId);
    });

    it("should preserve subreddits array when changing selected subreddit", () => {
      const initialState = {
        subreddits: subredditsList,
        selectedSubredditID: subredditsList[0].id,
      };

      const newSubredditId = "funny";
      const state = subredditsReducer(
        initialState,
        setSelectedSubreddit(newSubredditId),
      );

      expect(state.subreddits).toEqual(subredditsList);
      expect(state.subreddits.length).toBeGreaterThan(0);
    });

    it("should handle setting the same subreddit ID", () => {
      const currentId = "news";
      const initialState = {
        subreddits: subredditsList,
        selectedSubredditID: currentId,
      };

      const state = subredditsReducer(
        initialState,
        setSelectedSubreddit(currentId),
      );

      expect(state.selectedSubredditID).toBe(currentId);
    });
  });
});
