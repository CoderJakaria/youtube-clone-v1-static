import React, { useState } from "react";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const history = useHistory();

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__menuIcon" />
        <img
          onClick={() => history.push("/")}
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>

      <div className="header__input">
        <input
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <SearchIcon
          onClick={() => history.push(`/search/${inputSearch}`)}
          className="header__inputButton"
        />
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Md Jakaria"
          src="https://yt3.ggpht.com/yti/ANoDKi4FJX2pUomMIC8_dbji-ElbIIgDSzvTOoEoCk0NXA=s108-c-k-c0x00ffffff-no-rj"
        />
      </div>
    </div>
  );
};

export default Header;
