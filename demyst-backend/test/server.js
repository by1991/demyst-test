var expect = require("chai").expect;
var request = require("request");

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app/server');

chai.use(chaiHttp);

describe("Web Server API Tests", function () {

  // test /initiateAppplication API
  describe('Initiate Appplication API', () => {
    it("it should return the application id", function (done) {
      chai.request(server)
        .get('/initiateAppplication')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.text).to.equal("{\"ApplicationId\":123,\"IsSuccess\":true}");
          done();
        });
    });
  });

  // test /getBalanceSheet API
  describe("Get Balance Sheet API", function () {
    it("it should return the balance sheet", function (done) {
      chai.request(server)
        .get('/getBalanceSheet?provider=Other')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(JSON.parse(res.text).length).to.equal(15);
          done();
        });
    });
  });

  // test /requestDecision API
  describe("Request Decision API", function () {

    it("it should return the final decision with 20% requested amount", function (done) {
      var data = {
        "BalanceSheet": [
          {
            "year": 2022,
            "month": 8,
            "profitOrLoss": -250000,
            "assetsValue": 1234
          },
          {
            "year": 2022,
            "month": 7,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2022,
            "month": 6,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2022,
            "month": 5,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          },
          {
            "year": 2022,
            "month": 4,
            "profitOrLoss": -250000,
            "assetsValue": 1234
          },
          {
            "year": 2022,
            "month": 3,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2022,
            "month": 2,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2022,
            "month": 1,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          },
          {
            "year": 2021,
            "month": 12,
            "profitOrLoss": -250000,
            "assetsValue": 1234
          },
          {
            "year": 2021,
            "month": 11,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2021,
            "month": 10,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2021,
            "month": 9,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          },
          {
            "year": 2021,
            "month": 8,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2021,
            "month": 7,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2021,
            "month": 6,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          }
        ],
        "CompanyName": "test",
        "RequestedAmount": 70000,
        "YearEstablished": 2000
      };

      chai.request(server)
        .post('/requestDecision')
        .send(data)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(JSON.parse(res.text).ApprovedLoanAmount).to.equal(14000);
          done();
        });
    });

    it("it should return the final decision with 60% requested amount", function (done) {
      var data = {
        "BalanceSheet": [
          {
            "year": 2022,
            "month": 8,
            "profitOrLoss": 250000,
            "assetsValue": 1234
          },
          {
            "year": 2022,
            "month": 7,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2022,
            "month": 6,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2022,
            "month": 5,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          },
          {
            "year": 2022,
            "month": 4,
            "profitOrLoss": 250000,
            "assetsValue": 1234
          },
          {
            "year": 2022,
            "month": 3,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2022,
            "month": 2,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2022,
            "month": 1,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          },
          {
            "year": 2021,
            "month": 12,
            "profitOrLoss": 250000,
            "assetsValue": 1234
          },
          {
            "year": 2021,
            "month": 11,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2021,
            "month": 10,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2021,
            "month": 9,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          },
          {
            "year": 2021,
            "month": 8,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2021,
            "month": 7,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2021,
            "month": 6,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          }
        ],
        "CompanyName": "test",
        "RequestedAmount": 70000,
        "YearEstablished": 2000
      };

      chai.request(server)
        .post('/requestDecision')
        .send(data)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(JSON.parse(res.text).ApprovedLoanAmount).to.equal(42000);
          done();
        });
    });

    it("it should return the final decision with 100% requested amount", function (done) {
      var data = {
        "BalanceSheet": [
          {
            "year": 2022,
            "month": 8,
            "profitOrLoss": 250000,
            "assetsValue": 1234
          },
          {
            "year": 2022,
            "month": 7,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2022,
            "month": 6,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2022,
            "month": 5,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          },
          {
            "year": 2022,
            "month": 4,
            "profitOrLoss": 250000,
            "assetsValue": 1234
          },
          {
            "year": 2022,
            "month": 3,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2022,
            "month": 2,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2022,
            "month": 1,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          },
          {
            "year": 2021,
            "month": 12,
            "profitOrLoss": 250000,
            "assetsValue": 1234
          },
          {
            "year": 2021,
            "month": 11,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2021,
            "month": 10,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2021,
            "month": 9,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          },
          {
            "year": 2021,
            "month": 8,
            "profitOrLoss": 1150,
            "assetsValue": 5789
          },
          {
            "year": 2021,
            "month": 7,
            "profitOrLoss": 2500,
            "assetsValue": 22345
          },
          {
            "year": 2021,
            "month": 6,
            "profitOrLoss": -187000,
            "assetsValue": 223452
          }
        ],
        "CompanyName": "test",
        "RequestedAmount": 63204,
        "YearEstablished": 2000
      };

      chai.request(server)
        .post('/requestDecision')
        .send(data)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(JSON.parse(res.text).ApprovedLoanAmount).to.equal(63204);
          done();
        });
    });
  });

});