export const nowPlayingSelector = (setlists) => {
  const filteredLists = {};

  Object.keys(setlists).map((key) => {
    if (setlists.key.nowPlaying) {
      filteredLists[key] = setlists.key;
    }
  });

  return filteredLists;
};
