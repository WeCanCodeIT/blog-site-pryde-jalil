const tagService = require('./tag-service')
const Tags = require('../models/TagSql')

describe("tag-service", () => {
    describe("addTag", () => {
      test("Should call create from sequelize model", () => {
        Tags.create = jest.fn(() => [])
  
        tagService.addTag()
  
        expect(Tags.create).toHaveBeenCalledTimes(1)
      })
    })
    describe("findTags", () => {
        test("Should call findall from sequelize model", () => {
          Tags.findAll = jest.fn(() => [])
    
          tagService.findTags()
    
          expect(Tags.findAll).toHaveBeenCalledTimes(1)
        })
      })

      describe("tagPost", () => {
        test("Should call findByPK from sequelize model", () => {
          Tags.findByPk = jest.fn(() => [])
    
          tagService.tagPost()
    
          expect(Tags.findByPk).toHaveBeenCalledTimes(1)
        })
      })

  })