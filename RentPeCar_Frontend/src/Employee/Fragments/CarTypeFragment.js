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

const CarType = () => {
  const classes = useStyles();
  const history = useHistory();
  const [carTypes, setCarTypes] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [typeName, setTypeName] = useState("");
  const [carImage, setCarImage] = useState(undefined);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // alert(`Please logi in ${firstName}`)
    if (typeName.length === 0) {
      alert("select user name");
    } else if (carImage.length === 0) {
      alert("select carImage");
    } else if (description.length === 0) {
      alert("select description");
    } else {
      const data = new FormData();
      // add the data
      data.append("typeName", typeName);
      data.append("carImage", carImage);
      data.append("description", description);

      console.log(data);
      addCarType(data);
    }
  };

  const addCarType = (data) => {
    axios.post(url + "/carType", data).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        alert(" Car type add Successfully");

        // go to the list of artists
        history.push("/admin_dashboard");
        handleCloseRegister(true);
        window.location.reload();
      } else {
        alert("Error while  adding");
      }
    });
  };

  const deleteCar = (id) => {
    axios.delete(url + "/carType/" + id).then((res) => {
      const result = res.data;

      if (result.status === "success") {
        console.log(res.data);
        alert("Car type deleted successfully");
      } else {
        alert("Error while deleting car type");
      }
    });
  };
  useEffect(() => {
    GetAllCarTypes();
  }, []);
  const GetAllCarTypes = () => {
    axios.get(url + "/carType").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setCarTypes(result.data);
        console.log(result);
      } else {
        alert("Error while loading data");
      }
    });
  };
  return (
    <div>
      <h4> Car Type Overview </h4>
      <br />
      <div class="row">
        <div class="col-sm">
          <div class="col-sm  bg-light">
            <div class="card-header ">Add Car Type</div>
            <div class="card-body">
              <h5 class="card-title">
                <button
                  onClick={handleShowRegister}
                  type="button"
                  class="btn btn-primary"
                >
                  Click to Add Car type
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
                        Add Car Type
                      </h1>
                      <div className="container">
                        <div className="mb-3">
                          <div className="row">
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                value={typeName}
                                className="form-label"
                              >
                                Type Name
                              </label>
                              <input
                                onChange={(e) => {
                                  setTypeName(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                placeholder="Type Name"
                                aria-label="Type Name"
                              />
                            </div>
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                Car Type Image
                              </label>
                              <input
                                onChange={(e) => {
                                  setCarImage(e.target.files[0]);
                                }}
                                accept="image/"
                                type="file"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Description
                          </label>
                          <textarea
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                            type="textarea"
                            className="form-control"
                            rows="4"
                            cols="50"
                          />
                        </div>

                        <button
                          className="w-100 btn btn-lg btn-primary"
                          type="submit"
                        >
                          Add New Car type
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
      <h4> Car type List :</h4>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">Car Type</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carTypes.map((db) => (
              <StyledTableRow key={db.id}>
                <StyledTableCell align="center">{db.id}</StyledTableCell>
                {/* <StyledTableCell align="center">{db.carImage}</StyledTableCell> */}
                <img
                  style={{ width: "300px", height: "200px" }}
                  src={url + "/" + db.carImage}
                  className="image"
                  alt="category"
                />
                <StyledTableCell align="center">{db.typeName}</StyledTableCell>
                <StyledTableCell align="center">{db.description}</StyledTableCell>
                <StyledTableCell align="center">
                <button
                  onClick={() => {
                    return deleteCar(db.id);
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
export default CarType;
