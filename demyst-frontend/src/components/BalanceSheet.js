import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BalanceSheet = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="balance sheet table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Month</TableCell>
                        <TableCell align="right">Profit</TableCell>
                        <TableCell align="right">Assets</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.balanceSheet.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{row.year}</TableCell>
                            <TableCell align="right">{row.month}</TableCell>
                            <TableCell align="right">{row.profitOrLoss}</TableCell>
                            <TableCell align="right">{row.assetsValue}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BalanceSheet;