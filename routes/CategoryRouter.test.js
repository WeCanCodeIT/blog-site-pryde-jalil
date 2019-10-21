const app = require("../app");
const supertest = require("supertest");
const categoryController = require("../controllers/CategoryController");

const underTest = supertest(app);

describe("GET /category", () => {
    test("should have an HTTP status code of 200", () => {
      underTest
        .get("/category")
        .expect(200)
        .end((err, res) => {
          done();
        });
    });
  
    test("should call Controller.renderAll method once", () => {
        categoryController.renderAll = jest.fn();
      underTest.get("/author").end((err, res) => {
        expect(categoryController.renderAll).toHaveBeenCalledTimes(1);
        done();
      });

    
    });

    test("should call Controller.renderAll method once", () => {
        categoryController.categoryPost = jest.fn();
      underTest.get("/category/1").end((err, res) => {
        expect(categoryController.categoryPost).toHaveBeenCalledTimes(1);
        done();
      });

    
    });


  });