const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../../client/src'));
console.log(__dirname + '../../client/src');

const clientPath = path.resolve(`${__dirname}/../../client/src/index.html`);
app.get('/', (req, res) => {
  res.sendFile(clientPath);
});

app.use('/api/v1', api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;