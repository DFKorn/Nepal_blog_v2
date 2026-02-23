import React from "react";
import './communitiesList.css';



const CommunitiesList = (props) => {
    const {subreddits, selectSubreddit, changeVisibility} = props;

    return(
        <ul className="communities-list">
            {subreddits.map(subreddit => (
                <li className="community" key={subreddit.id}>
                <button type='button' className="community-button" onClick={()=>{selectSubreddit(subreddit.id); changeVisibility()}}>
                    <span className="community-avatar">
                        <div className="community-icon-wrapper" style={{backgroundColor: subreddit.color}}>
                            {subreddit.iconURL && <img className="community-icon" alt="" src={subreddit.iconURL}></img>}
                        </div>
                    </span>
                    {subreddit.softName}
                </button>
            </li>
            ))}
        </ul>
    )
};

export default CommunitiesList;