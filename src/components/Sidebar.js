import React from "react";
import logo from "../images/foxbel-music.png";
import Menu from "./Menu";

import "./styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="" />
      <Menu
        title="Mi Libreria"
        items={["Artistas", "Albums", "Canciones", "Estaciones"]}
      />
      <Menu
        title="Playlist"
        items={["Metal", "Para Bailar", "Rock 90s", "Baldas"]}
      />
    </div>
  );
}

export default Sidebar;
