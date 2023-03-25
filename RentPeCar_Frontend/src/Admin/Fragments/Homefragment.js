import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../Commons/constants";
const Homefragment = () => {
  const [count, setCount] = useState(0);
  const [booking, setBookings] = useState(0);
  const [employee, setEmployee] = useState(0);
  useEffect(() => {
    axios.get(url + "/user/role/user").then((res) => {
     let result=res.data.data.length;
      setCount(result);
    });
  }, []);
  useEffect(() => {
    axios.get(url + "/booking/").then((res) => {
      console.log(res.data.data.length);
      let result=res.data.data.length;
      setBookings(result);

      sessionStorage.setItem("bookings", JSON.stringify(res.data))
      console.log(Array.keys);
    });
  }, []);
  useEffect(() => {
    axios.get(url + "/user/role/employee").then((res) => {
      console.log(res.data.data.length);
    let result=res.data.data.length;
     setEmployee(result);
    });
  }, []);

  return (
    <div class="container">
      <br />
      <h3> Admin Dashboard</h3>
      <hr/>
      <br />
      <br />
      <div class="row">
        <div class="col-sm text-white bg-info">
          <div class="card-header">Users section</div>
          <div class="card-body">
            <h5 class="card-title">Total users </h5>
            <p class="card-text">{count}</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm text-white bg-info">
            <div class="card-header ">Bookings section</div>
            <div class="card-body">
              <h5 class="card-title">Total Bookings</h5>
              <p class="card-text">{booking}</p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm text-white bg-info">
            <div class="card-header ">Employee</div>
            <div class="card-body">
              <h5 class="card-title">Total Employees </h5>
              <p class="card-text">{employee}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homefragment;
