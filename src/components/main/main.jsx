import "./main.css";
import React, { useEffect, useMemo, useState } from "react";
import { getSubredditPosts, subredditsList } from "../../api/reddit";
import 'react-loading-skeleton/dist/skeleton.css'
import Post from "../post/post";
import CommunitiyNavigator from "../community-nav/communityNavigator";
import PostLoading from "../post/postLoading";



const Main = () => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setPostsIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const subredditTitle = sessionStorage.getItem('subredditTitle') ? sessionStorage.getItem('subredditTitle') : 'EarthPorn'
  const [selectedSubredditId, setSelectedSubredditId] = useState(subredditTitle);
  //variable that stores selected subreddit from subreddeits' list(list is imported from reddit.js in api folder)
  const selectedSubreddit = useMemo(() => subredditsList.find(subreddit => subreddit.id === selectedSubredditId),[selectedSubredditId]
  ) 

 
  useEffect(() => {
    // alert("Requested data from server...");
    let unsubscribed = false;
    (async () => {
    try{
        setPostsIsLoading(true);
        setError(false);
        const subredditPosts = await getSubredditPosts(selectedSubreddit.title);
        if (!subredditPosts) {
          throw new Error(`The data is empty`);
        }
        if (!unsubscribed){
          setPosts(subredditPosts);
          sessionStorage.setItem('subredditTitle', selectedSubreddit.title)
        }
      }
      catch(error){
        console.log(error);
        setError(true);
      }
      setPostsIsLoading(false);
    })();

    return () => {
      unsubscribed = true;
    }
  }, [selectedSubreddit]);

  const selectSubreddit = (id) => {
    setSelectedSubredditId(id)
  }


  if(isPostsLoading){
    return(
      <main>
      <CommunitiyNavigator subreddits={subredditsList} 
                           selectSubreddit={selectSubreddit} 
                           selectedSubreddit={selectedSubreddit}
                           />  
      <PostLoading />
      </main>
    )
  }
  if(error){
    return(
      <main>
      <CommunitiyNavigator subreddits={subredditsList} 
                           selectSubreddit={selectSubreddit} 
                           selectedSubreddit={selectedSubreddit}
                           />  
      <div style={{textAlign:'center'}}>
        <h3>Whoops</h3>
        <p>Sorry, something went wrong with our blog. Try to select another community or check back later!</p>
      </div>
      </main>
    )
  }

  
  return (
    <main>
      <CommunitiyNavigator subreddits={subredditsList} 
                           selectSubreddit={selectSubreddit} 
                           selectedSubreddit={selectedSubreddit}
                           />
      {posts.map((post, index)=>(
        <Post 
          key={post.id}
          post = {post}
          index = {index}
        />
      ))}
      <div className="more-wrapper">
        <a className="more-link" href={`https://www.reddit.com/r/${selectedSubreddit.title}/search?q=nepal&restrict_sr=1&sr_nsfw=&sort=new`}>View More</a>
      </div>
    </main>
  );
};

export default Main;
