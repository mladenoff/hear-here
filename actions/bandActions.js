import * as APIUtil from '../util/band_api_util';

export const RECEIVE_BANDS = 'RECEIVE_BANDS';
export const RECEIVE_BAND = 'RECEIVE_BAND';

export const receiveBands = bands => ({
  type: RECEIVE_BANDS,
  bands,
});

export const receiveBand = nestedBand => ({
  type: RECEIVE_BAND,
  band: nestedBand[0],
});

export const createBand = band => (dispatch) => {
  APIUtil.createBand(band).then(
    response => dispatch(receiveBand(response.returning)),
  );
};

export const fetchBands = () => (dispatch) => {
  APIUtil.fetchBands().then(
    bands => dispatch(receiveBands(bands)),
  );
};

export const fetchBand = bandId => (dispatch) => {
  APIUtil.fetchBand(bandId).then(
    nestedBand => dispatch(receiveBand(nestedBand)),
  );
};

// Format band like this
// there *is* a default for imgUrl
// band: {
//   managerId: 1,
//     imgUrl: "asdasdasdasdasd",
//       name: "band name"
// }

window.fetchBand = fetchBand;
window.fetchBands = fetchBands;
window.createBand = createBand;

// const band = {
//   managerId: 1,
//     imgUrl: '',
//       name: "ya mama"
// }
