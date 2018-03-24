const express = require('express');
const serverConfig = require('../config/server');
const app = express();

app.use(express.static('public'));

app.listen(serverConfig.port, () => {
  console.info(`Running on ${serverConfig.port}`);
});