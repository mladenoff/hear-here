export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const UPDATE_ACTIVE_SONG = 'UPDATE_ACTIVE_SONG';

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS, songs
});

export const updateActiveSong = songId => ({
  type: UPDATE_ACTIVE_SONG, songId
});
