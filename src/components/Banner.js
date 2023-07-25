import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { connect } from "react-redux";
import "./styles/Banner.css";

function Banner(props) {
  return (
    <div className="body_banner">
      <div className="body_banerAlbum">
        <img
          className="body_banerImg"
          src={props.songs[0]?.cover_medium}
          alt=""
        />
      </div>
      <div className="album_description">
        <div className="album_descriptionTexto">
          <div className="parrafo">
            <p className="banner_cantante">{props.songs[0]?.title}</p>
            <p className="banner_subtitle">
              Lo mejor de {props.songs[0]?.artist.name}
            </p>
          </div>
          <div className="parrafo">
            <p className="banner_descipcion">
              Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de
              mayo de 1998), conocida simplemente como Adele, es una cantante,
              compositora y multinstrumentalista británica. 8
            </p>
          </div>
          <div className="buttons">
            <button className="button_reproducir">Reproducir</button>
            <button className="button_seguir">Seguir</button>
            <MoreHorizIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    currentSongs: state.currentSongs,
  };
};
export default connect(mapStateToProps, null)(Banner);
