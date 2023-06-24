import React from "react";
import "../styles/LeftMenu.css";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import TrackList from "./TrackList";
function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
          <img src={require('../img/logo.png')} alt="Nirvana"/>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <Menu title={"Menu"} listObject={MenuList} />
      <MenuPlayList />
      <TrackList trackName={"Take On Me"} artistName={"A-ha"} />
    </div>
    </div>
  );
}

export { LeftMenu };