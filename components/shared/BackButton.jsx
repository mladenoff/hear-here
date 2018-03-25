import React from 'react';
import { withRouter } from 'react-router';

const BackButton = ({ history: { goBack } }) => (
  <button onClick={goBack}>{'<-'}</button>
);

export default withRouter(BackButton);
