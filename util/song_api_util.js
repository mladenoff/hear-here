let url = "https://data.blockbusting65.hasura-app.io/v1/query/";

const createSong = (song) => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "credentials": "include"
  };

  let body = {
    "type": "insert",
    "args": {
      "table": "songs",
      "objects": [
        {
          "setlist_id": song.setlistId,
          "file_url": song.fileUrl,
          "title": song.title,
          "ord": song.ord
        }
      ],
      "returning": [
        "id",
        "setlist_id",
        "file_url",
        "title",
        "ord"
      ]
    }
  };

  requestOptions.body = JSON.stringify(body);

  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

const fetchSong = (id) => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "credentials": "include"
  };

  let body = {
    "type": "select",
    "args": {
      "table": "songs",
      "columns": [
        "id",
        "setlist_id",
        "file_url",
        "title",
        "ord"
      ],
      "where": {
        "id": {
          "$eq": id
        }
      }
    }
  };

  requestOptions.body = JSON.stringify(body);

  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

const fetchSetlists = (setlistId) => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "credentials": "include"
  };

  let body = {
    "type": "select",
    "args": {
      "table": "songs",
      "columns": [
        "id",
        "setlist_id",
        "file_url",
        "title",
        "ord"
      ],
      "where": {
        "setlist_id": {
          "$eq": setlistId
        }
      }
    }
  };

  requestOptions.body = JSON.stringify(body);

  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

