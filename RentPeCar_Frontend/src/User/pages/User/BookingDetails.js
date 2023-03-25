import React,{useEffect,useState} from "react";
import { useLocation, useHistory } from "react-router";
import  {Link} from 'react-router-dom'
import { Header } from "../../Components/Header";
import { url } from "../../../Commons/constants";
import axios from 'axios';
import Billing from "./Billing";

function BookingDetails() {
  const location = useLocation();
  const history = useHistory();
  const[booking,setBooking]=useState([]);
  const conBooking = location.state.bookingDetails;
  console.log(conBooking.bookingid);

   useEffect(() => {
     axios.get(url + "/booking/cb/" + conBooking.bookingid).then((response) => {
       const result = response.data;
       if (result.status === "success") {
         setBooking(result.data)
         sessionStorage.setItem("conBooking", JSON.stringify(result));

         console.log(result.data);
       } else {
         alert("error occured while getting bookings");
       }
     });
 }, [])



    useEffect(() => {
  if(booking.secondPayStatus===false) 
    document.getElementById("btn_back").style.visibility = "hidden"
  else  
  document.getElementById("btn_continue").style.visibility = "visible"
      return () => {
        }
    }, [])
  return (
    <div>    <Header/>
    <div className="card container">
      
      <h1 className="title-header">Booking Details</h1>

      <table className="table table-striped table-bordered">
        <tr>
          <td colSpan="2">
            <img
              style={{ height: "300px", width: "400px" }}
               src={url + "/" + booking.carCatImg}
            ></img>
          </td>
          <td></td>
          <td>
            <img
              style={{ height: "300px", width: "400px" }}
               src={url + "/" + booking.photo}
            ></img>
          </td>
        </tr>
        <tr>
          <th>Booking ID</th>
          <td>{booking.bookingid}</td>
          <th>Driver Name</th>
          <td>{booking.driverName}</td>
        </tr>

        <tr>
          <th>Car Number</th>
          <td>{booking.carNumber}</td>
          <th>Driver Phone</th>
          <td>{booking.driverPhone}</td>
        </tr>

        <tr>
          <th>From Date</th>
          <td>{booking.fromDate}</td>
          <th>To Date</th>
          <td>{booking.toDate}</td>
        </tr>

        <tr>
          <th>Car Varient</th>
          <td>{booking.carVarient}</td>
          <th>Price/Day</th>
          <td>{booking.pricePerDay}</td>
        </tr>

        <tr>
          <th>Pick Up Location</th>
          <td>{booking.location}</td>
          <th>No. of Days</th>
          <td>{booking.totalDays}</td>
        </tr>
        <tr>
          <th>Bill Ammount</th>
          <td>{booking.amount}Rs.</td>
          <th>Advance Paid</th>
          <td>{booking.securityDeposit}Rs.</td>
        </tr>
      </table>

      <Link  to ="/billing" id="btn_continue" onClick={()=><Billing/>}type="button" class="btn btn-sm btn-info">
        Continue To Pay
      </Link>
      <button id="btn_back" type="button" onClick={history.goBack} class="btn btn-sm btn-warning">
        Back
      </button>
    </div>
        </div> 

  );
}

export default BookingDetails;
