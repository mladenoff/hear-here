export const createUser = (user) => {
  const makeDatabaseUser = (formUser, hasura_id) => {
    let url = "https://data.blockbusting65.hasura-app.io/v1/query/";
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
        "table": "users",
        "objects": [
          {
            "name": formUser.name,
            "email": formUser.email,
            "img_url": formUser.imgUrl,
            "is_manager": formUser.isManager,
            "username": formUser.username,
            "hasura_id": hasura_id
          }
        ],
        "returning": [
          "id",
          "name",
          "email",
          "img_url",
          "is_manager",
          "username",
          "hasura_id"
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

  let url = "https://auth.blockbusting65.hasura-app.io/v1/signup/";
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "credentials": 'include'
  };

  let body = {
    "provider": "username",
    "data": {
      "username": user.username,
      "password": user.password
    }
  };

  requestOptions.body = JSON.stringify(body);

  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json().then(hasuraUser => {
        return makeDatabaseUser(user, hasuraUser.hasura_id);
      });
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

export const fetchUser = (id) => {
  let url = "https://data.blockbusting65.hasura-app.io/v1/query/";
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
      "table": "users",
      "columns": [
        "id",
        "name",
        "email",
        "img_url",
        "is_manager",
        "username",
        {
          "name": "bands",
          "columns": [
            "id"
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

export const fetchUsers = () => {
  let url = "https://data.blockbusting65.hasura-app.io/v1/query/";
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
      "table": "users",
      "columns": [
        "id",
        "name",
        "email",
        "img_url",
        "is_manager",
        "username",
        {
          "name": "bands",
          "columns": [
            "id"
          ]
        }
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

