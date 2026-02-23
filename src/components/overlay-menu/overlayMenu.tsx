import React from "react";
import "./overlayMenu.css";
import Telegram from "../../resources/telegram-brands.svg?react";
import Vk from "../../resources/vk-brands.svg?react";
import YouTube from "../../resources/youtube-square-brands.svg?react";

const OverlayMenu = () => {
  return (
    <div className="overlay-menu">
      <nav className="overlay-navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://dfkorn.github.io/nepal/about/about.html">
              About us
            </a>
          </li>
          <li>
            <a href="https://www.reddit.com/search/?q=nepal">More</a>
          </li>
        </ul>
      </nav>
      <footer className="overlay-footer">
        <div className="socials">
          <a href="https://web.telegram.org" className="social-link">
            <Telegram title="Telegram" className="social-icon" />
          </a>
          <a href="https://vk.com/" className="social-link">
            <Vk title="vk" className="social-icon" />
          </a>
          <a href="https://www.youtube.com/" className="social-link">
            <YouTube className="social-icon" title="YouTube" />
          </a>
        </div>
        <div className="overlay-footer-logo">
          <a href="https://dfkorn.github.io/nepal" className="logo">
            NepalTravel
          </a>
        </div>
      </footer>
    </div>
  );
};

export default OverlayMenu;
