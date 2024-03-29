const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "ab019016",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "ab019016",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};

