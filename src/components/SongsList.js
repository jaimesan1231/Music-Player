import React from "react";
import { connect } from "react-redux";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { buscar_canciones, play_cancion } from "../actions/artistActions";

import "./styles/SongsList.css";

function SongsList(props) {
  return (
    <div className="songsList">
      <span className="songsList__title">Resultados</span>
      <div className="songs__container">
        {props.songs.map((item) => {
          return (
            <div key={item.id} className="album">
              <div className="album__description">
                <img src={item.cover_medium} alt="" className="album__images" />
                <button
                  className="button__play"
                  onClick={() => {
                    props.play_cancion(item.artist.name, item.title);
                  }}
                >
                  <PlayArrowIcon className="play__icon" />
                </button>

                <div className="album__text">
                  <span id="title" className="title__album">
                    {item.title}
                  </span>
                  <span id="artist" className="artist__album">
                    {item.artist.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    songs: state.songs,
    position: state.position,
  };
};
const mapDispatchToProps = {
  buscar_canciones,
  play_cancion,
};

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
