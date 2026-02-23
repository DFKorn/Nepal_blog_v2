import "./main.css";
import React, { useEffect, useMemo, useState } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import Post from "../post/post";
import CommunitiyNavigator from "../community-nav/communityNavigator";
import PostLoading from "../post/postLoading";

import { useAppSelector } from "../../hooks/hooks";
import { selectActiveSubreddit } from "../../state/subreddits/subredditSelectors";
import { useGetPostsBySubredditQuery } from "../../state/posts/redditApiSlice";

const Main = () => {
  // we only need the active subreddit to load posts
  const activeSubreddit = useAppSelector(selectActiveSubreddit);

  // RTK Query сам следит за изменением activeSubreddit.url
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useGetPostsBySubredditQuery(activeSubreddit.title);

  console.log("Active subreddit:", activeSubreddit, "Posts:", posts);

  return (
    <main>
      <CommunitiyNavigator />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post, index) => (
          <Post key={post.id} post={post} index={index} />
        ))
      )}

      <div className="more-wrapper">
        <a
          className="more-link"
          href={`https://www.reddit.com/r/${activeSubreddit.url}/search?q=nepal&restrict_sr=1&sort=new`}
        >
          View More on r/{activeSubreddit.softName}
        </a>
      </div>
    </main>
  );
};

export default Main;
