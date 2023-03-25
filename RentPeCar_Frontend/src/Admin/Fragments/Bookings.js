import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { url } from "../../Commons/constants";
import axios from "axios";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
function Bookings() {
  const classes = useStyles();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get(url + "/booking/").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setBookings(result.data);
        console.log(result);
      } else {
        alert("Error while loading data");
      }
    });
  }, []);

  return (
    <div>
      <h2 className="title-header">Bookings</h2>
      <hr />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Booking ID</StyledTableCell>
              <StyledTableCell align="center">Car Varient</StyledTableCell>
              <StyledTableCell align="center">Booking Date</StyledTableCell>
              <StyledTableCell align="left">Pickup Location</StyledTableCell>
              <StyledTableCell align="center">User Name</StyledTableCell>
              <StyledTableCell align="center">Advance</StyledTableCell>
              <StyledTableCell align="center">From Date</StyledTableCell>
              <StyledTableCell align="center">To Date</StyledTableCell>
              <StyledTableCell align="center">Total Amount</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((db) => (
              <StyledTableRow key={db.id}>
                <StyledTableCell align="center">{db.bookingid}</StyledTableCell>
                <StyledTableCell align="left">
                  {db.carVarient}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {db.bookingDate}
                </StyledTableCell>
                <StyledTableCell align="left">{db.location}</StyledTableCell>
                <StyledTableCell align="center">
                  {db.username}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {db.securityDeposit}
                </StyledTableCell>
                <StyledTableCell align="center">{db.fromDate}</StyledTableCell>
                <StyledTableCell align="center">{db.toDate}</StyledTableCell>
                <StyledTableCell align="center">{db.amount}</StyledTableCell>
                <StyledTableCell align="left">
                  {db.secondPayStatus}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Bookings;
