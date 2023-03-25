import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { url } from "../../Commons/constants";
import axios from "axios";
function ConfirmBooking() {
  const location = useLocation();
  const booking = location.state.booking;
  const [category, setCategory] = useState([]);
  const [car, setCar] = useState(-1);
  const [driver, setDriver] = useState(-1);
  const [drivers, setDrivers] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get(url + "/car/" + booking.categoryId).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        if (result.data.length > 0) {
        setCategory(result.data);
        setCar(result.data[0].carId);
        console.log(result.data);
        }
      } else alert("Error");
    });
  }, []);

  useEffect(() => {
    axios.get(url + "/driver/").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        if (result.data.length > 0) {
          setDrivers(result.data);
          setDriver(result.data[0].driverId);
          console.log(result.data);
        }
      } else alert("Error");
    });
  }, []);

  const confirmBooking = () => {
    if (car === -1) {
      alert("Select Car");
    } else if (driver == -1) {
      alert("Select Driver");
    } else {
      const data = new FormData();
      data.append("driver", driver);
      data.append("car", car);
      data.append("status", true);

      axios
        .put(url + "/booking/" + booking.bookingid, data)
        .then((response) => {
          const result = response.data;
          if (result.status === "success") {
            alert("Booking Confirmed");
            history.goBack();
          } else alert("Booking Failed");
        });
    }
  };
  return (
    <div className="nav-container">
      <div class="row ">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 border">
          <h1 class="title">Booking Details</h1>
          {console.log(booking)}
          <div className="card">
            <img src={url + "/" + booking.carCatImg}></img>

            <table class="table table-bordered">
              <tr>
                <th>Booking ID</th>
                <td>{booking.bookingid}</td>
                <th>User Name</th>
                <td>{booking.username}</td>
              </tr>
              <tr>
                <th>From Date</th>
                <td>{booking.fromDate}</td>
                <th>To Date</th>
                <td>{booking.toDate}</td>
              </tr>
              <tr></tr>
              <tr>
                <th>Car Variant</th>
                <td>{booking.carVarient}</td>
                <th>Price/Day</th>
                <td>{booking.pricePerDay} Rs.</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h1 class="title"> Booking Confirmation </h1>
          <form class="form-horizontal" role="form">
            <div class="form-group card">
              <span class="label">Select Car</span>
              <select
                onChange={(e) => {
                  setCar(e.target.value);
                  console.log(" carType " + e.target.value);
                }}
                className="form-control"
              >
                {category.map((car) => {
                  return <option value={car.carId}>{car.carNumber}</option>;
                })}
              </select>
            </div>
            <div class="form-group card">
              <span class="label">Select Driver</span>
              <select
                onChange={(e) => {
                  setDriver(e.target.value);
                  console.log(" Driver " + e.target.value);
                }}
                className="form-control"
              >
                {drivers.map((d) => {
                  return <option value={d.driverId}>{d.driverName}</option>;
                })}
              </select>
            </div>
            <button className="btn btn-info " onClick={confirmBooking}>
              Confirm Booking
            </button>
       

          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBooking;
