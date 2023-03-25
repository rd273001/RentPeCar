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

const Car = () => {
  const classes = useStyles();
  const history = useHistory();
  const [cars, setCars] = useState([]);
  const [show, setShow] = useState(false);
  const [Id, setId] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [car, setCar] = useState([]);
  const [carCategory, setCarCategory] = useState(-1);
  const [carModel, setCarModel] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [carColor, setCarColor] = useState(-1);


  useEffect(() => {
    axios.get(url + "/carCategory/").then((res) => {
      const result = res.data;
      setCar(result.data);
      console.log(res.data);
    });
  }, []);
  const handleSubmit = (e) => {
    if (carModel.length === 0) {
        alert("select car model");
      } else if (carNumber.length === 0) {
        alert("select a car number");
      }else if (carColor.length === 0) {
        alert("select a car color");
      }
       else {
      const data = new FormData();
      // add the data
      data.append("carCategory", carCategory);
      data.append("carModel", carModel);
      data.append("carNumber", carNumber);
      data.append("carColor", carColor);
      

      console.log(data);
      addCar(data);
    }
  };

  const addCar = (data) => {
    axios.post(url + "/car/", data).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        alert(" Car added Successfully");
        handleCloseRegister(true);
      } else {
        alert("Error while  adding");
      }
    });
  };

  const deleteCategory = (id) => {
    axios.delete(url + "/car/" + id).then((res) => {
      const result = res.data;
      if (result.status === "success") {
        console.log(res.data);
        alert("Car deleted  successfully");
        handleCloseRegister(true);
      } else {
        alert("Error while deleting Car");
        console.error();

      }
    });
  };
  useEffect(() => {
    GetAllCars();
  }, []);
  const GetAllCars = () => {
    axios.get(url + "/car/").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setCars(result.data);
        console.log(result);
      } else {
        alert("Error while loading data");
      }
    });
  };
  return (
    <div class="container">
      <h4 className="page-header">Cars </h4>
      
     
      
      <br />
      <div class="row">
        <div class="col-sm">
          <div class="col-sm  bg-light">
            <div class="card-header ">Add New Car</div>
            <div class="card-body">
              <h5 class="card-title">
                <button
                  onClick={handleShowRegister}
                  type="button"
                  class="btn btn-primary"
                >
                  Add Car
                </button>
                <Modal show={showRegister} onHide={handleCloseRegister}>
                  <div className="registerForm">
                    <form
                      className="form-control"
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <br />
                      <br />
                      <h1
                        className="h3 mb-3 fw-normal"
                        style={{ textAlign: "center" }}
                      >
                        Add Car
                      </h1>
                      <div className="container">
                        <div className="mb-3">
                          
                          <br />

                          <div class="mb-3">
                            <div className="row">
                              <div className="col-4">
                                <label
                                  for="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Car category
                                </label>
                              </div>
                              <div className="col-8">
                                <select
                                  onChange={(e) => {
                                    setCarCategory(e.target.value);
                                    console.log(" carCategory " + e.target.value);
                                  }}
                                  className="form-control"
                                >
                                  {car.map((car) => {
                                    return (
                                      <option value={car.id}>
                                        {car.categoryName}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                Car Model
                              </label>
                              <input
                                onChange={(e) => {
                                  setCarModel(e.target.value);
                                  console.log(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                placeholder="Car Model"
                              />
                            </div>
                          </div>
                          <br />
                          <div class="mb-3">
                            
                            <div className="mb-3">
                              <div className="row">
                                <div className="col-6">
                                  <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                  >
                                    Car Number
                                  </label>
                                  <input
                                    onChange={(e) => {
                                      setCarNumber(e.target.value);
                                      console.log(e.target.value);
                                    }}
                                    type="text"
                                    className="form-control"
                                  />
                                </div>

                                <div className="col-6">
                                  <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                  >
                                    Car color
                                  </label>
                                  <input
                                    onChange={(e) => {
                                      setCarColor(e.target.value);
                                      console.log(e.target.value);
                                    }}
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </div>

                        <button
                          className="w-100 btn btn-lg btn-primary"
                          type="submit"
                        >
                          Add
                        </button>
                        <br />
                        <br />
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
      <h4> Available Cars</h4>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left"> Id</StyledTableCell>

              <StyledTableCell align="left">Car Name</StyledTableCell>
              <StyledTableCell align="center">Car Model</StyledTableCell>
              <StyledTableCell align="center">Car No</StyledTableCell>
              <StyledTableCell align="left">Car Color</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((db,index) => {
              return (
                <StyledTableRow>
                  <StyledTableCell align="left">{index+1}</StyledTableCell>
                  <StyledTableCell align="left">{db.carName}</StyledTableCell>

                  <StyledTableCell align="center">{db.carModel}</StyledTableCell>
                  <StyledTableCell align="center">{db.carNumber}</StyledTableCell>
                  <StyledTableCell align="left">{db.carColor}</StyledTableCell>


                  <button
                    style={{ align: "center" }}
                    onClick={() => {
                      return deleteCategory(db.carId);
                    } }
                    class="btn btn-warning"
                  >
                    Delete
                  </button>
                </StyledTableRow>
              );
            }).reverse()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Car;
