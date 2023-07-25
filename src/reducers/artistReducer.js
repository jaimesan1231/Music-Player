const default_artist_state = {
  artist: "adele",
  songs: [],
  currentSongs: [],
};

const artist_reducer = (state = default_artist_state, action) => {
  switch (action.type) {
    case "BUSCAR_CANCIONES": {
      return {
        artist: action.payload,
        songs: action.payloadSongs,
      };
    }
    case "TRAER_CANCIONES": {
      return {
        songs: action.payloadSongs,
        currentSongs: action.payloadCurrentSongs,
      };
    }
    case "PLAY_SONG": {
      return {
        ...state,
        currentSongs: action.payloadCurrentSong,
      };
    }
    default:
      return state;
  }
};

export default artist_reducer;
