const Sequelize = require('sequelize')

const sequelize = require('../util/db')
const Author = require('./Author')
const Post = sequelize.define('post', {

    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }

});
Author.belongsToMany(Post,{through: Post});
Post.belongsTo(Author, {through: Author});

module.exports = Post;