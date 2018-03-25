const SCHEMA_INFO = {
 'band': {table: 'bands', field: 'name'},
  'setlist': { table: 'setlists', field: 'name' },
  'song': { table: 'songs', field: 'title' },
};

export const search = (query, selector = { 'band': true, 'setlist': true, 'song': true}) => {
  const url = 'https://data.blockbusting65.hasura-app.io/v1/query/';
  return fetch(url, buildRequestOptions(query, selector))
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

const buildRequestOptions = (query, selector) => {
  const requestOptions = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json',
    },
    'credentials': 'include'
  };

  const searchArgs = [];
  Object.keys(selector).forEach((selectorKey) => {
    if (selector[selectorKey]) {
      searchArgs.push(buildSeachBy(
        query,
        SCHEMA_INFO[selectorKey].table,
        SCHEMA_INFO[selectorKey].field
      ));
    }
  });

  requestOptions.body = JSON.stringify({
    'type': 'bulk',
    'args': searchArgs
  });
  return requestOptions;
};


const buildSeachBy = (query, table, field) => {
  return {
    'type': 'select',
    'args': {
      'table': `${table}`,
      'columns': [
        '*'
      ],
      'where': {
        [field]: {
          '$like': `%${query}%`
        }
      }
    }
  };
};