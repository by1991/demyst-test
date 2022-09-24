var express = require("express");
var app = express();

app.get("/initiateAppplication", function(req, res) {
    result = {
        ApplicationId: 123,
        IsSuccess: true
    }

    res.send(JSON.stringify(result));
});


app.listen(4000);