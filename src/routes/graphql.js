const express = require('express');
const express_graphql = require('express-graphql');
const schema = require('../graphql/schema');
const root = require('../graphql/resolver');

const router = express.Router();

router.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

module.exports = router;
