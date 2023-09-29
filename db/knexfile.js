// Update with your config settings.

const { db_dev, db, db_dev_user, db_dev_pass } = require("../utils/config");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'pg',
        connection: {
            connectionString: 'postgres://mvdcpmhr:fbq0hRVkIRIvYIJwvbAPPgW41aFYvpYS@john.db.elephantsql.com/mvdcpmhr',
            ssl: { rejectUnauthorized: false }, // Required for ElephantSQL
        },
    },
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
    // production: {
    //     client: 'pg', // Use the PostgreSQL client
    //     connection: {
    //         connectionString: db, // ElephantSQL connection string
    //         ssl: { rejectUnauthorized: false }, // Enable SSL for secure connections
    //     },
    //     pool: {
    //         min: 2, // Minimum number of database connections
    //         max: 10, // Maximum number of database connections
    //     },
    //     migrations: {
    //         directory: './migrations', // Directory for migration files
    //     },
    // },
    production: {
        client: 'pg',
        connection: {
            connectionString: 'postgres://mvdcpmhr:fbq0hRVkIRIvYIJwvbAPPgW41aFYvpYS@john.db.elephantsql.com/mvdcpmhr',
            ssl: { rejectUnauthorized: false }, // Required for ElephantSQL
        },
    },
};
