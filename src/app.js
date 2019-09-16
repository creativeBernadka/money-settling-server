const express = require('express');

const graphqlRoute = require('./routes/graphql');

const app = express();

app.use(graphqlRoute);

module.exports = app;
