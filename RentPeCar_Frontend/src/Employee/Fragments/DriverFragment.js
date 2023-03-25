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

const Driver = () => {
  const classes = useStyles();
  const history = useHistory();
  const [driver, setDriver] = useState([]);
  const [show, setShow] = useState(false);
  const [Id, setId] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [driverName, setDriverName] = useState("");
  const [license,setLicense] = useState("");
  const [photo,setPhoto] = useState(undefined);
  const [gender,setGender] = useState("");
  const [phone,setPhone] = useState("");
  const [dob,setDob] = useState("");

  const handleSubmit = (e) => {
    // alert(`Please logi in ${firstName}`)
    if (driverName.length === 0) {
      alert("select driver name");
    } else if (license.length === 0) {
      alert("select carImage");
    } else if (photo.length === 0) {
      alert("upload photo");
    } else if (gender.length === 0) {
      alert("select gender");
    } else if (phone.length === 0) {
      alert("select phone");
    } else if (dob.length === 0) {
      alert("select date of birth");
    }
     else {
      const data = new FormData();
      // add the data
      data.append("driverName", driverName);
      data.append("license", license);
      data.append("photo", photo);
      data.append("gender", gender);
      data.append("phone", phone);
      data.append("dob",dob);
      console.log(data);
      addDriver(data);
    }
  };

  const addDriver = (data) => {
    axios.post(url + "/driver/addDriver", data).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        alert(" Driver Added Successfully");
      console.log(JSON.stringify(result));
        // go to the list of artists
        history.push("/employee_dashboard");
        handleCloseRegister(true);
        window.location.reload();
      } else {
        alert("Error while  adding");
      }
    });
  };


  const deleteUser=(id)=>{

    axios.delete(url+"/driver/"+id).then(res=>{
        const result=res.data

        if(result.status === "success"){
            console.log(res.data)
            alert("Driver deleted successfully")
        }else{
            alert("Error while deleting Driver")
        }
            })
  }
  useEffect(() => {
    GetAllDriver();
  }, []);
  const GetAllDriver = () => {
    axios.get(url + "/driver").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setDriver(result.data);
        console.log(result);
      } else {
        alert("Error while loading data");
      }
    });
  };
  return (
    <div >
      <h4>Driver </h4>
      <br />
      <div class="row">
        <div class="col-sm">
          <div class="col-sm  bg-light">
            <div class="card-header ">Add New Driver</div>
            <div class="card-body">
              <h5 class="card-title">
                <button
                  onClick={handleShowRegister}
                  type="button"
                  class="btn btn-primary"
                >
                  Click to Add 
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
                      Enter Driver Details
                      </h1>
                      <div className="container">
                        <div className="mb-3">
                          <div className="">
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                value={driverName}
                                className="form-label"
                              >
                                Driver Name
                              </label>
                              <input
                                onChange={(e) => {
                                  setDriverName(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                placeholder="Driver Name"
                                aria-label="Type Name"
                              />
                            </div>
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                Driver photo
                              </label>
                              <input
                                onChange={(e) => {
                                  setPhoto(e.target.files[0]);
                                }}
                                accept="image/"
                                type="file"
                                className="form-control"
                              />
                            </div>
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                value={license}
                                className="form-label"
                              >
                                License
                              </label>
                              <input
                                onChange={(e) => {
                                  setLicense(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                placeholder="License No."
                                aria-label="Type Name"
                              />
                            </div>
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                value={gender}
                                className="form-label"
                              >
                               Gender
                              </label>
                              <input
                                onChange={(e) => {
                                  setGender(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                placeholder="Gender"
                                aria-label="Type Name"
                              />
                            </div>
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                value={phone}
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
                                placeholder="Phone No."
                                aria-label="Type Name"
                              />
                            </div>
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                value={dob}
                                className="form-label"
                              >
                                Date of Birth 
                              </label>
                              <input
                                onChange={(e) => {
                                  setDob(e.target.value);
                                }}
                                type="date"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          className="w-100 btn btn-lg btn-primary"
                          type="submit"
                        >
                          Add Driver
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
      <h4> Driver List :</h4>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">License No.</StyledTableCell>
              <StyledTableCell align="center">Gender</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">D.O.B</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {driver.map((db) => (
              <StyledTableRow key={db.driverId}>
                <StyledTableCell align="center">{db.driverId}</StyledTableCell>
                {/* <StyledTableCell align="center">{db.carImage}</StyledTableCell> */}
                <img style={{width : "150px",height: "120px"}}
                    src={url + "/" + db.photo}
                    
                    alt="driver"
                  />
                <StyledTableCell align="center">{db.driverName}</StyledTableCell>
                <StyledTableCell align="center">{db.license}</StyledTableCell>
                <StyledTableCell align="center">{db.gender}</StyledTableCell>
                <StyledTableCell align="center">{db.phone}</StyledTableCell>
                <StyledTableCell align="center">{db.dob}</StyledTableCell>
                <StyledTableCell align="center">
                <button
                  onClick={() => {
                    return deleteUser(db.driverId);
                  }}
                  class="btn btn-warning"
                >
                  Delete
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
export default Driver;
