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
import Modal from "react-bootstrap/Modal";
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

const Employees = () => {
  const classes = useStyles();
  const history = useHistory();
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(false);
  const [Id, setId] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setdob] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("employee");

  const handleSubmit = (e) => {
    // alert(`Please logi in ${firstName}`)
    if (username.length === 0) {
      alert("select user name");
    } else if (email.length === 0) {
      alert("select email");
    } else if (password.length === 0) {
      alert("select password");
    } else if (gender.length === 0) {
      alert("select gender");
    } else if (phone.length === 0) {
      alert("select phone");
    } else if (dob.length === 0) {
      alert("select dob");
    } else if (address.length === 0) {
      alert("select address");
    } else if (role.length === 0) {
      alert("select role");
    } else {
      const data = new FormData();
      // add the data
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("gender", gender);
      data.append("phone", phone);
      data.append("dob", dob);
      data.append("address", address);
      data.append("role", role);

      console.log(data);
      addUser(data);
    }
  };

  const addUser = (data) => {
    axios.post(url + "/user/addEmployee", data).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        alert("Sign Up Successfully");

        // go to the list of artists
        history.push("/admin_dashboard");
        handleCloseRegister(true);
        window.location.reload();
      } else {
        alert("Error while Sign Up");
      }
    });
  };

  const deleteUser = (id) => {
    axios.delete(url + "/user/" + id).then((res) => {
      const result = res.data;

      if (result.status === "success") {
        console.log(res.data);
        alert("Employee deleted successfully");
      } else {
        alert("Error while deleting Employee");
      }
    });
  };
  useEffect(() => {
    GetAllEmployees();
  }, []);
  const GetAllEmployees = () => {
    axios.get(url + "/user/role/employee").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setEmployees(result.data);
        console.log(result);
      } else {
        alert("Error while loading data");
      }
    });
  };
  return (
    <div class="container ">
      
      <div class="page-heading">
        <h1 class="title">Employees Overview</h1>
      </div>
      
      <br />
      <div class="row">
        <div class="col-sm ">
          <div class="col-sm  bg-light">
            <div className="card-header">Add New Employee</div>
            <div class="card-body">
              <h5 class="card-title">
                <button
                  onClick={handleShowRegister}
                  type="button"
                  class="btn btn-primary"
                >
                  Click to Add New Employee
                </button>
                <Modal show={showRegister} onHide={handleCloseRegister}>
                  <div className="registerForm">
                    <form
                      className="form-control"
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <img id="user" src="/abc.svg" alt="User" />
                      <h1
                        className="h3 mb-3 fw-normal"
                        style={{ textAlign: "center" }}
                      >
                      Enter Employee Details
                      </h1>
                      <div className="container">
                        <div className="mb-3">
                          <div className="row">
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                value={username}
                                className="form-label"
                              >
                                First Name
                              </label>
                              <input
                                onChange={(e) => {
                                  setUserName(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                aria-label="Username"
                              />
                            </div>
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                Email
                              </label>
                              <input
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                                type="email"
                                className="form-control"
                                placeholder="abc@gmail.com"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Gender
                          </label>
                          <div
                            class="form-check"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                          >
                            <input type="radio" value="Male" name="gender" />{" "}
                            Male
                            <br />
                            <input
                              type="radio"
                              value="Female"
                              name="gender"
                            />{" "}
                            Female
                            <br />
                            <input
                              type="radio"
                              value="Other"
                              name="gender"
                            />{" "}
                            Other
                            <br />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            type="password"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Phone
                          </label>
                          <input
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                            type="text"
                            className="form-control"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="">DOB</label>
                          <input
                            onChange={(e) => {
                              setdob(e.target.value);
                            }}
                            type="date"
                            defaultValue="2021-05-05"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className="form-control"
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Address
                          </label>
                          <input
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <button
                          className="w-100 btn btn-lg btn-primary"
                          type="submit"
                        >
                          Add New Employee
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h4> Employee List :</h4>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((db) => (
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
                  Delete Employee
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
export default Employees;
