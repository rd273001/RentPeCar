import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../../Components/Header";
import { url } from "../../../Commons/constants";
const BookingForm = () => {
  const history = useHistory();

  let isActive = sessionStorage.getItem("isActive");
  let user = JSON.parse(sessionStorage.getItem("user"));
  //console.log(user);
  console.log(user.data.userid);
  let carCategory = null;
  if (isActive !== null) {
    carCategory = JSON.parse(sessionStorage.getItem("carCategory"));
    //  console.log(carCategory.categoryName);
  } else {
    history.push("/signin");
  }

  //const [userid, setUserId] = useState(user.data.userid);
  // const [carCategoryId, setCarCategoryId] = useState(carCategory.id);
  console.log("carCategory.id" + carCategory.id);
  const [location, setLocation] = useState([]);
  const [fromDate, setFromDate] = useState([]);
  const [toDate, setToDate] = useState([]);
  const [securityDeposit, setSecurityDeposit] = useState("");
  const [debitCard, setDebitCard] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");


const showPayment = ()=>{
if (location.length === 0) {
      alert("select Location");
    } else if (fromDate.length === 0) {
      alert("select From Date");
    } else if (toDate.length === 0) {
      alert("select To Date");
    } else if (toDate < fromDate) {
      alert("to date must be greater than from date");
    } else {

      document.getElementById("payment").style.visibility="visible";

    }

}

const showRazorpayUI=()=>{
  let user = JSON.parse(sessionStorage.getItem("user"));
  history.push("/pay");
}

  const AddDetailsToDB = () => {
    if(securityDeposit.length === 0) {
      alert("Enter Deposite Amount");
    }  else {
      const data = new FormData();
      data.append("user", user.data.userid);
      data.append("carCategory", carCategory.id);
      data.append("location", location);
      data.append("fromDate", fromDate);
      data.append("toDate", toDate);
      data.append("securityDeposit", securityDeposit);
      // send the data to the API
      axios.post(url + "/booking/", data).then((response) => {
        const result = response.data;
        console.log(response.data);
        if (result.status === "success") {
          alert("Data Submitted Successfully");
          history.push("/");
        } else {
          alert("Error while booking");
        }
      });
    }
  };
  return (
    <div>
      <Header />
      <h1 className="title-header">BookingForm </h1>
      <hr />

      <div className="container">
        <h2>
          <u>
            <b>Booking Details :</b>
          </u>
        </h2>

        <div className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" class="form-label">
              <b>Name :</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              value={user.data.username}
              readonly
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              <b>Email :</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              value={user.data.email}
              readonly
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              <b>Address :</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              value={user.data.address}
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              <b>Car Category Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              value={carCategory.categoryName}
            />
          </div>
          {/* <div className="col-md-4">
            <label for="inputCity" class="form-label">
              <b>Pick Up Location</b>
            </label>
            <input
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              type="text"
              className="form-control"
              id="inputCity"
            />
            </div> */}
            <div className="col-md-4">
            <label for="inputCity" class="form-label">
              <b>Pick Up Location</b>
            </label>
              <select name="Location" id="inputCity"
              className="form-control"
               onChange={(e) => {
                setLocation(e.target.value);
              }}>
              <option value="Nanded">Nanded</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Aurangabad">Aurangabad</option>
              <option value="Satara">Satara</option>
              <option value="Sangli">Sangli</option>
             </select>
             
             
           
             </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              <b>From Date :</b>
            </label>
            <input
              onChange={(e) => {
                setFromDate(e.target.value);
              }}
              type="date"
              defaultValue="2022-16-04"
              InputLabelProps={{
                shrink: true,
              }}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label for="inputZip" className="form-label">
              <b>To Date :</b>
            </label>
            <input
              onChange={(e) => {
                setToDate(e.target.value);
              }}
              type="date"
              defaultValue="2022-16-04"
              InputLabelProps={{
                shrink: true,
              }}
              className="form-control"
            />
           
          </div>
          <div className="title-header">
              <button className="btn btn-success"  onClick={showPayment}>Pay Deposit</button>
            </div>
          <div
            className="row g-3"
            id="payment"
            style={{ visibility: "hidden" }}
          >
            <h2>
              <u>
                <b>Payment Details :</b>
              </u>
            </h2>
            <div className="col-md-2">
              <label for="deposit" class="form-label">
                <b>Deposit :</b>
              </label>
              <input
                onChange={(e) => {
                  setSecurityDeposit(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="col-md-4">
              <label for="deposit" class="form-label">
                <b>Debit/Credit Card Number :</b>
              </label>
              <input
                onChange={(e) => {
                  setDebitCard(e.target.value);
                }}
                type="number"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label for="deposit" class="form-label">
                <b>Expiry Date :</b>
              </label>
              <input
                onChange={(e) => {
                  setExpiryDate(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-2">
              <label for="deposit" class="form-label">
                <b>CVV* :</b>
              </label>
              <input
                onChange={(e) => {
                  setCvv(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="title-header">
              <button onClick={AddDetailsToDB} className="btn btn-primary">
                Confirm Booking
              </button>
              &nbsp;&nbsp;
              <button onClick={history.goBack} className="btn btn-warning ">
                Cancel Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
