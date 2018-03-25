import { fetchBands, fetchBand } from '../util/band_api_util';

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

export const getBands = () => (dispatch) => {
  fetchBands().then(
    bands => dispatch(receiveBands(bands)),
  );
};

export const getBand = () => (dispatch) => {
  fetchBand().then(
    band => dispatch(receiveBand(band)),
  );
};

// Format band like this
// there *is* a default for imgUrl
// band: {
//   managerId: 1,
//     imgUrl: "asdasdasdasdasd",
//       name: "band name"
// }