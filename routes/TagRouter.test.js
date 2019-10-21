const app = require("../app");
const supertest = require("supertest");
const tagController = require("../controllers/TagsController");

const underTest = supertest(app);

describe("GET /category", () => {
    test("should have an HTTP status code of 200", () => {
      underTest
        .get("/tag")
        .expect(200)
        .end((err, res) => {
          done();
        });
    });
  
    test("should call create Tag method once", () => {
        tagController.createTag = jest.fn();
      underTest.post("/tag").end((err, res) => {
        expect( tagController.createTag ).toHaveBeenCalledTimes(1);
        done();
      });

    
    });

    test("should call Controller.createPost method once", () => {
        tagController.postTags = jest.fn();
      underTest.get("/1").end((err, res) => {
        expect( tagController.postTag).toHaveBeenCalledTimes(1);
        done();
      });

    
    });


  });