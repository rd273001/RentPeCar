import axios from "axios";
import { useState } from "react";
import {  useHistory } from "react-router-dom";
import { url } from "../../../Commons/constants";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setdob] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("user");

  // get the history object
  const history = useHistory();

  // gets called when user selects an image
  // const onFileSelect = (event) => {
  // setThumbnail(event.target.files[0])

  const addUserToDB = () => {
    if (username.trim().length === 0 || username.trim().length < 3) {
      alert("Please Enter a correct Name.");
    } else if (email.trim().length === 0) {
      alert("Please Enter an Email address.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase())) {
      alert("Invalid Email format. Please Enter a valid Email address.");
    } else if (password.trim().length < 8 || password.trim().length > 20) {
      alert("Password must be between 8 to 20 characters.");
    } else if (gender.length === 0) {
      alert("Please Select a Gender.");
    } else if (phone.trim().length !== 10) {
      alert("Please Enter a 10 digit Phone number.");
    } else if (dob.trim().length === 0) {
      alert("Please Enter your Date of Birth.");
    } else if ((new Date().getFullYear()-new Date(dob).getFullYear()) < 5) {
      alert("Please Enter a valid date of birth. You age should be >= 5 years.");
    } else if (address.trim().length === 0) {
      alert("Please Enter an address.");
    } else if (role.trim().length === 0 || role.trim().length < 4) {
      alert("Please Enter role as \"user\" or leave blank.");
    } else {
      const data = new FormData();
      // add the data
      data.append("username", username.trim());
      data.append("email", email.trim());
      data.append("password", password);
      data.append("gender", gender.trim());
      data.append("phone", phone);
      data.append("dob", dob);
      data.append("address", address.trim());
      data.append("role", role.trim());

      // send the data to the API
      axios
        .post(url + "/user/addUser", data)
        .then((response) => {
          const result = response.data;
          if (result.status === "success") {
            alert("Sign Up successfully");
            history.push("/signin");
          } else {
            alert("Error while Sign Up!");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Error while Sign Up!");
        });
    }
  };

  return (
    <div style={{display:"flex"}}>
      <div className="container" style={{width:'50%',display: 'block'}}>
      <h1 className="title-header">Sign Up</h1>
      <div className="mb-3">
        <label htmlFor="">User Name*</label>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text" required
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Email*</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email" required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Password*</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password" required
          className="form-control"
        />
      </div>

      <label htmlFor="">Gender*</label><br/>

      <div
        class="form-check"
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >

        <input type="radio" value="Male" name="gender" /> Male
        <br />
        <input type="radio" value="Female" name="gender" /> Female
        <br />
        <input type="radio" value="Other" name="gender" /> Other
        <br />
      </div>
      <div className="mb-3">
        <label htmlFor="">Phone*</label>
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="number" required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">DOB*</label>
        <input
          onChange={(e) => {
            setdob(e.target.value);
          }}
          type="date" required
          defaultValue="2022-01-01"
          InputLabelProps={{
            shrink: true,
          }}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Address*</label>
        <input
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          type="text" required
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">role*</label>
        <input
          onChange={(e) => {
            setRole(e.target.value);
          }}
          type="text" required
          className="form-control"
        />
      </div>

      <div className="title-header">
        <button type="submit" onClick={addUserToDB} className="col-2 btn btn-m btn-success btn-outline-light bg-success">
          Register
        </button>
&nbsp;&nbsp;
        <button type="button" onClick={history.goBack} className="col-2 btn btn-m btn-danger btn-outline-light bg-danger">
          Back
        </button>
      </div>
      </div>
    </div>
  );
};
export default SignUp;