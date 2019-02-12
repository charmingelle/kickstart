const app = require("../server");
const request = require("supertest");

describe("Orders", () => {
  describe("POST", () => {
    it("should create new order", () => {
      request(app)
        .post("/api/v1/orders")
        .send({
          userId: 'test-id',
          amount: 10,
          price: 9.99
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err, res) => {
          if (err) throw err;

          res.body.should.have.properties({
            amount: 10,
            price: 9.99
          });
        });
    });

    it("should throw error", () => {
      request(app)
        .post("/api/v1/orders")
        .send({
          amount: 10,
          price: 9.99
        })
        .expect("Content-Type", /json/)
        .expect(422)
        .end((err, res) => {
          if (err) throw err;

          res.body.should.have.properties({
            error: "no user id"
          });
        });
    });
  });
});
