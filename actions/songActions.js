import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const UPDATE_ACTIVE_SONG = 'UPDATE_ACTIVE_SONG';

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS, songs
});

export const updateActiveSong = songId => ({
  type: UPDATE_ACTIVE_SONG, songId
});

export const createSongs = formattedSongsArray => (dispatch) => {
  return APIUtil.createSongs(formattedSongsArray).then(
    response => dispatch(receiveSongs(response.returning)),
  );
};
