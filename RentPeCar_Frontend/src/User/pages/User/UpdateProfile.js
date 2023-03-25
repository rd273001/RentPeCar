import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { url } from "../../../Commons/constants";

const UpdateProfile = () => {
  // get the history object
  const history = useHistory();
  let user = JSON.parse(sessionStorage.getItem("user"));

  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const addUserToDB = () => {
    if (phone.length === 0) {
      setPhone(user.data.phone);
    } else if (address.length === 0) {
      setAddress(user.data.address);
    } else if (username.length === 0) {
      setUserName(user.data.username);
    } else {
      const data = new FormData();
      // add the data
      data.append("username", username);

      data.append("phone", phone);

      data.append("address", address);
      // send the data to the API
      axios
        .put(url + "/user/updateProfile/" + user.data.userid, data)
        .then((response) => {
          const result = response.data;
          if (result.status === "success") {
            alert("Profile updated  Successfully");

            history.goBack();
          } else {
            alert("Error while updating");
          }
        });
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="container" style={{ width: "50%", display: "block" }}>
        <h1 className="title-header">Update Profile</h1>
        <div className="mb-3">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => {
              setUserName(event.target.value);
              console.log(event.target.value);
            }}
            placeholder={user.data.username}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Phone</label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder={user.data.phone}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Address</label>
          <input
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder={user.data.address}
          />
        </div>

        <div className="mb-3">
          <button
            onClick={addUserToDB}
            className="col-2 btn btn-sm btn-success"
          >
            Update
          </button>
          &nbsp;&nbsp;
          <button
            onClick={history.goBack}
            className="col-2 btn  btn-sm btn-warning"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default UpdateProfile;
