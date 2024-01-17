import React from "react";
import "../styles/LeftMenu.css";
import { FaSpotify, FaEllipsis } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa6";
import {MenuList} from "./MenuList";
import {Menu} from "./Menu";
import { TrackList } from "./TrackList";
import Playlists from "./Playlists";

function LeftMenu() {
  return (
    <div className="leftMenu">
     <div className="logoContainer">
        <i><FaSpotify /></i>
        <h2>Spotify</h2>
        <i><FaEllipsis/></i>
    </div>
    <div className="searchBox">
        <input type="text" placeholder="Search..."/>
        <i className="searchIcon">
         <FaSearchengin/>
         </i>
    </div>
    <Menu title={'Menu'} menuObject={MenuList}/>

    <Playlists/>
    <TrackList/>
    
    
  </div>
  );
}

export {LeftMenu};