const TagsController = require("../controllers/TagsController");
const tagService = require("../services/tag-service");

describe("TagsController", () => {
        test("create tag should be called once and render to tags page", async () =>{
            //arrange
        const requestMock =  {body :{tag: ""}}
        const responseMock = {
            render: jest.fn()
        };
        tagService.findTags = jest.fn(() => []);

        //act
        await TagsController.createTag(requestMock, responseMock);

        //assert
        expect(responseMock.render).toHaveBeenCalledTimes(1)
        expect(responseMock.render).toHaveBeenCalledWith("tags", {tag: [] })
        })

        
         
});