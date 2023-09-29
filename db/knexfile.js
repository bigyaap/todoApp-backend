// Update with your config settings.

const { db_dev, db, db_dev_user, db_dev_pass } = require("../utils/config");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    // development: {
    //     client: 'postgresql',
    //     connection: {
    //         database: db_dev,
    //         user: db_dev_user,
    //         password: db_dev_pass
    //     },
    //     pool: {
    //         min: 2,
    //         max: 10
    //     },
    //     migrations: {
    //         tableName: 'knex_migrations'
    //     }
    // },
    development: {
        client: 'pg',
        connection: {
            connectionString: db,
            ssl: { rejectUnauthorized: false }, // Required for ElephantSQL
        },
    },
};
