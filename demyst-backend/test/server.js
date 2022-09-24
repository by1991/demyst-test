var expect  = require("chai").expect;
var request = require("request");

describe("Web Server API Tests", function() {

    describe("Initiate Appplication API", function() {
        var url = "http://localhost:4000/initiateAppplication";
      it("returns status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
          });
      });
      it("returns the application id", function(done) {
        request(url, function(error, response, body) {
            expect(body).to.equal("{\"ApplicationId\":123,\"IsSuccess\":true}");
            done();
          });
      });
    });
  });