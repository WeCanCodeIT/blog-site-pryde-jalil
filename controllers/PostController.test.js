const PostController = require("../controllers/PostController");
const postService = require("../services/post-service");

describe("PostController", () => {
        test("post should redirect", async () => {
        //arrange
        const requestMock = {body: {title:"", content:"",  category:"3", tag:"", author: ""}}
        const responseMock = {
            render: jest.fn(),
            redirect: jest.fn()
        };
        postService.addPost = jest.fn();

        //act
        await PostController.createPost(requestMock, responseMock);

        //assert
        expect(responseMock.redirect).toHaveBeenCalledWith("/post")
        })
    });