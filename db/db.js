const knex = require('knex')
const knexfile = require('./knexfile') //db configurations

// TODO in prod, use dependency injection
// to create knex instance so db access can be mocked
// for test

// TODO in prod dont access knexfile.development directly
// decide with env vars which config to use
const db = knex(knexfile.production)

module.exports = db;