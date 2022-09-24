import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    TextField,
    MenuItem,
    Select,
    Button
} from '@mui/material';
import { Grid } from "@mui/material";
import { getData, postData } from '../helpers/ApiHelper';
import '../App.css';
import BalanceSheet from "./BalanceSheet";


const CompanyForm = (props) => {
    const initialValues = {
        companyName: "",
        year: 2000,
        amount: 0,
        provider: "Xero",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [balanceSheet, setBalanceSheet] = useState([]);
    const [finalDecision, setFinalDecision] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);

        if (formValues.companyName.replace(/ /g, '') == '') {
            alert("Please provide a valid company name");
        } else if (formValues.amount <= 0) {
            alert("Please provide a valid loan amount");
        } else {
            getData('/getBalanceSheet?provider=' + formValues.provider+ '&companyName=' + formValues.companyName)
            .then(
                (result) => {
                    if (result) {
                        console.log(result);
                        setBalanceSheet(result);
                    }
                },
                (error) => {
                    console.log(error);
                    alert("Server error, please try again!");
                }
            );
        }
    };

    const confirm = () => {
        if (formValues.companyName.replace(/ /g, '') == '') {
            alert("Please provide a valid company name");
        } else if (parseFloat(formValues.amount) <= 0) {
            alert("Please provide a valid loan amount");
        } else {
            postData('/requestDecision', {
                BalanceSheet: balanceSheet,
                CompanyName: formValues.companyName,
                RequestedAmount: parseFloat(formValues.amount),
                YearEstablished: formValues.year
            }).then(
                (result) => {
                    if (result) {
                        console.log(result);
                        setFinalDecision(result);
                    }
                },
                (error) => {
                    console.log(error);
                    alert("Server error, please try again!");
                }
            );
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="center" justify="center" direction="column" >
                    <Grid item>
                        <TextField
                            id="companyName"
                            name="companyName"
                            label="Company Name"
                            type="text"
                            value={formValues.companyName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <p></p>
                    <Grid item>
                        <TextField
                            id="year"
                            name="year"
                            label="Year Established"
                            type="number"
                            value={formValues.year}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <p></p>
                    <Grid item>
                        <TextField
                            id="amount"
                            name="amount"
                            label="Loan Amount"
                            type="number"
                            value={formValues.amount}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <p></p>
                    <Grid item>
                        <FormControl>
                            <FormLabel>Select Accounting Provider:</FormLabel>
                            <Select
                                name="provider"
                                value={formValues.provider}
                                onChange={handleInputChange}
                            >
                                <MenuItem key="Xero" value="Xero">
                                    Xero
                                </MenuItem>
                                <MenuItem key="MYOB" value="MYOB">
                                    MYOB
                                </MenuItem>
                                <MenuItem key="Other" value="Other">
                                    Other
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <p></p>
                    <Grid item>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
            {balanceSheet && balanceSheet.length > 0 &&
                <div>
                    <hr className="separater" />
                    <h2>Balance Sheet:</h2>
                    <BalanceSheet balanceSheet={balanceSheet} />
                    <h2>Please review above information and click Confirm button to proceed</h2>
                    <Button variant="contained" color="primary" type="submit" onClick={confirm}>
                        Confirm
                    </Button>
                </div>
            }
            {finalDecision &&
                <div>
                    <hr className="separater" />
                    <h2>Fianl Result: Loan Approved Amount is {finalDecision.ApprovedLoanAmount}</h2>
                </div>
            }
        </>
    );
}

export default CompanyForm;