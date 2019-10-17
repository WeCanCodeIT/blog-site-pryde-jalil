const Sequelize = require('sequelize')

const sequelize = require('../util/db')
const Post = require("../models/PostSql");

const Tags = sequelize.define('tags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Post.belongsToMany(Tags, {through: 'tag_post'});
Tags.belongsToMany(Post, {through: 'tag_post' });

module.exports = Tags;