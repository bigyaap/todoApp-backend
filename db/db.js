const knex = require('knex')
const knexfile = require('./knexfile') //db configurations

const db = knex(knexfile.production)

module.exports = db;