import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { connect } from "react-redux";
import { buscar_canciones, traerTodos } from "../actions/artistActions";
import { getSongByName } from "../services/Songs";

import "./styles/Header.css";

function Header(props) {
  useEffect(() => {
    props.traerTodos();
  }, [props]);
  const handleClick = () => {
    getSongs();
  };
  const getSongs = async () => {
    const getSongsList = await getSongByName(
      document.getElementById("artista").value
    );
    props.buscar_canciones(
      document.getElementById("artista").value,
      getSongsList.data.slice(0, 10)
    );
  };
  const onKeyPressed = (e) => {
    if (e.keyCode === 13) {
      document.getElementById("search_button").click();
    }
  };

  return (
    <div className="header" onKeyDown={onKeyPressed}>
      <div className="header__search">
        <input
          id="artista"
          type="text"
          className="header__searchInput"
          placeholder="Buscar"
        />
        <button
          id="search_button"
          className="header__searchIcon"
          onClick={handleClick}
        >
          <SearchIcon />
        </button>
      </div>
      <div className="header__user">
        <AccountCircleIcon />
        <span className="header__userName">Francisco M.</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    songs: state.songs,
  };
};
const mapDispatchToProps = {
  buscar_canciones,
  traerTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
