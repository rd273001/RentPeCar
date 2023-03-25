import { url } from "../../Commons/constants";
import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { useHistory } from "react-router";
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

const Users = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    const deleteUser = (id) => {
        axios.delete(url + "/user/" + id).then((res) => {
          const result = res.data;
    
          if (result.status === "success") {
            console.log(res.data);
            alert("User deleted successfully");
          } else {
            alert("Error while deleting User");
          }
        });
      };
 
  useEffect(() => {
    GetAllUsers();
  }, []);
  const GetAllUsers = () => {
    axios.get(url + "/user/role/user").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setUsers(result.data);
        console.log(result);
      } else {
        alert("Error while loading data");
      }
    });
  };
  return (
    <div class="container ">
      
      <div class="page-heading">
        <h1 class="title">Users Overview</h1>
      </div>
      
     
      <h4> User List :</h4>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">User Name</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((db) => (
              <StyledTableRow key={db.id}>
                <StyledTableCell align="center">{db.username}</StyledTableCell>
                <StyledTableCell align="center">{db.phone}</StyledTableCell>
                <StyledTableCell align="center">{db.email}</StyledTableCell>
                <StyledTableCell align="center">{db.address}</StyledTableCell>
                <StyledTableCell align="center">
                <button
                  onClick={() => {
                    return deleteUser(db.id);
                  }}
                  class="btn btn-warning"
                >
                  Delete User
                </button> 
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Users;
