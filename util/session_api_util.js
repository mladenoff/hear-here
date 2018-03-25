export const createSession = (user) => {
  // Please do not use fetchUser. This is a helper function for logging in
  const fetchUser = (hasuraId) => {
    let url = "https://data.blockbusting65.hasura-app.io/v1/query/";
    let requestOptions = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
      },
      "credentials": "include"
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
          "username"
        ],
        "where": {
          "hasura_id": {
            "$eq": hasuraId
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

  let url = "https://auth.blockbusting65.hasura-app.io/v1/login/";
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
        return fetchUser(hasuraUser.hasura_id);
      });
    }).then(function (databaseUser) {

      return databaseUser[0];
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

export const deleteSession = () => {
  let url = "https://auth.blockbusting65.hasura-app.io/v1/user/logout/";
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "credentials": 'include'
  };

  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};
