import * as SearchAPIUtil from '../util/searchAPIUtil';


export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const executeSearch = query => dispatch => {
  SearchAPIUtil.search(query).then(
    searchResults => dispatch(receiveResults(searchResults))
  );
};