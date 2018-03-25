var url = "https://data.blockbusting65.hasura-app.io/v1/query/";

 export const createBand = (band) => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer 623d47eddd9ad2d0d29b460a3b0a334a89eb180f1a94c6f3"
    }
  };

  let body = {
    "type": "insert",
    "args": {
      "table": "bands",
      "objects": [
        {
          "name": band.name,
          "manager_id": band.managerId,
          "img_url": band.imgUrl
        }
      ],
      "returning": [
        "id",
        "name",
        "manager_id",
        "img_url"
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

 export const fetchBand = (id) => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer 623d47eddd9ad2d0d29b460a3b0a334a89eb180f1a94c6f3"
    }
  };

  let body = {
    "type": "select",
    "args": {
      "table": "bands",
      "columns": [
        "id",
        "name",
        "img_url",
        "manager_id"
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

 export const fetchBands = () => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer 623d47eddd9ad2d0d29b460a3b0a334a89eb180f1a94c6f3"
    }
  };

  let body = {
    "type": "select",
    "args": {
      "table": "bands",
      "columns": [
        "id",
        "name",
        "img_url",
        "manager_id"
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

