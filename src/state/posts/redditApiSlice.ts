import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RedditPost, RedditResponse } from "@/types";

export const redditApi = createApi({
  reducerPath: "redditApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.reddit.com",
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPostsBySubreddit: builder.query<RedditPost[], string>({
      // use subreddit url for query
      query: (subredditTitle) =>
        `/r/${subredditTitle}/search.json?q=nepal&restrict_sr=1&sort=new`,
      transformResponse: (response: RedditResponse) =>
        response.data.children.map((child) => child.data),
    }),
  }),
});

export const { useGetPostsBySubredditQuery } = redditApi;
