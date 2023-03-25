import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { url } from "../../../Commons/constants";
import BookingRow from "../../Components/BookingRow";
import { Header } from "../../Components/Header";
function MyBookings() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  const [bookings, setBookings] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getBookings();
   
  }, []);

  const getBookings = () => {
    axios
      .get(url + "/booking/findByUser/" + user.data.userid)
      .then((response) => {
        const result = response.data;
        if (result.status === "success") {
          setBookings(result.data);
          console.log(result);
        } else {
          alert("error occured while getting all car categories");
          console.error(result.error);
        }
      });
  };

  const bookingDetail = (booking) => {
    if (booking.status === false) {
      alert("Booking is not confirmed yet...!");
    } else {
      axios.get(url + "/booking/" + booking.bookingid).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          console.log(result);
          history.push("/booking_details", {
            bookingDetails: result.data,
          });
        } else {
          alert("Error occured while getting bookings");
        }
      });
    }
  };

  const cancelBooking = (booking) => {

    if (booking.status === true) {
      alert("Booking is confirmed");
    } else {
    axios.delete(url + "/booking/" + booking.bookingid).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        console.log(result.status);
        alert("Booking cancelled");
        window.location.reload();
      } else {
        alert("Error occured while canceling bookings");
        console.error(result.error);
      }
    });
  }
  };
 return (
    <div>
      <Header />
      <h1 className="title-header">My Bookings</h1>
      <hr />
      <div className="nav-container">
        <table className="table table-sm">
          <thead style={{textAlign:"center"}}>
            <th>Booking ID</th>
            <th>Customer Name</th>
            <th>Car Name</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Booking Date</th>
            <th>Action</th>
          </thead>
          <tbody>
            {bookings.map((booking) => {
              return (
                <BookingRow
                  booking={booking}
                  deleteBooking={cancelBooking}
                  bookingDetail={bookingDetail}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBookings;