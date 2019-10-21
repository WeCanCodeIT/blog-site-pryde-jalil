const CategoryController = require("../controllers/CategoryController");
const categoryService = require("../services/category-service");

describe("CategoryController", () => {
        test("render all category ", async () =>{
            //arrange
        const requestMock =  {body :{author: ""}}
        const responseMock = {
            render: jest.fn()
        };
        categoryService.findCategory = jest.fn(() => []);

        //act
        await CategoryController.renderAll(requestMock, responseMock);

        //assert
        
        expect(responseMock.render).toHaveBeenCalledWith("category", {category: [] })
        })

        
         
});