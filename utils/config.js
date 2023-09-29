require('dotenv').config()

const db = process.env.DB;
const db_dev = process.env.DB_DEV;
const db_dev_user = process.env.DB_DEV_USER;
const db_dev_pass = process.env.DB_DEV_PASS;

module.exports = { db, db_dev, db_dev_user, db_dev_pass };