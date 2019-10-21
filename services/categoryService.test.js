const categoryService = require('./category-service')
const Category = require('../models/CategorySql')

describe("category-service", () => {
    describe("findCategory", () => {
        test("Should call findall from sequelize model", () => {
          Category.findAll = jest.fn(() => [])
    
          categoryService.findCategory()
    
          expect(Category.findAll).toHaveBeenCalledTimes(1)
        })
      })

      describe("findSome", () => {
        test("Should call findByPK from sequelize model", () => {
            Category.findByPk = jest.fn(() => [])
    
          categoryService.postCategory()
    
          expect(Category.findByPk).toHaveBeenCalledTimes(1)
        })
      })

  })