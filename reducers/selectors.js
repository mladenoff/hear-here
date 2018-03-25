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
