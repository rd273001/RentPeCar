import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { url } from "../../../Commons/constants";
import React from "react";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let flag = "false";
  const history = useHistory();

  const CheckRole = (role) => {
    if (role === "user") {
      history.push("/car_list");
      } else if (role === "admin") {
      history.push("admin_dashboard");
    } else {
      history.push("employee_dashboard");
    }
  };
  const validUser = () => {
    if (email.length === 0) {
      alert("Enter your email");
    } else if (password.length === 0) {
      alert("Enter your password");
    } else {
    
      const data = { // java scrip obj
        email: email,
        password: password,
      };

      axios.post(url + "/user/authenticate", data).then((response) => {
        const result = response.data;
        console.log(result.status);
        console.log(result);
        if (result.status === "success") {
          alert("login Successfully");
          flag = "true";
          CheckRole(result.data.role);
          sessionStorage.setItem("isActive", flag);
          sessionStorage.setItem("user", JSON.stringify(result));
        } else {
          alert("Invalid usename or password");
        }
      });
    }
  };
  return (

    
    <div className="text-center">
      <main class="form-signin" style={{ marginTop: "150px"}}>
        <i class="fas fa-user"></i>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating">


        <div className="form-floating">
        Can't Remember Password, Click<Link to="/reset_password">here </Link> to reset your password.
        </div>
        </div>
        <button className="w-100 btn btn-primary" onClick={validUser}>
          Log In
        </button>
        
        <div className="form-floating">
          Not a User, <Link to="/register">Register</Link> here.
        </div>

      
        <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
      </main>
    </div>
  );
};

export default Login;
