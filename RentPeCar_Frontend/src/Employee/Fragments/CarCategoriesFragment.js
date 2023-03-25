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

const CarCategory = () => {
  const classes = useStyles();
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [Id, setId] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [carType, setCarType] = useState([]);
  const [type, setType] = useState(-1);
  const [carCatImg, setCarCatImg] = useState(undefined);
  const [categoryName, setCategoryName] = useState("");
  const [seatCapacity, setSeatCapacity] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [fuelType, setFuelType] = useState(-1);
  const [airbag, setAirbag] = useState(false);

  useEffect(() => {
    axios.get(url + "/carType").then((res) => {
      const result = res.data;
      setCarType(result.data);
      console.log(res.data);
      console.log(res.data.length);
    });
  }, []);
  const handleSubmit = (e) => {
    // alert(`Please logi in ${firstName}`)
    if (!carCatImg) {
      alert("select carImage");
    } else if (categoryName.length === 0) {
      alert("select categoryName");
    } else if (seatCapacity.length === 0) {
      alert("select seatCapacity");
    } else if (pricePerDay.length === 0) {
      alert("select pricePerDay");
    } else if (fuelType === -1) {
      alert("select fuelType");
    } else if (type === -1) {
      alert("select type");
    } else {
      const data = new FormData();
      // add the data
      data.append("carType", type);
      data.append("carCatImg", carCatImg);
      data.append("categoryName", categoryName);
      data.append("seatCapacity", seatCapacity);
      data.append("pricePerDay", pricePerDay);
      data.append("fuelType", fuelType);

      console.log(data);
      addCarCategory(data);
    }
  };

  const addCarCategory = (data) => {
    axios.post(url + "/carCategory/", data).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        alert(" Car Category add Successfully");
        handleCloseRegister(true);
      } else {
        alert("Error while  adding");
      }
    });
  };

  const deleteCategory = (id) => {
    axios.delete(url + "/carCategory/" + id).then((res) => {
      const result = res.data;
      if (result.status === "success") {
        console.log(res.data);
        alert("Employee deleted successfully");
        handleCloseRegister(true);
        window.location.refresh();

      } else {
        alert("Error while deleting Employee");
      }
    });
  };
  useEffect(() => {
    GetAllCars();
  }, []);
  const GetAllCars = () => {
    axios.get(url + "/carCategory/").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setCategories(result.data);
        console.log(result);
      } else {
        alert("Error while loading data");
      }
    });
  };
  return (
    <div class="container">
      <h4>Car Variants </h4>
      <br />
      <div class="row">
        <div class="col-sm">
          <div class="col-sm  bg-light">
            <div class="card-header ">Add New Category</div>
            <div class="card-body">
              <h5 class="card-title">
                <button
                  onClick={handleShowRegister}
                  type="button"
                  class="btn btn-primary"
                >
                  Add Category
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
                        Add Category
                      </h1>
                      <div className="container">
                        <div className="mb-3">
                          <div className="row">
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                Category Name
                              </label>
                              <input
                                onChange={(e) => {
                                  setCategoryName(e.target.value);
                                  console.log(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                placeholder="Category Name"
                              />
                            </div>
                            <div className="col">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                Car Category Image
                              </label>
                              <input
                                onChange={(e) => {
                                  setCarCatImg(e.target.files[0]);
                                  console.log(e.target.value);
                                }}
                                accept="image/"
                                type="file"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <br />

                          <div class="mb-3">
                            <div className="row">
                              <div className="col-4">
                                <label
                                  for="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Car Type
                                </label>
                              </div>
                              <div className="col-8">
                                <select
                                  onChange={(e) => {
                                    setType(e.target.value);
                                    console.log(" carType " + e.target.value);
                                  }}
                                  className="form-control"
                                >
                                  {carType.map((car) => {
                                    return (
                                      <option value={car.id}>
                                        {car.typeName}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div class="mb-3">
                            <div className="row">
                              <div className="col-4">
                                <label
                                  for="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Fuel Type
                                </label>
                              </div>
                              <div className="col-8">
                                <select
                                  onChange={(e) => {
                                    setFuelType(e.target.value);
                                  }}
                                  className="form-control"
                                >
                                  <option value="Petrol">Petrol </option>
                                  <option value="Diesel">Diesel </option>
                                  <option value="CNG">CNG </option>

                                  
                                </select>
                              </div>
                            </div>
                            <div className="mb-3">
                              <div className="row">
                                <div className="col-6">
                                  <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                  >
                                    Seat Capacity
                                  </label>
                                  <input
                                    onChange={(e) => {
                                      setSeatCapacity(e.target.value);
                                      console.log(e.target.value);
                                    }}
                                    type="number"
                                    className="form-control"
                                  />
                                </div>

                                <div className="col-6">
                                  <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                  >
                                    Price Per Day ( Rs.)
                                  </label>
                                  <input
                                    onChange={(e) => {
                                      setPricePerDay(e.target.value);
                                      console.log(e.target.value);
                                    }}
                                    type="number"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="mb-3">
                                <label
                                  for="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Features
                                </label>
                                <div
                                  class="form-check"
                                  onChange={(e) => {
                                    setAirbag(e.target.value);
                                    console.log(e.target.value);
                                  }}
                                >
                                  <input type="radio" value={true} />
                                  Airbag
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
              <StyledTableCell align="center"> </StyledTableCell>

              <StyledTableCell align="center">Car Name</StyledTableCell>
              <StyledTableCell align="center">Car Type</StyledTableCell>
              <StyledTableCell align="center">Fuel Type</StyledTableCell>
              <StyledTableCell align="center">Rental</StyledTableCell>
              <StyledTableCell align="center">Seat Capacity</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((db) => (
              <StyledTableRow key={db.id}>
                <StyledTableCell align="center">
                  <img
                    style={{ width: "200px", height: "100px" }}
                    src={url + "/" + db.carCatImg}
                  ></img>
                </StyledTableCell>

                <StyledTableCell align="center">
                  {db.categoryName}
                </StyledTableCell>

                <StyledTableCell align="center">{db.typeName}</StyledTableCell>
                <StyledTableCell align="center">{db.fuelType}</StyledTableCell>
                <StyledTableCell align="center">{db.pricePerDay}</StyledTableCell>
                <StyledTableCell align="center">
                  {db.seatCapacity}
                </StyledTableCell>
                <StyledTableCell align="center">
                <button
                  onClick={() => {
                    return deleteCategory(db.id);
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
export default CarCategory;
