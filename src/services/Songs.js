export async function getDefaultSongs() {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=adele"
  );
  const responseJson = await response.json();
  return responseJson.data;
}

export async function getSongByName(name) {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${name}`
  );
  const responseJson = await response.json();
  return responseJson;
}

export async function playSong(nombre, album) {
  const response = await fetch(
    `https://api.deezer.com/search?q=artist:"${nombre}"album:"${album}"`
  );
  const responseJson = await response.json();
  return responseJson;
}
