const AuthorController = require("../controllers/AuthorController");
const authorService = require("../services/author-service");

//Test needs reviewed, possible multiple call to serivce//
describe("AuthorController", () => {
        test("create author, and render back to author pagge ", async () =>{
            //arrange
        const requestMock =  {body :{author: ""}}
        const responseMock = {
            render: jest.fn()
        };
        authorService.createAuthor = jest.fn(() => []);
        authorService.findAuthors = jest.fn(() => []);

        //act
        await AuthorController.createAuthor(requestMock, responseMock);

        //assert
        
        expect(responseMock.render).toHaveBeenCalledWith("author", {author: [] })
        })

        
         
});