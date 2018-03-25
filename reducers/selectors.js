import _ from 'lodash';

export const nowPlayingSelector = (setlists) => {
  const filteredLists = [];

  Object.keys(setlists).map((key) => {
    if (setlists[key].nowPlaying) {
      filteredLists.push(setlists[key]);
    }
  });

  return filteredLists;
};

export const upcomingSelector = (setlists) => {
  const filteredLists = [];

  Object.keys(setlists).map((key) => {
    if (!setlists[key].nowPlaying) {
      filteredLists.push(setlists[key]);
    }
  });

  return filteredLists;
};

export const setListFilter = (setlist) => {
  const allowed = [
    'name',
    'description',
    'scheduled_date',
    'bandId',
  ];

  const filtered = Object.keys(setlist)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = setlist[key];
      return obj;
    }, {});
  return filtered;
};

export const formatSongsArray = (setlist, setlistId) => (
  setlist.songs.map((title, index) => ({
    title,
    ord: index,
    setlist_id: setlistId,
  }))
);

export const filterManagerBands = (bands, managerId) => (
  _.filter(bands, { manager_id: managerId })
);
