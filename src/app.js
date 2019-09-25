const express = require('express');
const cors = require('cors');

const graphqlRoute = require('./routes/graphql');

const app = express();

app.use(cors());
app.use(graphqlRoute);

module.exports = app;
