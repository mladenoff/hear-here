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
    'band_id',
  ];

  const filtered = Object.keys(setlist)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: setlist[key],
      };
    }, {});

  return filtered;
};

export const formatSongsArray = (setlist, setlistId) => (
  setlist.songs.map((songName, index) => ({
    name: songName,
    ord: index,
    setlistId,
  }))
);
