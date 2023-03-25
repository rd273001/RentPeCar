import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import swal from "sweetalert";
import { Redirect, useHistory } from "react-router";
import { url } from "../../Commons/constants";

function Pay() {
  const [amount, setAmount] = useState('');
  const [booking, setBooking] = useState({});
  const history = useHistory();

  useEffect(() => {
    let book = JSON.parse(sessionStorage.getItem("conBooking"));
    let bookId = book.bookingid;
    console.log(book);
    console.log(bookId);
    setBooking(book);
  }, []);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    let obj = { "amount" : JSON.parse(sessionStorage.getItem("amount")),
                "bookingid": JSON.parse(sessionStorage.getItem("bookingid")),
              };
    console.log(obj);
    const result = await axios.post(`http://localhost:4000/api/pay/create_order`,obj);
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    sessionStorage.removeItem("amount");

    var { amount, id: order_id, currency } = result.data;
    amount = amount * 100;

    const options = {
      key: "rzp_test_htD0V8iqnPJHNN", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: result.data.currency,
      name: "RentPeCar",
      image: "http://localhost:1337/logo.png",
      description: "Test Transaction",
      order_id: result.data.id,
      handler: async function (response) {
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        let d = {
            "amount" : JSON.parse(sessionStorage.getItem("amount")),
            "bookingid": JSON.parse(sessionStorage.getItem("bookingid")),
            "razorpayPaymentId": JSON.parse(sessionStorage.getItem("razorpayPaymentId")),
        };

        axios.put(`http://localhost:4000/api/pay/update_pay_order`, data).then((res) => {
            // swal("Payment Success","You Car Booked, Details Sent, Redirecting to Profile Page","success");
            history.push(`/car_type`);
          }).catch((err) => {
            alert("Some Error occured!");
            history.goBack();
          });

        // alert("Payment Success");
      },
      prefill: {
        name: "Ravi Dubey",
        email: "ravi123@gmail.com",
        contact: "7007123456",
      },
      notes: {
        address: "",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="container" style={{border:"3px solid blue",marginTop:"10%",padding:"20px 100px 60px 100px",maxWidth:"max-content",textAlign:"center"}}>
      <h1>Checkout to do Payement </h1>
      <label className="mx-auto mt-5">Amount to Pay to checkout : </label>
      <h2 className="mx-auto px-3 mt-3 bg-warning" style={{width:"max-content"}}>Amount : &#8377; {JSON.parse(sessionStorage.getItem("amount"))}</h2>
      <button className="btn mt-5 mx-2 px-5 btn-m btn-success text-lg" onClick={displayRazorpay}>Pay</button>
      <button onClick={history.goBack} className="btn mt-5 mx-2 px-5 btn-m btn-danger">Back</button>
    </div>
  );
}

export default Pay;