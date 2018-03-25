let url = "https://data.blockbusting65.hasura-app.io/v1/query/";

export const createSong = (song) => {
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
          "ord": song.ord,
          "archive_id": song.archiveId
        }
      ],
      "returning": [
        "id",
        "setlist_id",
        "file_url",
        "title",
        "ord",
        "archive_id"
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

export const updateSong = (song) => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "credentials": "include"
  };

  let body = {
    "type": "update",
    "args": {
      "table": "songs",
      "where": {
        "id": {
          "$eq": song.id
        }
      },
      "$set": {
        "setlist_id": song.setlistId,
        "file_url": song.fileUrl,
        "title": song.title,
        "ord": song.ord,
        "archive_id": song.archiveId
      },
      "returning": [
        "id",
        "setlist_id",
        "file_url",
        "title",
        "ord",
        "archive_id"
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

export const createSongs = (arrayOfSongs) => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "credentials": "include"
  };

  let body = {
    "type": "bulk",
    "args": [
      {
        "type": "insert",
        "args": {
          "table": "songs",
          "objects": arrayOfSongs,
          "returning": [
            "id",
            "setlist_id",
            "file_url",
            "title",
            "ord",
            "archive_id"
          ]
        }
      }
    ]
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

export const fetchSong = (id) => {
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
        "ord",
        "archive_id"
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

export const fetchSongs = (setlistId) => {
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
        "ord",
        "archive_id"
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

