import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function BookingRow({ booking, deleteBooking, bookingDetail }) {
  //   const [cancelBtn, setCancelBtn] = useState("");
  //   const [detailsBtn, setDetailsBtn] = useState("");
  useEffect(() => {
  });

  return (
    <tr style={{textAlign:"center"}}>
      <td>{booking.bookingid}</td>
      <td>{booking.username}</td>
      <td>{booking.carVarient}</td>
      <td>{booking.fromDate}</td>
      <td>{booking.toDate}</td>
      <td>{new Date(booking.bookingDate).toDateString()}</td>

      <td>
        <button
          class="btn btn-sm btn-danger "
          id="cancelbtn"
          onClick={() => {
            deleteBooking(booking);
          }}
        >
          Cancel
        </button>
&nbsp;&nbsp;
        <button
          class="btn btn-sm btn-success"
          onClick={() => {
            bookingDetail(booking);
          }}
          id="detailsbtn"
        >
          Show Details
        </button>
      </td>
      <td></td>
    </tr>
  );
}
export default BookingRow;
