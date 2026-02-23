import React, { useState} from "react";
import './communityNavigator.css';
import CommunitiesList from "../communities-list/communitiesList";
import { FaChevronDown } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";



const CommunitiyNavigator= (props) => {
    const {subreddits, selectSubreddit, selectedSubreddit} = props;
    const [dropVisible, setDropVisible] = useState(false);

    const changeVisibility = () => {
        setDropVisible((prev) => !prev)
    }

   
    return(
        <div className="communities-nav">
           <div className="communities-card">
                
                <div className="dropdown-wrapper">
                    <button className="dropdown-button" onClick={changeVisibility}>
                        <span className="dropdown-icon-wrap"><FaListUl className="dropdown-icon"/></span>
                        <span>Select community</span>
                        <span className="chevron-wrapper"><FaChevronDown className={`${dropVisible ? 'chevron up' : 'chevron'}`}/></span>
                    </button>
                    {dropVisible && 
                        (<div className="dropdown">
                            <CommunitiesList subreddits={subreddits} 
                                             selectSubreddit={selectSubreddit} 
                                             selectedSubreddit={selectedSubreddit}
                                             changeVisibility={changeVisibility}/>
                        </div>)}
                    
                </div>
                <div className="selected-community">
                    <span className="community-avatar">
                        <div className="community-icon-wrapper" style={{backgroundColor: selectedSubreddit.color}}>
                            {selectedSubreddit.iconURL && <img className="community-icon" alt="" src={selectedSubreddit.iconURL}></img>}
                        </div>
                    </span>
                    {selectedSubreddit.softName}
                    </div>
            </div>
            {dropVisible && <div className="dropdownCover"></div>}
        </div>
    )
}


export default CommunitiyNavigator;