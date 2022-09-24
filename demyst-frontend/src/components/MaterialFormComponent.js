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

const MaterialFormComponent = (props) => {
    const initialValues = {
        companyName: "",
        amount: 0,
        provider: "Xero",
    };
    const [formValues, setFormValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formValues.companyName.replace(/ /g, '') == '') {
            alert("Please provide a valid company name");
        } else if (formValues.amount <= 0) {
            alert("Please provide a valid loan amount");
        }

        console.log(formValues);
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
        </>
    );
}
export default MaterialFormComponent;