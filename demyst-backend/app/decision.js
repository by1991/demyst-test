// mock decision engine APIs


exports.getDecision = (info) => {
    var approvedloanAmount = 0;

    approvedloanAmount = info.PreAccessment * info.RequestedAmount / 100;

    var outcome = {
        IsApproved: true,
        ApprovedLoanAmount: approvedloanAmount
    }

    return outcome;
};