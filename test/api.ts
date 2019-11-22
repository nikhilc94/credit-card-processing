import chai from "chai";
import chaiHttp from "chai-http";

import app from "../src/server";
let should = chai.should();

chai.use(chaiHttp);

describe("Credit card API routes", () => {
  it("fetches stored credit card information.", done => {
    chai
      .request(app)
      .get("/api/card")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("throws error for invalid credit card.", done => {
    chai
      .request(app)
      .post("/api/card")
      .send({
        name: "Test user",
        cardNumber: "1335628732",
        cardLimit: 2300,
        cardBalance: 0
      })
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it("stores new credit card information.", done => {
    chai
      .request(app)
      .post("/api/card")
      .send({
        name: "Test user",
        cardNumber: "7335828732",
        cardLimit: 2300,
        cardBalance: 0
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
