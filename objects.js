var playlist = {"Aphex Twin": "Flim"};
//Object.assign({playlist}, {"Aphex Twin": "Flim"})

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  
  return playlist;
}

updatePlaylist(playlist, "Lost Tribe", Gamemaster);

function removeFromPlaylist(obj, key) {
  delete obj.key;
  return playlist;
}

removeFromPlaylist(playlist, "Lost Tribe");