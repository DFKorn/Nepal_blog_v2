import React from "react";
import "./communitiesList.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setSelectedSubreddit } from "../../state/subreddits/subredditsSlice";
import { selectAllSubreddits } from "../../state/subreddits/subredditSelectors";

const CommunitiesList = ({ closeDropdown }: { closeDropdown: () => void }) => {
  const dispatch = useAppDispatch();
  const subreddits = useAppSelector(selectAllSubreddits);

  const handleSelect = (id: string) => {
    dispatch(setSelectedSubreddit(id));
    closeDropdown(); // close dropdown after selection
  };

  return (
    <ul className="communities-list">
      {subreddits.map((subreddit) => (
        <li className="community" key={subreddit.id}>
          <button
            type="button"
            className="community-button"
            onClick={() => handleSelect(subreddit.id)}
          >
            <span className="community-avatar">
              <div
                className="community-icon-wrapper"
                style={{ backgroundColor: subreddit.color }}
              >
                {subreddit.iconURL && (
                  <img
                    className="community-icon"
                    alt=""
                    src={subreddit.iconURL}
                  />
                )}
              </div>
            </span>
            {subreddit.softName}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CommunitiesList;
