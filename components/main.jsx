
import React from 'react';
import ReactDOM from 'react-dom';
import '@opentok/client';
import OpenTok from 'opentok';
import configureStore from '../store/index';

import Root from './Root';

import {
  API_KEY,
  SESSION_ID,
  TOKEN,
  API_SECRET
} from '../config/config';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
});
//
//
// if (API_KEY && TOKEN && SESSION_ID && (5 > 10)) {
//   renderApp({
//     apiKey: API_KEY,
//     sessionId: SESSION_ID,
//     token: TOKEN,
//   });
// } else {
//   const ot = new OpenTok(API_KEY, API_SECRET);
//
//   const maybePromise = ot.createSession((err, session) => {
//     if (err) return console.log(err);
//
//     console.log(session.sessionId);
//   })
//
//   debugger
// }
