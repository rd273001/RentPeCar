import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Logout = () => {
  const history = useHistory();
  const handleLogout=()=>{
    window.sessionStorage.removeItem('user')
    window.sessionStorage.removeItem('isActive')
    history.push('/')
  };

  return (
    <div class="container">
      <br />
      <h4 class="align-items-center d-flex justify-content-center">
        Want to Logout
      </h4>
      <br />
      <div class="card">
        <div class="card-header">Logout...</div>
        <div class="card-body">
          <h5 class="card-title align-items-center d-flex justify-content-center">
            Click Here to Logout
          </h5>
          <br />
          
          <a
            href="#"
            class="btn btn-primary align-items-center d-flex justify-content-center"
            onClick={handleLogout}
          >Logout
            
          </a>
        </div>
      </div>
      <br />
      <br />
      <h5 class="align-items-center d-flex justify-content-center">
        Thank You.....!!!
      </h5>
    </div>
  );
};

export default Logout;
