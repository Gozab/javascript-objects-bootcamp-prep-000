var playlist = {"Aphex Twin": "Flim"};
//Object.assign({playlist}, {"Aphex Twin": "Flim"})

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  
  return playlist;
}

updatePlaylist(playlist, "Lost Tribe", Gamemaster);