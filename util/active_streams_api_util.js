let url = "https://data.blockbusting65.hasura-app.io/v1/query/";

export const createActiveStream = (activeStream) => {
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
      "table": "active_streams",
      "objects": [
        {
          "setlist_id": activeStream.setlistId,
          "session_id": activeStream.sessionId,
          "active_song_id": activeStream.activeSongId
        }
      ],
      "returning": [
        "id",
        "setlist_id",
        "session_id",
        "active_song_id"
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

export const updateActiveStream = (activeStream) => {
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
      "table": "active_streams",
      "where": {
        "id": {
          "$eq": activeStream.id
        }
      },
      "$set": {
        "setlist_id": activeStream.setlistId,
        "session_id": activeStream.sessionId,
        "active_song_id": activeStream.activeSongId
      },
      "returning": [
        "setlist_id",
        "session_id",
        "active_song_id"
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

export const fetchActiveStream = (activeStreamId) => {
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
      "table": "active_streams",
      "columns": [
        "id",
        "setlist_id",
        "session_id",
        "active_song_id",
        {
          "name": "setlist",
          "columns": [
            "id",
            "name",
            "band_id",
            "description",
            "scheduled_date"
          ]
        },
        {
          "name": "active_song",
          "columns": [
            "id",
            "setlist_id",
            "file_url",
            "title",
            "ord",
            "archive_id"
          ]
        }
      ],
      "where": {
        "id": {
          "$eq": activeStreamId
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

export const fetchActiveStreamsBySessionId = (sessionId) => {
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
      "table": "active_streams",
      "columns": [
        "id",
        "setlist_id",
        "session_id",
        "active_song_id",
        {
          "name": "setlist",
          "columns": [
            "id",
            "name",
            "band_id",
            "description",
            "scheduled_date"
          ]
        },
        {
          "name": "active_song",
          "columns": [
            "id",
            "setlist_id",
            "file_url",
            "title",
            "ord",
            "archive_id"
          ]
        }
      ],
      "where": {
        "session_id": {
          "$eq": sessionId
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

export const fetchActiveStreamsBySetlistId = (setlistId) => {
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
      "table": "active_streams",
      "columns": [
        "id",
        "setlist_id",
        "session_id",
        "active_song_id",
        {
          "name": "setlist",
          "columns": [
            "id",
            "name",
            "band_id",
            "description",
            "scheduled_date"
          ]
        },
        {
          "name": "active_song",
          "columns": [
            "id",
            "setlist_id",
            "file_url",
            "title",
            "ord",
            "archive_id"
          ]
        }
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

export const deleteActiveStream = (activeStreamId) => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "credentials": "include"
  };

  let body = {
    "type": "delete",
    "args": {
      "table": "active_streams",
      "where": {
        "id": {
          "$eq": activeStreamId
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

