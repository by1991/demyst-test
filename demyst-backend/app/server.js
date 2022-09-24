var express = require("express");
var cors = require("cors");
var accountingService = require('./accounting');
var decisionEngine = require('./decision');
var app = express();


// configure cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// TODO: Move to Serverless Function / Lambda
app.get("/initiateAppplication", function (req, res) {
    var result = {
        ApplicationId: 123,
        IsSuccess: true
    }

    res.send(JSON.stringify(result));
});


// TODO: Move to Serverless Function / Lambda
app.get("/getBalanceSheet", function (req, res) {
    var result = null;
    if (req.provider && req.provider == "Xero") {
        // request to Xero accounting software API
        result = accountingService.getXeroBalanceSheet();
    } else if (req.provider && req.provider == "MYOB") {
        // request to Xero accounting software API
        result = accountingService.getMYOBBalanceSheet();
    } else {
        // request to other accounting software API
        result = accountingService.getOtherBalanceSheet();
    }

    res.send(JSON.stringify(result));
});


// TODO: Move to Serverless Function / Lambda
app.post("/requestDecision", function (req, res) {
    var result = null;
    // validate body
    if (req.body && req.body.BalanceSheet && req.body.BalanceSheet.length > 0) {
        var requestedAmount = 0;
        if (req.body.RequestedAmount && parseFloat(req.body.RequestedAmount) > 0) {
            requestedAmount = parseFloat(req.body.RequestedAmount);
        }
        // pre assess
        var preAccessment = preAssess(req.body.BalanceSheet, requestedAmount);

        // send request to decision engine
        result = decisionEngine.getDecision({
            PreAccessment: preAccessment,
            CompanyName: req.body.CompanyName,
            BalanceSheet: req.body.BalanceSheet,
            YearEstablished: req.body.YearEstablished,
            RequestedAmount: requestedAmount
        });
    }

    res.send(JSON.stringify(result));
});


function preAssess(balanceSheet, requestedAmount) {
    var result = 20;

    
    if (balanceSheet && balanceSheet.length >= 12) {
        // sort balance sheet descending
        var sortedbalanceSheet = balanceSheet.sort((a, b) => {
            if (a.year === b.year) {
                return b.month - a.month;
            }
            return b.year - a.year;
        });

        var avgAssets = sortedbalanceSheet.slice(0, 12).reduce((a, { assetsValue }) => a + assetsValue, 0) / 12;
        var totalProfits = sortedbalanceSheet.slice(0, 12).reduce((a, { profitOrLoss }) => a + profitOrLoss, 0);

        // average asset value across 12 months is greater than the loan amount
        if (avgAssets > requestedAmount) {
            result = 100;
            return result;
        }

        // the business has made a profit in the last 12 months
        if(totalProfits > 0){
            result = 60;
            return result;
        }
    }

    return result;
}


// start server at port 4000
let port = 4000;
app.listen(port);
console.log("Listening on port " + port);


module.exports = app; // for testing