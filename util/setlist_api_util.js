let url = "https://data.blockbusting65.hasura-app.io/v1/query/";

 export const createSetlist = (setlist) => {
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
      "table": "setlists",
      "objects": [
        {
          "name": setlist.name,
          "band_id": setlist.bandId,
          "description": setlist.description,
          "scheduled_date": setlist.scheduled_date
        }
      ],
      "returning": [
        "id",
        "name",
        "band_id",
        "description",
        "scheduled_date"
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

 export const fetchSetlist = (id) => {
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
      "table": "setlists",
      "columns": [
        "id",
        "name",
        "band_id",
        "description",
        "scheduled_date",
        {
          "name": "songs",
          "columns": [
            "id",
            "title",
            "archive_id"
          ]
        }
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


 export const fetchSetlists = (bandId) => {
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
      "table": "setlists",
      "columns": [
        "id",
        "name",
        "band_id",
        "description",
        "scheduled_date",
        {
          "name": "songs",
          "columns": [
            "id",
            "title",
            "archive_id"
          ]
        }
      ],
      "where": {
        "band_id": {
          "$eq": bandId
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
