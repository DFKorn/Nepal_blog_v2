import React from "react";
import './post.css'
import { FaUserCircle } from "react-icons/fa"
import moment from 'moment';



const Post = (props) => {
    const {post, index} = props;
    
    if(!post){
        return (
            <h2>Something went wrong...</h2>
        )
    }

    const postURL = 'https://www.reddit.com'
    const userURL = 'https://www.reddit.com/user/'
    const imgUrl = post?.preview?.images[0].resolutions
    const urlTransform = url => url.replaceAll('amp;','')

    return (
        <article key={post.id}>
            <div className="post-card">
                <div className="post-wrapper">
                    <div className="post-container">
                        <h3 className="post-title">
                            <a href={`${postURL}${post.permalink}`} className="post-title-link">
                                {post.title}
                            </a>
                        </h3>
                        <div className="post-image-container" >
                            <a href={`${postURL}${post.permalink}`} className="post-image-link">
                                <img
                                    style={{backgroundImage: !imgUrl ? '#fff' : `url(${urlTransform(imgUrl[0].url)})`,
                                    backgroundSize:'cover'}}
                                    src={post.url}
                                    alt='' 
                                    loading = {index > 3 ? 'lazy' : 'eager'} 
                                    className="post-image"
                                    srcSet={!imgUrl ? post.url
                                                    : imgUrl.length < 5 ? urlTransform(imgUrl[imgUrl.length-1].url)
                                                                        : `${urlTransform(imgUrl[3].url)} 640w, ${urlTransform(imgUrl[4].url)} 960w`
                                    }
                                    sizes="(max-width: 640px) 200px, 1100px"
                                />  
                            </a>
                        </div>
                        <div className="post-details">
                            <span className="post-by">Posted by</span>
                            <div className="author-details">
                                <a href={`${userURL}${post.author}`} className="autor-link">
                                    <FaUserCircle className="user-icon"/>
                                    <span className="author-username">{post.author}</span>
                                </a>
                            </div>
                            <span className="post-time">{moment.unix(post.created_utc).fromNow()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Post
