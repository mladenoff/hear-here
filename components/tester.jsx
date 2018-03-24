
import React from 'react';
import ReactDOM from 'react-dom';
import '@opentok/client';
import OpenTok from 'opentok';

import App from './App';

import {
  SAMPLE_SERVER_BASE_URL,
  API_KEY,
  SESSION_ID,
  TOKEN,
  API_SECRET
} from '../config/config';

function renderApp(credentials) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <App credentials={credentials} />,
      document.getElementById('root')
    );
  });
}

if (API_KEY && TOKEN && SESSION_ID && (5 > 10)) {
  renderApp({
    apiKey: API_KEY,
    sessionId: SESSION_ID,
    token: TOKEN,
  });
} else {
  const ot = new OpenTok(API_KEY, API_SECRET);

  ot.createSession((err, session) => {
    if (err) return console.log(err);

    console.log(session.sessionId);
  })


  // fetch(SAMPLE_SERVER_BASE_URL + '/session')
  //   .then(data => data.json())
  //   .then(renderApp)
  //   .catch((err) => {
  //     console.error('Failed to get session credentials', err);
  //     alert('Failed to get opentok sessionId and token. Make sure you have updated the config.js file.');
  //   });
}
