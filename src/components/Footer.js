import React, { useState, useEffect } from "react";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { connect } from "react-redux";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import { Grid, Slider } from "@material-ui/core";

import "./styles/Footer.css";

function Footer(props) {
  const [position, setPosition] = useState(0);
  const [isPLay, setIsPlay] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    setPosition(0);
    setIsPlay(true);
    if (props.currentSongs.length > 0) {
      playSong();
    }
  }, [props]);
  const changeVolume = (event, newValue) => {
    setVolume(newValue);
    document.getElementById("current_song").volume = volume / 100;
  };
  const nextSong = async () => {
    if (position < props.currentSongs.length - 1) {
      setPosition(position + 1);
      const nextSong = await document.getElementById("current_song");
      nextSong.play();
    }
  };
  const prevSong = async () => {
    if (position > 0) {
      setPosition(position - 1);
      const prevSong = await document.getElementById("current_song");
      prevSong.play();
    }
  };
  const playSong = () => {
    document.getElementById("current_song")?.play();
  };
  const reanudeSong = () => {
    document.getElementById("current_song").play();
    setIsPlay(!isPLay);
  };
  const pauseSong = () => {
    document.getElementById("current_song").pause();
    setIsPlay(!isPLay);
  };

  return !props.currentSongs.length > 0 ? (
    <div className="footer"></div>
  ) : (
    <div className="footer">
      <div className="footer_izquierda">
        {
          <img
            className="footer_albumImagen"
            src={props.currentSongs[position]?.album.cover}
            alt=""
          />
        }
        <div className="footer_cancionInfo">
          <h4>{props.currentSongs[position]?.title}</h4>
          <p>
            {props.currentSongs[position]?.artist.name}
            {props.currentSongs[position]?.album.title}
          </p>
        </div>
      </div>
      <div className="footer_centro">
        <SkipPreviousIcon className="footer_icono" onClick={prevSong} />
        {isPLay ? (
          <PauseCircleOutlineIcon
            className="footer_icono"
            onClick={pauseSong}
          />
        ) : (
          <PlayCircleOutlineIcon
            className="footer_icono"
            onClick={reanudeSong}
          />
        )}

        <SkipNextIcon className="footer_icono" onClick={nextSong} />
        <audio
          id="current_song"
          src={props.currentSongs[position]?.preview}
        ></audio>
      </div>
      <div className="footer_derecha">
        <Grid container spacing={2} justify="flex-end">
          <Grid item xs={4}>
            <Slider
              id="volume_slider"
              aria-labelledby="continuous-slider"
              value={volume}
              onChange={changeVolume}
            />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentSongs: state.currentSongs,
    position: state.position,
  };
};

export default connect(mapStateToProps, null)(Footer);
