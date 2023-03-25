import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../Commons/constants";

const Homefragment = () => {
  const [user, setUser] = useState(0);
  const [carTypes, setCarTypes] = useState(0);
  const [carCategories, setCarCategories] = useState(0);
  const [bookings, setBookings] = useState(0);
  const [cars, setCars] = useState(0);
  const [drivers, setDrivers] = useState(0);

  useEffect(() => {
    axios.get(url + "/carType/").then((res) => {
      const result = res.data.data.length;
      console.log(result);
      sessionStorage.setItem("carType", JSON.stringify(result));
      setCarTypes(result);
     // let count = -1;
      //for (let key in res) {
       // count++;
     // }
    //  console.log(" Car Couut ::"+count);
      //   console.log(res.data.length);
    });
  }, []);


  useEffect(() => {
    axios.get(url + "/carCategory/").then((response) => {
      let result=response.data.data.length;
      sessionStorage.setItem("carCategory", JSON.stringify(result));
  setCarCategories(result);

      console.log(result);
      //setUser(result);
    });
  }, []);

  useEffect(() => {
    axios.get(url + "/user/role/user").then((res) => {
      let result=res.data.data.length;
      console.log(result);
      setUser(result);
    });
  }, []);

  useEffect(() => {
    axios.get(url + "/booking/").then((res) => {
      let result=res.data.data.length;
      console.log(result);
      setBookings(result);
    });
  }, []);

  useEffect(() => {
    axios.get(url + "/carCategory/").then((response) => {
      let result=response.data.data.length;
      sessionStorage.setItem("Cars::", JSON.stringify(result));
      setCars(result);


      console.log("Car ::"+result);

     // sessionStorage.removeItem(Cars);
   //setCars(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(url + "/driver/").then((res) => {
      let result=res.data.data.length;
      console.log(result);
      setDrivers(result);
    });
  }, []);









  return (
    <div class="container">
      <br />
      <h3 className="title"> Employee DashBoard</h3>
      <br />
      <br />
      <div class="row">
        <div  class="col-sm text-white bg-dark rounded-top">
          <div   class="card-body ">
            <h5 class="card-title">Total Car Types</h5>
            <p class="card-text">{carTypes}</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm text-white bg-info rounded-top">
            <div class="card-body">
              <h5 class="card-title">Total Car Categories</h5>
              <p class="card-text">{carCategories}</p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm text-white bg-primary rounded-top">
            <div class="card-body">
              <h5 class="card-title">Registered Users</h5>
              <p class="card-text">{user}</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div class="row">
        <div class="col-sm text-white bg-danger rounded-bottom">
          <div class="card-body">
            <h5 class="card-title">Total Bookings </h5>
            <p class="card-text">{bookings}</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm text-white bg-warning rounded-bottom">
            <div class="card-body">
              <h5 class="card-title">Total Cars</h5>
              <p class="card-text">{cars}</p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm text-white bg-success rounded-bottom ">
            <div class="card-body">
              <div class="card-title ">Total Drivers</div>

              <p className="card-text">{drivers}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homefragment;
