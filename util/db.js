// src/util/database.js

const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'blog', // db name
  'root', // db username
  'password', // db password
  { // config object
    dialect: 'mysql', // type of db
    host: 'localhost', // db hosting location
    // insecureAuth: 'true'
  }
)

module.exports = sequelize;