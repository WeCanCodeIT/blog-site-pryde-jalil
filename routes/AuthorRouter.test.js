const app = require("../app");
const supertest = require("supertest");
const AuthorController = require("../controllers/AuthorController");

const underTest = supertest(app);

describe("GET /category", () => {
    test("should have an HTTP status code of 200", () => {
      underTest
        .get("/author")
        .expect(200)
        .end((err, res) => {
          done();
        });
    });
  
    test("should call Controller.renderAll method once", () => {
        AuthorController.renderAll = jest.fn();
      underTest.get("/author").end((err, res) => {
        expect(AuthorController.renderAll).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });