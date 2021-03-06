import * as APIUtil from '../util/setlist_api_util';
import { setListFilter, formatSongsArray } from '../reducers/selectors';
import { createSongs } from './songActions';

export const RECEIVE_SETLIST = 'RECEIVE_SETLIST';
export const RECEIVE_SETLISTS = 'RECEIVE_SETLISTS';
export const SET_AS_PLAYING = 'SET_AS_PLAYING';
export const SET_NOT_PLAYING = 'SET_NOT_PLAYING';
export const START_FETCHING_SETLISTS = 'START_FETCHING_SETLISTS';

export const startFetchingSetlists = () => ({
  type: START_FETCHING_SETLISTS,
});

export const receiveSetlist = nestedSetlist => ({
  type: RECEIVE_SETLIST,
  setlist: nestedSetlist[0],
});

export const receiveSetlists = setlists => ({
  type: RECEIVE_SETLISTS,
  setlists,
});


export const setAsPlaying = setlistId => ({
  type: SET_AS_PLAYING,
  setlistId,
});

export const setNotPlaying = setlistId => ({
  type: SET_NOT_PLAYING,
  setlistId,
});

export const fetchSetlist = setlistId => (dispatch) => {
  dispatch(startFetchingSetlists());
  return APIUtil.fetchSetlist(setlistId).then((nestedSetlist) => {
    return dispatch(receiveSetlist(nestedSetlist));
  });
};

export const fetchSetlists = () => (dispatch) => {
  return APIUtil.fetchSetlists().then(
    setlists => dispatch(receiveSetlists(setlists)),
  );
};

export const createSetlist = setlist => (dispatch) => {
  return APIUtil.createSetlist(setListFilter(setlist)).then(
    (nestedSetlist) => {
      dispatch(receiveSetlist(nestedSetlist.returning));

      const setlistId = nestedSetlist.returning[0].id;

      const formattedSongsArray = formatSongsArray(// make a selector!!!
        setlist,
        setlistId,
      );
      debugger
      dispatch(createSongs(formattedSongsArray)); // TODO: make this action!!!
    },
  );
};
