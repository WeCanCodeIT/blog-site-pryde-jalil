const Sequelize = require('sequelize')

const sequelize = require('../util/db')
const Post = require("../models/PostSql")

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
Category.hasMany(Post);
Post.belongsTo(Category);

module.exports = Category;