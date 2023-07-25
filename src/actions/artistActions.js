import { getDefaultSongs, playSong } from "../services/Songs";

export const buscar_canciones = (artist, songs) => {
  console.log(artist);
  return {
    type: "BUSCAR_CANCIONES",
    payload: artist,
    payloadSongs: songs,
  };
};

export const traerTodos = () => async (dispatch) => {
  const response = await getDefaultSongs();
  dispatch({
    type: "TRAER_CANCIONES",
    payloadSongs: response.slice(0, 10),
    payloadCurrentSongs: [],
  });
};

export const play_cancion = (artist, album) => async (dispatch) => {
  const response = await playSong(artist, album);
  dispatch({
    type: "PLAY_SONG",
    payloadCurrentSong: response.data,
  });
};
