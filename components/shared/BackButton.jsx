import React from 'react';
import { withRouter } from 'react-router';

const BackButton = ({ history: { goBack } }) => (
  <button onClick={goBack}>
    <img
      className="back-arrow"
      src="./assets/small-back-arrow.png" />
  </button>
);

export default withRouter(BackButton);
