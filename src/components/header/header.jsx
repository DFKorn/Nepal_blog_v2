import React from "react";
import "./header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = (props) => {
  const {overlay, toggleOverlay} = props;

  const handleClick = () => {
    toggleOverlay();
  }

  return (
    <div className="header">
      <Link className="blog-logo" to="/" reloadDocument>
        NepalTravelBlog
      </Link>
      <button className="mobile-button" onClick={handleClick}>
        {!overlay? (
          <AiOutlineMenu className="svg-menu-icon" />
        ) : (
          <AiOutlineClose className="svg-menu-icon active" />
        )}
      </button>
      <nav className="header-nav">
        <a
          className="about"
          href="https://dfkorn.github.io/nepal/about/about.html"
        >
          About us
        </a>
        <a className="logo" href="https://dfkorn.github.io/nepal/index.html">
          NepalTravel
        </a>
      </nav>
    </div>
  );
};

export default Header;
