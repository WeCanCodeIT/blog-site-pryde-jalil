const postService = require('./post-service')
const Post = require('../models/PostSql')

describe("post-service", () => {
    describe("addPost", () => {
      test("Should call create from sequelize model", () => {
        Post.create = jest.fn(() => [])
  
        postService.addPost()
  
        expect(Post.create).toHaveBeenCalledTimes(1)
      })
    })
    describe("viewPost", () => {
        test("Should call findallfrom sequelize model", () => {
          Post.findAll = jest.fn(() => [])
    
          postService.viewPosts()
    
          expect(Post.findAll).toHaveBeenCalledTimes(1)
        })
      })
  })