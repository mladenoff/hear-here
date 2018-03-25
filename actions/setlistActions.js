export const SET_AS_PLAYING = 'SET_AS_PLAYING';
export const SET_NOT_PLAYING = 'SET_NOT_PLAYING';

export const setAsPlaying = setlistId => ({
  type: SET_AS_PLAYING,
  setlistId,
});
export const setNotPlaying = setlistId => ({
  type: SET_NOT_PLAYING,
  setlistId,
});
