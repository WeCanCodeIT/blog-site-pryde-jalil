const app = require("../app");
const supertest = require("supertest");
const postController = require("../controllers/PostController");

const underTest = supertest(app);

describe("GET /category", () => {
    test("should have an HTTP status code of 200", () => {
      underTest
        .get("/post")
        .expect(200)
        .end((err, res) => {
          done();
        });
    });
  
    test("should call post.renderAll method once", () => {
        postController.renderAll = jest.fn();
      underTest.get("/post").end((err, res) => {
        expect(postController.renderAll).toHaveBeenCalledTimes(1);
        done();
      });

    
    });

    test("should call Controller.renderAll method once", () => {
        postController.getPostForm = jest.fn();
      underTest.get("/new").end((err, res) => {
        expect(postController.getPostForm).toHaveBeenCalledTimes(1);
        done();
      });

    
    });

    test("should call Controller.createPost method once", () => {
        postController.createPost = jest.fn();
      underTest.post("/").end((err, res) => {
        expect(postController.createPost).toHaveBeenCalledTimes(1);
        done();
      });

    
    });


  });