const authorService = require('./author-service')
const Author = require('../models/AuthorSql')

describe("author-service", () => {
    describe("authorToAdd", () => {
      test("Should call create from sequelize model", () => {
        Author.create = jest.fn(() => [])
  
        authorService.authorToAdd()
  
        expect(Author.create).toHaveBeenCalledTimes(1)
      })
    })
    describe("findAuthor", () => {
        test("Should call findall from sequelize model", () => {
          Author.findAll = jest.fn(() => [])
    
          authorService.findAuthors()
    
          expect(Author.findAll).toHaveBeenCalledTimes(1)
        })
      })

      describe("findSome", () => {
        test("Should call findByPK from sequelize model", () => {
          Author.findByPk = jest.fn(() => [])
    
          authorService.findSome()
    
          expect(Author.findByPk).toHaveBeenCalledTimes(1)
        })
      })

  })