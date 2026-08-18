const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "Juan2024",
  database: "property_db",
  connectionLimit: 5
});

module.exports = pool;
