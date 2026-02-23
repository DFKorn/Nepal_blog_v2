import React, { useState } from "react";
import "./communityNavigator.css";
import CommunitiesList from "../communities-list/communitiesList";
import { FaChevronDown } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { useAppSelector } from "../../hooks/hooks";
import { selectActiveSubreddit } from "../../state/subreddits/subredditSelectors";

const CommunitiyNavigator = () => {
  const [dropVisible, setDropVisible] = useState<boolean>(false);
  const activeSubreddit = useAppSelector(selectActiveSubreddit);

  const toggleVisibility = () => setDropVisible((prev) => !prev);

  return (
    <div className="communities-nav">
      <div className="communities-card">
        <div className="dropdown-wrapper">
          <button className="dropdown-button" onClick={toggleVisibility}>
            <span className="dropdown-icon-wrap">
              <FaListUl className="dropdown-icon" />
            </span>
            <span>Select community</span>
            <span className="chevron-wrapper">
              <FaChevronDown
                className={dropVisible ? "chevron up" : "chevron"}
              />
            </span>
          </button>

          {dropVisible && (
            <div className="dropdown">
              {/* Передаем только функцию закрытия, список возьмем внутри */}
              <CommunitiesList closeDropdown={() => setDropVisible(false)} />
            </div>
          )}
        </div>

        <div className="selected-community">
          <span className="community-avatar">
            <div
              className="community-icon-wrapper"
              style={{ backgroundColor: activeSubreddit.color }}
            >
              {activeSubreddit.iconURL && (
                <img
                  className="community-icon"
                  alt=""
                  src={activeSubreddit.iconURL}
                />
              )}
            </div>
          </span>
          {activeSubreddit.softName}
        </div>
      </div>
      {dropVisible && (
        <div className="dropdownCover" onClick={toggleVisibility}></div>
      )}
    </div>
  );
};

export default CommunitiyNavigator;
