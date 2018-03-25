import * as APIUtil from '../util/band_api_util';

export const RECEIVE_BANDS = 'RECEIVE_BANDS';
export const RECEIVE_BAND = 'RECEIVE_BAND';

export const receiveBands = bands => ({
  type: RECEIVE_BANDS,
  bands,
});

export const receiveBand = band => ({
  type: RECEIVE_BAND,
  band,
});

export const createBand = band => (dispatch) => {
  APIUtil.createBand(band).then(
    response => dispatch(receiveBand(response.returning)),
  );
};

export const getBands = () => (dispatch) => {
  APIUtil.fetchBands().then(
    bands => dispatch(receiveBands(bands)),
  );
};

export const getBand = bandId => (dispatch) => {
  APIUtil.fetchBand(bandId).then(
    nestedBand => dispatch(receiveBand(nestedBand[0])),
  );
};

// Format band like this
// there *is* a default for imgUrl
// band: {
//   managerId: 1,
//     imgUrl: "asdasdasdasdasd",
//       name: "band name"
// }

window.getBand = getBand;
window.getBands = getBands;
window.createBand = createBand;

// const band = {
//   managerId: 1,
//     imgUrl: '',
//       name: "ya mama"
// }