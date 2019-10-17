const Sequelize = require('sequelize')

const sequelize = require('../util/db')
const Author = require('./AuthorSql')
const Post = sequelize.define('post', {

    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT('long'),
    allowNull: false
  }

});

module.exports = Post;