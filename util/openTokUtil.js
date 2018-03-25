import OpenTok from 'opentok';
import {
  API_KEY,
  API_SECRET
} from '../config/config';

export const createSession = () => {
  const ot = new OpenTok(API_KEY, API_SECRET);

  return new Promise((resolve, reject) => {
    return ot.createSession((err, session) => {
      if (err) return reject(err);

      resolve(session);
    });
  });
};

export const fetchSession = (sessionId) => {
  const ot = new OpenTok(API_KEY, API_SECRET);

  return new Promise((resolve, reject) => {
    const newToken = ot.generateToken(sessionId);

    if (typeof newToken === 'string') resolve(newToken);
    else reject('Could not join');
  });
};

export const createArchive = () => {

};
