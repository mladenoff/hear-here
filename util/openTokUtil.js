import OpenTok from 'opentok';
const CUSTOM_API_ENDPOINT = "https://api.blockbusting65.hasura-app.io/v1";

export const createSession = () => {
  let url = `${CUSTOM_API_ENDPOINT}/createTokSession`;
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "credentials": "include"
  };


  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

export const fetchSession = (sessionId) => {
  let url = `${CUSTOM_API_ENDPOINT}/fetchSession/${sessionId}`;
  let requestOptions = {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json",
    },
    "credentials": "include"
  };


  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

export const createArchive = (sessionId, songTitle) => {
  let url = `${CUSTOM_API_ENDPOINT}/createArchive/${sessionId}/${songTitle}`;
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "credentials": "include"
  };


  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

export const getArchive = (archiveId) => {
  let url = `${CUSTOM_API_ENDPOINT}/getArchive/${archiveId}`;
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "credentials": "include"
  };


  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

export const stopArchive = ( archiveId ) => {
  let url = `${CUSTOM_API_ENDPOINT}/stopArchive/${archiveId}`;
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "credentials": "include"
  };


  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};